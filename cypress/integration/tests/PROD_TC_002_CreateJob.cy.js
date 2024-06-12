import LoginAction from '../pages/LoginPage/LoginAction.js';
import CalendarAction from '../pages/CalendarPage/CalendarAction.js';
import JobDetailAction from '../pages/JobDetailPage/JobDetailAction.js';
import privateData from '../../testData/PrivateData.json'; // Assuming login.json is in testData folder
import jobData from '../../testData/TC_002_CreateJob.json'; // Assuming login.json is in testData folder


describe('Create Job', () => {
  it('Just create a new job in calendar', () => {

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