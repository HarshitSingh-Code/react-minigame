(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),u=n(7),i=n.n(u),o=(n(13),n(4)),l=n(5);n(14);var s=function(t){var e,n=t.current,a=t.board,u=t.calculateWinner,i=t.setBoard,s=t.setCurrent,m=t.players,f=m.ai,b=m.human;Object(r.useEffect)((function(){if("ai"===n&&!1===u(a)[0]){var t=Object(l.a)(a);t[h(t)]=f,s("human"),i(t)}}));var v=(e={},Object(o.a)(e,b,-1),Object(o.a)(e,f,1),Object(o.a)(e,"tie",0),e),E=function t(e,n,a,r,c){var i=u(e)[0];if(!1!==i)return v[i];if(c){var o=-1/0;for(var l in e)if(""===e[l]){e[l]=f;var s=t(e,n+1,a,r,!1);if(e[l]="",o=Math.max(s,o),r<=(a=Math.max(a,s)))break}return o}var m=1/0;for(var E in e)if(""===e[E]){e[E]=b;var h=t(e,n+1,a,r,!0);if(e[E]="",m=Math.min(h,m),(r=Math.min(r,h))<=a)break}return m},h=function(t){var e,n=-1/0;for(var a in t)if(""===t[a]){t[a]=f;var r=E(t,0,-1/0,1/0,!1);t[a]="",r>n&&(n=r,e=a)}return e},O=function(e){if(""===t.winner&&""===a[e-1]&&"human"===n){var r=Object(l.a)(a);r[e-1]=b,s("ai"),i(r)}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"button",onClick:function(){return O(1)}},a[0]),c.a.createElement("button",{className:"button",onClick:function(){return O(2)}},a[1]),c.a.createElement("button",{className:"button",onClick:function(){return O(3)}},a[2]),c.a.createElement("button",{className:"button",onClick:function(){return O(4)}},a[3]),c.a.createElement("button",{className:"button",onClick:function(){return O(5)}},a[4]),c.a.createElement("button",{className:"button",onClick:function(){return O(6)}},a[5]),c.a.createElement("button",{className:"button",onClick:function(){return O(7)}},a[6]),c.a.createElement("button",{className:"button",onClick:function(){return O(8)}},a[7]),c.a.createElement("button",{className:"button",onClick:function(){return O(9)}},a[8]))},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),a(t),r(t),c(t),u(t)}))},f=function(){var t=Object(r.useState)(Array(9).fill("")),e=Object(a.a)(t,2),n=e[0],u=e[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),l=o[0],m=o[1],f=Object(r.useState)("human"),b=Object(a.a)(f,2),v=b[0],E=b[1],h=Object(r.useState)({ai:"O",human:"X"}),O=Object(a.a)(h,2),d=O[0],N=O[1];Object(r.useEffect)((function(){j(n)[0]&&m(j(n)[0])}),[n]);var j=function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var r=Object(a.a)(e[n],3),c=r[0],u=r[1],i=r[2];if(t[c]&&t[c]===t[u]&&t[u]===t[i])return[t[c],c,u,i]}return t.includes("")?[!1]:["tie"]};return c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("div",{className:"board"},c.a.createElement(s,{setBoard:u,winner:l,board:n,calculateWinner:j,current:v,setCurrent:E,players:d})),c.a.createElement("div",{className:"result"},c.a.createElement("h2",null,""!==l&&"tie"!==l?"WINNER IS ".concat(l):"","tie"===l?"IT'S A TIE":""),c.a.createElement("div",{className:"fnc"},""!==l&&c.a.createElement("button",{className:"resetbutton",onClick:function(){return u(Array(9).fill("")),m(""),void("O"===d.ai?E("human"):E("ai"))}},"RESTART"),""!==l&&c.a.createElement("button",{className:"switchbutton",onClick:function(){return"X"===d.human?(N({ai:"X",human:"O"}),E("ai")):"O"===d.human&&(N({ai:"O",human:"X"}),E("human")),u(Array(9).fill("")),void m("")}},"PLAY AS ",d.ai)))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),m()},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.96f02783.chunk.js.map