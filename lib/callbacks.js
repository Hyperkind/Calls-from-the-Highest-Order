function wait (seconds, callback) {
  console.log('wait 3 started');
  var n = seconds * 1000;
  setTimeout(callback, n);
  console.log('wait 3 done');
}

function repeat (times, callback) {
  var n = times;
  for (var i = 0; i < n; i++) {
    callback();
  }
}

function User () {

}

User.find = function (query, callback) {
  (function callback(error, users) {
    var err = null;

  });
};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};