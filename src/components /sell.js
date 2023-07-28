import React, { Component, useState } from 'react';
// import { SimpleDropdown } from 'react-js-dropdavn'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './mainNav';
import Sidebar from './sidebar';
const Add = ()=>
{
    return(
      <div>
          <Navbar />
        <div  className='add-product'>
           <form className='add-form'>
            <h4 className='add-header'>Add your Product</h4>
  <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Title"/>
    </div>
  
  <div className='form-group1'>
  <select >
  <option selected>Choose Product Category</option>
  <option value="Decor">Garden Decor</option>
  <option value="Plants">Plants</option>
  <option value="Tools">Tools / Equipments</option>
  <option value="Grocery">Grocery</option>
</select>
  </div> 



  <div class="form-group">
    
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Product Price"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Product Description"/>
  </div>
  <div class="form-group">
    
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Product Quantity"/>
  </div>
  <div class="form-group">
    <label  for="exampleFormControlFile1">Upload Image</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
 
  <button   type="submit" class="btn btn-success">Submit</button>
</form>
</div>
</div>
    )
}

export default Add;