(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{25:function(s,e,t){"use strict";var i=t(1),a=t(3),r=t.n(a);function l(s,e,t,i){const{d:a}=s;return[a(e.formattedValue)]}var d=Object(i.registerTemplate)(l);l.stylesheets=[],r.a&&l.stylesheets.push.apply(l.stylesheets,r.a),l.stylesheetTokens={hostAttribute:"my-src-lightning_formattedDateTime-host",shadowAttribute:"my-src-lightning_formattedDateTime"};var o=t(23),n=t(6),c=t(0);class h extends i.LightningElement{constructor(...s){super(...s),this.value=void 0,this.weekday=void 0,this.era=void 0,this.year=void 0,this.month=void 0,this.day=void 0,this.hour=void 0,this.minute=void 0,this.second=void 0,this.timeZoneName=void 0,this.timeZone=void 0,this._hour12=!1,this._hour12Set=!1}get hour12(){return this._hour12}set hour12(s){void 0===s?(this._hour12Set=!1,this._hour12=s):(this._hour12Set=!0,this._hour12=Object(c.w)(s))}get formattedValue(){return this.computeFormattedValue()}computeFormattedValue(){const{value:s}=this;if(!this.isEmpty(s)&&this.isValid(s)){const e=Object(o.a)(this.getOptions()).format(s);if(e)return e}return this.printError(s),""}isEmpty(s){return null==s||""===s}isValid(s){return isFinite(s)||Object(n.d)(s)}printError(s){const e=`<lightning-formatted-date-time> The value attribute accepts either a Date object, a timestamp, or a valid ISO8601 formatted string with timezone offset. but we are getting the ${typeof s} value "${s}" instead.`;console.warn(e)}getOptions(){const s={weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone};return this._hour12Set&&(s.hour12=this.hour12),!1!==s.hour12||c.p||(s.hourCycle="h23",delete s.hour12),s}}Object(i.registerDecorators)(h,{publicProps:{value:{config:0},weekday:{config:0},era:{config:0},year:{config:0},month:{config:0},day:{config:0},hour:{config:0},minute:{config:0},second:{config:0},timeZoneName:{config:0},timeZone:{config:0},hour12:{config:3}},track:{_hour12:1,_hour12Set:1}});e.a=Object(i.registerComponent)(h,{tmpl:d})},57:function(s,e,t){"use strict";t.r(e);var i=t(1),a=t(25);function r(s,e,t,r){const{h:l,t:d,d:o,b:n,k:c,i:h,c:p}=s,{_m0:u,_m1:m,_m2:g,_m3:_}=r;return[l("div",{classMap:{"slds-grid":!0,"slds-gutters":!0,"slds-wrap":!0,"slds-var-p-around_medium":!0},key:0},[l("div",{classMap:{"slds-large-size_1-of-1":!0,"slds-small-size_1-of-1":!0,"slds-col":!0},key:1},[l("div",{classMap:{"slds-page-header":!0},key:2},[l("div",{classMap:{"slds-page-header__row":!0},key:3},[l("div",{classMap:{"slds-page-header__col-title":!0},key:4},[l("div",{classMap:{"slds-media":!0},key:5},[l("div",{classMap:{"slds-media__figure":!0},key:6},[l("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-news":!0},key:7},[l("svg",{classMap:{"slds-icon":!0,"slds-page-header__icon":!0},attrs:{"aria-hidden":"true"},key:8},[l("use",{attrs:{"xlink:href":Object(i.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#news")},key:9},[])])])]),l("div",{classMap:{"slds-media__body":!0},key:10},[l("div",{classMap:{"slds-page-header__name":!0},key:11},[l("div",{classMap:{"slds-page-header__name-title":!0},key:12},[l("h1",{key:13},[l("span",{key:14},[d("Birding News")]),l("span",{classMap:{"slds-page-header__title":!0,"slds-truncate":!0},attrs:{title:e.dropdown},key:15},[o(e.dropdown)])])]),l("div",{classMap:{"slds-page-header__name-switcher":!0},key:16},[l("div",{classMap:{"list-select":!0,"slds-dropdown-trigger":!0,"slds-dropdown-trigger_click":!0},key:17},[l("button",{classMap:{"slds-button":!0,"slds-button_icon":!0,"slds-button_icon-small":!0},attrs:{"aria-haspopup":"true",title:"Switch list view"},key:18,on:{click:u||(r._m0=n(e.handleListClick))}},[l("svg",{classMap:{"slds-button__icon":!0,"slds-icon_x-small":!0},attrs:{"aria-hidden":"true"},key:19},[l("use",{attrs:{"xlink:href":Object(i.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/utility-sprite/svg/symbols.svg#down")},key:20},[])]),l("span",{classMap:{"slds-assistive-text":!0},key:21},[d("Switch list view")])]),l("div",{classMap:{"slds-dropdown":!0,"slds-dropdown_left":!0},key:22},[l("ul",{classMap:{"slds-dropdown__list":!0},attrs:{role:"menu","aria-label":"Show More"},key:23},h(e.dropdownOptions,(function(s){return l("li",{classMap:{"slds-dropdown__item":!0},attrs:{role:"presentation","data-id":s.title},key:c(24,s._id),on:{click:m||(r._m1=n(e.handleOptionChange))}},[l("a",{attrs:{href:"#",role:"menuitem",tabindex:"0"},key:25},[l("span",{classMap:{"slds-truncate":!0},attrs:{title:s.title},key:26},[o(s.title)])])])})))])])])])])])]),l("div",{classMap:{"slds-page-header__col-actions":!0},key:27},[l("div",{classMap:{"slds-page-header__controls":!0},key:28},[l("div",{classMap:{"slds-page-header__control":!0},key:29},[])])])]),l("div",{classMap:{"slds-page-header__row":!0},key:30},[l("div",{classMap:{"slds-page-header__col-meta":!0},key:31},[l("p",{classMap:{"slds-page-header__meta-text":!0},key:32},[o(e.numItems),d(" items • Updated "),o(e.timeElapsed),p("lightning-formatted-date-time",a.a,{props:{value:e.lastUpdatedDate,year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:"true"},key:33},[])])]),l("div",{classMap:{"slds-page-header__col-controls":!0},key:34},[l("div",{classMap:{"slds-page-header__controls":!0},key:35},[l("div",{classMap:{"slds-page-header__control":!0},key:36},[l("button",{classMap:{"slds-button":!0,"slds-button_icon":!0,"slds-button_icon-border-filled":!0},attrs:{title:"Refresh List"},key:37,on:{click:g||(r._m2=n(e.refresh))}},[l("svg",{classMap:{"slds-button__icon":!0},attrs:{"aria-hidden":"true"},key:38},[l("use",{attrs:{"xlink:href":Object(i.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/utility-sprite/svg/symbols.svg#refresh")},key:39},[])]),l("span",{classMap:{"slds-assistive-text":!0},key:40},[d("Refresh List")])])])])])])])]),l("div",{classMap:{"slds-large-size_1-of-1":!0,"slds-small-size_1-of-1":!0,"slds-col":!0,"slds-var-p-top_small":!0},key:41},[e.news?l("article",{classMap:{"slds-card":!0},key:42},[l("div",{classMap:{"slds-card__header":!0,"slds-grid":!0},key:43},[l("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:44},[l("div",{classMap:{"slds-media__figure":!0},key:45},[l("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-news":!0},attrs:{title:"news"},key:46},[l("svg",{classMap:{"slds-icon":!0,"slds-icon_medium":!0},attrs:{"aria-hidden":"true"},key:47},[l("use",{attrs:{"xlink:href":Object(i.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#news")},key:48},[])])])]),l("div",{classMap:{"slds-media__body":!0},key:49},[l("h2",{classMap:{"slds-card__header-title":!0},key:50},[d("Birding News")])])])]),l("div",{classMap:{"slds-card__body":!0,"slds-card__body_inner":!0,"slds-scrollable_y":!0},styleMap:{height:"600px"},key:51},h(e.birdNews,(function(s){return l("div",{classMap:{"slds-p-bottom_small":!0},key:c(52,s.id)},[s.isLink?l("a",{attrs:{href:s.link,target:"_blank"},key:53},[l("div",{classMap:{"slds-text-heading_medium":!0},key:54},[o(s.title)])]):null,s.isLink?l("div",{key:55},[o(s.contentSnippet)]):null])}))),e.showFooter?l("footer",{classMap:{"slds-card__footer":!0},key:56},[l("a",{classMap:{"slds-card__footer-action":!0},attrs:{href:"javascript:void(0);"},key:57,on:{click:_||(r._m3=n(e.handleViewAllClick))}},[d("View All News")])]):null]):null])])]}var l=Object(i.registerTemplate)(r);r.stylesheets=[],r.stylesheetTokens={hostAttribute:"my-my-news_news-host",shadowAttribute:"my-my-news_news"};var d=t(12);class o extends i.LightningElement{constructor(...s){super(...s),this.url=void 0,this.news=[],this.dropdown="All About Birds",this.dropdownOptions=void 0,this.elapsed=0,this.interval=void 0}connectedCallback(){Object(d.g)().then(s=>s.json()).then(s=>{this.dropdownOptions=s,this.url=s[0].url,this.fetchNews()}).catch(s=>{console.log(s)})}fetchNews(){Object(d.e)(this.url).then(s=>s.json()).then(s=>{for(let e=0;e<s.items.length;e++)s.items[e].id=e;this.news=s.items,this.interval=setInterval(()=>{this.elapsed++},6e4)}).catch(s=>{console.log(s)})}get birdNews(){return this.news.forEach(s=>{s.isLink=void 0!==s.link,s.enclosure||(s.enclosure={})}),this.news}get showFooter(){return"true"===this.home}get numItems(){return this.news.length}get timeElapsed(){const s=1!==this.elapsed?"minutes":"minute";return`${this.elapsed} ${s} ago`}handleListClick(){let s=this.template.querySelector(".list-select").classList;s.contains("slds-is-open")?s.remove("slds-is-open"):s.add("slds-is-open")}handleOptionChange(s){this.elapsed=0,clearInterval(this.interval),this.template.querySelector(".list-select").classList.remove("slds-is-open"),this.url=this.dropdownOptions.find(e=>e.title===s.currentTarget.dataset.id).url,this.dropdown=s.currentTarget.dataset.id,this.fetchNews()}refresh(){this.elapsed=0,clearInterval(this.interval),this.fetchNews()}}Object(i.registerDecorators)(o,{fields:["url","news","dropdown","dropdownOptions","elapsed","interval"]});e.default=Object(i.registerComponent)(o,{tmpl:l})}}]);