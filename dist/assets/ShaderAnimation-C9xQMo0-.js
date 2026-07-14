import{b as m,d as y,j as p}from"./index-sCXSjyQJ.js";import{p as w,S as g,q as z,f as M,j,M as R,W as C}from"./three.module-Dg0KGVSB.js";function b(){const c=m.useRef(null),l=y();return m.useEffect(()=>{const t=c.current;if(!t)return;const n=new w;n.position.z=1;const r=new g,d=new z(2,2),i={time:{value:1},resolution:{value:new j}},h=`
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
    `,f=new M({uniforms:i,vertexShader:h,fragmentShader:x}),S=new R(d,f);r.add(S);const o=new C({antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=o.domElement;e.style.width="100%",e.style.height="100%",e.style.display="block",t.appendChild(e);const a=()=>{const u=t.getBoundingClientRect();o.setSize(u.width,u.height),i.resolution.value.x=e.width,i.resolution.value.y=e.height};a(),window.addEventListener("resize",a);let s=0;const v=()=>{s=requestAnimationFrame(v),i.time.value+=.05,o.render(r,n)};return l?o.render(r,n):v(),()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",a),d.dispose(),f.dispose(),o.dispose(),e.parentNode===t&&t.removeChild(e)}},[l]),p.jsx("div",{ref:c,className:"absolute inset-0 h-full w-full"})}export{b as default};
