import React ,{ Component } from "react";

import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "./store/actions/all";
import "./All.css";

class All extends Component {
  
    
  componentDidMount() {

    this.props.onfetchChars();

}




render() {   
    
 
    if (this.props.err) {
      return <div>Error...</div>;
    } 
    
     else {
      return (
        
        <div className="all">
          
        <h1 className="heading"> 
        {/* <span style={{fontFamily: "Old English Text MT" , fontSize: "5rem"}}>B</span>reaking <span style={{fontFamily: "Old English Text MT",  fontSize: "5rem"}}>B</span>ad */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" className="heading-img" alt="Breaking Bad"/>
         </h1>
       <br/>
       <br/>
       <div>
          {this.props.items.map((item) => (
            
            <Link 
            to = {{
              pathname: '/next',
              
           }}  key={item.char_id} onClick={() => this.props.onCharClicked(item.char_id)}>
            {/* <div className="name"> {item.name}</div> */}
            <div className= "each">
            <div className="name">{item.name}</div>
            <ol className= "list-non-bullet " >
           <li ><span style={{fontWeight:"bold"}} >DOB: </span> {item.birthday}</li>
                  <li ><span style={{fontWeight:"bold"}} >Status: </span>  {item.status}</li>
                  <li ><span style={{fontWeight:"bold"}} >Occupation: </span> <ol> {item.occupation.map((o) => (
                    <li key={o} className="occu">{o}</li> ) )}</ol></li>

            </ol>
            </div>
              <br/>
              <br/>
           </Link>
          
           
        
          ))}
          <br/>
          </div>
          
        </div>
        
      );
    }
  }
}
const mapStateToProps = state => {
    return {
        err: state.error,
        loaded: state.isLoaded,
        items: state.items,
        item_nmbr: state.item_nmbr
    };
}

const mapDispatchToProps = (dispatch) => {
    return {    
        onfetchChars: () => dispatch(actions.fetchingChars()),
        // onSetChars: (items) => dispatch(actions.setChars(items)),
        onCharClicked: (item_nmbr) => dispatch(actions.newChar(item_nmbr))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(All);
