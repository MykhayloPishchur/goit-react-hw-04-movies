(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[6],{30:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(35),r=a.n(n),i={baseUrl:"https://api.themoviedb.org/3",apiKey:"7f7dc31298592eb2d1fbbfdbcae6939f",page:1,trandingMovies:function(){return r.a.get("".concat(this.baseUrl,"/trending/movie/week?api_key=").concat(this.apiKey))},searchByTitle:function(e){return r.a.get("".concat(this.baseUrl,"/search/movie?api_key=").concat(this.apiKey,"&language=en-US&page=").concat(this.page,"&include_adult=false&query=").concat(e))},getMovieDettails:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"?api_key=").concat(this.apiKey))},getMovieCast:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"/credits?api_key=").concat(this.apiKey))},getMovieReview:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"/reviews?api_key=").concat(this.apiKey))}}},36:function(e,t,a){e.exports={card:"moviesgallery_card__2Z6rw",imgContainer:"moviesgallery_imgContainer__3M_ws",galleryItem:"moviesgallery_galleryItem__3UYFQ",cardDescription:"moviesgallery_cardDescription__T8YXB",item:"moviesgallery_item__3veha"}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),i=a(36),o=a.n(i),c=a(8),s=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("li",{key:e.id,className:o.a.card},r.a.createElement(c.b,{className:o.a.item,to:{pathname:"/movies/".concat(e.id)}},r.a.createElement("div",{className:o.a.imgContainer},r.a.createElement("img",{className:o.a.galleryItem,src:e.backdrop_path?"https://image.tmdb.org/t/p/original"+e.backdrop_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU",alt:e.title})),r.a.createElement("div",{className:o.a.cardDescription},r.a.createElement("span",null,e.title),r.a.createElement("span",{style:{fontWeight:700,color:"#944dff"}},e.vote_average,"/10"))))})))}},65:function(e,t,a){e.exports={material:"searchbar_material___Atip"}},66:function(e,t,a){e.exports={cardList:"moviessearch_cardList__3ncfm"}},74:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t),a.d(t,"default",(function(){return y}));var i=a(31),o=a(32),c=a(34),s=a(33),l=a(0),u=a.n(l),m=a(65),p=a.n(m),f=function(e){var t=e.onSubmit;return u.a.createElement("form",{onSubmit:t},u.a.createElement("fieldset",{className:p.a.material},u.a.createElement("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movieInput"}),u.a.createElement("hr",null)))},d=a(30),h=a(37),v=a(66),g=a.n(v),y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:"",movieList:[],isLoading:!1},e.handleMakeRequest=function(){var t=e.state.inputValue;e.setState({isLoading:!0}),d.a.searchByTitle(t).then((function(t){e.setState((function(e){var a=e.movieList;return{movieList:[].concat(r(a),r(t.data.results)),isLoading:!1}}))})).catch((function(e){return console.log(e)}))},e.handleSubmit=function(t){t.preventDefault();var a=t.target.movieInput.value;e.setState((function(e){return e.inputValue!==a?{movieList:[],inputValue:a}:void 0}))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.inputValue;t.inputValue!==a&&(this.setState({isLoading:!0}),this.handleMakeRequest())}},{key:"render",value:function(){var e=this.state.movieList;return u.a.createElement(u.a.Fragment,null,u.a.createElement(f,{onSubmit:this.handleSubmit}),u.a.createElement("ul",{className:g.a.cardList},u.a.createElement(h.a,{items:e})))}}]),a}(l.Component)}}]);
//# sourceMappingURL=moviesSearch-page.d963044e.chunk.js.map