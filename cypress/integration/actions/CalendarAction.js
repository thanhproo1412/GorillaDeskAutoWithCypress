import CalendarPage from '../pages/CalendarPage.js'

const calendarPage = new CalendarPage()

class CalendarAction {

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
        calendarPage.getInputDate().type(jobData.date)

        //click save
        calendarPage.getBtnSave().click()

        calendarPage.getLoaddingAnimation().should('not.exist')

        //click close
        calendarPage.getBtnClose().click()

    }

}

export default CalendarAction;