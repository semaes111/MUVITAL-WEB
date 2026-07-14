import{r as n,j as e,c as Y}from"./index-CAzmj4Ms.js";import{g as t,S as D}from"./ScrollTrigger-a3sj5zmn.js";t.registerPlugin(D);const B=`
  .gsap-reveal { visibility: hidden; }
  .transform-style-3d { transform-style: preserve-3d; }

  /* Overlays de ambiente */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, rgba(217,212,200,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(217,212,200,0.06) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* Tipografía con profundidad */
  .text-3d-matte {
      color: #D9D4C8;
      text-shadow:
          0 10px 30px rgba(217,212,200,0.20),
          0 2px 4px rgba(217,212,200,0.10);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, #D9D4C8 0%, rgba(217,212,200,0.40) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px rgba(217,212,200,0.15))
          drop-shadow(0px 2px 4px rgba(217,212,200,0.10));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #C9C3B4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Tarjeta física profunda con iluminación por ratón */
  .premium-depth-card {
      background: linear-gradient(145deg, #214C53 0%, #183A40 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(46,136,141,0.12) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Maqueta de iPhone */
  .iphone-bezel {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Botones táctiles */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      cursor: pointer;
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #2E888D 0%, #236A6F 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active { transform: translateY(1px); }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #D9D4C8;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
  }
  .btn-modern-dark:active { transform: translateY(1px); background: #18181B; }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;function S({brandName:f="MÜV Vital",tagline1:w="Movimiento",tagline2:v="con criterio médico.",cardHeading:j="Un método. Un solo lugar.",cardDescription:k=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-white font-semibold",children:"MUV Vital"})," reúne traumatología, fisioterapia, nutrición, podología y entrenamiento personal bajo un mismo criterio clínico, con seguimiento individual de cada socio."]}),metricValue:x=92,metricLabel:y="Adherencia",ctaHeading:N="Solicita tu evaluación privada.",ctaDescription:z="Aforo de socios limitado. Empezamos por una evaluación médica inicial para diseñar tu plan.",ctaPrimaryLabel:c="Solicitar evaluación",ctaPrimaryHref:A="#/",ctaSecondaryLabel:p="Conocer el método",ctaSecondaryHref:F="#/",onPrimary:g,onSecondary:u,bgImage:m,imageLoading:T="lazy",imageFetchPriority:_="auto",className:C,...R}){const l=n.useRef(null),i=n.useRef(null),o=n.useRef(null),d=n.useRef(0),h=n.useRef(!1);return n.useEffect(()=>{const r=l.current;if(!r)return;const a=new IntersectionObserver(([s])=>{h.current=s.isIntersecting},{rootMargin:"100px 0px"});return a.observe(r),()=>a.disconnect()},[]),n.useEffect(()=>{const r=a=>{h.current&&(cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{if(i.current&&o.current){const s=i.current.getBoundingClientRect(),b=a.clientX-s.left,E=a.clientY-s.top;i.current.style.setProperty("--mouse-x",`${b}px`),i.current.style.setProperty("--mouse-y",`${E}px`);const M=(a.clientX/window.innerWidth-.5)*2,O=(a.clientY/window.innerHeight-.5)*2;t.to(o.current,{rotationY:M*12,rotationX:-O*12,ease:"power3.out",duration:1.2})}}))};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r),cancelAnimationFrame(d.current)}},[]),n.useEffect(()=>{const r=window.innerWidth<768,a=t.context(()=>{t.set(".text-track",{autoAlpha:0,y:60,scale:.85,filter:"blur(20px)",rotationX:-20}),t.set(".text-days",{autoAlpha:1,clipPath:"inset(0 100% 0 0)"}),t.set(".main-card",{y:window.innerHeight+200,autoAlpha:1}),t.set([".card-left-text",".card-right-text",".mockup-scroll-wrapper",".floating-badge",".phone-widget"],{autoAlpha:0}),t.set(".cta-wrapper",{autoAlpha:0,scale:.8,filter:"blur(30px)"}),t.timeline({delay:.3}).to(".text-track",{duration:1.8,autoAlpha:1,y:0,scale:1,filter:"blur(0px)",rotationX:0,ease:"expo.out"}).to(".text-days",{duration:1.4,clipPath:"inset(0 0% 0 0)",ease:"power4.inOut"},"-=1.0"),t.timeline({scrollTrigger:{trigger:l.current,start:"top top",end:"+=7000",pin:!0,scrub:1,anticipatePin:1}}).to([".hero-text-wrapper",".bg-grid-theme"],{scale:1.15,filter:"blur(20px)",opacity:.2,ease:"power2.inOut",duration:2},0).to(".main-card",{y:0,ease:"power3.inOut",duration:2},0).to(".main-card",{width:"100%",height:"100%",borderRadius:"0px",ease:"power3.inOut",duration:1.5}).fromTo(".mockup-scroll-wrapper",{y:300,z:-500,rotationX:50,rotationY:-30,autoAlpha:0,scale:.6},{y:0,z:0,rotationX:0,rotationY:0,autoAlpha:1,scale:1,ease:"expo.out",duration:2.5},"-=0.8").fromTo(".phone-widget",{y:40,autoAlpha:0,scale:.95},{y:0,autoAlpha:1,scale:1,stagger:.15,ease:"back.out(1.2)",duration:1.5},"-=1.5").to(".progress-ring",{strokeDashoffset:60,duration:2,ease:"power3.inOut"},"-=1.2").to(".counter-val",{innerHTML:x,snap:{innerHTML:1},duration:2,ease:"expo.out"},"-=2.0").fromTo(".floating-badge",{y:100,autoAlpha:0,scale:.7,rotationZ:-10},{y:0,autoAlpha:1,scale:1,rotationZ:0,ease:"back.out(1.5)",duration:1.5,stagger:.2},"-=2.0").fromTo(".card-left-text",{x:-50,autoAlpha:0},{x:0,autoAlpha:1,ease:"power4.out",duration:1.5},"-=1.5").fromTo(".card-right-text",{x:50,autoAlpha:0,scale:.8},{x:0,autoAlpha:1,scale:1,ease:"expo.out",duration:1.5},"<").to({},{duration:2.5}).set(".hero-text-wrapper",{autoAlpha:0}).set(".cta-wrapper",{autoAlpha:1}).to({},{duration:1.5}).to([".mockup-scroll-wrapper",".floating-badge",".card-left-text",".card-right-text"],{scale:.9,y:-40,z:-200,autoAlpha:0,ease:"power3.in",duration:1.2,stagger:.05}).to(".main-card",{width:r?"92vw":"85vw",height:r?"92vh":"85vh",borderRadius:r?"32px":"40px",ease:"expo.inOut",duration:1.8},"pullback").to(".cta-wrapper",{scale:1,filter:"blur(0px)",ease:"expo.inOut",duration:1.8},"pullback").to(".main-card",{y:-window.innerHeight-300,ease:"power3.in",duration:1.5})},l);return()=>a.revert()},[x]),e.jsxs("div",{ref:l,className:Y("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-grafito text-mineral font-body antialiased",C),style:{perspective:"1500px"},...R,children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:B}}),e.jsx("div",{className:"film-grain","aria-hidden":"true"}),e.jsx("div",{className:"bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50","aria-hidden":"true"}),e.jsxs("div",{className:"hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d",children:[e.jsx("h1",{className:"text-track gsap-reveal text-3d-matte font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 max-w-[92vw]",children:w}),e.jsx("h1",{className:"text-days gsap-reveal text-silver-matte font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-[92vw]",children:v})]}),e.jsxs("div",{className:"cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform",children:[e.jsx("h2",{className:"font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte",children:N}),e.jsx("p",{className:"text-mineral/60 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed",children:z}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6",children:[g?e.jsxs("button",{type:"button",onClick:g,className:"btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-general font-semibold tracking-wide",children:[c,e.jsx("span",{"aria-hidden":"true",children:"→"})]}):e.jsxs("a",{href:A,className:"btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-general font-semibold tracking-wide",children:[c,e.jsx("span",{"aria-hidden":"true",children:"→"})]}),u?e.jsx("button",{type:"button",onClick:u,className:"btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-general font-semibold tracking-wide",children:p}):e.jsx("a",{href:F,className:"btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-general font-semibold tracking-wide",children:p})]})]}),e.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center pointer-events-none",style:{perspective:"1500px"},children:e.jsxs("div",{ref:i,className:"main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]",children:[m&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:m,alt:"","aria-hidden":"true",width:1672,height:941,loading:T,fetchPriority:_,decoding:"async",sizes:"100vw",className:"absolute inset-0 z-0 h-full w-full object-cover"}),e.jsx("div",{className:"absolute inset-0 z-0 bg-grafito/75"})]}),e.jsx("div",{className:"card-sheen","aria-hidden":"true"}),e.jsxs("div",{className:"relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0",children:[e.jsx("div",{className:"card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full",children:e.jsx("img",{src:"./images/logo-muv-blanco.png",alt:f,width:553,height:306,decoding:"async",className:"h-auto w-40 object-contain md:w-56 lg:w-72"})}),e.jsx("div",{className:"mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10",style:{perspective:"1000px"},children:e.jsxs("div",{className:"relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-90 lg:scale-100",children:[e.jsxs("div",{ref:o,className:"relative z-10 w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d",children:[e.jsx("div",{className:"absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0","aria-hidden":"true"}),e.jsx("div",{className:"absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0","aria-hidden":"true"}),e.jsx("div",{className:"absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0","aria-hidden":"true"}),e.jsx("div",{className:"absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]","aria-hidden":"true"}),e.jsxs("div",{className:"absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10",children:[e.jsx("div",{className:"absolute inset-0 screen-glare z-40 pointer-events-none","aria-hidden":"true"}),e.jsx("div",{className:"absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]",children:e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-vital shadow-[0_0_8px_rgba(46,136,141,0.8)] animate-pulse"})}),e.jsxs("div",{className:"relative w-full h-full pt-12 px-5 pb-8 flex flex-col",children:[e.jsxs("div",{className:"phone-widget flex justify-between items-center mb-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1",children:"Hoy"}),e.jsx("span",{className:"text-xl font-bold tracking-tight text-white drop-shadow-md",children:"Seguimiento"})]}),e.jsx("div",{className:"w-9 h-9 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-sm border border-white/10 shadow-lg shadow-black/50",children:"MV"})]}),e.jsxs("div",{className:"phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]",children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full","aria-hidden":"true",children:[e.jsx("circle",{cx:"88",cy:"88",r:"64",fill:"none",stroke:"rgba(255,255,255,0.03)",strokeWidth:"12"}),e.jsx("circle",{className:"progress-ring",cx:"88",cy:"88",r:"64",fill:"none",stroke:"#2E888D",strokeWidth:"12"})]}),e.jsxs("div",{className:"text-center z-10 flex flex-col items-center",children:[e.jsx("span",{className:"counter-val text-4xl font-extrabold tracking-tighter text-white",children:"0"}),e.jsx("span",{className:"text-[8px] text-vital/60 uppercase tracking-[0.1em] font-bold mt-0.5",children:y})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"phone-widget widget-depth rounded-2xl p-3 flex items-center",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-vital/20 to-vital/5 flex items-center justify-center mr-3 border border-vital/20 shadow-inner",children:e.jsx("svg",{className:"w-4 h-4 text-vital drop-shadow-md",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-2 w-20 bg-neutral-300 rounded-full mb-2 shadow-inner"}),e.jsx("div",{className:"h-1.5 w-12 bg-neutral-600 rounded-full shadow-inner"})]})]}),e.jsxs("div",{className:"phone-widget widget-depth rounded-2xl p-3 flex items-center",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-clinico/20 to-clinico/5 flex items-center justify-center mr-3 border border-clinico/20 shadow-inner",children:e.jsx("svg",{className:"w-4 h-4 text-clinico drop-shadow-md",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-2 w-16 bg-neutral-300 rounded-full mb-2 shadow-inner"}),e.jsx("div",{className:"h-1.5 w-24 bg-neutral-600 rounded-full shadow-inner"})]})]})]}),e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})]})]})]}),e.jsxs("div",{className:"floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30",children:[e.jsx("div",{className:"w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-vital/20 to-vital/5 flex items-center justify-center border border-vital/30 shadow-inner",children:e.jsx("span",{className:"text-base lg:text-xl drop-shadow-lg","aria-hidden":"true",children:"🏅"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white text-xs lg:text-sm font-bold tracking-tight",children:"Objetivo alcanzado"}),e.jsx("p",{className:"text-mineral/50 text-[10px] lg:text-xs font-medium",children:"Progreso registrado"})]})]}),e.jsxs("div",{className:"floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30",children:[e.jsx("div",{className:"w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-clinico/20 to-clinico/5 flex items-center justify-center border border-clinico/30 shadow-inner",children:e.jsx("span",{className:"text-base lg:text-lg drop-shadow-lg","aria-hidden":"true",children:"🩺"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white text-xs lg:text-sm font-bold tracking-tight",children:"Revisión clínica"}),e.jsx("p",{className:"text-mineral/50 text-[10px] lg:text-xs font-medium",children:"Equipo médico"})]})]})]})}),e.jsxs("div",{className:"card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0",children:[e.jsx("h3",{className:"text-white text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-0 lg:mb-5 tracking-tight",children:j}),e.jsx("p",{className:"hidden md:block text-mineral/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none",children:k})]})]})]})})]})}export{S as CinematicHero};
