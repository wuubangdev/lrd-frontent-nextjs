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
    id: 'id' | 'name' | 'year' | 'position';
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
        id: 'name',
        label: 'Họ & Tên',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'year',
        label: 'Khóa',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'position',
        label: 'Vị trí việc làm',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
];

interface IAlumni {
    id: string;
    name: string;
    year: string;
    position: string;
}

const CreateData = (
    id: string,
    name: string,
    year: string,
    position: string,
): IAlumni => {
    return { id, name, year, position }
}

const listAlumni: IAlumni[] = [
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
    CreateData("1", "Lê Văn Phương", "K25", "Giám đốc/ Chi cục Quản lý đất đai Bạc Liêu",),
]

export default function AlumniList() {
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
                pb: { xs: 3, sm: 4 },
            }}
        >
            <Typography variant='h5' textAlign='center' mb={2}>DANH SÁCH CỰU SINH VIÊN NGÀNH</Typography>
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
                            {listAlumni ? listAlumni
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
                {listAlumni &&
                    <TablePagination
                        sx={{ border: "1px solid #ccc" }}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={listAlumni.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                }
            </Paper>
        </Box>
    );
}