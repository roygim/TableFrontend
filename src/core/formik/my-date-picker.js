import { FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";

const MyDatePicker = ({ name = "" }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    const configTextfield = {
        ...field,
    }

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.errorText = field.value ?
            "תאריך לא תקין"
            :
            "שדה חובה";
    }

    return (
        <>
            <DatePicker
                {...configTextfield}
                label="תאריך לידה"
                selected={value}
                onChange={(date) => setValue(date)}
                sx={{ width: "100%", m: "8px 0 0 0" }}
                slotProps={{ textField: { variant: 'standard', } }}
            />
            <FormHelperText sx={{ color: "#d32f2f" }}>
                {configTextfield.errorText}
            </FormHelperText>
        </>
    )
}

export default MyDatePicker;