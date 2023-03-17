import html from "html-literal";
import shop from "../../images/IMG_9.jpg";

export default state => html`
  <section id="jumbotron"><div>
  <h2>Smoke Shack of Crown Point</h2>
  <img id="shop" src="${shop}" alt="Store Front">
  <h3>Fun Fact!</h3>

  <h3>
  ${state.facts}
  </h3>
  </section>

`;
