const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    const words = paragraph.textContent.split(' ');
    const formattedWords = words.map(word => {
        if (word.length > 1) {
            // const halfLength = Math.ceil(word.length / 2);
            return `<b>${word.slice(0, 1)}</b>${word.slice(1)}`;
        }
        return word;
    });
    paragraph.innerHTML = formattedWords.join(' ');
});
