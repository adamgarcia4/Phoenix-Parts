// import React from 'react'
// import cx from 'classnames'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import './Style.css'

const Paper = styled.div`
  background-color: #fff;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 16px;
`

export default Paper

// const Paper = props => {
//   const { children, className } = props

//   return <div className={cx('paper', className)}>{children}</div>
// }

// Paper.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string
// }