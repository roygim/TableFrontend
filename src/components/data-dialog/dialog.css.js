import styled from "@emotion/styled";
import { Dialog, TextField } from "@mui/material";

export const DialogWarp = styled((props) => <Dialog {...props} />)(
    ({ theme }) => `
      .MuiPaper-root {
        width: 500px;
      }

      @media (max-width: 1240px) {
        .MuiPaper-root {
            width: 100%;
        }  
      }
    `
);

export const TextFieldWrap = styled((props) => <TextField {...props} />)(
    ({ theme }) => `
        margin-bottom: 12px;
    `
);