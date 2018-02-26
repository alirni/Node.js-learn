const
request = require('request'),

token = '306042286:AAHFyBP2Ei-8vtoeQIIXh43mGxtImcckb9I',
apiUrl = 'https://api.telegram.org',
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
  console.log('run send request function');
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

const run = async () => {
  console.log('run function for use await');

  try {
    for (let i = 1; i <= 5; i++) {
      await sendRequest(`salam alirni ${i}`);
    }
    console.log('done');
  }
  catch (error) {
    console.log('error: %o', error);
  }
};

run();
