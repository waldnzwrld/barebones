import '../App.css';
import axios from 'axios';
import React from 'react';

class Home extends React.Component {
  state = {
    appName: ''
  }

  // DB has a plain ol js object named "BareBones" with an id of 1
  getAppName = () => { axios.get('/api/pojso/1').then(res => this.setAppName((res.data))) }
  setAppName = (name) => { this.setState({ appName: name }) }

  componentDidMount() {
    this.getAppName()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.appName}
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
