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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem consectetur dolore illum repellat, obcaecati odio!
                Tenetur laboriosam reprehenderit similique porro.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, a assumenda iusto voluptatibus minima tempore.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, a assumenda iusto voluptatibus minima tempore.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, a assumenda iusto voluptatibus minima tempore.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, a assumenda iusto voluptatibus minima tempore.
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
