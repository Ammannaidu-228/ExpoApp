import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <p className='m-auto'>© 2024 | Ammannaidu Gollapalli | All Rights Reserved.</p>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;