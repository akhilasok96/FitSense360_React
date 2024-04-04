import { useEffect, useState } from "react";

export const CalorieForm = () => {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/calorie_prediction/");
    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      gender: document.getElementById("cal-gender").value,
      age: document.getElementById("cal-age").value,
      height: document.getElementById("cal-height").value,
      weight: document.getElementById("cal-weight").value,
      duration: document.getElementById("cal-duration").value,
      heart_rate: document.getElementById("cal-rate").value,
      body_temp: document.getElementById("cal-temp").value,
    };

    if (webSocket) {
      webSocket.send(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <h1>Calorie Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='cal-gender' className='form-label'>
            Gender
          </label>
          <input type='text' className='form-control' id='cal-gender' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-age' className='form-label'>
            Age
          </label>
          <input type='text' className='form-control' id='cal-age' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-height' className='form-label'>
            Height
          </label>
          <input type='text' className='form-control' id='cal-height' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-weight' className='form-label'>
            Weight
          </label>
          <input type='text' className='form-control' id='cal-weight' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-duration' className='form-label'>
            Duration
          </label>
          <input type='text' className='form-control' id='cal-duration' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-rate' className='form-label'>
            Heart Rate
          </label>
          <input type='text' className='form-control' id='cal-rate' />
        </div>
        <div className='mb-3'>
          <label htmlFor='cal-temp' className='form-label'>
            Body Temperature
          </label>
          <input type='text' className='form-control' id='cal-temp' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default CalorieForm;
