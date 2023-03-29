import logo from "./logo.svg"
import "./App.css"
import Slider from "./components/slider"

function App() {
  const containerstyles = {
    height: "300px",
    width: "700px",
    marginTop: "15%",
    marginLeft: "30%",
  }

  const images = ["image1.png", "image2.png", "image3.png", "image4.png"]
  return (
    <div className="container" style={containerstyles}>
      <Slider images={images} />
    </div>
  )
}

export default App
