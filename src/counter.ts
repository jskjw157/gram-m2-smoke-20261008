// Intentional fixture bug for the M2 live smoke: increment() must add one
// but currently returns its input unchanged, so test/counter.test.js fails
// until the Gram task applies the minimal fix.
export function increment(value: number): number {
  return value;
}
