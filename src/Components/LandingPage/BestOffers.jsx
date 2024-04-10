import dumbellIcon from "../assets/icons/dumbell_icon.svg";
import yogaIcon from "../assets/icons/yoga_icon.svg";
import runningIcon from "../assets/icons/running_icon.svg";
import bicepsIcon from "../assets/icons/biceps_icon.svg";

const BestOffers = () => {
  return (
    <>
      <div className='container-fluid BestOffers'>
        <div className='container'>
          <div className='row gx-0 py-3 align-items-center'>
            <div className='col-md-7'>
              <h1 className='main-heading pe-md-5 me-md-5'>
                The Best Programs We Offer For You
              </h1>
            </div>
            <div className='col-md-5'>
              <p>
                <p>
                  Discover our curated selection of fitness programs, each
                  designed to meet a wide range of health and wellness goals.
                  From the energizing flows of basic yoga to the
                  strength-building rigor of bodybuilding, our offerings are
                  tailored to empower you, regardless of your fitness level.
                </p>
              </p>
            </div>
          </div>
          {/************************************************/}
          <div className='row gx-0 py-4'>
            <div className='col-md-3'>
              <div className='bestoffer-col1'>
                <img src={dumbellIcon} alt='' className='img-fluid pb-3' />
                <h4>Strength Training</h4>
                <p>
                  Elevate your fitness with our comprehensive strength training
                  program. Designed for all levels, from beginners to advanced
                  athletes.
                </p>
                <button>
                  Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                </button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='bestoffer-col1'>
                <img src={yogaIcon} alt='' className='img-fluid pb-3' />
                <h4>Basic Yoga</h4>
                <p>
                  Discover the art of balance with our Basic Yoga program.
                  Perfect for those new to yoga or looking to refine their
                  practice and fundamental poses.
                </p>
                <button>
                  Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                </button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='bestoffer-col1'>
                <img src={bicepsIcon} alt='' className='img-fluid pb-3' />
                <h4>Body Building</h4>
                <p>
                  Embark on a journey of muscular transformation with our Body
                  Building program. Tailored for individuals aiming to gain
                  muscle mass and sculpt their body.
                </p>
                <button>
                  Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                </button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='bestoffer-col1'>
                <img src={runningIcon} alt='' className='img-fluid pb-3' />
                <h4>Weight Loss</h4>
                <p>
                  Kickstart your weight loss journey with a program designed to
                  burn fat and increase energy levels with planning to help you
                  achieve and maintain your ideal weight.
                </p>
                <button>
                  Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                </button>
              </div>
            </div>
          </div>
          {/************************************************/}
        </div>
      </div>
    </>
  );
};

export default BestOffers;
