import React,{useState} from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageLoader from "../PageLoader";


const ProducerForm = () => {
    const [formValues, setFormValues] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const history = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        height: Yup.number()
        .positive("Invalid  number")
        .integer("Invalid  number")
        .required("Required"),
        awards: Yup.string()
        .required("Required")
    });

    const handleSubmit = async (actorObject) => {
        try {
            setLoading(true);
            await axios.put(
                "http://localhost:4000/producers/update-producer/" +
                id,
                actorObject
            )
            alert("Producer updated successfully");
            history("/producers");
        } catch (error) {
            alert('Something went wrong');
        }
        setLoading(false);
    }

    const getActor = async (id) => {
        try {
            const res = await axios
            .get("http://localhost:4000/producers/update-producer/"
            + id 
            )        
            const { name, height, awards } = res.data;
            setFormValues({ name, height, awards });
        } catch (error) {
            console.log(error);
        }
        
        setLoading(false);
    };

    useEffect(() => {
        getActor(id);
    },[])


    if (loading) {
        return (
          <div className="h-screen w-screen">
            <PageLoader />
          </div>
        );
      };

    return (
        <div className="form-warpper">
            {console.log(formValues)}
            <br />
            <Formik initialValues={formValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                {({errors}) => (
                <Form>
                    {console.log(errors)}
                    <FormGroup>
                        <br /><h4>Producer Name</h4>
                        <Field name="name" type="text"
                        className="form-control"/>
                         <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <FormGroup>
                        <br /><h4>Height</h4>
                        <Field name="height" type="number"
                        className="form-control" />
                         <ErrorMessage
                            name="height"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <FormGroup>
                        <br /><h4>Awards</h4>
                        <Field name="awards" type="text"
                        className="form-control" />
                         <ErrorMessage
                            name="awards"
                            className="d-block invalid-feedback"
                            component="span"
                            />
                    </FormGroup>
                    <br /><Button variant="danger" size="md"
                      block="block" type="submit" >
                        Update
                    </Button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProducerForm;