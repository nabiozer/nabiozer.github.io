import {
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ITextFieldProps } from "./type";
import { getMessage } from "../_helper";
import { FC, useEffect } from "react";
import {useWatch} from "../../../_common/_hooks/useWatch";

const Input: FC<ITextFieldProps> = ({
  name,
  control,
  errors,
  helperText,
  label,
  labelActive,
  id = uuidv4(),
  autoComplete = "off",
  type = "text",
  className = "",
  size = "large",
  disabled,
  readOnly,
  required,
  hidden = false,
  autoFocus = false,
  startAdornment,
  endAdornment,
  maxLength,
  minLength,
  watch,
  ...rest
}: ITextFieldProps) => {
  const formInputValue = useWatch({ control, fieldName: name });

  useEffect(() => {
    watch && watch(formInputValue);
    //eslint-disable-next-line
  }, [formInputValue]);
  return (
    <FormControl
      variant="outlined"
      error={!!getMessage(errors, name)}
      className={`custom-outlined-input ${size} ${className}`}
      disabled={disabled}
      required={required}
      hidden={hidden}
      fullWidth
    >
      <InputLabel htmlFor={id} {...(labelActive ? { shrink: true } : {})}>
        {label}
      </InputLabel>
      <Controller
        render={({ field }: any) => {
          return (
            <OutlinedInput
              {...field}
              type={type}
              readOnly={readOnly}
              autoFocus={autoFocus}
              label={label}
              autoComplete={autoComplete}
              notched={labelActive}
              inputProps={{
                maxLength: maxLength,
                minLength: minLength,
              }}
              onChange={(data: any) => {
                field.onChange(data.target.value);
              }}
              {...rest}
              {...(startAdornment
                ? {
                    startAdornment: (
                      <InputAdornment position="start">
                        {startAdornment}
                      </InputAdornment>
                    ),
                  }
                : {})}
              {...(endAdornment
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        {endAdornment}
                      </InputAdornment>
                    ),
                  }
                : {})}
            />
          );
        }}
        name={name}
        control={control}
      />
      {(!!getMessage(errors, name) || helperText) && (
        <FormHelperText id="component-error-text">
          {getMessage(errors, name) || helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
