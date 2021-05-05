import "./App.css";
import Myprofile from "./profile/profile";
import { Button } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Myprofile
                fullName={"Galileo Galilei"}
                bio={"Fadher of science"}
                profession={"Mathematician"}
            >
                <img
                    id="Galileo"
                    src="/galileo-image.jpg"
                    alt="/galileo"
                    width="300"
                    height="250"
                ></img>
            </Myprofile>
        </div>
    );
}

export default App;
