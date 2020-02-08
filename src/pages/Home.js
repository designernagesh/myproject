import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home(){
    return (
        <div>
            <Header />
            <div className='container'>
                <Main />
            </div>
            <Footer />
        </div>
    )
}
export default Home