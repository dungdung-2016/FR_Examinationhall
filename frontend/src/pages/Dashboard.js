import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

function createData(id, date, user, post, views) {
  return { id, date, user, post, views};
}

const rows = [
  createData(0, '16 Mar, 2019', 'seunggi', 'hello', 30),
  createData(1, '16 Mar, 2019', 'euchan', 'hi', 20),
  createData(2, '16 Mar, 2019', 'sooji', 'bye', 25),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <h2>Dashboard</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Post</TableCell>
            <TableCell align="right">Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.post}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}