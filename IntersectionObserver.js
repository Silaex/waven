export default function LazyLoad(target) {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')

                observer.disconnect();
            }
        });
    }, {
        threshold: 0.0
    });

    io.observe(target)
};