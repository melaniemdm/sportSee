import fire from '../assets/fire.png';
import prot from '../assets/prot.png';
import apple from '../assets/apple.png';
import lipides from '../assets/lipides.png';

/**
 * @class
 * @description It's a class that provide methods to provide the data formatted with the modelisations classes.
 * It takes an array of objects (the data from the backend), and returns an array of objects (the same data, but
 * readable by ReCharts) */
export class Models {
  constructor(){
  }

  /**
 * It takes an array of objects, and returns an array of objects.
 * @param sessions - an array of days and duration of sessions.
 * @returns An array of objects.
 */
  getFormatedByModelsAverageSessions(sessions){
    const arrayDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const averageSessionsArray =sessions.map((averageSession) => {
      return new AverageSession(arrayDay[averageSession.day - 1], averageSession.sessionLength);
    
    });
    return averageSessionsArray;   
  }
  /**
  * It takes an array of objects and returns an array of objects.
  * @param sessions - an array of objects that contain the following properties:
  * @returns An array of DailyActivity objects.
  */
  getFormatedByModelsDailyActivity(sessions){
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

  /**
 * This function takes an object with a data property that contains an array of objects, and returns an
 * array of Performance objects, where each Performance object is created using the data from the
 * corresponding object in the array.
 * @param performances - It's an array containing the performances value for some performances kind.
 * @returns An array of objects containing the performances readable by ReCharts.
 */
  getFormatedByModelsPerformance(performances){
    const performancesArray = performances.data.map((performance) => {
      return new Performance(
        performances.kind[performance.kind],
        performance.value,
        150,
      );
    });
    return performancesArray;
  }

  /**
   * It's a method to provide the an array from the current 
   * score of the user. The array provided containg both the score part of the graph and the left to 100 part
   * @param scoreUser - the score of the user
   * @returns An array of two objects readable by ReCharts.
   */
  getFormatedByModelsDataScore(scoreUser){
    const score1 = new Score('Group B', (1 - scoreUser)*100, 'white', 'white', '0');
    const score2= new Score( scoreUser*100, scoreUser*100,'red');
    return [score1, score2 ];
  }
  
  /**
  * It's a method that provide an array of Bmi objects.
  * @param keyData - It's an object containing the following properties: 'calorieCount', 'proteinCount', 
  * 'carbohydrateCount', 'lipiCount'
  * @returns An array of Bmi objects readable by ReCharts.
  */
  getFormatedByModelsBMI(keyData){
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

/**
 * @class
 * @description It's a modelisation class that provide one average session model.
 * @param name - The name of the session
 * @param pv - The value of the session
 *  */
class AverageSession {
  constructor(name,pv) {
    this.name=name;
    this.pv=pv;
  }
}
/**
 * @class
 * @description It's a modelisation class that provide one daily activity model. 
 * @param name - the name of the day session
 * @param number - the value of units of the day session
 * @param kilogram - null if the unit is calories
 * @param calories - null if the unit is kilogram
 * */
class DailyActivity {
  constructor(name,number,kilogram,calories) {
    this.name=name;
    this.number=number;
    this.kilogram=kilogram;
    this.calories=calories; 
  }
}
/**
 * @class
 * @description It's a modelisation class that provide one performance model. 
 * @param subject - Kind of performance (intensity, etc.)
 * @param A - value of the performance
 * @fullmarl - param needed by ReCharts
 * */
class Performance{
  constructor(subject, A, fullmark){
    this.subject = subject;
    this.A= A;
    this.fullmark= fullmark;
  }
}

/**
 * @class
 * @description It's a modelisation class that provide one score model. 
 * @param name - Name of the score part
 * @param value - Value of the score part
 * @param fill - Value of the fill of the score part
 * @param stroke - Value of the stroke of the score part
 * @param fontSize - Value of the font size of the score part
 * */
class Score{
  constructor(name, value, fill, stroke,fontSize){
    this.name=name;
    this.value=value;
    this.fill=fill;
    this.stroke=stroke;
    this.fontSize=fontSize;
  }
}

/**
 * @class
 * @description It's a modelisation class that provide one body mass index model. 
 * @param value - value of the body mass index
 * @param type - type of the body mass index
 * @param picture - image to display for the body mass index
 * */
class Bmi{
  constructor(value,type,picture){
    this.value=value;
    this.type=type;
    this.picture=picture;
  }
}