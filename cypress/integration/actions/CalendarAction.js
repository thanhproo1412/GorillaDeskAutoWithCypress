import CalendarPage from '../pages/CalendarPage.js'
import getMonthName from '../function/GetMonthName.js'

const calendarPage = new CalendarPage()

export default class CalendarAction {

    // action: verify the content text in ABTestingPage
    selectAgendar(agendaType) {
        calendarPage.getListAgendaBtn().click();
        calendarPage.getAgenda(agendaType).click()

    }

    openModalAddJob(time, jobType) {
        calendarPage.getCalendarTime(time).click({
            force: true
        })
        calendarPage.getAddJob(jobType).click()
    }

    selectDate(date) {

        const newDate = new Date(date)
        const month = getMonthName(newDate)
        const year = newDate.getFullYear()
        const d = newDate.getDate()
        cy.log(year)
        cy.log(d)

        //click to open input Date modal
        calendarPage.getInputDate().click()

        //select month
        calendarPage.getSelectMonth().click()
        calendarPage.getSelectMonthList().contains(month).click()

        //select year
        calendarPage.getSelectYear().click()
        calendarPage.getSelectYearList().contains(year).click()

        //select date
        calendarPage.getSelectDateList().contains(d).click()
        cy.wait(500)

    }

    addJob(jobData) {
        //select customer
        calendarPage.getSearchCustomer().type(jobData.customer)
        calendarPage.getCustomerInList(jobData.customer).click()

        //select location
        calendarPage.getLocation().type(jobData.location)
        calendarPage.getLocationInList(jobData.location).click()

        //select service
        calendarPage.getSearchService().type(jobData.service)
        calendarPage.getServiceInList(jobData.service).click()

        //select date
        // calendarPage.getInputDate().clear().type(jobData.date)
        this.selectDate(jobData.date)

        //click save
        calendarPage.getBtnSave().click()

        calendarPage.getLoaddingAnimation().should('exist')
        calendarPage.getLoaddingAnimation().should('not.exist')

        //click close
        calendarPage.getBtnClose().click()

    }

}