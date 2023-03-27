import React from 'react';
import {Control} from 'react-hook-form';

export interface ICommonForm {
    control: Control;
    errors:any;
}

export interface ICommonFieldProps extends ICommonForm {
    errorText?:string;
    readOnly?:boolean;
    labelActive?:boolean;
    size?:'small'|'medium'|'large' | 'xlarge' ;
    className?:string;
    helperText?:React.ReactNode;
    startAdornment?:React.ReactNode;
    endAdornment?:React.ReactNode;
    name:string;
    id?:string;
    tabIndex?:number;
}