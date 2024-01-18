import React from "react"

import styles from "./Person.module.css"

class Person extends React.Component {
  render() {
    const { name, birth_year, gender, hair_color, height, mass, skin_color } =
      this.props.person

    return (
      <div className={styles.person}>
        <div className={styles.person_title}>
          <span className={styles.person_name}>{name}</span>
          {birth_year && <span>(birth year: {birth_year})</span>}
        </div>
        <div className={styles.description}>
          <div className={styles.description_title}>Description:</div>
          <div>gender: {gender}</div>
          <div>height: {height}</div>
          <div>mass: {mass}</div>
          <div>hair color: {hair_color}</div>
          <div>skin color: {skin_color}</div>
        </div>
      </div>
    )
  }
}

export default Person
