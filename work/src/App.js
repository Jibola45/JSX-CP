import React from "react";
import Name from "./Name";
import Price from "./Price"
import Description from "./Description"
import Image from "./Image"
import {Card} from "react-boostrap"
import "./styles.css";


const app = () =>{
  const firstName = "Clinton"; // Replace with your first name or leave it 





  return (

    <div>
      <Card> 
        <Card.Body>
          <Card.Title>
            <Name/>
          </Card.Title>
          <Card.Text>
            <Image/>
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="greeting-text">
        Hello,{firstName? firstName : "there"}!

      </p>
    </div>


    
  );

  };
export default App;
