import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(2)
}));

const validationSchema = yup.object({
    fullName: yup
        .string('Enter your full name.')
        .min(5, 'Full name should be at least 5 characters.')
        .required('Full name is required.'),
    email: yup
        .string('Enter your email.')
        .email('Enter a valid email.')
        .required('Email is required.'),
    message: yup
        .string('Enter your message.')
        .min(5, 'Message should be at least 5 characters.')
        .required('Message is required.')
});

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const ContactForm = (props) => {
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submitForm(values);
        }
    });

    const submitForm = (values) => {
        formik.resetForm();

        const encodedValues = encode({
            'form-name': 'contactForm',
            ...values
        });

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encodedValues
        })
            .then(() => {
                setError(false);
                setSent(true);
            })
            .catch(() => {
                setError(true);
            });
    };

    let message;

    if (error)
        message = (
            <Typography color="#f44336" mt={1}>
                Something went wrong!
            </Typography>
        );

    if (sent)
        message = (
            <Typography color="text.secondary" mt={1}>
                Message sent successfully.
            </Typography>
        );

    return (
        <form
            data-netlify="true"
            name="contactForm"
            onSubmit={formik.handleSubmit}
        >
            <input type="hidden" name="form-name" value="contactForm" />
            <StyledTextField
                id="fullName"
                name="fullName"
                label="Full name"
                variant="outlined"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <StyledTextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <StyledTextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows={10}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
            />
            <Button disabled={sent} type="submit" variant="contained">
                Send
            </Button>
            <Button
                onClick={props.handleModelOpen}
                variant="text"
                sx={{ ml: 1 }}
            >
                Contact directly
            </Button>
            {message}
        </form>
    );
};

export default ContactForm;
