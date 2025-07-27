document.addEventListener('DOMContentLoaded', function() {
    // Create the navigation HTML with relative paths adjusted for subdirectories
    const navHTML = `
        <nav>
            <a href="../index.html">home</a>
            <!-- <a href="../writings.html">writings</a> -->
            <a href="../poems.html">poems</a>
            <a href="../photos.html">photos</a>
            <a href="../portfolio.html">portfolio</a>
            <a href="../contact.html">contact</a>
        </nav>
    `;
    
    // Insert the navigation into the header
    document.querySelector('header').innerHTML = navHTML;
});