import { css } from 'lit';

export default css`
  .box {
    --shadow-color: var(--o-box-shadow-light-color, var(--o-shadow-light-color, #00000029));
  }

  @media (prefers-color-scheme: dark) {
    .box {
      --shadow-color: var(--o-box-shadow-dark-color, var(--o-shadow-dark-color, rgb(0, 0, 0)));
    }
  }

  /* RADIUS */
  .box[radius='none'] {
    border-radius: var(--o-box-radius-none, var(--o-radius-none, 0px));
  }
  .box[radius='small'] {
    border-radius: var(--o-box-radius-small, var(--o-radius-small, 4px));
  }
  .box[radius='medium'] {
    border-radius: var(--o-box-radius-medium, var(--o-radius-medium, 8px));
  }
  .box[radius='large'] {
    border-radius: var(--o-box-radius-large, var(--o-radius-large, 16px));
  }
  .box[radius='pill'] {
    border-radius: var(--o-box-radius-pill, var(--o-radius-pill, 1000px));
  }

  /* ELEVATION */
  .box[elevation='none'] {
    box-shadow: var(--o-box-shadow-none, var(--o-shadow-none, none));
  }
  .box[elevation='small'] {
    box-shadow: 0 2px 4px var(--shadow-color);
  }
  .box[elevation='medium'] {
    box-shadow: 4px 0px 32px 0px var(--shadow-color);
  }
  .box[elevation='large'] {
    box-shadow: 0 2px 15px 5px var(--shadow-color);
  }

  /* MODE */
  .box[mode='hug'] {
    display: inline-block;
  }

  .box[mode='fill'] {
    display: block;
  }
`;
