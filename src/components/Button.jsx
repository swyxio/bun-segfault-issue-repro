import React from 'react'



// exports a simple react counter component with state that increments by 2 everytime
// the button is clicked
export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 2
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        click me {this.state.count}
      </button>
    )
  }
}

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.count}
//     </button>
//   )
// }

// export default Button

// // Language: javascript
// // Path: src/components/Button.jsx
// import React from 'react'

// // exports a simple react counter component with state that increments by 2 everytime
// // the button is clicked
// export default class Button extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 2
//     })
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.count}
//       </button>
//     )
//   }
// }

// // const Button = (props) => {
// //   return (
// //     <button onClick={props.handleClick}>
// //       {props.count}
// //     </button>
// //   )
// // }

// // export default Button

// // Language: javascript
// // Path: src/components/Button.jsx
// import React from 'react'

// // exports a simple react counter component with state that increments by 2 everytime
