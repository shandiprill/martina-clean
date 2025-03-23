window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 300) { // Ajuste o valor 100 conforme necessário
    navbar.classList.remove('hidden');
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
    navbar.classList.add('hidden');
  }
});
