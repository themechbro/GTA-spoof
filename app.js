gsap.fromTo('.first-frame-content', {y:-100, opacity:0, delay:4},{y:100, opacity:1, ease:"bounce.out", delay:2});
gsap.from(['.first-intro','.button'],{duration:1, opacity:0, delay:3, stagger:0.5});
gsap.from('.first-frame',{duration:1, opacity:0, delay:1 , ease:"power.out"});

gsap.from(['.navbar-brand','.nav-item'],{y:5, opacity:0, duration:1, delay:1, ease:"sine.out", stagger:0.5});


gsap.from('.first',{scrollTrigger:'.first', x:-200, duration:1, delay:1, opacity:0, ease:"sine.out",stagger:1})
gsap.from('.second',{scrollTrigger:'.second', x:200, duration:1, delay:1, opacity:0, ease:"sine.out",stagger:1})
