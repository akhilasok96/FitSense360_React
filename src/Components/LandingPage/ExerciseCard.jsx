import React from 'react'
import bicepCurl from '../assets/bicep_curls.jpg';

const ExerciseCard = () => {

    const cardInfo = [
        {image: "https://www.shutterstock.com/image-vector/man-doing-arm-workout-using-260nw-1376904155.jpg", title: "Bicep Curl", text: "lorem ipsum"},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnW4tpwRrSopFh6RNawPWaPYE0y3rbh0bFMA&usqp=CAU", title: "Deadlift", text: "lorem ipsum"},
        {image: "https://www.shutterstock.com/image-photo/how-make-squat-muscular-man-260nw-306013061.jpg", title: "Squats", text: "lorem ipsum"},
        {image: "https://www.shutterstock.com/image-vector/men-doing-push-exercise-workout-260nw-1769348627.jpg", title: "Pushup", text: "lorem ipsum"},
        {image: "https://www.shutterstock.com/image-vector/man-doing-crunches-abdominals-exercise-600nw-1842272014.jpg", title: "Crunches", text: "lorem ipsum"},
    ];

    const renderExerciseCard = (card, index) => {
        return(
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4 reduce-gap" key={index}>
                <div className="card exercise-card h-100 custom-card">
                    <img src={card.image} className="card-img-top" alt="exercise" style={{objectFit: 'cover', height: '200px'}}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href="#" className="btn btn-primary mt-auto card-button">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    };

  return (
            <div className="card-container">
                <div className="row">
                    {cardInfo.map(renderExerciseCard)}
                </div>
            </div>
  )
}

export default ExerciseCard