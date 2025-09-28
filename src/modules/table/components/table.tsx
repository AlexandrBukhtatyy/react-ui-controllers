import { useSignals } from '@preact/signals-react/runtime';
import { TableController } from '../controllers/controller';

type TableProps = {
  controller: TableController;
};

export const Table = (props: TableProps) => {
  useSignals();
  const { controller } = props;
  return (
    <>
      <button onClick={() => controller.clear()}>Reset rows</button>
      <table>
        <tbody>
          {controller.rows?.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
