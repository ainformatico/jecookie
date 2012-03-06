/**
 * Cookie utils
 *
 * @author Alejandro El Informático
 *
 * @version 1.1.1
 *
 * @created 20111204
 *
 * @modified 20120126
 *
 **/

/**
 * Main object
 *
 * @param name cookie name
 *
 * @param data cookie data
 *
 * @param opts options
 *
 * @param opts.secure set secure
 *
 * @param opts.domain domain
 *
 * @param opts.path path
 *
 * @param opts.expires expiration, use 0 to session cookie
 *
 * */
var jecookie = function (name, data, opts)
{
  this.name = name || undefined; //cookie name
  this.data = data || {}; //object data
  this.opts = opts || {};
  this.dt   = document;
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
    if(d.match(/^({(.*)})|(\[(.*)\])$/)) //is an object or array
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
    * @param e date when cookie expires
    *
    * */
  save : function(e)
  {
    var _this   = this,
        opts    = _this.opts,
        json    = _this.to_string(_this.data), //convert data
        path    = opts.path || '/', //default path
        domain  = opts.domain || false, //default domain
        secure  = opts.secure || false, //by default is not set secure
        expires = (typeof e === 'undefined') ? new Date(2020, 01, 01) : e, //expiration date
        cookie  = _this.name +'=' + json; //create the cookie string
    (typeof opts.expires !== 'undefined') && (expires = opts.expires); //overwrite expiration
    domain && (cookie += ';domain=' + domain);
    path && (cookie += ';path=' + path); //set path
    (expires !== 0) && (cookie += ';expires=' + expires); //set expiration
    secure && (cookie += ';secure'); //set secure
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
