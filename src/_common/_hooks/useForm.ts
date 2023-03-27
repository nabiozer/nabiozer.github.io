import {useForm as useHookForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
interface IProps {
    defaultValues: any;
    validationSchema:any;
}


const yupValidation = (validItems:any) => {
    const schema = yup.object().shape(validItems);
    return yupResolver(schema);
}


const useForm = ({defaultValues,validationSchema}:IProps) => {
    const {
        control,
        handleSubmit,
        formState:{ errors },
        resetField,
        setValue,
        watch,
        getValues,
        clearErrors,
        reset,
        setError,
        setFocus,
        trigger,
    } = useHookForm({
        defaultValues: {...defaultValues},
        resolver:yupValidation({...validationSchema}),
        reValidateMode:'onChange',
        mode:'onBlur'
    });

    const setFieldError = (fieldName:string,errorMsg:string) => {
        setError(fieldName,{
            type:'manual',
            message:errorMsg,
        })
    };

    return {
        control,
        errors,
        handleSubmit,
        setValue,
        watch,
        getValues,
        clearErrors,
        reset,
        resetField,
        setError,
        setFieldError,
        setFocus,
        trigger,
    };
};

export default useForm