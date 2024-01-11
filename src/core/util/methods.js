export const getGender = (gender) => {
    switch (gender) {
        case "Male":
            return "זכר"
        case "Female":
            return "נקבה"
        case "Other":
            return "אחר"
        default:
            return ''
    }
};