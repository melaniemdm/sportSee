import axios from 'axios';
import Models from '../models';

const models = new Models();
/* A class that is used to get data from an API. */
export default class {
  constructor(){
    this.baseUrl= 'http://localhost:3000/';
    this.user_endPoint='user/';
  }
  
  /**
   * It gets the average sessions of a user from the API and sets the state of the component with the
   * data.
   * @param id - the user id
   * @param setStateData - a function that sets the state of the component
   */
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
  
  /**
 * It gets the daily activity of a user from the Fitbit API and then formats it using a function from a
 * models.js file.
 * @param id - the user id
 * @param setDailyActivity - is a function that sets the state of the component.
 */
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

  
  /**
   * It gets the performance of a user from the API and then formats it using a model.
   * @param id - the id of the user
   * @param setPerformance - a function that sets the state of the component
   */
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
  
  /**
  * It gets the score of a user from an API and then formats it using a function from another file.
  * @param id - the user id
  * @param setScore - is a function that sets the state of the component
  */
  async getDataScore(id, setScore) {
    await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
      const scoreUser = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
   
      const scoreArray= models.getFormatedByModelsDataScore(scoreUser);
      setScore(scoreArray);
    });
  }
 
  /**
  * It gets the first name of a user from an API and sets the first name in the state of the component.
  * @param id - the id of the user
  * @param setFirstName - a function that sets the state of the firstName variable
  */
  async getFirstName(id, setFirstName) {
    await axios.get(this.baseUrl +this.user_endPoint + id).then((response)=>{
      setFirstName(response.data.data.userInfos.firstName);
    }).catch(error=>{
      console.error(error);
      setFirstName('error');
    });
  }

  
  /**
  * It gets the BMI of a user from an API and sets the BMI in the state of the component.
  * @param id - the user id
  * @param setBMI - a function that sets the state of BMI
  */
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