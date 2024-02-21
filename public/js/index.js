(function(){const s=document.documentElement,k="https://example.org/";function h(e="div"){return document.createElement(e)}function t(e){let t=document.querySelector(e);return t!=!1&&t}function y(e,t=document){let n=t.querySelectorAll(e);return!!n.length&&n}function o(e,t){e&&typeof e=="object"&&t&&(elClass=e.classList,!elClass.contains(t)&&elClass.add(t))}function g(e,t){e&&typeof e=="object"&&t&&(elClass=e.classList,!!elClass.contains(t)&&elClass.remove(t))}function i(e,t){e&&typeof e=="object"&&t&&(elClass=e.classList,elClass.contains(t)?elClass.remove(t):elClass.add(t))}function n(e,t){if(e&&typeof e=="object"&&t)return!!e.classList.contains(t)}function x(e,t){let n=e&&typeof e=="object";if(n){if(Array.isArray(t)){let n=!1;return t.forEach(function(t){e.closest(t)!=null&&(n=!0)}),!!n}if(typeof t=="string")return!!e.closest(t)}}function c(e,t,s=!1){const o=n(e,t),i=e.closest(`.${t}`);if(s&&o)return o;if(!s)return o||i}function O(e,t){e.parentNode.insertBefore(t,e),t.appendChild(e)}(function(){const n=t(".year");if(n){const e=new Date,t=e.getFullYear();n.innerHTML=t}})(),function(){let r="nav_bar-wrap",l=t(`.${r}`),e=t(".nav-body"),o="nav-open",a="nav-exit",d="nav-drop",u="nav-pop",h=t(`.${d}`),m="hidden";function f(){i(h,u),i(l,m);let s=n(e,o),r=n(e,a),t=!!(s||r);t?i(e,a):i(e,o),t?i(e,o):i(e,a)}s.addEventListener("click",function(e){let t=e.target;const n=c(t,"nav-drop",!0),s=c(t,"nav-close",!0),o=c(t,"nav_bar-wrap");!!(n||s||o)&&f()})}(),function e(){let e=t(".share"),n="share-open",s="share-close",i=t(".share-trigger");function a(){o(e,n),g(e,s)}function r(){o(e,n),g(e,s)}i&&i.addEventListener("click",function(){a(),setTimeout(r,5e3)})}();function e(e,t,n=null){if(n)e.setAttribute(t,n);else return n=e.getAttribute(t),n||!1}(function(){const t=y("pre");t&&Array.from(t).forEach(function(e){const t=e.parentNode,s=!n(t,"highlight");if(s){const t=h();o(t,"highlight"),o(t,"sans"),O(e,t)}})})(),function(){let t=document.querySelectorAll("a");t&&Array.from(t).forEach(function(t){let o,a,r,i,c,l,s,d;s=e(t,"href"),d=!!(s&&typeof s=="string"&&s.startsWith("http")&&!n(t,"nav_item")&&!x(t,[".archive",".article",".post_nav",".pager"])),d&&(o="target",a="rel",r="_blank",i="noopener",c=e(t,o),l=e(t,i),!c&&e(t,o,r),!l&&e(t,a,i))})}();function S(e,t,n="icons/"){const s=`${k}${n}${e}.svg`;fetch(s).then(e=>{const t=e.status==200?e.text():"";return t}).then(e=>{t.innerHTML=e})}let p=[],w,a,M,b,m,E=["h2","h3","h4","h5","h6"];b=document.URL,E.forEach(function(e){w=document.getElementsByTagName(e),Array.prototype.push.apply(p,w)}),p.forEach(function(e){a=h("a"),a.className="link",m=e.getAttribute("id"),S("link",a,"images/icons/"),m&&(a.href=`${b}#${m}`,e.appendChild(a),o(e,"link_owner"))});function _(e){const t=h("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}(function(){let t="link",n=document.querySelectorAll(`.${t}`);n&&document.body.addEventListener("click",function(e){let n=e.target;if(n.classList.contains(t)||n.parentNode.classList.contains(t)){e.preventDefault();let t=n.href!=void 0?n.href:n.parentNode.href;_(t)}})})(),function(){let r,l,d,u,h,i,p,m,f,a;r="copy",l="copy_done",d="excerpt",m="post_copy",f="post_card",s.addEventListener("click",function(t){a=t.target;const s=a.closest(`.${r}`);u=c(a,r),h=n(a,m),u&&(t.preventDefault(),h?(i=a.closest(`.${d}`).previousElementSibling,i=!!n(i,f)&&e(i,"href")):i=window.location.href,i&&(_(i),s?o(s,l):o(a,l)))})}(),function(){let n,s,o;n=t(".aside"),s=n?n.previousElementSibling:null,n&&s.nodeName.toLowerCase()==="h3"&&(o=Array.from(n.children),o.length<1&&s.remove())}(),function(){let n=t(".btn_back"),s=window.history;n&&n.addEventListener("click",function(){s.back()})}();const u="lit",r="dim",l="colorMode",C="--color-mode",d="data-mode",f=window.localStorage;function A(){let e=u+r;e=[...e];let t=getComputedStyle(s).getPropertyValue(C).replace(/"/g,"").trim();return t=[...t].filter(function(t){return e.includes(t)}),t.join("")}function j(t){t?(f.setItem(l,u),e(s,d,u)):(f.setItem(l,r),e(s,d,r))}(function(){function t(e){let t=y(e);t&&Array.from(t).forEach(function(e){e.loading="lazy"})}t("iframe"),t("img")})();function v(t=!1){const n=A()==r,o=f.getItem(l);o?t?j(n):e(s,d,o):t===!0&&j(n)}v(),s.addEventListener("click",function(e){let t=e.target,s="color_choice",o=n(t,s);o&&v(!0)})})()