import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import firebase from 'firebase'

const firebase = require('firebase')
firebase.initializeApp({
  apiKey: 'AIzaSyDA32je9DdED8WmeK7NVy4CSuQgwDa_ur4',
  authDomain: 'project001-1e86f.firebaseapp.com',
  projectId: 'project001-1e86f',
})

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      name: '',
      speed: '',
    }

    this.dateChange = this.dateChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.speedChange = this.speedChange.bind(this)
  }

  dateChange(event) {
    this.setState({ date: event.target.value })
  }
  handleChange(event) {
    this.setState({ name: event.target.value })
  }
  speedChange(event) {
    this.setState({ speed: event.target.value })
  }

  componentDidMount() {
    // db.collection('users')
    //   .add({
    //     first: 'Ada',
    //     last: 'Lovelace',
    //     born: 1815,
    //     year: 2000,
    //   })
    //   .then(function(docRef) {
    //     console.log('Document written with ID: ', docRef.id)
    //   })
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error)
    //   })
  }

  render() {
    return (
      <div className="App">
        <label>
          date:
          <input
            type="text"
            value={this.state.date}
            onChange={this.dateChange}
          />
        </label>
        <label>
          name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          speed:
          <input
            type="text"
            value={this.state.speed}
            onChange={this.speedChange}
          />
        </label>
        <div>
          <h1>speed is {this.state.speed}</h1>
        </div>
        <button
          onClick={() => {
            db.collection('users').add({
              first: 'Ada',
              last: 'Lovelace',
              born: 1815,
              date: this.state.date,
              name: this.state.name,
            })

            db.collection('cities')
              .doc('LA')
              .set({
                name: 'Los Angeles',
                state: 'CA',
                country: 'USA',
                speed: this.state.speed,
              })
              .then(function(docRef) {
                console.log('Document written with ID: ', docRef.id)
              })
              .catch(function(error) {
                console.error('Error adding document: ', error)
              })
          }}
        >
          {' '}
          Next
        </button>
      </div>
    )
  }
}

export default App
