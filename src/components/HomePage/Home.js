import "./Home.css";
import Header from "./Header";
import prideimg from "./../../assets/images/1.png"; // افترضت أنك تريد استخدام صورة prideimg

const Home = () => {
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>ROCKET</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} title="prideimg" alt="pride" />
            </div>
            <div className="col-md-6">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a.</p>
              <button><a href="#">Learn more</a></button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>We aim to provide the best food experience possible by sourcing the finest ingredients and creating dishes that delight our customers.</p>
            </div>
            <div className="col-md-6">
              <img src="https://picsum.photos/500" title="mission-image" alt="mission" className="new-section-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="input-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Get in Touch</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Ammar Emara. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="social-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
