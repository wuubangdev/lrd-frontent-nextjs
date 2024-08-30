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

interface Column {
    id: 'id' | 'name' | 'title' | 'major' | 'email' | 'phone';
    label: string;
    minWidth?: string;
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    format?: (value: string | number) => JSX.Element;
}

const columns: readonly Column[] = [
    {
        id: 'id',
        label: 'STT',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: "180px",
        align: 'left',
        format: (value: string | number) => <Link href={`/staff/example-staff-details`}>{value}</Link>
    },
    {
        id: 'title',
        label: 'Title',
        align: 'left',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'major',
        label: 'Major',
        align: 'left',
        format: (value: string | number) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'email',
        label: 'Email',
        align: 'left',
        format: (value: string | number) => <Link href={`mailto:${value}`}>{value}</Link>
    },
    {
        id: 'phone',
        label: 'Phone',
        align: 'right',
        format: (value: string | number) => <Link href={`tel:${value}`}>{value}</Link>
    },
];

function createData(
    id: number,
    name: string,
    title: string,
    major: string,
    email: string,
    phone: string,
) {
    return { id, name, title, major, email, phone };
}

const listStaff = [
    createData(1, 'Pham Xuat Sac', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
    createData(2, 'Le Van Gioi', "Dr, Senior lecturer", "GIS, RS", "abc@gmail.com", "0123456789"),
    createData(3, 'Nguyen Van Kha', "Dr, Senior lecturer", "Modelling, GIS and RS", "abc@gmail.com", "0123456789"),
    createData(4, 'Ly Trung Binh', "Associate professor", "Aquaculture, Environmental Sciences, RS and GIS", "abc@gmail.com", "0123456789"),
    createData(5, 'Nguyen Van B', "Associate professor", "Associate professor", "abc@gmail.com", "0123456789"),
    createData(6, 'Tran Thi C', "Dr, Lecturer", "Land and Water Environment, Remote Sensing", "abc@gmail.com", "0123456789"),
    createData(7, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(8, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(9, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(10, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(11, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(12, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(13, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(14, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
    createData(15, 'Dao Hoang Kiem', "Researcher", "Land Management", "abc@gmail.com", "0123456789"),
]

export default function ClientTableStaff() {
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
                <Box
                    sx={{
                        width: { sm: '100%', md: '100%' },
                        textAlign: { sm: 'center', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" color="text.primary"
                        sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: (theme) => theme.palette.mode === "light" ? "#FF3532" : ""
                        }}
                    >
                        List of staff in land resources department
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontSize={"20px"}>
                        There are 15 staffs are there in department
                    </Typography>
                </Box>
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
                                    .map((staff) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${staff.id}`}>
                                                {columns.map((column, index) => {
                                                    const value = staff[column.id];
                                                    return (
                                                        <TableCell
                                                            key={`table-cell-${staff.id}-${index}`}
                                                            align={column.align}
                                                            sx={{ py: 1.2, px: 2, minWidth: `${column.minWidth}` }}
                                                        >
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
            </Container>
        </Box>
    );
}