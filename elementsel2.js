
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('movetext');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');
let btn = document.getElementById('btn');

    // Button
let btn2 = document.getElementById('btn');
let sec = document.getElementById('sec');
let sectext = document.getElementById('sectext');
let maintext =  document.getElementById('maintext');
let footer = document.getElementById('the-footer');
let box2 = document.getElementById('box2');
let no = 1;


window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    moon.style.top = value * 0.89 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1.5 + 'px';
    header.style.top = value * 1.00 + 'px';
    btn.style.top = value * 1.00 + 'px';
});

// Button

function darkWhite(){if (no == 1) {
    function black() {
        sec.style.background = '#f3e3f3';
        footer.style.background = '#FFC3EF';
        maintext.style.color = '#3a0366';
        sectext.style.color = '#8d0799';
        box2.style.color = '#CE2CFD';
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    no = 2;
    black();
}else{
    function white() {
    sec.style.background = '#1c0522';
    footer.style.background = '#000000';
    maintext.style.color = '#ae4bff';
    sectext.style.color = '#fff';
    box2.style.color = '#2c2c2c';
    btn.innerHTML = '<i class="fa-regular fa-moon"></i>';
}
    no = 1;
    white();
}
}




