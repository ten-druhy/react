import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import { Clock } from "./components/Clock/Clock";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  state: {
    fullDayFormat: boolean
    drawBackground: boolean
    drawNumbers: boolean
    drawMinuteMarkings: boolean
    draw5MinuteMarkings: boolean
    drawMinuteHand: boolean
    drawHourHand: boolean
    drawsecondHand: boolean
    drawMinutepath: boolean
    drawHourpath: boolean
    drawsecondpath: boolean
    radius: number
  }
  constructor(props: any) {
    super(props);
    this.state = {
      fullDayFormat: true,
      drawBackground: true,
      drawNumbers: true,
      drawMinuteMarkings: true,
      draw5MinuteMarkings: true,
      drawMinuteHand: true,
      drawHourHand: true,
      drawsecondHand: true,
      drawMinutepath: true,
      drawHourpath: true,
      drawsecondpath: true,
      radius: 250
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <div className="flex-item">
                <Clock
                  fullDayFormat={this.state.fullDayFormat}
                  drawBackground={this.state.drawBackground}
                  drawNumbers={this.state.drawNumbers}
                  drawMinuteMarkings={this.state.drawMinuteMarkings}
                  draw5MinuteMarkings={this.state.draw5MinuteMarkings}
                  drawMinuteHand={this.state.drawMinuteHand}
                  drawHourHand={this.state.drawHourHand}
                  drawsecondHand={this.state.drawsecondHand}
                  drawMinutepath={this.state.drawMinutepath}
                  drawHourpath={this.state.drawHourpath}
                  drawsecondpath={this.state.drawsecondpath}
                  radius={this.state.radius} />
              </div>
              <div className="flex-item flex-column">
                <span className="item">
                  <input type="checkbox" name="full-day-checkbox" id="full-day-checkbox" checked={this.state.fullDayFormat} onChange={(e) => { this.setState({ fullDayFormat: e.target.checked }) }} />
                  <label htmlFor="full-day-checkbox">24H format</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawBackground-checkbox" id="drawBackground-checkbox" checked={this.state.drawBackground} onChange={(e) => { this.setState({ drawBackground: e.target.checked }) }} />
                  <label htmlFor="drawBackground-checkbox">Draw background</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawNumbers-checkbox" id="drawNumbers-checkbox" checked={this.state.drawNumbers} onChange={(e) => { this.setState({ drawNumbers: e.target.checked }) }} />
                  <label htmlFor="drawNumbers-checkbox">Draw numbers</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawMinuteMarkings-checkbox" id="drawMinuteMarkings-checkbox" checked={this.state.drawMinuteMarkings} onChange={(e) => { this.setState({ drawMinuteMarkings: e.target.checked }) }} />
                  <label htmlFor="drawMinuteMarkings-checkbox">Draw minute intervals</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="draw5MinuteMarkings-checkbox" id="draw5MinuteMarkings-checkbox" checked={this.state.draw5MinuteMarkings} onChange={(e) => { this.setState({ draw5MinuteMarkings: e.target.checked }) }} />
                  <label htmlFor="draw5MinuteMarkings-checkbox">Draw 5 minute intervals</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawMinuteHand-checkbox" id="drawMinuteHand-checkbox" checked={this.state.drawMinuteHand} onChange={(e) => { this.setState({ drawMinuteHand: e.target.checked }) }} />
                  <label htmlFor="drawMinuteHand-checkbox">Draw minutes hand</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawHourHand-checkbox" id="drawHourHand-checkbox" checked={this.state.drawHourHand} onChange={(e) => { this.setState({ drawHourHand: e.target.checked }) }} />
                  <label htmlFor="drawHourHand-checkbox">Draw hours hand</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawsecondHand-checkbox" id="drawsecondHand-checkbox" checked={this.state.drawsecondHand} onChange={(e) => { this.setState({ drawsecondHand: e.target.checked }) }} />
                  <label htmlFor="drawsecondHand-checkbox">Draw seconds hand</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawMinutepath-checkbox" id="drawMinutepath-checkbox" checked={this.state.drawMinutepath} onChange={(e) => { this.setState({ drawMinutepath: e.target.checked }) }} />
                  <label htmlFor="drawMinutepath-checkbox">Draw minutes path</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawHourpath-checkbox" id="drawHourpath-checkbox" checked={this.state.drawHourpath} onChange={(e) => { this.setState({ drawHourpath: e.target.checked }) }} />
                  <label htmlFor="drawHourpath-checkbox">Draw hours path</label>
                </span>
                <span className="item">
                  <input type="checkbox" name="drawsecondpath-checkbox" id="drawsecondpath-checkbox" checked={this.state.drawsecondpath} onChange={(e) => { this.setState({ drawsecondpath: e.target.checked }) }} />
                  <label htmlFor="drawsecondpath-checkbox">Draw seconds path</label>
                </span>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;