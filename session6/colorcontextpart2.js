import ColorContext from './ColorContext'

class Page extends Component {
  static contextType = ColorContext;

  render() {
    const { color, setColor } = this.context

    return (
      <div>
        <button
          onClick={() => {
            const newColorValue= "black";

            setColor (newColorValue)
          }}
        >
          Update Color
        </button>
        <p>{`Current Color Value: ${color}`}</p>
      </div>
    )
  }
}
