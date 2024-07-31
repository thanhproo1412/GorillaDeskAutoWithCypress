export default class CalendarPage {


  getListAgendaBtn() {
    return cy.get('div[class="v2-dropdown list-agenda"]');
  }

  getListAgenda() {
    return cy.get('div[class="v2-dropdown list-agenda active"] ul');
  }

  getAgenda(agenda) {
    return cy.get('div[class="v2-dropdown list-agenda active"] ul').contains(agenda);
  }

  getCalendarTime(time) {
    // return cy.get(`td[data-time="${time}"][class="fc-timegrid-slot fc-timegrid-slot-lane "]`);
    return cy.get(`td.fc-timegrid-slot.fc-timegrid-slot-lane[data-time="${time}"]`);



  }

  getToolipAddJob() {
    return cy.get(`div[id="tooltip-add-job"]`);
  }

  getAddJob(addJobType) {
    return cy.get('div[class="wrap-addjob-menu__items"]').contains(addJobType);
  }



}