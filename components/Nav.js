import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
        )
        .join("")}
    </ul>
  </nav>
`;
