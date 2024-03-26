document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.home-link');
    var offset = 20; // Initial offset
    
    links.forEach(function(link) {
        link.style.top = offset + "px";
        offset += link.offsetHeight + 20;
    });
});
