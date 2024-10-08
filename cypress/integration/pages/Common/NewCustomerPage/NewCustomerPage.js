export default class NewCustomerPage {


    //Dropdown Status Btn
    DropdownStatusBtn() {
        return cy.get('#add_new_customer .rows').contains('Status').closest('.rows').find('.v2-dropdown');
    }

    //Dropdown Status List
    DropdownStatusList() {
        return cy.get('#add_new_customer .rows').contains('Status').closest('.rows').find('.v2-dropdown__menu');
    }

    //Dropdown Status Item
    DropdownStatusItem(itemName) {
        return cy.get('#add_new_customer .rows').contains('Status').closest('.rows').find('.v2-dropdown__menu li').contains(itemName);
    }

    //input Account#
    InputAccountNumber() {
        return cy.get('#add_new_customer .rows').contains('Account #').closest('.rows').find('.rows__field input');
    }


}

