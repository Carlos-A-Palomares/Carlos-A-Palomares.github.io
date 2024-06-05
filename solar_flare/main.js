const apiKey = 'UxjEnfpboVpIKkgbyBqIiWQnXUFpnxK1aPsG75QL';

let currentIndex = 0;
let images = [];

const formatDate = (date) => {
    const options = { year: '2-digit', month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const fetchSolarFlareData = async (startDate, endDate) => {
    const apiUrl = `https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching solar flare data:', error);
    }
};

const plotSolarFlareData = async () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    const endDate = new Date();

    const data = await fetchSolarFlareData(startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0]);
    if (!data || data.length === 0) {
        document.getElementById('graph-container').innerHTML = '<p>No solar flare data available for the selected period.</p>';
        return;
    }

    const dateCounts = {};
    const dateDetails = {};
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const formattedDate = formatDate(d);
        dateCounts[formattedDate] = 0;
        dateDetails[formattedDate] = [];
    }

    data.forEach(event => {
        const date = formatDate(new Date(event.peakTime));
        if (dateCounts[date] !== undefined) {
            dateCounts[date]++;
            dateDetails[date].push({ classType: event.classType, peakTime: new Date(event.peakTime).toLocaleTimeString() });
        }
    });

    const dates = Object.keys(dateCounts);
    const counts = dates.map(date => dateCounts[date]);
    const details = dates.map(date => dateDetails[date]);

    const trace = {
        x: dates,
        y: counts,
        mode: 'lines+markers',
        type: 'scatter',
        text: details.map(detail => detail.map(d => `Class: ${d.classType}, Peak Time: ${d.peakTime}`).join('<br>')),
        hoverinfo: 'x+y',
        marker: { size: 6, color: 'red' },
        line: { shape: 'linear', color: 'red' }
    };

    const plotData = [trace];

    const layout = {
        title: '',
        paper_bgcolor: 'black',
        plot_bgcolor: 'black',
        xaxis: {
            title: 'Date',
            tickmode: 'array',
            tickvals: dates,
            ticktext: dates,
            tickangle: -45,
            automargin: true,
            color: 'white',
            gridcolor: 'white'
        },
        yaxis: {
            title: 'Number of Solar Flares',
            color: 'white',
            gridcolor: 'white'
        },
        font: {
            color: 'white'
        }
    };

    Plotly.newPlot('graph-container', plotData, layout);

    document.getElementById('graph-container').on('plotly_hover', function(data) {
        const point = data.points[0];
        const date = point.x;
        const count = point.y;
        const details = point.text.split('<br>');

        document.getElementById('hover-date').textContent = date;
        document.getElementById('hover-count').textContent = count;
        
        const tbody = document.getElementById('hover-table').querySelector('tbody');
        tbody.innerHTML = '';
        details.forEach(detail => {
            const [classType, peakTime] = detail.split(', Peak Time: ');
            const tr = document.createElement('tr');
            const classTd = document.createElement('td');
            const peakTimeTd = document.createElement('td');
            classTd.innerHTML = classType;
            peakTimeTd.innerHTML = peakTime;
            tr.appendChild(classTd);
            tr.appendChild(peakTimeTd);
            tbody.appendChild(tr);
        });
    });
};

const displayLatestFlares = async () => {
    const today = new Date();
    const startDate = today.toISOString().split('T')[0];
    const endDate = today.toISOString().split('T')[0];

    const data = await fetchSolarFlareData(startDate, endDate);
    const latestFlaresGrid = document.getElementById('latest-flares-grid');
    if (!data || data.length === 0) {
        latestFlaresGrid.innerHTML = '<p>No solar flares available for today.</p>';
        return;
    }

    data.forEach(event => {
        const flareItem = document.createElement('div');
        flareItem.className = 'flare-item';
        flareItem.innerHTML = `
            <h3>${formatDate(new Date(event.peakTime))}</h3>
            <p>Class: ${event.classType}</p>
            <p>Peak Time: ${new Date(event.peakTime).toLocaleTimeString()}</p>
        `;
        latestFlaresGrid.appendChild(flareItem);
    });
};

const fetchSolarFlareImages = async () => {
    const apiUrl = `https://images-api.nasa.gov/search?q=solar%20flare&media_type=image`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        images = data.collection.items;
        displayImages();
    } catch (error) {
        console.error('Error fetching solar flare images:', error);
    }
};

const displayImages = () => {
    const galleryImages = document.getElementById('gallery-images');
    galleryImages.innerHTML = '';

    if (images.length > 0) {
        const imgUrl = images[currentIndex].links[0].href;
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = 'Solar Flare';
        galleryImages.appendChild(imgElement);
    }
};

const nextImages = () => {
    if ((currentIndex + 1) < images.length) {
        currentIndex++;
        displayImages();
    }
};

const prevImages = () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayImages();
    }
};

const fetchVideo = async () => {
    const videoUrl = 'https://svs.gsfc.nasa.gov/vis/a010000/a010100/a010109/10109_Solar_Flares_H264_960x720_29.97_Apple_TV.m4v';

    try {
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.innerHTML = `<source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.`;
        
        document.querySelector('.video-content').appendChild(videoElement);
        document.getElementById('message').textContent = 'Video loaded successfully.';
    } catch (error) {
        console.error('Error fetching video:', error);
        document.getElementById('message').textContent = 'Error fetching video.';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchSolarFlareImages();
    plotSolarFlareData();
    displayLatestFlares();
    fetchVideo();
});
