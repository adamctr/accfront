import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Mail extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col gap-4">
          <Link to="/createmail">Créer un mail</Link>
          <Link to="/editmail">Editer un mail</Link>
        </div>
      </>
    );
  }
}
