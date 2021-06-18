
let passToggler = document.querySelectorAll('.pass-toggler');

passToggler.forEach(function(item, index) {
    passToggler[index].addEventListener("click", toggle_pass, false);
});

function toggle_pass(event){
    if(event.target.closest('.pass-toggler').classList.contains('active')){
        event.target.closest('.pass-toggler').classList.remove('active');
        event.target.closest('.form-group').querySelector('input').setAttribute('type', 'password');
    }else{
        event.target.closest('.pass-toggler').classList.add('active');
        event.target.closest('.form-group').querySelector('input').setAttribute('type', 'text');
    }
}


let menuToggler = document.querySelector('.cabinet-burger');
menuToggler.addEventListener("click", toggleMenu, false);

function toggleMenu(){
    document.querySelector('.cabinet_nav').classList.toggle('active');
}