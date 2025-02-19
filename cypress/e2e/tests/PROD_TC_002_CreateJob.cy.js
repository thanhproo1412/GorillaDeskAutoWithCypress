import LoginAction from '../../support/pages/LoginPage/LoginAction';
import CalendarAction from '../../support/pages/CalendarPage/CalendarAction.js';
import JobDetailAction from '../../support/pages/JobDetailPage/JobDetailAction.js';
import privateData from '../../fixtures/testData/PrivateData.json';
import jobData from '../../fixtures/testData/TC_002_CreateJob.json'; 


describe('Create Job', () => {
  it.skip('Just create a new job in calendar', () => {

    // Nav to home page
    cy.visit(privateData.ProdUrl);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.ProdUsername, privateData.ProdPassword)

    const calendarAction = new CalendarAction()
    const jobDetailAction = new JobDetailAction()

    calendarAction.selectAgendar('Day')
    calendarAction.openModalAddJob(jobData.time, jobData.jobType)
    jobDetailAction.addJob(jobData.newJob)


  });
});