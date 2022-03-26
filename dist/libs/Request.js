"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;/**
 * Usage:
 * 
 Request.GET(url='https://...').then(res => {
  if(res.status === 200) {
    console.log(res.body)
  }
}).catch(err => {
  console.error(err)
})
 */const Request=new class{async request(a,b,c={}){let d={method:a,mode:"cors",headers:{"Content-Type":"application/json"}};try{d.body=JSON.stringify(c.body)}catch(a){}return await fetch(b,d).then(async a=>{try{return{status:a.status,body:await a.json()}}catch(b){return{status:a.status,error:b}}})}async GET(a){return await this.request("GET",a)}async POST(a,b){return await this.request("POST",a,{body:b})}async DELETE(a){return await this.request("DELETE",a)}};var _default=Request;exports.default=_default;