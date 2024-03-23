import parterImg1 from "../assets/partner1.png";
import parterImg2 from "../assets/partner2.png";
import parterImg3 from "../assets/partner3.png";
import fitness1 from "../assets/fitness1.jpeg";
import dumbell_icon from "../assets/dumbbell.png";

const FitnessGoal = () => {
  return (
    <>
      <div className='container-fluid Fitness-Goal'>
        <div className='container'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-5'>
              <div className='fitness-col1'>
                <h1>970K+ More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='fitness-col2'>
                <img src={parterImg1} alt='' className='img-fluid px-3' />
                <img src={parterImg2} alt='' className='img-fluid px-3' />
                <img src={parterImg3} alt='' className='img-fluid px-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/******************************************/}
      <div className='container-fluid Fitness-Goal1'>
        <div className='container'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-6'>
              <div className='fitness-col3'>
                <img src={fitness1} alt='' className='img-fluid' />
                <div className='popup'>
                  <img src={dumbell_icon} alt='' />
                  <h6 className='fw-bold'>Professional Trainer</h6>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fitness-col4'>
                <h1 className='main-heading'>
                  Get Ready To Reach Your Fitness Goals
                </h1>
                <div className='pt-3 pb-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    quasi iure fugiat expedita, enim adipisci nemo eligendi
                    minus ipsum molestias perspiciatis ipsa mollitia quidem, vel
                    earum impedit id accusantium rerum laborum facilis maiores!
                    Incidunt, sapiente veniam! Non quibusdam unde quam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde, pariatur.
                  </p>
                </div>
                <button className='btn1 btn0'>Free Trial Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/******************************************/}
      {/******************************************/}
    </>
  );
};

export default FitnessGoal;
