const rawHTML = document.querySelector('#html-output');
const realHTML = document.querySelector('#preview');
const markdownInput = document.querySelector('#markdown-input');

function convertMarkdown() {
	let markdownValue = markdownInput.value;
	markdownValue = markdownValue.replace(/^### (.+)$/gm, '<h3>$1</h3>');
	markdownValue = markdownValue.replace(/^## (.+)$/gm, '<h2>$1</h2>');
	markdownValue = markdownValue.replace(/^# (.+)$/gm, '<h1>$1</h1>');
	markdownValue = markdownValue.replace(
		/\*\*(.*?)\*\*/gm,
		'<strong>$1</strong>',
	);
	markdownValue = markdownValue.replace(/\*(.*?)\*/gm, '<em>$1</em>');
	markdownValue = markdownValue.replace(/__(.*?)__/gm, '<strong>$1</strong>');
	markdownValue = markdownValue.replace(/_(.*?)_/gm, '<em>$1</em>');
	markdownValue = markdownValue.replace(
		/!\[(.*?)\]\((.*?)\)/gm,
		'<img alt="$1" src="$2">',
	);
	markdownValue = markdownValue.replace(
		/\[(.*?)\]\((.*?)\)/gm,
		'<a href="$1">"$2"</a>',
	);

	markdownValue = markdownValue.replace(
		/> (.*)/gm,
		'<blockquote>$1</blockquote>',
	);
	return markdownValue;
}

markdownInput.addEventListener('input', () => {
	let html = convertMarkdown();

	realHTML.textContent = html;

	rawHTML.innerHTML = html;
});
