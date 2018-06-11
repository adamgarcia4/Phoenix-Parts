import * as admin from 'firebase-admin'

const partRef = admin.database().ref('parts')

interface PartComment {
  id: string
  path: string
  body: string
}

interface Part {
  id: string
  name: string
  comment?: PartComment[]
}

const fakeComment = (): PartComment => {
  const id: string = Math.floor((Math.random() * 100) % 100).toString()
  return {
    id,
    path: `/user/${id}`,
    body: 'test body'
  }
}

const fakePart = () => {
  const id = Math.floor((Math.random() * 100) % 100).toString()
  const numOfComments = Math.floor((Math.random() * 100) % 5)
  let part = {
    id,
    name: `Part ${id}`,
    comment: []
  }

  for (let i = 0; i < numOfComments; i++) {
    part.comment.push(fakeComment())
  }

  return part
}

// CRUD Operations
const createPart = (req, res) => {
  console.log('create part')
  let testPart: Part = fakePart()

  const partObj = {
    [testPart.id]: testPart
  }

  partRef.update(partObj).then(() => {
    return res.json(testPart)
  })
}

const listAllParts = (req, res) => {
  partRef.once('value', snapshot => {
    res.json(snapshot.val())
  })
}

export { listAllParts, createPart }
