describe("facebook tests",function(){
    before(browser=>browser.navigateTo("https://www.facebook.com/"))
    it("login with strings",function(browser){
        browser.window.maximize()
        const facebook = browser.page.facebook()
        facebook.loginwithname("mohamed","asdasd")
    })
    it("login with num",function(browser){
        browser.window.maximize()
        const facebook = browser.page.facebook()
        facebook.loginwithnum("123123","124124124")
    })
    after(browser=>browser.end())
})