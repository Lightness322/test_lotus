import React from "react"

import styles from "./NextPage.module.css"

class NextPage extends React.Component {
  render() {
    const nextPage = this.props.nextPage
    const isLoading = this.props.isLoading
    const handleChangePage = this.props.handleChangePage

    return (
      <>
        {nextPage && (
          <div className={styles.next_page}>
            {isLoading ? (
              <span className={styles.loading}>Loading...</span>
            ) : (
              <button className={styles.button} onClick={handleChangePage}>
                Show more people
              </button>
            )}
          </div>
        )}
      </>
    )
  }
}

export default NextPage
