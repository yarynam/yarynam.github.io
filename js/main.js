const gridDataviz = document.querySelector('.dataviz-grid');
const gridNotebook = document.querySelector('.notebooks-grid');
let msnry;

imagesLoaded(gridDataviz, function () {
    const msnry = new Masonry(gridDataviz, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});


imagesLoaded(gridNotebook, function () {
    const msnryNotebook = new Masonry(gridNotebook, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    gridNotebook.style.display = 'none';
});


// btns 
const dataviz = document.getElementById('dataviz');
const notebooks = document.getElementById('notebooks');
const awards = document.getElementById('awards');
const btns = document.querySelectorAll('.list-item');


notebooks.addEventListener('click', (ev) => {
    colorBts(ev);
    gridDataviz.style.display = 'none';
    gridNotebook.style.display = 'block';
    document.querySelector('.awards').style.display = 'none';
});

dataviz.addEventListener('click', (ev) => {
    colorBts(ev);
    gridDataviz.style.display = 'block';
    gridNotebook.style.display = 'none';
    document.querySelector('.awards').style.display = 'none';
});

awards.addEventListener('click', (ev) => {
    colorBts(ev);
    gridDataviz.style.display = 'none';
    gridNotebook.style.display = 'none';
    document.querySelector('.awards').style.display = 'block';
});


function colorBts(ev) {
    Array.prototype.forEach.call(btns, function (el, i) {
        el.classList.remove('list-item--current');
    });
    ev.srcElement.classList.add('list-item--current');
    ev.preventDefault();
}