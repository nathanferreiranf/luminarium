_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},o=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return a||r&&i}},"8Kt/":function(e,t,a){"use strict";a("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),o=(n=a("Xuae"))&&n.__esModule?n:{default:n},i=a("lwAK"),s=a("FYa8"),u=a("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var c=f[s];if(r.props.hasOwnProperty(c))if("charSet"===c)a.has(c)?o=!1:a.add(c);else{var d=r.props[c],l=n[c]||new Set;l.has(d)?o=!1:(l.add(d),n[c]=l)}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,a=(0,r.useContext)(i.AmpStateContext),n=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(a)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},O2ls:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("q1tI"),r=a.n(n),o=a("8Kt/"),i=a.n(o),s=a("0b+E"),u=a("nOHt"),c=a("f677"),d=a("T00j"),l=r.a.createElement;function f(){var e=Object(u.useRouter)(),t=Object(n.useContext)(d.b),a=t.setUser,o=(t.authenticated,t.setAuthenticated),f=Object(n.useState)(!1),p=f[0],m=f[1],v=Object(n.useState)(""),h=v[0],b=v[1],g=Object(n.useState)(""),y=g[0],w=g[1],_=Object(n.useState)(!1),k=_[0],S=_[1],N=Object(n.useState)(!1),O=N[0],M=N[1],j=Object(n.useState)(""),x=j[0],A=j[1],C=Object(n.useState)({}),I=C[0],E=C[1],P=function(e){var t={invalid:!1,message:""};return I.hasOwnProperty(e)&&(t.invalid=!0,t.message=I[e][0]),t};return Object(n.useEffect)((function(){s.a.pageview(window.location.pathname+window.location.search)}),[]),l(r.a.Fragment,null,l(i.a,null,l("title",null,"Luminarium"," | Login")),l("div",{className:"auth-page",style:{backgroundImage:"url('/images/bg_auth.jpg')"}},l("div",{className:"card card-auth"},l("div",{className:"card-body"},l("form",{onSubmit:function(t){t.preventDefault(),m(!0),c.a.login({id_evento:"bedf10b8-80e0-4121-a969-78d20f5ba9ff",email:h,password:y}).then((function(t){var n=t.data;localStorage.setItem("user",JSON.stringify(n.user)),a(n.user),o(!0),e.push("/")})).catch((function(e){var t=e.response;if(M(!1),A(""),E({}),void 0==t||400==t.status||500==t.status)return M(!0),A("Houve um problema ao fazer o login, tente novamente em alguns segundos!"),!1;t.data.hasOwnProperty("errors")?E(t.data.errors):(M(!0),A(t.data.message))})).finally((function(){m(!1)}))}},l("div",{className:"form-group"},l("label",{htmlFor:"email"},"LOGIN:"),l("input",{type:"email",className:"form-control shadow-sm ".concat(P("email").invalid?"is-invalid":""),value:h,"aria-describedby":"emailFeedback",onChange:function(e){return b(e.target.value)}}),P("email").invalid?l("div",{id:"emailFeedback",className:"invalid-feedback"},P("email").message):""),l("div",{className:"form-group"},l("label",null,"SENHA:"),l("input",{type:"password",className:"form-control shadow-sm ".concat(P("password").invalid?"is-invalid":""),value:y,"aria-describedby":"passwordFeedback",onChange:function(e){return w(e.target.value)}}),P("password").invalid?l("div",{id:"passwordFeedback",className:"invalid-feedback"},P("password").message):""),l("div",{className:"form-group"},l("div",{className:"form-check d-flex align-items-center"},l("input",{className:"form-check-input",type:"checkbox",value:"true",id:"checkTermos",onChange:function(e){return S(!k)}}),l("label",{className:"form-check-label ml-2",htmlFor:"checkTermos",style:{fontSize:12}},"Ao entrar na Plataforma Virtual do Congresso Luminarium tenho conhecimento de que terei acesso a um diversificado material gravado e \u201cao vivo\u201d. Estou ciente que todos os conte\xfados est\xe3o protegidos pela Lei dos Direitos Autorais e que \xe9 proibido gravar, distribuir e comercializar qualquer conte\xfado."))),O&&l("div",{className:"alert alert-danger text-center",role:"alert"},x),l("div",{className:"form-row"},l("div",{className:"col-12"},l("button",{type:"submit",className:"btn btn-entrar d-flex align-items-center justify-content-center mx-auto",disabled:p||!k},p&&l("div",{className:"spinner-border spinner-border-sm mr-2",role:"status"},l("span",{className:"sr-only"},"Loading...")),l("span",null,p?"Entrando":"Entrar")))))))))}},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),o=a("ZhPi"),i=a("Bnag");e.exports=function(e){return n(e)||r(e)||o(e)||i()}},Xuae:function(e,t,a){"use strict";var n=a("RIqP"),r=a("lwsE"),o=a("W8MJ"),i=(a("PJYZ"),a("7W2i")),s=a("a1gu"),u=a("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=u(e);if(t){var r=u(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return s(this,a)}}t.__esModule=!0,t.default=void 0;var d=a("q1tI"),l=function(e){i(a,e);var t=c(a);function a(e){var o;return r(this,a),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(d.Component);t.default=l},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},u6Hu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("O2ls")}])}},[["u6Hu",0,2,1,3]]]);