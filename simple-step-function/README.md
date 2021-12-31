### Overview
Main purpose of this project is to understand orchestration of serverless function using AWS Step function.

### Serverless installation

# Install Via NPM:
npm install -g serverless

Further information on commands, follow: https://www.npmjs.com/package/serverless#quick-start

# Install dependencies:
perform 'npm install' on root project directory.

# Deploy application:
Execute command the following command in root directory,
aws-vault exec acl-playground -- sls deploy

On successful execution you should be seeing the following output,
```
Serverless: Stack update finished...
Service Information
service: basic-sf
stage: dev
region: us-east-1
stack: basic-sf-dev
resources: 17
api keys:
  None
endpoints:
functions:
  dataExtractionStep: basic-sf-dev-dataExtractionStep
  terraformFileCreationStep: basic-sf-dev-terraformFileCreationStep
  terraformExecutionStep: basic-sf-dev-terraformExecutionStep
  finalStep: basic-sf-dev-finalStep
layers:
  None
```