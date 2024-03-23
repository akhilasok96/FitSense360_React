import logo from "../assets/logo_main.png";

const Footer = () => {
  return (
    <>
      <div className='container-fluid Footer pt-5'>
        <div className='container'>
          <div className='row gx-0 py-4 footer-row1'>
            <div className='col-md-2'>
              <div className='footer-col1'>
                <h5 className='footer-h5'>Company</h5>
                <ul>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Why Us</a>
                  </li>
                  <li>
                    <a href='#'>Security</a>
                  </li>
                  <li>
                    <a href='#'>Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='footer-col1'>
                <h5 className='footer-h5'>Company</h5>
                <ul>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Why Us</a>
                  </li>
                  <li>
                    <a href='#'>Security</a>
                  </li>
                  <li>
                    <a href='#'>Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='footer-col1'>
                <h5 className='footer-h5'>Company</h5>
                <ul>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Why Us</a>
                  </li>
                  <li>
                    <a href='#'>Security</a>
                  </li>
                  <li>
                    <a href='#'>Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ******************************************** */}
            <div className='col-md-3'>
              <div className='footer-col2'>
                <h5 className='footer-h5'>Contact Us</h5>
                {/* ******************************************** */}
                <div className='row pb-3'>
                  <div className='col-1'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='col-11'>
                    <p>+91 9093648843</p>
                  </div>
                </div>
                {/* ******************************************** */}
                <div className='row pb-3'>
                  <div className='col-1'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='col-11'>
                    <p>contact@fitsense360.com</p>
                  </div>
                </div>
                {/* ******************************************** */}
                <div className='row pb-3'>
                  <div className='col-1'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='col-11'>
                    <p>#478 Pattom, Trivandrum, Kerala, India</p>
                  </div>
                </div>
                {/* ******************************************** */}
              </div>
            </div>
            {/* ******************************************** */}
            <div className='col-md-3'>
              <div className='footer-col3'>
                <h5 className='footer-h5'>Subscribe To Our Newsletter</h5>
                <form action='#'>
                  <div className='input-group mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter Your Email'
                      aria-label="Recipient's email"
                      aria-describedby='button-addon2'
                      required
                    />
                    <button className='' type='submit' id='button-addon2'>
                      <i className='fa-solid fa-paper-plane'></i>
                    </button>
                  </div>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
          {/* **************************************** */}
          <div className='row gx-0 footer-row2 align-items-center py-3'>
            <div className='col-md-3'>
              <img
                src={logo}
                alt='main logo'
                className='img-fluid footer-img'
              />
            </div>
            <div className='col-md-6 text-center'>
              <p>
                @2024 <span>(FitSense360)</span>. All Copyrights Reserved.
              </p>
            </div>
            <div className='col-md-3 text-end'>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin'></i>
            </div>
          </div>
          {/* **************************************** */}
        </div>
      </div>
    </>
  );
};

export default Footer;
