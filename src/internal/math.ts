/** Ensures a number stays within a minimum and maximum value */
export function clamp(value: number, min: number, max: number) {
  const noNegativeZero = (n: number) => (Object.is(n, -0) ? 0 : n);

  if (value < min) {
    return noNegativeZero(min);
  }

  if (value > max) {
    return noNegativeZero(max);
  }

  return noNegativeZero(value);
}

export function FormatNumber(num: number): string {
  if (Math.abs(num) < 1_000) {
    return num.toString();
  } else if (Math.abs(num) < 1_000_000) {
    return Math.round(num / 1_000).toString() + 'K';
  } else if (Math.abs(num) < 1_000_000_000) {
    return Math.round(num / 1_000_000).toString() + 'M';
  } else {
    return Math.round(num / 1_000_000_000).toString() + 'B';
  }
}
