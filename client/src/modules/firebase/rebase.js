import Rebase from 're-base'
import {db} from './firebase'


const rebase = Rebase.createClass(db)

export default rebase