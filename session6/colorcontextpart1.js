import React, { Component } from 'react'

const ColorContext = React.createContext()

class ColorContextProvider extends Component {
  // Context state
  state = {
    color:""
  }

  // Method to update state
  setColor = (color) => {
    this.setState((prevState) => ({ color}))
  }

  render() {
    const { children } = this.props
    const { color } = this.state


    return (
      <ColorContext.Provider
        value={{
          color,
          this.setColor,
        }}
      >
        {children}
      </ColorContext.Provider>
    )
  }
}

export default ColorContext

export { ColorContextProvider }
