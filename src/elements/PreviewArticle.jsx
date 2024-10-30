import React, { Component } from "react";

export default class PreviewArticle extends Component {
  render() {
    return (
      <div className="w-full p-4 border">
        <div className="flex gap-4">
          <img src="" alt="" className="w-24 h-24 border object-cover" />
          <div className="flex flex-col">
            <div className="flex-1">
              <h3>Titre de l'article</h3>
              <p>Description de l'article</p>
            </div>
            <div className="flex gap-2">
              <button>Voir</button>
              <button>Modifier</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
