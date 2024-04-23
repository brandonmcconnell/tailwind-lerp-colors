import e from"chroma-js";import o from"tailwindcss/colors";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},r.apply(this,arguments)}function t(e){return Object.keys(e)}function n(e){return Object.entries(e)}const l=["rgb","lab","lch","lrgb","hcl","num","hcg","oklch","hsi","hsl","hsv","oklab"],s={lerpEnds:!0,interval:25,mode:"lrgb"},i=r({includeBase:!0,includeLegacy:!1},s),a=(e,o,r)=>e&&Object.prototype.hasOwnProperty.call(e,o)&&!r(e[o]),c=e=>{throw new Error(e)},u=e=>!(null==e||"object"!=typeof e||Array.isArray(e)||"[object Object]"!==e.toString()||!t(e).every(e=>!isNaN(+e))),p=(o,t={})=>{a(t,"lerpEnds",e=>"boolean"==typeof e)&&c("tailwind-lerp-colors option `lerpEnds` must be a boolean."),a(t,"interval",e=>Number.isInteger(e)&&"number"==typeof e&&e>0)&&c("tailwind-lerp-colors option `interval` must be a positive integer greater than 0."),a(t,"mode",e=>"string"==typeof e&&l.includes(e))&&c(`tailwind-lerp-colors option \`mode\` must be one of the following values: ${l.join(", ")}.`),u(o)||c("tailwind-lerp-colors object `shades` must be an object with numeric keys.\n\nvalue used: "+JSON.stringify(o,null,2));const{lerpEnds:i,interval:p,mode:d}=r({},s,null!=t?t:{}),b=([e],[o])=>e-o,f=n(o).map(([e,o])=>[Number(e),o]).sort(b);i&&(f.unshift([0,"#ffffff"]),f.push([1e3,"#000000"]));const m=[...f];for(let o=0;o<f.length-1;o++){const[r,t]=f[o],[n,l]=f[o+1],s=(n-r)/p-1;if(s<=0||!Number.isInteger(s))continue;const i=e.scale([t,l]).mode(d),a=e=>i(e).hex();for(let e=1;e<=s;e++)m.push([r+p*e,a(e/(s+1))])}return m.sort(b),Object.fromEntries(m)},d=(e={},l={})=>{a(l,"includeBase",e=>"boolean"==typeof e)&&c("tailwind-lerp-colors option `includeBase` must be a boolean."),a(l,"includeLegacy",e=>"boolean"==typeof e)&&c("tailwind-lerp-colors option `includeLegacy` must be a boolean.");const s=["lightBlue","warmGray","trueGray","coolGray","blueGray"],{includeBase:d,includeLegacy:b,lerpEnds:f,interval:m,mode:y}=r({},i,l),h={};if(d){const e=t(o);for(const r of e)s.includes(r)&&!b||(h[r]=o[r])}const g=n(r({},h,e)),v={};for(const[e,o]of g)v[`${e}`]=o,u(o)&&(v[e]=p(o,{lerpEnds:f,interval:m,mode:y}));return v};module.exports={validColorModes:l,lerpColor:p,lerpColors:d};export{p as lerpColor,d as lerpColors,l as validColorModes};
//# sourceMappingURL=index.modern.js.map
