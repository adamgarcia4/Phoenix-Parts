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
import statusUtils from '../../models/statusUtils'

import firebase from '../../modules/firebase'

import treeTableHOC from 'react-table/lib/hoc/treeTable/'

const TreeTable = treeTableHOC(ReactTable)

const PartDetailsContainer = styled(Paper)`
  margin: 10px 15px;
`

const columns = [
  {
    Header: 'Assembly Number',
    accessor: 'assemblyNumber'
  },
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
  // {
  //   Header: 'Drawn By',
  //   accessor: 'Adam',
  //   Cell: row => (
  //     <AvatarGroup>
  //       <Avatar isImage={false} />
  //       <Avatar />
  //     </AvatarGroup>
  //   )
  // },
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
      state: 'data'
    })
  }

  getTable(snap) {
    if (!snap) return 'No Data'

    const data = getPartsDataFromFb(snap)

    console.log('data:', data)
    return (
      <TreeTable
        data={data}
        // pivotBy={['assemblyNumber']}
        columns={columns}
        defaultPageSize={10}
        getTdProps={(state, rowInfo, column) => {
          const status = rowInfo && rowInfo.row && rowInfo.row.status

          const statusColor = status && statusUtils.statusMap[status] && statusUtils.statusMap[status].statusColor

          return {
            style: {
              background: statusColor || ''
            }
          }
        }}
        className="-striped -highlight"
        // TODO: Add subcomponent which deals with scheduling....
        SubComponent={row => {
          return <PartsTableDetails row={row} item={row.original} />
        }}
      />
    )

    // return (
    //   <ReactTable
    //     data={data}
    //     columns={columns}
    //     defaultPageSize={10}
    //     getTrProps={(state, rowInfo, column) => {
    //       const status = rowInfo && rowInfo.row && rowInfo.row.status

    //       const statusColor = status && statusUtils.statusMap[status] && statusUtils.statusMap[status].statusColor

    //       return {
    //         style: {
    //           background: statusColor || ''
    //         }
    //       }
    //     }}
    //     className="-striped -highlight"
    //     // TODO: Add subcomponent which deals with scheduling....

    //   />
    // )
  }

  render() {
    const { data = null } = this.state

    return this.getTable(data)
  }
}

export default PartsTable
