import React, { Component } from "react";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "",
      brandName: "",
      email: "",
      phone: "",
      address: "",
      openAiApiKey: "",
      productsApiLink: "",
      blogArticlesApiLink: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      logo,
      brandName,
      email,
      phone,
      address,
      openAiApiKey,
      productsApiLink,
      blogArticlesApiLink,
    } = this.state;

    return (
      <div className="flex flex-col gap-4 max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Paramètres</h2>

        <label>
          Logo:
          <input
            type="file"
            name="logo"
            className="border border-gray-300 p-2 w-full"
            onChange={(e) => this.setState({ logo: e.target.files[0] })}
          />
        </label>

        <label>
          Nom marque:
          <input
            type="text"
            name="brandName"
            className="border border-gray-300 p-2 w-full"
            value={brandName}
            placeholder="Nom de la marque"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            className="border border-gray-300 p-2 w-full"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Téléphone:
          <input
            type="tel"
            name="phone"
            className="border border-gray-300 p-2 w-full"
            value={phone}
            placeholder="Numéro de téléphone"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Adresse:
          <input
            type="text"
            name="address"
            className="border border-gray-300 p-2 w-full"
            value={address}
            placeholder="Adresse"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Clé API OpenAI:
          <input
            type="text"
            name="openAiApiKey"
            className="border border-gray-300 p-2 w-full"
            value={openAiApiKey}
            placeholder="Clé API OpenAI"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Lien API des produits:
          <input
            type="text"
            name="productsApiLink"
            className="border border-gray-300 p-2 w-full"
            value={productsApiLink}
            placeholder="Lien de l'API des produits"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Lien API des articles de Blogs:
          <input
            type="text"
            name="blogArticlesApiLink"
            className="border border-gray-300 p-2 w-full"
            value={blogArticlesApiLink}
            placeholder="Lien de l'API des articles de blogs"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
