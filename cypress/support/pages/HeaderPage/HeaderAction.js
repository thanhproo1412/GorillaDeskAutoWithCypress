import "cypress-real-events";
import HeaderPage from './HeaderPage.js';

const headerPage = new HeaderPage()

export default class HeaderAction {

    // #region --------------------- Function Open New Customer---------------------------------
    openNewCustomer(jobData) {
        //select customer
        cy.wait(2000)
        headerPage.getBtnAdd().should('be.visible').realClick()
        headerPage.getMenuItemNewLead().click()

    }
    // #endregion Function Open New Customer


}