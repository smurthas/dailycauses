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
    logic.getByHood(hood, function(err, arr) {
      // title, description, hood, numPeople, dollars
      mail.message({
        from: 'team@dailycauses.org',
        to: [''],
        subject: 'Messages in the '
      })
      .body('')
      .send(function(err) {
        if (err) throw err;
        console.log('Sent!');
      });
    });
  }
};

