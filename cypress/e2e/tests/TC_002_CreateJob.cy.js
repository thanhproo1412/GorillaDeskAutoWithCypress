import LoginAction from '../../support/pages/LoginPage/LoginAction';
import CalendarAction from '../../support/pages/CalendarPage/CalendarAction';
import JobDetailAction from '../../support/pages/JobDetailPage/JobDetailAction';
import privateData from '../../fixtures/testData/PrivateData.json';
import jobData from '../../fixtures/testData/TC_002_CreateJob.json';


console.log(privateData)

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {

    // Nav to home page
    cy.visit(privateData.url);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password)

    const calendarAction = new CalendarAction()
    const jobDetailAction = new JobDetailAction()

    calendarAction.selectAgendar('Day')
    calendarAction.openModalAddJob(jobData.time, jobData.jobType)
    jobDetailAction.addJob(jobData.newJob)
    jobDetailAction.saveJob()
    jobDetailAction.closeJob()



  });
});