import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_EMPLOYEE} from "../utils/actions";
function Detail(props) {
  const [state, dispatch] = useStoreContext();
  useEffect(()=>{
    API.getEmployee(props.match.params.id)
    .then(res => dispatch({ type: SET_CURRENT_EMPLOYEE, employee: res.data}))
    .catch(err => console.log(err))
  }, []);

  return (
    <>{state.currentEmployee ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{state.currentEmployee.name}</h1>
              <h2>{state.currentEmployee.title} {state.currentEmployee.department}</h2>
              <h2>{state.currentEmployee.Email}</h2>
            </Jumbotron>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to List</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
}

export default Detail;
