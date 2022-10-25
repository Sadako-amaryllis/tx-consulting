(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* Scrolls to an element with header offset */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /* Toggle .header-scrolled class to #header when page is scrolled */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /* Skills animation*/
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
})()

// let caroutargets = document.querySelectorAll('button')
// let articles = document.querySelectorAll('.article')
// let caroutarget1 = document.getElementById('js-btn-left')
// let caroutarget2 = document.getElementById('js-btn-right')
// console.log(articles)

// caroutarget1.addEventListener('click', ClickLeft)

// function ClickLeft(){ 
//   for (let i = 0; i < articles.length; i++) {
//       articles[i].focus()
//   }

//   articles[0].click()
//   console.log(articles[0])
// }

document.addEventListener('DOMContentLoaded', () => {
  // grab all the slides
  let slides = document.querySelectorAll('#slider .slide')
  // set initial slide
  let currentSlide = 0
  //grab both buttons
  const nextButton = document.querySelector('.button-right')
  const prevButton = document.querySelector('.button-left')
  function nextSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = 'slide'
    // set the current slide as the next one
    currentSlide = (currentSlide + 1) % slides.length
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = 'slide showing'
  }
  function prevSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = 'slide'
    // set the current slide as the previous one
    currentSlide = (currentSlide - 1) % slides.length
    if (currentSlide == -1) {
      currentSlide = slides.length - 1
    }
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = 'slide showing'
  }
  nextButton.addEventListener('click', () => {
    // go to next slide on click of the button
    nextSlide()
  })
  prevButton.addEventListener('click', () => {
    // go to previous slide on click of the button
    prevSlide()
  })
  /* VERTICALLY ALIGN THE BUTTONS IN THE MIDDLE OF THE SLIDER TEXT
   */
  function positionSliderButton() {
    // grab the slider
    let slider = document.querySelector('.slide-text')
    // grab its height
    let sliderHeight = slider.getBoundingClientRect().height
    // grab the button
    let buttons = document.querySelectorAll('.slider-button')
    // for each of the buttons
    for (button of buttons) {
      // get their height
      let buttonHeight = button.getBoundingClientRect().height
      // position them right in the middle of the text,
      button.style.top = ((sliderHeight - buttonHeight) / 2).toString() + 'px'
    }
  }
  positionSliderButton()
  // whenever the window is resize, reposition the buttons
  window.addEventListener('resize', () => {
    positionSliderButton()
  })
})