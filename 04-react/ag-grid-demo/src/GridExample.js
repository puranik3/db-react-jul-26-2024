import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

const CustomButtonComponent = (props) => {
  console.log(props);
  return <button onClick={() => window.alert(props.data.model)}>Push Me!</button>;
};

function GridExample() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
  ]);


  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Make & Model", valueGetter: p => {
        // console.log(p);
        return p.data.make + ' ' + p.data.model
      },
      flex: 2,
      checkboxSelection: true
    },
    {
      field: "make", flex: 1, filter: true, editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams: {
        values: ['Tesla', 'Ford', 'Toyota', 'Mercedes', 'Fiat', 'Nissan', 'Vauxhall', 'Volvo', 'Jaguar'],
      },
    },
    { field: "model", flex: 1 },
    // { field: "price" },
    { field: "price", valueFormatter: p => '£' + p.value.toLocaleString(), flex: 1 },
    { field: "electric", flex: 1 },
    {
      field: 'month',
      comparator: (valueA, valueB) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const idxA = months.indexOf(valueA);
        const idxB = months.indexOf(valueB);
        return idxA - idxB;
      },
    },
    { field: "button", cellRenderer: CustomButtonComponent, flex: 1 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };
  }, []);

  return (
    <div
      // className="ag-theme-alpine-dark" // applying the Data Grid theme
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
      />
    </div>
  );
}

export default GridExample;
