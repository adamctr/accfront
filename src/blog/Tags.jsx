import React, { Component } from "react";

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["React", "JavaScript", "CSS", "Node.js", "Frontend"], // Tags existants
      selectedTags: [], // Liste des tags sélectionnés
      newTag: "", // Valeur pour le nouveau tag
    };
  }

  toggleTag = (tag) => {
    this.setState((prevState) => {
      const { selectedTags } = prevState;
      if (selectedTags.includes(tag)) {
        // Si le tag est déjà sélectionné, on le retire
        return { selectedTags: selectedTags.filter((t) => t !== tag) };
      } else {
        // Sinon, on l'ajoute
        return { selectedTags: [...selectedTags, tag] };
      }
    });
  };

  handleAddTag = () => {
    const { newTag, tags } = this.state;
    if (newTag && !tags.includes(newTag)) {
      // Ajoute le tag s'il n'est pas vide et qu'il n'existe pas déjà
      this.setState((prevState) => ({
        tags: [...prevState.tags, newTag],
        newTag: "", // Réinitialise le champ
      }));
    }
  };

  handleInputChange = (event) => {
    this.setState({ newTag: event.target.value });
  };

  render() {
    const { tags, selectedTags, newTag } = this.state;

    return (
      <>
        <div className="">
          {/* Zone d'affichage des tags */}
          <div>
            <div className="flex gap-4 flex-wrap">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 border rounded ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => this.toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Champ d'ajout de tag */}
          <div className="mt-4">
            <input
              type="text"
              value={newTag}
              onChange={this.handleInputChange}
              placeholder="Ajouter un nouveau tag"
              className="border p-2 mr-2 rounded"
            />
            <button
              onClick={this.handleAddTag}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Ajouter
            </button>
          </div>
        </div>
      </>
    );
  }
}
