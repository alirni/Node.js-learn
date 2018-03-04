(()=>{
  'use strict';

  const
    token = 'xxx',

    chalk = require('chalk'),
    error = chalk.bold.bgRed,
    success = chalk.blue.bold,

    telegram = require('telegram-bot-api.js').default,

    botOption = {
      autoChatActionUploadOnly: true,
      autoUpdate: true,
    },

    bot = new telegram(token, botOption)
  ;

  bot.onMessage(new RegExp('^/start[ ]*$'), async (message) => {
    console.log(success('get message:'), message.chat);

    try {
      const text = `سلام ${message.chat.first_name} عزیز \n به بات من خوش آمدید`
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: text,
      });

      console.log(success('message sent'));
    }
    catch (error) {
      console.log(error('message error:'), error);
    }
  });
})();
