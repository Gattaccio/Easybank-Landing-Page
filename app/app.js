let mobilemenu = document.querySelector('.mobilemenu');
let menunav = document.querySelector('.navbar');

mobilemenu.addEventListener('click', () => {
    menunav.classList.toggle('close');
})

window.onscroll = () =>{
    menunav.classList.add('close');
}