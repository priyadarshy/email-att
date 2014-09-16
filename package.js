Package.describe({
  summary: "Send e-mails with attachments.",
  version: "1.0.0",
  git: "www.github.com/priyadarshy/email-att"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('ashutosh:email-att.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ashutosh:email-att');
  api.addFiles('ashutosh:email-att-tests.js');
});
