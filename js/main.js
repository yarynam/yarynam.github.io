const dataviz = document.getElementById('dataviz');
const notebooks = document.getElementById('notebooks');
const awards = document.getElementById('awards');
const btns = document.querySelectorAll('.list-item');


notebooks.addEventListener('click', (ev) => {
  colorBts(ev);
  document.querySelector('.dataviz-grid').style.opacity = 0;
  document.querySelector('.dataviz-grid').style.zIndex = -1;
  document.querySelector('.notebooks-grid').style.opacity = 1;
  document.querySelector('.notebooks-grid').style.zIndex = 1;
  document.querySelector('.awards').style.opacity = 0;
});

dataviz.addEventListener('click', (ev) => {
  colorBts(ev);
  document.querySelector('.dataviz-grid').style.opacity = 1;
  document.querySelector('.dataviz-grid').style.zIndex = 1;
  document.querySelector('.notebooks-grid').style.opacity = 0;
  document.querySelector('.notebooks-grid').style.zIndex = -1;
  document.querySelector('.awards').style.opacity = 0;
});

 awards.addEventListener('click', (ev) => {
  colorBts(ev);
  document.querySelector('.dataviz-grid').style.opacity = 0;
  document.querySelector('.dataviz-grid').style.zIndex = -1;
  document.querySelector('.notebooks-grid').style.opacity = 0;
  document.querySelector('.notebooks-grid').style.zIndex = -1;
  document.querySelector('.awards').style.opacity = 1;
});


function colorBts(ev) {
  Array.prototype.forEach.call(btns, function(el, i){
    el.classList.remove('list-item--current');
  });
  ev.srcElement.classList.add('list-item--current');
  ev.preventDefault();
}
