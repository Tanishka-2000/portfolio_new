// alert('connected!')
const portfolioTabs = document.querySelectorAll('.portfolio-tab');
let currentIndex = 0;

// move current tab to left and next tab first to the right and then with a 0 second delay to the center
function slideLeft(){
  if(window.innerWidth < 1600) return slideProjectLeft();

  let nextIndex = currentIndex + 1 === 2 ? 0 : currentIndex + 1; // calculate next tab's index
  portfolioTabs[currentIndex].setAttribute('data-status', 'moveLeft');
  portfolioTabs[nextIndex].setAttribute('data-status', 'comeFromRight');
  setTimeout(() => {
    portfolioTabs[nextIndex].setAttribute('data-status', 'center'); // setting a timeout of 0 seconds so that previous statement can have its effect
  },0);
  currentIndex = nextIndex;
}

// move current tab to the right and previous tab first to the left and then with a 0 second dalay to the center
function slideRight(){
  if(window.innerWidth < 1600) return slideProjectRight(); 

  let nextIndex = currentIndex - 1 === -1 ? 1 : currentIndex - 1; // calculate previous tab's index
  portfolioTabs[currentIndex].setAttribute('data-status', 'moveRight');
  portfolioTabs[nextIndex].setAttribute('data-status', 'comeFromLeft');
  setTimeout(() => {
    portfolioTabs[nextIndex].setAttribute('data-status', 'center'); // setting a timeout of 0 seconds so that previous statement can have its effect
  },0);
  currentIndex = nextIndex;
}

// since all children of portfolio are position absolute, its height needs to be set dynamically
const portfolio = document.querySelector('.portfolio');
window.onresize = function(){
  if(window.innerWidth < 1000) {
    portfolio.style.height = 'auto';
    return;
  }
  let h =  portfolioTabs[currentIndex].clientHeight;
  portfolio.style.height = `${h + 100}px`;
}