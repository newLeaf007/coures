import { Form,FormGroup,Label,Input,Button,Container } from "reactstrap";
const AddCourse =()=>{
    return(
        <div>
            <h1 className="text center">Fill Course Details</h1>
                <Form>
                    <FormGroup>
                        <Label for="userId">Course Id</Label>
                        <Input type="text" placeholder="Enter the name" name="userId" id="userId"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="title">Course Title</Label>
                        <Input type="text" placeholder="Enter the course title" name="title" id="title"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Course description</Label>
                        <Input type="textarea" placeholder="Enter the course descrition" name="description" id="description"/>
                    </FormGroup>

                    
                        <Container className="text-center">
                            <Button color="success" outline>Add Course</Button>
                            <Button color="warning m-3" outline> Clear</Button>
                        </Container>
                    
                </Form>
        </div>
    )   
}

export default AddCourse;