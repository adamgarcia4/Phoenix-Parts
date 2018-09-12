import React from 'react'
// import { render } from 'react-dom'
import ReactTable from 'react-table'
// import styled from 'styled-components'

// import PartsTableDetails from '../PartsTableDetails'
import 'react-table/react-table.css'
import AvatarGroup from '../../ui/AvatarGroup'
import Avatar from '../../ui/Avatar'
// import Paper from '../../ui/Paper'

// const PartDetailsContainer = styled(Paper)`
//   margin: 10px 15px;
// `

const utils = require('./utils')

console.log('utils:', utils)

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

export default class PartsTable extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   data: utils.makeData()
    // }

    // console.log('this.state.data:', this.state.data)
  }

  render() {
    // console.log('this.state.data:', this.state.data)
    // const { data } = this.state
    const data = utils.makeData()
    console.log('data:', data)

    // const partViewSubcomponent = row => {
    //   console.log('row:', row)
    //   return (
    //     <PartDetailsContainer>
    //       <PartsTableDetails />
    //     </PartDetailsContainer>
    //   )
    // }

    return (
      <div>
        {/* <PartsTableDetails /> */}
        <ReactTable
          data={{
            partName: 'Part Name'
          }}
          columns={{
            Header: 'Part Name',
            accessor: 'partName'
          }}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        {/* <ReactTable data={data} columns={columns} defaultPageSize={10} className="-striped -highlight" /> */}
      </div>
    )
  }
}
