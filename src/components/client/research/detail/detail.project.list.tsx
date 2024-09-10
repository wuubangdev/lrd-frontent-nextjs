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
import { Box, Container } from '@mui/material';

interface Column {
    id: 'id' | 'title' | 'duration' | 'director';
    label: string;
    minWidth?: string;
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    format?: (value: any) => JSX.Element;
}



const columns: readonly Column[] = [
    {
        id: 'id',
        label: 'STT',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'title',
        label: 'Tên dự án',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'duration',
        label: 'Thời gian',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'director',
        label: 'Chủ nhiệm',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
];

interface IProject {
    id: string;
    title: string;
    duration: string;
    director: string;
}

const CreateData = (
    id: string,
    title: string,
    duration: string,
    director: string,
): IProject => {
    return { id, title, duration, director }
}

const listProject: IProject[] = [
    CreateData("1", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("2", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("3", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("4", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("5", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("6", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("7", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("8", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("9", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("10", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("11", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("12", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("13", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("14", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("15", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("16", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("17", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("18", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("19", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
    CreateData("20", "Xây dựng bản đồ đất và đánh giá thích nghi đất đai làm cơ sở cho chuyển đổi cơ cấu cây trồng tỉnh Cà Mau, 2000-2010", "2001", "GS.TS. Lê Quang Trí",),
]

export default function DetailProjectList() {
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
        <Box>
            <Container
                id="sub-staff"
                sx={{
                    pb: { xs: 3, sm: 4 },
                }}
            >
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: "100%" }}>
                        <Table stickyHeader aria-label="sticky table" sx={{ border: "0.5px solid #ccc", borderRadius: "5px" }}>
                            <TableHead >
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
                                {listProject ? listProject
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((project, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${project.id}-${index}`}>
                                                {columns.map((column) => {
                                                    const value = project[column.id];
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
                    {listProject &&
                        <TablePagination
                            sx={{ border: "1px solid #ccc" }}
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={listProject.length}
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