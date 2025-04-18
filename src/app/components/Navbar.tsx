import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Image src="/images/userAsset/NavLogo.jpg" alt="Logo" width={80} height={80} className="logo" />
        <div className="logo-text">akil Ahmed</div>
      </div>
      
      <div className="nav-items">
        <div><Link href="#projects">Projects</Link></div>
        <div><Link href="#skills">Skills</Link></div>
        <div><Link href="#contactme">Contact Me</Link></div>
      </div>
    </div>
  );
};

export default Navbar;