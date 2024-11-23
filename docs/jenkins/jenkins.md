## Install
https://www.jenkins.io/doc/book/installing/macos/

```bash
brew install jenkins-lts
```
## start
```bash
  brew services start jenkins-lts
```

Or, if you don't want/need a background service you can just run:
```bash
/usr/local/opt/openjdk@21/bin/java -Dmail.smtp.starttls.enable\=true -jar /usr/local/opt/jenkins-lts/libexec/jenkins.war --httpListenAddress\=127.0.0.1 --httpPort\=8080
```

### How to Reset the administrator password
Jenkins home directory in mac: **~/.jenkins**
https://www.jenkins.io/doc/book/system-administration/admin-password-reset-instructions/

https://plugins.jenkins.io/slack/


### jenkins job slack message
https://www.baeldung.com/ops/jenkins-slack-integration
