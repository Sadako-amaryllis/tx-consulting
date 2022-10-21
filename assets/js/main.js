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

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
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

  /**
   * Skills animation
   */
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

let caroutargets = document.querySelectorAll('button')
let articles = document.querySelectorAll('.article')
let caroutarget1 = document.getElementById('js-btn-left')
let caroutarget2 = document.getElementById('js-btn-right')
// console.log(articles)

// caroutarget1.addEventListener('click', ClickLeft)

// function ClickLeft(){ 
//   for (let i = 0; i < articles.length; i++) {
//       articles[i].focus()
//   }

//   articles[0].click()
//   console.log(articles[0])
// }

// function carouAction(){
//   caroutarget[0].addEventListener('click',  test, console.log('jz'))
// }
// for (let i = 0; i < articles.length; i++) {
//   let article = articles[i]
//   let carrouselIndex = 405;
//   caroutarget1.addEventListener('click', function(){
//     if (carrouselIndex >=0 ) {
//      return console.log("C'est un bug ça");
//     }
//     else  {
//       carrouselIndex +=405
//       article.style.transform = translateX(carrouselIndex)
//     }
//   })
//   caroutarget2.addEventListener('click', function() {
//     carrouselIndex -= 405
//     article.style.transform = translateX(carrouselIndex)
//    console.log(window.innerWidth) 
//     if (window.innerWidth >= 1200 && carrouselIndex === -4054) {
//       carrouselIndex = 405
//     }
//     else if (carrouselIndex === -4054) {
//       carrouselIndex = 405;
//     };
//   })
// }