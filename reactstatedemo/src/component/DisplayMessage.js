import React, {Component} from 'react';
class DisplayMessage extends Component
{
    constructor()
    {
        super()
        this.state= {
            msg:"this is first message",
            name:"Soham"
        }
    }

    changeMessage=()=> 
    {
        this.setState({msg:"this is msg after click"})
    }


    render()
    {
        return (
            <div>
            {this.state.msg}
            {this.state.name}
            <input type="text" value={this.state.name} onChange={(event)=> {this.setState({name:event.target.value})}}></input>
            <button type="button" name="btn" value="click" onClick= {this.changeMessage} > change the text </button>
            </div>
        )
    }
}

export default DisplayMessage;