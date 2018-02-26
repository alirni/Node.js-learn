const
request = require('request'),

apiUrl = 'https://api.telegram.org',
token = '306042286:AAHFyBP2Ei-8vtoeQIIXh43mGxtImcckb9I',
methods = 'sendMessage',

requestOption = {
  method: 'POST',
  url: `${apiUrl}/bot${token}/${methods}`,
  body: {
    chat_id: 153206620,
    parse_mode: 'markdown',
    text: '[ramezany.com](http://ramezany.com/)',
  },
  json: true
},

sendRequest = (text) => {
  console.log('run sendRequest function');
  return new Promise( (resolve, reject) => {
    requestOption.body.text = text;
    request(requestOption, (error, response, body) => {
      if (!error && body && body.ok) {
        resolve(body);
      }
      else {
        reject(error, body);
      }
    });
  });
}
;

sendRequest('hello ali 1')
.then( () => {
  return sendRequest('hello ali 2');
})
.then( () => {
  return sendRequest('hello ali 3');
})
.then( () => {
  return sendRequest('hello ali 4');
})
.then( () => {
  return sendRequest('hello ali 5');
});
