import LoginAction from '../pages/LoginPage/LoginAction';
import CalendarAction from '../pages/CalendarPage/CalendarAction';
import JobDetailAction from '../pages/JobDetailPage/JobDetailAction';
import privateData from '../../testData/PrivateData.json';
import jobData from '../../testData/TC_005_CreateJobWithMaterial.json';


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
    jobDetailAction.addMaterial(jobData.material)

    jobDetailAction.saveJob()
    // jobDetailAction.closeJob()



  });
});