var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween:30 ,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  var tl = gsap.timeline()

tl.from(".logo",{
    opacity:0,
    duration:1,
    ease:Power0.easeOut
})
.from(".nav ul",{
    opacity:0,
    duration:0.2,
    y:-200,
})
.from(".onimg",{
    opacity:0,
    duration:0.5,
    x:-200
})
.from(".hp",{
  opacity:0,
  duration:0.5,
  y:200,
})

.from(".onimg2",{
  opacity:0,
  duration:0.5,
  x:200,
})

var page2 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 50%",

  },
})



.from(".page2 p",{
  opacity:0,
  duration:0.5,
  y:200,
})





var page3 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 50%",

  },
})



.from(".page3 .onimg3",{
  opacity:0,
  duration:0.5,
  y:200,
})

.from(".page3 .oimg4",{
  opacity:0,
  duration:0.85,
  y:-300,
})

var page4 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 50%",

  },
})



.from(".page4 .onimg5",{
  opacity:0,
  duration:0.5,
  y:200,
})

.from(".page4 .ph h1",{
  opacity:0,
  duration:0.85,
  y:-200,
})
.from(".page4 .mySwiper",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".page4 .ph p",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".page4 .ph .shop",{
  opacity:0,
  duration:0.5,
  y:200,

})




var page5 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    start: "top 50%",

  },
})



.from(".page5 .pcontent",{
  opacity:0,
  duration:0.5,
  y:200,
})

.from(".page5 img",{
  opacity:0,
  duration:0.85,
  x:200,
})




var page6 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start: "top 50%",

  },
})




.from(".page6 .onimg6",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".page6 .con p",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".page6 .con form",{
  opacity:0,
  duration:0.5,
  x:200,

})



var footCon =gsap.timeline({
  scrollTrigger: {
    trigger: ".footCon",
    scroller: "body",
    start: "top 50%",

  },
})




.from(".footCon h1",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".footCon h1 span",{
  opacity:0,
  duration:0.5,
  x:200,

})

.from(".page6 .con h1 ",{
  opacity:0,
  duration:0.5,
  x:-200,

})



.from(".page6 .con form",{
  opacity:0,
  duration:0.5,
  x:-200,

})



.from(".footCon ul",{
  opacity:0,
  duration:0.5,
  x:200,

})
.from(".footCon .footerright .trai",{
  opacity:0,
  duration:0.5,
  x:-200,

})


.from(".footCon .footerright .shaop",{
  opacity:0,
  duration:0.5,
  x:-200,

})

.from(".footCon .footerright p",{
  opacity:0,
  duration:0.5,
  x:-200,

})


