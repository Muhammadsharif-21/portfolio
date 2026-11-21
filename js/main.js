// Small script: mobile menu toggle and the copyright year.
// Runs after the HTML is loaded because the script tag sits at the bottom of <body>.

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

// Open or close the mobile menu when the Menu button is clicked
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? 'Close' : 'Menu';
});

// Close the menu after the visitor picks a section
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  });
});

// Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
