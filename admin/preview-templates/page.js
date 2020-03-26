
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
            ${console.log(entry.getIn(['data','Carousel']))}
              ${entry.getIn(["data",'Carousel']).map((item, index) => {
      return html`
 ${console.log(index)}
                  <div class="carousel-item active">
                      <img src="${getAsset(item.get("slide"))}" alt="" class="d-block w-100 ${(index===0?"active":"")}" height="500px" />
                  </div>
                `;
    })}
              <div class="carousel-caption d-none d-md-block">
                <h1> ${entry.getIn(["data", "title"], null)}</h1>
              </div>
            </div>
        </div>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default Page;