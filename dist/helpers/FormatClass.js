"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const FormatClass=new class{makeUuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})}nl2br(a){return a?a.replace(/(?:\r\n|\r|\n)/g,"<br>"):""}// nl2p(text) { // bad function
// 	if(!text || typeof text !== 'string') {
// 		return text;
// 	}
//
// 	function filterEmpty(arr) {
// 		var new_arr = [];
//
// 		for(var i = arr.length - 1; i >= 0; i--) {
// 			if(arr[i] != "")
// 				new_arr.push(arr.pop());
// 			else
// 				arr.pop();
// 		}
//
// 		return new_arr.reverse();
// 	};
//
// 	text = filterEmpty(text.split('\n')).join('</p><p>');
// 	return '<p>' + text + '</p>';
// }
formatNumber(a,{decimal:b=2,addon:c="",separator:d=","}={}){// return value.toString();
if("undefined"==typeof a||0==a.toString().length)return"...";if(!a&&0!=a)return"...";try{const e=parseFloat(a.toString()).toFixed(b).split("."),f=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,d),g=0<b?`${f}.${e[1]}`:f;return c?`${c} ${g}`:g}catch(a){return"Error"}}formatMoney(a,b){return this.formatNumber(a,{decimal:0,addon:b,separator:" "})}formatNumberShortener(a){if(1e6<=a){const b=a/1e6,c=b.toFixed(Number.isInteger(b)?0:1);return`${c} M`}return 1e3<=a?`${(a/1e3).toFixed(0)} K`:a}formatSeconds({seconds:a,variant:b=!1}={}){const c=parseInt(a,10);// don't forget the second param
let d=Math.floor(c/3600),e=Math.floor((c-3600*d)/60),f=c-3600*d-60*e;// Response...
return 10>d&&(d="0"+d),10>e&&(e="0"+e),10>f&&(f="0"+f),"small"==b?(d=Math.round(d),e=Math.round(e),f=Math.round(f),3600<a?`${d} h. ${e} m.`:`${e} min.`):"seconds"==b?(d=Math.round(d),e=Math.round(e),f=Math.round(f),e?`${e} m ${f} s.`:`${f} s.`):`${d}:${e}:${f}`}formatMegabytes(a,b=2){return this.formatBytes(1024*(1024*a),b)}formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}plainTextToLinks(a){if(!a)return"";var b,c,d,e;//URLs starting with http://, https://, or ftp://
return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,"<a data-link rel=\"nofollow\" href=\"$1\" target=\"_blank\">$1</a>"),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,"$1<a data-link rel=\"nofollow\" href=\"http://$2\" target=\"_blank\">$2</a>"),e=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,b=b.replace(e,"<a data-link rel=\"nofollow\" href=\"mailto:$1\">$1</a>"),b}plainTextShortener(a,b){return"string"==typeof a?(a.length>b&&(a=a.substr(0,b)+"..."),a):""}/**
	 * Get a random floating point number between `min` and `max`.
	 *
	 * @param {number} min - min number
	 * @param {number} max - max number
	 * @return {number} a random floating point number
	 */getRandomFloat(a,b){return Math.random()*(b-a)+a}/**
	 * Get a random integer between `min` and `max`.
	 *
	 * @param {number} min - min number
	 * @param {number} max - max number
	 * @return {number} a random integer
	 */getRandomInt(a,b){return Math.floor(Math.random()*(b-a+1)+a)}/**
	 * Get a random boolean value.
	 *
	 * @return {boolean} a random true/false
	 */getRandomBool(){return .5<=Math.random()}};var _default=FormatClass;exports.default=_default;