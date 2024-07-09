import { FaLinkedin } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom"




export default function Navbar() {
    return (
        <>
        <nav className="mb-20 flex justify-between items-center py-6">
            <div className="flex flex-shrink-0 items-center">
                <NavLink to={'#'} className='mx-3'>
                    Fawase <span>.</span>
                </NavLink>
            </div>
            <div className="mb-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/fawasedohou/">
            <FaLinkedin />

                </a>
                <a href="https://github.com/DohouFawase">
            <FaGithub />

                </a>
                <a href="https://x.com/omo_iya_oniRice">
            <FaSquareXTwitter />

                </a>
                <a href="https://www.instagram.com/illusionyxt_studio/">
            <FaInstagram />

                </a>
                <a href="https://www.facebook.com/profile.php?id=61561150238658">
                    <FaFacebookF />
                </a>
               
            </div>
        </nav>
        </>
    )
}