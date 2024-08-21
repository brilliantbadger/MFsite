const sec1 = document.getElementById('col1');

const content = [
    'JPN_SU24',
    'wallpapers'
];

const JPN_SU24 = [
    'untitled.jpg'
]

const wallpapers = [
    'city.jpg',
    'coffee.jpg',
    'crop.jpg',
    'dwan.jpg',
    'drive.jpg',
    'evening.jpg',
    'hike1.jpg',
    'hike2.jpg',
    'love.jpg',
    'mountain.jpg',
    'romantic.jpg',
    'train.jpg',
    'vice.jpg',
];

function updateSec1(defaultDir, marked){

    switch(defaultDir){
        case true:
            const ghost = document.createElement('div');
            ghost.classList.add('item');
            ghost.classList.add('selected');
            ghost.textContent = 'pictures'

            sec1.appendChild(ghost);
            break;
        case false:
            content.forEach((item, index)=>{
                const ghost = document.createElement('div');
                ghost.classList.add('item');
                ghost.textContent = item;

                if(index==marked){
                    ghost.classList.add('selected');
                }

                sec1.appendChild(ghost);
            });
            break;
        default:
            return;
    }
}

function update(){
    updateSec1(false, 0);
}

document.addEventListener('DOMContentLoaded', update);
