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
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box, Container, Link } from '@mui/material';
import { toSlugify } from '@/utils/global.hook';

interface Column {
    id: 'no' | 'nameId' | 'nameId' | 'title' | 'major' | 'email' | 'phone';
    label: string;
    minWidth?: string;
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    format?: (value: any) => JSX.Element;
}

const columns: readonly Column[] = [
    {
        id: 'no',
        label: 'STT',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'nameId',
        label: 'Name',
        minWidth: "180px",
        align: 'left',
        format: (value) => <Link href={`/staff/${toSlugify(value.name)}-${value.id}`}>{value.name}</Link>
    },
    {
        id: 'title',
        label: 'Title',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'major',
        label: 'Major',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'email',
        label: 'Email',
        align: 'left',
        format: (value) => <Link href={`mailto:${value}`}>{value}</Link>
    },
    {
        id: 'phone',
        label: 'Phone',
        align: 'right',
        format: (value) => <Link href={`tel:${value}`}>{value}</Link>
    },
];

function createData(
    no: number,
    nameId: { id: number, name: string, },
    title: string,
    major: string,
    email: string,
    phone: string,
) {
    return { no, nameId, title, major, email, phone };
}

const listStaff = [
    createData(1, { id: 1, name: 'Pham Xuat Sac' }, "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
    createData(2, { id: 2, name: 'Le Van Gioi' }, "Dr, Senior lecturer", "GIS, RS", "abc@gmail.com", "0123456789"),
    createData(3, { id: 3, name: 'Nguyen Van Kha' }, "Dr, Senior lecturer", "Modelling, GIS and RS", "abc@gmail.com", "0123456789"),
    createData(4, { id: 4, name: 'Ly Trung Binh' }, "Associate professor", "Aquaculture, Environmental Sciences, RS and GIS", "abc@gmail.com", "0123456789"),
    createData(5, { id: 5, name: 'Nguyen Van B' }, "Associate professor", "Associate professor", "abc@gmail.com", "0123456789"),
    createData(6, { id: 6, name: 'Tran Thi C' }, "Dr, Lecturer", "Land and Water Environment, Remote Sensing", "abc@gmail.com", "0123456789"),
    createData(7, { id: 7, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(8, { id: 8, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(9, { id: 9, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(10, { id: 10, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(11, { id: 11, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(12, { id: 12, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(13, { id: 13, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(14, { id: 14, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(15, { id: 15, name: 'Dao Hoang Kiem' }, "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
]

export default function Publications() {
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
        <Box
            sx={{
                backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                        ? "linear-gradient(to bottom right, #FFFEFF , #9DCFFF)"
                        : "",
            }}
        >
            <Container
                id="sub-staff"
                sx={{
                    pt: { xs: 4, sm: 6 },
                    pb: { xs: 6, sm: 8 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 1 },

                }}
            >
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: "100%" }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align="left"
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
                                    .map((staff, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${staff.nameId.id}-${index}`}>
                                                {columns.map((column) => {
                                                    const value = staff[column.id];
                                                    return (
                                                        <TableCell
                                                            key={`table-cell-${column.id}-${index}}`}
                                                            align={column.align}
                                                            sx={{ py: 1.2, px: 2, minWidth: `${column.minWidth}` }}
                                                        >
                                                            {column.format
                                                                ? column.format(value)
                                                                : value.toString()}
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
            </Container>
        </Box>
    );
}