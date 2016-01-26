import alt from '../alt';
import request from 'superagent';

class HistoryAction {

  constructor() {
    this.generateActions('switchToJobTab');
    this.generateActions('switchToHistoryTab');
    this.generateActions('switchToStageTab');
  }

  async fetchApplications() {
    try {
      const response = await request.get('/varOne-web/rest/history')
                                    .set('Accept', 'application/json');
      const result = JSON.parse(response.text);
      this.dispatch(result);
    } catch (e) {
      alert(e.response.text);
    }
  }

  async fetchJobs(applicationId) {
    try {
      const response = await request.get(`/varOne-web/rest/history/${applicationId}/jobs`)
                                    .set('Accept', 'application/json');
      const jobs = JSON.parse(response.text);
      const result = { jobs, applicationId };
      this.dispatch(result);
    } catch (e) {
      alert(e.response.text);
    }
  }

  async fetchStages(applicationId, jobId) {
    try {
      const response = await request.get(`/varOne-web/rest/history/${applicationId}/${jobId}/stages`)
                                    .set('Accept', 'application/json');
      const stages = JSON.parse(response.text);
      const result = { stages, jobId };
      this.dispatch(result);
    } catch (e) {
      alert(e.response.text);
    }
  }

  async fetchStageDetails(applicationId, stageId) {
    try {
      const response = await request.get(`/varOne-web/rest/history/${applicationId}/jobs/${stageId}`)
                                    .set('Accept', 'application/json');
      const stageDetails = JSON.parse(response.text);
      const result = { stageDetails };
      this.dispatch(result);
    } catch (e) {
      alert(e.response.text);
    }
  }
}

export default alt.createActions(HistoryAction);
