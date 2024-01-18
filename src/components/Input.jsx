import React from "react"

import styles from "./Input.module.css"

class Input extends React.Component {
  render() {
    return (
      <input
        className={styles.search}
        placeholder="Find people..."
        value={this.props.name}
        onChange={this.props.handleChangeName}
      />
    )
  }
}

export default Input
