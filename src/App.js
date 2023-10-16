
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
// import Loadingline from './component/Loadingline';
function App() {
  let page=8;
  let apikey= "a08faf018052463b9f448480d814d134"//process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(10);
  return (
    <div>     
      <Router>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general1" pageSize={page} apikey={apikey} country='us' category='general'/></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={page} apikey={apikey} country='us' category='general'/></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={page} apikey={apikey} country='us' category='business'/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={page} apikey={apikey} country='us' category='entertainment'/></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={page} apikey={apikey} country='us' category='health'/></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={page} apikey={apikey} country='us' category='science'/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={page} apikey={apikey} country='us' category='sports'/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={page} apikey={apikey} country='us' category='technology'/></Route>
        </Switch>
      </Router>
      {/* {document.body.style.backgroundColor= '#9ed0e7'} */}
    </div>
  );
}


export default App;
