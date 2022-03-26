"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.styled=exports.default=void 0;var _styledJss=_interopRequireDefault(require("styled-jss")),_colors=require("./colors/");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}// colors
// const styled = (obj, cb) => styled_(obj)(({ theme }) => cb(theme))
/* Usage styled:
import {styled} from 'styles/snippets'

const RootList = styled.ul(theme => ({
  backgroundColor: 'red',
}))
*/const custom=new class{constructor(){}makeRadius(...a){let b=[];for(let c of a)"auto"===c&&(c=10),b.push(c);return 0<b.length?b.map(a=>a+"px").join(" "):10}},media=new class{/*
    Usage in css:
  
    root: {
      [media.down.sm]: {
        height: 28,
      },
    },
    */constructor(){this.min=a=>`@media (min-width: ${a}px)`,this.max=a=>`@media (max-width: ${a}px)`}// {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}
get down(){return{xs:this.max(600),sm:this.max(900),md:this.max(1200),lg:this.max(1536)// xl: this.max(1536),
}}get up(){return{xs:this.min(0),sm:this.min(600),md:this.min(900),lg:this.min(1200),xl:this.max(1536)}}},theme=new class{constructor(){this.media=media,this.custom=custom}spacing(...a){return a.map(a=>"number"==typeof a?`${a*.5}rem`:a).join(" ")}get palette(){return{background:{// default: 'var(--ifm-color-emphasis-100)',
// paper: 'var(--ifm-color-emphasis-0)',
},primary:{..._colors.blue,main:_colors.blue[500]},secondary:{..._colors.lime,main:_colors.lime[500]},success:{..._colors.green,main:_colors.green[500]}}}get typography(){const a=a=>{let b=.8*a;return b=1>b?1:b,{[media.down.md]:{fontSize:`${b}rem`},[media.up.md]:{fontSize:`${a}rem`}}},b=b=>{const c=b*(2.3*100);return{fontWeight:500<c?c:500,...a(b)}},c=b=>({...a(b)});return{h1:b(4),h2:b(3),h3:b(2.3),h4:b(2),h5:b(1.3),h6:b(1.2),body1:c(1.1),body2:c(.9),subtitle1:{},subtitle2:{},caption:{},fontWeightBold:700}}},styled=new class{constructor(){this.styled=(a,b)=>(0,_styledJss.default)(a)(b(theme))}ul(a){return this.styled("ul",a)}ol(a){return this.styled("ol",a)}div(a){return this.styled("div",a)}custom(a,b){return this.styled(a,b)}};exports.styled=styled;var _default={custom,media,theme,styled};exports.default=_default;