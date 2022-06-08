const user = {
  data: {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
};
export function getUser(id) {
  return user;
}
export function getActivity(id) {
  return activity;
}

export function getEverageSessions(id) {
  return averageSessions;
}
export function getPerformance(id) {
  return performance;
}
const activity = {
  data: {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 69,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 70,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 70,
        calories: 500,
      },
      {
        day: "2020-07-05",
        kilogram: 69,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 69,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 69,
        calories: 390,
      },
    ],
  },
};

const averageSessions = {
  data: {
    userId: 18,
    sessions: [
      {
          name:"L",
        day: 1,
        sessionLength: 30,
      },
      {
        name:"M",
        day: 2,
        sessionLength: 40,
      },
      {
        name:"M",
        day: 3,
        sessionLength: 50,
      },
      {
        name:"J",
        day: 4,
        sessionLength: 30,
      },
      {
        name:"V",
        day: 5,
        sessionLength: 30,
      },
      {
        name:"S",
        day: 6,
        sessionLength: 50,
      },
      {
        name:"D",
        day: 7,
        sessionLength: 50,
      },
    ],
  },
};

const performance = {
  data: {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
};
