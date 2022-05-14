import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      gender: null,
      height: null,
      homeWorld: null,
      imageURL: null,
    };
  }

  getRandomCharacter() {
    const randomNumber = Math.ceil(Math.random() * 82);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          gender: data.gender,
          height: data.height,
          homeWorld: data.homeworld,
          imageURL: data.image,
        });
      });
  }

  render() {
    return (
      <div className="character-details">
        <h3>Character Details</h3>
        {this.state.loadedCharacter && (
          <>
            <img
              src={this.state.imageURL}
              width="150px"
              height="auto"
              alt="Character"
              className="character-img"
            />
            <p className="character-name">Name: {this.state.name}</p>
            <p className="character-gender">Gender: {this.state.gender}</p>
            <p className="character-height">Height: {this.state.height}m</p>
            <p className="character-hw">Homeworld: {this.state.homeWorld}</p>
          </>
        )}
        <button
          type="button"
          className="btn"
          onClick={(e) => {
            e.target.classList.add("btn-clicked");
            this.getRandomCharacter();
            setTimeout(() => {
              e.target.classList.remove("btn-clicked");
            }, 300);
          }}
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

export default StarWars;