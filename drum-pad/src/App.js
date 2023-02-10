import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressHandler);
  }

  clickHandler = (event) => {
    let clickBtn = event.target.lastChild.data;
    console.log(event.target.lastChild.data);
    document.getElementById(clickBtn).play();
    this.setState(() => {
      return { display: event.target.id };
    });
  };

  keyPressHandler = (event) => {
    let key = event.key.toUpperCase();
    if ("QWEASDZXC".includes(key)) {
      document.getElementById(key).play();
    } else {
      return;
    }
    this.setState(() => {
      return { display: document.getElementById(key).parentElement.id };
    });
  };

  render() {
    return (
      <div className="App container-fluid bg-1 p-5">
        <h1 className="title">DRUM KIT</h1>
        <div className="row bg-2 shadow-lg p-2" id="drum-machine">
          <div className="col-sm-8">
            <div className="row m-1">
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Clap Snare"
                onClick={this.clickHandler}
                onKeyDown={this.keyPressHandler}
              >
                <audio
                  id="Q"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/30[kb]clapsnare.wav.mp3"
                ></audio>
                Q
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Cymbal"
                onClick={this.clickHandler}
              >
                <audio
                  id="W"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/29[kb]606-cymbal8.wav.mp3"
                ></audio>
                W
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Kick"
                onClick={this.clickHandler}
              >
                <audio
                  id="E"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/56[kb]606-kick1.wav.mp3"
                ></audio>
                E
              </button>
            </div>
            <div className="row m-1">
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Cow Bell"
                onClick={this.clickHandler}
              >
                <audio
                  id="A"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/18[kb]80s-COWBELL1.wav.mp3"
                ></audio>
                A
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Tambourine"
                onClick={this.clickHandler}
              >
                <audio
                  id="S"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/24[kb]80s-TAMB1.wav.mp3"
                ></audio>
                S
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Clap"
                onClick={this.clickHandler}
              >
                <audio
                  id="D"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/38[kb]909-Clap-1.wav.mp3"
                ></audio>
                D
              </button>
            </div>
            <div className="row m-1">
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Crash"
                onClick={this.clickHandler}
              >
                <audio
                  id="Z"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/46[kb]909-Crash-HDA.wav.mp3"
                ></audio>
                Z
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Hi Hat Closed"
                onClick={this.clickHandler}
              >
                <audio
                  id="X"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/7[kb]909-HiHatClosed-D2.wav.mp3"
                ></audio>
                X
              </button>
              <button
                className="btn btn-secondary drum-pad col-sm-4 border border-dark"
                id="Hi Hat Open"
                onClick={this.clickHandler}
              >
                <audio
                  id="C"
                  src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/21[kb]909-HiHatOpen-D0.wav.mp3"
                ></audio>
                C
              </button>
            </div>
          </div>
          <div
            className="col-sm-4 bg-3 rounded d-flex align-items-center justify-content-center"
            id="display"
          >
            {this.state.display}
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
