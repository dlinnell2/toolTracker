import React, { Component } from "react";
import API from '../../utils/API';
import { Container, Col, Row } from '../../components/Grid'
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

class ToolList extends Component {

  state = {
    tools: [],
    employees: [],
  };

  componentDidMount() {
    this.getTools()
  }

  getTools = () => {
    API.getTools()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            tools: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  checkToolList = () => {
    if (this.state.tools.length > 0) {
      return (
        <List>
          {this.state.tools.map(tool => (
            <ListItem tool={tool} key={tool._id}/>
          ))}
        </List>
      )
    } else {
      return (
        <p>No Tools</p>
      )
    }
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Choose a tool below to check out</h1>
        </Jumbotron>
        <Row>
          <Col size='md-4'>
            {this.checkToolList()}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ToolList