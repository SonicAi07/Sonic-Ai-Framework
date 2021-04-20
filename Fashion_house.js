const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



var output = '';

function order() {

    output = 'Your order will be delivered to your address soon....'
    alert(output);
    window.location.href="https://sonicai07.github.io/Fashion-House/home.html";
    return false;
    
}

function hello() {
    alert('Rgistration Successful- Continue Shopping');
    window.location.href="https://sonicai07.github.io/Fashion-House/home.html";
    return false;
}