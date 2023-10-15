import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import hobby from './Images/hobby.webp';

<div class='background'></div>
const About=()=><div><h3>Hey Everyone!...This is Nithya. <p>I'm currently get training on Full Stack Web Development in FintekPoint at Cuddalore.</p><img src='./nithi.jpeg'></img></h3>
 </div>
const Contact =()=><div><h3>Ph.No:9047124870<br></br>
Email:nithya2002.kalidoss@gmail.com</h3></div>
const Hobby=()=><div><h3>Playing Badminton</h3><img src='https://i2.wp.com/www.sligotennisclub.ie/wp-content/uploads/2021/10/stc-cta-badminton-1024x683.jpg' width={1500}></img></div>
const Goal=()=><div><h3>Acquiring my Skills</h3><img src='https://wallpaperbat.com/img/203636-about-us-adams-computer-technologies.jpg'  width='1500px'
height='700px'
></img></div>
const Wish=()=><div><h3>Wish to explore the places what i dreamed of...</h3><img src='https://th.bing.com/th/id/R.7b938744a4d41a097f6dec675d12fecd?rik=nl7jk9FHYBCVRg&riu=http%3a%2f%2fwww.liveyourretirement.com%2fblog%2fwp-content%2fuploads%2f2017%2f07%2fiStock-139996919.jpg&ehk=%2bh3dmqboInSI%2fP9TeuxCJhqKHxVwGbuBUUrgHbkeB30%3d&risl=&pid=ImgRaw&r=0' width={1500} height={800}></img></div>
const Navigation =()=>(
    <nav>
        
        <div class='header'>HEY HI WELCOME!</div>
<div class='overall'>
            {/* <li><Link className='home' to ='/home'>Home</Link></li> */}
            <Link className='about' to='/about'>About</Link>
            <Link className='contact' to='/contact'>Contact</Link>
            <Link className='hobby' to='/hobby'>Hobby</Link>
            <Link className='goal' to='/goal'>Goal</Link>
            <Link className='wish' to='/wish'>Wish</Link>
</div>


        
    </nav>
)
const Nav =()=>{
    return <BrowserRouter>
        <div>
            <Navigation/>
            <Routes>
                {/* <Route path='/home' element={<Home/>}/> */}
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/hobby' element={<Hobby/>}/>
                <Route path='/goal' element={<Goal/>}/>
                <Route path='/wish' element={<Wish/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    
}

export default Nav;