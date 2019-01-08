(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=a(49),o=(a(25),a(2)),i=a(6),m=a(5),u=a(3),p=a(4),d=a(50),h=(a(27),a(29),a(48)),E={loginUser:[],notification:[],deleteBooks:[]},b={events:{loginUser:"loginUser",notification:"notification",deleteBooks:"deleteBooks"},subscribe:function(e,t){return E[e].push(t)},trigger:function(e,t){return E[e].forEach(function(e){return e(t)})}},f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/home/store"},"BookStore")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/home/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/home/contact"},"Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/home/account"},"My Account")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/logout"},"LogOut")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:""}," | ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/home/store/cart"},r.a.createElement("i",{className:"fa fa-shopping-cart"})))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/singup"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/login"},"Log In"))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).userLoggedIn=function(e){var t=e||"";a.setState({username:t})},a.state={username:""},b.subscribe(b.events.loginUser,a.userLoggedIn),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.userLoggedIn(sessionStorage.getItem("username"))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{className:"navbar-brand",to:"/"},"Book's Gate \u2122"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),this.state.username?r.a.createElement(f,null):r.a.createElement(v,null)))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;return this.props.hasBtn&&(e=r.a.createElement(h.a,{to:"/",className:"btn btn-primary btn-xl rounded-pill mt-5"},this.props.btnText)),r.a.createElement("header",{className:"masthead text-center text-white"},r.a.createElement("div",{className:"masthead-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"masthead-heading mb-0"},this.props.title),r.a.createElement("p",{className:"masthead-subheading mb-0"},this.props.description),e)),r.a.createElement("div",{className:"bg-circle-1 bg-circle"}),r.a.createElement("div",{className:"bg-circle-2 bg-circle"}),r.a.createElement("div",{className:"bg-circle-3 bg-circle"}),r.a.createElement("div",{className:"bg-circle-4 bg-circle"}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"py-5 bg-black"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white small"},"Copyright \xa9 Book's Gate 2019"),r.a.createElement("p",{className:"m-0 text-center text-white small"},"Created by Ivelin Dimitrov")))}}]),t}(n.Component),O=(a(33),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"books-info-section"},r.a.createElement("section",{className:"books-info"},r.a.createElement("img",{className:"icon-one-size",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1280px-Open_book_nae_02.svg.png",alt:"open-book"}),r.a.createElement("h2",null,"Tons of Books"),r.a.createElement("p",null,"Today's blog features a lot of great books from Del Rey, almost all of which you have")),r.a.createElement("section",{className:"books-info"},r.a.createElement("img",{className:"icon-one-size",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/2000px-Blue_pencil.svg.png",alt:"icon-pencil"}),r.a.createElement("h2",null,"Hundreds of Authors"),r.a.createElement("p",null,"Some writers have had prolific careers with hundreds of their works being published")),r.a.createElement("section",{className:"books-info"},r.a.createElement("img",{className:"icon-one-size",src:"http://iconsetc.com/icons-watermarks/simple-blue/foundation/foundation_book-bookmark/foundation_book-bookmark_simple-blue_512x512.png",alt:"icon-bookmarks"}),r.a.createElement("h2",null,"Easily Bookmarked"),r.a.createElement("p",null,"Bookmarks are a great way to tag pages you want to revisit.")))}}]),t}(n.Component)),k=(a(16),"https://baas.kinvey.com/"),y="kid_BkhpyQR-N",x="4f4c958a830948719fe7cd33e99201a1",C="Basic a2lkX0JraHB5UVItTjoyNmM1YzQ5OTJlMTc0ZDM1OTY3ZjY0MjI3YmQ4MTBjYQ==";function w(e,t){return{method:e,headers:{Authorization:(a=t,"basic"===a?"Basic "+btoa(y+":"+x):"admin"===a?C:"Kinvey "+sessionStorage.getItem("authtoken")),"Content-Type":"application/json"}};var a}function S(e,t){return k+e+"/"+y+"/"+t}var B={get:function(e,t,a){var n=S(e,t),r=w("GET",a);return fetch(n,r)},post:function(e,t,a,n){var r=S(e,t),c=w("POST",a);return c.body=JSON.stringify(n),fetch(r,c)},update:function(e,t,a,n){var r=S(e,t),c=w("PUT",a);return c.body=JSON.stringify(n),fetch(r,c)},remove:function(e,t,a){var n=S(e,t),r=w("DELETE",a);return fetch(n,r)},getRole:function(e){var t=S("roles",e);return fetch(t,{method:"GET",headers:{Authorization:"Basic a2lkX0JraHB5UVItTjoyNmM1YzQ5OTJlMTc0ZDM1OTY3ZjY0MjI3YmQ4MTBjYQ==","Content-Type":"application/json"}})}};var _={getAllBooks:function(){return B.get("appdata","books","admin")},add:function(e){return B.post("appdata","books","Kinvey",e)},remove:function(e){var t="books/".concat(e);return B.remove("appdata",t,"Kinvey")}};a(36);function I(e){return function(t){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){return this.props.isReady?r.a.createElement(e,Object.assign({data:this.props.data},this.props)):r.a.createElement("div",{className:"loading"},"Loading \u2026")}}]),a}(n.Component)}var T=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("div",{className:"product-grid"},r.a.createElement("div",{className:"product-image"},r.a.createElement(h.a,{to:"#"},r.a.createElement("img",{className:"pic-1",src:this.props.first_img,alt:""}),r.a.createElement("img",{className:"pic-2",src:this.props.second_img,alt:""})),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement(h.a,{to:"/books/details/".concat(this.props._id),"data-tip":"Quick View"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"","data-tip":"Add to Wishlist"},r.a.createElement("i",{className:"fa fa-stack-exchange"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"","data-tip":"Add to Cart"},r.a.createElement("i",{className:"fa fa-shopping-cart"})))),r.a.createElement("span",{className:"product-new-label"},"New")),r.a.createElement("ul",{className:"rating"},r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star disable"})),r.a.createElement("div",{className:"product-content"},r.a.createElement("h3",{className:"title"},r.a.createElement(h.a,{to:"#"},this.props.name)),r.a.createElement("p",null,"Leo Tolstoy"),r.a.createElement("div",{className:"price"},"$",(+this.props.price).toFixed(2),r.a.createElement("span",null,"30.00")))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("section",{className:"container"},r.a.createElement("h3",{className:"h3"},"New Books"),r.a.createElement("div",{className:"row"},a.props.data.map(function(e){return r.a.createElement(T,Object.assign({key:e._id},e))})))},a}return Object(p.a)(t,e),t}(n.Component),M=A=I(A),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){_.getAllBooks().then(function(e){return e.json()}).then(function(e){var t=e.sort(function(e,t){return new Date(t._kmd.ect)-new Date(e._kmd.ect)}).slice(0,4);a.setState({isReady:!0,books:t})}).catch(function(e){return console.log(e)})},a.state={isReady:!1,books:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(M,{data:this.state.books,isReady:this.state.isReady})}}]),t}(n.Component),R=(a(38),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-sm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-lg-12"},r.a.createElement("h1",{className:"h1"},"Contact us ",r.a.createElement("small",null,"Feel free to contact us"))))))},a}return Object(p.a)(t,e),t}(n.Component)),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(g,null),r.a.createElement(N,{title:"Book's Heaven",description:"A Room Without Books Is Like A Body Without A Soul.",hasBtn:"true",btnText:"Learn More"}),r.a.createElement(D,null),r.a.createElement(O,null),r.a.createElement(R,null),r.a.createElement(j,null))}}]),t}(n.Component),P=a(13),q=a(8);var U={login:function(e){var t={username:e.username,password:e.password};return B.post("user","login","basic",t)},register:function(e){var t={username:e.username,password:e.password,email:e.email};return B.post("user","","basic",t)},saveSession:function(e){var t=e._kmd.authtoken;sessionStorage.setItem("authtoken",t);var a=e._id;sessionStorage.setItem("userId",a);var n=e.username;sessionStorage.setItem("username",n),e._kmd.roles&&function(e){B.getRole(e).then(function(e){return e.json()}).then(function(e){sessionStorage.setItem("role",e.name)}).catch(function(e){return console.log(e)})}(e._kmd.roles[0].roleId)},logout:function(){var e={authtoken:sessionStorage.getItem("authtoken")};return B.post("user","_logout","kinvey",e)},getUsers:function(){return B.get("user","","kinvey")}},L={username:"",password:""},Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state=L,a.onChange=a.onChange.bind(Object(q.a)(Object(q.a)(a))),a.onSubmit=a.onSubmit.bind(Object(q.a)(Object(q.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(P.a)({},t,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=Object.assign({},this.state);U.login(a).then(function(e){return e.json()}).then(function(e){if(e.error)return console.log("Login failed: "+e.error),void t.setState(L);console.log("Successfully logged in."),U.saveSession(e),b.trigger(b.events.loginUser,e.username),t.props.history.push("/")}),this.setState(L)}},{key:"render",value:function(){return r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"text-uppercase"},"Username"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-uppercase"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.password})),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input"}),r.a.createElement("small",null,"Remember Me")),r.a.createElement("button",{type:"submit",className:"btn btn-login btn-primary float-right"},"Submit")))}}]),t}(n.Component),Y=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(g,null),r.a.createElement("header",{className:"masthead text-center text-white"},r.a.createElement("div",{className:"masthead-content"},r.a.createElement("div",{className:"container"},r.a.createElement(Q,this.props)))),r.a.createElement(O,null),r.a.createElement(j,null))}}]),t}(n.Component)),J=a(51),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).logout=function(){U.logout().then(sessionStorage.clear()).then(b.trigger(b.events.loginUser,"")).then(console.log("Successful logged out.")).catch(function(e){return console.log(e)})},a.render=function(){return a.logout(),r.a.createElement(J.a,{to:"/"})},a}return Object(p.a)(t,e),t}(n.Component),W={username:"",password:"",email:"",confirmPassword:""},G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state=W,a.onChange=a.onChange.bind(Object(q.a)(Object(q.a)(a))),a.onSubmit=a.onSubmit.bind(Object(q.a)(Object(q.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(P.a)({},t,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=Object.assign({},this.state);U.register(a).then(function(e){return e.json()}).then(function(e){if(e.error)return console.log("Login failed: "+e.error),void t.setState(W);console.log("User ".concat(e.username," was register successfully!")),U.saveSession(e),b.trigger(b.events.loginUser,e.username),t.props.history.push("/")}),this.setState(W)}},{key:"render",value:function(){return r.a.createElement("form",{className:"singup-form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"text-uppercase"},"Username"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-uppercase"},"Email"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-uppercase"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-uppercase"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",type:"password",className:"form-control",placeholder:"",onChange:this.onChange,value:this.state.confirmPassword})),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input"}),r.a.createElement("small",null,"Remember Me")),r.a.createElement("button",{type:"submit",className:"btn btn-login btn-primary float-right"},"Submit")))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(g,null),r.a.createElement("header",{className:"masthead text-center text-white"},r.a.createElement("div",{className:"masthead-content"},r.a.createElement("div",{className:"container"},r.a.createElement(G,this.props)))),r.a.createElement(O,null),r.a.createElement(j,null))}}]),t}(n.Component),V=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement(h.a,{to:"/books/details/".concat(this.props._id),"data-tip":"Quick View"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"","data-tip":"Edit"},r.a.createElement("i",{className:"fa fa-edit"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/books/delete/".concat(this.props._id),"data-tip":"Delete"},r.a.createElement("i",{className:"fa fa-times"}))))}}]),t}(n.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement(h.a,{to:"/books/details/".concat(this.props._id),"data-tip":"Quick View"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"","data-tip":"Add to Wishlist"},r.a.createElement("i",{className:"fa fa-stack-exchange"}))),r.a.createElement("li",null,r.a.createElement(h.a,{to:"","data-tip":"Add to Cart"},r.a.createElement("i",{className:"fa fa-shopping-cart"}))))}}]),t}(n.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="admin"===sessionStorage.getItem("role"),t=r.a.createElement("span",{className:"product-discount-label"},r.a.createElement(h.a,{to:"/books/discount/".concat(this.props._id)},r.a.createElement("i",{className:"fa fa-bar-chart-o"}," Set Discount")));return r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("div",{className:"product-grid"},r.a.createElement("div",{className:"product-image"},r.a.createElement(h.a,{to:""},r.a.createElement("img",{className:"pic-1",src:this.props.first_img,alt:""}),r.a.createElement("img",{className:"pic-2",src:this.props.second_img,alt:""})),e?r.a.createElement(V,this.props):r.a.createElement(Z,this.props),e?t:null),r.a.createElement("ul",{className:"rating"},r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star"}),r.a.createElement("li",{className:"fa fa-star disable"})),r.a.createElement("div",{className:"product-content"},r.a.createElement("h3",{className:"title"},r.a.createElement(h.a,{to:""},this.props.name)),r.a.createElement("div",{className:"price"},"$",(+this.props.price).toFixed(2)),r.a.createElement(h.a,{className:"add-to-cart",to:"/user/cart/add/".concat(this.props._id)},"+ Add To Cart"))),r.a.createElement("br",null))}}]),t}(n.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="admin"===sessionStorage.getItem("role"),t=r.a.createElement("div",{className:"text-center"},r.a.createElement(h.a,{to:"/home/store/admin/addbook",className:"btn btn-primary btn-xl rounded-pill mt-2"},"AddBook"),r.a.createElement("br",null),r.a.createElement("br",null));return r.a.createElement("section",{className:"container"},e?t:r.a.createElement("h3",{className:"h3"},"Browse over our collection..."),r.a.createElement("div",{className:"row"},this.props.data.map(function(e){return r.a.createElement(K,Object.assign({key:e._id},e))})),r.a.createElement("br",null))}}]),t}(n.Component),X=$=I($),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).loadData=function(){_.getAllBooks().then(function(e){return e.json()}).then(function(e){var t=e.sort(function(e,t){return new Date(t._kmd.ect)-new Date(e._kmd.ect)});a.receiveData(t)}).catch(function(e){return console.log(e)})},a.receiveData=function(e){return a.setState({data:e,isReady:!0})},a.state={isReady:!1,data:[]},b.subscribe(b.events.deleteBooks,a.loadData),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.loadData()}},{key:"render",value:function(){var e="admin"===sessionStorage.getItem("role");return r.a.createElement("section",null,r.a.createElement(g,this.props),e?r.a.createElement(N,{title:"Book's Store",description:"Administration Mode"}):r.a.createElement(N,{title:"Book's Store"}),r.a.createElement(X,Object.assign({data:this.state.data,isReady:this.state.isReady},this.props)),r.a.createElement(j,null))}}]),t}(n.Component),te=(a(43),{name:"",price:"",description:"",author:"",pages:"",cover:"",publisher:"",language:"",genre:"",first_img:"",second_img:""}),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state=te,a.onChange=a.onChange.bind(Object(q.a)(Object(q.a)(a))),a.onSubmit=a.onSubmit.bind(Object(q.a)(Object(q.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(P.a)({},t,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=Object.assign({},this.state);_.add(a).then(function(e){return e.json()}).then(function(e){t.props.history.push("/home/store")}).catch(function(e){return console.log(e)}),this.setState(te)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form_main"},r.a.createElement("h4",{className:"heading"},r.a.createElement("strong",null,"Add ")," Book Panel ",r.a.createElement("span",null)),r.a.createElement("div",{className:"form"},r.a.createElement("form",{id:"contactFrm",name:"contactFrm",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",required:"",placeholder:"Title",value:this.state.name,name:"name",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Author",value:this.state.author,name:"author",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"First image url",value:this.state.first_img,name:"first_img",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Second image url",value:this.state.second_img,name:"second_img",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Genre",value:this.state.genre,name:"genre",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Language",value:this.state.language,name:"language",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Publisher",value:this.state.publisher,name:"publisher",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"text",required:"",placeholder:"Cover",value:this.state.cover,name:"cover",className:"txt",onChange:this.onChange}),r.a.createElement("input",{type:"number",required:"",placeholder:"Pages",value:this.state.pages,name:"pages",className:"txt",onChange:this.onChange}),r.a.createElement("textarea",{placeholder:"Book Description",name:"description",type:"text",className:"txt_3",value:this.state.description,onChange:this.onChange}),r.a.createElement("input",{type:"number",required:"",placeholder:"Price",value:this.state.price,name:"price",className:"txt",onChange:this.onChange}),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Add Book",name:"submit",className:"txt2"}))))))))}}]),t}(n.Component),ne=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(g,null),r.a.createElement(N,{title:"ADMINISTRATION"}),r.a.createElement(ae,this.props),r.a.createElement(j,null))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).removeBook=function(){var e=a.props.match.params.id;_.remove(e).then(function(e){console.log("Successfully removed!"),b.trigger(b.events.deleteBooks)}).catch(function(e){return console.log(e)})},a.render=function(){return a.removeBook(),r.a.createElement(J.a,{to:"/home/store"})},a}return Object(p.a)(t,e),t}(n.Component),ce=(a(45),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("section",null,r.a.createElement(g,a.props),r.a.createElement(N,{title:"Contact Us",description:"feel free to contact us"}),r.a.createElement(R,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"formBox"},r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h1",null,"Contact form"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"inputBox "},r.a.createElement("div",{className:"inputText"},"First Name"),r.a.createElement("input",{type:"text",name:"",className:"input"}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("div",{className:"inputText"},"Last Name"),r.a.createElement("input",{type:"text",name:"",className:"input"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("div",{className:"inputText"},"Email"),r.a.createElement("input",{type:"text",name:"",className:"input"}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("div",{className:"inputText"},"Mobile"),r.a.createElement("input",{type:"text",name:"",className:"input"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("div",{className:"inputText"},"Email"),r.a.createElement("textarea",{className:"input"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"submit",name:"",className:"button",value:"Send Message"}))))))),r.a.createElement(R,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"well well-sm"},r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter name",required:"required"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("span",{className:"glyphicon glyphicon-envelope"})),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"subject"},"Subject"),r.a.createElement("select",{id:"subject",name:"subject",className:"form-control",required:"required"},r.a.createElement("option",{value:"na",selected:""},"Choose One:"),r.a.createElement("option",{value:"service"},"General Customer Service"),r.a.createElement("option",{value:"suggestions"},"Suggestions"),r.a.createElement("option",{value:"product"},"Product Support")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",className:"form-control",rows:"9",cols:"25",required:"required",placeholder:"Message"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"btn btn-primary pull-right",id:"btnContactUs"},"Send Message")))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("form",null,r.a.createElement("legend",null,r.a.createElement("span",{className:"glyphicon glyphicon-globe"}),"\xa0Our office"),r.a.createElement("address",null,r.a.createElement("strong",null,"Twitter, Inc."),r.a.createElement("br",null),"795 Folsom Ave, Suite 600",r.a.createElement("br",null),"San Francisco, CA 94107",r.a.createElement("br",null),r.a.createElement("abbr",{title:"Phone"},"P:"),"(123) 456-7890"),r.a.createElement("address",null,r.a.createElement("strong",null,"Full Name"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:#"},"first.last@example.com")))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,null))},a}return Object(p.a)(t,e),t}(n.Component)),le=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{path:"/",exact:!0,component:F}),r.a.createElement(d.a,{path:"/singup",exact:!0,component:H}),r.a.createElement(d.a,{path:"/login",exact:!0,component:Y}),r.a.createElement(d.a,{path:"/logout",exact:!0,component:z}),r.a.createElement(d.a,{path:"/home/store",exact:!0,component:ee}),r.a.createElement(d.a,{path:"/home/store/admin/addbook",exact:!0,component:ne}),r.a.createElement(d.a,{path:"/books/delete/:id",exact:!0,component:re}),r.a.createElement(d.a,{path:"/home/contact",exact:!0,component:ce}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.c4b826bb.chunk.js.map