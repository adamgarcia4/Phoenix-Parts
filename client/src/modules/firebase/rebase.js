import {db} from './firebase'
import Rebase from 're-base'


const rebase = Rebase.createClass(db)

export default rebase