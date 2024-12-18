import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthFormProps, IUserData } from "../../constants/types";
import {
  FORGOT_PASSWORD_FORM_TITLE,
  FORGOT_PASSWORD_PAGE_URL,
  HOME_PAGE_URL,
  LOGIN_FORM_TITLE,
  REGISTRATION_PAGE_URL,
} from "../../constants";
import "./AuthForm.css";

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  submitButtonText,
}) => {
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    password: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} className="auth-form">
        <Box display="flex" justifyContent="flex-start">
          <Link to={HOME_PAGE_URL} className="auth-form__link">
            &larr; Home page
          </Link>
        </Box>
        <Typography variant="h5" component="h1" className="auth-form__title">
          {title}
        </Typography>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          value={userData.username}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label={
            title === FORGOT_PASSWORD_FORM_TITLE ? "New Password" : "Password"
          }
          name="password"
          type="password"
          variant="outlined"
          value={userData.password}
          onChange={handleChange}
          required
          fullWidth
        />
        {title === FORGOT_PASSWORD_FORM_TITLE && (
          <TextField
            label="Repeat new password"
            name="newPassword"
            type="password"
            variant="outlined"
            value={userData.newPassword}
            onChange={handleChange}
            required
            fullWidth
          />
        )}
        {title === LOGIN_FORM_TITLE && (
          <Box display="flex" flexDirection="column">
            <Link to={REGISTRATION_PAGE_URL} className="auth-form__link">
              Create new account
            </Link>
            <Link to={FORGOT_PASSWORD_PAGE_URL} className="auth-form__link">
              Forgot your password?
            </Link>
          </Box>
        )}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {submitButtonText}
        </Button>
      </Box>
    </Container>
  );
};
