import './App.css';
import { Counter } from './modules/counter/components/counter';
import { makeCountController } from './modules/counter/controllers/controller';
import { useSignals } from '@preact/signals-react/runtime';
import { Table } from './modules/table/components/table';
import {
  makeTableController,
  MOCK_TABLE_ROWS,
} from './modules/table/controllers/controller';

const tableResource = () => {
  return MOCK_TABLE_ROWS;
};

function App() {
  useSignals();
  const countController = makeCountController();
  const tableController = makeTableController({ resource: tableResource });
  return (
    <>
      {/* Counter example */}
      <Counter controller={countController} />
      <hr />
      {/* Table example */}
      <button onClick={() => tableController.clear()}>reset rows outer</button>
      <Table controller={tableController} />
    </>
  );
}

// function App() {
//   const filterForm = new Form(model, schema)
//   const table = new Table(settings)
//   const title = computed(() => {
//     `Some title (${filterForm.currentStep})`
//   })
//   const сontentMessage = computed(() => {
//     return filterForm.erros
//   })
//   return (
//     <>
//       <Title controller={title}/>
//       <ContentMessage controller={сontentMessage}/>
//       <Form controller={form}>
//        TODO: тут нужно наверное отделить контроллер от контрола поля?
//              или привязать после инициализации поля `controlNameСontroller = new FormFieldComponentComtrolle(form.controlName)`
//              Если контроллер не передан то создавать его на уровне самого компонента ?
//        ================================
//         <FormField controller={controlNameСontroller} type={FormFieldComponent} resource={}/>
//        ============== OR ==============
//         <FormField controller={form.controlName} type={FormFieldComponent} resource={}/>
//        ================================
//         <FormField controller={form.controlName} type={FormFieldComponent} resource={}  uploader={}/>
//         <FormField controller={form.controlName} type={FormFieldComponent} someComponentProp={}/>
//       </Form>
//       <Table controller={table} type={TableViewComponent}/>
//     </>
//   )
// }

export default App;
