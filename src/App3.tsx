import React from "react";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {Checkbox} from "@mui/material";


interface IFormInputs {
    TextField: string
    MyCheckbox: boolean
}

export default function App() {
    const {handleSubmit, control, formState: { errors },reset} = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="MyCheckbox"
                control={control}
                defaultValue={false}
                rules={{required: true}}
                render={({field}) => <Checkbox {...field} />}
            />
            {errors.MyCheckbox && "First name is required"}
            <input type="submit"/>
        </form>
    );
}