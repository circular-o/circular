# Carousel Item

[component-header:o-carousel-item]

```html preview
<o-carousel pagination>
  <o-carousel-item>
    <img
      alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
      src="assets/examples/carousel/mountains.jpg"
    />
  </o-carousel-item>
  <o-carousel-item>
    <img
      alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
      src="assets/examples/carousel/waterfall.jpg"
    />
  </o-carousel-item>
  <o-carousel-item>
    <img
      alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
      src="assets/examples/carousel/sunset.jpg"
    />
  </o-carousel-item>
  <o-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
      src="assets/examples/carousel/field.jpg"
    />
  </o-carousel-item>
  <o-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
      src="assets/examples/carousel/valley.jpg"
    />
  </o-carousel-item>
</o-carousel>
```

```jsx react
import { OCarousel, OCarouselItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OCarousel pagination>
    <OCarouselItem>
      <img
        alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
        src="assets/examples/carousel/mountains.jpg"
      />
    </OCarouselItem>
    <OCarouselItem>
      <img
        alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
        src="assets/examples/carousel/waterfall.jpg"
      />
    </OCarouselItem>
    <OCarouselItem>
      <img
        alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
        src="assets/examples/carousel/sunset.jpg"
      />
    </OCarouselItem>
    <OCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
        src="assets/examples/carousel/field.jpg"
      />
    </OCarouselItem>
    <OCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
        src="assets/examples/carousel/valley.jpg"
      />
    </OCarouselItem>
  </OCarousel>
);
```

?> Additional demonstrations can be found in the [carousel examples](/components/carousel).

[component-metadata:o-carousel-item]
