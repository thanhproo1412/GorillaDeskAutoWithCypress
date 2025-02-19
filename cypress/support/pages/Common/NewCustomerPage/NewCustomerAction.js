import "cypress-real-events";
import NewCustomerPage from './NewCustomerPage.js';


const newCustomerPage = new NewCustomerPage()

export default class NewCustomerAction {

    // #region --------------------- Function Add new job---------------------------------
    AddNewCustomer(data) {

        newCustomerPage.DropdownStatusBtn().click()
        newCustomerPage.DropdownStatusItem(data.newCustomer.status).click()
        newCustomerPage.InputAccountNumber().clear().type(data.newCustomer['account#'])
        newCustomerPage.InputFirstName().clear().type(data.newCustomer.firstName)
        newCustomerPage.InputLastName().clear().type(data.newCustomer.lastName)
        newCustomerPage.InputTitle().clear().type(data.newCustomer.title)
        newCustomerPage.InputEmail().clear().type(data.newCustomer.email)
        newCustomerPage.InputCompany().clear().type(data.newCustomer.company)
        newCustomerPage.InputAddressName().clear().type(data.newCustomer.company)
        newCustomerPage.InputLocationNote().clear().type(data.newCustomer.locationNote)
        newCustomerPage.InputServiceAddress().clear().type(data.newCustomer.serviceAddress)

        

    }
    // #endregion Add new job


}