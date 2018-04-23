import { hot } from 'react-hot-loader';
import * as React from 'react';
//import Home from './view/Home';
import PropTypes from 'prop-types';

class App extends React.Component {// eslint disable-line react/prefer-stateless-function
//static propTypes = {
//    from: PropTypes.number.isRequired,
//    to: PropTypes.number.isRequired,
//    number: PropTypes.number.isRequired
//  }
    constructor() {
    super();
    this.divStyle = {position: "absolute",
                     top:"50%",
                     left:"50%",
                     transform: "translate(-50%,-50%)",
                     fontFamily:"'Gugi',cursive",
                     fontSize:"50px",
                     border:"5px solid #000",
                     borderRadius: "10px",
                     padding:"10px 5px"
                    };
  }
    
state = {
    minZeroAdded:'0',
    zeroAdded:'0',
    number: 0,
    from: 0,
    to: 59,
    minute: 0,
    isToggleOn: 0,
  }

componentClicked(){
this.setState({number: this.state.from});
this.setState({zeroAdded: '0'});
this.setState({minZeroAdded: '0'});
    //    if(this.state.isToggleOn = 0)
//    this.setState({isToggleOn: this.state.isToggleon = 1})
//    this.addSec();
//    if (this.state.isToggleOn = 1){
//    this.setState({isToggleOn: this.state.isToggleon = 0})
//        }
    }

test(){
    console.log(123);
}

addSec() {
//if(this.state.isToggleOn = 1){
this.interval = setInterval(() => this.setState({ number: this.state.number + 1}), 1000);
//}
//if (this.state.isToggleOn = 0)
//{ return;}
};

updateFunction(){
if(this.state.number === this.state.to + 1 && this.state.number !== this.state.from){
this.setState({number: this.state.from});
this.setState({minute: this.state.minute + 1});
this.setState({zeroAdded: '0'});
}else{
    return;
    };
}

secZeroVanish(){
if (this.state.number > 9 && this.state.zeroAdded !== null){
   this.setState({zeroAdded: null})
}else{
        return
    }
};

minZeroVanish(){
if (this.state.minute > 9 && this.state.minZeroAdded !== null){
   this.setState({minZeroAdded: null})
}else{
        return
    }
};



componentDidUpdate(){
this.updateFunction();
this.secZeroVanish();
this.minZeroVanish();
}

componentDidMount(){
this.addSec()
};

componentWillUnmount() {
clearInterval(this.interval);
};


    
    render() {
      const { to } = this.state;
      const {from} = this.state;
    const {number} = this.state;
    const {zeroAdded} = this.state;
    const {minZeroAdded} = this.state;
    const  {minute} = this.state;
    return (
      <div onClick = {this.componentClicked.bind(this)} style={this.divStyle}>     
        {minZeroAdded}{minute}:{zeroAdded}{number}
      </div>
    );
  }
}

export default hot(module)(App);
