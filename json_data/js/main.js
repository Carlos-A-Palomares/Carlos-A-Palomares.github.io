document.addEventListener('DOMContentLoaded', function () {
    fetch('https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json')
        .then(response => response.json())
        .then(data => {

            const countElement = document.getElementById('spaceCount');
            if (countElement) {
                countElement.textContent = `Humans in Space Right Now: ${data.number}`;
            } else {
                console.error('Count element not found'); 
            }

            const contentDiv = document.getElementById('content');
            let rowDiv;

            data.people.forEach((person, index) => {
                if (index % 4 === 0) {  
                    rowDiv = document.createElement('div');
                    rowDiv.className = 'row';
                    contentDiv.appendChild(rowDiv);
                }


                const section = document.createElement('section');
                section.innerHTML = `
                    <img src="${person.image}" alt="Photo of ${person.name}" class="astronaut-img">
                    <div class="astronaut-details">
                        <h2 class="astronaut-name">${person.name}</h2>
                        <p class="astronaut-craft">Craft: ${person.spacecraft}</p>
                        <a href="${person.url}" target="_blank">More about ${person.name}</a>
                    </div>
                `;
                rowDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
