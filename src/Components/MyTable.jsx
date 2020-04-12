import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MyTable(props) {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => props.handlerClickUser(user.id)}
                    >
                      {user.first_name}
                    </span>
                  </TableCell>
                  <TableCell align="right">{user.last_name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <nav aria-label="Page navigation example ">
        <ul className="pagination pt-3">
          {props.pagesArr.map((num) => {
            return (
              <li
                key={num}
                className={
                  props.page === num + 1 ? "page-item active" : "page-item "
                }
              >
                <button
                  className="page-link text-secondary"
                  onClick={() => {
                    props.handlerChangePage(num + 1);
                  }}
                >
                  {num + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
