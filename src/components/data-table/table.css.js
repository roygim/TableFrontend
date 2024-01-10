import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";

export const HeaderCellWrap = styled((props) => <TableCell {...props} />)(
    ({ theme }) => `
      background: #e7b0d6;
      font-weight: bold;
    `
);

export const TableRowWrap = styled((props) => <TableRow {...props} />)(
    ({ theme }) => `
      :nth-of-type(odd) {
        background: #0000000a;
      }
    `
);