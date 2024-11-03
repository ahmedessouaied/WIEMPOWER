import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </Link>
      <ul>
        <li>
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio_section">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <Link href="/success-story">Success stories</Link>
        </li>
        <li>
          <a href="#contactus_section">Contact</a>
        </li>
      </ul>
      <div>
        <Link className="get-started" href="/chat">
          ChatBot
        </Link>
        <Link className="get-started" href="/login">
          Get Started
        </Link>
      </div>
      <img src="/images/menu.png" className="menu" alt="menu" />
    </nav>
  );
}
