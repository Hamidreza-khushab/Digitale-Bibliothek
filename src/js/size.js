let dw = window.innerWidth;
let dh = window.innerHeight;
console.log('screenW:',dw , 'screenH:',dh);
if (dh <= dw)
{
    originalHeight = Math.round(dh/5);
    originalWidth  = originalHeight;
} 
else
{
    originalWidth = Math.round(dw/10);
    originalHeight = originalWidth
}
// document.querySelector('.logo img').setAttribute('style',`width:${originalWidth}px; height:${originalHeight}px;`)
