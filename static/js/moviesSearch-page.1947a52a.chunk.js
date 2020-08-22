(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[6],{30:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(35),r=a.n(n),i={baseUrl:"https://api.themoviedb.org/3",apiKey:"7f7dc31298592eb2d1fbbfdbcae6939f",page:1,trandingMovies:function(){return r.a.get("".concat(this.baseUrl,"/trending/movie/week?api_key=").concat(this.apiKey))},searchByTitle:function(e){return r.a.get("".concat(this.baseUrl,"/search/movie?api_key=").concat(this.apiKey,"&language=en-US&page=").concat(this.page,"&include_adult=false&query=").concat(e))},getMovieDettails:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"?api_key=").concat(this.apiKey))},getMovieCast:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"/credits?api_key=").concat(this.apiKey))},getMovieReview:function(e){return r.a.get("".concat(this.baseUrl,"/movie/").concat(e,"/reviews?api_key=").concat(this.apiKey))}}},36:function(e,t,a){e.exports={moviecard:"moviesgallery_moviecard__oG9u8",moviecardOverlay:"moviesgallery_moviecardOverlay__24gbl",moviecardContent:"moviesgallery_moviecardContent__IrkOR",moviecardHeader:"moviesgallery_moviecardHeader__3nDeT",moviecardTitle:"moviesgallery_moviecardTitle__V6XjY",moviecardInfo:"moviesgallery_moviecardInfo__2oZlo",moviecardDesc:"moviesgallery_moviecardDesc__15KGk"}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),i=a(36),o=a.n(i),c=a(8),s=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e.id,style:e.backdrop_path?{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e.backdrop_path,")")}:{backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU"},className:o.a.moviecard},r.a.createElement(c.b,{to:{pathname:"/movies/".concat(e.id)}},r.a.createElement("div",{className:o.a.moviecardOverlay}),r.a.createElement("div",{className:o.a.moviecardContent},r.a.createElement("div",{className:o.a.moviecardHeader},r.a.createElement("h1",{className:o.a.moviecardTitle},e.title),r.a.createElement("h4",{className:o.a.moviecardInfo},"(",e.release_date.slice(0,4)," )")))))})))}},65:function(e,t,a){e.exports={material:"searchbar_material___Atip"}},66:function(e,t,a){e.exports={cardList:"moviessearch_cardList__3ncfm"}},74:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t),a.d(t,"default",(function(){return y}));var i=a(31),o=a(32),c=a(34),s=a(33),l=a(0),u=a.n(l),m=a(65),v=a.n(m),d=function(e){var t=e.onSubmit;return u.a.createElement("form",{onSubmit:t},u.a.createElement("fieldset",{className:v.a.material},u.a.createElement("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movieInput"}),u.a.createElement("hr",null)))},p=a(30),f=a(37),h=a(66),g=a.n(h),y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:"",movieList:[],isLoading:!1},e.handleMakeRequest=function(){var t=e.state.inputValue;e.setState({isLoading:!0}),p.a.searchByTitle(t).then((function(t){e.setState((function(e){var a=e.movieList;return{movieList:[].concat(r(a),r(t.data.results)),isLoading:!1}}))})).catch((function(e){return console.log(e)}))},e.handleSubmit=function(t){t.preventDefault();var a=t.target.movieInput.value;e.setState((function(e){return e.inputValue!==a?{movieList:[],inputValue:a}:void 0}))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.inputValue;t.inputValue!==a&&(this.setState({isLoading:!0}),this.handleMakeRequest())}},{key:"render",value:function(){var e=this.state.movieList;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d,{onSubmit:this.handleSubmit}),u.a.createElement("ul",{className:g.a.cardList},u.a.createElement(f.a,{items:e})))}}]),a}(l.Component)}}]);
//# sourceMappingURL=moviesSearch-page.1947a52a.chunk.js.map