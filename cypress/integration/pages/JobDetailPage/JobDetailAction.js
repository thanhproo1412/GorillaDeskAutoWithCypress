import getMonthName from '../../function/GetMonthName.js'
import JobDetailPage from './JobDetailPage.js';

const jobDetailPage = new JobDetailPage()

export default class JobDetailAction {


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

        //click save
        jobDetailPage.getBtnSave().click()

        jobDetailPage.getLoaddingAfterAddJob().should('exist')
        jobDetailPage.getLoaddingAfterAddJob().should('not.exist')

        //click close
        jobDetailPage.getBtnClose().click()

    }

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