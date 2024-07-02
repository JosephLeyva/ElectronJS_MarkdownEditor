// Importing Modules
const { marked } = require('marked');

// DOM Elements
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

// Functions
const renderToMarkdown = (markdown) => {
    htmlView.innerHTML = marked(markdown, { sanitize: true });
};

// Event Listeners
markdownView.addEventListener('keyup', (e) => {
    const currentContent = e.target.value;
    renderToMarkdown(currentContent);
});