import { signal } from '@preact/signals-react';

export function makeCountController() {
  const count = signal(0); // Create a signal
  return count;
}
