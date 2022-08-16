import React from "react";
import 
{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    CardText
}  from "reactstrap";
const Courses = ({course}) =>{
    return(
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container >
                        <Button color="warning" outline>Delete</Button>
                        <Button color="success ml-3" outline>Update</Button>
                    </Container>
                </CardBody>
            </Card>
    )
};

export default Courses;