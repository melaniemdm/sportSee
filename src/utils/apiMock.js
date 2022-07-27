import Models from '../models';

const models = new Models();
export default class {
  constructor(){
    

  }

  /* A function that is being called in the constructor. */
  async getAverageSessions( setStateData) {
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

    const averageSessionsArray = models.getAverageSessions(data.data.sessions);
    setStateData(averageSessionsArray);
  
  }

  /* A function that is being called in the constructor. */
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


    const dailyActivityArray = models.getDailyActivity(data.data.sessions);
    setDailyActivity(dailyActivityArray);
  }

  /* A function that is being called in the constructor. */
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

    const performanceArray = models.getPerformance(data.data.sessions);
    setPerformance(performanceArray);
  }

  /* A function that is being called in the constructor. */
  async getDataScore(id, setScore) {
 
    const scoreArray = models.getScore(0.12);
    setScore(scoreArray);
  }

  /* A function that is being called in the constructor. */
  async getFirstName(id, setFirstName) {
    setFirstName('Karl');
  }

  /* A function that is being called in the constructor. */
  async getBMI(id, setBMI){
    const keyData= {
      'calorieCount': 2500,
      'proteinCount': 90,
      'carbohydrateCount': 150,
      'lipidCount': 120
    };
  
    const bmiArray = models.getBMI(keyData);
    setBMI(bmiArray);

  }





}