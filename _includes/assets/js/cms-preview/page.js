import React from "react";

export default class PostPreview extends React.Component{
    render() {
        const {entry, getAsset} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        // Bit of a nasty hack to make relative paths work as expected as a background image here
        if (image && !image.fileObj) {
            image = window.parent.location.protocol + "//" + window.parent.location.host + image;
        }
        return
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
                < /div>
            </div>
        {% endif %}
        ;
    }
}