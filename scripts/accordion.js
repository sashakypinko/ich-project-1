const toggleAccordionButtons = document.querySelectorAll('.js-toggle-accordion');

const handleToggle = e => {
  const accordion = e.target.closest('.accordion');

  if (accordion) {
    const content = accordion.querySelector('.accordion-content');

    if (content) {
      content.style.maxHeight = !content.style.maxHeight || content.style.maxHeight === '0px'
        ? `${content.scrollHeight}px`
        : 0;
      e.target.classList.toggle('expanded');
    }
  }
};

toggleAccordionButtons.forEach(button => {
  button.addEventListener('click', handleToggle)
});
