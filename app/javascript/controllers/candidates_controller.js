import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom";
import h from "../components/htm_create_element"

import Candidates from "../components/Candidates";

export default class extends Controller {
  get props() {
    return this.data.get("props");
  }

  connect() {
    //console.log(this.data.get("props"))
    ReactDOM.render(
        h`<${Candidates} props=${this.data.get('props')}/>`,
      this.element
    );
  }

  disconnect() {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}