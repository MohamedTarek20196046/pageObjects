const facebookCommands={
    navigateto(){
        return this.navigateTo(this.url)
    },
    loginwithname(username,password)
    {
        return this.setValue("@user",username)
        .setValue("@pass",password)
        .pause(5000)
    },
    loginwithnum(username,password)
    {
        return this.setValue("@user",username)
        .setValue("@pass",password)
        .pause(5000)
    }
}
module.exports={
    url:"https://www.facebook.com/",
    elements:{
        user:{
            selector:"input#email"
        },
        pass:{
            selector:"input#pass"
        }
    },
    commands:[facebookCommands]
}