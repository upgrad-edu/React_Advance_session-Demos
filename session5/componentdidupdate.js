import React from 'react';
class App extends React.Component {
  
  // Initializing the state
  state = {
    name: 'GFG',
  };
  
  componentDidMount() {
  
    // Changing the state after 1 sec
    setTimeout(() => {
      this.setState({ name: 'GeeksForGeeks' });
    }, 1000);
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
  
    // Displaying the previous value of the state
    document.getElementById('prev').innerHTML =
      'Previous Name: ' + prevState.name;
  }
  
  componentDidUpdate() {
  
    // Displaying the current value of the state
    document.getElementById('new').innerHTML =
      'Current Name: ' + this.state.name;
  }
  
  render() {
    return (
      <div>
        <div id="prev"></div>
        <div id="new"></div>
      </div>
    );
  }
}
  
export default App;


