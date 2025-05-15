const div1 = document.getElementsByClassName('item-1'); 
const gridImg = document.getElementById('grid'); 
const gridGif = document.getElementById('grid-gif'); 
const flexImg = document.getElementById('flex');
const flexGif = document.getElementById('flex-gif');
const body = document.getElementsByTagName('body'); 

gridImg.addEventListener('mouseover', function(){
    gridImg.style.display = 'none';    
    gridGif.style.display = 'grid'; 
});

gridImg.addEventListener('mouseleave', function(){
    gridImg.style.display = 'grid';    
    gridGif.style.display = 'none';  
});

flexImg.addEventListener('mouseover', function(){
    flexImg.style.display = 'none';    
    flexGif.style.display = 'grid'; 
});

flexImg.addEventListener('mouseleave', function(){
    flexImg.style.display = 'grid';    
    flexGif.style.display = 'none';  
});

