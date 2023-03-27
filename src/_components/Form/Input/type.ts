import {OutlinedTextFieldProps} from '@mui/material'
import {ICommonFieldProps} from '../commonTypes'

export interface ITextFieldProps extends Omit<OutlinedTextFieldProps, 'variant' | 'size' | 'margin' | 'oneKeyDown' | 'onFocus' | 'onKeyUp' | 'name' >,
ICommonFieldProps {
    maskFormat?:any;
    maxLength?:number;
    minLength?:number;
    watch?: (val:any) => void;
}