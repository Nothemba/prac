// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';


// const columns = [
//   { id: 'name', label: 'Name', minWidth: 20,align:'center' },
//   { id: 'Monday', label: 'Monday', minWidth: 20, align:'right' },
//   {
//     id: 'Tuesday',
//     label: 'Tuesday',
//     minWidth: 30,
//     align: 'right',
//     // format: value => value.toLocaleString(),
//   },
//   {
//     id: 'Wednsday',
//     label: 'Wednsday',
//     minWidth: 30,
//     align: 'right',
//     // format: value => value.toLocaleString(),
//   },
//   {
//     id: 'Thursday',
//     label: 'Thursday',
//     minWidth: 30,
//     align: 'right',
//     // format: value => value.toFixed(2),
//   },
//   {
//     id: 'Friday',
//     label: 'Friday',
//     minWidth: 30,
//     align: 'right',
//     // format: value => value.toFixed(2),
//   }
// ];

// function createData(name, Monday, Tuesday, Wednsday,Thursday, Friday) {
//   // const density = population / size;
//   return { name, Monday, Tuesday,Wednsday, Thursday, Friday };
// }

// const rows = [
//   createData('recruit 1', '1', '1', '1','1', 0.75),
//   createData('recruit 2', '0.75', '1', '0', '1',0.25),
//   createData('recruit 3', '0.75', '1', '0', '1',0.25),
//   createData('recruit 4', '0.75', '1', '0', '1',0.25),
//   createData('recruit 5', '0.75', '1', '0', '1',0.25),
//   createData('recruit 6', '0.75', '1', '0', '0.5',0.25),
//   createData('recruit 7', '0.75', '1', '0', '1',0.25),
//   createData('recruit 8', '1', '1', '0.75', '1',0.25)
  
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   tableWrapper: {
//     maxHeight: 440,
//     overflow: 'auto',
//   },
// });

// export default function StickyHeadTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = event => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
     
//       <div className={classes.tableWrapper}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map(column => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map(column => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         backIconButtonProps={{
//           'aria-label': 'previous page',
//         }}
//         nextIconButtonProps={{
//           'aria-label': 'next page',
//         }}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
      
//     </Paper>
//   );
// }
import React from 'react'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// import Image from '../logo.svg'
import { render } from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const theme = createMuiTheme();
const Input = (props)=>{
  return(
    <form onSubmit={props.submitHandler}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Grid container justify="center" alignItems="center">
                <Avatar id="avatar">
                  <img src={Image} alt="umuzi logo"></img>
                </Avatar>
              </Grid>
              <Typography component="h1" variant="h5" id="heading">
                Auto-Mark
              </Typography>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Enter Git Repository Link"
                name="repository"
                autoFocus
                id="repository"
                value={props.repository}
                onChange={props.changeHandler}
              />
              <MuiThemeProvider>
         <DropDownMenu
          value={this.state.selection}
          onChange={this.handleChange}
         >
          <MenuItem value={1} primaryText="Please select a project"  />
          <MenuItem value={2} primaryText="Simple calculator Part 1" />
          <MenuItem value={3} primaryText="String calculator" />
          <MenuItem value={4} primaryText="Simple calculator Part 2" />
          <MenuItem value={5} primaryText="Passwor checker" />
          <MenuItem value={6} primaryText="Node and File IO " />
          <MenuItem value={7} primaryText="Semitone difference - basic algorithm" />
          <MenuItem value={8} primaryText="Semitone - Make a simple GUI" />
          <MenuItem value={9} primaryText="Semitone - Advanced algorithm" />
          <MenuItem value={10} primaryText="Semitone - A gui that is more...awesome" />
          <MenuItem value={11} primaryText="Memory game" />
          <MenuItem value={12} primaryText="Express playlist" />
        </DropDownMenu>
        <center>
        {this.pageControl()}
        </center>
        </MuiThemeProvider>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                id="button"
              >
              TEST
              </Button>
            </React.Fragment>
          </ThemeProvider>
        </form>
  )
}
export default Input