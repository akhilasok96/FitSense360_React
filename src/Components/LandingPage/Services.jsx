import servicesImg from "../assets/calisthenics_workout.jpeg";

const Services = () => {
  return (
    <>
      <div className='container-fluid services'>
        <div className='container'>
          <div className='row gx-0'>
            <div className='col-md-6'>
              <div className='services_col1'>
                <h1 className='main-heading'>Choose your fitness path</h1>
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
                      <h5 className='ps-3'>Weightloss</h5>
                    </label>
                  </div>
                  <p>
                    Embark on a transformative journey focused on shedding
                    excess weight through targeted exercise routines.
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
                      <h5 className='ps-3'>Body Building</h5>
                    </label>
                  </div>
                  <p>
                    Dive into the world of bodybuilding with our comprehensive
                    program that combines progressive resistance training.
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
                      <h5 className='ps-3'>Strength Training</h5>
                    </label>
                  </div>
                  <p>
                    Strengthen your body and mind with our strength training
                    services to increase muscle power and endurance.
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
                <img
                  src={servicesImg}
                  alt=''
                  className='img-fluid services-image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
