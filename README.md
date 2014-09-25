ashutosh:email-att
==================

Send e-mails with attachments for Meteor.

### Install

```
meteor add ashutosh:email-att
```


### How to use.

`EmailAtt` works just like Meteor's `Email.send`. You set all the same options and call `EmailAtt.send()`.

`EmailAtt` supports multiple attachments via an array of Objects inside the option `attachmentOptions`.


Each object needs to be compliant with objects that mailcomposer accepts. You can see details in the [mailcomposer documentation](https://github.com/andris9/mailcomposer#add-attachments).

A simple text file example is described below. 

### Example Code

```
EmailAtt.send({to:"ashutosh@test.com",
              from:"ashutosh@test.com",
              subject: "Test attachment",
              // A list of attachments.
              attachmentOptions: [
              		// Each attachment conforms to mailcomposer's specs.
                    {
                        fileName: "todo.txt",
                        contents: "this is a test attachment."
                    }
              ],
              text: "There's an attachment in this email. See the attachment."});
```

### Reasons to be scared of this package.

1. I haven't tested it thoroughly.
2. I'm not sure how it interacts with Meteor's `MAIL_URL`.