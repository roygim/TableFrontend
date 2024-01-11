import React from 'react';
import { Box, Button, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogWarp, TextFieldWrap } from './dialog.css';
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import MyDatePicker from '../../core/formik/my-date-picker';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';

function DataDialog({ open, closeDialog, currentData, handleAddUser }) {
    const initialValue = {
        id: currentData?.id || 0,
        userId: currentData?.userId || "",
        name: currentData?.name || "",
        email: currentData?.email || "",
        birthday: null,
        gender: currentData?.gender || null,
        phone: currentData?.phone || ""
    }

    const formVaildation = Yup.object({
        userId: Yup.number().typeError('מספרים בלבד').min(1, "מספר גדול מאפס").required("שדה חובה"),
        name: Yup.string().required("שדה חובה"),
        email: Yup.string().email('מייל לא תקין'),
        birthday: Yup.date().typeError('שדה חובה').required(),
        phone: Yup.number().typeError('מספרים בלבד').min(1, "מספר גדול מאפס"),
    });

    const submit = (values, props) => {
        if (currentData) {

        } else {
            const newUser = {
                userId: values.userId.toString(),
                name: values.name,
                email: values.email,
                birthday: format(new Date(values.birthday), "MM/dd/yy", { locale: he }),
                gender: values.gender || '',
                phone: values.phone.toString(),
            }
            handleAddUser(newUser)
        }
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
                                        name="userId"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={props.values.userId}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="userId" />}
                                        error={props.errors.userId && props.touched.userId}
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
                                    <TextFieldWrap
                                        label="טלפון"
                                        name="phone"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={props.values.phone}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="phone" />}
                                        error={props.errors.phone && props.touched.phone}
                                        min="1"
                                        sx={{ mt: "16px" }}
                                    />
                                    <FormControl component="fieldset" sx={{ mt: "16px" }}>
                                        <FormLabel component="legend">מין</FormLabel>
                                        <RadioGroup
                                            name={"gender"}
                                            value={props.values.gender}
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            row
                                        >
                                            <FormControlLabel value="Male" control={<Radio />} label="זכר" />
                                            <FormControlLabel value="Female" control={<Radio />} label="נקבה" />
                                            <FormControlLabel value="Other" control={<Radio />} label="אחר" />
                                        </RadioGroup>
                                    </FormControl>
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