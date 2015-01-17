Package.describe({
    summary: "Send e-mails with attachments.",
    version: "1.1.0",
    git: "www.github.com/priyadarshy/email-att"
});

Npm.depends({
    "simplesmtp": "0.3.10",
    "stream-buffers": "0.2.5",
    "mailcomposer": "0.1.15"
});

Package.on_use(function(api) {
    api.versionsFrom('METEOR@0.9.2.1');
    api.addFiles('ashutosh:email-att.js', ['server']);
    api.export(['EmailAtt'], ['server']);
});

Package.on_test(function(api) {
    api.use('tinytest');
    api.use('ashutosh:email-att');
    api.addFiles('ashutosh:email-att-tests.js', ['server']);
});

