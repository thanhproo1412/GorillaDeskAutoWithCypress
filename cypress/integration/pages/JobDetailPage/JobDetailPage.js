export default class JobDetailPage {


    //  #region--------------------- Navigation tab ---------------------------------
    //Get btn job detail section
    getNavJobDetail() {
        return cy.get('ul[class="tab-selectors"]').contains('Job Details');
    }
    //Get btn job detail section
    getNavDocuments() {
        return cy.get('ul[class="tab-selectors"]').contains('Documents');
    }
    //Get btn job detail section
    getNavJobDetail() {
        return cy.get('ul[class="tab-selectors"]').contains('Materials');
    }
    //Get btn Add Invoice
    getNavAddInvoice() {
        return cy.get('ul[class="tab-selectors"]').contains('Invoice');
    }
    //Get btn Estimate
    getNavEstimate() {
        return cy.get('ul[class="tab-selectors"]').contains('Estimate');
    }

    //Add button-------------------------
    //Get btn Add Invoice
    getNavAddInvoice() {
        return cy.get('ul[class="tab-selectors"]').contains('Add Invoice');
    }
    //Get btn Add Estimate
    getNavAddEstimate() {
        return cy.get('ul[class="tab-selectors"]').contains('Add Estimate');
    }

    // #endregion Navigation tab----------------------------------------------------


    // #region --------------------- Job Detail ---------------------------------
    //Get Customer
    getSearchCustomer() {
        // return cy.get('div[id="show_list_customer_dropdown"] input[placeholder="Search Customers"]');
        return cy.get('input[placeholder="Search Customers"]');
    }
    getSearchCustomerList() {
        // return cy.get('div[class="v2-dropdown__menu content-user content-full scrolls"]');
        return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]');
    }
    getCustomerInList(name) {
        // return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]').contains(name);
        return cy.get('div[class="v2-dropdown__menu content-user content-full scrolls"]').contains(name);
    }

    // Get Location
    getLocation() {
        return cy.get('div[id="location_id"] div[class="dropbtn items"]');
    }
    getLocationList() {
        return cy.get('div[id="location_id"] div[id="show_list_dropdown"]');
    }
    getLocationInList(name) {
        return cy.get('div[id="location_id"] div[id="show_list_dropdown"]').contains(name);
    }


    //Get Service
    getSearchService() {
        return cy.get('div[id="show_list_services"] input');
    }
    getSearchServiceList() {
        return cy.get('div[id="show_list_services"] div[class="v2-dropdown__menu content-full scrolls"]');
    }
    getServiceInList(name) {
        return cy.get('div[id="show_list_services"] div[class="v2-dropdown__menu content-full scrolls"]').contains(name);
    }


    //Get input date
    getInputDate() {
        return cy.get('div[class="react-datepicker-wrapper"] input');
    }
    getSelectMonth() {
        return cy.get('div[class="datepicker-header-custom__option --month"]');
    }
    getSelectMonthList() {
        return cy.get('div[class="datepicker-header-custom__option --month"] ul');
    }
    getSelectYear() {
        return cy.get('div[class="datepicker-header-custom__option --year"]');
    }
    getSelectYearList() {
        return cy.get('div[class="datepicker-header-custom__option --year"] ul');
    }
    getSelectDateList() {
        return cy.get('div[id="show_date_picker"] [class="react-datepicker__month-container"] div[class="react-datepicker__month"]');
    }


    //Get Input Length
    getInputLengthHoursBtn() {
        return cy.get('div[class="field-length"] div[class="from-time"]').eq(0)
    }
    getInputLengthHoursList() {
        return cy.get('div[class="field-length"] div[class="from-time"]').eq(0).find('div[id="show_list_option_select_hour"]')
    }
    getInputLengthMinutesBtn() {
        return cy.get('div[class="field-length"] div[class="from-time"]').eq(1)
    }
    getInputLengthMinutesList() {
        return cy.get('div[class="field-length"] div[class="from-time"]').eq(1).find('div[id="show_list_option_select_hour"]')
    }

    // #endregion Job Detail

    // #region --------------------- Documents ---------------------------------
    //Get btn Add Document - Open DocList
    getBtnAddDocumentList() {
        return cy.get('div.v2-btn-main.has-icon').contains('Add Document')
    }

    //getBtnAddDoc
    getBtnAddDoc() {
        return cy.get('div[class="docs-name"]').contains('Add Document')
    }


    // #endregion Documents

    // #region --------------------- Button save ---------------------------------

    //Btn Save
    getBtnSave() {
        return cy.get('div[class="v2-btn-main "]')
    }

    //Btn Close
    getBtnClose() {
        return cy.get('div[class="btn-action btn-close"]')
    }

    // loadding animation
    getLoaddingAfterAddJob() {
        return cy.get('div[class="loading v2-btn-default --grey btn-lg"]')

    }
    // #endregion Button save ---------------------------------

}