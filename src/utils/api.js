import axios from "axios";
import fire from "../assets/fire.png";
import prot from "../assets/prot.png";
import apple from "../assets/apple.png";
import lipides from "../assets/lipides.png";


/**
 * It takes an id, and a setStateData function as parameters, and then it makes an axios call to an
 * API, and then it maps the data from the API call to a new array, and then it sets the state of the
 * component with the setStateData function.
 * @param id - the id of the user
 * @param setStateData - is a function that sets the state of the component
 */
export const getAverageSessions = async (id, setStateData) => {
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];
  const { data } = await axios.get(
    `http://localhost:3000/user/` + id + ` /average-sessions`
  );
  const averageSessionsArray = data.data.sessions.map((averageSession) => {
    return {
      name: arrayDay[averageSession.day - 1],
      pv: averageSession.sessionLength,
    };
  });
  setStateData(averageSessionsArray);
};

/**
 * It takes the data from the API and maps it to an array of objects.
 * @param id - the user id
 * @param setDailyActivity - is a function that sets the state of the dailyActivity
 */
export const getDailyActivity = async (id, setDailyActivity) => {
  const { data } = await axios.get(
    `http://localhost:3000/user/` + id + `/activity`
  );

  const activitiesArray = data.data.sessions.map((activity) => {
    return {
      name: activity.day,
      number:activity.day.split('-')[2],
      kilogram: activity.kilogram,
      calories: activity.calories,
    };
  });
  setDailyActivity(activitiesArray);
};
/**
 * It gets the performance of a user from the database and sets it to the state.
 * @param id - the id of the user
 * @param setPerformance - a function that sets the state of the component
 */
export const getPerformance = async (id, setPerformance) => {
  const { data } = await axios.get(
    "http://localhost:3000/user/" + id + "/performance"
  );

  const performancesArray = data.data.data.map((performance) => {
    return {
      subject: data.data.kind[performance.kind],
      A: performance.value,
      fullMark: 150,
    };
  });
  setPerformance(performancesArray);
};


/**
 * It takes an id, and a setScore function as parameters, and then it makes an axios call to an API,
 * and then it sets the state of the score variable to the data it gets from the API.
 * @param id - the id of the user
 * @param setScore - a function that sets the state of the score
 */
export const getDataScore = async (id, setScore) => {
    const { data } = await axios.get(`http://localhost:3000/user/` + id);
  const scoreUser = data.data.todayScore ? data.data.todayScore : data.data.score;
  const dataScore = [
    { name: "Group B", value: (1 - scoreUser)*100,"fill": "white", "stroke":"white", "fontSize":"0"},
    { name: scoreUser*100, value: scoreUser*100,"fill": "red" },
     ];
  setScore(dataScore)
      }
  
    
/**
 * It gets the first name of a user from the database and sets it to the state.
 * @param id - the id of the user
 * @param setFirstName - is a function that sets the firstName state
 */
    export const getFirstName = async (id, setFirstName) => {
      const { data } = await axios.get(`http://localhost:3000/user/` + id);
      setFirstName(data.data.userInfos.firstName);
        };

  /**
   * I'm using axios to get data from my API, then I'm pushing the data into an array and I'm setting
   * the state of my component with the array.
   * </code>
   * @param id - the id of the user
   * @param setBMI - a function that sets the state of the BMI array
   */
      export  const getBMI = async (id, setBMI) => {
          const { data } = await axios.get(`http://localhost:3000/user/` + id);
         
          const keyData = data.data.keyData;
      
          let bmiArray = [];
          bmiArray.push({
            value: keyData.calorieCount,
            type: "Calories",
            picture: fire,
          });
          bmiArray.push({
            value: keyData.proteinCount,
            type: "Protéines",
            picture: prot,
          });
          bmiArray.push({
            value: keyData.carbohydrateCount,
            type: "Glucides",
            picture: apple,
          });
          bmiArray.push({
            value: keyData.lipidCount,
            type: "Lipides",
            picture: lipides,
          });
          setBMI(bmiArray);
        };