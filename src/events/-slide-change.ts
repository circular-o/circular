import type OCarouselItem from '../components/carousel-item/carousel-item';

type OSlideChangeEvent = CustomEvent<{ index: number; slide: OCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-slide-change': OSlideChangeEvent;
  }
}

export default OSlideChangeEvent;
