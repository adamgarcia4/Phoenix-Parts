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

  const assemblyNum = faker.random.number({
    min: 1,
    max: 4
  })

  let subassemblyNum = faker.random.number({
    min: 1,
    max: 99
  })

  subassemblyNum = (`00${subassemblyNum}`).slice(-3)

  const getPartName = () => {
    return partsList[faker.random.number() % partsList.length]
  }

  const getPartNumber = () => {
    return `04-2018-0${assemblyNum}-${subassemblyNum}`
  }
  
  const getAssemblyNumber = () => {
    
    return `04-2018-0${assemblyNum}-000`
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
    assemblyNumber: getAssemblyNumber(),
    totalQuantity: getPartsPerRobot() * 2,
    stock: '60601 T6',
    cutLg: '4in',
    status: 'inProgress',
    machinesNeeded: 'Lathe, Mill',
    stockOrdered: 'yes',
    type: 'part',
  }
}

export default {
  randomPart
}
