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
import Modal from '@/components/modal/modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface Column {
    id: 'id' | 'name' | 'email' | 'gender' | 'position';
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    format?: (value: string | number) => JSX.Element;
}

const columns: readonly Column[] = [
    {
        id: 'name',
        label: 'Name',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'email',
        label: 'Email',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'gender',
        label: 'Gender',
        align: 'center',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'position',
        label: 'Position',
        align: 'center',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'id',
        label: 'Action',
        align: 'center',
        format: (value: string | number) => {
            return (
                <Box sx={{ px: 2, display: 'flex', gap: "8px", borderLeft: "1px solid #ccc", justifyContent: "center", }}>
                    <Modal buttonTitle='Show' color={"info"} variant={"outlined"} />
                    <Modal buttonTitle='Update' color={"warning"} variant={"outlined"} />
                    <Modal buttonTitle='Delete' color={"error"} variant={"outlined"} />
                </Box>
            )
        },
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
                                    style={{}}
                                >
                                    <Typography variant='inherit' fontWeight={"bold"}>{column.label}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listStaff && listStaff
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((staff) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${staff.id}`}>
                                        {columns.map((column, index) => {
                                            const value = staff[column.id];
                                            return (
                                                <TableCell key={`table-cell-${staff.id}-${index}`} align={column.align}>
                                                    {column.format
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