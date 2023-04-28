import React from 'react'
import Button from './button';
import Select from './select';
import Input from './input';
import Table from './table';

function Product() {
  return (
    <div>
        <div
          className="w3-sidebar w3-light-grey w3-bar-block"
          style={{ width: '25%' }}
        >
          <h3 className="w3-bar-item">Menu</h3>
          <a href="/" class="w3-bar-item w3-button">home</a>
            <a href="/product" class="w3-bar-item w3-button">product</a>
           <a href="/orders" class="w3-bar-item w3-button">orders</a>
        </div>
        {/* Page Content */}
        <div style={{ marginLeft: '25%' }}>
          <div className="w3-container w3-teal">
            <h1>PRODUCT</h1>
          </div>
          <div className="w3-container">
            <h2>Sidebar Navigation Example</h2>
            <p>The sidebar with is set with "style="width:25%".</p>
            <p>The left margin of the page content is set to the same value.</p>

            {/* /////////////////////////////////////// */}
            <label for="lname">Last Name</label>
            <Input type={'text'} />

            <label for="lname">Last Name</label>
            <Input type={'date'} />

            <label for="country">Country</label>
            <Select />

            <Button />
            {/* ///////////////////////////////////////////// */}
            <Table />
            {/* /////////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
  )
}

export default Product