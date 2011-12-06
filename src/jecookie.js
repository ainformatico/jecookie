/**
 * Cookie utils
 *
 * @author El Chacal Del Útero
 *
 * @version 1.0
 *
 * @created 20111204
 *
 **/

/**
 * Main object
 *
 * @param name cookie name
 *
 * @param data cookie data
 *
 * @param secure use secure
 *
 * */
var jecookie = function (name, data, secure)
{
  this.name   = name || undefined; //cookie name
  this.data   = data || {}; //object data
  this.secure = secure || false;
  this.dt     = document;
};

/**
 * Define prototype
 *
 * */
jecookie.prototype =
{
  /**
   * Convert to JSON
   *
   * @param d
   *
   * @return object or string
   *
   * */
  to_json : function(d)
  {
    d = unescape(d);
    if(d.match(/^{(.*)}$/)) //is an object
    {
      if(typeof JSON === 'object') //native support
      {
        return JSON.parse(d);
      }
      else if(typeof jQuery === 'function') //jquery support
      {
        return jQuery.parseJSON(d);
      }
    }
    return d; //fallback
  },

  /**
   * Convert object to string
   *
   * @param d data to convert
   *
   * @return string
   *
   * */
  to_string : function(d)
  {
    if(typeof d === 'object') //is an object
    {
      if(typeof JSON === 'object') //native support
      {
        return escape(JSON.stringify(d));
      }
    }
    return d; //fallback
  },

  /**
    * Save cookie
    *
    * @param expire date when cookie expires
    *
    * @param path domain path
    *
    * */
  save : function(expire, path)
  {
    expire = expire || new Date(2020, 01, 01); //expiration date
    path   = path || '/'; //default domain
    var _this  = this,
        json   = _this.to_string(_this.data), //convert data
        cookie = _this.name +'=' + json + ';path=' + path + ';expires=' + expire.toGMTString(); //create the cookie string
    _this.secure && (cookie += ';secure'); //set secure
    _this.dt.cookie = cookie; //write cookie
  },

  /**
    * Load cookie content
    *
    * @return this.data if cookie exist
    *
    * @return undefined if cookie does not exist
    *
    * */
  load : function()
  {
    var _this = this,
        test  = _this.dt.cookie.split(';'), //set the split
        regex = new RegExp('(?:; )?' + _this.name + '=([^;]*);?'); //create the regex
    if(regex.test(_this.dt.cookie)) //can load the cookie?
    {
      _this.data = _this.to_json(RegExp['$1']);
      return _this.data;
    }
    return undefined;
  },

  /**
    * Destroy cookie
    *
    * */
  destroy : function()
  {
    this.save(new Date(0));
  }
};
