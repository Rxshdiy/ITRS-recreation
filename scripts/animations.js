const firstLayout = document.querySelector('.grid-layout-service');
const secondLayout = document.querySelector('.grid-layout-service2');
const thirdLayout = document.querySelector('.grid-layout-service3');

// intersection observer on first layout. animate it from the left to its original position

const firstOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2
};

const firstObserver = new IntersectionObserver(function(entries, firstObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            gsap.from('.grid-layout-service', {x: -100, opacity: 0, duration: 1, ease: 'power2.inOut'});
            firstObserver.unobserve(entry.target);
        }
    });
}
, firstOptions);

firstObserver.observe(firstLayout);

// intersection observer on second layout. animate it from the left to its original position

const secondOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2
};

const secondObserver = new IntersectionObserver(function(entries, secondObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            gsap.from('.grid-layout-service2', {x: -100, opacity: 0, duration: 1, ease: 'power2.inOut', delay: 0.1});
            secondObserver.unobserve(entry.target);
        }
    });
}
, secondOptions);

secondObserver.observe(secondLayout);

// intersection observer on third layout. animate it from the left to its original position

const thirdOptions = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
};

const thirdObserver = new IntersectionObserver(function(entries, thirdObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            gsap.from('.grid-layout-service3', {x: -100, opacity: 0, duration: 1, ease: 'power2.inOut', delay
            : 0.2});
            thirdObserver.unobserve(entry.target);
        }
    });
}
, thirdOptions);

thirdObserver.observe(thirdLayout);



