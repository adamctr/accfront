import React, { Component } from "react";
import Tag from "../blog/Tags";
import PreviewMail from "../elements/PreviewMail";
import Topic from "../elements/Topic";

export default class CreateMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "informatif", // Valeur par défaut pour le type d'article
      numberOfTopics: 1, // Valeur par défaut pour l'input number
    };
  }

  handleChangeType = (event) => {
    this.setState({ type: event.target.value });
  };

  handleChangeNumber = (event) => {
    const value = parseInt(event.target.value, 10);
    // Assure que la valeur est toujours un nombre positif (ou zéro si nécessaire)
    if (value >= 0) {
      this.setState({ numberOfTopics: value });
    }
  };

  render() {
    return (
      <>
        {/* Filtres */}
        <div className="flex flex-col gap-4">
          <div className="">
            <label>
              <input
                type="radio"
                value="informatif"
                checked={this.state.type === "informatif"}
                onChange={this.handleChangeType}
              />
              Informatif
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="promotionnel"
                checked={this.state.type === "promotionnel"}
                onChange={this.handleChangeType}
              />
              Promotionnel
            </label>
          </div>

          <Tag />

          <div className="flex gap-2 items-center">
            <p>Je veux générer</p>
            <input
              type="number"
              value={this.state.numberOfTopics}
              onChange={this.handleChangeNumber}
              className="w-12 border p-1 text-center"
              min="0"
            />
            <p>sujets.</p>
          </div>

          <button>Générer les sujets</button>

          <div className="flex flex-col gap-4">
            <h3 className="my-4 subtitle">Sujets d'articles</h3>
            <div className="flex flex-col gap-2">
              <Topic></Topic>
              <Topic></Topic>
              <Topic></Topic>
            </div>
            <button>Générer les articles</button>
            <PreviewMail></PreviewMail>
          </div>
        </div>
      </>
    );
  }
}
