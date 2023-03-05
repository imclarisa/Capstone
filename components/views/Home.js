import html from "html-literal";

export default state => html`
  <section id="jumbotron"><div>
  <h3>Today's Weather</h3>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
    <h2>Smoke Shack of Crown Point</h2>
  </section>

`;
