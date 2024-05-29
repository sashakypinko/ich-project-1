const cookieBanner = document.querySelector('.cookies-banner');
const closeCookieBannerButtons = document.querySelectorAll('.js-close-cookie-banner');

closeCookieBannerButtons.forEach(button => {
  button.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
  })
});
