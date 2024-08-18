const content = [
    'README',
    'pictures'
];

const search = document.getElementById('search');
const list = document.getElementById('list');
const menu = document.getElementById('menu');

let mark = 0;
let selected = 0;

let up = false;
let down = false;
let past = search.value;

function display(items){
    list.innerHTML = '';
    
    let max = 10;
    if(items.length < max){
        max = items.length;
    }

    if(down){
        if(selected == max-1){
            if(mark < (items.length - max)){
                mark++;
            }
        } else{
            selected++;
        }
        down = false;
    }
    if(up){
        if(selected == 0){
            if(mark > 0){
                mark--;
            }
        } else{
            selected--;
        }
        up = false;
    }

    items.slice(mark, mark+max).forEach((item, index)=>{
        const entry = document.createElement('div');
        entry.classList.add('item');
        entry.textContent = item;

        if (index == selected) {
            entry.classList.add('highlight');
        }

        list.appendChild(entry);
    });
}

function keydown(event){
    switch(event.key){
        case 'ArrowDown':
            event.preventDefault();
            down = true;
            update();
            break;
        case 'ArrowUp':
            event.preventDefault();
            up = true;
            update();
            break;
        case 'Enter':
            menu.classList.add('fadeout');
            setTimeout(function() {
                window.location.href = content[mark+selected] + '.html';
            }, 500);
            break;
        default:
            return;
    }
}

function update(){
    if (search.value !== past){
        past = search.value;
        mark = 0;
        selected = 0;
    }
    if(search.value){
        const filterate = content.filter(item =>
            item.toLowerCase().startsWith(search.value.toLowerCase())
        );
        length = filterate.length;
        display(filterate);
    } else{
        length = content.length;
        display(content);
    }
}

document.addEventListener('DOMContentLoaded', update);
search.addEventListener('input', update);
document.addEventListener('keydown', keydown);
