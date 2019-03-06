require('dotenv').config();
const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    TOKEN,
    TEXT_CHANNEL_ID,
    CHANNEL_ID
} = process.env;
const cron = require('cron');
const schedule = require('node-schedule');

client.on('ready', () => {
    console.log('準備完了');
});
var job = schedule.scheduleJob('*/1 * * * *', task);

function task() {
    const textChannel = client.channels.get(TEXT_CHANNEL_ID);
    const general = textChannel.children.get(CHANNEL_ID);
    const path = 'img/';

    fs.readdir(path, (err, files) => {
        var random = Math.floor(Math.random() * files.length);
        const fileName = files[random];
        general.send({ file: { attachment: path + fileName } });
    });
}



client.login(TOKEN);