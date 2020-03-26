import htm from "https://unpkg.com/htm?module";
import React from "react";

const html = htm.bind(h);

// Preview component for a Page
export default class Page extends React.Component{
    render() {
        const entry = this.props.entry;
        return html`
      <main>
        <div id="carouselExampleSlidesOnly" class="carousel slide headerImage" data-ride="carousel">
            <div class="carousel-inner">
              ${this.props.widgetFor("Carousel").map(function (item, index) {
                return html`
                  <div class="carousel-item active">
                      <img src="${item.getIn('data', 'slide')}" alt="" class="d-block w-100" height="500px" />
                  </div>
                `;
              })}
              <div class="carousel-caption d-none d-md-block">
                <h1> ${entry.getIn(["data", "title"], null)}</h1>
              </div>
            </div>
        </div>
        ${this.props.widgetFor("body")}
      </main>
    `;
    }
}
