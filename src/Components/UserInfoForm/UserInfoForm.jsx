import featuredImg from "../Assets/featured_info.png";

const UserInfoForm = () => {
  return (
    <>
      <div className='container user-info-container'>
        <div className='row border rounded-5 p-3 bg-white shadow box-area'>
          <div className='col-md-6 rounded-4 left-info-box'>
            <div className='featured-image mb-3'>
              <img
                src={featuredImg}
                alt='featured image'
                className='img-fluid'
              />
            </div>
            <p className='text-white fs-2'>Be Verified</p>
            <small className='text-white text-wrap text-center'>
              Join Experienced Designers on this Platform.
            </small>
          </div>
          <div className='col-md-6 right-info-box'>
            <div className='row align-items-center'>
              <div className='header-text mb-4'>
                <h2>Hello, Again</h2>
                <p>Wee are happy to have you back.</p>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Age'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Gender'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Place'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Weight (Kg)'
                />
              </div>
              <div className='input-group mb-4'>
                <input
                  type='text'
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Height (cm)'
                />
              </div>
              <div className='input-group mb-3'>
                <button className='btn btn-user-info btn-lg w-100 fs-6'>
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoForm;
