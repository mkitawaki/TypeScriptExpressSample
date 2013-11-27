/// <reference path="../definitions/express.d.ts" />
/// <reference path="../definitions/node.d.ts" />
/*
 * GET users listing.
 */

export 
  var list = (req: ExpressServerRequest, 
  			  res: ExpressServerResponse):void => {
    res.send("respond with a resource")
  }
