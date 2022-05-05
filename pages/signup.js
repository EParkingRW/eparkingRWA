import {Signup} from "@/components/screens/signup";
import React from "react";
import { getLayout } from '@/layouts/dashboard';
const SignUpPage = () =>{
    return(
        <Signup/>
    )
};
SignUpPage.getLayout = getLayout;
export default SignUpPage