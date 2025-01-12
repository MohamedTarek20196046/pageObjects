describe("testing page objects",function(){
    it("verify kitchen page and table page",function(browser){
        browser.window.maximize()
        const homepage = browser.page.homepage()
        const tablepage = browser.page.tablepage()
        homepage.navigateToKitchenSite()
        .verifyheader()
        .verifyPara()
        .verifyTable()
       tablepage.verifyTableHeader()
       browser.pause(4000)
        
        
    })
})