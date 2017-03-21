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


/*/ Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello RightAnswers");
});





//

bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.send('Hello %s!', results.response);
    }
]);


*/


/*

bot.dialog('/', [
    function (session) {
        session.beginDialog('/ensureProfile', session.userData.profile);
    },
    function (session, results) {
        session.userData.profile = results.response;
        session.send('Hello %(name)s! I love %(company)s!', session.userData.profile);
    }
]);
bot.dialog('/ensureProfile', [
    function (session, args, next) {
        session.dialogData.profile = args || {};
        if (!session.dialogData.profile.name) {
            builder.Prompts.text(session, "What's your name?");
        } else {
            next();
        }
    },
    function (session, results, next) {
        if (results.response) {
            session.dialogData.profile.name = results.response;
        }
        if (!session.dialogData.profile.company) {
            builder.Prompts.text(session, "What company do you work for?");
        } else {
            next();
        }
    },
    function (session, results) {
        if (results.response) {
            session.dialogData.profile.company = results.response;
        }
        session.endDialogWithResult({ response: session.dialogData.profile });
    }
]);



*/


/*
bot.dialog('/', new builder.IntentDialog()
    .matches(/^hello/i, function (session) {
        session.send("Hi there! Ask me what the weather is like today!");
    })
    .matches(/^What's the weather like today?/i, function (session) {
        session.send("The weather in Edison today is overcast with a high of 50'F. The Skies will clear by this afternoon. www.weather.com");
    })
    .matches(/^weather/ || /^tomorrow/i, function (session) {
        session.send("The weather for tomorrow looks sunny with a high of 70'F. ")
    })
    
    .onDefault(function (session) {
        session.send("I didn't understand. Say hello to me!");
        }));



*/

/*

bot.dialog('/', [
    function (session) {
            session.send("The weather for wedensday is: ... ");
        }
    ]
)
*/


/*
bot.dialog('/', [
    function (session) {
        session.beginDialog('/askName');
    },
    function (session) {
        session.beginDialog('/askLname');
    },
    function (session, results) {
        session.send('Hello %s!', results.response);
    }
]);

bot.dialog('/askName', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    }
]);

bot.dialog('/askLname', [
    function (session) {
        builder.Prompts.text(session, 'What is your last name?');
    }
]);

*/

bot.dialog('/', [
    function (session) {
        session.beginDialog('/ensureProfile', session.userData.profile);
    },
    function (session, results) {
        session.userData.profile = results.response;
        session.send('Hello %(name) %(lastname)!', session.userData.profile);
    }
]);
bot.dialog('/ensureProfile', [
    function (session, args, next) {
        session.dialogData.profile = args || {};
        if (!session.dialogData.profile.name) {
            builder.Prompts.text(session, "What's your first name?");
        } else {
            next();
        }
    },
    function (session, results, next) {
        if (results.response) {
            session.dialogData.profile.name = results.response;
        }
        if (!session.dialogData.profile.lastname) {
            builder.Prompts.text(session, "What is your last name");
        } else {
            next();
        }
    },
    function (session, results) {
        if (results.response) {
            session.dialogData.profile.company = results.response;
        }
        session.endDialogWithResult({ response: session.dialogData.profile });
    }
]);
// the above sesion dialog can be wiped out by using this delete session dialog.
bot.dialog('/delete', (session) => {
    delete session.userData
    session.endDialog('Everything has been wiped out')

})
    .triggerAction({
        matches: /delete all/i,
    });



