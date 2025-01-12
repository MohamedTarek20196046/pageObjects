

const HomePageCommands={
    navigateToKitchenSite(){
        return this.navigate()
    },
    verifyheader()
    {
        return this.waitForElementVisible('@kitchen',8000,true)
    },
    verifyPara()
    {
        return this.waitForElementVisible('@kitchentext',5000,true)
    },
    verifyTable()
    {
        this.api.useXpath(); 
        return this.waitForElementVisible('@Table',5000,true)
        .click('@Table')
    },

}
module.exports={
    url:"https://kitchen.applitools.com/",
    elements :{
        kitchen:{
            selector:'h1'
        },
        kitchentext:{
            selector:"p.chakra-text.css-la3nd4"
        },
        Table:{
            locateStrategy: 'xpath',
            selector:"//h3[text()='Table']"
        }
    },
    commands: [HomePageCommands]
}