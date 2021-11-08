let addBook = document.querySelector('.addbook');
let imag = document.createElement('img');
imag.setAttribute('src','/foto/add.png');
imag.setAttribute('alt','addlogo');
addBook.setAttribute('style','width:200px;height:200px;border:solid 2px #C8C6C6;display:flex;justify-content: center;margin-top: 20px;flex-direction: column;align-items: center;')
imag.setAttribute('style','width:150px;height:150px;margin-bottom: 10px;')
addBook.appendChild(imag);
let addbtn = document.createElement('button');
addbtn.textContent='Add Book'
addBook.appendChild(addbtn);
addbtn.setAttribute('class','btnaddbook');
let dialog = document.querySelector('.addbook dialog');
console.log(dialog);
addbtn.addEventListener('click',function clickAddbook()
{
    dialog.setAttribute('open',true)
})
let closbtn = document.querySelector('.addbook .close')
console.log(closbtn);
closbtn.addEventListener('click',function clickclosbtn()
{
    dialog.removeAttribute('open');
})
// *********exit with Esc************
document.onkeydown = (event) =>
{
    if(event.keyCode === 27)
    {
        dialog.removeAttribute('open');
    }
}
// **************moveable dialog Box*******************
let mousePosition;
let offset = [0,0];
let isDown = false;
let div = document.getElementById('move')
div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
//**********************/ resizable**********************
let resizeHandle = document.getElementById('resizable');
let box = document.getElementById('move');
resizeHandle.addEventListener('mousedown', initialiseResize, false);
function initialiseResize(e) {

  window.addEventListener('mousemove', startResizing, false);
  window.addEventListener('mouseup', stopResizing, false);
}
function stopResizing(e) {

  window.removeEventListener('mousemove', startResizing, false);
  window.removeEventListener('mouseup', stopResizing, false);
}
function startResizing(e) {

  box.style.width = (e.clientX) + 'px';
  box.style.height = (e.clientY) + 'px';
}
function startResizing(e) {

  box.style.width = (e.clientX - box.offsetLeft) + 'px';
  box.style.height = (e.clientY - box.offsetTop) + 'px';
}