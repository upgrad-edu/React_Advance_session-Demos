class App extends React.Component {
  reRender = () => {
    // calling the forceUpdate() method
    this.forceUpdate();
  };
  render() {
     console.log('Component is re-rendered');
    return (
      <div>
        <h2>Upgrad</h2>
        <button onClick={this.reRender}>Click To Re-Render</button>
      </div>
    );}}
