import React, { useState } from "react";
import { setData as setDataFromRedux } from "./redux-state/reducers/data";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Head from "./components/views/global/Head";
import Plan from "./components/pages/Plan";
import { Route, Routes } from "react-router-dom";

function App() {

  const [ ,setShowPage ] = useState('main')

  const data = useSelector(state => state.dataReducer.data);
  const dispatch = useDispatch();
  const setData = (param) => {dispatch(setDataFromRedux(param))}


  


  return (
    <React.Fragment>

      <Head action={setShowPage}></Head>
      <Routes>
        <Route
          path={'/main'}
          element={<Main action={setData}/>}
        />
        <Route
          path={'/stat/:viewType'}
          element={<Stat statData={data}/>}
        />
        <Route
          path={'/plan'}
          element={<Plan statData={data}/>}
        />
        <Route
          path={'*'}
          element={<Main action={setData}/>}
        />
      </Routes>
    </React.Fragment>
  )
};


export default App;
