window.onscroll = function() {colorChange()};

function colorChange() {
    const nav = document.getElementById('nav');
    const tags = document.querySelectorAll('.cybr-btn__tag');
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let width = document.documentElement.clientWidth;


    if (scrolled <= 15 || width < 1183) {
        nav.style.backgroundColor = 'rgb(255, 255, 0)'
        tags.forEach(tag => {
            tag.style.color = 'rgb(0,0,0)'
        })
    } else if (scrolled <= 17) {
        nav.style.backgroundColor = 'rgb(245, 233, 4)'
        tags.forEach(tag => {
            tag.style.color = 'rgb(26,26,26)'
        })
    }   else if (scrolled <= 19) {
        nav.style.backgroundColor = 'rgb(234, 212, 8)'
        tags.forEach(tag => {
            tag.style.color = 'rgb(52,52,52)'
        })
    }   else if (scrolled <= 21) {
        nav.style.backgroundColor = 'rgb(223, 190, 12)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(78,78,78)'
        })
    } else if (scrolled <= 23) {
        nav.style.backgroundColor = 'rgb(213, 169, 16)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(104,104,104)'
        })
    } else if (scrolled <= 25) {
        nav.style.backgroundColor = 'rgb(202, 147, 20)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(130,130,130)'
        })
    } else if (scrolled <= 27) {
        nav.style.backgroundColor = 'rgb(192, 125, 23)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(156,156,156)'
        })
    } else if (scrolled <= 29) {
        nav.style.backgroundColor = 'rgb(181, 104, 27)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(182,182,182)'
        })
    } else if (scrolled <= 31) {
        nav.style.backgroundColor = 'rgb(170, 82, 31)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(208,208,208)'
        })
    } else if (scrolled <= 33) {
        nav.style.backgroundColor = 'rgb(160, 61, 35)'
                tags.forEach(tag => {
            tag.style.color = 'rgb(234,234,234)'
        })
    } else {
        nav.style.backgroundColor = 'rgb(151, 39, 39)'
        tags.forEach(tag => {
            tag.style.color = 'rgb(255,255,255)'
        })
    }
}


