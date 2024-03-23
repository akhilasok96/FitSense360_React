import tickImg from "../assets/icons/tick_icon.svg";

const BestPlan = () => {
  return (
    <>
      <div className='container-fluid BestPlan'>
        <h1 className='main-heading'>Choose The Best Plan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          cupiditate.
        </p>
        <div className='container pt-5'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-4'>
              <div className='bestplan-col1'>
                <h5>Discover</h5>
                <h1 className='pt-4'>
                  $69 <span>/Per Month</span>
                </h1>
                <div className='bestplan-detail py-3'>
                  <p>
                    <img src={tickImg} alt='' /> 4 Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> 1 Group Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Online class access
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> E-book fitness guide
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Additional AI trainers
                  </p>
                </div>
                <button className='btn3'>Choose Plan</button>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bestplan-col1 bestplan-col2'>
                <h3 className='BestPlan-h3'>Most Popular</h3>
                <h5>Enterprise</h5>
                <h1 className='pt-4'>
                  $299 <span>/Per Month</span>
                </h1>
                <div className='bestplan-detail py-3'>
                  <p>
                    <img src={tickImg} alt='' /> 10 Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> 4 Group Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Online class access
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> E-book fitness guide
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Additional AI trainers
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Additional AI trainers
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Additional AI trainers
                  </p>
                </div>
                <button className='btn4'>Choose Plan</button>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bestplan-col1'>
                <h5>Professional</h5>
                <h1 className='pt-4'>
                  $199 <span>/Per Month</span>
                </h1>
                <div className='bestplan-detail py-3'>
                  <p>
                    <img src={tickImg} alt='' /> 10 Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> 4 Group Classes per month
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Online class access
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> E-book fitness guide
                  </p>
                  <p>
                    <img src={tickImg} alt='' /> Additional AI trainers
                  </p>
                </div>
                <button className='btn3'>Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPlan;
