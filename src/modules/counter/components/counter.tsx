import { useSignals } from '@preact/signals-react/runtime';

export const Counter = (props) => {
  useSignals();
  const { controller } = props;
  return (
    <div>
      <h1>Count: {controller.value}</h1>
      <button onClick={() => controller.value++}>Increment</button>
      <button onClick={() => controller.value--}>Decrement</button>
    </div>
  );
};
