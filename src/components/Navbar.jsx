import {Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <>
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/html'>HTML</Link></li>
                    <li><Link to='/css'>CSS</Link></li>
                    <li><Link to='/js'>JS</Link></li>
                </ul>
            </div>
        
        </>
    )
}

export default NavBar