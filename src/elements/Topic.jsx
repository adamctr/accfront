import React, { Component } from "react";

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicText: "Topic", // Valeur initiale de l'input texte
    };
  }

  handleInputChange = (event) => {
    this.setState({ topicText: event.target.value });
  };

  render() {
    return (
      <div className="flex p-4 border ml-4 items-center">
        <input
          type="text"
          value={this.state.topicText}
          onChange={this.handleInputChange}
          className="flex-1  px-2 py-1 mr-2"
        />
        <button className="px-2 py-1 bg-red-500 text-white rounded">X</button>
      </div>
    );
  }
}
