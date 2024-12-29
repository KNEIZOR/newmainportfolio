export default function observer(ref, classlist, margin = "0px") {
    let options = {
        root: null,
        threshold: 1.0,
        rootMargin: margin,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classlist);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    for (const section of ref.current.children) {
        observer.observe(section)
    }
}