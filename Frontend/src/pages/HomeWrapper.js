import MiniNavbar from "../components/Home page comps/MiniNavbar";
import Home from "./Home";

const HomeWrapper = ({children}) => {
    return ( 
        <>
            <MiniNavbar />
            <div style={{ display: "flex" }}>
                {children}
            </div>
        </>
    );
}

export default HomeWrapper;