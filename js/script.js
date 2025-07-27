document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling only for hash navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load latest posts if we're on the home page
    const latestPostsSection = document.querySelector('.latest-posts');
    if (latestPostsSection) {
        loadLatestPosts();
    }
});

async function loadLatestPosts() {
    try {
        const response = await fetch('/data/posts.json');
        const data = await response.json();
        
        // Sort posts by date (newest first)
        const sortedPosts = data.posts.sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        // Take the latest 2 posts
        const latestPosts = sortedPosts.slice(0, 2);
        
        // Get the container for latest posts
        const postsContainer = document.querySelector('.latest-posts');
        
        // Clear existing posts
        const existingArticles = postsContainer.querySelectorAll('article');
        existingArticles.forEach(article => article.remove());

        // Add latest posts
        latestPosts.forEach(post => {
            const article = createPostElement(post);
            postsContainer.appendChild(article);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    article.innerHTML = `
        <h3>${post.title}</h3>
        <span class="date">${formattedDate}</span>
        <p>${post.preview}</p>
        <a href="${post.url}" class="read-more">Read more →</a>
    `;
    
    return article;
} 