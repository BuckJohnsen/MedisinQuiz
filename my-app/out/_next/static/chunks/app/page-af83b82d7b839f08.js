(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2026:function(t,e,a){Promise.resolve().then(a.bind(a,3462))},3462:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return u}});var n=a(7437),i=a(2265),r=a(5166),l=t=>{let{categories:e,onSelectCategory:a}=t;return(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:e.map((t,e)=>(0,n.jsx)(r.E.button,{className:"bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50",onClick:()=>a(t),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*e},children:t},t))})},s=a(8614),o=t=>{let{flashcard:e,onNext:a,currentIndex:l,totalCards:o}=t,[c,u]=(0,i.useState)(null),[d,x]=(0,i.useState)(!1),h=t=>{u(t),x(!0)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-neutral-600 text-sm mb-2 text-right",children:["Card ",l," of ",o]}),(0,n.jsx)(r.E.div,{className:"bg-neutral-100 rounded-xl p-6 mb-6 h-64 flex items-center justify-center shadow-md",initial:!1,animate:{rotateY:d?180:0},transition:{duration:.6},children:(0,n.jsx)(s.M,{mode:"wait",children:d?(0,n.jsx)(r.E.div,{className:"text-2xl font-semibold text-center text-neutral-800",initial:{opacity:0,rotateY:180},animate:{opacity:1,rotateY:180},exit:{opacity:0,rotateY:180},children:e.correct_answer},"answer"):(0,n.jsx)(r.E.h2,{className:"text-2xl font-semibold text-center text-neutral-800",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.question},"question")})}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4 mb-6",children:e.answers.map((t,a)=>(0,n.jsx)(r.E.button,{className:"py-3 px-4 rounded-lg transition duration-300 ".concat(c?t===e.correct_answer?"bg-green-500 text-white":t===c?"bg-red-500 text-white":"bg-neutral-200 text-neutral-500":"bg-neutral-200 hover:bg-neutral-300 text-neutral-800"),onClick:()=>h(t),disabled:null!==c,whileHover:{scale:1.05},whileTap:{scale:.95},children:t},a))}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)(r.E.button,{className:"bg-neutral-700 hover:bg-neutral-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300",onClick:()=>{u(null),x(!1),a()},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Next Question"})})]})},c=a(443);function u(){let[t,e]=(0,i.useState)([]),[u,d]=(0,i.useState)(null),[x,h]=(0,i.useState)(0),[m,p]=(0,i.useState)([]);(0,i.useEffect)(()=>{a.e(587).then(a.t.bind(a,5587,19)).then(t=>{e(t.default)})},[]);let f=Array.from(new Set(t.map(t=>t.category)));return(0,n.jsx)("div",{className:"min-h-screen bg-neutral-100 text-neutral-800 flex items-center justify-center p-4",children:(0,n.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full relative",children:[u&&(0,n.jsx)(r.E.button,{className:"absolute top-4 left-4 text-neutral-500 hover:text-neutral-700 transition-colors duration-300",onClick:()=>{d(null),h(0),p([])},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,n.jsx)(c.Z,{size:24})}),(0,n.jsx)("h1",{className:"text-4xl font-bold text-center mb-8 text-neutral-800",children:"Flashcard System"}),(0,n.jsx)(s.M,{mode:"wait",children:u?(0,n.jsx)(r.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},transition:{duration:.3},children:(0,n.jsx)(o,{flashcard:m[x],onNext:()=>{h(t=>(t+1)%m.length)},currentIndex:x+1,totalCards:m.length})},"flashcard"):(0,n.jsx)(r.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},children:(0,n.jsx)(l,{categories:f,onSelectCategory:e=>{p(function(t){let e=[...t];for(let t=e.length-1;t>0;t--){let a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}(t.filter(t=>t.category===e))),d(e),h(0)}})},"categories")})]})})}}},function(t){t.O(0,[467,971,117,744],function(){return t(t.s=2026)}),_N_E=t.O()}]);