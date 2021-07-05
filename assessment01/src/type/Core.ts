export interface CoreProps {
  maximumInput?: number;
  minimumExponent?: number;
  [key: string]: any;
}

export interface PowerResult {
  value: number;
  base: number;
  exponent: number;
}
