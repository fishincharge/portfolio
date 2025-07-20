var firstCard = document.getElementById('id-first-card');

window.addEventListener('resize', () => {
  // console.log(`New Viewport Size: ${window.innerWidth}px × ${window.innerHeight}px`);

  if(window.innerWidth < 834){
    firstCard.classList.add('first-card-left-margin');
  }else{
    firstCard.classList.remove('first-card-left-margin');
  }

});

window.dispatchEvent(new Event('resize'));