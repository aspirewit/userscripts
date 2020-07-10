!function(e){// webpackBootstrap
// The module cache
var t={};// The require function
function n(r){// Check if module is in cache
if(t[r])return t[r].exports;// Create a new module (and put it into the cache)
var o=t[r]={i:r,l:!1,exports:{}};// Execute the module function
// Return the exports of the module
return e[r].call(o.exports,o,o.exports,n),// Flag the module as loaded
o.l=!0,o.exports}// expose the modules object (__webpack_modules__)
// Load entry module and return exports
n.m=e,// expose the module cache
n.c=t,// define getter function for harmony exports
n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},// define __esModule on exports
n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 8|1: behave like require
n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},// getDefaultExport function for compatibility with non-harmony modules
n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},// Object.prototype.hasOwnProperty.call
n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},// __webpack_public_path__
n.p="",n(n.s=0)}([function(e,t,n){"use strict";
// ESM COMPAT FLAG
n.r(t);
/* harmony default export */var r=(e,t,n={})=>{const{maxAttempts:r=5,milliseconds:o=1e3}=n;let i=0;const c=setInterval(()=>{if(i>=r)return clearInterval(c);i+=1,e()&&(clearInterval(c),t())},o)};
// CONCATENATED MODULE: ./src/scripts/copyJiraIssueLinks.js
// ==UserScript==
// @name         Copy Jira issue links
// @namespace    https://github.com/aspirewit
// @homepage     https://github.com/aspirewit/userscripts
// @updateURL    https://raw.githubusercontent.com/aspirewit/userscripts/master/dist/copyJiraIssueLinks.js
// @version      0.1.0
// @description  Copy Jira issue links
// @author       Richard Li
// @include      https://*.atlassian.net/secure/RapidBoard.jspa?*
// @grant        GM_setClipboard
// @grant        GM_getResourceURL
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @resource     icon   https://user-images.githubusercontent.com/47729970/86877950-8309f600-c11a-11ea-891c-d7a43e78742b.png
// ==/UserScript==
const o=window.$,i=GM_getResourceURL("icon"),c=()=>{const e=o(".ghx-selected").map((function(){const e=o(this).attr("data-issue-key");return`${window.location.origin}/browse/${e}`})).get().join("\n");GM_setClipboard(e)},l=()=>{o("#ghx-copy-links").length||(o('<div id="ghx-copy-links" />').css({alignItems:"center",cursor:"pointer",display:"flex",justifyContent:"center",marginRight:"16px"}).click(c).insertAfter("#ghx-share"),o("<img />").css({content:`url(${i})`}).appendTo("#ghx-copy-links"))};o(()=>r(()=>o("#ghx-share").length,l))}]);