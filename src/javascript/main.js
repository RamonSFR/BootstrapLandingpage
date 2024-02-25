$(document).ready(() => {
    $('#tel').mask('(00) 00000-0000', { placeholder: '(__) ____-____' });
    
    ScrollReveal().reveal('.home-text', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.first-card', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.review-img', {
        origin: 'top',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.review-card', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })
});