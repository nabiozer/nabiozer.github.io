import React, { useRef, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { IButtonProps} from "./type";
import { useHistory } from "react-router-dom";

export default (props: IButtonProps) => {
  const history = useHistory();
  const {
    id,
    name,
    text,
    className,
    style,
    loading,
    onRef,
    disabled,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth,
    centerRipple,
    onClick,
    iconLeft,
    iconRight,
    href,
    type,
    component,
    outlined = false,
    upperCase,
    link,
    size = "medium",
    color = "default",

  } = props;

  const button = useRef();

  useEffect(() => {
    onRef && onRef(button);
  }, []);

  return (
    <Button
      id={id}
      name={name}
      variant='outlined'
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      href={href}
      fullWidth={fullWidth}
      centerRipple={centerRipple}
      type={type}
      className={`custom-outlined-button ${size} ${color || "default" } 
      ${
        outlined ? "outlined" : ""
      } 
      
      
      
      ${className || ''}   
        ${upperCase ? "upparcase" : ""}
       `
      }
      style={style}
      onClick={(e: any) => {
        onClick && onClick(e);
        link && history.push(link);
      }}
      buttonref={button}
      component={component}
    >
      {loading ? (
        <CircularProgress size={20} />
      ) : (
        <span className="MuiButton-label">
          {iconLeft || null}
          {text}
          {iconRight || null}
        </span>
      )}
    </Button>
  );
};
