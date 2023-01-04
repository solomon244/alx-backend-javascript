import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'yonas',
  lastName: 'Abebe',
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 25};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
