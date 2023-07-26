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

/** Abbreviate a number in thousand+ format, e.g. 1000 -> 1K, 1000000 -> 1M  */
export function numberAbbreviate(num: number): string {
  const numAbs = Math.abs(num);

  if (numAbs < 1_000) {
    return `${num}`;
  }

  if (numAbs < 1_000_000) {
    return `${Math.round(num / 1_000)}K`;
  }

  if (numAbs < 1_000_000_000) {
    return `${Math.round(num / 1_000_000)}M`;
  }

  return `${Math.round(num / 1_000_000_000)}B`;
}
