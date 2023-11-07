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

const projectImages = document.querySelectorAll('.projectimg');

projectImages.forEach((image) => {
  const h1 = image.nextElementSibling; // Get the <h1> element following the image

  image.addEventListener('error', () => {
    image.style.display = 'none'; // Hide the image on error
    h1.style.display = 'block'; // Show the <h1> on error
  });

  image.addEventListener('load', () => {
    image.style.display = 'block'; // Show the image on load
    h1.style.display = 'none'; // Hide the <h1> on load
  });
});

const iconList = document.querySelector('.icon-list');
const listItems = iconList.querySelectorAll('li');
const itemsPerRow = 5; // Number of items you want per row

for (let i = listItems.length; i % itemsPerRow !== 0; i++) {
  const emptyLi = document.createElement('li');
  listItems[listItems.length - 1].parentNode.appendChild(emptyLi);
}