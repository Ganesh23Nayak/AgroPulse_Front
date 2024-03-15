import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function EmptyDB() {
  return (
    <TableRow>
      <TableCell align="center" colSpan={8} sx={{ py: 3 }}>
        <Paper
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            No Farmers in Database!
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  );
}
