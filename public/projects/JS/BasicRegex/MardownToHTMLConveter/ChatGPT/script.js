// Get DOM elements
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

// Main conversion function
function convertMarkdown() {
	// Get the input value from the textarea
	let markdown = markdownInput.value;

	// Convert headings (must be at the beginning of line)
	// Heading level 3 (### )
	markdown = markdown.replace(/^### (.+)$/gm, '<h3>$1</h3>');

	// Heading level 2 (## )
	markdown = markdown.replace(/^## (.+)$/gm, '<h2>$1</h2>');

	// Heading level 1 (# )
	markdown = markdown.replace(/^# (.+)$/gm, '<h1>$1</h1>');

	// Convert images ![alt](src)
	markdown = markdown.replace(
		/!\[([^\]]*)\]\(([^\)]+)\)/g,
		'<img alt="$1" src="$2">',
	);

	// Convert links [text](url)
	markdown = markdown.replace(
		/\[([^\]]+)\]\(([^\)]+)\)/g,
		'<a href="$2">$1</a>',
	);

	// Convert bold text with ** or __
	markdown = markdown.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
	markdown = markdown.replace(/__(.+?)__/g, '<strong>$1</strong>');

	// Convert italic text with * or _
	markdown = markdown.replace(/\*(.+?)\*/g, '<em>$1</em>');
	markdown = markdown.replace(/_(.+?)_/g, '<em>$1</em>');

	// Convert blockquotes (must be at the beginning of line)
	markdown = markdown.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

	// Return the converted HTML
	return markdown;
}

// Event listener for input changes
markdownInput.addEventListener('input', function () {
	// Get the converted HTML
	const html = convertMarkdown();

	// Display raw HTML in the html-output div
	htmlOutput.textContent = html;

	// Render HTML in the preview div
	preview.innerHTML = html;
});
