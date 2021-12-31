class FinalStep{
    
    async finalExecute(data){
        let stepfour = 'msg from prev stage : '+data+' :: finalExecute step complete';
        return stepfour;
    }
} 

module.exports = new FinalStep();