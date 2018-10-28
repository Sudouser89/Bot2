const Bot = require('node-telegram-bot-api');
const token = process.env.TOKEN;

if(process.env.NODE_ENV === 'production') {
    bot = new Bot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
  }