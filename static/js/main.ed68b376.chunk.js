(this["webpackJsonptasker-todo-list-react"]=this["webpackJsonptasker-todo-list-react"]||[]).push([[0],{15:function(n,t,e){n.exports=e.p+"static/media/logo.808985cb.svg"},16:function(n,t,e){n.exports=e.p+"static/media/checked.ad3ce474.svg"},17:function(n,t,e){n.exports=e.p+"static/media/trash.04d13a08.svg"},18:function(n,t,e){n.exports=e.p+"static/media/pen.0bfe9232.svg"},20:function(n,t,e){n.exports=e(27)},27:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(11),c=e.n(a),i=e(3),u=e(1),l={light:{colors:{background:"#c4bb91",sectionBackground:"#fff",sectionText:"#141414",shadow:"#555",greenButton:"rgb(0, 172, 29)",redButton:"rgb(172, 0, 0)",yellowButton:"rgb(227, 204, 52)",switch:"hsl(0, 0%, 100%)",svgImage:"brightness(100%) invert(0%)",translate:"translatex(130%)"},breakpoints:{phone:"375px",tablet:"768px",desktop:"1200px"}},dark:{colors:{background:"#1a1a1a",sectionBackground:"#2a3a41",sectionText:"rgb(255, 255, 255)",shadow:"rgb(156, 156, 156)",greenButton:"rgb(0, 172, 29)",redButton:"rgb(172, 0, 0)",yellowButton:"rgb(227, 204, 52)",switch:"#2a3a41",svgImage:"brightness(0%) invert(100%)",translate:"translatex(0%)"},breakpoints:{phone:"375px",tablet:"768px",desktop:"1200px"}}},s=e(2);function d(){var n=Object(s.a)(["\n  html {\n    box-sizing: border-box;\n  }\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  body {\n    background: ",';\n    font-family: "Roboto Condensed", sans-serif;\n    transition: all 0.3s linear;\n    margin: 10px;\n\n    @media (max-width: ',") {\n        font-size: 15px;\n    }\n  }\n  "]);return d=function(){return n},n}var f=Object(u.b)(d(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.breakpoints.phone})),m=function(n,t){var e=Object(r.useState)((function(){var e=localStorage.getItem(n);return null===e?t:JSON.parse(e)})),o=Object(i.a)(e,2),a=o[0],c=o[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[n,a]),[a,c]},b=e(4),g=e(19),p=function(){var n=function(n){var t=n.toLocaleDateString("en-EN",{day:"numeric",month:"long"}),e=n.toLocaleTimeString();return"Created at ".concat(e," on ").concat(t)},t=function(n){var t=n.toLocaleDateString("en-EN",{day:"numeric",month:"long"}),e=n.toLocaleTimeString();return"(edited at ".concat(e," on ").concat(t,")")},e=m("tasks",[]),o=Object(i.a)(e,2),a=o[0],c=o[1],u=function(){var n=Object(r.useState)(new Date),t=Object(i.a)(n,2),e=t[0],o=t[1];return Object(r.useEffect)((function(){var n=setInterval((function(){o(new Date)}),1e3);return function(){clearInterval(n)}}),[]),e}();return{tasks:a,addTask:function(t){c((function(e){return[].concat(Object(g.a)(e),[{id:e.length?e[e.length-1].id+1:1,content:t,date:n(u),editDate:null}])}))},editTask:function(n,e){c((function(r){return r.map((function(r){return r.id===e&&r.content!==n?Object(b.a)(Object(b.a)({},r),{},{content:n,edit:!1,editDate:t(u)}):Object(b.a)(Object(b.a)({},r),{},{edit:!1})}))}))},removeTask:function(n){c((function(t){return t.filter((function(t){return t.id!==n}))}))},toggleTaskDone:function(n){c((function(t){return t.map((function(t){return t.id===n?Object(b.a)(Object(b.a)({},t),{},{done:!t.done}):t}))}))},setAllDone:function(){c((function(n){return n.map((function(n){return Object(b.a)(Object(b.a)({},n),{},{done:!0})}))}))},removeAllTasks:function(){c([])},toggleEditTask:function(n){c((function(t){return t.map((function(t){return t.id===n?Object(b.a)(Object(b.a)({},t),{},{edit:!t.edit}):t}))}))}}};function h(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n"]);return h=function(){return n},n}var x=u.d.div(h()),v=function(n){var t=n.children;return o.a.createElement(x,null,t)};function k(){var n=Object(s.a)(["\n        max-width: 800px;\n        width: 100%;\n    "]);return k=function(){return n},n}var j=u.d.div(k()),O=function(n){var t=n.children;return o.a.createElement(j,null,t)};function w(){var n=Object(s.a)(["   \n        +Label::after {\n            transform: ",";;\n        }\n    "]);return w=function(){return n},n}function E(){var n=Object(s.a)(["\n    display: none;\n\n    ","\n"]);return E=function(){return n},n}function y(){var n=Object(s.a)(["\n        position: relative;\n        display: block;\n        padding: 5px 10px;\n        width: 65px;\n        background-color: ",";\n        background-image: ",";\n        transition: all 0.5s;\n        cursor: pointer;\n        box-shadow: 1px 1px 2px 1px ",';\n\n        &::after {\n            content: "";\n            display: block;\n            height: 20px;\n            width: 20px;\n            background-color: ',";\n            border: 1px solid ",";\n            transition: all 0.3s;\n            transform: ",";;\n        }\n\n        &:hover {\n            background-image: linear-gradient(to right, #2a3a41, #c4bb91);\n        }\n    "]);return y=function(){return n},n}function T(){var n=Object(s.a)(["\n    font-weight: 700;\n    color: ",";\n    margin-left: 10px;\n\n    ","\n\n"]);return T=function(){return n},n}function D(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 10px auto;\n    max-width: 800px;\n"]);return D=function(){return n},n}var B=u.d.aside(D()),A=u.d.label(T(),(function(n){return n.theme.colors.sectionText}),(function(n){return n.toggle&&Object(u.c)(y(),(function(n){return n.theme.colors.switch}),(function(n){return n.theme.colors.switch}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.translate}))})),S=u.d.button(E(),(function(n){return n.toggled&&Object(u.c)(w(),(function(n){return n.theme.colors.translate}))})),z=function(n){var t=n.onChange;return o.a.createElement(B,null,o.a.createElement(A,{htmlFor:"switch"},"Night Mode"),o.a.createElement(S,{id:"switch",onClick:t}),o.a.createElement(A,{toggle:!0,htmlFor:"switch"}))};function C(){var n=Object(s.a)(["\n    text-transform: capitalize;\n    color: ",";\n    font-size: 40px;\n    text-align: center;   \n\n    @media (max-width: ",") {\n        font-size: 30px;\n    }\n"]);return C=function(){return n},n}function I(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    padding: 20px;\n    box-shadow: 1px 1px 2px 1px ",";\n"]);return I=function(){return n},n}function L(){var n=Object(s.a)(["\n    margin: 10px auto;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n"]);return L=function(){return n},n}var F=u.d.header(L()),N=u.d.section(I(),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.shadow})),H=u.d.h1(C(),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.breakpoints.phone}));function J(){var n=Object(s.a)(["\n    align-self: center;\n    margin: 10px;\n    width: 70px;\n    filter: ",";\n\n    @media (max-width: ",") {\n        max-width: 60%;\n    }\n"]);return J=function(){return n},n}var R=u.d.img(J(),(function(n){return n.theme.colors.svgImage}),(function(n){return n.theme.breakpoints.phone})),M=e(15),W=e.n(M),K=function(){return o.a.createElement(R,{src:W.a,alt:"Logotype"})},$=function(n){var t=n.title;return o.a.createElement(F,null,o.a.createElement(N,null,o.a.createElement(K,null),o.a.createElement(H,null,t)))},q=function(n){var t=n.children;return o.a.createElement("main",null,t)};function G(){var n=Object(s.a)(["\n    text-transform: uppercase;\n    font-size: 20px;\n    padding-bottom: 10px;\n    border-bottom: 2px solid;\n    border-color: ",";\n"]);return G=function(){return n},n}function P(){var n=Object(s.a)(["\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    padding: 20px;\n    margin: 10px 0px;\n    box-shadow: 1px 1px 2px 1px ",";\n"]);return P=function(){return n},n}var Q=u.d.section(P(),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.shadow})),U=u.d.h2(G(),(function(n){return n.theme.colors.sectionText})),V=function(n){var t=n.title,e=n.body;return o.a.createElement(Q,null,t&&o.a.createElement(U,null,t),e)};function X(){var n=Object(s.a)(["\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n    min-width: max-content;\n    background-color: ",";\n    color: ",";\n    letter-spacing: 1px;\n    padding: 10px 10px;\n    margin-left: 10px;\n    transition: color 0.4s, transform 0.1s, background-color 0.4s;\n\n    @media (max-width: ",") {\n        margin-top: 10px;\n        margin-left: 0px;\n    }\n\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: 1px solid ",";\n        font-weight: bold;\n        padding-left: 7px;\n    }\n    &:active {\n        border: 1px solid ",";\n        transform: scale(0.9);\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n        width: 100%;\n        padding: 10px 20px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(s.a)(["\n    display: flex;\n\n    @media (max-width: ",") {\n            flex-direction: column;\n    }\n"]);return Z=function(){return n},n}var _=u.d.form(Z(),(function(n){return n.theme.breakpoints.phone})),nn=u.d.input(Y()),tn=u.d.button(X(),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.breakpoints.phone}),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionText})),en=function(n){var t=n.addTask,e=Object(r.useState)(""),a=Object(i.a)(e,2),c=a[0],u=a[1],l=Object(r.useRef)();return o.a.createElement(_,{onSubmit:function(n){n.preventDefault();var e=c.trim();e&&(n.preventDefault(),t(e),u(""),l.current.focus())}},o.a.createElement(nn,{ref:l,type:"text",autoFocus:!0,placeholder:"write your task here",value:c,onChange:function(n){var t=n.target;return u(t.value)}}),o.a.createElement(tn,null,"submit"))},rn=e(16),on=e.n(rn),an=e(17),cn=e.n(an),un=e(18),ln=e.n(un);function sn(){var n=Object(s.a)(["\n        background-color: ",";\n        background-image: url(",");\n        background-size: 85%;\n        margin-left: 15px;\n        transition: 0.2s;\n\n        &:hover {\n            filter: brightness(110%);\n        }\n        &:active {\n            transform: scale(0.85);\n            filter: brightness(120%);\n        }\n    "]);return sn=function(){return n},n}function dn(){var n=Object(s.a)(["\n        background-color: ",";\n        background-image: url(",");\n        background-size: 75%;\n        margin-left: 15px;\n        transition: 0.2s;\n\n        &:hover {\n            filter: brightness(110%);\n        }\n        &:active {\n            transform: scale(0.85);\n            filter: brightness(120%);\n        }\n    "]);return dn=function(){return n},n}function fn(){var n=Object(s.a)(["\n        background-image: url(",");\n        background-size: 75%;\n    "]);return fn=function(){return n},n}function mn(){var n=Object(s.a)(["\n        background-color: ",";\n        margin-right: 15px;\n        transition: 0.2s;\n\n        &:hover {\n            filter: brightness(110%);\n        }\n        &:active {\n            transform: scale(0.85);\n            filter: brightness(120%);\n        }\n    "]);return mn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n    min-width: 30px;\n    min-height: 30px;\n    transition: color 0.4s;\n    transition: transform 0.1s;\n    border-radius: 5px;\n    background-position: center;\n    transition: background-color 0.4s;\n    background-repeat: no-repeat;\n\n    @media (max-width: ",") {\n        min-width: 25px;\n        min-height: 25px;\n    }\n    \n    ","\n\n    ","\n\n    ","\n    \n    ","\n\n"]);return bn=function(){return n},n}function gn(){var n=Object(s.a)(["\n        display: none;\n    "]);return gn=function(){return n},n}function pn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  \n    ","\n"]);return pn=function(){return n},n}function hn(){var n=Object(s.a)(["\n    list-style: none;\n    padding-left: 0px;\n    background-color: ",";    \n"]);return hn=function(){return n},n}function xn(){var n=Object(s.a)(["\n        text-align: right;\n        font-style: italic;\n    "]);return xn=function(){return n},n}function vn(){var n=Object(s.a)(["\n    ","\n    \n"]);return vn=function(){return n},n}function kn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-weight: 400;\n    max-width: 100%;\n    flex-grow: 1;\n    font-size: 13px;\n    margin: 5px 0px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid ",";   \n\n    @media (max-width: ",") {\n        font-size: 12px;\n    }\n"]);return kn=function(){return n},n}function jn(){var n=Object(s.a)(["\n        text-decoration: line-through;\n        font-style: italic;\n    "]);return jn=function(){return n},n}function On(){var n=Object(s.a)(["\n        text-align: center;\n        font-style: italic;\n    "]);return On=function(){return n},n}function wn(){var n=Object(s.a)(["\n    font-weight: 400;\n    max-width: 100%;\n    text-align: justify;\n    flex-grow: 1;\n    font-size: 20px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    margin: 5px 0px;\n\n    @media (max-width: ",") {\n        font-size: 16px;\n    }\n\n    ","\n    ","\n"]);return wn=function(){return n},n}function En(){var n=Object(s.a)(['\n        &::after {\n            content: "Done tasks are hidden";\n        }\n    ']);return En=function(){return n},n}function yn(){var n=Object(s.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    font-style: italic;\n\n    ","\n"]);return yn=function(){return n},n}var Tn=u.d.span(yn(),(function(n){return n.content&&Object(u.c)(En())})),Dn=u.d.p(wn(),(function(n){return n.theme.breakpoints.phone}),(function(n){return n.centered&&Object(u.c)(On())}),(function(n){return n.done&&Object(u.c)(jn())})),Bn=u.d.p(kn(),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.breakpoints.phone})),An=u.d.span(vn(),(function(n){return n.edited&&Object(u.c)(xn())})),Sn=u.d.ul(hn(),(function(n){return n.theme.colors.sectionBackground})),zn=u.d.li(pn(),(function(n){return n.hidden&&Object(u.c)(gn())})),Cn=u.d.button(bn(),(function(n){return n.theme.breakpoints.phone}),(function(n){return n.active&&Object(u.c)(mn(),(function(n){return n.theme.colors.greenButton}))}),(function(n){return n.done&&Object(u.c)(fn(),on.a)}),(function(n){return n.edit&&Object(u.c)(dn(),(function(n){return n.theme.colors.yellowButton}),ln.a)}),(function(n){return n.remove&&Object(u.c)(sn(),(function(n){return n.theme.colors.redButton}),cn.a)}));function In(){var n=Object(s.a)(["\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n    min-width: max-content;\n    background-color: ",";\n    color: ",";\n    letter-spacing: 1px;\n    padding: 5px 10px;\n    margin-left: 10px;\n    transition: color 0.4s, transform 0.1s, background-color 0.4s;\n\n    @media (max-width: ",") {\n        margin-top: 10px;\n        margin-left: 0px;\n    }\n\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: 1px solid ",";\n        font-weight: bold;\n        padding-left: 7px;\n    }\n    &:active {\n        border: 1px solid ",";\n        transform: scale(0.9);\n    }\n"]);return In=function(){return n},n}function Ln(){var n=Object(s.a)(["\n        display: unset;\n    "]);return Ln=function(){return n},n}function Fn(){var n=Object(s.a)(["\n    width: 100%;\n    padding: 5px 20px; \n    display: none;\n\n    ","   \n"]);return Fn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    \n    @media (max-width: ",") {\n        flex-wrap: wrap;\n    }\n"]);return Nn=function(){return n},n}var Hn=u.d.div(Nn(),(function(n){return n.theme.breakpoints.tablet})),Jn=u.d.input(Fn(),(function(n){return n.edit&&Object(u.c)(Ln())})),Rn=u.d.button(In(),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionText}),(function(n){return n.theme.colors.sectionText})),Mn=function(n){var t=n.value,e=n.editTask,a=n.taskID,c=Object(r.useState)(t),u=Object(i.a)(c,2),l=u[0],s=u[1];return o.a.createElement("form",{onSubmit:function(n){n.preventDefault();var t=l.trim();t&&(n.preventDefault(),e(t,a))}},o.a.createElement(Hn,null,o.a.createElement(Jn,{edit:!0,value:l,type:"text",autoFocus:!0,onChange:function(n){var t=n.target;return s(t.value)}}),o.a.createElement(Rn,null,"submit")))},Wn=function(n){var t=n.tasks,e=n.hideDone,r=n.removeTask,a=n.toggleTaskDone,c=n.toggleEditTask,i=n.editTask;return t.length?o.a.createElement(Sn,null,o.a.createElement(Tn,{content:e||""}),t.map((function(n){return o.a.createElement(o.a.Fragment,{key:n.id},o.a.createElement(zn,{hidden:n.done&&e},o.a.createElement(Cn,{onClick:function(){return a(n.id)},active:!0,done:n.done}),o.a.createElement(Dn,{done:n.done},n.edit?o.a.createElement(Mn,{edit:n.edit,value:n.content,editTask:i,taskID:n.id}):n.content),o.a.createElement(Cn,{edit:!0,onClick:function(){return c(n.id)}}),o.a.createElement(Cn,{onClick:function(){return r(n.id)},remove:!0})),o.a.createElement(Bn,null,o.a.createElement(An,null,n.date),o.a.createElement(An,{edited:!0},n.editDate)))}))):o.a.createElement(Dn,{centered:!0},"There are currently no tasks to display")};function Kn(){var n=Object(s.a)(["\n            background-color: ",";\n            border-radius: 5px;\n            transition: 0.3s;\n\n        &:hover {\n            background-color: ",";\n        }\n        \n        &:active {\n            transform: scale(0.9);\n        }\n    "]);return Kn=function(){return n},n}function $n(){var n=Object(s.a)(["\n            background-color: ",";\n            border-radius: 5px;\n            transition: 0.3s;\n\n        &:hover {\n            filter: brightness(110%);\n        }\n        \n        &:active {\n            transform: scale(0.9);\n            filter: brightness(120%);\n        }\n        &:disabled {\n            background-color: #ccc;\n            filter: brightness(100%);\n            cursor: default;\n        }\n    "]);return $n=function(){return n},n}function qn(){var n=Object(s.a)(["\n        background-color: ",";\n        border-radius: 5px;\n        transition: 0.5s;\n\n        &:hover {\n            filter: brightness(110%);\n        }\n        \n        &:active {\n            transform: scale(0.9);\n            filter: brightness(120%);\n        }\n        &:disabled {\n            background-color: #ccc;\n            filter: brightness(100%);\n            cursor: default;\n        }\n    "]);return qn=function(){return n},n}function Gn(){var n=Object(s.a)(["\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n    padding: 10px 20px;\n    color: #ffffff;\n    font-weight: bold;\n    letter-spacing: 1px;\n    margin: 10px;\n    transition: color 0.4s;\n    transition: transform 0.1s;\n    transition: background-color 0.4s;\n\n    ","\n\n    ","\n\n    ","\n"]);return Gn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n"]);return Pn=function(){return n},n}var Qn=u.d.div(Pn()),Un=u.d.button(Gn(),(function(n){return n.doneAll&&Object(u.c)(qn(),(function(n){return n.theme.colors.greenButton}))}),(function(n){return n.hideDone&&Object(u.c)($n(),(function(n){return n.theme.colors.greenButton}))}),(function(n){return n.removeAll&&Object(u.c)(Kn(),(function(n){return n.theme.colors.redButton}),(function(n){return n.theme.colors.redButtonLighter}))})),Vn=function(n){var t=n.tasks,e=n.hideDone,r=n.toggleHideDone,a=n.setAllDone,c=n.removeAllTasks;return t.length>0&&o.a.createElement(Qn,null,o.a.createElement(Un,{onClick:a,doneAll:!0,disabled:t.every((function(n){return n.done}))},"set all as done"),o.a.createElement(Un,{onClick:r,hideDone:!0,disabled:t.every((function(n){return!n.done||void 0}))},e?"show":"hide"," done"),o.a.createElement(Un,{onClick:c,removeAll:!0},"remove all tasks"))};function Xn(){var n=Object(s.a)(["\n    margin: 10px auto;\n"]);return Xn=function(){return n},n}var Yn=u.d.footer(Xn()),Zn=function(n){var t=n.tasks,e=n.hideDone,r=n.toggleHideDone,a=n.setAllDone,c=n.removeAllTasks;return o.a.createElement(Yn,null,t.length>0&&o.a.createElement(V,{body:o.a.createElement(Vn,{tasks:t,hideDone:e,toggleHideDone:r,setAllDone:a,removeAllTasks:c})}))};var _n=function(){var n=m("hideDone",!1),t=Object(i.a)(n,2),e=t[0],r=t[1],a=m("currentTheme","light"),c=Object(i.a)(a,2),s=c[0],d=c[1],b=p(),g=b.tasks,h=b.addTask,x=b.editTask,k=b.removeTask,j=b.toggleTaskDone,w=b.setAllDone,E=b.removeAllTasks,y=b.toggleEditTask;return o.a.createElement(u.a,{theme:"light"===s?l.light:l.dark},o.a.createElement(f,null),o.a.createElement(v,null,o.a.createElement(O,null,o.a.createElement(z,{onChange:function(){d("light"===s?"dark":"light")}}),o.a.createElement($,{title:"TASKER"}),o.a.createElement(q,null,o.a.createElement(V,{title:"add new task",body:o.a.createElement(en,{addTask:h})}),o.a.createElement(V,{title:"task list",body:o.a.createElement(Wn,{tasks:g,hideDone:e,removeTask:k,toggleTaskDone:j,toggleEditTask:y,editTask:x})})),o.a.createElement(Zn,{tasks:g,hideDone:e,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:w,removeAllTasks:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_n,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ed68b376.chunk.js.map