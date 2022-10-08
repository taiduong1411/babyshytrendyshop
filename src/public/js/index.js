

$('.btn-change-dark').click(function() {
    localStorage.setItem('theme', 'dark-mode-main');
    
    let theme = localStorage.getItem('theme');
    $('body').addClass(theme);
    $('.header-main').addClass(theme);
})

$('.btn-change-light').click(function() {
    let theme = localStorage.getItem('theme');
    $('body').removeClass(theme);
    $('.header-main').removeClass(theme);
    localStorage.setItem('theme', 'light');
    
})

$(document).ready(function() {
    let theme = localStorage.getItem('theme');
    // alert(theme)
    $('body').addClass(theme);
    $('.header-main').addClass(theme);
})  