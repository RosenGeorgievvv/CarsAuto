import { html, render } from "../lib.js";

const homeTemplate = () => html`
  <section id="hero">
    <p>List of cars expected in that section</p>
  </section>
`;

export function showHomeView(){
    render(homeTemplate());
}
