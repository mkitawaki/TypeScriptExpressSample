/// <reference path="../definitions/express.d.ts" />
/// <reference path="../definitions/node.d.ts" />
/*
 * GET home page.
 */

export 
  var index = (req: ExpressServerRequest, 
  			   res: ExpressServerResponse):void => {
	res.render('index', { title: 'Express' })
  }
