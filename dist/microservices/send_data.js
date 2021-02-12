"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request');
var HTTPRequest = /** @class */ (function () {
    function HTTPRequest() {
    }
    HTTPRequest.prototype.uploadData = function (data) {
        return new Promise(function (resolve, reject) {
            request({
                uri: 'https://api.mocki.io/v1/30eb2463',
                method: 'POST',
                json: true,
                body: data
            }, function (err, response) {
                if (err) {
                    return reject(err);
                }
                if (response.statusCode >= 300) {
                    return resolve({});
                }
                return resolve(response.body);
            });
        });
    };
    return HTTPRequest;
}());
exports.default = HTTPRequest;
//# sourceMappingURL=send_data.js.map