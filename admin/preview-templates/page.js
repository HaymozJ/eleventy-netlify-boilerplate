
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    //const entry = this.props.entry;
    const {entry, getAsset} = this.props;

    return html`
      <main>
       <div id="carouselExampleSlidesOnly" class="carousel slide headerImage" data-ride="carousel">
            <div class="carousel-inner">
              ${entry.getIn(["data",'Carousel']).map((item, index) => {
                return html`
                    <div class="carousel-item ${(index===0?"active":"")}">
                        <img src="${getAsset(item.get("slide"))}" alt="" class="d-block w-100" height="500px" />
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
});

export default Page;