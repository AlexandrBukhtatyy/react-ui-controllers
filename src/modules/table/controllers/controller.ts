import { computed, signal } from '@preact/signals-react';

export const MOCK_TABLE_ROWS = [
  { id: '1', title: 'title #1' },
  { id: '2', title: 'title #2' },
  { id: '3', title: 'title #3' },
  { id: '4', title: 'title #4' },
  { id: '5', title: 'title #5' },
  { id: '6', title: 'title #6' },
  { id: '7', title: 'title #7' },
  { id: '8', title: 'title #8' },
  { id: '9', title: 'title #9' },
  { id: '10', title: 'title #10' },
];

type ControllerSettings = {
  resource: () => Array<any>;
};

type TableState<T> = {
  rows: Array<T>;
};

export class TableController {
  private _value = signal<TableState<any>>({
    rows: [],
  });
  private _rows;

  get value() {
    return this._value.value;
  }

  get rows() {
    return this._rows.value;
  }

  constructor(settings: ControllerSettings) {
    // TODO: реализовать разные состояния контрола
    const rows = settings.resource();
    this._value.value = {
      rows: rows,
    };
    this._rows = computed(() => this._value.value.rows);
  }

  public clear() {
    this._value.value = { rows: [] };
  }
}

export function makeTableController(settings: ControllerSettings) {
  const tableController = new TableController(settings);
  return tableController;
}
