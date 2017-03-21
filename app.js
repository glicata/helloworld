// Add your requirements
var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector
    ({ appId: 'd0f033b0-dc80-463e-8c72-dcd8e8b8001d', appPassword: 'RQkgmncpxUU3V3WFiwcOdT3' });
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


/* Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});
*/




//

bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.send('Hello %s!', results.response);
    }
]);