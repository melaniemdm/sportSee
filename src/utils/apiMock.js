import { Models } from '../models';

/* It's a class that contains methods that return data from a database. */
const models = new Models();


/**
 *  @class 
 * ApiMock (react component)
 * @description It's a mock class that returns data in the same format as the real API.
</code> */
export class ApiMock{
  constructor(){
  }

  /**
  * It takes an array of objects, and returns an array of objects with the same keys, but with the
  * values being the average of the values of the original array.
  * @param setStateData - this is a function that is passed down from the parent component. It is used
  * to set the state of the parent component.
  */
  async getAverageSessions(id, setStateData) {
    const data = {
      'data': {
        'userId': 18,
        'sessions': [
          {
            'day': 1,
            'sessionLength': 30
          },
          {
            'day': 2,
            'sessionLength': 40
          },
          {
            'day': 3,
            'sessionLength': 50
          },
          {
            'day': 4,
            'sessionLength': 30
          },
          {
            'day': 5,
            'sessionLength': 30
          },
          {
            'day': 6,
            'sessionLength': 50
          },
          {
            'day': 7,
            'sessionLength': 50
          }
        ]
      }
    };
    const averageSessionsArray = models.getFormatedByModelsAverageSessions(data.data.sessions);
    setStateData(averageSessionsArray);
  }

  
  /**
  * I'm trying to get the data from the API and then I'm trying to set the state of the
  * dailyActivityArray with the data from the API.
  * @param id - the user id
  * @param setDailyActivity - is a function that sets the state of the dailyActivityArray
  */
  async getDailyActivity (id, setDailyActivity){
    const data={
      'data': {
        'userId': 18,
        'sessions': [
          {
            'day': '2020-07-01',
            'kilogram': 70,
            'calories': 240
          },
          {
            'day': '2020-07-02',
            'kilogram': 69,
            'calories': 220
          },
          {
            'day': '2020-07-03',
            'kilogram': 70,
            'calories': 280
          },
          {
            'day': '2020-07-04',
            'kilogram': 70,
            'calories': 500
          },
          {
            'day': '2020-07-05',
            'kilogram': 69,
            'calories': 160
          },
          {
            'day': '2020-07-06',
            'kilogram': 69,
            'calories': 162
          },
          {
            'day': '2020-07-07',
            'kilogram': 69,
            'calories': 390
          }
        ]
      }
    };


    const dailyActivityArray = models.getFormatedByModelsDailyActivity(data.data.sessions);
    setDailyActivity(dailyActivityArray);
  }

  
  /**
  * I'm trying to get the data from the API and then I'm trying to format it using the
  * models.getFormatedByModelsPerformance function.
  * @param id - the id of the user
  * @param setPerformance - is a function that sets the state of the component
  */
  async getPerformance(id,setPerformance){
    const data={
      'data': {
        'userId': 12,
        'kind': {
          '1': 'cardio',
          '2': 'energy',
          '3': 'endurance',
          '4': 'strength',
          '5': 'speed',
          '6': 'intensity'
        },
        'data': [
          {
            'value': 80,
            'kind': 1
          },
          {
            'value': 120,
            'kind': 2
          },
          {
            'value': 140,
            'kind': 3
          },
          {
            'value': 50,
            'kind': 4
          },
          {
            'value': 200,
            'kind': 5
          },
          {
            'value': 90,
            'kind': 6
          }
        ]
      }
    };

    const performanceArray = models.getFormatedByModelsPerformance(data.data.sessions);
    setPerformance(performanceArray);
  }

  /**
   * It gets the score from the database and sets the score in the state.
   * @param id - the id of the user
   * @param setScore - this is a function that is passed in from the parent component.
   */
  async getDataScore(id, setScore) {
 
    const scoreArray = models.getFormatedByModelsScore(0.12);
    setScore(scoreArray);
  }

  /**
  * The function takes in an id and a setFirstName function, and then calls the setFirstName function
  * with the string 'Karl'.
  * @param id - The id of the user
  * @param setFirstName - This is a function that will be used to set the first name.
  */
  async getFirstName(id, setFirstName) {
    setFirstName('Karl');
  }

  /**
 * The function getBMI() is an async function that takes in two parameters, id and setBMI. The function
 * then creates a constant variable called keyData that is an object with four properties. The function
 * then creates a constant variable called bmiArray that is equal to the result of calling the
 * getFormatedByModelsBMI() function and passing in the keyData object as an argument. The function
 * then calls the setBMI() function and passes in the bmiArray as an argument.
 * @param id - the id of the user
 * @param setBMI - a function that sets the state of BMI
 */
  async getBMI(id, setBMI){
    const keyData= {
      'calorieCount': 2500,
      'proteinCount': 90,
      'carbohydrateCount': 150,
      'lipidCount': 120
    };
  
    const bmiArray = models.getFormatedByModelsBMI(keyData);
    setBMI(bmiArray);

  }

}