import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="section home">
        <h2>Welcome to Waste Management Chain</h2>
        <p>Join us in making the world a cleaner place!</p>
        <p>Total Waste Given: <span className="highlight">500 kg</span></p>
        <p>Amount Earned: <span className="highlight">50 Crypto Tokens</span></p>
    </div>
);

const About = () => (
    <div className="section">
        <h2>About Us</h2>
        <p>We collect waste from various sources and distribute it to recyclers, rewarding contributors with cryptocurrency.</p>
    </div>
);

const Services = () => (
    <div className="section">
        <h2>Our Services</h2>
        <div className="service">
            <h3>Waste Collection</h3>
            <p>Efficient collection of waste from homes and businesses.</p>
        </div>
        <div className="service">
            <h3>Recycling Partnership</h3>
            <p>Partnering with recyclers to ensure waste is managed sustainably.</p>
        </div>
        <div className="service">
            <h3>Rewards System</h3>
            <p>Get rewarded with cryptocurrency for contributing your waste.</p>
        </div>
    </div>
);

const HowItWorks = () => (
    <div className="section">
        <h2>How It Works</h2>
        <p>1. Sign up to become a waste contributor.</p>
        <p>2. Schedule a waste collection.</p>
        <p>3. Get your rewards in cryptocurrency once the waste is processed.</p>
    </div>
);

const SignUp = () => (
    <div className="section">
        <h2>Sign Up</h2>
        <form>
            <label htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" required />

            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" required />

            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" required />

            <button type="submit">Create Account</button>
        </form>
    </div>
);

const SignIn = () => (
    <div className="section">
        <h2>Sign In</h2>
        <form>
            <label htmlFor="signin-email">Email:</label>
            <input type="email" id="signin-email" required />

            <label htmlFor="signin-password">Password:</label>
            <input type="password" id="signin-password" required />

            <button type="submit">Sign In</button>
        </form>
    </div>
);

const Contact = () => (
    <div className="section">
        <h2>Contact Us</h2>
        <form>
            <label htmlFor="contact-name">Name:</label>
            <input type="text" id="contact-name" required />

            <label htmlFor="contact-email">Email:</label>
            <input type="email" id="contact-email" required />

            <label htmlFor="contact-message">Message:</label>
            <textarea id="contact-message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
);

const Certify = () => (
    <div className="section">
        <h2>Certification</h2>
        <p>Earn your certification in waste management by participating in our program!</p>
        <p>Learn how to manage waste effectively and earn rewards.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            <header>
                <nav>
                    <h1>Waste Management Chain</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/how-it-works">How It Works</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/certify">Certification</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/certify" element={<Certify />} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2024 Waste Management Chain. All rights reserved.</p>
            </footer>
            <div className="watermark">Waste Management Chain</div>
        </Router>
    );
};

export default App;