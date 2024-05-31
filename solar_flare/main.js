const apiKey = 'UxjEnfpboVpIKkgbyBqIiWQnXUFpnxK1aPsG75QL';

let currentIndex = 0;
const imagesPerPage = 4;
let images = [];

const formatDate = (date) => {
    const options = { year: '2-digit', month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};


const endDate = new Date();
const startDate = new Date();
startDate.setDate(endDate.getDate() - 30);


const fetchSolarFlareData = async () => {
    const apiUrl = `https://api.nasa.gov/DONKI/FLR?startDate=${startDate.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching solar flare data:', error);
    }
};

const plotSolarFlareData = async () => {
    const data = await fetchSolarFlareData();
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
            dateDetails[date].push(`Class: ${event.classType}, Location: ${event.sourceLocation}, Peak Time: ${event.peakTime}`);
        }
    });

    const dates = Object.keys(dateCounts);
    const counts = dates.map(date => dateCounts[date]);
    const details = dates.map(date => dateDetails[date].join('<br>'));

    const trace = {
        x: dates,
        y: counts,
        mode: 'lines+markers',
        type: 'scatter',
        text: details,
        hoverinfo: 'text',
        marker: { size: 6 },
        line: { shape: 'linear' }
    };

    const plotData = [trace];

    const layout = {
        title: '',
        xaxis: {
            title: 'Date',
            tickmode: 'array',
            tickvals: dates,
            ticktext: dates,
            tickangle: -45,
            automargin: true
        },
        yaxis: {
            title: 'Number of Solar Flares'
        }
    };

    Plotly.newPlot('graph-container', plotData, layout);
};


const displayLatestFlares = async () => {
    const data = await fetchSolarFlareData();
    const latestFlaresGrid = document.getElementById('latest-flares-grid');
    if (!data || data.length === 0) {
        latestFlaresGrid.innerHTML = '<p>No recent solar flares available.</p>';
        return;
    }


    data.sort((a, b) => new Date(b.peakTime) - new Date(a.peakTime));


    data.slice(0, 10).forEach(event => {
        const flareItem = document.createElement('div');
        flareItem.className = 'flare-item';
        flareItem.innerHTML = `
            <h3>${formatDate(new Date(event.peakTime))}</h3>
            <p>Class: ${event.classType}</p>
            <p>Location: ${event.sourceLocation}</p>
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

    const start = currentIndex * imagesPerPage;
    const end = start + imagesPerPage;
    const currentImages = images.slice(start, end);

    currentImages.forEach(image => {
        const imgUrl = image.links[0].href;
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = 'Solar Flare';
        imgElement.onclick = () => toggleEnlarge(imgElement);
        galleryImages.appendChild(imgElement);
    });
};

const toggleEnlarge = (imgElement) => {
    imgElement.classList.toggle('enlarged');
};

const nextImages = () => {
    if ((currentIndex + 1) * imagesPerPage < images.length) {
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

document.addEventListener('DOMContentLoaded', fetchSolarFlareImages);


plotSolarFlareData();
displayLatestFlares();
