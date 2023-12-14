import React from 'react'
import "./courseCard.scss"
import { Link } from 'react-router-dom'

export default function CourseCard({ id, courseName, instructor, schedule, description, thumbnail, percentageOfCompletion }) {

    const ProgressBar = ({ percentage }) => {
        return (
            <>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
                </div>
            </>

        );
    }

    return (
        <Link to={`/course/${id}`} id="course_card_component">
            <div className="thumbnail">
                <img src={thumbnail} alt={`${courseName} Thumbnail`} />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{courseName}</h3>
                    {percentageOfCompletion && (
                        <div className='d-flex align-items-center pt-2'>
                            <ProgressBar percentage={percentageOfCompletion} />
                        </div>
                    )}
                </div>
                <div className="card-body">
                    <p><strong>Instructor:</strong> {instructor}</p>
                    <p><strong>Schedule:</strong> {schedule}</p>
                    <p><strong>Description:</strong> {description}</p>
                </div>
            </div>
        </Link>
    )
}
