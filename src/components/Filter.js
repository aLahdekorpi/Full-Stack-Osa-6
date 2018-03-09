import React from 'react'
import filterReducer from '../reducers/filterReducer'

class Filter extends React.Component {
    handleChange = (event) => {
      event.preventDefault()
      this.props.store.dispatch(filterReducer(event.target.value))
      //console.log(this.props.store.getState().filter)
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
}
export default Filter