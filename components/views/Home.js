import html from "html-literal";
import shop from "../../images/IMG_9.jpg";

export default state => html`
  <section id="jumbotron"><div>
  <h2>Smoke Shack of Crown Point</h2>
  <img id="shop" src="${shop}" alt="Store Front">
 <section>
  <h3><ul>Store Hours</h3></ul>
    <li>Monday: 9am-9pm</li>
    <li>Tuesday: 9am-9pm</li>
    <li>Wednesday: 9am-9pm</li>
    <li>Thursday: 9am-9pm</li>
    <li>Friday: 9am-10pm</li>
    <li>Saturday: 9am-10pm</li>
    <li>Sunday: 9am-8pm</li>
 </section>


  <h3>Fun Fact!</h3>

  <h3>
  ${state.facts}
  </h3>
  </section>

`;
