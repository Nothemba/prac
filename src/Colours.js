import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '50%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 200,
  },
}));

function createData(name, colours, points) {
  return { name, colours, points};
}

const rows = [
  createData('on time', "green", 1),
  createData('late with notice', 'Yellow', 0.75),
  createData('late without notice', 'orange', 0.25),
  createData('absent with notice', 'orange', 0.25),
  createData('absent without notice', 'orange', 0),
  createData('sick leave','orange' ,0.25),
  createData('absent with leave', 'purple', 0.5),
 
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>colour codes</h2>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Attendance</TableCell>
              <TableCell align="right">Colours</TableCell>
              <TableCell align="right">Points&nbsp;(g)</TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.colours}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      
    </div>
  );
}

 