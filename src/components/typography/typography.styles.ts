import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --default-font-family: var(--o-font-sans, 'Poppins', sans-serif);
    text-align: left;
    display: block;
  }

  :host([variant='heading1']),
  :host([variant='h1']) {
    font-family: var(--o-typography-h1-font-family, var(--default-font-family));
    font-size: var(--o-typography-h1-fontsize, var(--o-font-size-8x-large, 140px));
    font-weight: var(--o-typography-h1-font-weight, var(--o-font-weight-extrabold, 800));
    line-height: var(--o-typography-h1-line-height, var(--o-line-height-dense, 168px));
    letter-spacing: var(--o-typography-h1-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading2']),
  :host([variant='h2']) {
    font-family: var(--o-typography-h2-font-family, var(--default-font-family));
    font-size: var(--o-typography-h2-fontsize, var(--o-font-size-7x-large, 88px));
    font-weight: var(--o-typography-h2-font-weight, var(--o-font-weight-extrabold, 800));
    line-height: var(--o-typography-h2-line-height, var(--o-line-height-dense, 106px));
    letter-spacing: var(--o-typography-h2-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading3']),
  :host([variant='h3']) {
    font-family: var(--o-typography-h3-font-family, var(--default-font-family));
    font-size: var(--o-typography-h3-fontsize, var(--o-font-size-6x-large, 72px));
    font-weight: var(--o-typography-h3-font-weight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h3-line-height, var(--o-line-height-dense, 86px));
    letter-spacing: var(--o-typography-h3-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading4']),
  :host([variant='h4']) {
    font-family: var(--o-typography-h4-font-family, var(--default-font-family));
    font-size: var(--o-typography-h4-fontsize, var(--o-font-size-5x-large, 64px));
    font-weight: var(--o-typography-h4-font-weight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h4-line-height, var(--o-line-height-dense, 77px));
    letter-spacing: var(--o-typography-h4-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='heading5']),
  :host([variant='h5']) {
    font-family: var(--o-typography-h5-font-family, var(--default-font-family));
    font-size: var(--o-typography-h5-fontsize, var(--o-font-size-4x-large, 56px));
    font-weight: var(--o-typography-h5-font-weight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-h5-line-height, var(--o-line-height-dense, 67px));
    letter-spacing: var(--o-typography-h5-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title1']),
  :host([variant='t1']) {
    font-family: var(--o-typography-t1-font-family, var(--default-font-family));
    font-size: var(--o-typography-t1-fontsize, var(--o-font-size-3x-large, 48px));
    font-weight: var(--o-typography-t1-font-weight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-t1-line-height, var(--o-line-height-dense, 58px));
    letter-spacing: var(--o-typography-t1-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title2']),
  :host([variant='t2']) {
    font-family: var(--o-typography-t2-font-family, var(--default-font-family));
    font-size: var(--o-typography-t2-fontsize, var(--o-font-size-2x-large, 40px));
    font-weight: var(--o-typography-t2-font-weight, var(--o-font-weight-bold, 700));
    line-height: var(--o-typography-t2-line-height, var(--o-line-height-normal, 56px));
    letter-spacing: var(--o-typography-t2-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title3']),
  :host([variant='t3']) {
    font-family: var(--o-typography-t3-font-family, var(--default-font-family));
    font-size: var(--o-typography-t3-fontsize, var(--o-font-size-x-large, 32px));
    font-weight: var(--o-typography-t3-font-weight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-t3-line-height, var(--o-line-height-dense, 38px));
    letter-spacing: var(--o-typography-t3-letter-spacing, var(--o-letter-spacing-normal, 0em));
  }

  :host([variant='title4']),
  :host([variant='t4']) {
    font-family: var(--o-typography-t4-font-family, var(--default-font-family));
    font-size: var(--o-typography-t4-fontsize, var(--o-font-size-large, 24px));
    font-weight: var(--o-typography-t4-font-weight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-t4-line-height, var(--o-line-height-normal, 34px));
    letter-spacing: var(--o-typography-t4-letter-spacing, var(--o-letter-spacing-normal, 0em));
    text-transform: uppercase;
  }

  :host([variant='copy1']),
  :host([variant='c1']) {
    font-family: var(--o-typography-c1-font-family, var(--default-font-family));
    font-size: var(--o-typography-c1-fontsize, var(--o-font-size-large, 24px));
    font-weight: var(--o-typography-c1-font-weight, var(--o-font-weight-medium, 500));
    line-height: var(--o-typography-c1-line-height, var(--o-line-height-normal, 34px));
    letter-spacing: var(--o-typography-c1-letter-spacing, 0.01em);
  }

  :host([variant='copy2']),
  :host([variant='c2']) {
    font-family: var(--o-typography-c2-font-family, var(--default-font-family));
    font-size: var(--o-typography-c2-fontsize, var(--o-font-size-medium, 16px));
    font-weight: var(--o-typography-c2-font-weight, var(--o-font-weight-semibold, 600));
    line-height: var(--o-typography-c2-line-height, var(--o-line-height-normal, 22px));
    letter-spacing: var(--o-typography-c2-letter-spacing, 0.01em);
  }

  :host([variant='copy3']),
  :host([variant='c3']) {
    font-family: var(--o-typography-c3-font-family, var(--default-font-family));
    font-size: var(--o-typography-c3-fontsize, var(--o-font-size-medium, 16px));
    font-weight: var(--o-typography-c3-font-weight, var(--o-font-weight-normal, 400));
    line-height: var(--o-typography-c3-line-height, var(--o-line-height-loose, 24px));
    letter-spacing: var(--o-typography-c3-letter-spacing, 0.01em);
  }

  :host([variant='copy4']),
  :host([variant='c4']) {
    font-family: var(--o-typography-c4-font-family, var(--default-font-family));
    font-size: var(--o-typography-c4-fontsize, 12px);
    font-weight: var(--o-typography-c4-font-weight, var(--o-font-weight-normal, 400));
    line-height: var(--o-typography-c4-line-height, var(--o-line-height-loose, 20px));
    letter-spacing: var(--o-typography-c4-letter-spacing, 0.01em);
  }
`;
