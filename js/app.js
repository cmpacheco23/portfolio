const experienceDivs = document.querySelectorAll('.experience');

experienceDivs.forEach((div) => {
  const description = div.querySelector('.description');
  const arrowIcon = div.querySelector('.arrow-icon');

  // Initialize the description to be hidden and the down arrow visible
  description.style.display = 'none';
  arrowIcon.src = 'public/images/down.png';

  div.addEventListener('click', () => {
    if (description.style.display === 'none') {
      description.style.display = 'block';
      arrowIcon.src = 'public/images/up.png'; // Change to the up arrow image
    } else {
      description.style.display = 'none';
      arrowIcon.src = 'public/images/down.png'; // Change to the down arrow image
    }
  });
});


const iconList = document.querySelector('.icon-list');
const listItems = iconList.querySelectorAll('li');
const itemsPerRow = 5; // Number of items you want per row

for (let i = listItems.length; i % itemsPerRow !== 0; i++) {
  const emptyLi = document.createElement('li');
  listItems[listItems.length - 1].parentNode.appendChild(emptyLi);
}