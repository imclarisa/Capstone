import html from "html-literal";

export default state => html`
<div>
  <section id="contact">
    <ul></ul><h2>How to Reach Us!</h2></ul>
    <ul>Phone: 219.662.9200</ul>
    <ul>Instagram: <a href="https://www.instagram.com/smokeshack219">@smokeshack219</a></ul>
    <form id="form"
      action=""
      method="POST"
    >
    <label id="name">
        <input type="name" name="name" placeholder="John Smith">
      </label>
      <label id="email">
        <input type="email" name="email" placeholder="yourname@email.com">
      </label>
      <label id="message"><br>
        <textarea id ="textarea" name="message" placeholder="Your message..."></textarea>
      </label><br>

      <button id="button" type="submit">Send</button>
    </form></section></div>
`;
