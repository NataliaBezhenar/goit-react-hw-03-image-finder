(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(18),n(10)),s=n(3),l=n(4),u=n(6),h=n(5),d=(n(19),n(8)),j=(n(20),n(1)),p=document.querySelector("#modal-root"),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.content;return Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:e,alt:""})})}),p)}}]),n}(a.Component),b=(n(22),n(13)),f=(n(23),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?e.props.onSubmit(e.state.searchQuery):Object(d.b)("Please enter search query")},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("button",{type:"button",className:"SearchForm-button",onClick:this.handleSubmit,children:[Object(j.jsx)(b.a,{}),Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})]}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),n}(a.Component)),O=n(11),g=(n(24),n(25),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).modalContent=function(t){e.props.onItemClick(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.webformatURL,o=t.tags;return Object(j.jsx)("img",{src:a,alt:o,className:"ImageGalleryItem-image",onClick:function(){return e.modalContent(n)}})}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={output:null,loading:!1},e.handleOpenModal=function(t){t.target!==t.currentTarget&&e.props.onClick()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.onItemClick;return Object(j.jsx)("ul",{className:"ImageGallery",onClick:this.handleOpenModal,children:t&&t.map((function(e){return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)(g,Object(O.a)(Object(O.a)({},e),{},{onItemClick:n}))},e.id)}))})}}]),n}(a.Component);n(26);function y(e){var t=e.onLoadMoreClick;return Object(j.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})}function C(e,t){var n="".concat("https://pixabay.com/api/?key=").concat("16152697-2240022566bfb10dd1cf00ec5","&q=").concat(encodeURIComponent(e),"&per_page=").concat(12,"&page=").concat(t,"&image_type=photo&orientation=horizontal");return fetch(n).then((function(e){return e.json()}))}var x=n(12),k=n.n(x),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1,modalContent:"",searchQuery:"",status:"idle",output:[],page:1,error:null,hideLoadMoreBtn:!1},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.getImages=function(){var t=e.state;C(t.searchQuery,t.page).then((function(t){var n=t.hits;0!==n.length?(n.length<12&&e.setState((function(e){return{hideLoadMoreBtn:!e.hideLoadMoreBtn}})),e.setState((function(e){var t=e.output;return{output:[].concat(Object(i.a)(t),Object(i.a)(n)),status:"resolved"}}))):e.setState({status:"rejected"})})).catch((function(t){return e.setState({error:t,status:"rejected"})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.modalContentShow=function(t){var n=e.state.output.find((function(e){return e.id===t}));e.setState({modalContent:n.largeImageURL})},e.handleFormSubmit=function(t){e.setState({searchQuery:t,page:1,output:[],hideLoadMoreBtn:!1})},e.handleLoadMoreBtnClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.modalContentShow=function(t){var n=e.state.output.find((function(e){return e.id===t}));e.setState({modalContent:n.largeImageURL})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=t.searchQuery,a=t.page;n===this.state.searchQuery&&a===this.state.page||(this.setState({status:"pending"}),this.getImages()),this.handleScroll()}},{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.output,a=e.modalContent,o=e.status,r=e.hideLoadMoreBtn,c=n.length>0&&"rejected"!==o&&!r,i=null;return"idle"===o&&(i=Object(j.jsx)("div",{className:"TextBlock",children:Object(j.jsx)("h2",{children:"Enter search query"})})),"pending"===o&&(i=Object(j.jsx)("div",{className:"Wrapper",children:Object(j.jsx)(S,{})})),"rejected"===o&&(i=Object(j.jsx)("div",{className:"TextBlock",children:Object(j.jsx)("h2",{children:"Nothing was found on your query. Please try again"})})),"resolved"===o&&(i=Object(j.jsx)(v,{images:n,onClick:this.toggleModal,onItemClick:this.modalContentShow})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{onSubmit:this.handleFormSubmit}),i,c&&Object(j.jsx)("div",{className:"Wrapper",children:Object(j.jsx)(y,{onLoadMoreClick:this.handleLoadMoreBtnClick})}),t&&Object(j.jsx)(m,{content:a,onClose:this.toggleModal}),Object(j.jsx)(d.a,{autoClose:3e3,position:"top-center"})]})}}]),n}(a.Component),M=w;c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.03a7d110.chunk.js.map