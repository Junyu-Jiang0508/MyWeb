/*!
  * Simple-Jekyll-Search v1.7.2 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2018, Christian Fei
  * Licensed under the MIT License.
  */
!function(){
    "use strict";
    var f={load:function w(t,e){var n=function r(){return window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}();n.open("GET",t,!0),n.onreadystatechange=function i(e,n){return function(){if(4===e.readyState&&200===e.status)try{n(null,JSON.parse(e.responseText))}catch(t){n(t,null)}}}(n,e),n.send()}};
    (function y(t){
        if(!function e(t){return!!t&&"undefined"!=typeof t.required&&t.required instanceof Array}(t))throw new Error("-- OptionsValidator: required options missing");
        if(!(this instanceof y))return new y(t);
        var r=t.required;
        this.getRequiredOptions=function(){return r},this.validate=function(e){var n=[];return r.forEach(function(t){"undefined"==typeof e[t]&&n.push(t)}),n}
    })
    ;var n=function g(t,e){var n=e.length,r=t.length;if(n<r)return!1;if(r===n)return t===e;t:for(var i=0,o=0;i<r;i++){for(var u=t.charCodeAt(i);o<n;)if(e.charCodeAt(o++)===u)continue t;return!1}return!0},e=new function t(){this.matches=function(t,e){return n(e.toLowerCase(),t.toLowerCase())}};
    var r=new function O(){this.matches=function(e,t){return!!e&&(e=e.trim().toLowerCase(),(t=t.trim().toLowerCase()).split(" ").filter(function(t){return 0<=e.indexOf(t)}).length===t.split(" ").length)}};
    var l={
        put:function z(t){if(c(t))return s(t);if(function e(t){return Boolean(t)&&"[object Array]"===Object.prototype.toString.call(t)}(t))return function i(t){var e=[];a();for(var n=0,r=t.length;n<r;n++)c(t[n])&&e.push(s(t[n]));return e}(t);return undefined},
        clear:a,
        search:function S(t){return t?function a(t,e,n,r){for(var i=[],o=0;o<t.length&&i.length<r.limit;o++){var u=d(t[o],e,n,r);u&&i.push(u)}return i}(o,t,u.searchStrategy,u).sort(u.sort):[]},
        setOptions:function q(t){(u=t||{}).fuzzy=t.fuzzy||!1,u.limit=t.limit||10,u.searchStrategy=t.fuzzy?e:r,u.sort=t.sort||i}
    };
    function i(){return 0}
    var o=[],u={};
    function a(){return o.length=0,o}
    function c(t){return Boolean(t)&&"[object Object]"===Object.prototype.toString.call(t)}
    function s(t){return o.push(t),o}
    function d(t,e,n,r){for(var i in t)if(!p(t[i],r.exclude)&&n.matches(t[i],e))return t}
    function p(t,e){for(var n=!1,r=0,i=(e=e||[]).length;r<i;r++){var o=e[r];!n&&new RegExp(t).test(o)&&(n=!0)}return n}
    u.fuzzy=!1,u.limit=10,u.searchStrategy=u.fuzzy?e:r,u.sort=i;
    var h={compile:function j(r){return m.template.replace(m.pattern,function(t,e){var n=m.middleware(e,r[e],m.template);return void 0!==n?n:r[e]||t})},setOptions:function C(t){m.pattern=t.pattern||m.pattern,m.template=t.template||m.template,"function"==typeof t.middleware&&(m.middleware=t.middleware)}},m={};m.pattern=/\{(.*?)\}/g,m.template="",m.middleware=function(){};
    var v={merge:function L(t,e){var n={};for(var r in t)n[r]=t[r],"undefined"!=typeof e[r]&&(n[r]=e[r]);return n},isJSON:function M(t){try{return!!(t instanceof Object&&JSON.parse(JSON.stringify(t)))}catch(e){return!1}}};
    !function(t){
        var o={searchInput:null,resultsContainer:null,json:[],success:Function.prototype,searchResultTemplate:'<li><a href="{url}" title="{description}">{title}</a></li>',templateMiddleware:Function.prototype,sortMiddleware:function(){return 0},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},n=["searchInput","resultsContainer","json"],r=function y(e){if(!function n(t){return!!t&&"undefined"!=typeof t.required&&t.required instanceof Array}(e))throw new Error("-- OptionsValidator: required options missing");if(!(this instanceof y))return new y(e);var r=e.required;this.getRequiredOptions=function(){return r},this.validate=function(e){var n=[];return r.forEach(function(t){"undefined"==typeof e[t]&&n.push(t)}),n}}({required:n});
        function i(t){o.success(t),l.put(t),function e(){o.searchInput.addEventListener("keyup",function(t){(function e(t){return-1===[13,16,20,37,38,39,40,91].indexOf(t)})(t.which)&&(u(),c(t.target.value))})}()}
        function u(){o.resultsContainer.innerHTML=""}
        function a(t){o.resultsContainer.innerHTML+=t}
        function c(t){(function e(t){return t&&0<t.length})(t)&&(u(),function i(t,e){var n=t.length;if(0===n)return a(o.noResultsText);for(var r=0;r<n;r++)t[r].query=e,a(h.compile(t[r]))}(l.search(t),t))}
        function s(t){throw new Error("SimpleJekyllSearch --- "+t)}
        t.SimpleJekyllSearch=function(t){return 0<r.validate(t).length&&s("You must specify the following required options: "+n),o=v.merge(o,t),h.setOptions({template:o.searchResultTemplate,middleware:o.templateMiddleware}),l.setOptions({fuzzy:o.fuzzy,limit:o.limit,sort:o.sortMiddleware}),v.isJSON(o.json)?i(o.json):function e(n){f.load(n,function(t,e){t&&s("failed to get JSON ("+n+")"),i(e)})}(o.json),{search:c}}
    }(window)
}();