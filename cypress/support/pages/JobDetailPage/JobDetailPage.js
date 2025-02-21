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
    //get btn Add estimate
    getNavAddEstimate() {
        cy.get('ul.tab-selectors li').contains('Add Estimate');
    }
    //Get btn Invoice
    getNavInvoice() {
        return cy.get('ul[class="tab-selectors"]').contains('Invoice');
    }
    //get btn Add Invoice
    getNavAddInvoice() {
        return cy.get('ul.tab-selectors > li').contains('Add Invoice');
    }
    //get btn Material
    getNavMaterial() {
        return cy.get('ul.tab-selectors li').contains('Materials');

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


    // #region --------------------- Job Detail section---------------------------------
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
        return cy.get('div[id="show_list_services"] div[class="v2-dropdown__menu content-full content-checked has-tab"]').contains(name);
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

    // #region --------------------- Documents section---------------------------------
    //Get btn Add Document - Open DocList
    getBtnAddDocumentList() {
        return cy.get('div.v2-btn-main.has-icon').contains('Add Document')
    }

    //getBtnAddDoc
    getBtnAddDoc() {
        return cy.get('div[class="docs-name"]').contains('Add Document')
    }

    // #endregion Documents

    // #region --------------------- Invoice section ---------------------------------
    //Get btn Add Document - Open DocList
    getInputItemService() {
        return cy.get('div#tab_inoive_detail_setting  div.items-service.tb-content div.search-input input');
    }
    //list Invoice item load
    getInputItemServiceListLoadding() {
        return cy.get('div.items-service.tb-content').find('div.loading');
    }
    // list Invoice item ul
    getInputItemServiceList() {
        return cy.get('div.items-service.tb-content ul.box-auto.scrolls')
    }
    // Invoice item in list item
    getInputItemServiceListItem(data) {
        return cy.get('div.items-service.tb-content ul.box-auto.scrolls li').contains(data)
    }
    // item cost input
    getInputItemCost() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-cost input')
    }
    // Invoice Tax btn
    getInputItemTax() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-tax.first-field')
    }
    // Invoice Tax list
    getInputItemTaxList() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-tax.first-field ul')
    }
    // Invoice Tax 2 btn
    getInputItemTax2() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-tax.second-field')
    }
    // Invoice Tax 2 list
    getInputItemTax2List() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-tax.second-field ul')
    }
    // Invoice cost input
    getInputItemQTY() {
        return cy.get('div#tab_inoive_detail_setting div.items-service.tb-content div.col-qty input')
    }

    // Invoice description
    getInputItemDescription() {
        return cy.get('div#tab_inoive_detail_setting div.item-note.boxs.dashboard-wrapper .public-DraftStyleDefault-block')
    }

    // Invoice Term
    getInputInvoiceTerm() {
        return cy.get('div#tab_inoive_detail_setting div.boxs.--terms-note div.notranslate').first()
    }

    // Invoice Note
    getInputInvoiceNote() {
        return cy.get('div#tab_inoive_detail_setting div.boxs.--terms-note:nth-of-type(2) div.notranslate.public-DraftEditor-content')
    }

    //  Invoice discount
    getInputInvoiceDiscount() {
        return cy.get('div#tab_inoive_detail_setting div.edit-discount input.field-input')
    }


    // #endregion Invoice

    // #region --------------------- Estimate section ---------------------------------
    //Get input Estimate item
    getInputEstimateItemService() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.search-input input');
    }
    //list item load
    getInputEstimateItemServiceListLoadding() {
        return cy.get('div.items-service.tb-content').find('div.loading');
    }
    // list item ul
    getInputEstimateItemServiceList() {
        return cy.get('div.items-service.tb-content ul.box-auto.scrolls')
    }
    // item in list item
    getInputEstimateItemServiceListItem(data) {
        return cy.get('div.items-service.tb-content ul.box-auto.scrolls li').contains(data)
    }
    // Estimate item cost input
    getInputEstimateItemCost() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-cost input')
    }
    // Estimate item Tax btn
    getInputEstimateItemTax() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-tax.first-field')
    }
    // Estimate item Tax list
    getInputEstimateItemTaxList() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-tax.first-field ul')
    }
    // item Tax 2 btn
    getInputEstimateItemTax2() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-tax.second-field')
    }
    // Estimate item Tax 2 list
    getInputEstimateItemTax2List() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-tax.second-field ul')
    }
    // Estimate item cost input
    getInputEstimateItemQTY() {
        return cy.get('div.form-add-estimate div.items-service.tb-content div.col-qty input')
    }

    // Estimate description
    getInputEstimateItemDescription() {
        return cy.get('div.form-add-estimate div.item-note.boxs.dashboard-wrapper div.DraftEditor-editorContainer')

    }
    // Estimate Discount
    getInputEstimateItemDiscount() {
        return cy.get('div.form-add-estimate div.edit-discount').eq(0).find('div.second-field input')
    }
    // Estimate Term
    getInputEstimateTerm() {
        return cy.get('div.boxs.--terms-note div.notranslate').first()
    }

    // Estimate Note
    getInputEstimateNote() {
        return cy.get('div.boxs.--terms-note:nth-of-type(2) div.notranslate.public-DraftEditor-content')
    }




    // #endregion Estimate

    // #region --------------------- Material ---------------------------------
    //Get Add material btn
    getAddMaterialBtn() {
        return cy.get('div.action-add-material');
    }
    //Get Dropdown Material / EPA # Button
    getDropdownMaterialBtn() {
        return cy.get('div.rows.--sm')
            .contains('Material / EPA #')
            .closest('div.rows.--sm') // Finds the nearest ancestor with the specified class if necessary
            .find('div.details.v2-dropdown');
    }
    //Get List Material / EPA # 
    getDropdownMaterialList() {
        return cy.get('div#show_list_option_dropdow_list_sms_material')
    }
    //Get Input Unit Number
    getInputUnitNumber() {
        return cy.get('div.details.has-input.field-every input')
    }
    //Get Unit Dropdown Button
    getUnitDropdownBtn() {
        return cy.get('div.details.has-input.field-every .v2-dropdown')
    }
    //Get Unit Dropdown List
    getUnitDropdownList() {
        return cy.get('div#show_list_option_dropdow_list_sms_unit')
    }
    //Get Input Dilution
    getInputDilution() {
        return cy.get('input[name = "dilution"]')
    }
    //Get Method Dropdown Button
    getMethodDropdownBtn() {
        return cy.get('div.rows.--sm')
            .contains('Method')
            .closest('div.rows.--sm') // Finds the nearest ancestor with the specified class if necessary
            .find('div.details.v2-dropdown');
    }
    //Get Method Dropdown List
    getMethodDropdownList() {
        return cy.get('div#show_list_option_dropdow_list_sms_method')
    }
    //Get Location Dropdown Button
    getLocationDropdownBtn() {
        return cy.get('div.form-edit-material div.rows') // Selects all divs with the class 'rows'
            .contains('Location') // Ensures 'Location' is within divs with the class 'txt'
            .closest('div.rows') // Finds the nearest ancestor with the class 'rows'
            .find('div.details.v2-dropdown'); // Finds the dropdown within this context
    }
    //Get Location Dropdown List
    getLocationDropdownList() {
        return cy.get('div.form-edit-material div.rows')
            .contains('Location')
            .closest('div.rows') // Finds the nearest ancestor with the specified class if necessary
            .find('#show_list_dropdown');
    }
    //Get Target Dropdown Button
    getTargetDropdownBtn() {
        return cy.get('div.form-edit-material div.rows') // Selects all divs with the class 'rows'
            .contains('Target')
            .closest('div.rows') // Finds the nearest ancestor with the class 'rows'
            .find('div.details.v2-dropdown'); // Finds the dropdown within this context
    }
    //Get Target Dropdown List
    getTargetDropdownList() {
        return cy.get('div.form-edit-material div.rows')
            .contains('Target')
            .closest('div.rows') // Finds the nearest ancestor with the specified class if necessary
            .find('#show_list_dropdown');
    }
    getButtonSaveMaterial() {
        return cy.get('div.form-edit-material div.v2-btn-main')
    }


    // #endregion Material


    // #region --------------------- Button save ---------------------------------

    //Btn Save
    getBtnSave() {
        return cy.get('div .footer-modal.btn-close .v2-btn-main')
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