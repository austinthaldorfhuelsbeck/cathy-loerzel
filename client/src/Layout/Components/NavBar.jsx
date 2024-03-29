import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"

export default function NavBar() {
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
            {/* <Nav.Link href="/events" className="mx-2">Events</Nav.Link> */}
            <NavDropdown title="Story Work" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="/events/retreats">Retreats</NavDropdown.Item>
              <NavDropdown.Item href="/events/conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/events/coaching">Coaching</NavDropdown.Item>
              <NavDropdown.Item href="/events/intensives">Intensives</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="/blog/writing">Writing</NavDropdown.Item>
              <NavDropdown.Item href="/blog/podcasts">Podcasts</NavDropdown.Item>
              <NavDropdown.Item href="/blog/teaching">Teaching</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/coaching">Coaching</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/redeeming-heartache" className="mx-2">Redeeming Heartache</Nav.Link>
            <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}