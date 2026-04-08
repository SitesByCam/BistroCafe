 const slides = document.getElementById("slides");
    const slideItems = document.querySelectorAll(".Slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const dotsContainer = document.getElementById("dots");

    let currentIndex = 0;
    let autoSlide;

    slideItems.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("Dot");
      if (index === 0) dot.classList.add("Active");

      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
      });

      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".Dot");

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach(dot => dot.classList.remove("Active"));
      dots[currentIndex].classList.add("Active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideItems.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
      updateSlider();
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    startAutoSlide();