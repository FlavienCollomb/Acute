////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dependencies : jQuery > 1.5 //
////////////////////////////////
var aqt=(function(){
    return{
        r:function(f){/in/.test(document.readyState)?setTimeout('aqt.r('+f+')',9):f()},
        is:function(a){return (a!=null||a!=undefined);},
        tc:function(t,c){try{t();}catch(e){if(aqt.is(c))c(e);}},
        async:{
            calls:[],
            abort1:function(a){a.abort()},
            call:function(src,f,a){(aqt.is(a))?this.calls.push($.post(src,a,function(d){f(d)})):this.calls.push($.post(src,function(d){f(d)}));},
            abort:function(){this.calls.forEach(this.abort1);this.calls=[]},
            logout:function(src,r,url){aqt.async.call(src,function(d){if(d==r)location.href=url})}
        },
        dom:{
            hide:function(e,full){if(!e instanceof $)e=$(e);(full==true)?e.hide():e.css({"visibility":"hidden"})},
            show:function(e,full){if(!e instanceof $)e=$(e);(full==true)?e.show():e.css({"visibility":"visible"})},
            simpleNew:function(t,html,p){var tmp=$("<"+t+"/>",{"html":html}); if(aqt.is(p))tmp.appendTo(p); return tmp;},
            focusFor:function(o,d){o.bind("click",function(e){d.focus()})}
        },
        l:function(m){aqt.tc(function(){console.log(m)})}
    };
}());
////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE: Override JS Objects Prototype for give a more portable alternative.                      //
// Majority of methods based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference //
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Array Override
 */
if(!Array.prototype.forEach){Array.prototype.forEach=function(f,scp){
    var i,len;
    if(this===void 0||this===null)throw new TypeError();
    if(typeof f!=='function')throw new TypeError();
    for(i=0,len=this.length;i<len;++i) if(i in this)f.call(scp,this[i],i,this);
};}
if(!Array.prototype.some){Array.prototype.some=function(f){
    if(this===void 0||this===null)throw new TypeError();
    if(typeof f!=='function')throw new TypeError();
    var t=Object(this);
    var a=arguments.length>=2?arguments[1]:void 0;
    for(var i=0;i<t.length>>>0;i++)if(i in t && f.call(a,t[i],i,t))return true;
    return false;
};}
if(!Array.prototype.every){Array.prototype.every=function(f){
    if(this===void 0||this===null)throw new TypeError();
    if(typeof f!=='function')throw new TypeError();
    var t=Object(this);
    var a=arguments.length>=2?arguments[1]:void 0;
    for(var i=0;i<t.length>>>0;i++)if(i in t && !f.call(a,t[i],i,t))return false;
    return true;
};}
if (!Array.prototype.map){Array.prototype.map=function(f){
    if(this===void 0||this===null)throw new TypeError();
    if(typeof f!=='function')throw new TypeError();
    var t = Object(this);
    var r = new Array(t.length>>>0);
    var a=arguments.length>=2?arguments[1]:void 0;
    for(var i=0;i<t.length>>>0;i++)if(i in t)r[i]=f.call(a, t[i], i, t);
    return r;
};}
if(!Array.prototype.filter){Array.prototype.filter=function(f){
    if(this===void 0||this===null)throw new TypeError();
    if(typeof f!=='function')throw new TypeError();
    var t=Object(this);
    var r=[];
    var a=arguments.length>=2?arguments[1]:void 0;
    for(var i=0;i<t.length>>>0;i++)if(i in t)if(f.call(a,t[i],i,t))r.push(t[i]);
    return r;
};}
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(s,i){
    if(this===undefined||this===null)throw new TypeError('"this" is null or not defined');
    i=i>>>0;
    for(;i<this.length>>>0;i++)if(this[i]===s)return i;
    return -1;
};}
if(!Array.prototype.search){Array.prototype.search=function(s){return (this.indexOf(s)>=0);}}
/**
 * Object Override
 */
if(!Object.keys){Object.keys=(function(){
    var r=[];
    return function(o){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('keys called on non-object');
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))r.push(i);
        return r;
    };
}());}
if(!Object.size){Object.size=(function(){
    return function(o){return Object.keys(o).length;};
}());}
if(!Object.forEach){Object.forEach=(function(){
    return function(o,f){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('forEach called on non-object');
        if(typeof f!=='function')throw new TypeError();
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))f(o[i],i,o);
    };
}());}
if(!Object.some){Object.some=(function(){
    return function(o,f){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('some called on non-object');
        if(typeof f!=='function')throw new TypeError();
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))if(f(o[i],i,o))return true;
        return false;
    };
}());}
if(!Object.every){Object.every=(function(){
    return function(o,f){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('every called on non-object');
        if(typeof f!=='function')throw new TypeError();
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))if(!f(o[i],i,o))return false;
        return true;
    };
}());}
if(!Object.map){Object.map=(function(){
    var r={};
    return function(o,f){
        if(typeof o!=='object' && (typeof o!=='function'||this===null))throw new TypeError('map called on non-object');
        if(typeof f!=='function')throw new TypeError();
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))r[i]=f(o[i],i,o);
        return r;
    };
}());}
if(!Object.filter){Object.filter=(function(){
    var r={};
    return function(o,f){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('filter called on non-object');
        if(typeof f!=='function')throw new TypeError();
        for(var i in this)if(Object.prototype.hasOwnProperty.call(o,i))if(f(o[i],i,o))r[i]=o[i];
        return r;
    };
}());}
if(!Object.indexOf){Object.indexOf=(function(){
    return function(o,s){
        if(typeof o!=='object' && (typeof o!=='function'||o===null))throw new TypeError('indexOf called on non-object');
        for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i))if(o[i]==s)return i;
        return undefined;
    };
}());}
if(!Object.search){Object.search=(function(){
    return function(o,s){return (Object.indexOf(o,s)!=undefined);}
}());}
