import getMonthName from '../../function/GetMonthName.js'
import HeaderPage from './HeaderPage.js';

const headerPage = new HeaderPage()

export default class HeaderAction {

    // #region --------------------- Function Add new job---------------------------------
    openNewCustomer(jobData) {
        //select customer
        cy.wait(2000)
        headerPage.getBtnAdd().trigger('mouseover')
        headerPage.getMenuItemNewLead().click()

    }
    // #endregion Add new job


}