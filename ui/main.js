console.log('Loaded!');
//Movinf the image
var img=document.getElementById('madi');

img.onClick=function()
{
    img.style.marginleft='100px';
}
var button=document.getElementById('counter');
button.onClick=function()
{
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTLM=counter.toString();
}