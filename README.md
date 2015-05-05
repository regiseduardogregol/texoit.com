# texoit.com
Texo's web site

## Deploy instructions
**Prerequisites:** https://developers.openshift.com/en/managing-client-tools.html

1. **Ask for permission:**  
Send an email to infra@texoit.com to request deploy privileges.

2. **Add the Openshift git repo:**  
`rhc git-clone ucwebsite`

3. **Add the remote reference:**  
`git remote add upstream -m upstream https://github.com/TeXOLabs/texoit.com.git`

4. **Whenever you need to update Openshift:**  
`git pull -s recursive -X theirs upstream release/v1:master`  
`git push`
