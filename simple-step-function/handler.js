'use strict';
const instanceDataExtractionStep = require('./worker/dataExtractionStep');
const instanceTerraformFileCreationStep = require('./worker/terraformFileCreationStep');
const instanceTerraformExecutionStep = require('./worker/terraformExecutionStep');
const instanceFinalStep = require('./worker/finalStep');

module.exports.dataExtractionStep = async () => {
  let firstStepResult = await instanceDataExtractionStep.extractData();
  return firstStepResult
};

module.exports.terraformFileCreationStep = async (firstStepResult) => {
  let secondStepResult = await instanceTerraformFileCreationStep.fileCreation(firstStepResult);
  return secondStepResult;
};

module.exports.terraformExecutionStep = async (secondStepResult) => {
  let thirdStepResult = await instanceTerraformExecutionStep.executeTerraform(secondStepResult);
  return thirdStepResult
};

module.exports.finalStep = async (thirdStepResult) => {
  let fourStepResult = await instanceFinalStep.finalExecute(thirdStepResult);
  return fourStepResult
};