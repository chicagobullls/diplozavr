import React, { useState } from 'react';
import MaterialTable from "material-table";

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const Table = ({ columns, data, }) => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    const [datas, setData] = useState([
        { data }
    ]);

    return (
        <MaterialTable
            icons={tableIcons}
            title="5 - 6 классы"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...datas, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...datas];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...datas];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}


            localization={{
                body: {
                    emptyDataSourceMessage: 'Ничего не найдено',
                    addTooltip: 'Hinzufügen',
                    deleteTooltip: 'Löschen',
                    editTooltip: 'Bearbeiten',
                    filterRow: {
                        filterTooltip: 'Filter'
                    },
                    editRow: {
                        deleteText: 'Diese Zeile wirklich löschen?',
                        cancelTooltip: 'Abbrechen',
                        saveTooltip: 'Speichern'
                    }
                },
                grouping: {
                    placeholder: 'Spalten ziehen ...',
                    groupedBy: 'Gruppiert nach:'
                },
                header: {
                    actions: 'Aktionen'
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} из {count}',
                    labelRowsSelect: 'Строк',
                    labelRowsPerPage: 'Zeilen pro Seite:',
                    firstAriaLabel: 'Первая страница',
                    firstTooltip: 'Первая страница',
                    previousAriaLabel: 'Предыдущая страница',
                    previousTooltip: 'Предыдущая страница',
                    nextAriaLabel: 'Следующая страница',
                    nextTooltip: 'Следующая страница',
                    lastAriaLabel: 'Последняя страница',
                    lastTooltip: 'Последняя страница'
                },
                toolbar: {
                    addRemoveColumns: 'Spalten hinzufügen oder löschen',
                    nRowsSelected: '{0} Zeile(n) ausgewählt',
                    showColumnsTitle: 'Zeige Spalten',
                    showColumnsAriaLabel: 'Zeige Spalten',
                    exportTitle: 'Export',
                    exportAriaLabel: 'Export',
                    exportName: 'Export als CSV',
                    searchTooltip: 'Поиск',
                    searchPlaceholder: 'Поиск'
                }
            }}
        />
    );
};

export default Table;