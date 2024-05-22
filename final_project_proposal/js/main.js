const pages = [
    {
        title: "Title Slide",
        content: `
            <div class="centered-title">
                <h1>Mars Insight Portal Project Proposal</h1>
            </div>
        `
    },
    {
        title: "Project Overview",
        content: `
            <div class="project-wrapper">
                <h1>Project Overview: Mars Insight Portal</h1>
        
                <p>The Mars Insight Portal is a comprehensive web project designed to provide users with engaging and informative content about Mars. This portal will combine various data sources and multimedia elements to create an appealing platform for anyone interested in Mars exploration. The project includes four main components: a Mars Weather Dashboard, detailed rover profiles, a gallery of rover photos, and a section for the latest Mars-related news using the Twitter API.</p>
                
                <h3>Mars Weather Dashboard</h3>
                <p>The Mars Weather Dashboard will offer real-time weather data from Mars. Utilizing the Mars Weather API, the dashboard will display crucial metrics such as temperature, atmospheric pressure, and wind speed. It will also include interactive graphs and charts to help users visualize the weather conditions on Mars more effectively. Additionally, users will have the option to view historical weather data, with the ability to select different time periods, such as the last week or month. This feature aims to provide a comprehensive overview of Martian weather patterns and trends.</p>
                
                <h3>Rover Information</h3>
                <p>Another significant component of the Mars Insight Portal is the detailed profiles of the Mars rovers: Curiosity, Opportunity, and Spirit. Each rover profile will include a brief description of the rover’s mission and accomplishments, providing users with insights into the objectives and achievements of each mission. The profiles will also feature high-quality images of the rovers to enhance the visual appeal of the section. To offer more detailed information, links to NASA’s official webpages for each rover will be included, allowing users to explore further.</p>
                
                <h3>Photos from Rovers</h3>
                <p>The portal will include a gallery section showcasing the latest photos taken by the Mars rovers. The gallery will be designed using a grid or masonry layout, ensuring that the photos are presented in an organized and visually engaging manner. Each photo will include a caption with the date it was taken and the name of the rover, providing context for the images. This feature will allow users to view the latest visual updates from Mars, enhancing their understanding and interest in the planet.</p>
                
                <h3>Mars News Tweets</h3>
                <p>To keep users informed about the latest developments in Mars exploration, the Mars Insight Portal will feature a Mars News section that integrates the Twitter API. This section will display the latest tweets related to Mars from official NASA accounts and other relevant sources. The tweets will be filtered to show only Mars-specific news, ensuring that users receive the most relevant and up-to-date information. This feature will provide a dynamic and real-time aspect to the portal, keeping users engaged with the latest news from Mars.</p>
                
                <h3>Conclusion</h3>
                <p>Overall, the Mars Insight Portal aims to be a comprehensive resource for anyone interested in Mars. By offering real-time data, detailed information, captivating images, and the latest news, this project will engage and inform users about various aspects of Mars exploration. This project will also help refine web development skills by integrating APIs and creating an aesthetically pleasing and functional website.
                </p>
            </div>
        `
    },
    {
        title: "References",
        content: `
            <div class="ref-wrapper">
                <h2>References</h2>
                <p>
                    <strong>Websites:</strong>
                    <ul>
                        <li><a href="https://whoisinspace.com/" target="_blank" rel="noopener noreferrer">Who Is In Space?</a></li><br>
                        <li><a href="https://www.physics.utoronto.ca/~jharlow/weather/mars.html" target="_blank" rel="noopener noreferrer">Mars Weather Forecast</a></li><br>
                    </ul>
                    <strong>Example Project:</strong>
                    <ul>
                        <li><a href="https://carlos-a-palomares.github.io/json_data/" target="_blank" rel="noopener noreferrer">People in Space Project</a></li>
                    </ul>
                </p>
            </div>
        `
    },
    {
        title: "Code Sketch",
        content: `
            <div class="code-wrapper">
                <h2>Code Sketch</h2>
                <div class="sketch-content">
                    <div class="text-content">
                        <p>
                            <strong>Home Page:</strong>
                            <ul>
                                <li>Header with navigation links (Home, Weather, Rovers, Mars News)</li>
                                <li>Hero section with a striking image of Mars or a rover and a brief introduction to the site</li>
                            </ul>
                            <strong>Mars Weather Dashboard:</strong>
                            <ul>
                                <li>Real-time and weather data visualization</li>
                            </ul>
                            <strong>Photo Gallery:</strong>
                            <ul>
                                <li>Grid layout showcasing latest photos from Curiosity, Opportunity, Spirit rovers</li>
                            </ul>
                            <strong>Rover Profiles:</strong>
                            <ul>
                                <li>Sections for each rover with descriptions and links to NASA</li>
                            </ul>
                            <strong>Mars News Tweets:</strong>
                            <ul>
                                <li>Latest Mars-related tweets from Twitter API</li>
                            </ul>
                        </p>
                    </div>
                    <div class="image-content" id="sketch-image">
                        <!-- Images will be added dynamically here -->
                    </div>
                </div>
            </div>
        `,
        images: ['/final_project_proposal/images/html_sketch.png', '/final_project_proposal/images/js_sketch.png']  
    },
    {
        title: "Tech Stack Overview",
        content: `
            <div class="tech-wrapper">
                <h2>Tech Stack Overview</h2>
                <p>
                    <strong>Frontend:</strong>
                    <ul>
                        <li>React.js: For building the user interface and handling the dynamic components of the website.</li><br>
                        <li>Bootstrap: For responsive design and pre-built UI components.</li>
                    </ul>
                    <strong>APIs:</strong>
                    <ul>
                        <li>NASA APIs: Found on the <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API Directory</a></li><br>
                        <li>Mars Weather API: To fetch real-time and historical weather data from Mars.</li><br>
                        <li>NASA Rover Photos API: To retrieve the latest photos from the Curiosity, Opportunity, and Spirit rovers.</li><br>
                        <li>Twitter API: To fetch and display the latest Mars-related tweets from official NASA accounts and other relevant sources.</li><br>
                    </ul>
                    <strong>Content Management System:</strong>
                    <ul>
                        <li>WordPress: To manage and publish content easily.</li>
                    </ul>
                </p>
            </div>
        `
    }
];

let currentPage = 0;

function renderPage() {
    document.getElementById('content').innerHTML = pages[currentPage].content;
    if (currentPage === 3) { 
        const sketchImageDiv = document.getElementById('sketch-image');
        sketchImageDiv.innerHTML = ''; 
        pages[currentPage].images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath; 
            img.alt = 'Code Sketch';
            img.style.maxWidth = '450px'; 
            sketchImageDiv.appendChild(img);
        });
    }
    document.getElementById('prevButton').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('nextButton').style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPage();
});
