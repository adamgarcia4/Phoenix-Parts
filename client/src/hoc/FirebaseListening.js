import React from 'react'
// // Firebase
import firebase from '../modules/firebase'

// // This HOC Will pass a "data" prop to the generated component
// // According to the refPath passed as a prop in the containers

const FirebaseListening = Component => {

  return class FirebaseListening extends React.Component {
    constructor(props) {
      super(props)
      
      const {dataFieldName, refPath} = this.props
      // this is the prop where the firebase data will be stored
      this.dataFieldName = dataFieldName || 'data'
      this.refPath = refPath
    }

    // Mounting Order
    // 1.  constructor()
    // 2.  static getDerivedStateFromProps()
    // 3.  render()
    // 4.  componentDidMount()
    
    // This is a good place to set refs and subscribe
    componentDidMount() {
      this.ref = firebase.database.ref(this.refPath)

      this.ref.on('value', snap => {
        this.setState({
          [this.dataFieldName]: snap.val(),
          fbRef: this.ref
        })
      })
    }

    componentWillUnmount() {
      this.ref.off()
    }
    
    render() {
      console.log('this.state:', this.state)
      console.log('this.props:', this.props)
      return <Component {...this.props} {...this.state}/>
    }

  }

}

export default FirebaseListening

// const FirebaseListening = WrappedComponent => {

//   return class Test extends React.Component {

//     constructor(props) {
//       super(props)

//       const getInitialState = () => {
//         const dataFieldName = this.props.dataFieldName || 'data'
//         const obj = {
//           hasInit: false,
//           last_updated: undefined,
//           fbError: undefined,
//           snapshot: undefined
//         }
//         obj[dataFieldName] = null
//         return obj
//       }

//       this.state = getInitialState()
//     }

//     _updateData(snapshot, props, last_updated) {
//       let data = null
//       const dataFieldName = props.dataFieldName || 'data'
//       if (
//         snapshot &&
//         snapshot.exists() &&
//         (props.withKey || props.withIndex || props.filterFunction || props.transformFunction)
//       ) {
//         data = []
//         if (props.withKey) {
//           snapshot.forEach(elem => {
//             data.push({ ...elem.val(),
//               key: elem.key
//             })
//           })
//         } else {
//           snapshot.forEach(elem => {
//             data.push({ ...elem.val(),
//               index: elem.key
//             })
//           })
//         }
//         if (props.transformFunction) {
//           data = this.props.transformFunction(data)
//         }
//         if (props.filterFunction) {
//           data = data.filter(props.filterFunction)
//         }
//       } else {
//         if (snapshot && snapshot.val()) {
//           data = snapshot.val()
//         }
//       }
//       const res = {
//         hasInit: true,
//         fbError: undefined,
//         snapshot
//       }
//       if (last_updated) {
//         res.last_updated = last_updated
//       }
//       res[dataFieldName] = data
//       this.setState(res)
//     }

//     _unBind() {
//       if (this._listener && this._dbRef) {
//         this._dbRef.off('value', this._listener)
//       }
//       if (this.state.hasInit) {
//         this.setState(this.getInitialState())
//       }
//     }

//     _bind(props) {
//       const {
//         refPath,
//         refOrder,
//         refFilter
//       } = props
//       if (refPath) {
//         console.log('refPath:', refPath)
//         if (refOrder) {
//           if (refFilter) {
//             this._dbRef = firebase
//               .database()
//               .ref(refPath)[refOrder.method](refOrder.value)[refFilter.method](refFilter.value)
//           } else {
//             this._dbRef = firebase
//               .database()
//               .ref(refPath)[refOrder.method](refOrder.value)
//           }
//         } else {
//           this._dbRef = firebase.database().ref(refPath)
//         }
//         this._listener = this._dbRef.on('value', snapshot => {
//           this._updateData(snapshot, props, Date.now())
//         })
//       } else {
//         this.setState({
//           fbError: true
//         })
//       }
//     }

//     _resetDataBinding(props) {
//       this._unBind()
//       this._bind(props)
//     }

//     componentDidMount() {
//       this._resetDataBinding(this.props)
//     }

//     componentWillUnmount() {
//       this._unBind()
//     }

//     componentWillReceiveProps(nextProps) {
//       if (this.props.refPath !== nextProps.refPath) {
//         this._resetDataBinding(nextProps)
//       } else {
//         if (this.props.alwaysUpdate) {
//           this._updateData(this.state && this.state.snapshot, nextProps)
//         }
//       }
//     }

//     render() {
//       return <WrappedComponent { ...this.props
//       } { ...this.state
//       }
//       />
//     }
//   }
// }

// export default FirebaseListening