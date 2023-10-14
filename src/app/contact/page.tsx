import { Navbar } from "../page";
import Footer from "../footer";
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Home() {
  return (<><title>Contact Us | My Website</title><Navbar />
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" align="center">
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="contact-info">
            <Typography variant="h5">Contact Information</Typography>
            <address>
              <p><strong>Address:</strong> 123 Main Street, City, Country</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> info@example.com</p>
            </address>
            <div>
              <Typography variant="h6">Follow Us</Typography>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div>
              <Typography variant="h6">Business Hours</Typography>
              <p><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="contact-form" style={{ minHeight: '400px' }}>
            <Typography variant="h5">Contact Form</Typography>
            <form action="submit_contact_form.php" method="post">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={8}
              />
              <Button variant="contained" style={{color:"black"}} color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
  <Paper elevation={3} className="team-members">
    <Typography variant="h5" style={{fontSize:40, textAlign:"center"}}>Our Team</Typography>
    <ul className="team-list">
      <li className="team-member">
        <img src="jhondoe.jpeg" alt="Team Member 1" />
        <p style={{fontSize:20}}><strong>John Doe</strong></p>
        <p style={{fontSize:20}}>Proffesional Designer</p>
        <p style={{fontSize:20}}>Email: john@example.com</p>
      </li>
      <li className="team-member">
        <img src="janeSmith.jpeg" alt="Team Member 2" />
        <p style={{fontSize:20}}><strong>Jane Smith</strong></p>
        <p style={{fontSize:20}}>Customer Support</p>
        <p style={{fontSize:20}}>Email: jane@example.com</p>
      </li>
    </ul>
  </Paper>
</Grid>
        <Grid item xs={12}>
  <Paper elevation={3} className="location-images">
    <Typography variant="h5" style={{fontSize:40, textAlign:"center"}}>Location Images</Typography>
    <div className="image-gallery">
      <img src="hqimage1.jpeg" alt="Location 1" className="location-image" />
      <img src="hqimage2.jpeg" alt="Location 2" className="location-image" />
      <img src="hqimage3.jpeg" alt="Location 3" className="location-image" />
    </div>
  </Paper>
</Grid>
        <Grid item xs={12}>
      <Paper elevation={3} className="privacy-policy">
        <Typography variant="h5" style={{fontSize:40, textAlign:"center"}}>Privacy Policy</Typography><br />
        <p style={{fontSize:20}}>
          Our privacy policy explains how we handle your personal data. We take your privacy seriously and ensure the security of your information. To learn more about our privacy practices, please read our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p><br />
        <p style={{fontSize:20}}>
          **Data Collection and Usage**
          We may collect personal information, including but not limited to your name, email address, phone number, and address. We use this information for communication and to provide the services you request.
        </p><br />
        <p style={{fontSize:20}}>
          **Cookies**
          We use cookies to improve your experience on our website. These cookies may collect information such as your IP address and browsing behavior.
        </p><br />
        <p style={{fontSize:20}}>
          **Data Sharing**
          We do not share your personal information with third parties, except as required by law or to provide our services.
        </p><br />
        <p style={{fontSize:20}}>
          **Security**
          We take measures to protect your data. However, we cannot guarantee the security of information transmitted over the internet.
        </p><br />
        <p style={{fontSize:20}}>
          **Your Rights**
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us.
        </p><br />
        <p style={{fontSize:20}}>
          **Changes to the Privacy Policy**
          We may update our privacy policy. Check our website for the latest version.
        </p><br />
      </Paper>
    </Grid>
    </Grid>
    </Container>
    <Footer /></>);
}

export default Home;