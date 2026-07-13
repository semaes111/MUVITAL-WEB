import{a as m,j as p}from"./motion-_KkrOfeD.js";import{C as y,S as w,P as g,a as z,V as M,M as R,W as j}from"./three-Bsz_h2DP.js";import{u as C}from"./useReducedMotion-D6aS09Ja.js";function b(){const c=m.useRef(null),l=C();return m.useEffect(()=>{const t=c.current;if(!t)return;const n=new y;n.position.z=1;const a=new w,d=new g(2,2),i={time:{value:1},resolution:{value:new M}},h=`
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `,x=`
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float random (in float x) {
          return fract(sin(x)*1e4);
      }
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                               vec2(12.9898,78.233)))*
              43758.5453123);
      }

      varying vec2 vUv;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));
          }
        }

        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
      }
    `,v=new z({uniforms:i,vertexShader:h,fragmentShader:x}),S=new R(d,v);a.add(S);const o=new j({antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=o.domElement;e.style.width="100%",e.style.height="100%",e.style.display="block",t.appendChild(e);const r=()=>{const u=t.getBoundingClientRect();o.setSize(u.width,u.height),i.resolution.value.x=e.width,i.resolution.value.y=e.height};r(),window.addEventListener("resize",r);let s=0;const f=()=>{s=requestAnimationFrame(f),i.time.value+=.05,o.render(a,n)};return l?o.render(a,n):f(),()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",r),d.dispose(),v.dispose(),o.dispose(),e.parentNode===t&&t.removeChild(e)}},[l]),p.jsx("div",{"code-path":"src/components/canvas/ShaderAnimation.tsx:126:10",ref:c,className:"absolute inset-0 h-full w-full"})}export{b as default};
