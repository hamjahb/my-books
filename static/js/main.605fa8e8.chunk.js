(this["webpackJsonpmy-books-list"]=this["webpackJsonpmy-books-list"]||[]).push([[0],{32:function(e,t,a){e.exports=a(57)},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t){},45:function(e,t){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),i=(a(37),a(31)),s=a(1),l=a(2),u=a(4),h=a(3),p=a(11),f=a(5),m=(a(38),a(30)),v=a.n(m),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).onClickFavorite=function(e){e.stopPropagation(),a.props.favoriteClickCard(a.props.book)},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:this.props.book.image_url._text}),o.a.createElement("h3",null,this.props.book.title._text),o.a.createElement("p",null,"description"),o.a.createElement("i",{class:"material-icons",onClick:this.onClickFavorite},"favorite_border"))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.search.map((function(t){return o.a.createElement(b,{book:t,favoriteClickCard:e.props.favoriteClick})}));return t||null}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).onClickFavorite=function(e){e.stopPropagation(),console.log(a.props.book),a.props.favoriteClickCard(a.props.book)},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:this.props.book.image_url._text}),o.a.createElement("h3",null,this.props.book.title._text),o.a.createElement("p",null,"description"),o.a.createElement("i",{class:"material-icons",onClick:this.onClickFavorite},"favorite_border"))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.favorites.map((function(t){return o.a.createElement(d,{book:t,favoriteClickCard:e.props.favoriteClick})}));return t||null}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).removeAllOnClick=function(e){e.stopPropagation(),a.props.removeAll()},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"favoriteContainer"},o.a.createElement("div",{className:"container"},o.a.createElement(C,{favorites:this.props.favorites,favoriteClick:this.props.favoriteClick})),o.a.createElement("button",{onClick:this.removeAllOnClick},"Activate Lasers"))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).favoriteClick=function(e){console.log("".concat(e," add to favorites"));var t=Object(i.a)(a.state.favorites),n=t.indexOf(e);-1===n?t.push(e):t.splice(n,1),a.setState({favorites:t})},a.removeAll=function(){a.setState({favorites:[]})},a.newSearch=function(e){console.log("starting new search for ".concat(e));var t="https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=".concat(e,"&page").concat("","&key=").concat("AiY0kCwWYFSK3RilpXntbQ","&search=").concat("all");fetch(t).then((function(e){e.text().then((function(e){var t=v.a.xml2js(e,{compact:!0,ignoreDoctype:!0,attributesKey:"attributes"}).GoodreadsResponse.search.results.work,n=[];t.map((function(e,t){n.push(e.best_book)}));a.setState({search:n})}))})).catch((function(e){console.log(e)}))},a.state={favorites:[],value:"",search:[]},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("a book search was submitted "+this.state.value),e.preventDefault(),this.newSearch(this.state.value)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("body",null,o.a.createElement("h2",null,"your favorites"),o.a.createElement("ul",{className:"container"},o.a.createElement(O,{favorites:this.state.favorites,favoriteClick:this.favoriteClick,removeAll:this.removeAll})),o.a.createElement("h2",null,"Search for books"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Search"})),o.a.createElement("ul",{className:"container"},o.a.createElement(k,{search:this.state.search,favorites:this.state.favorites,favoriteClick:this.favoriteClick}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.605fa8e8.chunk.js.map