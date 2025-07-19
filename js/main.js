const SLIDE_DURATION = 4000;


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 22,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  next: {
      translate: ['-100%', 0, 0],
    },
  breakpoints: {
        780: {
          slidesPerView: 4,
        },
        996: {
          spaceBetween: 72,
          slidesPerView: 4,
        },
      },  


   on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
  loop: false,
    effect: 'fade',
    fadeEffect: { crossFade: true },
        
    autoplay: {
        delay: SLIDE_DURATION,
        disableOnInteraction: false,
      },
  
  thumbs: {
    swiper: swiper1,
  },

  });

  

const items = document.querySelectorAll('.gallery_items');
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('gallery_items_hover');
      items.forEach(other => {
        if (other !== item) {
          other.classList.add('gallery_items_high');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('gallery_items_hover');
      items.forEach(other => {
        other.classList.remove('gallery_items_high');
      });
    });
  });

  const itemsFirst = document.querySelectorAll('.item1');

  itemsFirst.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('item_wide');
      itemsFirst.forEach(other => {
        if (other !== item) {
          other.classList.add('item_narrow');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('item_wide');
      itemsFirst.forEach(other => {
        other.classList.remove('item_narrow');
      });
    });
  });

  const itemsSecond = document.querySelectorAll('.item2');
  
  itemsSecond.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('item_wide');
      itemsSecond.forEach(other => {
        if (other !== item) {
          other.classList.add('item_narrow');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('item_wide');
      itemsSecond.forEach(other => {
        other.classList.remove('item_narrow');
      });
    });
  });

  const section = document.getElementById('stretch_section');

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    
    const distanceFromTop = rect.top;

    if (distanceFromTop <= 95) {
      
      section.style.width = '100%'
      section.style.transition = 'all 0.5s ease';
    } 
    else {
      if (distanceFromTop >= 95){
        section.style.width = '96%';
        section.style.transition = 'all 0.5s ease';
      }
       
    }
  });

  

  const mobile = document.querySelector('.nav_hide')
	const mobileOpenBtn = document.querySelector('.open')
	const mobileCloseBtn = document.querySelector('.close')

	mobileOpenBtn.addEventListener('click', () => {
		mobile.classList.add('show_mobile_menu')
		mobile.classList.remove('hide_mobile_menu')
		document.body.style.overflow = 'hidden'
	})

	const closeMobile = () => {
		setTimeout(() => {
			mobile.classList.add('hide_mobile_menu')
			mobile.classList.remove('show_mobile_menu')
			document.body.style.overflow = ''
		}, 200)
	}

	mobileCloseBtn.addEventListener('click', closeMobile)

	mobile.addEventListener('click', e => {
		if (e.target === mobile) {
			closeMobile()
		}
		
	})

  

	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && mobile.classList.contains('show_mobile_menu')) {
			closeMobile()
		}
	})

  const activeLinks = document.querySelectorAll('a[href^="#"]')

	const linkHide = document.querySelectorAll('.hide_items a')

	activeLinks.forEach((item, i) => {
		item.addEventListener('click', e => {
			event.preventDefault()
			const blockId = item.getAttribute('href')

			document.querySelector('' + blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})

			
			closeMobile()
		})
	})

  const isMobile = window.innerWidth <= 518;
  var swiper3 = new Swiper(".mySwiper3", {
      allowTouchMove: !isMobile ? true : false,
      direction: "vertical",
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        
        prevEl: ".swiper-button-prev",
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, "-20%",  -1],
        },
        next: {
          translate: [0, "100%", 0],
        },
      },
    });

 

  const links = document.querySelectorAll('.hide_item');

  links.forEach(link => {
    const video = link.querySelector('video');

    link.addEventListener('mouseenter', () => {
     
      links.forEach(otherLink => {
        const otherVideo = otherLink.querySelector('video');
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
        }
      });

      
      video.play();
    });

    link.addEventListener('mouseleave', () => {
      
      video.pause();
      video.currentTime = 0;
    });
  });
  
  const swiper4 = new Swiper('.mySwiper4', {
    
    speed: 1000,
    slidesPerView: 1.6,
    centeredSlides: true,
    
    breakpoints: {
        400: {
          slidesPerView: 1.8,
          
        },
        670: {
          slidesPerView: 2.07,
          
        },
        824: {
          slidesPerView: 2.5,
          
        },
      },
  })



   
  