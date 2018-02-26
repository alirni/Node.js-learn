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

sendRequest = (text, callback) => {
  requestOption.body.text = text;
  request(requestOption, (error, response, body) => {

    if (!error && body && body.ok ) {
      console.log('Ok, %o', body);
    }
    else {
      console.log('Error: %o , Body: %o, ', error, body);
    }

    if (typeof callback === 'function') {
      callback(error, response, body);
    }
  });
}
;

sendRequest('hello ali', () => {
  sendRequest('hello ali 2', () => {
    sendRequest('hello ali 3');
  });
});
