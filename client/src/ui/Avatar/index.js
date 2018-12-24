import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Style.css'

/* border: ${props => (props.border ? '2px solid #fff' : '')}; */
/* transform: ${props => (props.overlap ? 'translateX(-40px)' : '')}; */
class Avatar extends Component {
  render() {
    let { img, fullName } = this.props
    const { user, onClick, className, onHover } = this.props

    if (user) {
      fullName = `${user.first_name || ''} ${user.last_name || ''}`
      img = user.img_url || ''
    }

    const getAvatar = () => {
      const initialedName = fullName.split(' ').map(word => word.charAt(0))

      const getContent = () => {
        if (img) {
          return <img
            src={img}
            alt={fullName} />
        }

        return initialedName
      }

      return (
        <div //eslint-disable-line
          className={cx('Avatar', className)}
          onClick={onClick}
          onMouseEnter={onHover(true)}
          onMouseLeave={onHover(false)}
          >
          {getContent()}
        </div>
      )
    }

    return getAvatar()
  }
}

Avatar.propTypes = {
  img: PropTypes.string,
  fullName: PropTypes.string,
  user: PropTypes.object,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  className: PropTypes.string
}

Avatar.defaultProps = {
  img: null,
  fullName: 'Not Available',
  user: null,
  onHover: () => {}
}

export default Avatar
// TODO: Add bg and color overrides
// TODO: Add sm md lg properties
