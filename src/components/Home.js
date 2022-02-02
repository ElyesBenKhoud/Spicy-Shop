import React from "react";
import knife from "../images/ico/fork-and-knife-in-cross.png";
const Home = () => {
  return (
    <section id="home">
      <div className="single-slide bg-overlay-5 clr-wht">
        <div className="table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-12 clr-wht text-center wow fadeIn">
                  <h1 className="text-50">
                    We Serve Spicy <br />
                    Tasty ingredients
                  </h1>

                  <h1>For cooking</h1>
                  <br />
                  <a href="#about" className="ancor-ico">
                    <img src={knife} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
