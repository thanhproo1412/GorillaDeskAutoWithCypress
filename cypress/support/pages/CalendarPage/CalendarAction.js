import CalendarPage from './CalendarPage.js'
// import getMonthName from '../../supportFunction/GetMonthName.js'

const calendarPage = new CalendarPage()

export default class CalendarAction {

    // action: verify the content text in ABTestingPage
    selectAgendar(agendaType) {
        calendarPage.getListAgendaBtn().click();
        calendarPage.getAgenda(agendaType).click()

    }

    openModalAddJob(time, jobType) {
        cy.wait(2000)
        calendarPage.getCalendarTime(time).click({
            force: true
        })
        calendarPage.getAddJob(jobType).click()
    }



}