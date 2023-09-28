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
