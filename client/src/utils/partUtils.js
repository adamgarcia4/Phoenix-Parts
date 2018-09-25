import faker from 'faker'

const partsList = [
  'Long Drive Shaft Spacer',
  'Short Drive Shaft Spacer',
  'Left Side Rail',
  'Long Wheel Shaft',
  'Short Wheel Shaft',
  'Right Side Rail',
  'Cross Bar',
  'Front and Back Rail',
  'Back Frame Gusset',
  'Bumper Standoff',
  'Elevator Gear Box Standoff',
  'Drive Rail Gusset',
  'Bumper Standoff Large',
  'L Bracket Long',
  'L Bracket Medium',
  'L Bracket Short',
  'Double Gusset',
  'Front Frame Gusset',
  'Belly Pan',
  'Armfork',
  'Forkstop',
  'Outer Gearbox Side Plate',
  'Intermediate Shaft',
  'Output Shaft',
  'Intermediate Shaft Spacer 1',
  'CIM Spacer',
  'Output Spacer 1',
  'Intermediate Shaft Spacer 2',
  'Output Spacer 2',
  '.375 OD Spacer',
  '.75 OD Spacer',
  'Inner Gearbox Side Plate'
]

const randomPart = () => {
  const getPartName = () => {
    return partsList[faker.random.number() % partsList.length]
  }

  const getPartNumber = () => {
    const assemblyNum = faker.random.number({
      min: 1,
      max: 9
    })
    let subassemblyNum = faker.random.number({
      min: 1,
      max: 99
    })

    if (subassemblyNum.toString().length == 1) {
      subassemblyNum = '0' + subassemblyNum
    }

    return `04-${assemblyNum}00-${assemblyNum}${subassemblyNum}`
  }

  const getPartsPerRobot = () => {
    return faker.random.number({
      min: 1,
      max: 10
    })
  }

  return {
    partName: getPartName(),
    partNumber: getPartNumber(),
    partsPerRobot: getPartsPerRobot(),
    totalQuantity: getPartsPerRobot() * 2,
    stock: '60601 T6',
    cutLg: '4in',
    status: 'inProgress',
    machinesNeeded: 'Lathe, Mill',
    stockOrdered: 'yes'
  }
}

export default {
  randomPart
}