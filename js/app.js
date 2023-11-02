const experienceDivs = document.querySelectorAll('.experience');

experienceDivs.forEach((div) => {
  const description = div.querySelector('.description');
  const arrowIcon = div.querySelector('.arrow-icon');

  // Initialize the description to be hidden and the down arrow visible
  description.style.display = 'none';
  arrowIcon.src = '/images/down-arrow.png';

  div.addEventListener('click', () => {
    if (description.style.display === 'none') {
      description.style.display = 'block';
      arrowIcon.src = '/images/up-arrow.png'; // Change to the up arrow image
    } else {
      description.style.display = 'none';
      arrowIcon.src = '/images/down-arrow.png'; // Change to the down arrow image
    }
  });
});
