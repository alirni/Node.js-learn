const
request = require('request'),

token = '306042286:AAHFyBP2Ei-8vtoeQIIXh43mGxtImcckb9I',
methods = 'sendMessage',

requestOption = {
  method: 'POST',
  url: `https://api.telegram.org/bot${token}/${methods}`,
  body: {
    chat_id: 153206620,
    text: 'salam ali'
  },
  json: true
},

sendRequest = () => {
  request(requestOption, (error, response, body) => {

    if(error) {
      console.log('Error: ', error);
      return;
    }

    if(!(body && body.ok)) {
      console.log('Error: body not ok, ', body);
      return;
    }
    console.log('body is ok, ', body);
  });
}
;

sendRequest();
