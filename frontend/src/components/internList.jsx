import { useEffect, useState } from "react";
import axios from "axios";

function InternList(){

 const [interns,setInterns]=useState([]);

 useEffect(()=>{
   fetchInterns();
 },[]);

 const fetchInterns=async()=>{
   const res = await axios.get(
   "http://localhost:5001/api/internships/all"
   );

   setInterns(res.data);
 };

 return(
  <div>
   <h2>Overall Intern List</h2>

   <table border="1">
    <thead>
      <tr>
       <th>Name</th>
       <th>Email</th>
       <th>Domain</th>
      </tr>
    </thead>

    <tbody>
      {interns.map((item)=>(
        <tr key={item.internship_id}>
          <td>{item.student_name}</td>
          <td>{item.email}</td>
          <td>{item.domain}</td>
        </tr>
      ))}
    </tbody>

   </table>
  </div>
 );
}

export default InternList;