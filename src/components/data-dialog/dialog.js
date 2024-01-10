import React from 'react';
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogWarp, TextFieldWrap } from './dialog.css';
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import MyDatePicker from '../../core/formik/my-date-picker';

function DataDialog({ open, closeDialog, currentData }) {
    const initialValue = {
        id: currentData?.id || "",
        name: currentData?.name || "",
        email: currentData?.email || "",
        birthday: null,
    }

    const formVaildation = Yup.object({
        id: Yup.number().typeError('מספרים בלבד').min(1, "מספר גדול מאפס").required("שדה חובה"),
        name: Yup.string().required("שדה חובה"),
        email: Yup.string().email('מייל לא תקין'),
        birthday: Yup.date().typeError('שדה חובה').required(),
    });

    const submit = (values, props) => {
        console.log(values);
    }

    return (
        <Box className="DataDialog">
            <DialogWarp
                open={open}
                onClose={closeDialog}
                sx={{
                    "& .MuiDialog-container": {
                        textAlign: "left",
                        direction: "ltr"
                    },
                }}
            >
                <DialogTitle>{currentData ? 'עדכון' : 'הוספה'}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={closeDialog}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Formik
                    initialValues={initialValue}
                    validationSchema={formVaildation}
                    onSubmit={submit}
                >
                    {(props) => {
                        return (
                            <Form>
                                <DialogContent sx={{ pt: "0" }}>
                                    <TextFieldWrap
                                        label="תעודת זהות"
                                        name="id"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={props.values.id}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="id" />}
                                        error={props.errors.id && props.touched.id}
                                        disabled={currentData ? true : false}
                                        min="1"
                                    />
                                    <TextFieldWrap
                                        label="שם"
                                        name="name"
                                        fullWidth
                                        variant="standard"
                                        value={props.values.name}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="name" />}
                                        error={props.errors.name && props.touched.name}
                                    />
                                    <TextFieldWrap
                                        label="מייל"
                                        name="email"
                                        fullWidth
                                        variant="standard"
                                        value={props.values.email}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="email" />}
                                        error={props.errors.email && props.touched.email}
                                    />
                                    <MyDatePicker name="birthday" initVal={currentData?.birthday} />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={closeDialog}>ביטול</Button>
                                    <Button type="submit">
                                        שמור
                                    </Button>
                                </DialogActions>
                            </Form>
                        )
                    }}
                </Formik>
            </DialogWarp>
        </Box >
    );
}

export default DataDialog;