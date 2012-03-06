jecookie
==============================================
Javascript easy cookie manipulation.

Requirements
---------------------------------------------
The below requirements are only if you want to save and load `json` objects to cookie, if not you can save raw data.

* `JSON` <https://github.com/douglascrockford/JSON-js> to save `json` objects to cookie using `stringify` method.
  * Please consider browser native support or only copy the `stringify` method to your utilities.
* `jQuery` <https://github.com/jquery/jquery> to convert loaded content to `json` object.

Usage
----------------------------------------------
###Create a cookie
    var cookie = new jecookie('cookie_name');
    var cookie = new jecookie('cookie_name', {name : 'value'}, {secure :true, domain : '.example.org'});

Params:

* `name`: cookie name
* `data`: data
* `opts`: options
  * `opts.secure` set secure
  * `opts.domain` domain
  * `opts.path` path
  * `opts.expires` expiration, use 0 to session cookie

###Load a cookie
    cookie.load();

###Change data
If `JSON` support:

    cookie.data = {name : value, content : value};

Otherwise:

    cookie.data = value;

###Change options
    cookie.opts.secure  = true;
    cookie.opts.domain  = '.example.org'

###Save data
    cookie.save(); //default expiration
    cookie.save(0); //session cookie

###Destroy a cookie
    cookie.destroy();

Example
----------------------------------------------
    //...
    var cookie = new jecookie('settings');
    if(cookie.load()) //cookie exists
    {
      my_element.height = cookie.data.height;
      my_element.width  = cookie.data.width;
    }
    else //cookie does not exists
    {
      cookie.data =
      {
        height : 100,
        width  : 100
      };
      cookie.save();
    }
    //...

Support
----------------------------------------------
* IE 6+
* FF 3+
* Chrome 10+
* Opera 10+

Version history
----------------------------------------------
* **1.0**
  * Basic base code
* **1.1**
  * Third parameter as an options object in constructor
  * Removed path param in save method
  * Domain, path and session cookie support
  * Control for array in loaded data
* **1.1.1**
  * Change to MIT license

Author
----------------------------------------------
Alejandro El Informático

License
----------------------------------------------
The MIT license

Copyright (c) 2011 Alejandro El Infromático

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
