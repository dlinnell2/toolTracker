import React, { Component } from "react";
import API from '../../utils/API'

class ToolList extends Component{

    state = {
        tools: [],
        employees: [],
      };
    
      componentDidMount() {
        API.getTools()
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    
      checkDB = () => {
        API.checkDb()
          .then(res => {
            if (res.status === 200) {
              this.setState({
                database: "Connected to DB"
              })
            }
          })
          .catch(err => console.log(err))
      }

    render() {
        return(
            <div></div>
        )
    }
}

export default ToolList