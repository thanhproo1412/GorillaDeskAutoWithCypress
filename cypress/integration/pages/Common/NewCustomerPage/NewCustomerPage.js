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

    //input First Name
    InputFirstName() {
        return cy.get('#add_new_customer .rows').contains('First Name').closest('.rows').find('.rows__field input');
    }

    //input Last Name
    InputLastName() {
        return cy.get('#add_new_customer .rows').contains('Last Name').closest('.rows').find('.rows__field input');
    }

    //input Title
    InputTitle() {
        return cy.get('#add_new_customer .rows').contains('Title').closest('.rows').find('.rows__field input');
    }

    //input Email
    InputEmail() {
        return cy.get('#add_new_customer .rows').contains('Email').closest('.rows').find('.rows__field input');
    }

    //input Company
    InputCompany() {
        return cy.get('#add_new_customer .rows').contains('Company').closest('.rows').find('.rows__field input');
    }

    //input Address Name
    InputAddressName() {
        return cy.get('#add_new_customer .rows').contains('Address Name').closest('.rows').find('.rows__field input');
    }

    //input Source
    InputSource() {
        return cy.get('#add_new_customer .rows').contains('Source').closest('.rows').find('.rows__field input');
    }

    //input Tags
    InputTags() {
        return cy.get('#add_new_customer .rows').contains('Tags').closest('.rows').find('.rows__field input');
    }

    //input Location Note
    InputLocationNote() {
        return cy.get('#add_new_customer .rows').contains('Location Note').closest('.rows').find('textarea');
    }

    //input Service Address
    InputServiceAddress() {
        return cy.get('#add_new_customer .rows').contains('Service Address').closest('.rows').find('.rows__field input');
    }



}

