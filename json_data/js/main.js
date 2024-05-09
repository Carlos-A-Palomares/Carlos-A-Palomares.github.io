document.addEventListener('DOMContentLoaded', function () {
    fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            let rowDiv;

            data.people.forEach((person, index) => {
                if (index % 4 === 0) {
                    rowDiv = document.createElement('div');
                    rowDiv.className = 'row';
                    contentDiv.appendChild(rowDiv);
                }

                fetchWikiImage(person.name).then(imageUrl => {
                    fetchWikiPageURL(person.name).then(wikiUrl => {
                        const section = document.createElement('section');
                        section.innerHTML = `
                            <img src="${imageUrl}" alt="Photo of ${person.name}" class="astronaut-img">
                            <div class="astronaut-details">
                                <h2 class="astronaut-name">${person.name}</h2>
                                <p class="astronaut-craft">Craft: ${person.craft}</p>
                                <a href="${wikiUrl}" target="_blank">More about ${person.name}</a>

                            </div>
                        `;
                        rowDiv.appendChild(section);
                    });
                });
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});



function fetchWikiImage(astronautName) {
    const endpoint = `https://en.wikipedia.org/w/api.php`;
    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        prop: "pageimages",
        pithumbsize: 300,
        titles: astronautName
    });

    return fetch(`${endpoint}?${params.toString()}`)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            if (page.thumbnail && page.thumbnail.source) {
                return page.thumbnail.source;
            } else {
                return 'default-placeholder.png';
            }
        })
        .catch(error => {
            console.error('Error fetching Wikipedia image:', error);
            return 'default-placeholder.png';
        });
}

function fetchWikiPageURL(astronautName) {
    const endpoint = `https://en.wikipedia.org/w/api.php`;
    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",  
        prop: "info",  
        inprop: "url",  
        titles: astronautName  
    });

    return fetch(`${endpoint}?${params.toString()}`)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            return page.fullurl;  
        })
        .catch(error => {
            console.error('Error fetching Wikipedia page URL:', error);
            return "#";  
        });
}
