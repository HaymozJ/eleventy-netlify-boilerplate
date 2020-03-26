
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);
const marked = require("marked")

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
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-8">
                            ${marked(entry.getIn(["data", "txtLeft"])).trim()}
                        </div>
                        <div class="col-md-4">
                            <img src="${entry.getIn(["data", "imgRight"])}" width="100%">
                        </div>
                    </div>
                    ${marked(entry.getIn(["data", "body"])).trim()}
                </div>
            </div>
        </div>
      </main>
    `;
  }
});

export default Page;