import './App.css';
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing";
class App extends React.Component {
  render() {
      return(
          <div className="App">
              <Routes>
                  <Route path="/" element={<Navigate to="/amii" />} />

                  <Route path="/amii" element={<Landing/> } />
              </Routes>
          </div>
      )
  }
}
export default App;
