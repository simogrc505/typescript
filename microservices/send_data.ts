const request = require('request')

export default class HTTPRequest {
  public uploadData(data: object): Promise<object> {
    return new Promise((resolve, reject) => {
      request({
        uri: 'https://api.mocki.io/v1/30eb2463',
        method: 'POST',
        json: true,
        body: data
      }, (err, response) => {
        if (err) {
          return reject(err)
        }

        if (response.statusCode >= 300) {
          return resolve({})
        }

        return resolve(response.body)
      })
    });
  }
}