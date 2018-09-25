import React from 'react'
// import { render } from 'react-dom'
import ReactTable from 'react-table'
import styled from 'styled-components'

import PartsTableDetails from '../PartsTableDetails'
import 'react-table/react-table.css'
import AvatarGroup from '../../ui/AvatarGroup'
import Avatar from '../../ui/Avatar'
import Paper from '../../ui/Paper'
// import PartModel from '../../models/parts'

import firebase from '../../modules/firebase'

const PartDetailsContainer = styled(Paper) `
  margin: 10px 15px;
`

// const utils = require('./utils')

const columns = [
  {
    Header: 'Part Name',
    accessor: 'partName'
  },
  {
    Header: 'Part Number',
    accessor: 'partNumber'
  },
  {
    Header: 'Parts Per Robot',
    accessor: 'partsPerRobot'
  },
  {
    Header: 'Total Quantity',
    accessor: 'totalQuantity'
  },
  {
    Header: 'Stock Material',
    accessor: 'stock'
  },
  {
    Header: 'Cut Length',
    accessor: 'cutLg'
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
  {
    Header: 'Drawn By',
    accessor: 'Adam',
    Cell: row => (
      <AvatarGroup>
        <Avatar isImage={false} />
        <Avatar />
      </AvatarGroup>
    )
  },
  {
    Header: 'Machines Needed',
    accessor: 'machinesNeeded'
  },
  {
    Header: 'Stock Ordered?',
    accessor: 'stockOrdered'
  }
]

const partViewSubcomponent = row => {
  return (
    <PartDetailsContainer>
      <PartsTableDetails />
    </PartDetailsContainer>
  )
}

const getPartsDataFromFb = data => {
  return Object.keys(data).map(key => data[key])
}

class PartsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    firebase.rebase.syncState('parts', {
      context: this,
      state: 'data',
    })
  }

  getTable(snap) {

    if(!snap) return 'No Data'

    const data = getPartsDataFromFb(snap)

    return (
      < ReactTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      className="-striped -highlight"
      // TODO: Add subcomponent which deals with scheduling....
      SubComponent={row => {
        return <PartsTableDetails />
      }}
    />
    )


  }

  render() {
    console.log('this.state:', this.state)
    const { data = null } = this.state

    return (

        this.getTable(data)
    )
  }
}

export default PartsTable
