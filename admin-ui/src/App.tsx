import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { WorkoutPlanList } from "./workoutPlan/WorkoutPlanList";
import { WorkoutPlanCreate } from "./workoutPlan/WorkoutPlanCreate";
import { WorkoutPlanEdit } from "./workoutPlan/WorkoutPlanEdit";
import { WorkoutPlanShow } from "./workoutPlan/WorkoutPlanShow";
import { WorkoutDayList } from "./workoutDay/WorkoutDayList";
import { WorkoutDayCreate } from "./workoutDay/WorkoutDayCreate";
import { WorkoutDayEdit } from "./workoutDay/WorkoutDayEdit";
import { WorkoutDayShow } from "./workoutDay/WorkoutDayShow";
import { ExerciseList } from "./exercise/ExerciseList";
import { ExerciseCreate } from "./exercise/ExerciseCreate";
import { ExerciseEdit } from "./exercise/ExerciseEdit";
import { ExerciseShow } from "./exercise/ExerciseShow";
import { NutritionPlanList } from "./nutritionPlan/NutritionPlanList";
import { NutritionPlanCreate } from "./nutritionPlan/NutritionPlanCreate";
import { NutritionPlanEdit } from "./nutritionPlan/NutritionPlanEdit";
import { NutritionPlanShow } from "./nutritionPlan/NutritionPlanShow";
import { TipList } from "./tip/TipList";
import { TipCreate } from "./tip/TipCreate";
import { TipEdit } from "./tip/TipEdit";
import { TipShow } from "./tip/TipShow";
import { NutritionPhaseList } from "./nutritionPhase/NutritionPhaseList";
import { NutritionPhaseCreate } from "./nutritionPhase/NutritionPhaseCreate";
import { NutritionPhaseEdit } from "./nutritionPhase/NutritionPhaseEdit";
import { NutritionPhaseShow } from "./nutritionPhase/NutritionPhaseShow";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Fitnesapp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="WorkoutPlan"
          list={WorkoutPlanList}
          edit={WorkoutPlanEdit}
          create={WorkoutPlanCreate}
          show={WorkoutPlanShow}
        />
        <Resource
          name="WorkoutDay"
          list={WorkoutDayList}
          edit={WorkoutDayEdit}
          create={WorkoutDayCreate}
          show={WorkoutDayShow}
        />
        <Resource
          name="Exercise"
          list={ExerciseList}
          edit={ExerciseEdit}
          create={ExerciseCreate}
          show={ExerciseShow}
        />
        <Resource
          name="NutritionPlan"
          list={NutritionPlanList}
          edit={NutritionPlanEdit}
          create={NutritionPlanCreate}
          show={NutritionPlanShow}
        />
        <Resource
          name="Tip"
          list={TipList}
          edit={TipEdit}
          create={TipCreate}
          show={TipShow}
        />
        <Resource
          name="NutritionPhase"
          list={NutritionPhaseList}
          edit={NutritionPhaseEdit}
          create={NutritionPhaseCreate}
          show={NutritionPhaseShow}
        />
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
