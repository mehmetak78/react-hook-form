import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {TextField} from "@mui/material";

interface IFormInputs {
    firstName: string
    age: number
}

const schema = yup.object({
    firstName: yup.string().required("Ad gerekli"),
    age: yup.number().positive().integer().required(),
}).required();

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <input {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    );
}
