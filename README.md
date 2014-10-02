Acute
=====

*A simple and little JS library to improve your productivity*

`Acute` is a little JavaScript Singleton to get more productivity for human coders.

Moreover, it implements new ECMA methods of Array.prototype to improve cross-browser comptability and override the Object to have similar methods.

##Getting Started
To use `Acute` in your website, simply drop the stylesheet into your document's "script".

##Dependencies
jQuery

##First example
```javascript
/* Undefined var declaration */
var a = 1;
 /* Try catch */
 aqt.tc(function () {
    /* Var a is defined ?*/
    if (aqt.is(a)) {
        /* Ajax call with jQuery*/
        aqt.async.call("test.php", function (data) { aqt.l(data); }, {"id": 1})
       aqt.dom.hide($("body"));
   }
   else
       aqt.l("A is not defined");
   }, function (e) {
   /* Console.log if browser is compatible*/
       aqt.l("An error occurred");
   }
);
```

## License
`Acute` is licensed under the MIT license. (http://opensource.org/licenses/MIT)
