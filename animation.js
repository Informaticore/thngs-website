includeHTML();
const listItems = document.querySelectorAll('.thingsgrid .thing');
const delayIncrement = 0.1; 
let delay = 0;

listItems.forEach((item) => {
  item.style.animationDelay = `${delay}s`;
  delay += delayIncrement;
});


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.appear');
    elements.forEach((element) => {
        if (isInViewport(element)) {
  element.classList.remove('appear');
  element.classList.add('fadeIn');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();