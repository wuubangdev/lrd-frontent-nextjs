'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { sendRequest } from '@/utils/api';

interface Column {
    id: 'name' | 'email' | 'gender' | 'position' | 'address';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {
        id: 'name',
        label: 'Name',
        // minWidth: 170
    },
    {
        id: 'email',
        label: 'Email',
        // minWidth: 100
    },
    {
        id: 'gender',
        label: 'Gender',
        // minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'position',
        label: 'Position',
        // minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'address',
        label: 'Address',
        // minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toFixed(2),
    },
];

export default function AdminStaffTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [listStaff, setListStaff] = React.useState<IStaff[]>()

    React.useEffect(() => {
        fetchData();
    }, [listStaff])


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fetchData = async () => {
        const res = await sendRequest<IModelPaginate<IStaff>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs`,
            method: "GET",
            queryParams: {
                page: 1,
                size: 10,
            }
        })
        if (res?.data && res.statusCode === 200) {
            setListStaff(res.data.result);
        }
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: "100%" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listStaff && listStaff
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((staff) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={`table-${staff.id}`}>
                                        {columns.map((column) => {
                                            const value = staff[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {listStaff &&
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={listStaff.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }
        </Paper>
    );
}