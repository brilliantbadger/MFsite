const content = [
    'projects',
    'aboutme',
    'contactme',
];
content.sort();

const search = document.getElementById('search');
const list = document.getElementById('list');
const max = 10;

function display(items) {
    list.innerHTML = '';
    items.slice(0, max).forEach((item, index) => {
        const entry = document.createElement('div');
        entry.classList.add('item');
        entry.textContent = item;

        if (index === 0) {
            entry.classList.add('highlight');
        }

        //entry.addEventListener('click', () => {
        //    searchBox.value = item;
        //    list.innerHTML = '';
        //});

        list.appendChild(entry);
    });
}

function update() {
    const input = search.value.toLowerCase();

    if (input) {
        const filterate = content.filter(item =>
            item.toLowerCase().startsWith(input)
        );
        display(filterate);
    } else {
        display(content);
    }
}

search.addEventListener('input', update);
document.addEventListener('DOMContentLoaded', () => {
    update();
});