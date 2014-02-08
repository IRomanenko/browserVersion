/*
* 1.0.0 Browser Version Hack Framework 
* Adds css class to body element depending on browser.
* Designed by Ihor Romanenko. Free for use.
* https://github.com/IRomanenko/browserVersion
* TODO: remove test mode
*/

window.onload = function() {

/*Time tracking START*/
var d = new Date();
console.log(d.getMilliseconds());

    var ua              = navigator.userAgent,
        version         = '',
        cssClass        = false,
        ieRegExp        = /MSIE [0-9]+\.\w+/i,
        ieVersionRegExp = /[0-9]+\.\w+/i,
        ieSuportedList  = /[6-9]|10/i,
        bodyEl          = false,
        cssClasses      = {
                           ie6CssClass    : 'BrowserIE6',
                           ie7CssClass    : 'BrowserIE7',
                           ie8CssClass    : "BrowserIE8",
                           ie9CssClass    : "BrowserIE9",
                           ie10CssClass   : "BrowserIE10",
                           ieCssClass     : "BrowserIE",
                           ffCssClass     : "BrowserFF",
                           operaCssClass  : "BrowserOpera",
                           webkitCssClass : "BrowserWebkit"
                          };

    console.log(ua);

    if(ua.search(/Firefox/) != -1) {
        cssClass = cssClasses.ffCssClass;
    }
    if(ua.search(/Opera/) != -1) {
        cssClass = cssClasses.operaCssClass;
    }
    if(ua.search(/Chrome/) != -1) {
        cssClass = cssClasses.webkitCssClass;
    }

    if(ua.search(/MSIE/) != -1) {

        /*get version as integer before first dot in browser version*/
        version = ieRegExp.exec(ua);
        version = parseInt(ieVersionRegExp.exec(version), 10);
        console.log(version);

        if(ieSuportedList.test(version)) {

            cssClass = cssClasses['ie' + version + 'CssClass'];

        }

        cssClass += ' ' + cssClasses.ieCssClass;

    }

    if(cssClass) {

        body = document.getElementsByTagName('body')[0];
        body.className += cssClass;

    }
    console.log(cssClass);

/*Time tracking END*/
var d = new Date();
console.log(d.getMilliseconds());
}
