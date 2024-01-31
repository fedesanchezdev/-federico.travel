document.querySelector('#enhanceVideo').animate(
    {
      backgroundColor: ['red', 'darkred'],
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
      duration: 2500,
      fill: 'forwards',
      easing: 'linear',
     }
  );