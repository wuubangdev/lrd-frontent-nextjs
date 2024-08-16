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
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@/components/modal/modal';
import UpdateStaff from '@/components/admin/admin-staff/update.staff';
import ShowStaff from '@/components/admin/admin-staff/show.staff';

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
                <Box sx={{ px: 2, display: 'flex', gap: "8px", borderLeft: "0px solid #ccc", justifyContent: "center", }}>
                    <Modal buttonTitle='Show' modalTitle='Show staff' color={"info"} variant={"outlined"}><ShowStaff staffId={value} /></Modal>
                    <Modal buttonTitle='Update' modalTitle='Update staff' color={"warning"} variant={"outlined"}><UpdateStaff staffId={value} /></Modal>
                    {/* <Modal buttonTitle='Delete' modalTitle='Delete staff' color={"error"} variant={"outlined"}>103</Modal> */}
                </Box>
            )
        },
    },
];

interface IProps {
    listStaff: IStaff[] | undefined;
}

export default function AdminStaffTable(props: IProps) {
    const { listStaff } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                        {listStaff ? listStaff
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((staff) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${staff.id}`}>
                                        {columns.map((column, index) => {
                                            const value = staff[column.id];
                                            return (
                                                <TableCell key={`table-cell-${staff.id}-${index}`} align={column.align} sx={{ py: 1.2, px: 2 }}>
                                                    {column.format
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            }) :
                            <TableRow><TableCell><CircularProgress /></TableCell></TableRow>
                        }
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