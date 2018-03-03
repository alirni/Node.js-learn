const
request = require('request'),

token = '306042286:AAHFyBP2Ei-8vtoeQIIXh43mGxtImcckb9I',
apiUrl = 'https://api.telegram.org',
methods = 'editMessageText',

requestOption = {
  method: 'POST',
  url: `${apiUrl}/bot${token}/${methods}`,
  body: {
    chat_id: 153206620,
    message_id: 133,
    text: '',
  },
  json: true
},

sendRequest = (text) => {
  console.log('run send request function');
  return new Promise( (resolve, reject) => {
    requestOption.body.text = text;
    request(requestOption, (error, response, body) => {
      if (!error && body && body.ok) {
        console.log('response: %o', response.body);
        resolve(body);
      }
      else {
        reject(error, body);
      }
    });
  });
}
;

const run = async () => {
  console.log('run function for use await');
  try {
    await sendRequest('تغییر پیام');
    console.log('done');
  }
  catch (error) {
    console.log('error: %o', error);
  }
};

run();
