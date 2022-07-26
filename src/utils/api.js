import axios from 'axios';
import Models from '../models';

export default class {
  constructor(){
    this.baseUrl= 'http://localhost:3000/';
    this.user_endPoint='user/';
    /* A function that is called in the component. */
    this.getAverageSessions = async (id, setStateData) => {
      await axios.get(
        this.baseUrl +this.user_endPoint + id + ' /average-sessions'
      ).then((response) =>{
        const averageSessions = new Models();
        const averageSessionsArray = averageSessions.getAverageSessions(response.data.data.sessions);
        setStateData(averageSessionsArray);
      }).catch((error) => {
        console.error(error);
        setStateData('error');

      });
     
    };

    /* A function that is called in the component. */
    this.getDailyActivity = async (id, setDailyActivity) => {
      await axios.get(
        this.baseUrl +this.user_endPoint + id + '/activity'
      ).then((response) => {
        const dailyActivity = new Models();
        const activitiesArray = dailyActivity.getDailyActivity(response.data.data.sessions);
        setDailyActivity(activitiesArray);
      }).catch((error) => {
        console.error(error);
        setDailyActivity('error');
      });
    };

    /* A function that is called in the component. */
    this.getPerformance = async (id, setPerformance) => {
      await axios.get(
        this.baseUrl +this.user_endPoint + id + '/performance'
      ).then((response) => {
        const performance = new Models();
        const performanceArray = performance.getPerformance(response.data.data);
      
        setPerformance(performanceArray);
      }).catch((error) => {
        console.error(error);
        setPerformance('error');
      });

    };

    /* A function that is called in the component. */
    this.getDataScore = async (id, setScore) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
        const scoreUser = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
        const score= new Models();
        const scoreArray= score.getDataScore(scoreUser);
        setScore(scoreArray);
      });
    
    };

    /* A function that is called in the component. */
    this.getFirstName = async (id, setFirstName) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response)=>{
        setFirstName(response.data.data.userInfos.firstName);
      }).catch(error=>{
        console.error(error);
        setFirstName('error');
      });
    };

    /* A function that is called in the component. */
    this.getBMI = async (id, setBMI) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
        const keyData = response.data.data.keyData;
        const bmi = new Models();
        const bmiArray = bmi.getBMI(keyData);
        setBMI(bmiArray);
      }).catch(error=> {
        console.error(error);
        setBMI('error');
      });
     
    };
  }

}