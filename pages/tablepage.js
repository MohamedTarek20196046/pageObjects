const TablePageCommands={
    verifyTableHeader(){
        return this.waitForElementVisible('@Header',5000,true)
    }
}

module.exports={
    elements:{
        Header:{
            selector:"h1"
        }
    },
    commands:[TablePageCommands]
}