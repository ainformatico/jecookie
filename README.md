jecookie is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jecookie is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with jecookie. If not, see <http://www.gnu.org/licenses/>.

jecookie
==============================================
Javascript easy cookie manipulation.

Author
----------------------------------------------
Alejandro El Informático

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
