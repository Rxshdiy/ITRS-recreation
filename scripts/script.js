// skew element when mousemoves over it if it's intersecting the viewport

const plane = document.querySelector('.plane-home');

const handleMouseMove = (e) => {
  if (e.target !== plane) {
    return;
  }
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  const x = clientX / innerWidth - 0.5;
  const y = clientY / innerHeight - 0.5;
  plane.style.transform = `skew(${y * 5}deg, ${x * 5}deg)`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  });
});

observer.observe(plane);

const hoverText = document.querySelector('.hover-text2');
const hoverText2 = document.querySelector('.hover-text1');
const blackArrow1 = document.querySelector('.black1');
const blackArrow2 = document.querySelector('.black2');
const greyArrow1 = document.querySelector('.grey1');
const greyArrow2 = document.querySelector('.grey2');

hoverText.addEventListener('mouseover', () => {
  blackArrow1.style.transform = 'translateX(0px)';
  greyArrow1.style.transform = 'translateX(0px)';
});

hoverText.addEventListener('mouseout', () => {
  blackArrow1.style.transform = 'translateX(-100px)';
  greyArrow1.style.transform = 'translateX(-50px)';
});

hoverText2.addEventListener('mouseover', () => {
  blackArrow2.style.transform = 'translateX(0px)';
  greyArrow2.style.transform = 'translateX(0px)';
}
);

hoverText2.addEventListener('mouseout', () => {
  blackArrow2.style.transform = 'translateX(-100px)';
  greyArrow2.style.transform = 'translateX(-50px)';
}
);

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

const bottomContainer = document.querySelectorAll('.bottom-container');

// add event listener to buttons. if button gets clicked, add .active-button to the button and .active to the corresponding bottom-container

button1.addEventListener('click', () => {
  button1.classList.add('active-button');
  button2.classList.remove('active-button');
  button3.classList.remove('active-button');
  button4.classList.remove('active-button');

  bottomContainer.item(0).classList.add('active');
  bottomContainer.item(1).classList.remove('active');
  bottomContainer.item(2).classList.remove('active');
  bottomContainer.item(3).classList.remove('active');
});

button2.addEventListener('click', () => {
  button1.classList.remove('active-button');
  button2.classList.add('active-button');
  button3.classList.remove('active-button');
  button4.classList.remove('active-button');

  bottomContainer.item(1).classList.add('active');
  bottomContainer.item(0).classList.remove('active');
  bottomContainer.item(2).classList.remove('active');
  bottomContainer.item(3).classList.remove('active');
}
);

button3.addEventListener('click', () => {
  button1.classList.remove('active-button');
  button2.classList.remove('active-button');
  button3.classList.add('active-button');
  button4.classList.remove('active-button');

  bottomContainer.item(2).classList.add('active');
  bottomContainer.item(1).classList.remove('active');
  bottomContainer.item(0).classList.remove('active');
  bottomContainer.item(3).classList.remove('active');
}
);

button4.addEventListener('click', () => {
  button1.classList.remove('active-button');
  button2.classList.remove('active-button');
  button3.classList.remove('active-button');
  button4.classList.add('active-button');

  bottomContainer.item(3).classList.add('active');
  bottomContainer.item(1).classList.remove('active');
  bottomContainer.item(2).classList.remove('active');
  bottomContainer.item(0).classList.remove('active');
}
);

