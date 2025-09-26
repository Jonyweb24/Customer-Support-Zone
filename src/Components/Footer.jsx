import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <Container>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">CS-Ticket System</h3>
            <p className="text-sm">
              CS-Ticket system is a platform that centralizes, tracks, and
              manages requests or issues for efficient resolution and communication.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@ph.com</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>© 2025 Customer Support Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
