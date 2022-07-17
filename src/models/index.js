
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
}

class AverageSession {
  constructor(name,pv) {
    this.name=name;
    this.pv=pv;
  }
}