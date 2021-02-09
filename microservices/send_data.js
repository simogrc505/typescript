const request = require('request')

module.exports = (data) => new Promise((resolve, reject) => {
  request({
    uri: 'endpoint',
    method: 'POST',
    json: true,
    body: data
  }, (err, response) => {
    if (err) {
      return reject(err)
    }

    if (response.statusCode >= 300) {
      return resolve(null)
    }

    return resolve(response.body)
  })
})