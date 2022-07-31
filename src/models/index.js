import fire from '../assets/fire.png';
import prot from '../assets/prot.png';
import apple from '../assets/apple.png';
import lipides from '../assets/lipides.png';

/**
 * @class
 *  It takes an array of objects, and returns an array of objects */
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
 * @param performances - {
 * @returns An array of objects.
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
   * It takes a number between 0 and 1 and returns an array of two objects. 
   * 
   * The first object has a label of "Group B" and a value of 100 minus the input number. 
   * 
   * The second object has a label of the input number and a value of the input number. 
   * 
   * The first object has a color of white and the second object has a color of red. 
   * 
   * The first object has a highlight color of white and the second object has a highlight color of
   * red. 
   * 
   * The first object has a stroke color of 0 and the second object has a stroke color of 0.
   * @param scoreUser - the score of the user
   * @returns An array of two objects.
   */
  getFormatedByModelsDataScore(scoreUser){
    const score1 = new Score('Group B', (1 - scoreUser)*100, 'white', 'white', '0');
    const score2= new Score( scoreUser*100, scoreUser*100,'red');
    return [score1, score2 ];
  }
  
  /**
  * It takes a keyData object as an argument and returns an array of Bmi objects.
  * </code>
  * @param keyData - 
  * @returns An array of objects.
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

/* It creates a class called AverageSession. */
class AverageSession {
  constructor(name,pv) {
    this.name=name;
    this.pv=pv;
  }
}
/* It creates a class called DailyActivity. */
class DailyActivity {
  constructor(name,number,kilogram,calories) {
    this.name=name;
    this.number=number;
    this.kilogram=kilogram;
    this.calories=calories; 
  }
}
/* A class is a blueprint for creating objects. */
class Performance{
  constructor(subject, A, fullmark){
    this.subject = subject;
    this.A= A;
    this.fullmark= fullmark;
  }
}

/* The Score class is a constructor function that creates a new object with the properties name, value,
fill, stroke, and fontSize. */
class Score{
  constructor(name, value, fill, stroke,fontSize){
    this.name=name;
    this.value=value;
    this.fill=fill;
    this.stroke=stroke;
    this.fontSize=fontSize;
  }
}

/* It creates a class called Bmi. */
class Bmi{
  constructor(value,type,picture){
    this.value=value;
    this.type=type;
    this.picture=picture;
  }
}