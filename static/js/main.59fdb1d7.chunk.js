(this["webpackJsonpTasker-todo-list-react"]=this["webpackJsonpTasker-todo-list-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.808985cb.svg"},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(14),n(3)),l=n(8),i=n(1),u=(n(15),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return o.a.createElement("aside",{className:"switch__container"},o.a.createElement("label",{htmlFor:"switch",className:"switch__label"},"Night Mode"),o.a.createElement("input",{className:"switch",type:"checkbox",id:"switch",value:n,onChange:function(e){var t=e.target;return c((function(){t.checked?document.body.setAttribute("data-theme","night"):document.body.removeAttribute("data-theme")}))}}),o.a.createElement("label",{className:"switch__toggle",htmlFor:"switch"}))}),m=(n(16),n(7)),d=n.n(m),f=(n(17),function(){return o.a.createElement("img",{src:d.a,alt:"Logotype",className:"logo"})}),h=function(e){e.body;var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("section",{className:"header__section"},o.a.createElement(f,null),o.a.createElement("h1",{className:"header__title"},t)))},b=(n(18),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)}),k=(n(19),function(e){var t=e.title,n=e.body,a=e.sectionType;return o.a.createElement("section",{className:"section".concat(a?" ".concat(a):"")},o.a.createElement("h2",{className:"section__header"},t),n)}),g=(n(20),function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){""!==r.trim()?(e.preventDefault(),t(r.trim()),s("")):e.preventDefault()}},o.a.createElement("input",{type:"text",className:"form__input",autoFocus:!0,placeholder:"write your task here",value:r,onChange:function(e){var t=e.target;return s(t.value)}}),o.a.createElement("button",{className:"form__button"},"submit"))}),E=(n(21),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return t.length?o.a.createElement("ul",{className:"tasks__list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"tasks__item ".concat(e.done&&n?"tasks__item--hidden":"")},o.a.createElement("button",{onClick:function(){return c(e.id)},className:"tasks__button tasks__button--doneButton".concat(e.done?" tasks__button--doneButtonToggled":"")}),o.a.createElement("p",{className:"tasks__paragraph ".concat(e.done?"tasks__paragraph--done":"")},e.content),o.a.createElement("button",{onClick:function(){return a(e.id)},className:"tasks__button tasks__button--deleteButton"}))}))):o.a.createElement("p",{className:"tasks__paragraph tasks__paragraph--centered"},"There are currently no tasks to display")}),_=(n(22),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHide,c=e.setAllDone,r=e.removeAllTasks;return t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:c,className:"button button--doneAllButton",disabled:t.every((function(e){return e.done}))},"set all as done"),o.a.createElement("button",{onClick:a,className:"button button--hideDoneButton",disabled:t.every((function(e){return!e.done||void 0}))},n?"show":"hide","done"),o.a.createElement("button",{onClick:r,className:"button button--removeAllButton"},"remove all tasks"))}),v=(n(23),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHide,c=e.setAllDone,r=e.removeAllTasks;return o.a.createElement("footer",{className:"footer"},t.length>0&&o.a.createElement(k,{sectionType:"section--footer",body:o.a.createElement(_,{tasks:t,hideDone:n,toggleHide:a,setAllDone:c,removeAllTasks:r})}))});var p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),m=Object(i.a)(r,2),d=m[0],f=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(h,{title:"TASKER"}),o.a.createElement(b,null,o.a.createElement(k,{title:"add new task",body:o.a.createElement(g,{addTask:function(e){c((function(t){return[].concat(Object(l.a)(t),[{id:t.length?t[t.length-1].id+1:1,content:e,done:!1}])}))}})}),o.a.createElement(k,{title:"task list",body:o.a.createElement(E,{tasks:n,hideDone:d,removeTask:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}))}})})),o.a.createElement(v,{tasks:n,hideDone:d,toggleHideDone:function(){f((function(e){return!e}))},setAllDone:function(){c((function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{done:!0})}))}))},removeAllTasks:function(){c([])}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.59fdb1d7.chunk.js.map