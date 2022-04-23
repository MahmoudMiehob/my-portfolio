var typed = new Typed(".auto-input", {
    strings: ["Software Engineer", "Fullstack developer"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});




new WOW().init();


$('body').bind('copy paste cut drag drop', function (e) {
    e.preventDefault();
});
//courtesy of BoogieJack.com
function killCopy(e) {
    return false
}
function reEnable() {
    return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
    document.onmousedown = killCopy
    document.onclick = reEnable
}

