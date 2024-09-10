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
    id: 'title' | 'duration' | 'collaborative' | 'position' | 'contact';
    label: string;
    minWidth?: string;
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    format?: (value: any) => JSX.Element;
}



const columns: readonly Column[] = [
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
        id: 'collaborative',
        label: 'Hợp tác',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'position',
        label: 'Vị trí',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'contact',
        label: 'Người liên hệ',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
];

interface IProject {
    title: string;
    duration: string;
    collaborative: string;
    position: string;
    contact: string;
}

const CreateData = (
    title: string,
    duration: string,
    collaborative: string,
    position: string,
    contact: string,
): IProject => {
    return { title, duration, collaborative, position, contact }
}

const listProject: IProject[] = [
    CreateData("Integrated Management of Coastal Resources in the Mekong Delta, Vietnam", "1996 - 2005", "Funded by NUFFIC, The Netherlands", "Secretary (1996-2002) and director (2002-2005) of project", "Prof. Le Quang Tri",),
    CreateData("Mangrove forest changes using aerial imagery in the Mekong delta", "2000", "MHO8 project, The Netherlands", "Program Director", "Assoc.Prof. Vo Quang Minh",),
    CreateData("“Optimization of Nutrient Dynamics and Animals for Integrated Farming” (INREF POND project)", "2002-2006", "funded by NUFFIC, The Netherlands", "	Project Director", "Prof. Le Quang Tri",),
    CreateData("Development of new technologies and their practice for sustainable farming systems in the Mekong delta.", "2003", "JIRCAS", "Member", "Assoc.Prof. Vo Quang Minh",),
    CreateData("The Mekong future", "2011-2012", "funded by CSIRO, Australia", "Project Director", "Prof. Le Quang Tri",),
]

export default function GlobalProjectTable() {
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
                    pt: { xs: 2, sm: 3 },
                    pb: { xs: 3, sm: 4 },
                }}
            >
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: "100%" }}>
                        <Table stickyHeader aria-label="sticky table" sx={{ border: "1px solid #ccc" }}>
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
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${project.title}-${index}`}>
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