import React from 'react'
// import { render } from 'react-dom'
import ReactTable from 'react-table'
import styled from 'styled-components'

import PartsTableDetails from '../PartsTableDetails'
import 'react-table/react-table.css'
import AvatarGroup from '../../ui/AvatarGroup'
import Avatar from '../../ui/Avatar'
import Paper from '../../ui/Paper'

const PartDetailsContainer = styled(Paper)`
  margin: 10px 15px;
`

const utils = require('./utils')

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
    accessor: 'partsTotal'
  },
  {
    Header: 'Stock Material',
    accessor: 'stockMaterial'
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

export default class PartsTable extends React.Component {
  constructor() {
    super()
    utils.makeData()
    this.state = {
      data: utils.makeData()
    }
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <PartsTableDetails />
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return <div style={{ padding: '20px' }}>Another Sub Component!</div>
          }}
        />
      </div>
    )
  }
}
