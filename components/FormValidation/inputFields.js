import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Mail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import useStyles from "./style";

/** Email Input Filed */
export const EmailInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
}) => (
  <Box sx={{ mt: 1 }}>
    <Typography variant="subtitle2" color="onBackground.dark">
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>
    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      id={name}
      name={name}
      size="small"
      type="email"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

/** Email Input Filed with Icon */
export const EmailInputFieldWithIcon = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
  size = "small",
}) => (
  <Box sx={{ mt: 1 }}>
    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Mail />
          </InputAdornment>
        ),
      }}
      id={name}
      name={name}
      label={label}
      size={size}
      type="email"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

/** Text Input Filed */
export const TextInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
}) => (
  <Box sx={{ mt: 1 }}>
    <Typography variant="subtitle2" color="onBackground.dark">
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>
    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      id={name}
      name={name}
      size="small"
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

/** Number Input Filed */
export const NumberInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
}) => (
  <Box sx={{ mt: 1 }}>
    <Typography variant="subtitle2" color="onBackground.dark">
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>
    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      id={name}
      name={name}
      size="small"
      type="number"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

/** Password Input Filed */
export const PasswordInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggle = () => setShowPassword(!showPassword);
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="subtitle2" color="onBackground.dark">
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <TextField
        className={classNames ?? undefined}
        fullWidth={fullWidth}
        id={name}
        name={name}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggle}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        type={showPassword ? "text" : "password"}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
        helperText={formikRef.touched[name] && formikRef.errors[name]}
      />
    </Box>
  );
};

/** Password Input Filed With Icon*/
export const PasswordInputFieldWithIcon = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
  size = "small",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggle = () => setShowPassword(!showPassword);
  return (
    <Box sx={{ mt: 1 }}>
      <TextField
        className={classNames ?? undefined}
        fullWidth={fullWidth}
        id={name}
        name={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggle}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label={label}
        size={size}
        type={showPassword ? "text" : "password"}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
        helperText={formikRef.touched[name] && formikRef.errors[name]}
      />
    </Box>
  );
};

/** TextArea Input Filed */
export const TextAreaInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  minRows,
  isRequired,
}) => (
  <Box sx={{ mt: 1 }}>
    <Typography variant="subtitle2" color="onBackground.dark">
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>
    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      id={name}
      name={name}
      size="small"
      minRows={minRows}
      multiline
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

// Date Input Field
export const DatePickerInputField = ({
  formikRef,
  name,
  label,
  placeHolder,
  value,
  handleChange,
  classNames,
  fullWidth,
  isRequired,
}) => (
  <Box sx={{ mt: 1 }}>
    <Typography variant="subtitle2" color="onBackground.dark">
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>

    <TextField
      className={classNames ?? undefined}
      fullWidth={fullWidth}
      id={name}
      name={name}
      size="small"
      type="date"
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      helperText={formikRef.touched[name] && formikRef.errors[name]}
    />
  </Box>
);

export const RadioButtonsGroupField = ({
  formikRef,
  name,
  label,
  value,
  options,
  handleChange,
  classNames,
  isRequired,
}) => {
  return (
    <Box sx={{ p: 1, mt: 1 }}>
      <FormControl
        className={classNames ?? undefined}
        error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
      >
        <FormLabel
          id={`radio-buttons-group-${name}`}
          sx={{ color: "onBackground.dark" }}
        >
          {label} {isRequired && <span style={{ color: "red" }}>*</span>}
        </FormLabel>
        <RadioGroup
          aria-labelledby={`radio-buttons-group-${name}`}
          name={name}
          value={value}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={option.label}
              sx={{ color: "onBackground.light" }}
            />
          ))}
        </RadioGroup>
        <FormHelperText>
          {formikRef.touched[name] && formikRef.errors[name]}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

// Dropdown (select) Input Field

export const DropDownWithInput = ({
  isRequired,
  formikRef,
  name,
  label,
  value,
  options,
  handleChange,
  classNames,
  fullWidth,
}) => {
  const classes = useStyles();
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="subtitle2" color="onBackground.dark">
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Autocomplete
        value={options.find((option) => option.value == value)?.label}
        id={name}
        name={name}
        disablePortal
        onChange={(e, value) =>
          formikRef.setFieldValue(name, value?.value || null)
        }
        options={options}
        fullWidth={fullWidth}
        renderInput={(params) => (
          <TextField
            {...params}
            className={`${classNames ?? undefined} ${classes.root}`}
            fullWidth={fullWidth}
            size="small"
            type="text"
            variant="filled"
            error={formikRef.touched[name] && Boolean(formikRef.errors[name])}
            helperText={formikRef.touched[name] && formikRef.errors[name]}
          />
        )}
      />
    </Box>
  );
};
