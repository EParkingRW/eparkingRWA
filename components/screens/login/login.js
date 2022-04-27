import {Image, Button} from "@chakra-ui/core";
import classes from "./Css.module.css";
import React from "react";

export default function Login(){
    return(
        <div className={"container-fluid "}
        >
            <div className="row">
                <div className="col">
                    <form className={"text-center " + classes.form} id="form">
                        <h1 className={classes.head} id="head">Login</h1>
                        <div><Image className={"rounded img-fluid "+classes.image }id="image" alt={""}
                                  src="logo.svg"/></div>
                        <div className="form-group mb-3"><input className={"form-control "+classes.formum} type="email" id="formum"
                                                                placeholder="Email"/></div>
                        <div className="form-group mb-3"><input className={"form-control "+classes.formum2} type="password" id="formum2"
                                                                placeholder="Password"/></div>
                        <Button
                            as="a"
                            href="/dashboard"
                            fontWeight="medium"
                            colorScheme='blue' variant='outline'
                            mt={4}
                            maxW="200px"

                        >
                            Login
                        </Button>
                        <a id="linkas" className={classes.linkas} href="#">Forgot your e mail or password?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}