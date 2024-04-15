export default class JobDetailPage {


    //--------------------- Job Detail ---------------------------------
    //Get Customer
    getSearchCustomer() {
        return cy.get('div[id="show_list_customer_dropdown"] input[placeholder="Search Customers"]');
    }
    getSearchCustomerList() {
        return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]');
    }
    getCustomerInList(name) {
        return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]').contains(name);
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
}