import React, {Component} from 'react';
// import axios from './axios';
import { connect } from 'react-redux';
//import * as actions from './store/actions/all';
import './Next.css'
 class  Next extends Component {
    state={
         error: false,
         new_char: [],
         
    }
    
    componentDidMount() {
    
            let serverURL = "https://www.breakingbadapi.com/api/characters/"+this.props.item_nmbr;
            //console.log(serverURL);
            fetch(serverURL)
              .then((res) => res.json())
              .then(
                (result) => {
                  this.setState({
                    new_char: result,
                    
                  });
                 // console.log(result);
                },
                (error) => {
                  this.setState({
                    error
                  });
                }
              );
           
    }
     render (){
        //console.log(this.props.history.match());
        // console.log(this.props.ndata);
        if (this.state.err) {
          return <div>Error...</div>;
        } 
           else {
            return (
              
              <div className="all">
                
                <h1 className="heading"> 
                {/* <span style={{fontFamily: "Old English Text MT" , fontSize: "5rem"}}>B</span>reaking <span style={{fontFamily: "Old English Text MT",  fontSize: "5rem"}}>B</span>ad  */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" className="heading-img" alt="heading_imge"/>
                </h1>
                <br/><br/>
                {this.state.new_char.map((i) => (
                  <div  key={i.char_id} className="each" >
                  {/* <div className="name"> {new_char.name}</div> */}
                  {/* {console.log(i.name)} */}
                  <img src={i.img} className="newchar_image" alt= "character_image"/>
                  <div style={{fontWeight:"bold" , fontSize: "2rem"}} >{i.name}</div>
                  <ol className= "list-non-bullet">
                  <li ><span style={{fontWeight:"bold"}} >Alias: </span> {i.nickname}</li>
                  <li ><span style={{fontWeight:"bold"}} >DOB: </span> {i.birthday}</li>
                  <li ><span style={{fontWeight:"bold"}} >Status: </span>  {i.status}</li>
                  <li ><span style={{fontWeight:"bold"}} >Occupation: </span> <ol> {i.occupation.map((o) => (
                    <li key={o} className="occu">{o}</li> ) )}</ol></li>
                  <li ><span style={{fontWeight:"bold"}} >Portrayed: </span>  {i.portrayed}</li>
                  <li ><span style={{fontWeight:"bold"}} >Appearance: </span>  {i.appearance}</li>
                  </ol>
                  </div>
                  
                  
                ))
                }
              
              </div>
            );
          }

        }
    }

const mapStateToProps = (state) => {
    return {
     
      item_nmbr: state.item_nmbr,
    
       }
}

 export default connect(mapStateToProps)(Next);