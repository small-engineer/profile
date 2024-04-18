document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const imageDiv = entry.target;
              const src = imageDiv.getAttribute('data-src');
              if (src) {
                  imageDiv.style.backgroundImage = `url('${src}')`;
                  observer.unobserve(imageDiv); 
                }
          }
      });
  }, {
      rootMargin: "0px",
      threshold: 0.1
  });

  const images = document.querySelectorAll('.photo-image');
  images.forEach(image => observer.observe(image));
});
