
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
              ${entry.getIn(["data",'Carousel'])!=null?entry.getIn(["data",'Carousel']).map((item, index) => {
                return html`
                    <div class="carousel-item ${(index===0?"active":"")}">
                        <img src="${getAsset(item.get("slide"))}" alt="" class="d-block w-100" height="500px" />
                    </div>
                `;
              }):''}
              <div class="carousel-caption d-none d-md-block justify-content-center">
                <h1> ${entry.getIn(["data", "title"])}</h1>
              </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-8">
                            ${this.props.widgetFor("txtLeft")}
                        </div>
                        <div class="col-md-4">
                            <img src="${entry.getIn(["data", "imgRight"])}" width="100%">
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        ${entry.getIn(["data",'blurbs'])!=null?entry.getIn(["data",'blurbs']).map((item, index) => {
                            return html `
                                <div class="col-md-4">
                                    <img src="${getAsset(item.get("blurbImg"))}" width="100%"/>
                                    <p>${item.get("blurbTxt")}</p>
                                </div>
                            `;
                        }):''}
                    </div>
                    ${entry.getIn(["data","blocks"])!=null?entry.getIn(["data","blocks"]).map((item, index) =>{
                        return html `
                            <div class="row">
                                <div class="col-md-12">
                                    <img src="${getAsset(item.get("imgOnly"))}" width="100%"/>
                                    <p>${this.props.widgetFor(item.get("txtOnly"))}</p>
                                </div>
                            </div>
                        `;    
                    }):''}
                    ${this.props.widgetFor("body")}
                </div>
            </div>
        </div>
      </main>
    `;
  }
});

export default Page;