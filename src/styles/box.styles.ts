import { css } from 'lit';

export default css`
  .box {
    --shadow-color: var(--o-box-shadow-color, var(--o-shadow-color, #00000029));
  }

  /* RADIUS */
  .box[radius='none'] {
    border-radius: var(--o-box-radius-none, var(--o-border-radius-none, 0px));
  }
  .box[radius='small'] {
    border-radius: var(--o-box-radius-small, var(--o-border-radius-small, 4px));
  }
  .box[radius='medium'] {
    border-radius: var(--o-box-radius-medium, var(--o-border-radius-medium, 8px));
  }
  .box[radius='large'] {
    border-radius: var(--o-box-radius-large, var(--o-border-radius-large, 16px));
  }
  .box[radius='pill'] {
    border-radius: var(--o-box-radius-pill, var(--o-border-radius-pill, 1000px));
  }

  /* ELEVATION */
  .box[elevation='none'] {
    box-shadow: var(--o-box-shadow-none, var(--o-shadow-none, none));
  }
  .box[elevation='small'] {
    box-shadow: var(--o-shadow-small, 0 2px 4px var(--shadow-color));
  }
  .box[elevation='medium'] {
    box-shadow: var(--o-shadow-medium, 4px 0px 32px 0px var(--shadow-color));
  }
  .box[elevation='large'] {
    box-shadow: var(--o-shadow-large, 0 2px 15px 5px var(--shadow-color));
  }

  /* MODE */
  .box[mode='hug'] {
    display: inline-block;
  }

  .box[mode='fill'] {
    display: block;
  }
`;
