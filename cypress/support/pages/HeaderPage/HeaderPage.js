export default class HeaderPage {


    //  #region--------------------- Navigation tab ---------------------------------
    //Get btn Add menu
    getBtnAdd() {
        return cy.get('.header-v2 .add-menu');
    }
    //Get add menu list
    getAddMenu() {
        return cy.get('.header-v2 .add-menu ul');
    }
    //Get item new lead
    getMenuItemNewLead() {
        return cy.get('.header-v2 .add-menu ul').contains('li','New Lead');
    }

    // #endregion Navigation tab----------------------------------------------------


}