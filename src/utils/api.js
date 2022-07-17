import axios from 'axios';
import fire from '../assets/fire.png';
import prot from '../assets/prot.png';
import apple from '../assets/apple.png';
import lipides from '../assets/lipides.png';
import Models from '../models';

export default class {
  constructor(){
    this.baseUrl= 'http://localhost:3000/';
    this.user_endPoint='user/';

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

    this.getDailyActivity = async (id, setDailyActivity) => {
      await axios.get(
        this.baseUrl +this.user_endPoint + id + '/activity'
      ).then((response) => {
        const activitiesArray = response.data.data.sessions.map((activity) => {
          return {
            name: activity.day,
            number:activity.day.split('-')[2],
            kilogram: activity.kilogram,
            calories: activity.calories,
          };
        });
        setDailyActivity(activitiesArray);
      }).catch((error) => {
        console.error(error);
        setDailyActivity('error');
      });
    };

    this.getPerformance = async (id, setPerformance) => {
      await axios.get(
        this.baseUrl +this.user_endPoint + id + '/performance'
      ).then((response) => {

        const performancesArray = response.data.data.data.map((performance) => {
          return {
            subject: response.data.data.kind[performance.kind],
            A: performance.value,
            fullMark: 150,
          };
        });
        setPerformance(performancesArray);
      }).catch((error) => {
        console.error(error);
        setPerformance('error');
      });

    };

    this.getDataScore = async (id, setScore) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
        const scoreUser = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
        const dataScore = [
          { name: 'Group B', value: (1 - scoreUser)*100,'fill': 'white', 'stroke':'white', 'fontSize':'0'},
          { name: scoreUser*100, value: scoreUser*100,'fill': 'red' },
        ];
        setScore(dataScore);
      });
    
    };

    this.getFirstName = async (id, setFirstName) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response)=>{
        setFirstName(response.data.data.userInfos.firstName);
      }).catch(error=>{
        console.error(error);
        setFirstName('error');
      });
    };

    this.getBMI = async (id, setBMI) => {
      await axios.get(this.baseUrl +this.user_endPoint + id).then((response) => {
        const keyData = response.data.data.keyData;
      
        let bmiArray = [];
        bmiArray.push({
          value: keyData.calorieCount,
          type: 'Calories',
          picture: fire,
        });
        bmiArray.push({
          value: keyData.proteinCount,
          type: 'Protéines',
          picture: prot,
        });
        bmiArray.push({
          value: keyData.carbohydrateCount,
          type: 'Glucides',
          picture: apple,
        });
        bmiArray.push({
          value: keyData.lipidCount,
          type: 'Lipides',
          picture: lipides,
        });
        setBMI(bmiArray);
      }).catch(error=> {
        console.error(error);
        setBMI('error');
      });
     
    };
  }

}