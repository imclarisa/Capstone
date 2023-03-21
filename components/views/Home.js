import html from "html-literal";
import shop from "../../images/IMG_9.jpg";
import map from "../../images/map.jpg";

export default state => html`
  <section id="jumbotron"><div>
    <br />
  <h2>Smoke Shack of Crown Point</h2>
    <br />
  <div class="container">
    <img class="image" id="shop" src="${shop}" alt="Store Front">
      <div class="overlay">
        <div class="text">Smoke Shack of Crown Point</div>
      </div>
    </div>
    <div class="container">
    <img class="image" id="map" src="${map}" alt="Address">
      <div class="overlay">
        <div class="text">10771 Broadway, Crown Point Indiana </div>
      </div>
    </div>
<section>
  <h3><ol>Store Hours</h3></ol>
    <li>Monday: 9am-9pm</li>
    <li>Tuesday: 9am-9pm</li>
    <li>Wednesday: 9am-9pm</li>
    <li>Thursday: 9am-9pm</li>
    <li>Friday: 9am-10pm</li>
    <li>Saturday: 9am-10pm</li>
    <li>Sunday: 9am-8pm</li>
</section>

<section>
  <h3>Fun Fact!</h3>

  <h3>
  ${state.facts.fact}
  </h3>
  </section>

`;
