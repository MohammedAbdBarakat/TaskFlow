import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../styles/TaskFlow.png'; 


const Navbar = () => {
    const { logout } = useLogout()

    const { user } = useAuthContext()
    console.log(user);
    
    const handleLogout = () => {
        logout()
    }

    const handleQuoteClick = () => {
        const aboutPage = document.querySelector('.about');
        if (aboutPage) {
            const quoteSection = aboutPage.querySelector('.quote');
            if (quoteSection) {
                quoteSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };
    const handleStoryClick = () => {
        const aboutPage = document.querySelector('.about');
        if (aboutPage) {
            const storySection = aboutPage.querySelector('.story');
            if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        }
    };
    const handleUsersClick = () => {
        const aboutPage = document.querySelector('.about');
        if (aboutPage) {
            const usersSection = aboutPage.querySelector('.users');
            if (usersSection) {
                usersSection.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        }
    };
    const handlePurposeClick = () => {
        const aboutPage = document.querySelector('.about');
        if (aboutPage) {
            const purposeSection = aboutPage.querySelector('.purpose');
            if (purposeSection) {
                purposeSection.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        }
    };
    const handleFutureClick = () => {
        const aboutPage = document.querySelector('.about');
        if (aboutPage) {
            const futureSection = aboutPage.querySelector('.future');
            if (futureSection) {
                futureSection.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        }
    };



    return ( 
        <header>
        <div className="container">
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <nav>
                {user && <div>
                    <Link to={'/'}> Home </Link>
                    <Link to={"/create"}> Create </Link>
                    <Link to={"/history"}> History </Link>
                    <Link to={"/calender"}> Calendar </Link>
                    <Link to={"/profile"}> Profile </Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>}
                {!user && <div>
                    <Link to={"/about"} onClick={handleQuoteClick}> What's TASKFLOW? </Link>
                    <Link to={"/about"} onClick={handleStoryClick}> Story </Link> 
                    <Link to={"/about"} onClick={handleUsersClick}> Our Users </Link> 
                    <Link to={"/about"} onClick={handlePurposeClick}> Purpose </Link> 
                    <Link to={"/about"} onClick={handleFutureClick}> Future </Link> 
                    <Link to={"/login"}> Login </Link>
                    <Link to={"/signup"}> Signup </Link>
                </div>}
            </nav>
        </div>
    </header>
    );
}

export default Navbar;