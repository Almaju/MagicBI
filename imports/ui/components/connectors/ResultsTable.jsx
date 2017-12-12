import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

function BasicTable(props) {
  const { classes, header, data } = props;

  console.log(props);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {header.map(v => (
              <TableCell>{v}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n, i) => (
            <TableRow key={i}>
              {n.map(v => (
                <TableCell>{v}</TableCell>
              ))}
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array,
  data: PropTypes.array,
};
BasicTable.defaultProps = {
  header: [],
  data: [],
};

export default withStyles(styles)(BasicTable);
