import * as yup from 'yup';

const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export const contactSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRegex, { message: "Invalid Name" }).required("Name Required"),
    email: yup.string().matches(emailRegex, { message: "Invalid Email. Example: (name@domain.com)" }).required("Email Required"),
    comments: yup.string().min(5, "Must be at least 5 characters long").required("Comment Required")
})