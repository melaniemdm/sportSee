import axios from 'axios';
import Models from '../models';

const models = new Models();
export default class {
  constructor(){
    this.baseUrl= 'http://localhost:3000/';
    this.user_endPoint='user/';
  }
  /* A function that is called in the component. */
  async getAverageSessions(id, setStateData)  {
    await axios.get(
      this.baseUrl +this.user_endPoint + id + ' /average-sessions'
    ).then((response) =>{
   
      const averageSessionsArray = models.getFormatedByModelsAverageSessions(response.data.data.sessions);
      setStateData(averageSessionsArray);
    }).catch((error) => {
      console.error(error);
      setStateData('error');
    });
 
  }
  /* A function that is called in the component. */
  async getDailyActivity (id, setDailyActivity){
    await axios.get(
      this.baseUrl +this.user_endPoint + id + '/activity'
    ).then((response) => {
   
      const activitiesArray = models.getFormatedByModelsDailyActivity(response.data.data.sessions);
      setDailyActivity(activitiesArray);
    }).catch((error) => {
      console.error(error);
      setDailyActivity('error');
    });
  }

  /* A function that is called in the component. */
  async getPerformance(id, setPerformance) {
    await axios.get(
      this.baseUrl +this.user_endPoint + id + '/performance'
    ).then((response) => {
      
      const performanceArray = models.getFormatedByModelsPerformance(response.data.data);
      
      setPerformance(performanceArray);
    }).catch((error) => {
      console.error(error);
      setPerformance('error');
    });

  }
  /* A function that is called in the component. */
  async getDataScore(id, setScore) {
    await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
      const scoreUser = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
   
      const scoreArray= models.getFormatedByModelsDataScore(scoreUser);
      setScore(scoreArray);
    });

  }
  /* A function that is called in the component. */
  async getFirstName(id, setFirstName) {
    await axios.get(this.baseUrl +this.user_endPoint + id).then((response)=>{
      setFirstName(response.data.data.userInfos.firstName);
    }).catch(error=>{
      console.error(error);
      setFirstName('error');
    });
  }

  /* A function that is called in the component. */
  async getBMI  (id, setBMI){
    await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
      const keyData = response.data.data.keyData;
    
      const bmiArray = models.getFormatedByModelsBMI(keyData);
      setBMI(bmiArray);
    }).catch(error=> {
      console.error(error);
      setBMI('error');
    });
 
  }
}