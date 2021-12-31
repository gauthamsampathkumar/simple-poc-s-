class TerraformFileCreationStep{
    
    async fileCreation(data){
        let steptwo = 'msg from prev stage : '+data+' :: fileCreation step complete';
        return steptwo;
    }
}

module.exports = new TerraformFileCreationStep();