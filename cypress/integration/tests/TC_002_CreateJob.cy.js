import LoginAction from '../actions/LoginAction.js';
import CalendarPage from '../pages/CalendarPage.js';
import CalendarAction from '../actions/CalendarAction.js';
import loginData from '../../testData/Login.json'; // Assuming login.json is in testData folder
import jobData from '../../testData/TC_002_CreateJob.json'; // Assuming login.json is in testData folder


describe('Create Job', () => {
  it('Just create a new job in calendar', () => {

    // Nav to home page
    cy.visit('https://r2.gdesk.io/auth/login/');

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(loginData.username, loginData.password)

    const calendarAction = new CalendarAction()

    calendarAction.selectAgendar('Day')
    calendarAction.openModalAddJob(jobData.time, jobData.jobType)
    calendarAction.addJob(jobData.newJob)


  });
});