!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.createHyphenator=t()}(this,function(){var P="debug",W="hyphenChar",E="minWordLength",t="object"==typeof global?global:"object"==typeof window?window:"object"==typeof this?this:{};function H(e){var t,n={};for(t in e)n[t]=e[t];return n}function F(e,t,n){return t in e?e[t]:n}function I(e,n){return e.exceptions.reduce(function(e,t){return e[t.replace(/\-/g,"")]=t.replace(/\-/g,n),e},{})}function n(e){for(var t,n=0,o={pattern:e,text:"",levels:[],stickToLeft:0,stickToRight:0},r=1,a=2,c=3,i=4;t=e.charAt(n++);){var s="."===t,l=!s&&/\d/.test(t);switch(s?n-1==0?c:i:l?a:r){case r:h||o.levels.push(0),o.text+=t;break;case a:o.levels.push(parseInt(t));break;case c:o.stickToLeft=!0;break;case i:o.stickToRight=!0}var h=l}return o}return function(y,e){var x=F(e=e||{},"async",!1),A={},T=F(e,P,!1),j={},L=F(e,W,"­"),D=y.patterns.map(n),C=F(e,E,5)>>0,R=F(e,"html",!1);if(j[e=L+C]=I(y,L),A[e]=H(j[e]),!x||"Promise"in t)return function(e,t){var n,o,r,a,c,i,s,l,h,f,u,p,g,d,v,b=F(t=t||{},P,T),k=F(t,W,L),t=F(t,E,C)>>0,w=k+t;return j[w]||(j[w]=I(y,k)),A[w]||(A[w]=H(j[w])),n=D,o=A[w],r=b,c=x,l="",w=function(c,i,s,l){var h,f,u=RegExp.prototype.test.bind(/\s/),p=0;return[function(){var e="";h=void 0;e:for(;p<=c.length;){var t=c.charAt(p++),n=!!t&&!/\s|[\!-\@\[-\`\{-\~\u2013-\u203C]/.test(t),o="<"===t,r=">"===t,a=t===i;do{if(1===f){r&&(f=3);break}if(a){f=h=2;break}if(n){f=2;break}if(2===f){f=4,h=h||e.length>=l&&1;break}}while(h=2,f=3,0);switch(o&&4!==f&&s&&!u(c.charAt(p))&&(h=2,f=1),f){case 1:case 2:e+=t;break;case 3:e+=t;break e;case 4:p--;break e}}return e||void 0},function(){return 1===h}]}(w=e,a=k,R,t),h=w[0],f=w[1],p=u=0,g=new Date,d=0,v=function(){},c?(setTimeout(m),new Promise(function(e){v=e})):(m(),l);function m(){for(var e=new Date;(!c||new Date-e<10)&&(s=h());)i=s.length?"$"+s:"",f()&&(void 0===o[i]&&(o[i]=function(e,t,n,o){for(var r,a=new Array(e.length+1),c=e.toLocaleLowerCase(),i=[],s=0,l=a.length;l--;)a[l]=0;for(;r=t[s++];)for(var h=0,f=!1;!f;){var u=c.indexOf(r.text,h);if(-1<u&&(!r.stickToLeft||0===u)&&(!r.stickToRight||u+r.text.length===e.length)){i.push(r.pattern+">"+r.levels.join(""));for(l=0;l<r.levels.length;l++)a[u+l]=Math.max(r.levels[l],a[u+l])}-1<u&&0<r.text.length?h=u+r.text.length+1:f=!0}a[0]=a[1]=a[a.length-1]=a[a.length-2]=0;for(var p="",g="",d="",l=0;l<a.length;l++)p+=(a[l]%2==1?o:"")+e.charAt(l),d+=(a[l]%2==1?"-":"")+e.charAt(l),g+=(0<a[l]?a[l]:"")+e.charAt(l);n&&console.log.apply(console,[e,"->"].concat(i).concat(["->"]).concat(a).concat(["->",g]).concat(["->",d]));return p}(s,n,r,a)),s!==o[i]&&p++,s=o[i]),l+=s,u++;d+=new Date-e,s?setTimeout(m):(g=new Date-g,v(l),r&&(console.log("----------------\nHyphenation stats: "+u+" text chunks processed, "+p+" words hyphenated"),console.log("Work time: "+d/1e3),console.log("Wait time: "+(g-d)/1e3),console.log("All time: "+g/1e3)))}};throw new Error("Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode")}});