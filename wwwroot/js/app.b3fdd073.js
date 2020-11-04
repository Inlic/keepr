(function(t){function e(e){for(var s,o,l=e[0],n=e[1],c=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var n=a[l];0!==r[n]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a12":function(t,e,a){},"1e9c":function(t,e,a){"use strict";var s=a("f3cc"),r=a.n(s);r.a},"208a":function(t,e,a){},"2e81":function(t,e,a){"use strict";var s=a("208a"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-primary bg-primary"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:{name:"Home"}}},[a("div",{staticClass:"d-flex flex-column align-items-center"},[a("h1",{staticClass:"border border-dark p-1"},[t._v("K")])])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("div",{staticClass:"d-flex align-items-md-center w-100"},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light",attrs:{id:"nav-home-link",to:{name:"Home"}}},[t._v("Home ")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light",attrs:{id:"nav-profile-link",to:{name:"Profile",params:{profileId:t.profile.id}}}},[t._v(" Profile")])],1):t._e()])]),a("div",{staticClass:"row"},[t.$auth.isAuthenticated?a("span",{staticClass:"navbar-text d-none d-lg-block"},[a("profile-component")],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-secondary",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=a("335d"),c=a("bc3a"),p=a.n(c);let u=location.host.includes("localhost")?"http://localhost:5001/":"/";const d=p.a.create({baseURL:u+"api",timeout:3e3,withCredentials:!0}),m=function(t){d.defaults.headers.authorization=t},v=function(){d.defaults.headers.authorization=""};var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid mx-4"},[a("div",{staticClass:"row card navbar-text"},[a("div",{staticClass:"col-12 text-center"},[a("img",{staticClass:"align-self-center",staticStyle:{"max-height":"50px","max-width":"50px","border-radius":"50px"},attrs:{src:t.profile.picture}})]),a("div",{staticClass:"col-12"},[a("h6",[t._v(t._s(t.profile.name))])])])])},h=[],g={name:"profileComponent",computed:{profile(){return this.$store.state.profile}}},k=g,C=a("2877"),b=Object(C["a"])(k,f,h,!1,null,null,null),y=b.exports,_={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(m(this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){v(),await this.$auth.logout({returnTo:window.location.origin})}},computed:{profile(){return this.$store.state.profile}},components:{profileComponent:y}},w=_,P=(a("5dfc"),Object(C["a"])(w,o,l,!1,null,null,null)),V=P.exports,K={name:"App",async beforeCreate(){await Object(n["b"])(),this.$auth.isAuthenticated&&(m(this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:V}},x=K,D=(a("5c0b"),Object(C["a"])(x,r,i,!1,null,null,null)),T=D.exports,I=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"card-columns mt-2"},t._l(t.keeps,(function(t){return a("keep-tile-component",{key:t.id,attrs:{keepTileProp:t}})})),1)])},O=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep-tile-component card"},[a("div",{attrs:{"data-toggle":"modal","data-target":"#"+t.modalId},on:{click:t.setActive}},[a("div",{staticClass:"card bg-dark text-white mb-0 pointer"},[a("img",{staticClass:"card-img",attrs:{src:t.keepTileProp.img,alt:"Card image"}}),a("div",{staticClass:"card-img-overlay"},[t.vaultTileProp?a("div",[t.vaultTileProp.name?a("h5",{staticClass:"removefromvault"},[t.profile.id==t.vaultTileProp.creatorId?a("i",{staticClass:"fa fa-times mr-1 tshadowalt",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.removeKeepFromVault(e)}}}):t._e()]):t._e()]):t._e(),a("h5",{staticClass:"card-title tshadow text-light"},[t._v(" "+t._s(t.keepTileProp.name)+" ")]),a("div",[a("img",{staticClass:"profileimg",attrs:{src:t.keepTileProp.creator.picture},on:{click:function(e){return e.stopPropagation(),t.viewProfile(e)}}})])])])]),a("modal-component",{attrs:{id:t.modalId,color:"bg-white"},scopedSlots:t._u([{key:"body",fn:function(){return[a("keep-details-component")]},proxy:!0}])})],1)},N=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content p-3 bg-white",class:t.color},[a("div",{staticClass:"modal-header"},[t._t("header"),t._m(0)],2),t._t("body")],2)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],M={name:"ModalComponent",props:{id:{type:String,required:!0},color:{type:String,default:"bg-white"}}},F=M,H=Object(C["a"])(F,S,E,!1,null,null,null),B=H.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 text-center mt-2"},[a("img",{staticClass:"img-fluid",attrs:{src:t.keep.img}})]),a("div",{staticClass:"col-12 col-md-6 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h5",{staticClass:"ml-2"},[a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.keep.views)+" | "),a("i",{staticClass:"fa fa-share",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.keep.shares)+" | "),a("i",{staticClass:"fa fa-lock",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.keep.keeps)+" ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h1",[t._v(t._s(t.keep.name))])]),a("div",{staticClass:"col-12 text-center"},[a("p",[t._v(t._s(t.keep.description))])])]),t.keep.creator?a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 text-center centertext"},[t.keep.creator.id==t.profile.id?a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.deleteKeep(e)}}}):t._e()]),a("div",{staticClass:"col-8 text-center centertext"},[a("h6",[t._v(t._s(t.keep.creator.email))])]),a("div",{staticClass:"col-2"},[a("img",{staticClass:"detailsimg p-2",attrs:{src:t.keep.creator.picture}})])]):t._e(),a("div",{staticClass:"row"},[t.$auth.isAuthenticated?a("div",{staticClass:"input-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.vaultKeep.VaultId,expression:"vaultKeep.VaultId"}],staticClass:"custom-select form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.vaultKeep,"VaultId",e.target.multiple?a:a[0])}}},t._l(t.myVaults,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.createVaultKeep}},[t._v(" Add to Vault ")])])]):t._e()])])])},U=[],L={name:"keep-details",data(){return{vaultKeep:{VaultId:""}}},computed:{keep(){return this.$store.state.activeKeep},profile(){return this.$store.state.profile},myVaults(){return this.$store.state.profileVaults}},methods:{deleteKeep(){this.$store.dispatch("deleteKeep",this.keep.id),$("#modal"+this.keep.id).modal("hide")},createVaultKeep(){this.$store.dispatch("createVaultKeep",{keepid:this.keep.id,vaultid:this.vaultKeep.VaultId,keeps:this.keep.keeps})}}},Q=L,z=(a("ed23"),Object(C["a"])(Q,R,U,!1,null,null,null)),J=z.exports,Y={name:"keep-tile-component",props:["keepTileProp","vaultTileProp"],data(){return{}},computed:{modalId(){return"modal"+this.keepTileProp.id},profile(){return this.$store.state.profile}},methods:{setActive(){this.$store.dispatch("setActiveKeep",this.keepTileProp),this.$store.dispatch("getProfileVaults",this.profile.id)},viewProfile(){this.$router.push({name:"Profile",params:{profileId:this.keepTileProp.creator.id}})},removeKeepFromVault(){this.$store.dispatch("removeKeepFromVault",{vaultid:this.vaultTileProp.id,keepid:this.keepTileProp.id})}},components:{modalComponent:B,keepDetailsComponent:J}},q=Y,G=(a("1e9c"),Object(C["a"])(q,j,N,!1,null,null,null)),W=G.exports,Z={name:"Home",mounted(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults")},computed:{keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults},profile(){return this.$store.state.profile}},components:{keepTileComponent:W}},X=Z,tt=Object(C["a"])(X,A,O,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row my-4"},[a("div",{staticClass:"col-12 col-md-2 text-center"},[a("img",{staticClass:"vprofileimg",attrs:{src:t.profile.picture}})]),a("div",{staticClass:"col-12 col-md-10"},[a("h2",[t._v(t._s(t.profile.name))]),a("h5",[t._v("Vaults: "+t._s(t.vaults.length))]),a("h5",[t._v("Keeps: "+t._s(t.keeps.length))])])]),a("div",{staticClass:"row card border-0"},[a("div",{staticClass:"card col-12 my-2 border-0"},[a("h2",[t._v(" Vaults "),t.myprofile.name==t.profile.name?a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true","data-toggle":"modal","data-target":"#"+t.createVaultModal}}):t._e()])]),a("div",{staticClass:"card-columns"},t._l(t.vaults,(function(t){return a("vault-tile-component",{key:t.id,staticClass:"pointer",attrs:{vaultTileProp:t}})})),1),a("div",{staticClass:"card col-12 my-2 border-0"},[a("h2",[t._v(" Keeps "),t.myprofile.name==t.profile.name?a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true","data-toggle":"modal","data-target":"#"+t.createKeepModal}}):t._e()])]),a("div",{staticClass:"card-columns"},t._l(t.keeps,(function(t){return a("keep-tile-component",{key:t.id,attrs:{keepTileProp:t}})})),1)]),a("modal-component",{attrs:{id:t.createVaultModal,color:"bg-danger"},scopedSlots:t._u([{key:"body",fn:function(){return[a("new-vault-form-component")]},proxy:!0}])}),a("modal-component",{attrs:{id:t.createKeepModal,color:"bg-danger"},scopedSlots:t._u([{key:"body",fn:function(){return[a("new-keep-form-component")]},proxy:!0}])})],1)},st=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-dark text-light vault-tile-component ml-2",on:{click:t.viewVault}},[a("img",{staticClass:"card-img",attrs:{src:"https://www.placecage.com/200/200",alt:"..."}}),a("div",{staticClass:"card-img-overlay"},[a("h5",{staticClass:"card-title tshadow text-light"},[t._v(t._s(t.vaultTileProp.name))]),t.vaultTileProp.isPrivate?a("h1",{staticStyle:{color:"red"}},[t._v("PRIVATE")]):t._e()])])},it=[],ot={name:"vault-tile-component",props:["vaultTileProp"],data(){return{}},methods:{viewVault(){this.$router.push({name:"VaultDetails",params:{vaultId:this.vaultTileProp.id}})}}},lt=ot,nt=(a("d3da"),Object(C["a"])(lt,rt,it,!1,null,null,null)),ct=nt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("New Keep")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createKeep(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepData.name,expression:"keepData.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Keep Name..."},domProps:{value:t.keepData.name},on:{input:function(e){e.target.composing||t.$set(t.keepData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepData.description,expression:"keepData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New Keep Description..."},domProps:{value:t.keepData.description},on:{input:function(e){e.target.composing||t.$set(t.keepData,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepData.img,expression:"keepData.img"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New Keep Image URL..."},domProps:{value:t.keepData.img},on:{input:function(e){e.target.composing||t.$set(t.keepData,"img",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},ut=[],dt={name:"new-keep-form",data(){return{keepData:{views:0,shares:0,keeps:0}}},computed:{profile(){return this.$store.state.searchedProfile}},methods:{createKeep(){this.$store.dispatch("createKeep",this.keepData),$("#modalcreateKeep").modal("hide")}}},mt=dt,vt=Object(C["a"])(mt,pt,ut,!1,null,null,null),ft=vt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("New Vault")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createVault(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultData.name,expression:"vaultData.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vault Name..."},domProps:{value:t.vaultData.name},on:{input:function(e){e.target.composing||t.$set(t.vaultData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultData.description,expression:"vaultData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New Vault Description..."},domProps:{value:t.vaultData.description},on:{input:function(e){e.target.composing||t.$set(t.vaultData,"description",e.target.value)}}})]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultData.isPrivate,expression:"vaultData.isPrivate"}],staticClass:"form-check-input",attrs:{id:"Check1",type:"checkbox"},domProps:{checked:Array.isArray(t.vaultData.isPrivate)?t._i(t.vaultData.isPrivate,null)>-1:t.vaultData.isPrivate},on:{change:function(e){var a=t.vaultData.isPrivate,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&t.$set(t.vaultData,"isPrivate",a.concat([i])):o>-1&&t.$set(t.vaultData,"isPrivate",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.vaultData,"isPrivate",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"Check1"}},[t._v("Private?")])]),a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[t._v("Submit")])])])},gt=[],kt={name:"new-vault-form",data(){return{vaultData:{}}},computed:{profile(){return this.$store.state.searchedProfile}},methods:{createVault(){this.$store.dispatch("createVault",this.vaultData),$("#modalcreateVault").modal("hide")}}},Ct=kt,bt=Object(C["a"])(Ct,ht,gt,!1,null,null,null),yt=bt.exports,_t={name:"Profile",data(){return{}},mounted(){this.$store.dispatch("getSearchedProfile",this.$route.params.profileId),this.$store.dispatch("getProfileVaults",this.$route.params.profileId),this.$store.dispatch("getProfileKeeps",this.$route.params.profileId)},watch:{myprofile:function(t,e){this.$store.dispatch("getSearchedProfile",this.$route.params.profileId),this.$store.dispatch("getProfileVaults",this.$route.params.profileId),this.$store.dispatch("getProfileKeeps",this.$route.params.profileId)},"$route.params.profileId":function(t,e){this.$store.dispatch("getSearchedProfile",this.$route.params.profileId),this.$store.dispatch("getProfileVaults",this.$route.params.profileId),this.$store.dispatch("getProfileKeeps",this.$route.params.profileId)},deep:!0,immediate:!0},computed:{createKeepModal(){return"modalcreateKeep"},createVaultModal(){return"modalcreateVault"},profile(){return this.$store.state.searchedProfile},vaults(){return this.$store.state.profileVaults},keeps(){return this.$store.state.profileKeeps},myprofile(){return this.$store.state.profile}},components:{keepTileComponent:W,vaultTileComponent:ct,newKeepFormComponent:ft,newVaultFormComponent:yt,modalComponent:B}},$t=_t,wt=(a("2e81"),Object(C["a"])($t,at,st,!1,null,null,null)),Pt=wt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row my-4"},[a("h1",{staticClass:"col-12"},[t._v(" "+t._s(t.vault.name)+" "),t.myprofile.id==t.vault.creatorId?a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"},on:{click:t.deleteVault}}):t._e()]),a("h5",{staticClass:"col-12"},[t._v("Keeps: "+t._s(t.keeps.length))])]),a("div",{staticClass:"card-columns"},t._l(t.keeps,(function(e){return a("keep-tile-component",{key:e.id,attrs:{keepTileProp:e,vaultTileProp:t.vault}})})),1)])},Kt=[],xt={name:"VaultDetails",mounted(){this.$store.dispatch("getVault",Number(this.$route.params.vaultId)),this.$store.dispatch("getVaultKeeps",Number(this.$route.params.vaultId))},watch:{myprofile:function(t,e){this.$store.dispatch("getVault",Number(this.$route.params.vaultId)),this.$store.dispatch("getVaultKeeps",Number(this.$route.params.vaultId))},deep:!0,immediate:!0},methods:{deleteVault(){this.$store.dispatch("deleteVault",this.vault.id)}},computed:{vault(){return this.$store.state.activeVault},keeps(){return this.$store.state.vaultKeeps},myprofile(){return this.$store.state.profile}},components:{keepTileComponent:W}},Dt=xt,Tt=(a("5ffe"),Object(C["a"])(Dt,Vt,Kt,!1,null,null,null)),It=Tt.exports;s["a"].use(I["a"]);const At=[{path:"/",name:"Home",component:et},{path:"/profile/:profileId",name:"Profile",component:Pt},{path:"/vault/:vaultId",name:"VaultDetails",component:It},{path:"*",redirect:"/"}],Ot=new I["a"]({routes:At});var jt=Ot,Nt=a("2f62"),St=a("3d20"),Et=a.n(St);class Mt{static async confirmDelete(){try{let t=await Et.a.fire({title:"<h2 style='color:#6cc3d5'>Delete this item?</h2>",icon:"warning",iconColor:"#ff7851",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonColor:"#6cc3d5",confirmButtonColor:"#ff7851",background:"#fff"});return!!t.value}catch(t){console.error(t)}}static async actionNotice(t="You did a thing",e=1500){try{Et.a.fire({title:`<h3 style="color:  #56cc9d">${t}</h3>`,icon:"success",iconColor:"#56cc9d",timer:e,toast:!0,position:"top-right",showConfirmButton:!1,background:"#fff"})}catch(a){console.error(a)}}}s["a"].use(Nt["a"]);var Ft=new Nt["a"].Store({state:{profile:{},keeps:[],vaults:[],searchedProfile:{},profileVaults:[],profileKeeps:[],activeVault:{},vaultKeeps:[],activeKeep:{}},mutations:{setProfile(t,e){t.profile=e},setSearchedProfile(t,e){t.searchedProfile=e},setKeeps(t,e){t.keeps=e},setVaults(t,e){t.vaults=e},setProfileKeeps(t,e){t.profileKeeps=e},setProfileVaults(t,e){t.profileVaults=e},setActiveVault(t,e){t.activeVault=e},setActiveVaultKeeps(t,e){t.vaultKeeps=e},setActiveKeep(t,e){t.activeKeep=e}},actions:{async getProfile({commit:t}){try{let e=await d.get("profiles");t("setProfile",e.data)}catch(e){console.error(e)}},async getSearchedProfile({commit:t},e){try{let a=await d.get("profiles/"+e);t("setSearchedProfile",a.data)}catch(a){console.error(a)}},async getKeeps({commit:t}){try{let e=await d.get("keeps");t("setKeeps",e.data)}catch(e){console.error(e)}},async getVaults({commit:t}){try{let e=await d.get("vaults");t("setVaults",e.data)}catch(e){console.error(e)}},async setActiveKeep({commit:t},e){try{e.views+=1,await d.put("keeps/"+e.id+"/stats",e),t("setActiveKeep",e)}catch(a){console.error(a)}},async getProfileKeeps({commit:t},e){try{let a=await d.get("profiles/"+e+"/keeps");t("setProfileKeeps",a.data)}catch(a){console.error(a)}},async getVault({commit:t},e){try{let a=await d.get("vaults/"+e);t("setActiveVault",a.data)}catch(a){console.error(a)}},async createVault({dispatch:t},e){try{let a=await d.post("vaults",e);t("getProfileVaults",a.data.creatorId)}catch(a){console.error(a)}},async deleteVault({commit:t},e){try{await Mt.confirmDelete()&&(await d.delete("vaults/"+e),t("setProfileVaults",this.state.profileVaults.filter(t=>t.id!=e)),jt.push({name:"Profile",params:{profileId:this.state.profile.id}}))}catch(a){console.error(a)}},async createKeep({dispatch:t},e){try{let a=await d.post("keeps",e);t("getProfileKeeps",a.data.creatorId)}catch(a){console.error(a)}},async deleteKeep({commit:t},e){try{await Mt.confirmDelete()&&(await d.delete("keeps/"+e),t("setKeeps",this.state.keeps.filter(t=>t.id!=e)),t("setProfileKeeps",this.state.profileKeeps.filter(t=>t.id!=e)))}catch(a){console.error(a)}},async getVaultKeeps({commit:t},e){try{let a=await d.get("vaults/"+e+"/keeps");t("setActiveVaultKeeps",a.data)}catch(a){console.error(a)}},async createVaultKeep({commit:t,dispatch:e},a){try{let s={keepid:a.keepid,vaultid:a.vaultid};a.keeps+=1;let r={keepid:a.keepid,keeps:a.keeps};await d.post("vaultkeeps",s),Mt.actionNotice("Keep Secured"),await d.put("keeps/"+a.keepid+"/stats",r);let i=await d.get("keeps/"+a.keepid);t("setActiveKeep",i.data),e("getKeeps")}catch(s){console.error(s)}},async removeKeepFromVault({dispatch:t},e){try{if(await Mt.confirmDelete()){let a=await d.get("vaultkeeps/"+e.vaultid+"/"+e.keepid);await d.delete("vaultkeeps/"+a.data),t("getVaultKeeps",e.vaultid)}}catch(a){console.error(a)}},async getProfileVaults({commit:t},e){try{let a=await d.get("profiles/"+e+"/vaults");t("setProfileVaults",a.data)}catch(a){console.error(a)}}}});const Ht="forestlogin223.us.auth0.com",Bt="t9ZTG6p58iyE5ncgtnpMQv65PT3QKsQE",Rt="https://AuthCheckApi.com";s["a"].use(n["a"],{domain:Ht,clientId:Bt,audience:Rt,onRedirectCallback:t=>{jt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:jt,store:Ft,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"5dfc":function(t,e,a){"use strict";var s=a("1a12"),r=a.n(s);r.a},"5ffe":function(t,e,a){"use strict";var s=a("b83b"),r=a.n(s);r.a},"64f4":function(t,e,a){},"6f61":function(t,e,a){},"9c0c":function(t,e,a){},b83b:function(t,e,a){},d3da:function(t,e,a){"use strict";var s=a("64f4"),r=a.n(s);r.a},ed23:function(t,e,a){"use strict";var s=a("6f61"),r=a.n(s);r.a},f3cc:function(t,e,a){}});