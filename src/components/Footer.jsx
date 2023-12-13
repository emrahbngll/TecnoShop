import React from "react";
function Footer() {
  return (
    <div className="container mw-100 my-5">
      <footer className="text-center text-lg-start bg-secondary text-white">
        <div className="container p-4 pb-0">
          <section className="section">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase  mb-4 font-weight-bold">
                  Company Name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  About Us
                </h6>
                <p>
                  For more info please visit our website www.peakytecno.com{" "}
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Help</h6>
                <p>
                  Do you have a question? Write to us via the chat (Mon–Fri
                  8:00–16:00), message us or consult our Help Centre.
                 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas-fa-home-mr-3"></i> Dublin,Ireland
                </p>
                <p>
                  <i className="fas-fa-home-mr-3"></i> info@example
                </p>
                <p>
                  <i className="fas-fa-home-mr-3"></i>+353 1231412
                </p>
              </div>
              <div className=" col-lg-3 col-md-4 mb-md-0 mt-3">
                <h5 className="text-uppercase mb-4  font-weight-bold">
                  openin hours
                </h5>
                <table className="table table-hover text-center font-size-bold text-white">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon-Fri</td>
                      <td>8am-5pm</td>
                    </tr>
                    <tr>
                      <td>Sat-Sun</td>
                      <td>9am-4pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr className="w-100 clearfix" />

              <div
                className="text-center p-3"
                style={{ background: "secondary" }}
              >
                © 2023 Tecno:
                <a class="text-white" href="https://peakyTecno.com/">
                  PeakyTecno.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
