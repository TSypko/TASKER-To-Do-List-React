(this["webpackJsonpTasker-todo-list-react"]=this["webpackJsonpTasker-todo-list-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.808985cb.svg"},,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(14),n(3)),s=n(8),i=n(1),u=(n(15),function(e){var t=e.children,n=e.theme;return o.a.createElement("div",{className:"wrapper wrapper--".concat(n)},t)}),m=(n(16),function(e){var t=e.children;return o.a.createElement("div",{className:"flexContainer"},t)}),d=(n(17),function(e){var t=e.value,n=e.state,a=e.event;return o.a.createElement("aside",{className:"switch"},o.a.createElement("label",{htmlFor:"switch",className:"switch__label"},"Night Mode"),o.a.createElement("button",{className:n,id:"switch",value:t,onClick:a}),o.a.createElement("label",{className:"switch__toggle",htmlFor:"switch"}))}),f=(n(18),n(7)),h=n.n(f),b=(n(19),function(){return o.a.createElement("img",{src:h.a,alt:"Logotype",className:"logo"})}),g=function(e){e.body;var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("section",{className:"header__section"},o.a.createElement(b,null),o.a.createElement("h1",{className:"header__title"},t)))},k=(n(20),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)}),E=(n(21),function(e){var t=e.title,n=e.body,a=e.sectionType;return o.a.createElement("section",{className:"section".concat(a?" ".concat(a):"")},o.a.createElement("h2",{className:"section__header"},t),n)}),_=(n(22),function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],l=c[1],s=Object(a.useRef)();return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=r.trim();n&&(e.preventDefault(),t(n),l(""))}},o.a.createElement("input",{ref:s,type:"text",className:"form__input",autoFocus:!0,placeholder:"write your task here",value:r,onChange:function(e){var t=e.target;return l(t.value)}}),o.a.createElement("button",{className:"form__button",onClick:function(){s.current.focus()}},"submit"))}),v=(n(23),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return t.length?o.a.createElement("ul",{className:"tasks__list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"tasks__item ".concat(e.done&&n?"tasks__item--hidden":"")},o.a.createElement("button",{onClick:function(){return c(e.id)},className:"tasks__button tasks__button--doneButton".concat(e.done?" tasks__button--doneButtonToggled":"")}),o.a.createElement("p",{className:"tasks__paragraph ".concat(e.done?"tasks__paragraph--done":"")},e.content),o.a.createElement("button",{onClick:function(){return a(e.id)},className:"tasks__button tasks__button--deleteButton"}))}))):o.a.createElement("p",{className:"tasks__paragraph tasks__paragraph--centered"},"There are currently no tasks to display")}),p=(n(24),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHide,c=e.setAllDone,r=e.removeAllTasks;return t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:c,className:"button button--doneAllButton",disabled:t.every((function(e){return e.done}))},"set all as done"),o.a.createElement("button",{onClick:a,className:"button button--hideDoneButton",disabled:t.every((function(e){return!e.done||void 0}))},n?"show":"hide","done"),o.a.createElement("button",{onClick:r,className:"button button--removeAllButton"},"remove all tasks"))}),N=(n(25),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHide,c=e.setAllDone,r=e.removeAllTasks;return o.a.createElement("footer",{className:"footer"},t.length>0&&o.a.createElement(E,{sectionType:"section--footer",body:o.a.createElement(p,{tasks:t,hideDone:n,toggleHide:a,setAllDone:c,removeAllTasks:r})}))});var w=function(){var e=JSON.parse(localStorage.getItem("tasks")),t=Object(a.useState)(e||[]),n=Object(i.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){return localStorage.setItem("tasks",JSON.stringify(c))}),[c]);var f=Object(a.useState)(!1),h=Object(i.a)(f,2),b=h[0],p=h[1],w=Object(a.useState)(localStorage.getItem("theme")?localStorage.getItem("theme"):""),O=Object(i.a)(w,2),j=O[0],y=O[1],S=Object(a.useState)(localStorage.getItem("button")?localStorage.getItem("button"):"switch__button"),T=Object(i.a)(S,2),D=T[0],A=T[1];return Object(a.useEffect)((function(){return localStorage.setItem("theme",j)}),[j]),Object(a.useEffect)((function(){return localStorage.setItem("button",D)}),[D]),o.a.createElement(u,{theme:j},o.a.createElement(m,null,o.a.createElement(d,{value:j,state:D,event:function(){j?(y(""),A("switch__button")):(y("dark"),A("switch__button switch__button-toggled"))}}),o.a.createElement(g,{title:"TASKER"}),o.a.createElement(k,null,o.a.createElement(E,{title:"add new task",body:o.a.createElement(_,{addTask:function(e){r((function(t){return[].concat(Object(s.a)(t),[{id:t.length?t[t.length-1].id+1:1,content:e,done:!1}])}))}})}),o.a.createElement(E,{title:"task list",body:o.a.createElement(v,{tasks:c,hideDone:b,removeTask:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){r((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{done:!t.done}):t}))}))}})})),o.a.createElement(N,{tasks:c,hideDone:b,toggleHideDone:function(){p((function(e){return!e}))},setAllDone:function(){r((function(e){return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{done:!0})}))}))},removeAllTasks:function(){r([])}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f935b7a4.chunk.js.map