import "../styles/FooterStyles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="About">About</a>
          <a href="Locator">Store locator</a>
          <a href="FAQ">FAQs</a>
          <a href="News">News</a>
          <a href="Careers">Careers</a>
          <a href="Contact">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/vaibhav1202dev"
          >
            &nbsp; Vaibhav
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
