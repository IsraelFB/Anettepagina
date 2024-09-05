let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let hire = document.querySelector('#hire');
let linkedin = document.querySelector('#linkedin');
hire.onclick = () => {
    window.alert("Ya esta contratada lo siento<3")
}
linkedin.onclick = () => {
    window.alert("....Pronto,pronto....se vienen cositas.")
}


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navlinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the current section's link
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}