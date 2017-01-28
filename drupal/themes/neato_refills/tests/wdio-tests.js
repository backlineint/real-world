var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");
var assert = require("assert");

var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
}
var browser = wdio.remote(options);
webdrivercss.init(browser, {
  screenshotRoot: "tests/screenshots"
});

function assertShots (err, shots) {
  assert.ifError(err);

  Object.keys(shots).forEach(function(element) {
    shots[element].forEach(function(shot) {
      assert.ok(shot.isWithinMisMatchTolerance, shot.message);
    })
  });
};

browser
    .init()
    .url("http://testing-d8-theme.dd:8083/")
    .webdrivercss("cards", [
      {
        name: "card",
        elem: ".cards .card:first-child"
      }
    ], assertShots)
    .end();