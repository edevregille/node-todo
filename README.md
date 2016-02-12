
# Deploy a Node.js app on Bluemix with a Mongo DB
You can deploy the todo list application either as a Cloud Foundry application or as a containerized application on Bluemix.

You need an account on the Bluemix platform (http://www.ibm.com/bluemix). 

## Cloud Foundry with CLI
Install the Cloud Foundry CLI (https://www.ng.bluemix.net/docs/starters/install_cli.html).

Clone locally the application on your machine
```
  git clone https://github.com/edevregille/node-todo.git
```

Login on the Cloud Foundry platform (UK data center API hereunder)
```
  cf login -a https://api.eu-gb.bluemix.net
```

Create a Mongo DB. You can either choose to use Mongo By Compose (via the Web Dashboard) or you can use experimental MongoDB via the command line as below:
```
  cf create-service mongodb 100 MY_MONGO_DB
```
where MY_MONGO_DB is the name of the service.

Modify the manifest file to give a name to your application and use the same name for the host.
Update also the name of the mongo service with the one you just have created.
Find here all the details on the manifest file options you can use: https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html

Go back to your command line and go into the root of your source code application folder to run the push command to the cloud.

```
  cf push
```

Your application is deployed!




