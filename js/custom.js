(function(d){
    var menubutton = d.getElementById('menubutton');
    var menu = d.getElementById('menu');
    menubutton.addEventListener('click', function(){
        menu.classList.toggle('visible');
    });
})(document);
