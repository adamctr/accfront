import React, { Component } from "react";

export default class PreviewArticle extends Component {
  render() {
    return (
      <div className="w-full p-4 border">
        <div className="flex gap-4">
          <img src="" alt="" className="w-24 h-24 border object-cover" />
          <div className="flex flex-col">
            <div className="flex-1">
              <h4>Sujet du mail</h4>
              <div>
                Type: <span className="font-bold">Informatif</span>
              </div>
              <div>
                Status: <span className="font-bold">Brouillon</span>
              </div>
            </div>
            <div className="flex gap-2 my-2">
              <button>Voir</button>
              <button>Modifier</button>
              <button className="bg-red-600">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
