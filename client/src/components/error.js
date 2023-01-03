import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const Error = (props) => {

      const [show, setShow] = useState(true);

   return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {props.error}
        </p>
      </Alert>
    );

}
export default Error