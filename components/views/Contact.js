import html from "html-literal";

export default state => html`
<div>
  <section id="Contact">
    <ul></ul><h2>How to Reach Us!</h2></ul>
    <li>Phone: 219.662.9200</li>
    <li>Instagram: <a href="instagram.com/smokeshack219">@smokeshack219</a></li>
    <form
      action="https://formspree.io/f/xzbqeeon"
      method="POST"
    >
      <label>
        Your email:
        <input type="email" name="email">
      </label>
      <label><br>
        Your message:
        <textarea name="message"></textarea>
      </label><br>

      <button type="submit">Send</button>
    </form></section></div>
`;

