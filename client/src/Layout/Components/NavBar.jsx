import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"

export default function NavBar() {
  // function scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   })
  // }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://storage.googleapis.com/cathy-loerzel-img/cathy-loerzel-signature.png"
            alt="Cathy Loerzel"
            className="signature"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#about" className="mx-2">About</Nav.Link>
            <NavDropdown title="Offerings" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="/blog/writing">Writing</NavDropdown.Item>
              <NavDropdown.Item href="/blog/podcasts">Podcasts</NavDropdown.Item>
              <NavDropdown.Item href="/blog/teaching">Teaching</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/coaching">Coaching</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/redeeming-heartache" className="mx-2">Redeeming Heartache</Nav.Link>
            <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}