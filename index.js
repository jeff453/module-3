const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

var cv = document.getElementById('planet');
var ctx = cv.getContext('2d');
cv.width = 350;
cv.height = 400;

var centerX = 200, centerY = 200;

var Mars = new Image();
Mars.onload = function() {
	drawMars(0);
};
Mars.src = 'https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png';


function drawMars(angle) {
  ctx.clearRect(0, 0, cv.width, cv.height);
	ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-Math.PI / 2);  
  ctx.rotate(angle);
	ctx.drawImage(Mars, -Mars.width / 2, -Mars.height / 2);
  ctx.restore();
}

document.onmousemove = function(e) {
  var dx = e.pageX - centerX;
  var dy = e.pageY - centerY;
  var theta = Math.atan2(dy, dx);
	drawMars(theta);

};


var container = document.getElementById('containerTwo');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 + windowHeight;
var square1 = document.getElementById('planet');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  
  square1.style.left = 2200 - scrollPercent*window.innerWidth*0.5 + 'px';
  square1.style.top = 100 + scrollPercent*window.innerWidth + 'px';
  square1.style.height = scrollPercent*window.innerWidth*0.3 + 'px';
  square1.style.width = scrollPercent*window.innerWidth*0.3 + 'px';
  

});

