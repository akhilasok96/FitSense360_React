import servicesImg from "../assets/services_image.png";

const Services = () => {
  return (
    <>
      <div className='container-fluid services'>
        <div className='container'>
          <div className='row gx-0'>
            <div className='col-md-6'>
              <div className='services_col1'>
                <h1 className='main-heading'>
                  Why you should choose our services
                </h1>
                {/* **************************************************** */}
                <div className='services_main pt-3 pb-5'>
                  {/* **************************************************** */}
                  <div className='form-check py-4'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                    />
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                      <h5 className='ps-3'>Personal Training</h5>
                    </label>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, quo ipsam repellat iure dicta maxime laboriosam
                    iusto assumenda aspernatur omnis?
                  </p>
                  {/* **************************************************** */}
                  <div className='form-check py-4'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                    />
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                      <h5 className='ps-3'>Personal Training</h5>
                    </label>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, quo ipsam repellat iure dicta maxime laboriosam
                    iusto assumenda aspernatur omnis?
                  </p>
                  {/* **************************************************** */}
                  <div className='form-check py-4'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                    />
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                      <h5 className='ps-3'>Personal Training</h5>
                    </label>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, quo ipsam repellat iure dicta maxime laboriosam
                    iusto assumenda aspernatur omnis?
                  </p>
                  {/* **************************************************** */}
                </div>
                {/* **************************************************** */}
                <button className='btn1 btn0'>Join Today</button>
                {/* **************************************************** */}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='services_col2'>
                <img src={servicesImg} alt='' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
