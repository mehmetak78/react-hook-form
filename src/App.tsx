import React from "react";

import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {Input, TextField} from "@mui/material";
import Select from "react-select";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


interface IFormInput {
    firstName: string;
    lastName: string;
    sample: string;
    sss: string;
    iceCreamType: { label: string; value: string };
}

const schema = yup.object({
    sample: yup.string().required().max(10),
    sss: yup.number().positive().integer().required(),
}).required();

const App = () => {
    const {control, register, formState: {errors}, handleSubmit} = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({field}) => <Input {...field} />}
            />
            <Controller
                name="iceCreamType"
                control={control}
                rules={{ required: true }}
                render={({field}) =>
                    <Select
                        {...field}
                        options={[
                            {value: "chocolate", label: "Chocolate"},
                            {value: "strawberry", label: "Strawberry"},
                            {value: "vanilla", label: "Vanilla"}
                        ]}
                    />}
            />

            <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="test"
                       {...register("sample", {required: true, maxLength: 10})}
            />
            {errors.sample?.type === 'required' && "First name is required"}
            <p>{errors.sample?.message}</p>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="test"
                       {...register("sss", {required: "Email Address is required"})} />
            <p>{errors.sss?.message}</p>
            <input type="submit"/>
        </form>
    );
};

export default App;