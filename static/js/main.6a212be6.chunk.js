(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),a=c(6),s=c.n(a),l=c(5),r=c(7),i=c(16),d=(c(12),c(0));var u=function(e){var t=e.todo,c=e.changeCompleteEtat;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:t.complete,onChange:function(){c(t.id)}}),t.name]})})};var j=function(e){var t=e.todos,c=e.changeCompleteEtat;return t.map((function(e){return e.complete?Object(d.jsx)(u,{todo:e,changeCompleteEtat:c},e.id):null}))};var b=function(e){var t=e.todos,c=e.changeCompleteEtat;return t.map((function(e){return e.complete?null:Object(d.jsx)(u,{todo:e,changeCompleteEtat:c},e.id)}))},m="todoApp.todos";var f=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(o.useRef)();function s(e){var t=Object(l.a)(c),o=t.find((function(t){return t.id===e}));o.complete=!o.complete,n(t)}return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem(m));e&&n(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem(m,JSON.stringify(c))}),[c]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"My Todo List"}),Object(d.jsxs)("div",{className:"NumleftTodo",children:[c.filter((function(e){return!e.complete})).length," left to do"]}),Object(d.jsx)("input",{ref:a,type:"text",placeholder:"new todo...",className:"nouvelleTache"}),Object(d.jsxs)("div",{className:"buttonsContainer",children:[Object(d.jsx)("button",{onClick:function(e){var t=a.current.value;""!==t&&(n((function(e){return[].concat(Object(l.a)(e),[{id:Object(i.a)(),name:t,complete:!1}])})),a.current.value=null)},className:"buttons",children:"Add Todo"}),Object(d.jsx)("button",{onClick:function(){var e=c.filter((function(e){return!e.complete}));n(e)},className:"buttons",children:"Clear Completed Todos"}),Object(d.jsx)("button",{onClick:function(){localStorage.removeItem(m),n([])},className:"buttons",children:"Reset Todos"})]}),Object(d.jsxs)("div",{className:"listeTodo",children:[Object(d.jsx)("div",{className:"lefttodo",children:Object(d.jsx)(b,{todos:c,changeCompleteEtat:s})}),Object(d.jsx)("div",{className:"completedtodo",children:Object(d.jsx)(j,{todos:c,changeCompleteEtat:s})})]})]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a212be6.chunk.js.map