
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

