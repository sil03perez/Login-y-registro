import { Link } from "react-router-dom";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (

         <>
    
    <header>
        <nav>
            <ul>
                <li>
                    <Link to = "/">HOME</Link>
                </li>
                <li>
                    <Link to = "/singup">singup</Link>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        {children}
    </main>
  
    
    </>
    )
   
}