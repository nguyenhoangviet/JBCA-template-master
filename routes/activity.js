'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var util = require('util');
var http = require('https');
var axios = require('axios');
var config = require('./mcConfig.json')

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.hostname,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // logData(req);
    // res.send(200, 'Edit');
    res.status(200).send('Edit');''
    
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // logData(req);
    // res.send(200, 'Save');
    res.status(200).send('Save');
    
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function (req, res) {

    // example on how to decode JWT
    JWT(req.body, process.env.jwtSecret, (err, decoded) => {

        // verification error -> unauthorized request
        if (err) {
            console.error(err);
            return res.status(401).end();
        }

        if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            
            console.log('okayla',decoded)
            // decoded in arguments
            var decodedArgs = decoded.inArguments[0];
            var decodedOutArgs = decoded.outArguments[0];
            // var znsToken = config.Zalo.token;
            // var znsUrl =  'https://openapi.zalo.me/v2.0/oa/message?access_token=' + znsToken;
            var message = decoded.inArguments[0].message;
            var name = decoded.inArguments[0].name;
            var url = decoded.inArguments[0].url;
            var urlImage = decoded.inArguments[0].urlimg;
            var zaloId = decoded.inArguments[0].ContactID;
            // var title = decoded.inArguments[0].title.replace('%name%', name);
            // var title = decoded.inArguments[0].title.replace('%name%', name);

            // axios({
            //     method: 'post',
            //     url: 'https://openapi.zalo.me/v2.0/oa/message?access_token=' + znsToken,
            //     data: {
            //         "recipient": {
            //           "user_id": zaloId
            //         },
            //         "message": {
            //         "attachment": {
            //             "type": "template",
            //             "payload": {
            //             "template_type": "list",
            //             "elements": [
            //                 {
            //                 "title": title,
            //                 "subtitle": message,
            //                 "image_url": urlImage,
            //                 "default_action": {
            //                     "type": "oa.open.url",
            //                     "url": url
            //                     }
            //                 }
            //             ]
            //             }
            //         }
            //         }    
            //       }
            //   }).then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   }); 
            

            // res.send("caseid",message);
            res.status(200).send('Execute');
        } else {
            console.error('inArguments invalid.');
            return res.status(400).end();
        }
    });
};


/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // logData(req);
    // res.send(200, 'Publish');
    res.status(200).send('Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // logData(req);
    // res.send(200, 'Validate');
    res.status(200).send('Validate');
};