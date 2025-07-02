const SLIDE_DURATION = 4000;

// function updateProgressBars() {
//         const bars = document.querySelectorAll('.progress-bar span');
//         bars.forEach((bar, i) => {
//           bar.style.animation = 'none';
//           bar.offsetHeight; // force reflow
//           bar.style.width = '0%';
//           if (i === swiper.realIndex) {
//             bar.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//           }
//         });
//           }
        
          //  updateProgressBars();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
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
    swiper: swiper,
  },


  // ----------------------------
  pagination: {
    el: ".pagination_main",
    type: "progressbar",
  },

  

  // on: {
  //     slideChangeTransitionStart: updateProgressBars
  //   }


  // on: {
  //   slideChangeTransitionStart() {
  //     const allVideos = document.querySelectorAll('.swiper-slide video');
  //     allVideos.forEach(v => {
  //       v.pause();
  //       v.currentTime = 0;
  //     });

  //     const currentSlide = swiper.slides[swiper.activeIndex];
  //     const video = currentSlide.querySelector('video');
  //     const progressFill = currentSlide.querySelector('.progress-fill');

  //     if (video) {
  //       video.play();
  //       const updateProgress = () => {
  //         const percent = (video.currentTime / video.duration) * 100;
  //         progressFill.style.width = `${percent}%`;
  //         if (!video.paused && !video.ended) {
  //           requestAnimationFrame(updateProgress);
  //         }
  //       };
  //       requestAnimationFrame(updateProgress);

  //       video.onended = () => {
  //         swiper.slideNext();
  //       };
  //     }
  //   }
  // }
  

  });

  // swiper.emit('slideChangeTransitionStart');

  // -------------------------------

  
    
  

  

  

  // function updateProgressBars() {
  //   const bars = document.querySelectorAll('.progress-bar span');
  //   bars.forEach((bar, i) => {
  //     bar.style.animation = 'none';
  //     bar.offsetHeight; // force reflow
  //     bar.style.width = '0%';
  //     if (i === swiper.realIndex) {
  //       bar.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
  //     }
  //   });
  // }

  // updateProgressBars();

     
  
  






// });

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

  window.addEventListener('scroll', () => {
    function changeMenu() {
			// const mainSection = document.querySelector('main')
			const scrollSection = document.querySelector('.scroll_section')
			const menuVisible = document.querySelector('.nav_visible_blur')
      const menuHidden = document.querySelector('.nav_hide_blur')
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop
			let mainSectionOffset = scrollSection.getBoundingClientRect()
			// let reviewsSectionOffset = reviewsSection.offsetTop
      // console.log(mainSectionOffset)
			// if (scrollTop <= mainSectionOffset + 60) {
			// 	menuVisible.classList.remove('nav_visible_blur')
			// } else {
			// 	menuVisible.classList.add('nav_visible_blur')
			// }
			if (
				// scrollTop >= mainSectionOffset &&
				// scrollTop <= mainSectionOffset + (mainSectionOffset.clientHeight - 60)
        // scrollTop <= mainSectionOffset.clientHeight - 60
        mainSectionOffset.top <= 600
      )
       {
				menuVisible.classList.add('menu_bg')
        menuHidden.classList.add('menu_bg')
			} else {
				menuVisible.classList.remove('menu_bg')
        menuHidden.classList.remove('menu_bg')
			}
		}
		changeMenu()
  })

  const mobile = document.querySelector('.nav_hide')
	const mobileOpenBtn = document.querySelector('.open')
	const mobileCloseBtn = document.querySelector('.close')

	mobileOpenBtn.addEventListener('click', () => {
		mobile.classList.add('show_menu')
		// mobile.classList.remove('hide_mobile_menu')
		document.body.style.overflow = 'hidden'
	})

	const closeMobile = () => {
		setTimeout(() => {
			// mobile.classList.add('hide_mobile_menu')
			mobile.classList.remove('show_menu')
			document.body.style.overflow = ''
		}, 300)
	}

	mobileCloseBtn.addEventListener('click', closeMobile)

	mobile.addEventListener('click', e => {
		if (e.target === mobile) {
			closeMobile()
		}
		
	})

	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && mobile.classList.contains('show_menu')) {
			closeMobile()
		}
	})

  var swiper3 = new Swiper(".mySwiper3", {
      grabCursor: true,
      direction: "vertical",
      //  pagination: {
      //   el: ".swiper-pagination",
      //   type: "fraction",
      // },
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

  
  
// })

const links = document.querySelectorAll('.hide_item');

  links.forEach(link => {
    const video = link.querySelector('video');

    link.addEventListener('mouseenter', () => {
      // Остановить все видео
      links.forEach(otherLink => {
        const otherVideo = otherLink.querySelector('video');
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
        }
      });

      // Запустить текущее видео
      video.play();
    });

    link.addEventListener('mouseleave', () => {
      // Остановить видео при выходе курсора
      video.pause();
      video.currentTime = 0;
    });
  });



   
  