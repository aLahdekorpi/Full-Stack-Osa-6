import React from 'react'
import { aneCreation } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdoteService'


class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const newAne = await anecdoteService.createNew(content)
    aneCreation(newAne)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification : state.notification
  }
}

const ConnectedAnecdoteForm = connect(mapStateToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
