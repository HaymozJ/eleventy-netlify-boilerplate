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
                {(entry.getIn(["data", "Carousel"]) || []).map((slide, i) => <div class="carousel-item active" key={i}>
                    <img src={getAsset(slide.get("slide"))} alt="" class="d-block w-100" height="500px" />
                </div>)}
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
