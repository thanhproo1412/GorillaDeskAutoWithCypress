import "cypress-real-events";
import NewCustomerPage from './NewCustomerPage.js';


const newCustomerPage = new NewCustomerPage()
const randomID = Math.floor(Math.random() * 100000001);

export default class NewCustomerAction {

    // #region --------------------- Function Add new job---------------------------------
    AddNewCustomer(data) {

        newCustomerPage.DropdownStatusBtn().click()
        newCustomerPage.DropdownStatusItem(data.newCustomer.status).click()
        newCustomerPage.InputAccountNumber().type(randomID)

    }
    // #endregion Add new job


}