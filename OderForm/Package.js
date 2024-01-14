import { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import AddPackage from './AddPackage'
import './package.css';
import Add2ndPackage from "./Add2ndPackage";
import FedexRates from "./FedexRates";


const Package = () => {
  const [packageon,setPackageon]= useState([]);
  const [pac,setPac]=useState(null);
  
  return (
    <div style={{height:"auto"}} className="packageJsMain">
      <Table striped bordered hover className="tableHead">
        <thead>
          <tr>
            <th
              className="pb-3 pl-3 fw-bold cap text-uppercase text-secondary fs-7 "
              style={{ width: "40px" }}
            >
              Package QTY
            </th>
            <th colSpan={3}>
              WEIGHT PER PACKAGE
            </th>
            <th colSpan={4} className="text-center">
              DIMENSIONS <br></br> L × W × H {" "}
            </th>
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td><input style={{width:"50%"}}/></td>
            <td className=""><input type="number" style={{width:"100%"}}/></td>
            <td className=""><select style={{width:"60px"}}>
              <option>lb</option>
              <option>kg</option>
            </select></td>
            <td><span style={{width:"100%"}}>oz</span></td>
            <td className=""><input type="number" style={{width:"100%"}}/></td>
            <td className=""><input type="number" style={{width:"100%"}}/></td>
            <td><input type="number" style={{width:"100%"}}/></td>
            <td className=' border-start-1 border-secondary'>in</td>
            <td className="d-flex flex-row justify-content-center"><MdDeleteForever 
            className="w-75 h-75"/></td>
          </tr>

            {packageon && (
              <AddPackage/>
            )}
          <br/>
         <MdOutlineAddToPhotos style={{width:"30px",height:"30px"}} className="d-inline" onClick={()=>setPackageon(!packageon)}/>
        </tbody>
      </Table>

      <div className="secondformM">
      <div className="secondForm">
          <h6 style={{textAlign:"center"}}>Package QTY</h6>
          <input type="number" style={{width:"90px",alignContent:"center"}}/>
          <h6 style={{textAlign:"center"}}>WEIGHT PER PACKAGE</h6>
          <input type="number" style={{width:"90px",alignContent:"center"}}/>
          <select style={{width:"90px",alignContent:"center"}}>
            <option>lb</option>
            <option>kg</option>
          </select>
          <span style={{textAlign:"center"}}>OZ</span>
          <h6 style={{textAlign:"center"}}> DIMENSIONS <br></br> L × W × H {" "}</h6>
          <input type="number" style={{width:"90px",alignContent:"center"}}/>
          <input type="number" style={{width:"90px",alignContent:"center"}}/>
          <input type="number" style={{width:"90px",alignContent:"center"}}/>
          <p style={{textAlign:"center"}}>IN</p>
          <h6 style={{textAlign:"center"}}>Delete</h6>
          <MdDeleteForever style={{width:"30px",height:"40px"}}/><hr/>
          {pac && (
              <Add2ndPackage/>
            )}
          <br/>
         <MdOutlineAddToPhotos style={{width:"30px",height:"30px"}} className="d-inline" onClick={()=>setPac(!pac)}/>
      </div>
      </div>
         <br/><br/>
         <button style={{padding:"10px 38px 10px 38px",backgroundColor:"#751aff",borderRadius:"20px",color:"white",fontWeight:"bold",fontSize:"13px",
         fontFamily:"inherit",margin:"40px"}}>CALCULATE SHIPPING RATES</button>
         <FedexRates/>
    </div>
  );
};

export default Package;

