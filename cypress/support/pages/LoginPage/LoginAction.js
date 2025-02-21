import LoginPage from './LoginPage.js'

const loginPage = new LoginPage()

class LoginAction {

    // action: verify the content text in ABTestingPage
    login(Username, psw) {
        loginPage.getInputUsername().type(Username);
        loginPage.getInputPassword().type(psw);
        loginPage.getLoginBtn().click()
    }

}

export default LoginAction;