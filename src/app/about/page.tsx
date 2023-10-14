import { Navbar } from "../page";
import Footer from "../footer";

function getRandomName() {
  const names = ['John Doe', 'Alice Johnson', 'Jane Smith', 'Eva Martinez', 'David Wilson'];
  return names[Math.floor(Math.random() * names.length)];
}
function getRandomRole(): string {
  const roles = ['Developer', 'Designer', 'Project Manager', 'Customer Support', 'DevOps Engineer'];
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

function getRandomExperience(): number {
  return Math.floor(Math.random() * 15) + 1; // Generates a random number between 1 and 15 for years of experience
}
function Home() {
  return (<><title>About Us | My Website</title><Navbar />
    <div className="about-us">
      <h1 style={{textAlign:"center",fontSize:60}}>About Us</h1>
      <p style={{fontSize:20, textAlign:"center"}}>
        Welcome to our companys About Us page. We are passionate about what we do and dedicated to providing the best solutions.
      </p><br />

      <h2 style={{fontSize:40,textAlign:"center"}}>Our Team</h2>
      <div className="cards">
        {/* Team Members */}
        {Array.from({ length: 5 }, (_, index) => (
          <div className="card" key={index} style={{textAlign:"center"}}>
            <h3>{getRandomName()}</h3>
            <p>Role: {getRandomRole()}</p >
            <p>Experience: {getRandomExperience()}</p>
          </div>
        ))}
      </div><br />

      <h2 style={{fontSize:40,textAlign:"center"}}>Customer Reviews</h2><br />
      <div className="reviews">
        {/* Customer Reviews */}
        {Array.from({ length: 9 }, (_, index) => (
          <div className="review" key={index}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc metus.</p>
            <p>- {getRandomName()}</p>
          </div>
        ))}
      </div><br /><br />

      <h2 style={{fontSize:40,textAlign:"center"}}>Testimonials</h2><br />
      <div className="testimonials">
        {/* Testimonials */}
        {Array.from({ length: 5 }, (_, index) => (
          <div className="testimonial-large" key={index}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc metus.</p>
            <p>- {getRandomName()}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/></> );
}

export default Home;