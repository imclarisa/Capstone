import html from "html-literal";
import coconut from "../../images/IMG_8.jpg";
import rigone from "../../images/IMG_7.jpg";
import afm from "../../images/IMG_6.jpg";
import mav from "../../images/IMG_5.jpg";
import haring from "../../images/IMG_4.jpg";
import spoons from "../../images/IMG_3.jpg";
import terp from "../../images/IMG_2.jpg";
import bundle from "../../images/IMG_1.jpg";

export default state => html`
  <div>
    <section id="bio">
      Welcome to Smoke Shack! We are a small business that opened in May 2021
      and are located in Crown Point, Indiana. We are proud to offer a wide
      range of smoking products, including premium cigars, high-quality
      glassware, vapes, and much more. Our shop is the perfect destination for
      smokers who appreciate the finer things in life and want to explore a
      variety of smoking options. Whether you're a seasoned smoker or a curious
      beginner, our friendly and knowledgeable staff is always here to help you
      find the perfect product to suit your needs. So come on in and check us
      out. We can't wait to meet you!
      <br />
      <br />
      <br />
    </section>
  </div>
  <br />
  <section>
    <div class="row">
      <div class="column">
        <img id="coconut" src="${coconut}" />
        <img id="rigone" src="${rigone}" />
        <img id="afm" src="${afm}" />
      </div>

      <div class="column">
        <img id="haring" src="${haring}" />
        <img id="mav" src="${mav}" />
        <img id="spoons" src="${spoons}" />
        <br />
        <br />
      </div>
    </div>
  </section>
`;
