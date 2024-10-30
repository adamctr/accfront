import React, { Component } from "react";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "", // Changer le logo pour être une chaîne (URL)
      brandName: "",
      email: "",
      phone: "",
      address: "",
      openAiApiKey: "",
      productsApiLink: "",
      blogArticlesApiLink: "",
    };
  }

  componentDidMount() {
    this.fetchSettings(); // Appel à la fonction pour récupérer les paramètres
  }

  fetchSettings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/settings");
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Récupération des données au format JSON

      // Mettre à jour l'état avec les données récupérées
      this.setState({
        logo: data.logo || "",
        brandName: data.brand_name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        openAiApiKey: data.openai_api_key || "",
        productsApiLink: data.product_api_link || "",
        blogArticlesApiLink: data.blog_articles_api_link || "",
      });
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
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

    // Créer un objet FormData
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("brand_name", brandName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("openai_api_key", openAiApiKey);
    formData.append("product_api_link", productsApiLink);
    formData.append("blog_articles_api_link", blogArticlesApiLink);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/settings", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Settings added:", data);
      } else {
        const errorData = await response.json();
        console.error("Error adding settings:", errorData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
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
      <form
        className="flex flex-col gap-4 max-w-md mx-auto p-4"
        onSubmit={this.handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Paramètres</h2>

        <label>
          Logo URL:
          <input
            type="text"
            name="logo"
            className="border border-gray-300 p-2 w-full"
            value={logo}
            placeholder="URL du logo"
            onChange={this.handleChange}
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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sauvegarder les paramètres
        </button>
      </form>
    );
  }
}
