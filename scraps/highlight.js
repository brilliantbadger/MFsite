document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text');
    const color = 'gray';

    function highlight(subject) {
        text.innerHTML = text.innerHTML.replace(subject, `<span style="color: ${color}">${subject}</span>`);
    }

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            highlight('Enter');
        }
    });
});