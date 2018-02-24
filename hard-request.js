const
https = require('https'),

token = '306042286:AAHFyBP2Ei-8vtoeQIIXh43mGxtImcckb9I',
methods = 'sendMessage',

requestOption = {
  'hostname': 'api.telegram.org',
  'method': 'POST',
  'path': `/bot${token}/${methods}`,
  'headers': {
    'Content-Type': 'application/json',
  },
},

callbackFunction = respons => {
  const dataArr = [];

  respons.on(data, slice => {
    dataArr.push(slice);
  });

  respons.on('end', () => {
    const body = Buffer.concat(dataArr);
    console.log(body.toString());
    console.log('function end in on event...');
  })
}

createRequest = () => {
  const
  request = https.request(requestOption, callbackFunction),

  body = {
    chat_id: 153206620,
    text: 'تست فارسی'
  }
  ;

  request.write(JSON.stringify(body));

  request.end();
}
;

createRequest();
