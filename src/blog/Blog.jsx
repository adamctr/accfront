import React, { Component } from "react";
import Tag from "./Tags";
import PreviewArticle from "../elements/PreviewArticle";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "informatif", // Valeur par défaut pour le type d'article
      status: "brouillon", // Valeur par défaut pour le statut de l'article
    };
  }

  handleChangeType = (event) => {
    this.setState({ type: event.target.value });
  };

  handleChangeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  render() {
    return (
      <>
        <div className="flex flex-col gap-4">
          <Link to="/createarticle">Créer un article</Link>
          <Link to="/editarticle">Editer un article</Link>
        </div>

        {/* Filtres */}

        <div className="my-4">
          <h2>Type d'article</h2>
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

        <div className="my-4">
          <h2>Statut de l'article</h2>
          <label>
            <input
              type="radio"
              value="brouillon"
              checked={this.state.status === "brouillon"}
              onChange={this.handleChangeStatus}
            />
            Brouillon
          </label>
          <label className="ml-4">
            <input
              type="radio"
              value="terminé"
              checked={this.state.status === "terminé"}
              onChange={this.handleChangeStatus}
            />
            Terminé
          </label>
        </div>

        <Tag />

        {/* Preview Articles */}
        <div className="my-8 flex flex-col gap-4">
          <h1 className="subtitle">Les articles de Blogs</h1>
          <PreviewArticle />
        </div>
      </>
    );
  }
}
