import Models from '../models';
export default class {
  constructor(){
    
    this.getAverageSessions = async ( setStateData) => {
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
      const averageSessions = new Models();
      const averageSessionsArray = averageSessions.getAverageSessions(data.data.sessions);
      setStateData(averageSessionsArray);
      
    };

    this.getDailyActivity = async (id, setDailyActivity) => {
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

      const dailyActivity = new Models();
      const dailyActivityArray = dailyActivity.getDailyActivity(data.data.sessions);
      setDailyActivity(dailyActivityArray);
    };

    this.getPerformance = async (id,setPerformance) => {
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
      const performance = new Models();
      const performanceArray = performance.getPerformance(data.data.sessions);
      setPerformance(performanceArray);
    };

    this.getDataScore = async (id, setScore) => {
      const score = new Models();
      const scoreArray = score.getScore(0.12);
      setScore(scoreArray);
    };

    this.getFirstName = async (id, setFirstName) => {
      setFirstName('Karl');
    };

    this.getBMI = async (id, setBMI) => {
      const keyData= {
        'calorieCount': 2500,
        'proteinCount': 90,
        'carbohydrateCount': 150,
        'lipidCount': 120
      };
      const bmi=new Models();
      const bmiArray = bmi.getBMI(keyData);
      setBMI(bmiArray);
    
    };



  }

}