import type OCarouselItem from '../components/carousel-item/carousel-item';

type OSlideChange = CustomEvent<{ index: number; slide: OCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-slide-change': OSlideChange;
  }
}

export default OSlideChange;
