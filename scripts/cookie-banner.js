const cookieBanner = document.querySelector('.cookies-banner');
const closeCookieBannerButtons = document.querySelectorAll('.js-close-cookie-banner');
const cookieBannerTransitionDuration = window.getComputedStyle(cookieBanner).transitionDuration.slice(0, -1);

closeCookieBannerButtons.forEach(button => {
  button.addEventListener('click', () => {
    cookieBanner.style.bottom = `-${cookieBanner.scrollHeight + 10}px`;

    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, cookieBannerTransitionDuration * 1000);
  });
});
