(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"2005262159000",f:(function(AMP,_){
var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},p={};try{p.__proto__=ca;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=l;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=t(c[1],c[1]),e=c[2]?t(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var v="";
function ia(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{var c=self.AMP_CONFIG||{};b=u(a.location.originalHash||a.location.hash);c=c.spt;var d=u(a.location.search);v||(v=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012005262159000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:b.log,version:"2005262159000",rtvVersion:v,
singlePassType:c};b=a.__AMP_MODE=b}return b};var ja=Object.prototype.toString;var w=self.AMP_CONFIG||{},ka=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function x(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||x("runtime-host");w.geoApiUrl||x("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor");}function B(a,b,c,d){z().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function C(a,b){this.name=a;this.type=b}C.prototype.filter=function(){};C.prototype.onLayoutMeasure=function(){};function la(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var D=Object.prototype.hasOwnProperty;function E(){this.N=100;this.D=this.H=0;this.o=Object.create(null)}E.prototype.has=function(a){return!!this.o[a]};E.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.D,b.payload};E.prototype.put=function(a,b){this.has(a)||this.H++;this.o[a]={payload:b,access:this.D};if(!(this.H<=this.N)){A().warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.D+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.H--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var F,G;
function H(a){F||(F=self.document.createElement("a"),G=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new E));var b=G,c=F;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};function I(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var k=f.getAttribute("content").split(",");for(c=0;c<k.length;c++)-1!=e.indexOf(k[c])&&(b[k[c]]=!0)}}Object.assign(b,ma(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=u(a.location.originalHash||a.location.hash);for(var g=0;g<c.length;g++){var n=a["e-"+c[g]];"1"==n&&(b[c[g]]=!0);"0"==n&&(b[c[g]]=!1)}}return b}
function ma(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){A().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var J={},K=(J["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},J);function na(a){var b=a.ownerDocument.defaultView,c=L(b),d=b!=c;if(I(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(f in K)if(D.call(K,f)&&!D.call(c.__AMP_EXPERIMENT_BRANCHES,f))if(K[f].isTrafficEligible&&K[f].isTrafficEligible(c)){var e;if(e=!c.__AMP_EXPERIMENT_BRANCHES[f])e=f,e=!!I(c)[e];e&&(e=K[f].branches,c.__AMP_EXPERIMENT_BRANCHES[f]=e[Math.floor(Math.random()*e.length)]||null)}else c.__AMP_EXPERIMENT_BRANCHES[f]=null;var f="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var k=f;d&&!k?a=M(b,"url-replace")?O(b,"url-replace"):null:(a=P(a),a=Q(a),a=M(a,"url-replace")?O(a,"url-replace"):null);return a}function L(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function P(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=L(b);a=O(b,"ampdoc").getAmpDoc(a)}return a}function Q(a){a=P(a);return a.isSingleDoc()?a.win:a}
function O(a,b){M(a,b);a=R(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function oa(a){var b;(b=R(a)["host-exit"])?b.promise?b=b.promise:(O(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=R(a);a["host-exit"]=pa();return a["host-exit"].promise}function R(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}
function M(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function pa(){var a=new la,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function S(a,b,c){try{var d=a.open(b,c,void 0)}catch(f){A().error("DOM","Failed to open url on target: ",c,f)}if(!(c=d||"_top"==c)){var e;"number"!==typeof e&&(e=0);c=0<e+8?!1:-1!=="".indexOf("noopener",e)}c||a.open(b,"_top")};var T;function qa(a,b){var c=a,d=b;var e=function(a){try{return d(a)}catch(g){throw self.__AMP_REPORT_ERROR(g),g;}};var f=ra();c.addEventListener("message",e,f?void 0:!1);return function(){c&&c.removeEventListener("message",e,f?void 0:!1);e=c=d=null}}function ra(){if(void 0!==T)return T;T=!1;try{var a={get capture(){T=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return T};function sa(a,b){return qa(a,b)};var U={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};Object.assign({},U,{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function ta(a){B("object"==typeof a);if(a.filters){var b=a.filters,c=["clickDelay","clickLocation","inactiveElement"],d;for(d in b)B("object"==typeof b[d],"Filter specification '%s' is malformed",d),B(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var e in b)B("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),B("boolean"==typeof b[e])}else a.transport={};e=a.targets;B("object"==typeof e,"'targets' must be an object");for(var f in e)ua(f,
e[f],a);return a}function ua(a,b,c){B("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(function(a){B(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)B(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function va(a){return z().assertString(U[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")};function V(a,b,c){C.call(this,a,b.type);B("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?A().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:A().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}
r(V,C);V.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function wa(a){return{type:"clickDelay",delay:1E3,startTimingEvent:a}};function W(a,b,c){C.call(this,a,b.type);B("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.O=b.left||0;this.P=b.right||0;this.S=b.top||0;this.M=b.bottom||0;this.G=b.relativeTo;this.J=c;this.h=
{top:0,right:0,bottom:0,left:0}}r(W,C);W.prototype.filter=function(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1};
W.prototype.onLayoutMeasure=function(){var a=this;this.J.getVsync().measure(function(){var b=a.J.win;if(a.G){var c=b.document.querySelector(a.G);B(c,"relativeTo element "+a.G+" not found.");var d=c.getBoundingClientRect();a.h.left=d.left;a.h.top=d.top;a.h.bottom=d.bottom;a.h.right=d.right}else a.h.left=0,a.h.top=0,a.h.bottom=b.innerHeight,a.h.right=b.innerWidth;a.h.left+=a.O;a.h.top+=a.S;a.h.right-=a.P;a.h.bottom-=a.M})};function X(a,b){C.call(this,a,b.type);B("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.R=b.selector}r(X,C);X.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.R))};function Y(a,b,c){switch(b.type){case "clickDelay":return new V(a,b,c.win);case "clickLocation":return new W(a,b,c);case "inactiveElement":return new X(a,b)}};function xa(a,b){try{a:{var c=(a.ownerDocument||a).defaultView,d=b||L(c);if(c&&c!=d&&L(c)==d)try{var e=c.frameElement;break a}catch(k){}e=null}var f=e.parentElement;if("AMP-AD"==f.nodeName)return String(f.getResourceId())}catch(k){}return null};function Z(a){a=AMP.BaseElement.call(this,a)||this;a.I={};a.K={};a.w=[];a.A={beacon:!0,image:!0};a.C={};a.registerAction("exit",a.exit.bind(a));a.registerAction("setVariable",a.setVariable.bind(a),1);a.L={};a.B=null;a.m=null;a.F={};return a}r(Z,AMP.BaseElement);h=Z.prototype;
h.exit=function(a){var b=this,c=a.args,d=a.event;B("variable"in c!="target"in c,"One and only one of 'target' and 'variable' must be specified");var e;"variable"in c?((e=this.K[c.variable])||(e=c["default"]),B(e,"Variable target not found, variable:'"+c.variable+"', default:'"+c["default"]+"'"),delete c["default"]):e=c.target;var f=this.I[e];B(f,"Exit target not found: '"+e+"'");B(d,"Unexpected null event");d.preventDefault();if(ya(this.w,d)&&ya(f.filters,d)){var k=za(this,c,d,f);f.trackingUrls&&
f.trackingUrls.map(k).forEach(function(a){b.A.beacon&&b.win.navigator.sendBeacon&&b.win.navigator.sendBeacon(a,"")||!b.A.image||(b.win.document.createElement("img").src=a)});var g=k(f.finalUrl);P(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]")?oa(Q(this.getAmpDoc())).then(function(a){return a.openUrl(g)}).catch(function(a){a.fallback&&S(b.win,g,"_blank")}):S(this.win,g,f.behaviors&&f.behaviors.clickTarget&&"_top"==f.behaviors.clickTarget?"_top":"_blank")}};
h.setVariable=function(a){a=a.args;B(this.I[a.target],"Exit target not found: '"+a.target+"'");this.K[a.name]=a.target};
function za(a,b,c,d){var e={CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=na(a.element),k={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars){var g={},n;for(n in d.vars)g.j=n,"_"==g.j[0]&&(g.l=d.vars[g.j],g.l&&(e[g.j]=function(c){return function(){if(c.l.iframeTransportSignal){var d=f.expandStringSync(c.l.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(b,c){if(!b||!c)return"";var d=a.L[b];if(d&&c in d)return d[c]}});if(c.l.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+
d)A().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+d+" (perhaps there is a space after a comma?)");else if(""!=d)return d}return c.j in b?b[c.j]:c.l.defaultValue}}(g),k[g.j]=!0)),g={l:g.l,j:g.j}}return function(a){return f.expandUrlSync(a,e,k)}}function ya(a,b){return a.every(function(a){var c=a.filter(b);z().info("amp-ad-exit","Filter '"+a.name+"': "+(c?"pass":"fail"));return c})}
h.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.w.push(Y("minDelay",wa(),this));this.w.push(Y("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;B(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];B("SCRIPT"==b.tagName&&b.hasAttribute("type")&&"APPLICATION/JSON"==b.getAttribute("type").toUpperCase(),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
try{var c=ta(JSON.parse(b.textContent));if("[object Object]"===ja.call(c.options)&&"string"===typeof c.options.startTimingEvent){var d=c.options.startTimingEvent;this.w.splice(0,1,Y("minDelay",wa(c.options.startTimingEvent),this))}for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.C[e]=Y(e,f,this)}for(var k in c.targets){var g=c.targets[k];this.I[k]={finalUrl:g.finalUrl,trackingUrls:g.trackingUrls||[],vars:g.vars||{},filters:(g.filters||
[]).map(function(b){return a.C[b]}).filter(function(a){return a}),behaviors:g.behaviors||{}};for(var n in g.vars)if(g.vars[n].iframeTransportSignal){var N=g.vars[n].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(N&&!(2>N.length)){var fa=N[1],da=H(va(fa)).origin;this.F[da]=this.F[da]||fa}}}this.A.beacon=!1!==c.transport.beacon;this.A.image=!1!==c.transport.image}catch(ea){throw this.user().error("amp-ad-exit","Invalid JSON config",ea),ea;}Aa(this)};h.resumeCallback=function(){Aa(this)};
h.unlayoutCallback=function(){this.B&&(this.B(),this.B=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};
function Aa(a){"inabox"!=ia().runtime&&(a.m=a.m||xa(a.element,L(a.win)),a.m?a.B=sa(a.getAmpDoc().win,function(b){if(a.F[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(k){A().error("MESSAGING","Failed to parse message: "+c,k),e=null}}else e=null;var f=e;f&&"iframe-transport-response"==f.type&&(b=b.origin,B(f.message,"Received empty response from 3p analytics frame"),B(f.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),
B(f.vendor,"Received malformed message from 3p analytics frame: vendor missing"),e=H(va(f.vendor)),B(e&&e.origin==b,"Invalid origin for vendor "+(f.vendor+": "+b)),f.creativeId==a.m&&(a.L[f.vendor]=f.message))}}):z().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}h.isLayoutSupported=function(){return!0};h.onLayoutMeasure=function(){for(var a in this.C)this.C[a].onLayoutMeasure()};(function(a){a.registerElement("amp-ad-exit",Z)})(self.AMP);
})});

//# sourceMappingURL=amp-ad-exit-0.1.js.map
