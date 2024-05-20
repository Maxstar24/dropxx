const navbar = document.getElementById('navbar');

navbar.addEventListener('mouseover', function() {
  navbar.style.top = '0';
});

navbar.addEventListener('mouseout', function() {
  navbar.style.top = '-70px';
});