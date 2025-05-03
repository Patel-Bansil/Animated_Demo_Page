// locomotive ja - smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// gsap
gsap.from(".nlink", {
  stagger: 0.1,
  y: 15,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from(".anim2", {
  stagger: 0.3,
  y: 50,
  duration: 1,
  ease: Expo,
  opacity: 0,
});

gsap.from("#imgwarapper2 img", {
  y: "70",
  duration: 2,
  ease: Expo,
});

// shery js
Shery.textAnimate(".text-target", {
  style: 1,
  y: 15,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect("#imgwarapper1 img,#Section2 .left img", {
  style: 5, //Select Style
  // debug: true, // Debug Panel
  config: {
    uFrequencyX: { value: 31.3, range: [0, 100] },
    uFrequencyY: { value: 19.08, range: [0, 100] },
    uFrequencyZ: { value: 9.16, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.666651581268041 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.27, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

Shery.imageEffect("#imgwarapper2 img, #Section2 .right img", {
  style: 3, //Select Style
  // debug: true, // Debug Panel
  config: {
    uFrequencyX: { value: 12.98, range: [0, 100] },
    uFrequencyY: { value: 19.08, range: [0, 100] },
    uFrequencyZ: { value: 24.43, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 23.12 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.43, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

Shery.makeMagnet(".down_icon", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.imageEffect("#Section3 .left", {
  style: 5,
  // debug: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.97, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.8598885059408492 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 3.24, range: [1, 15] },
    durationOut: { value: 1.07, range: [0.1, 5] },
    durationIn: { value: 0.77, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.09, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.46, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
    discard_threshold: { value: 0.87, range: [0, 1] },
    antialias_threshold: { value: 0.02, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 19.08, range: [0, 100] },
  },
  gooey: true,
});

document.querySelector("#Section4 .cover button").addEventListener("mouseover", () => {
    gsap.to("#Section4 video",{
        opacity:1,
        duration:1,
        ease:Power4
    })
});
document.querySelector("#Section4 .cover button").addEventListener("mouseleave", () => {
    gsap.to("#Section4 video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
});
