import React from 'react'

class Item extends React.Component {

    constructor(){
        super()
        this.state = {
            times : 1,
            tR : 10
        }
    }

      clickMe = () => {
           this.setState({
               times : this.state.times * 2,
               tR : this.state.tR + 20
           })
        }
  render(){
    return(
      <div>
        <h1 onClick={() => this.clickMe()}>
        This is the new {this.props.name} website
      </h1> <span>
        The text is been clicked at {this.state.times} times and the tR is increasing at {this.state.tR} %
      </span>
       
      </div>
    )
  }
}

export default Item