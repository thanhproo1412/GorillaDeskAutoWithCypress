import getMonthName from '../../function/GetMonthName.js'
import JobDetailPage from './JobDetailPage.js';

const jobDetailPage = new JobDetailPage()

export default class JobDetailAction {

    // Add new job
    addJob(jobData) {
        //select customer
        cy.wait(2000)
        jobDetailPage.getSearchCustomer().type(jobData.customer)
        jobDetailPage.getCustomerInList(jobData.customer).click()

        //select location
        jobDetailPage.getLocation().type(jobData.location)
        jobDetailPage.getLocationInList(jobData.location).click()

        //select service
        jobDetailPage.getSearchService().type(jobData.service)
        jobDetailPage.getServiceInList(jobData.service).click()
        cy.wait(2000)

        //select date
        // jobDetailPage.getInputDate().clear().type(jobData.date)
        this.selectDate(jobData.date)

        //select job length
        jobDetailPage.getInputLengthHoursBtn().click()
        jobDetailPage.getInputLengthHoursList().contains(jobData.lengthHours).click()
        jobDetailPage.getInputLengthMinutesBtn().click()
        jobDetailPage.getInputLengthMinutesList().contains(jobData.lengthMinutes).click()

    }

    //Add Invoice func
    addInvoice(invoiceData) {

        // check the service have invoice or not
        jobDetailPage.getNavEstimate() ? jobDetailPage.getNavEstimate().click() : jobDetailPage.getNavAddEstimate().click()

        //click in search invoice
        jobDetailPage.getInputItemService().click()
        // wait for loadding
        jobDetailPage.getInputItemServiceListLoadding().should('not.exist')
        // clear data and type item
        jobDetailPage.getInputItemService().clear().type(invoiceData.item)
        // select item
        jobDetailPage.getInputItemServiceList().contains(invoiceData.item).click()


        //input cost
        jobDetailPage.getInputItemCost().clear().type(invoiceData.cost)

        //input tax 1
        jobDetailPage.getInputItemTax().click()
        jobDetailPage.getInputItemTaxList().contains(invoiceData.tax).click()

        //input tax 2
        jobDetailPage.getInputItemTax2().click()
        jobDetailPage.getInputItemTax2List().contains(invoiceData.tax2).click()

        //input qty
        jobDetailPage.getInputItemQTY().clear().type(invoiceData.qty)

        //input description
        jobDetailPage.getInputItemDescription().clear().type(invoiceData.description)
        //input invoice discount
        jobDetailPage.getInputInvoiceDiscount().clear().type(invoiceData.discount)
        //input term
        jobDetailPage.getInputInvoiceTerm().clear().type(invoiceData.term)
        //input note
        jobDetailPage.getInputInvoiceNote().clear().type(invoiceData.note)




    }


    // Add Estimate func
    addEstimate(estimateData) {

        // check the service have invoice or not
        jobDetailPage.getNavEstimate() ? jobDetailPage.getNavEstimate().click() : jobDetailPage.getNavAddEstimate().click()

        //click in search Estimate
        jobDetailPage.getInputEstimateItemService().click()
        // wait for loadding
        jobDetailPage.getInputEstimateItemServiceListLoadding().should('not.exist')
        // clear data and type item
        jobDetailPage.getInputEstimateItemService().clear().type(estimateData.item)
        // select item
        jobDetailPage.getInputEstimateItemServiceList().contains(estimateData.item).click()


        //input cost
        jobDetailPage.getInputEstimateItemCost().clear().type(estimateData.cost)

        //input tax 1
        jobDetailPage.getInputEstimateItemTax().click()
        jobDetailPage.getInputEstimateItemTaxList().contains(estimateData.tax).click()

        //input tax 2
        jobDetailPage.getInputEstimateItemTax2().click()
        jobDetailPage.getInputEstimateItemTax2List().contains(String(estimateData.tax2)).click()

        //input qty
        jobDetailPage.getInputEstimateItemQTY().clear().type(estimateData.qty)

        //input description
        jobDetailPage.getInputEstimateItemDescription().clear().type(estimateData.description)
        //input invoice discount
        jobDetailPage.getInputEstimateItemDiscount().clear().type(estimateData.discount)
        //input Invoice Term
        jobDetailPage.getInputEstimateTerm().clear().type(estimateData.term)
        //input Invoice
        jobDetailPage.getInputEstimateNote().clear().type(estimateData.note)



    }

    //Click save job
    saveJob() {

        //click save
        jobDetailPage.getBtnSave().click()

    }

    // Close Job
    closeJob() {

        // wait for job saved
        jobDetailPage.getLoaddingAfterAddJob().should('exist')
        jobDetailPage.getLoaddingAfterAddJob().should('not.exist')

        //click close
        jobDetailPage.getBtnClose().click()

    }

    // Select date
    selectDate(date) {

        const newDate = new Date(date)
        const month = getMonthName(newDate)
        const year = newDate.getFullYear()
        const d = newDate.getDate()
        cy.log(year)
        cy.log(d)

        //click to open input Date modal
        jobDetailPage.getInputDate().click()

        //select month
        jobDetailPage.getSelectMonth().click()
        jobDetailPage.getSelectMonthList().contains(month).click()

        //select year
        jobDetailPage.getSelectYear().click()
        jobDetailPage.getSelectYearList().contains(year).click()

        //select date
        jobDetailPage.getSelectDateList().contains(d).click()

    }


}