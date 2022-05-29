'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var util = require('util');
var http = require('https');

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
    res.status(200).send('Edit');
    
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
            
            // decoded in arguments
            var decodedArgs = decoded.inArguments[0];
            var decodedOutArgs = decoded.outArguments[0];
            var zaloAccessToken =  'https://openapi.zalo.me/v2.0/oa/message?access_token=Qv0nJ4MGw2jWcJH3Jv7fAsgHDqXFZwXRRCWoCZ-db55HpHDDCxIEQHptKNfv_l5IMVztPmZyz5Cdedj0QAlTOpZIM7z5YkD6EVvTL7ga_M9UtNLz18pnMt3nU5uIeCPxCjnRM1AKw4nYoaDC093YJtB5OLSEcjHgMvbKGmk4-oTNy7aOSwp_Cr3uG38fhPaWIDeFHck7Z78S-H5mHAB4QG3dJ4XKvy5TUhGR8JxfjILXbmOS4U6R96os81mEnQ02NPqy93c0Y0DjdH0e5_o46r3yCWWsl84DORm-94NdkI0hjY0dKFQY3nVhEIXsaAzA2i9oNaYV-sSyt2465Z3iKKcExYe';
            var name = decoded.inArguments[0].name;
            var message = decoded.inArguments[0].message;
            var url = decoded.inArguments[0].url;
            var urlImage = decoded.inArguments[0].urlimg;
            var zaloId = decoded.inArguments[0].ContactID;
            var contactkey = decoded.inArguments[0].contactkey;
            var zzz = decoded.inArguments[0].objResults;
            var ipAnswer = decoded.inArguments[0].ipAnswer;
            var title = decoded.inArguments[0].title.replace('%name%', name);
            
            
            console.log('ContactID',ContactID);
            console.log('----message',message);
            logData(req);
            // res.send(200, 'Execute');
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