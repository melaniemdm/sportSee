import Models from '../models';
export default class {
  constructor(){
    
    this.getAverageSessions = async (id, setStateData) => {
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
      setDailyActivity([
        {
          'name': '2020-07-01',
          'number': '01',
          'kilogram': 80,
          'calories': 240
        },
        {
          'name': '2020-07-02',
          'number': '02',
          'kilogram': 80,
          'calories': 220
        },
        {
          'name': '2020-07-03',
          'number': '03',
          'kilogram': 81,
          'calories': 280
        },
        {
          'name': '2020-07-04',
          'number': '04',
          'kilogram': 81,
          'calories': 290
        },
        {
          'name': '2020-07-05',
          'number': '05',
          'kilogram': 80,
          'calories': 160
        },
        {
          'name': '2020-07-06',
          'number': '06',
          'kilogram': 78,
          'calories': 162
        },
        {
          'name': '2020-07-07',
          'number': '07',
          'kilogram': 76,
          'calories': 390
        }
      ]);
    };

    this.getPerformance = async (id, setPerformance) => {
      setPerformance([
        {
          'subject': 'cardio',
          'A': 80,
          'fullMark': 150
        },
        {
          'subject': 'energy',
          'A': 120,
          'fullMark': 150
        },
        {
          'subject': 'endurance',
          'A': 140,
          'fullMark': 150
        },
        {
          'subject': 'strength',
          'A': 50,
          'fullMark': 150
        },
        {
          'subject': 'speed',
          'A': 200,
          'fullMark': 150
        },
        {
          'subject': 'intensity',
          'A': 90,
          'fullMark': 150
        }
      ] );
    };

    this.getDataScore = async (id, setScore) => {
      setScore();
    };

    this.getFirstName = async (id, setFirstName) => {
      setFirstName([
        {
          'name': 'Group B',
          'value': 88,
          'fill': 'white',
          'stroke': 'white',
          'fontSize': '0'
        },
        {
          'name': 12,
          'value': 12,
          'fill': 'red'
        }
      ]);
    };

    this.getBMI = async (id, setBMI) => {
      setBMI([
        {
          'value': 1930,
          'type': 'Calories',
          'picture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA5CAYAAAB55gg1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVGhD7Zq9TgJBEIBnFzAEAr4A+gJARQdPgJWdT2JHRydUllSUdtDR0cET8AZ0dGqjXu7Wnb0hHAH8wVncI/slhJmhmY+ZW1BOBEGg4IyQ9Hw2nJ3QZuXe3gDe3wGiyKROk8kA5PMAFxdU2CCCjw8Fr68AYUilFIFi5TIlMdJMJo0yCPaN/SeQZs3SzI6QSvmpjf0nrnt/bLuOF3IdL+Q6Xsh1vJDreCHXsSokZjOA5ZKy02BXaDKBzO0twPMzVexjXUjoCcnBgCr2sSYkHx6MDCKenszzKbAiJDsdkP0+ZVoIxXDtcFq9HlXtwC5kZPasmHh5MTL4EPM5VflhFcI1O3S9CHyNVs/mlESwWvH8U0GvU7bRoOR7wukUVK1G2R+5vNTvUjwbtgn99l23tXY8QvqCX6/TTxGLBUW8sAgd1Rwd6dzwTAh3+BBXVxScBhYhdahpXQ9HI1DVKhUSVCoU8MI2IdVsUkKUyxAOh6CuryEcj3cmFd3cUMQLj5Amur+nKMZMpl6PEy0cPj7GMaLlVLtNCS9sQqrVgqjbjeO7u40Mga+bnz5oDW3B98FKmL+BhNhdQQ0e7TgZ9dUhcgyJD1Z2oX8hIcS2cq7ghVzHC7mOF3IdL+Q6XshJ9HfHNRKyWQpTCva/JVQobBVSBfZdLFISI80tWqWSjlK2fdjvnr637zkNgnTcAIgSuRwl2/ibaF3HC7kNwCcgsKF1RqVs6wAAAABJRU5ErkJggg=='
        },
        {
          'value': 155,
          'type': 'Protéines',
          'picture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIOSURBVGhD7Zq9S8NAFMBfPqi0FRQRBYWOfozunbvq/+Ds3+DsH9HZVWfXzjq4iIJDB0FNB/GjrWkS77VXyMc1COYlefF+cCQ5MtyP9/Lucpzhum4AFcaU18qiBbmz8Buc+ABjD0BcSo9pACyJUNmKcCkFvyYAIyHHjbotmiUfJAlnrnLIUDH2hOA3h5xMYZgm6Ak5n/msGIjxhx0igsyDp0RRd6qFFuSOFuSOFuSOFuSOFuSOFqSm92xA98ECZyw7MqZQwbu3mRxKnt7YJJKFCjojeSPAnQSU7H8asicbChUcjKMyKHn1lO2Qchc8fzSnUbrsm3AhWpyDtWy3FCK7aq74pX935QMB3XsTei9JqeMdHxpWAA0bYG/l74KrNRE5mRykglhEMOX6H7NnJ5aSCMq1N7LdLAkLkqUopuDZrQXXA2MqppLDiLWa2aZkHBJBlFJ9X3GwqOC7lJAI/rYSHrZ8OBKNEhLB19D8tohdUUyo5RASwTJBIthaljcpUBeXOSSCna301MPq2dlmLIiTNRYQFSh3su/B+lI+gqQTvTOaTRfzvwQUb28G5HK5rWSKIpeVTFnQgtzRgtzRgtzRgtz5X4IW7e5BboQ1IoK4fuMuaQkjI+SQSNH4aT1u1GNGCcGaEGwwlMSoNcW/Jo4/jPK8KOKJXjwUi63sYFrigdhwas5ZKFgVEilaLQB+AIzJtoTkFp5YAAAAAElFTkSuQmCC'
        },
        {
          'value': 290,
          'type': 'Glucides',
          'picture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA5CAYAAABnLziGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJdSURBVGhD7ZpdbtNAEIBn1tCG9EdAVfWhD0g8AQcADtALcICiXoAD0Gu0ByjiHXEBDgAXKI/wwAtQIShpQ413mLFHjaPENAm7S7zZ78Uzqzzsl51djy1jnucEC4DRa/QsjGhD6fKQPQeyhebzC5qMl2uZI77+hVFRe8aCPXZt19bFbJWFu5qNMly6tg9U/GydpFDN+0KzUYZEy5VsMVQ0z38gSr/ll5q0FMobHWqi7SvXaViY20sSjY0kGhtJNDaSaGwkUe/YUw3CEF40/wTm4y6YD7s6EIawoiLJgth7B7B8TwfDEFQUT44AWRaubwNtPtPRMIQV5X1J3Ydg77wEWtrW0TAM3hnZnJ9Zv5WhM+TA6R9XMQte8us9QPEDIFt3XsJ4bUNeIGk2wJsonrwA/HJQrqJAZg1g9RHA+XFVvgqt74Dd2i/L2QVBRfHzIZivB5pdDXXug737WrN/o0nUyx7F7680mgzk8sbTN5r5wb2oTLpWmhPTe6uBH9yLFrN1PGj5cPKIe9EZbxvk6DBqwr2oTFhO2GnhA8knXg4je/OJRhMindLajiZ+8CIKt/c0mAya9o+ZAS+i0t7ZreeaXQGvpg3Q9/pZUYY29oBuPdWM4X0rfS7VWz6R5L43BH57XQbl/ih97cpjoKw6pMoxofPgcswVwXvd/0XQFnAeSaKxkURjI4nGRhKNjQUUxbida6LSH2IVtxbWGdPnCsPLaFY0aClZ8/yHRDHr8kjzp6BzDc8dzQ1NRhk8ptUge8GPbX2O2vARJJeq6bDkkubjGSsaI3EftTWSaFwA/AGKXMl6piSPqgAAAABJRU5ErkJggg=='
        },
        {
          'value': 50,
          'type': 'Lipides',
          'picture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA5CAYAAAB9E9gIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJJSURBVGhD7Zq9T9tAFMDfXUITlaodqkyFhaUwlQ2xdGjLRtfObNmQ+EsqdUBiY2aFjXbpAOrWLv0aujRMkKVBQOTg4z37JXYcgwK+E3nu/aQofk4i3U/vwxfpVBAEBkqI5vfSUVqx0VLsXQJchhxMMBXMSbXCwSiJGMmcngOEglpOo9yjeiyZIb4TolRHmBTRX3dOhcVipxcARuhwpHWfdTlI0NEHEnrqJmguZBKjoSdcqk+m4Ea7riR4MWl4MWl4MWl4MWl4MWm4FaNdd7uTvHJ24a5QwdmFif5g2uTgO6jDn6B+t/hGgplpgHmzCLC8wHcs8WQa06Q4cCG2vQ/68Ed8/bB2bZbM60Uw715yZIGMmN1S3Pk8kKKFh++bYF7MRXEW9ekrKPy+K+yJtf+BxsUOQdk6TzJmsPzCrXUwr7AUEZKj37nAmpj6OCxFi9YbW9hnR3wH6UukZNUBl61l7GWsdcIX10OSuvkBB0tKhqalA9xMxfvA6fCYIOxkbO9LoV6Jnms8UO6Mi+eY2twD9e0PR7eHpqVZW+Hojrh6QKsCY9s8fcxXBXC+87gvnIlRn/1KPbPG5fkzMKtLHBTAWSnuohjK3RbqLeqxwmTErI1783ZpsFUaF7M8b0cqB+s9pv4ej/e/C3f+ZrbBgQX+l+FR2p2HF5OGF5OGF5OGF5NGicVS25AyEYsp4XJ0WCyTIB1J1aY4FEqtyhcJcY/VUSznaJwI6Mxi/QEHCcMHMbtB/Jr0Q2NUZZSIKcwUJSUHf9hZGl5MFgBXbz7vFaRFMDgAAAAASUVORK5CYII='
        }
      ]);
    
    };



  }

}