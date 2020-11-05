import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { grey, green } from "@material-ui/core/colors";
import * as yup from "yup";
import { Formik } from "formik";

import SingleActionGeneralDialog from "../../Molecules/SingleActionGeneralDialogComponent/index";

const useStyles = makeStyles((theme) => ({
  imageStyleMobile: {
    width: "130px",
    height: "100px",
  },

  whiteBorderStyle: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[900],
    },

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[900],
    },
    "& .MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated .MuiInputLabel-outlined": {
      borderColor: grey[900],
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[900],
    },
  },

  textColor: {
    color: grey[900],
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SingleSignUp = ({ submitForm }) => {
  const classes = useStyles({});

  let formValidationSchema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email().min(4),
  });

  const initialValues = {
    name: "",
    message: "",
    email: "",
    subscribed: false,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={async (values, resetForm) =>
          await submitForm(values, resetForm)
        }
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          resetForm,
          values,
          touched,
          errors,
        }) => (
          <Grid
            style={{ width: "inherit", height: "inherit" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography
                    color="textPrimary"
                    style={{ width: "100%" }}
                    variant="h3"
                  >
                    Inquiry form submission
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={errors.name && touched.name}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name ? errors.name : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="Name"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email ? errors.email : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="Email"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    style={{ minWidth: "100%", maxWidth: "100%" }}
                    rowsMin={10}
                    placeholder="Your message goes here"
                    value={values.message}
                    name="message"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <GreenCheckbox
                    value={values.subscribed}
                    name="subscribed"
                    color="primary"
                    onChange={handleChange}
                  ></GreenCheckbox>
                  Do you want to subscribe to the newsletter?
                </Grid>

                <Grid item xs={5}>
                  <Button
                    style={{ width: "100%" }}
                    variant="outlined"
                    onClick={() => handleSubmit(values, resetForm)}
                  >
                    Submit ticket
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
};

export default SingleSignUp;
