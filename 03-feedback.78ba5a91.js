function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(S,t),c?b(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=m();if(E(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function h(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function w(){var e=m(),n=E(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?v(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=b.querySelector('input[name="email"]'),E=b.querySelector('textarea[name="message"]'),S=JSON.parse(localStorage.getItem("feedback-form-state"))||{};var h,w;(b.addEventListener("input",e(t)((function(){const e={userEmail:j.value,userMessage:E.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),S)&&(j.value=null!==(h=S.userEmail)&&void 0!==h?h:"",E.value=null!==(w=S.userMessage)&&void 0!==w?w:"");b.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.value.trim())return void alert("Заповніть поле Email для відправки повідомлення");if(""===E.value.trim())return void alert("Для відправлення повідомлення, спочатку потрібно його написати 😊");const t={userEmail:j.value,userMessage:E.value};console.log(t),j.value="",E.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.78ba5a91.js.map