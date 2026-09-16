import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-DRsymKMz.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";function r({alt:e=40,dist:t=0,t:n=0,heading:r=0,batt:o=80,className:s=``}){let{svg:c,meta:l}=(0,i.useMemo)(()=>{let i=n%600>420,a=Math.max(34,Math.min(96,104-e*.32)),s=i?[`#0a1420`,`#132436`]:[`#43617f`,`#8fa6b8`],c=i?`#0e1a14`:`#43512f`,l=``,u=t/6%60;for(let e=0;e<9;e++){let t=(e*60-u+60)%380-30,n=.5+e%3*.25,r=16+e*37%34*n,a=20+e*23%22;l+=`<rect x="${t.toFixed(1)}" y="${(180-r-e%4*9).toFixed(1)}" width="${a}" height="${r}" fill="#000" opacity="${(.24+e%3*.09).toFixed(2)}"/>`,i&&e%2==0&&(l+=`<rect x="${(t+a*.35).toFixed(1)}" y="${(180-r-e%4*9+4).toFixed(1)}" width="2.4" height="2.4" fill="#f0c869" opacity=".75"/>`)}let d=``;for(let e=0;e<4;e++){let t=40+e*80-u*.6;d+=`<path d="M${t.toFixed(1)} 180 L${(160+(t-160)*.18).toFixed(1)} ${a+6}" stroke="#000" stroke-opacity=".22" stroke-width="${(9-e).toFixed(0)}" fill="none"/>`}let f=o<=20?`#e04b4b`:o<=40?`#e69837`:`#37c48a`;return{svg:`<svg viewBox="0 0 320 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${s[0]}"/><stop offset="1" stop-color="${s[1]}"/>
          </linearGradient>
          <radialGradient id="vig" cx="50%" cy="50%" r="72%">
            <stop offset=".55" stop-color="#000" stop-opacity="0"/>
            <stop offset="1" stop-color="#000" stop-opacity=".55"/>
          </radialGradient>
        </defs>
        <rect width="320" height="${a}" fill="url(#vsky)"/>
        <rect y="${a}" width="320" height="${180-a}" fill="${c}"/>
        ${d}${l}
        <rect width="320" height="180" fill="url(#vig)"/>
        <g stroke="#f2f5f7" stroke-opacity=".62" stroke-width="1.1" fill="none">
          <path d="M152 90 h-11 M168 90 h11 M160 82 v-11 M160 98 v11"/>
          <path d="M14 14 h13 M14 14 v13 M306 14 h-13 M306 14 v13 M14 166 h13 M14 166 v-13 M306 166 h-13 M306 166 v-13"/>
        </g>
        <circle cx="160" cy="90" r="2" fill="none" stroke="#f2f5f7" stroke-opacity=".62"/>
        <g stroke="#2fd6ae" stroke-opacity=".55" stroke-width="1">
          <line x1="0" y1="${a}" x2="320" y2="${a}"/>
          <line x1="0" y1="${a-16}" x2="320" y2="${a-16}" stroke-opacity=".28"/>
          <line x1="0" y1="${a+18}" x2="320" y2="${a+18}" stroke-opacity=".28"/>
        </g>
        <g font-family="var(--mono)" font-size="9" fill="#2fd6ae" fill-opacity=".85">
          <text x="10" y="14">ALT ${e.toFixed(0)}m  VIT 0.0m/s</text>
          <text x="202" y="14" text-anchor="end">CAP ${Math.round(r).toString().padStart(3,`0`)}°</text>
          <text x="310" y="172" text-anchor="end">BAT ${o}%</text>
        </g>
        <rect x="10" y="166" width="60" height="6" fill="none" stroke="${f}" stroke-opacity=".9"/>
        <rect x="11" y="167" width="${Math.max(0,Math.min(58,58*o/100))}" height="4" fill="${f}" fill-opacity=".85"/>
      </svg>`,meta:{horizon:a,night:i}}},[e,t,n,r,o]);return(0,a.jsx)(`div`,{className:`vb-screen relative aspect-video overflow-hidden rounded-lg bg-black ${s}`,dangerouslySetInnerHTML:{__html:c}})}var i,a;function o(){return(o=e((()=>{i=t(),a=n();try{r.displayName=`VideoFrame`,r.__docgenInfo={description:``,displayName:`VideoFrame`,filePath:`C:/Users/SOP TELECOM/Desktop/PROJETS/DronetConsole/src/components/specialized/VideoFrame/VideoFrame.tsx`,methods:[],props:{alt:{defaultValue:{value:`40`},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`alt`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`number`}},dist:{defaultValue:{value:`0`},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`dist`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`number`}},t:{defaultValue:{value:`0`},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`t`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`number`}},heading:{defaultValue:{value:`0`},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`heading`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`number`}},batt:{defaultValue:{value:`80`},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`batt`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`number`}},className:{defaultValue:{value:``},declarations:[{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`}],description:``,name:`className`,parent:{fileName:`DronetConsole/src/components/specialized/VideoFrame/VideoFrame.types.ts`,name:`VideoFrameProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{o as n,r as t};