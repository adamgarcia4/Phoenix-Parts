import React, { Component } from 'react'
import ReactTable from 'react-table'

import Button from '../../ui/Button'
import Pill from '../../ui/Pill'
import Paper from '../../ui/Paper'
import Surface from '../../ui/Surface'

import styled from 'styled-components'

import Avatar from '../../ui/Avatar'

const Container = styled.div`
  min-height: 20vh;
`

const BackgroundBlue = styled.div`
  /* background-color: lightBlue; */
`

class PartsTableDetails extends Component {
  getHeader = () => {
    return (
      <div className="row">
        <BackgroundBlue className="col-12">
          <div className="row">
            <div className="col-md-4">
              <Pill> Part Name</Pill> Drive Shaft <br />
            </div>
            <div className="col-md-4">
              <Pill> Part Number</Pill> 04-101-100
            </div>
            <div className="col-md-4">
              <Pill> Status </Pill> 04-101-100
            </div>
          </div>
        </BackgroundBlue>
      </div>
    )
  }

  getMachinesNeeded() {
    const columns = [
      {
        Header: '#',
        accessor: 'processNumber',
        width: 40
      },
      {
        Header: 'Machine Name',
        accessor: 'machineName'
      },
      {
        Header: 'See Details',
        Cell: row => {
          return <div className="btn btn-sm btn-outline-blue"> See More!</div>
        }
      }
    ]

    const data = [
      {
        processNumber: 0,
        machineName: 'Lathe'
      },
      {
        processNumber: 1,
        machineName: 'Mill'
      },
      {
        processNumber: 2,
        machineName: 'Lathe'
      },
      {
        processNumber: 3,
        machineName: 'Mill'
      },
      {
        processNumber: 0,
        machineName: 'Lathe'
      },
      {
        processNumber: 1,
        machineName: 'Mill'
      },
      {
        processNumber: 2,
        machineName: 'Lathe'
      },
      {
        processNumber: 3,
        machineName: 'Mill'
      }
    ]

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={data.length}
        showPagination={false}
        style={{
          height: '300px' // This will force the table body to overflow and scroll, since there is not enough room
        }}
      />
    )
  }

  getComment(otherSide) {
    const CommentContainer = styled.div`
      display: flex;
      /* background-color: lightblue; */
      text-align: center;
      justify-content: center;
      margin-bottom: 10px;
      align-items: center;
    `

    const CommentAvatar = styled.div`
      margin-right: 10px;
      display: inline-block;
      vertical-align: middle;
      /* order: ${props => (props.otherSide ? '2' : '1')}; */
    `

    return (
      <CommentContainer>
        <CommentAvatar otherSide={otherSide}>
          <Avatar />
        </CommentAvatar>
        <Paper>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Paper>
      </CommentContainer>
    )
  }

  getCommentsSection() {
    const CommentList = styled.div`
      display: flex;
      flex-direction: column;
      background-color: rgb(238, 238, 238);
      height: 400px;
    `

    return (
      <div className={'col-md-12'}>
        <Surface fullWidth>
          <h3>Comments</h3>
          {this.getComment()}
          {this.getComment(true)}
        </Surface>
      </div>
    )
  }

  render() {
    return (
      <Container>
        {this.getHeader()}
        <br />
        <div className="row">
          <div className="col-4">
            <div className="btn btn-md btn-secondary">Upload PDFs</div>
            responsibilities
          </div>
          <div className="col-4" style={{ backgroundColor: 'yellow' }}>
            General <br />
            Part Per robot <br />
            Part Quantity <br />
            total stock material <br />
            Cut Lg. in <br />
            stock ordered <br />
          </div>
          <div className="col-4">
            <h4> Machine List</h4>
            {this.getMachinesNeeded()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{this.getCommentsSection()}</div>
        </div>

        <Button size={'sm'} color={'primary'}>
          I AM A BUTTON
        </Button>
      </Container>
    )
  }
}

export default PartsTableDetails
