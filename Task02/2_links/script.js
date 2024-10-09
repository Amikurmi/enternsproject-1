// Example functionality for clicking on menu links
document.querySelectorAll('h3 a').forEach(menu => {
    menu.addEventListener('click', function(event) {
        alert('Navigating to: ' + this.innerText);
    });
});
