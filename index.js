import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender();
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.FUN_FACT_API_URL}/facts?random=1`)
          .then(response => {
            // Storing retrieved data in state
            store.Home.facts = response.data;
            console.log(response.data);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      case "Contact":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.CONTACT_API_URL}/contacts`)
          .then(response => {
            // Storing retrieved data in state
            store.Contact.contacts = response.data;
            console.log(response.data);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
