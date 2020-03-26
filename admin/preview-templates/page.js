import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
    render() {
        const entry = this.props.entry;

        return html`
      <main>
        {% if headerImage and not Carousel %}
            <div class="headerImage" style='background-image: url({{ headerImage }} )'>
                <h1> {{ title }}</h1>
            </div>
        {% elif Carousel %}
            <div id="carouselExampleSlidesOnly" class="carousel slide headerImage" data-ride="carousel">
                <div class="carousel-inner">
                    {% for item in Carousel %}
                        <div class="carousel-item {% if loop.first %} active {% endif %}">
                            <img class="d-block w-100" src="{{ item.slide }}" alt="Slide{{ loop.index }}" height="500px">
                        </div>
                    {% endfor %}
                    <div class="carousel-caption d-none d-md-block">
                        <h1> {{ title }}</h1>
                    </div>
                </div>
            </div>
        {% endif %}
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        ${this.props.widgetFor("body")}
      </main>
    `;
    }
});

export default Page;
