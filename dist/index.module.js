import e from"chroma-js";import r from"tailwindcss/colors";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(this,arguments)}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){return Object.keys(e)}function l(e){return Object.entries(e)}var a=["rgb","lab","lch","lrgb","hcl","num","hcg","oklch","hsi","hsl","hsv","oklab"],u={lerpEnds:!0,interval:25,mode:"lrgb"},c=n({includeBase:!0,includeLegacy:!1},u),s=function(e,r,n){return e&&Object.prototype.hasOwnProperty.call(e,r)&&!n(e[r])},f=function(e){throw new Error(e)},d=function(e){return!(null==e||"object"!=typeof e||Array.isArray(e)||"[object Object]"!==e.toString()||!i(e).every(function(e){return!isNaN(+e)}))},p=function(r,t){var o;void 0===t&&(t={}),s(t,"lerpEnds",function(e){return"boolean"==typeof e})&&f("tailwind-lerp-colors option `lerpEnds` must be a boolean."),s(t,"interval",function(e){return Number.isInteger(e)&&"number"==typeof e&&e>0})&&f("tailwind-lerp-colors option `interval` must be a positive integer greater than 0."),s(t,"mode",function(e){return"string"==typeof e&&a.includes(e)})&&f("tailwind-lerp-colors option `mode` must be one of the following values: "+a.join(", ")+"."),d(r)||f("tailwind-lerp-colors object `shades` must be an object with numeric keys.\n\nvalue used: "+JSON.stringify(r,null,2));var i=n({},u,null!=(o=t)?o:{}),c=i.lerpEnds,p=i.interval,b=i.mode,v=function(e,r){return e[0]-r[0]},m=l(r).map(function(e){var r=e[1];return[Number(e[0]),r]}).sort(v);c&&(m.unshift([0,"#ffffff"]),m.push([1e3,"#000000"]));for(var y=[].concat(m),h=function(){var r,n=m[g],t=n[0],o=n[1],i=m[g+1],l=i[1],a=(i[0]-t)/p-1;if(a<=0||!Number.isInteger(a))return 1;for(var u=e.scale([o,l]).mode(b),c=1;c<=a;c++)y.push([t+p*c,(r=c/(a+1),u(r).hex())])},g=0;g<m.length-1;g++)h();return y.sort(v),Object.fromEntries(y)},b=function(e,t){void 0===e&&(e={}),void 0===t&&(t={}),s(t,"includeBase",function(e){return"boolean"==typeof e})&&f("tailwind-lerp-colors option `includeBase` must be a boolean."),s(t,"includeLegacy",function(e){return"boolean"==typeof e})&&f("tailwind-lerp-colors option `includeLegacy` must be a boolean.");var a=["lightBlue","warmGray","trueGray","coolGray","blueGray"],u=n({},c,t),b=u.includeLegacy,v=u.lerpEnds,m=u.interval,y=u.mode,h={};if(u.includeBase)for(var g,j=o(i(r));!(g=j()).done;){var w=g.value;a.includes(w)&&!b||(h[w]=r[w])}for(var O,E={},A=o(l(n({},h,e)));!(O=A()).done;){var S=O.value,N=S[0],B=S[1];E[""+N]=B,d(B)&&(E[N]=p(B,{lerpEnds:v,interval:m,mode:y}))}return E};module.exports={validColorModes:a,lerpColor:p,lerpColors:b};export{p as lerpColor,b as lerpColors,a as validColorModes};
//# sourceMappingURL=index.module.js.map
