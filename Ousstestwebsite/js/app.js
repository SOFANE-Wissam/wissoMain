const intro = document.querySelector('.textArea');
const section = document.querySelector('.videoContainer');
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const filterButtons = document.querySelectorAll('.filter-title');
const buttons = document.querySelectorAll('[data-carousel-button]');

let navOpen = false;

hamburger.addEventListener('click', () => {
  if (!navOpen) {
    hamburger.classList.add('active');
    navBar.classList.add('active');
    navOpen = true;
  } else {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
    navOpen = false;
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    navBar.classList.add('opacity');
  } else {
    navBar.classList.remove('opacity');
  }
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: section,
  triggerHook: 0.6,
}).addTo(controller);

gsap.to('.rotateimg', {
  scrollTrigger: {
    trigger: '.section',

    start: '200px 400px',
    scrub: true,

    toggleActions: 'restart pause reverse pause',
  },
  rotation: 30,
  scale: 1.5,
  duration: 5,
});
gsap.from('.can1', {
  y: 700,

  duration: 2.2,
});

gsap.from('.can2', {
  y: 700,

  duration: 1.6,
});

gsap.from('.textArea', {
  opacity: 0,
  x: -200,
  duration: 3,
});

gsap.to('.innovation', {
  scrollTrigger: {
    trigger: '.innovation-trigger',
    start: '20px center',

    scrub: true,
  },

  y: -200,
  opacity: 1,
  duration: 1,
});

gsap.to('.innovation-trigger', {
  scrollTrigger: {
    trigger: '.innovation-trigger',
    toggleActions: 'restart pause reverse none',
    start: '-220px center',
    end: 'center center',
    scrub: true,
  },

  opacity: 1,
  duration: 0.5,
});

gsap.to('.award-trigger', {
  scrollTrigger: {
    trigger: '.award-trigger',
    toggleActions: 'restart pause reverse none',
    start: '-220px center',
    end: 'center center',
    scrub: true,
  },

  opacity: 1,
  duration: 0.5,
});

gsap.to('.product-trigger', {
  scrollTrigger: {
    trigger: '.product-trigger',
    toggleActions: 'restart pause reverse none',
    start: '-180px center',
    end: '500px center',
    scrub: true,
  },

  opacity: 1,
  duration: 0.5,
});

gsap.to('.why-trigger', {
  scrollTrigger: {
    trigger: '.why-trigger',
    toggleActions: 'restart pause reverse none',
    start: '20px center',

    end: '500px center',
    scrub: true,
  },

  opacity: 1,
  duration: 0.5,
});

gsap.to('.about-anim', {
  scrollTrigger: {
    trigger: '.about-anim',
    toggleActions: 'restart pause reverse none',
    start: '120px center',

    end: '700px center',
    scrub: true,
  },

  y: -300,
  duration: 1,
});

gsap.from('.inner-hero', {
  trigger: '.inner-hero',
  opacity: 0,
  y: 100,

  duration: 1,
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

filterButtons.forEach((button) => {
  let toggle = false;
  button.addEventListener('click', () => {
    if (!toggle) {
      button.parentNode.classList.add('active');
      toggle = true;
    } else {
      button.parentNode.classList.remove('active');
      toggle = false;
    }
  });
});

let map;
function initMap() {
  const location = { lat: 40.876719994001384, lng: 29.380318641662605 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 15,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Aryum Alüminyum</h1>' +
    '<h3><a href="https://www.google.com/maps/search/Aryum+Metal+T%C3%BCp+Imalat+San.+D%C4%B1%C5%9F+Ticaret+A.%C5%9E./@40.8766632,29.3803616,17z?hl=tr">' +
    'Yol Tarifi Al</a></h3> ' +
    '</div>' +
    '</div>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: location,
    map,
    title: 'Aryum Alüminyum',
  });

  marker.addListener('click', () => {
    infowindow.open(map, marker);
  });
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect);

let tabButtons = document.querySelectorAll('.tab-btn');
let tabs = document.querySelectorAll('.tab');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((remove) => {
      remove.classList.remove('active');
    });
    button.classList.add('active');

    tabs.forEach((tab) => {
      if (button.id === tab.id) {
        tab.style.display = 'flex';
      } else {
        tab.style.display = 'none';
      }
    });
  });
});

let navTabs = document.querySelectorAll('.navLink');

navTabs.forEach((nav) => {
  console.log(nav);
  nav.addEventListener('click', () => {
    console.log('I am clicked.');
    navTabs.forEach((remove) => {
      remove.classList.remove('active');
    });
    nav.classList.add('active');
  });
});


