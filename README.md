
# Deploy a Node.js app on Bluemix
You can deploy the todo list application either as a Cloud Foundry application or as a containerized application on Bluemix.

You need an account on the Bluemix platform (http://www.ibm.com/bluemix).

## Cloud Foundry with CLI
Install the Cloud Foundry Command Line Interface on your local machine

Clone locally the application on your machine
```
  git clone https://github.com/edevregille/node-todo.git
```

Login on the Cloud Foundry platform (UK data center API hereunder)
```
  cf login -a https://api.eu-gb.bluemix.net
```

Create a Cloudant database service from the catalogue that you name todo-couch-db
```
  cf create-service cloudantNoSQLDB Shared todo-couch-db
```

Modify the manifest file to give a name to your application and use the same name for the host.
Find here all the details on the manifest file options you can use: https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html

Go back to your command line and go into the root of your source code application folder to run the push command to the cloud.

```
  cf push
```

Your application is deployed!




