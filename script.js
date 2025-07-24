const htmlTag = document.getElementById('htmlTag');
const toggleBtn = document.getElementById('toggleTheme');
const visitBtn = document.getElementById('visitBtn');
const visitDisplay = document.getElementById('visitCount');

const scrollTopBtn = document.getElementById('scrollTopBtn');
const contactForm = document.getElementById('contactForm');

const mainHeading = document.getElementById('mainHeading');
const profileImage = document.getElementById('profileImage');
const subHeading = document.getElementById('subHeading');

toggleBtn.addEventListener('click', () => {
  htmlTag.classList.toggle('dark');
});

let count = localStorage.getItem('visitCount') || 0;
visitDisplay.textContent = count;

visitBtn.addEventListener('click', () => {
  count++;
  visitDisplay.textContent = count;
  localStorage.setItem('visitCount', count);
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  contactForm.reset();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    scrollTopBtn.classList.add('opacity-100');
  } else {
    scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
    scrollTopBtn.classList.remove('opacity-100');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


mainHeading.addEventListener('click', () => {
  mainHeading.classList.add('scale-125');
  setTimeout(() => mainHeading.classList.remove('scale-125'), 300);
});

profileImage.addEventListener('click', () => {
  profileImage.classList.add('rotate-12');
  setTimeout(() => profileImage.classList.remove('rotate-12'), 300);
});
