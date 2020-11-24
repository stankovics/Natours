eventListeners();

// event listener
function eventListeners(){
    const ui = new UI()
    const menuItems = document.querySelectorAll('.navigation__link');
    menuItems.forEach(function(item){
        item.addEventListener('click', function(event){
            ui.closeNav(event)
        })
    })
}
// constructor function

function UI() {
    UI.prototype.closeNav = function() {
        const navBgd = document.querySelector('.navigation');
        navBgd.classList.remove('navigation__background');
    }
}