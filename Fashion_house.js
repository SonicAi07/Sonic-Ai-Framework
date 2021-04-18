const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



var output = '';

function order() {

    output = 'Your order will be delivered to your address soon....'
    alert(output);
    return false;
    window.location.href="";
}