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
import { toSlugify } from '@/utils/global.hook';
import Link from 'next/link';
import { IDevice } from './lab.content';

interface Column {
    id: 'id' | 'name' | 'quality' | 'image';
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
        label: 'Tên thiết bị',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'quality',
        label: 'Số lượng',
        align: 'left',
        format: (value) => <Typography variant='inherit'>{value}</Typography>
    },
    {
        id: 'image',
        label: 'Hình ảnh',
        align: 'left',
        format: (value) =>
            <Link
                href={`/staff/${toSlugify(value.name)}-${value.id}`}
                style={{ textDecoration: 'unset', }}
            >
                <Box
                    component="span"
                    sx={{

                        color: 'inherit',
                        transition: 0.3,
                        '&:hover': {
                            opacity: 0.7,
                        },
                    }}
                >
                    {value}
                </Box>
            </Link>
    },
];

interface IProps {
    listDevices: IDevice[];
}

export default function LabDeviceTable(props: IProps) {
    const { listDevices } = props
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
                                {listDevices ? listDevices
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((device, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={`table-row-${device.id}-${index}`}>
                                                {columns.map((column) => {
                                                    const value = device[column.id];
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
                    {listDevices &&
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={listDevices.length}
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