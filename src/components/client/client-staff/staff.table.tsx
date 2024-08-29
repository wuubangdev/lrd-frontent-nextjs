'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
  createData('Frozen yoghurt', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
  createData('Frozen yoghurt', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
  createData('Frozen yoghurt', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
  createData('Frozen yoghurt', "Associate professor, Head of department", "Land and Water Environment, Management of Land Resources", "abc@gmail.com", "0123456789"),
];


export default function TableStaff() {
  return (
    <Container
      id="substaff"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 2, sm: 4 },
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
            color: (theme) => theme.palette.mode === "light" ? "#0263B6" : ""
          }}
        >
          List of staff in land resources department
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize={"20px"}>
          There are 15 staffs are there in department
        </Typography>
      </Box>
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Full Name</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Major</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
