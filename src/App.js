import './App.css';

import React, { Component,useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0,
  }

  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar/>
          <Routes>
            <Route exact path="/General" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="home" pageSize={5} country="in" category="general"/>}/>
            <Route exact path="/General" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general"/>}/>
            <Route exact path="/Business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={5} country="in" category="business"/>}/>
            <Route exact path="/Entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
            <Route exact path="/Health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={5} country="in" category="health"/>}/>
            <Route exact path="/Science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={5} country="in" category="science"/>}/>
            <Route exact path="/Sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={5} country="in" category="sports"/>}/>
            <Route exact path="/Technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={5} country="in" category="technology"/>}/>
          </Routes>
        </Router>
        
      </div>
    )
  }
}

