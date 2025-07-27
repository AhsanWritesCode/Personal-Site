document.addEventListener('DOMContentLoaded', function() {
    // Get the current path to determine which nav item should be active
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop() || 'index.html';
    
    // Create the navigation HTML
    const navHTML = `
        <nav>
            <a href="/" ${pageName === 'index.html' || pageName === '' ? 'class="active"' : ''}>home</a>
            <!-- <a href="writings.html" ${pageName === 'writings.html' ? 'class="active"' : ''}>writings</a> -->
            <a href="poems.html" ${pageName === 'poems.html' ? 'class="active"' : ''}>poems</a>
            <a href="photos.html" ${pageName === 'photos.html' ? 'class="active"' : ''}>photos</a>
            <a href="portfolio.html" ${pageName === 'portfolio.html' ? 'class="active"' : ''}>portfolio</a>
            <a href="contact.html" ${pageName === 'contact.html' ? 'class="active"' : ''}>contact</a>
        </nav>
    `;
    
    // Insert the navigation into all header elements
    document.querySelector('header').innerHTML = navHTML;
});