require('dontend').config();
const {Telgraf}=require('telegraf');
const TOKEN=process.env.BOT_TOKEN
const bot=new Telgraf(TOKEN);

const web_link=process.env.WEB_LINK;
const community_link=process.env.COMMUNITY_LINK;

bot.start((ctx)=>{
    const startpayload=ctx.startPayload;
    const urlSent=`${web_link}?ref=${startpayload}`;
    const user=ctx.meessage.from;
    const userName=user.username? `@${user.username}`:user.first_name;
    ctx.replyWithMarkdown[`*Hey, ${userName}! Welcome to Squadinium ! *
    Tap on the coin and see your balance rise.
    `,{
        reply_markup:{
            inline_keyboard:[
                [{text:"👋Start now !",web_app:{url:urlSent}}],
                [{text:"Join Community!",url:community_link}],
            ],
            in:true
        }
    } ]
})