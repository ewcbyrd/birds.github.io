!function(e){function s(s){for(var a,i,d=s[0],r=s[1],o=s[2],p=0,h=[];p<d.length;p++)i=d[p],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&h.push(l[i][0]),l[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(c&&c(s);h.length;)h.shift()();return n.push.apply(n,o||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],a=!0,d=1;d<t.length;d++){var r=t[d];0!==l[r]&&(a=!1)}a&&(n.splice(s--,1),e=i(i.s=t[0]))}return e}var a={},l={1:0},n=[];function i(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)i.d(t,a,function(s){return e[s]}.bind(null,a));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="./";var d=window.webpackJsonp=window.webpackJsonp||[],r=d.push.bind(d);d.push=s,d=d.slice();for(var o=0;o<d.length;o++)s(d[o]);var c=r;n.push([1,0,2]),t()}([,function(e,s,t){e.exports=t(4)},,,function(e,s,t){"use strict";t.r(s);t(2);var a=t(0);var l=[function(e,s,t){return[".main",s," {background-color: white;}\n.center",s," {text-align: center;}\n.header",s," {background-color: #73a0c5;font-family: 'Lucida Grande', Verdana, Arial, Sans-Serif;color: white;}\n.header1",s," {font-size: 40px;font-weight: 700;}\n.header2",s," {font-size: 1.2em;}\n"].join("")}];var n=[function(e,s,t){return["pre",s," {white-space: pre-wrap;font-size: 0.8125rem;font-family: Arial, Helvetica, sans-serif;}\ntable",s," {table-layout:fixed;width:100%;}\n"].join("")}];function i(e,s,t,l){const{h:n,t:i,b:d,d:r,k:o,i:c,f:p,gid:h}=e,{_m0:y,_m1:u,_m2:v}=l;return[s.yearEvents?n("div",{classMap:{"slds-p-top_small":!0},key:27},[n("div",{classMap:{"slds-card":!0},key:26},[n("div",{classMap:{"slds-card__header":!0},key:12},[n("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:11},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-event":!0},attrs:{title:"Description of icon when needed"},key:3},[n("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:1},[n("use",{attrs:{"xlink:href":Object(a.f)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#event")},key:0},[])]),n("span",{classMap:{"slds-assistive-text":!0},key:2},[i("Description of icon when needed")])]),n("div",{classMap:{"slds-media__body":!0},key:10},[n("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-truncate":!0},key:9},[n("select",{key:7,on:{change:y||(l._m0=d(s.handleYearChange))}},[n("option",{attrs:{value:"2021"},key:4},[i("2021")]),n("option",{attrs:{value:"2020"},key:5},[i("2020")]),n("option",{attrs:{value:"2019"},key:6},[i("2019")])]),i(" Calendar of Events"),n("div",{styleMap:{float:"right"},key:8},[])])])])]),n("div",{classMap:{"slds-card__body":!0},key:25},[n("div",{classMap:{"slds-scrollable--x":!0},key:24},[n("table",{classMap:{"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:23},[n("thead",{key:18},[n("tr",{classMap:{"slds-text-heading--label":!0},key:17},[n("th",{attrs:{scope:"col"},key:14},[n("span",{classMap:{"slds-truncate":!0},key:13},[i("Date(s)")])]),n("th",{attrs:{scope:"col"},key:16},[n("span",{classMap:{"slds-truncate":!0},key:15},[i("Event")])])])]),n("tbody",{key:22},c(s.yearEvents,(function(e){return n("tr",{classMap:{"slds-hint-parent":!0},attrs:{"data-item":e.id},key:o(21,e.id),on:{click:u||(l._m1=d(s.handleEventClick))}},[n("td",{classMap:{"slds-cell-wrap":!0},key:19},[r(e.date)]),n("td",{classMap:{"slds-cell-wrap":!0},key:20},[r(e.event)])])})))])])])])]):null,s.yearEvents&&s.showModal?n("section",{classMap:{"slds-modal":!0,"slds-fade-in-open":!0},attrs:{role:"dialog",tabindex:"-1","aria-labelledby":""+h("modal-heading-01"),"aria-modal":"true","aria-describedby":""+h("modal-content-id-1")},key:41},[n("div",{classMap:{"slds-modal__container":!0},key:40},[n("header",{classMap:{"slds-modal__header":!0},key:30},[s.selectedEvent.event?n("div",{classMap:{"slds-text-heading_medium":!0,"slds-hyphenate":!0,"header-string":!0},key:28},[r(s.selectedEvent.event)]):null,s.selectedEvent.event?n("div",{classMap:{"slds-text-heading_small":!0},key:29},[r(s.selectedEvent.date)]):null]),n("div",{classMap:{"slds-modal__content":!0,"slds-p-around_medium":!0},attrs:{id:h("modal-content-id-1")},key:37},[s.selectedEvent.tripReport?null:s.selectedEvent.details?n("pre",{classMap:{"slds-text-body_small":!0},key:31},[r(s.selectedEvent.details)]):null,s.selectedEvent.tripReport?n("div",{classMap:{"slds-text-body_small":!0},key:33},[n("pre",{key:32},[r(s.selectedEvent.tripReport)])]):null,s.sightings?n("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-p-left_small":!0,"slds-p-right_small":!0},styleMap:{width:"80%",margin:"0 auto"},key:36},p([n("div",{classMap:{"slds-size_1-of-1":!0,"slds-p-top_small":!0,"slds-text-align_center":!0,"slds-text-heading_small":!0},key:34},[i("Species Sighted")]),c(s.selectedEvent.sightings,(function(e){return n("div",{classMap:{"slds-size_1-of-2":!0,"slds-cell-wrap":!0,"slds-p-left_x-small":!0,"slds-p-right_x-small":!0},key:o(35,e.id)},[r(e.common)])}))])):null]),n("footer",{classMap:{"slds-modal__footer":!0,"modal-hidden":!0},key:39},[n("button",{classMap:{"slds-button":!0,"slds-button_outline-brand":!0},key:38,on:{click:v||(l._m2=d(s.handleCloseClick))}},[i("Close")])])])]):null,s.yearEvents&&s.showModal?n("div",{classMap:{"slds-backdrop":!0,"slds-backdrop_open":!0},key:42},[]):null]}var d=Object(a.e)(i);i.stylesheets=[],n&&i.stylesheets.push.apply(i.stylesheets,n),i.stylesheetTokens={hostAttribute:"my-my-events_events-host",shadowAttribute:"my-my-events_events"};class r extends a.a{constructor(...e){super(...e),this.year=void 0,this.yearEvents=void 0,this.showModal=!1,this.events={},this.selectedEvent=void 0}connectedCallback(){fetch("https://fredbirds-098f.restdb.io/rest/events",{method:"GET",headers:{"cache-control":"no-cache","x-apikey":"5ff9ea16823229477922c93f"}}).then(e=>e.json()).then(e=>{e.sort((e,s)=>e.start>s.start?1:-1),e.forEach(e=>{void 0===this.events[e.year]&&(this.events[e.year]=[]),e.species_sighted.sort((e,s)=>e.common>s.common?1:-1),this.events[e.year].push({id:e._id,date:e.date,event:e.event,sightings:e.species_sighted,details:e.details,tripReport:e.tripreport})}),console.log(this.events),this.setEvents((new Date).getFullYear())}).catch(e=>{console.log(e)})}setEvents(e){this.year=e,this.yearEvents=void 0===this.events[e]?[{id:"0",event:"No Events Scheduled",details:`There are no events scheduled for ${e}. Please check back for updates.`}]:this.events[e]}get options(){return Object.keys(this.events)}handleEventClick(e){const s=e.currentTarget.dataset.item;this.selectedEvent=this.yearEvents.find(e=>e.id===s),this.showModal=!0}handleCloseClick(){this.showModal=!1}handleYearChange(e){const s=e.currentTarget.value;this.setEvents(s)}get sightings(){return void 0!==this.selectedEvent.sightings&&this.selectedEvent.sightings.length>0}}Object(a.d)(r,{fields:["year","yearEvents","showModal","events","selectedEvent"]});var o=Object(a.c)(r,{tmpl:d});var c=[function(e,s,t){return["table",s," {table-layout:fixed;width:100%;}\n"].join("")}];function p(e,s,t,l){const{h:n,t:i,d:d,k:r,i:o}=e;return[s.sightings?n("div",{classMap:{"slds-p-top_small":!0,"slds-size_1-of-1":!0},key:22},[n("div",{classMap:{"slds-card":!0},key:21},[n("div",{classMap:{"slds-card__header":!0},key:7},[n("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:6},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-forecasts":!0},attrs:{title:"Description of icon when needed"},key:3},[n("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:1},[n("use",{attrs:{"xlink:href":Object(a.f)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#forecasts")},key:0},[])]),n("span",{classMap:{"slds-assistive-text":!0},key:2},[i("Description of icon when needed")])]),n("div",{classMap:{"slds-media__body":!0},key:5},[n("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-truncate":!0},key:4},[i("Notable Sightings in past "),d(s.daysBack),i(" days")])])])]),n("div",{classMap:{"slds-card__body":!0},key:20},[n("div",{classMap:{"slds-scrollable--x":!0},key:19},[n("table",{classMap:{"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:18},[n("thead",{key:13},[n("tr",{classMap:{"slds-text-heading--label":!0},key:12},[n("th",{attrs:{scope:"col"},key:9},[n("span",{classMap:{"slds-truncate":!0},key:8},[i("Species")])]),n("th",{attrs:{scope:"col"},key:11},[n("span",{classMap:{"slds-truncate":!0},key:10},[i("Location")])])])]),n("tbody",{key:17},o(s.sightingList,(function(e){return n("tr",{classMap:{"slds-hint-parent":!0},key:r(16,e.comName)},[n("td",{classMap:{"slds-cell-wrap":!0},key:14},[d(e.comName)]),n("td",{classMap:{"slds-cell-wrap":!0},key:15},[d(e.locName)])])})))])])])])]):null]}var h=Object(a.e)(p);p.stylesheets=[],c&&p.stylesheets.push.apply(p.stylesheets,c),p.stylesheetTokens={hostAttribute:"my-my-sightings_sightings-host",shadowAttribute:"my-my-sightings_sightings"};class y extends a.a{constructor(...e){super(...e),this.sightings=void 0,this.daysBack=void 0}get sightingList(){let e=[];return this.sightings.forEach(s=>{e.find(e=>e.comName===s.comName&&e.locName===s.locName)||e.push({comName:s.comName,locName:s.locName})}),e}}Object(a.d)(y,{publicProps:{sightings:{config:0},daysBack:{config:0}}});var u=Object(a.c)(y,{tmpl:h});function v(e,s,t,a){const{t:l,h:n,c:i}=e;return[n("div",{classMap:{"slds-box":!0,header:!0,"slds-size_1-of-1":!0},key:2},[n("div",{classMap:{center:!0,header1:!0},key:0},[l("Fredericksburg Birding Club")]),n("div",{classMap:{center:!0,header2:!0},key:1},[l("A Local Chapter of the Virginia Society of Ornithology")])]),n("div",{classMap:{"slds-context-bar":!0},key:11},[n("nav",{classMap:{"slds-context-bar__secondary":!0,"slds-p-top_x-small":!0},attrs:{role:"navigation"},key:10},[n("ul",{classMap:{"slds-grid":!0},key:9},[n("li",{classMap:{"slds-context-bar__item":!0,"slds-is-active":!0},key:5},[n("a",{classMap:{"slds-context-bar__label-action":!0},attrs:{href:"javascript:void(0);",title:"Home"},key:4},[n("span",{classMap:{"slds-truncate":!0},attrs:{title:"Home"},key:3},[l("Home")])])]),n("li",{classMap:{"slds-context-bar__item":!0},key:8},[n("a",{classMap:{"slds-context-bar__label-action":!0},attrs:{href:"javascript:void(0);",title:"Home"},key:7},[n("span",{classMap:{"slds-truncate":!0},attrs:{title:"Birding Resources"},key:6},[l("Birding Resources")])])])])])]),n("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:20},[n("div",{classMap:{"slds-large-size_1-of-4":!0,"slds-small-size_1-of-1":!0},key:16},[n("div",{classMap:{"slds-text-heading_medium":!0,"slds-p-top_small":!0},key:13},[n("strong",{key:12},[l("Welcome!")])]),n("div",{classMap:{"slds-text-body_regular":!0},key:14},[l("Welcome to the webpage for the Fredericksburg Birding Club (FBC). Our members are bird enthusiasts of all skill levels – from beginning to advanced birders – who reside in the greater Fredericksburg, Virginia area. We have been brought together because of our interest in birds and our love of birding. We welcome anyone to join us on one of our upcoming trips – even if you have never birded before – and hope you will consider becoming a member.")]),i("my-events",o,{key:15},[])]),n("div",{classMap:{"slds-size_2-of-4":!0},key:17},[]),n("div",{classMap:{"slds-large-size_1-of-4":!0,"slds-small-size_1-of-1":!0},key:19},[i("my-sightings",u,{props:{sightings:s.sightings,daysBack:s.daysBack},key:18},[])])])]}var g=Object(a.e)(v);v.stylesheets=[],l&&v.stylesheets.push.apply(v.stylesheets,l),v.stylesheetTokens={hostAttribute:"my-my-app_app-host",shadowAttribute:"my-my-app_app"};const m="https://ebird.org/ws2.0/",k="cjsr36ksmnsn";class b extends a.a{constructor(...e){super(...e),this.taxonomy=void 0,this.sightings=void 0,this.daysBack=7}connectedCallback(){(({lat:e,long:s,dist:t=50,daysBack:a=7})=>{const l=`${m}data/obs/geo/recent/notable?lat=${e}&lng=${s}&dist=${t}&back=${a}&detail=full`;return new Promise((e,s)=>{fetch(l,{method:"GET",headers:{"X-eBirdApiToken":k}}).then(e=>e.json()).then(s=>{e(s)}).catch(e=>{s(e)})})})({lat:38.31,long:-77.46,daysBack:this.daysBack}).then(e=>{e.forEach(s=>{e.locationUrl="https://ebird.org/hotspot/"+s.locId}),this.sightings=e,console.log(this.sightings)})}getSpecies(){let e=JSON.parse(localStorage.getItem("taxonomy"));e?this.taxonomy=e:new Promise((e,s)=>{fetch("https://ebird.org/ws2.0/ref/taxonomy/ebird?fmt=json",{method:"GET",headers:{"X-eBirdApiToken":k}}).then(e=>e.json()).then(s=>{e(s)}).catch(e=>{s(e)})}).then(e=>{this.taxonomy=e,localStorage.setItem("taxonomy",JSON.stringify(e))})}}Object(a.d)(b,{fields:["taxonomy","sightings","daysBack"]});var f=Object(a.c)(b,{tmpl:g});const _=Object(a.b)("my-app",{is:f});document.querySelector("#main").appendChild(_)}]);