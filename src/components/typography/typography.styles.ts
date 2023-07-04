import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --default-fontfamily: var(--o-font-sans, 'Poppins', sans-serif);
    text-align: left;
    display: block;
  }

  :host([variant='heading1']),
  :host([variant='h1']) {
    font-family: var(--o-typography-h1-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-h1-fontsize, var(--o-font-size-8x-large, 140px));
    font-weight: var(--o-typography-h1-fontweight, var(--o-font-weight-extrabold, 800));
    line-height: var(--o-typography-h1-lineheight, 168px); /* TODO values seems not to be corralating */
    letter-spacing: var(--o-typography-h1-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading2']),
  :host([variant='h2']) {
    font-family: var(--o-typography-h2-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-h2-fontsize, var(--o-font-size-7x-large, 88px));
    font-weight: var(--o-typography-h2-fontweight, var(--o-font-weight-extrabold, 800));
    line-height: var(--o-typography-h2-lineheight, 106px);
    letter-spacing: var(--o-typography-h2-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading3']),
  :host([variant='h3']) {
    font-family: var(--o-typography-h3-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-h3-fontsize, var(--o-font-size-6x-large, 72px));
    font-weight: var(--o-typography-h3-fontweight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h3-lineheight, 86px);
    letter-spacing: var(--o-typography-h3-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading4']),
  :host([variant='h4']) {
    font-family: var(--o-typography-h4-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-h4-fontsize, var(--o-font-size-5x-large, 64px));
    font-weight: var(--o-typography-h4-fontweight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h4-lineheight, 77px);
    letter-spacing: var(--o-typography-h4-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading5']),
  :host([variant='h5']) {
    font-family: var(--o-typography-h5-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-h5-fontsize, var(--o-font-size-4x-large, 56px));
    font-weight: var(--o-typography-h5-fontweight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h5-lineheight, 67px);
    letter-spacing: var(--o-typography-h5-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title1']),
  :host([variant='t1']) {
    font-family: var(--o-typography-t1-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-t1-fontsize, var(--o-font-size-3x-large, 48px));
    font-weight: var(--o-typography-t1-fontweight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-t1-lineheight, 58px);
    letter-spacing: var(--o-typography-t1-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title2']),
  :host([variant='t2']) {
    font-family: var(--o-typography-t2-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-t2-fontsize, var(--o-font-size-2x-large, 40px));
    font-weight: var(--o-typography-t2-fontweight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-t2-lineheight, 56px);
    letter-spacing: var(--o-typography-t2-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title3']),
  :host([variant='t3']) {
    font-family: var(--o-typography-t3-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-t3-fontsize, var(--o-font-size-x-large, 32px));
    font-weight: var(--o-typography-t3-fontweight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-t3-lineheight, 38px);
    letter-spacing: var(--o-typography-t3-letterspacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title4']),
  :host([variant='t4']) {
    font-family: var(--o-typography-t4-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-t4-fontsize, var(--o-font-size-large, 24px));
    font-weight: var(--o-typography-t4-fontweight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-t4-lineheight, 34px);
    letter-spacing: var(--o-typography-t4-letterspacing, var(--o-letter-spacing-normal, 0em));
    text-transform: uppercase;
  }

  :host([variant='copy1']),
  :host([variant='c1']) {
    font-family: var(--o-typography-c1-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-c1-fontsize, var(--o-font-size-large, 24px));
    font-weight: var(--o-typography-c1-fontweight, var(--o-font-weight-medium, 500));
    line-height: var(--o-typography-c1-lineheight, 34px);
    letter-spacing: var(--o-typography-c1-letterspacing, 0.01em);
  }

  :host([variant='copy2']),
  :host([variant='c2']) {
    font-family: var(--o-typography-c2-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-c2-fontsize, var(--o-font-size-medium, 16px));
    font-weight: var(--o-typography-c2-fontweight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-c2-lineheight, 22px);
    letter-spacing: var(--o-typography-c2-letterspacing, 0.01em);
  }

  :host([variant='copy3']),
  :host([variant='c3']) {
    font-family: var(--o-typography-c3-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-c3-fontsize, var(--o-font-size-medium, 16px));
    font-weight: var(--o-typography-c3-fontweight, var(--o-font-weight-normal, 400));
    line-height: var(--o-typography-c3-lineheight, 24px);
    letter-spacing: var(--o-typography-c3-letterspacing, 0.01em);
  }

  :host([variant='copy4']),
  :host([variant='c4']) {
    font-family: var(--o-typography-c4-fontfamily, var(--default-fontfamily));
    font-size: var(--o-typography-c4-fontsize, 12px);
    font-weight: var(--o-typography-c4-fontweight, var(--o-font-weight-normal, 400));
    line-height: var(--o-typography-c4-lineheight, 20px);
    letter-spacing: var(--o-typography-c4-letterspacing, 0.01em);
  }
`;
