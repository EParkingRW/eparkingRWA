import {Image, Button} from "@chakra-ui/core";
import classes from "./Css.module.css";


export default function Signup(){
    return(
        <div className={"container-fluid "}
        >
            <div className="row">
                <div className="col">
                    <form className={"text-center " + classes.form} id="form">
                        <h1 className={classes.head} id="head">Login</h1>
                        <div><Image className={"rounded img-fluid "+classes.image }id="image" alt={""}
                                  src="logo.svg"/></div>
                        <div className="form-group mb-3"><input className={"form-control "+classes.formum} type="email" id="emailControl"
                                                                placeholder="Email"/></div>
                        <div className="form-group mb-3"><input className={"form-control "+classes.formum} type="text" id="usernameControl"
                                                                placeholder="Username"/></div>
                        <div className="form-group mb-3"><input className={"form-control "+classes.formum} type="tel" id="phoneControl"
                                                                placeholder="phone"/></div>
                        <Button
                            as="a"
                            fontWeight="medium"
                            colorScheme='blue' variant='outline'
                            mt={4}
                            maxW="200px"

                        >
                            Signup
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}