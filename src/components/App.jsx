import React from "react"

import Input from "./Input"
import People from "./People"
import NextPage from "./NextPage"

import styles from "./App.module.css"

let timerId

class App extends React.Component {
  state = {
    name: "",
    people: [],
    isLoading: false,
    isNextPageLoading: false,
    error: null,
    nextPage: null,
  }

  setName = (e) => this.setState({ name: e.target.value })

  getPeople = () => {
    try {
      if (timerId) {
        clearInterval(timerId)
      }

      timerId = setInterval(async () => {
        this.setState({ isLoading: true })

        const response = await fetch(
          `https://swapi.dev/api/people/?search=${this.state.name}`
        )

        const people = await response.json()

        this.setState({
          people: people.results,
          isLoading: false,
          nextPage: people.next,
          error: null,
        })

        clearInterval(timerId)
      }, 500)
    } catch (error) {
      console.log(error)

      this.setState({
        error: "An error occurred while receiving data",
        isLoading: false,
      })
    }
  }

  nextPage = async () => {
    try {
      this.setState({ isNextPageLoading: true })

      const response = await fetch(this.state.nextPage)

      const people = await response.json()

      this.setState((prevState) => {
        return {
          people: [...prevState.people, ...people.results],
          nextPage: people.next,
          error: null,
        }
      })
    } catch (error) {
      console.log(error)

      this.setState({
        error: "An error occurred while receiving data",
      })
    } finally {
      this.setState({
        isNextPageLoading: false,
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.name !== prevState.name) {
      this.getPeople()
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Input name={this.state.name} handleChangeName={this.setName} />
        <People
          people={this.state.people}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
        <NextPage
          nextPage={this.state.nextPage}
          isLoading={this.state.isNextPageLoading}
          handleChangePage={this.nextPage}
        />
      </div>
    )
  }
}

export default App
