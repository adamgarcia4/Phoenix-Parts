import React from 'react'
// import PropTypes from 'prop-types'
// import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
// import deepOrange from '@material-ui/core/colors/deepOrange'
// import deepPurple from '@material-ui/core/colors/deepPurple'
import styled from 'styled-components'

function LetterAvatars(props) {
  // user
  const { isImage = true, overlap, border } = props

  // .avatar {
  //   display: inline-block;
  //   text-align: center;
  //   line-height: 50px;
  //   width: 50px;
  //   height: 50px;
  //   background-color: aqua;
  //   font-size: 24px;
  //   border-radius: 50%;
  //   border: 3px solid #fff;
  //   box-sizing: border-box;
  //   vertical-align: top;
  //   overflow: hidden;
  //   position: relative;
  //   margin-right: 0px;
  //   margin-left: -15px;
  //   transition: margin-left .15s ease-in;
  // }

  // .avatar:first-child {
  //   margin-left: 0;
  // }

  // TODO: Add sm md lg properties
  // TODO: Add bg and color overrides
  const BaseAvatar = styled.div`
    /* General Box Sizing */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #bdbdbd;
    color: white;
    margin: 10px;
    border: ${props => (props.border ? '2px solid #fff' : '')};
    transform: ${props => (props.overlap ? 'translateX(-40px)' : '')};

    /* Layout Formatting */
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative; /* Allows for relative placement */

    /* Other */
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.25rem;
    overflow: hidden;

    img {
      height: 40px;
      width: auto;
    }
  `

  // const getInitials = (first, last) => {
  //   return `${first.charAt(0)}${last.charAt(0)}`
  // }

  // const renderedComponent = (user) => {
  //   if (!user) user = {}
  //   if (user.imgUrl) {
  //     return (
  //       <div>
  //         {/* <Avatar alt={getInitials(user.firstName, user.lastName)} src={user.imgUrl} /> */}
  //       </div>
  //     )
  //   }

  //   if (user.auth && !user.imgUrl) {
  //     return (
  //       <div>
  //         <Avatar alt={getInitials(user.firstName, user.lastName)}>
  //           {getInitials(user.firstName, user.lastName)}
  //         </Avatar>
  //       </div>
  //     )
  //   }

  //   return <div>{/* <span className={'avatar'}>AE</span> */}</div>
  // }

  const getAvatar = (isImage) => {
    if (isImage) {
      return (
        <BaseAvatar overlap={overlap} border={border}>
          <img
            src="https://media.licdn.com/dms/image/C5103AQHoTTrJ1xgdvA/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=KUOCOe6XZd31WwgpmLMrccWmgYMiFT8PNi0RQPftpIs"
            alt="Adam Garcia"
          />
        </BaseAvatar>
      )
    }
    return (
      <BaseAvatar overlap={overlap} border={border}>
        AG
      </BaseAvatar>
    )
  }

  return getAvatar(isImage)
}

export default LetterAvatars
