const namor = require('namor')

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPart = () => {
  return {
    partName: 'Shaft',
    partNumber: '04-2018-01-101',
    partsPerRobot: 6,
    partsTotal: 12,
    stockMaterial: '6061 T6',
    cutLg: '4in',
    status: 'inProgress',
    drawnBy: 'Adam',
    machinesNeeded: 'Lathe, Mill',
    stockOrdered: 'yes'
  }
}

const makeData = (len = 100) => {
  return range(len).map(d => {
    return {
      ...newPart(),
      children: range(10).map(newPart)
    }
  })
}

module.exports = {
  makeData
}
