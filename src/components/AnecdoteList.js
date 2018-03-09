import React from 'react'
import { connect } from 'react-redux'


class AnecdoteList extends React.Component {

  render() {

    const anecdotesToShow = () => {
      const dotes = this.props.anecdotes.sort((a, b) => b.votes - a.votes)
      return dotes
    }


    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow().map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => 
                this.props.dispatch({ type: 'VOTE', id: anecdote.id })
              }>
                vote
              </button>
            </div>
          </div>
        )}
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
const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdoteList
