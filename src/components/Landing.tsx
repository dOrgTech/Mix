import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  mainContainer: {
    background: 'black',
    height: '100vh',
    width: '100%'
  }
})

export const Landing: React.FC<{}> = () => {

  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      
    </div>
  )
}