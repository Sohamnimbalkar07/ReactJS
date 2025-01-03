import React, { Component } from "react";

class Footer extends Component {

    constructor(props)
     {
        super();
        this.state={
            id : props.id,
            name : props.name
        }
    }
    
    render()
    {
        return (
              <div> this is footer
              <h1> {this.state.id} ----- {this.state.name}</h1>
              <h1> {this.props.id} ----- {this.props.name}</h1>
              </div>
        )
    }
}
export default Footer;