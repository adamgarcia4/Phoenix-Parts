const statusMap = {
  designing: {
    style: 'primary',
    display: 'Design in progress',
    statusColor: 'rgba(171,157,208,1)'
  },
  partNotFinal: {
    style: 'primary',
    display: 'Part Not final',
    statusColor: 'rgba(171,157,208,1)'
  },
  material: {
    style: 'primary',
    display: 'Material needs to be ordered'
  },
  ordered: {
    style: 'primary',
    display: 'Waiting for materials'
  },
  drawing: {
    style: 'primary',
    display: 'Needs drawing',
    statusColor: 'rgba(173,209,158,1)'
  },
  inProgress: {
    style: 'primary',
    display: 'Needs drawing',
    statusColor: 'rgba(173,209,158,1)'
  },
  ready: {
    style: 'primary',
    display: 'Ready to manufacture',
    statusColor: 'rgba(220,91,91,1)'
  },
  manufacturing: {
    style: 'primary',
    display: 'Manufacturing in progress',
    statusColor: 'rgba(255,255,3,1)'
  },
  partMade: {
    style: 'primary',
    display: 'Part Made',
    statusColor: 'rgba(64,123,229,1)'
  },
  outsourced: {
    style: 'primary',
    display: 'Waiting for outsourced manufacturing',
    needsOutsource: 'rgba(255,142,2,1)'
  },
  welding: {
    style: 'primary',
    display: 'Waiting for welding'
  },
  scotchbrite: {
    style: 'primary',
    display: 'Waiting for Scotch-Brite'
  },
  anodize: {
    style: 'primary',
    display: 'Ready for Anodizing'
  },
  powder: {
    style: 'primary',
    display: 'Ready for powder coating'
  },
  coating: {
    style: 'primary',
    display: 'Waiting for Coating'
  },
  assembly: {
    style: 'primary',
    display: 'Waiting for assembly'
  },
  done: {
    style: 'primary',
    display: 'Done'
  }
}

const statusList = Object.keys(statusMap).map((item, key) => {
  return {
    label: statusMap[item].display,
    value: item
  }
})

module.exports = {
  statusMap,
  statusList
}
