import React from "react"
import Person from "./Person"

import styles from "./People.module.css"

class People extends React.Component {
  render() {
    const people = this.props.people
    const isLoading = this.props.isLoading
    const error = this.props.error

    if (isLoading) return <div className={styles.loading}>Loading...</div>
    if (error) return <div className={styles.error}>{error}</div>

    return (
      <>
        {people.length !== 0 ? (
          <div className={styles.people}>
            {people.map((person) => (
              <Person key={person.url} person={person} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>The list is empty</div>
        )}
      </>
    )
  }
}

export default People
