import React from "react";
import { Container,Button } from "reactstrap";
const Home = () => {
  return (
    <div className="text-center">
        
        <h1>Leaning react</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur
          maiores commodi quas voluptatibus tempora provident explicabo, quod,
          cumque quos consequatur. Ipsa ea inventore, sit iste consequuntur eius
          commodi cupiditate?
        </p>
        <Container>
            <Button color="dark" outline>Start using</Button>
        </Container>
    </div>
  );
};
export default Home;
