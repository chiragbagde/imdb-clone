import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const HomePage = (props) => {
    return (
        <div className="form-warpper">
            <br />
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <br /><h4>Movie Name:</h4>
                        <Field name="name" type="text"
                        className="form-control" />
                         <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <FormGroup>
                        <br /><h4>Box Office:</h4>
                        <Field name="boxoffice" type="number"
                        className="form-control" />
                         <ErrorMessage
                            name="boxoffice"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <FormGroup>
                        <br /><h4>Rating:</h4>
                        <Field name="imdb" type="text"
                        className="form-control" />
                         <ErrorMessage
                            name="imdb"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <br /><Button variant="danger" size="md"
                      block="block" type="submit" >
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

export default HomePage;