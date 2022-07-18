import fire from '../assets/fire.png';
import prot from '../assets/prot.png';
import apple from '../assets/apple.png';
import lipides from '../assets/lipides.png';

export default class {
  constructor(){
  }
  getAverageSessions(sessions){
    const arrayDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const averageSessionsArray =sessions.map((averageSession) => {
      return new AverageSession(arrayDay[averageSession.day - 1], averageSession.sessionLength);
    
    });
    return averageSessionsArray;   
  }
  getDailyActivity(sessions){
    const activitiesArray = sessions.map((activity) => {
      return new DailyActivity(   
        activity.day,
        activity.day.split('-')[2],
        activity.kilogram,
        activity.calories,
      );
     
    });
    return activitiesArray;
  }

  getPerformance(performances){
    const performancesArray = performances.data.map((performance) => {
      return new Performance(
        performances.kind[performance.kind],
        performance.value,
        150,
      );
    });
    return performancesArray;
  }

  getDataScore(scoreUser){
    const score1 = new Score('Group B', (1 - scoreUser)*100, 'white', 'white', '0');
    const score2= new Score( scoreUser*100, scoreUser*100,'red');
    return [score1, score2 ];
  }
  
  getBMI(keyData){
    const bmi1 = new Bmi(  keyData.calorieCount,
      'Calories',
      fire);
    const bmi2= new Bmi( keyData.proteinCount,
      'Protéines',
      prot, );
    const bmi3 = new Bmi( keyData.carbohydrateCount,
      'Glucides',
      apple,);
    const bmi4 = new Bmi( keyData.lipidCount,
      'Lipides',
      lipides, );
    return [bmi1, bmi2, bmi3, bmi4];
  }


}

class AverageSession {
  constructor(name,pv) {
    this.name=name;
    this.pv=pv;
  }
}
class DailyActivity {
  constructor(name,number,kilogram,calories) {
    this.name=name;
    this.number=number;
    this.kilogram=kilogram;
    this.calories=calories; 
  }
}
class Performance{
  constructor(subject, A, fullmark){
    this.subject = subject;
    this.A= A;
    this.fullmark= fullmark;
  }
}

class Score{
  constructor(name, value, fill, stroke,fontSize){
    this.name=name;
    this.value=value;
    this.fill=fill;
    this.stroke=stroke;
    this.fontSize=fontSize;
  }
}

class Bmi{
  constructor(value,type,picture){
    this.value=value;
    this.type=type;
    this.picture=picture;
  }
}