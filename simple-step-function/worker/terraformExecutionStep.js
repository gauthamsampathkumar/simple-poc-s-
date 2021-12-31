class TerraformExecutionStep{
    
    async executeTerraform(data){
        let stepthree = 'msg from prev stage : '+data+' :: executeTerraform step complete';
        return stepthree;
    }
}
module.exports = new TerraformExecutionStep();