var mail = require('mail').Mail({
  host: '127.0.0.1'
//  username: 'me@gmail.com',
//  password: '**password**'
});
var db = require('./db');
export.sendDailyEmails = function() {
  var hoods = [
    'Castro',
    'Mission',
    'Nob Hill',
    'Sunset',
    'Western Addition'
  ];
  for (var i = 0; i < hoods.length; ++i) {
    var hood = hoods[i];
    logic.getByHood(hood, function() {
      mail.message({
        from: 'sender@example.net',
        to: ['recipient@somewhere.org'],
        subject: 'Message for '
      })
      .body('Node speaks SMTP!')
      .send(function(err) {
        if (err) throw err;
        console.log('Sent!');
      });
    });
  }
};

