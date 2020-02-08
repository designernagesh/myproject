import React from 'react'
import Product from './Product'

function Main(){
    return (
        <div>
            <h1>Main Content</h1>
<div className='row'>
<div className='col-sm-4'>
            <Product />
            </div>
            <div className='col-sm-4'>
            <Product />
            </div>
            <div className='col-sm-4'>
            <Product />
            </div>
            </div>
        </div>
    )
}

export default Main