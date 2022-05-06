import {Image, Button} from "@chakra-ui/core";
import classes from "./Css.module.css";
import {useContext, useRef} from "react";
import UserContext from "@/components/context/UserContext";


export default function Login(){
    const {handleLogin} = useContext(UserContext)
    const login = useRef();
    const password = useRef();

    const handleSubmit = () =>{
        handleLogin({login:login.current.value, password: password.current.value});
    }
    return(
        <div className={"container-fluid "}
        >
            <div className="row">
                <div className="col">
                    <form className={"text-center " + classes.form} id="form">
                        <h1 className={classes.head} id="head">Login</h1>
                        <div><Image className={"rounded img-fluid "+classes.image }id="image" alt={""}
                                  src="logo.svg"/></div>
                        <div className="form-group mb-3"><input ref={login} className={"form-control "+classes.formum} type="email" id="formum"
                                                                placeholder="Email"/></div>
                        <div className="form-group mb-3"><input ref={password} className={"form-control "+classes.formum2} type="password" id="formum2"
                                                                placeholder="Password"/></div>
                        <Button
                            onClick={() => handleSubmit()}
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