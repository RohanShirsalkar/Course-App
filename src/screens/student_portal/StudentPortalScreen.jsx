import React, { useState } from 'react'
import "./studentPortalScreen.scss"
import CourseCard from '../../components/course_card/CourseCard';
import { Link } from 'react-router-dom';

export default function StudentPortalScreen() {
    const [completedCourses, setCompletedCourses] = useState([]);

    const enrolledCourses = [
        {
            id: 1,
            name: 'Introduction to React',
            instructor: 'John Doe',
            thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
            dueDate: '2023-12-31',
            progress: 20
        },
        {
            id: 2,
            name: 'JavaScript Fundamentals',
            instructor: 'Jane Smith',
            thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
            dueDate: '2023-12-15',
            progress: 50
        }
    ];


    const markAsCompleted = (courseId) => {
        if (!completedCourses.includes(courseId)) {
            setCompletedCourses([...completedCourses, courseId]);
        } else {
            setCompletedCourses(completedCourses.filter((id) => id !== courseId));
        }
    };


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
        <div id="student_portal_screen">
            <h3 className='mb-2'>Hi, Alex</h3>
            <h2>Enrolled Courses</h2>
            <ul>
                {enrolledCourses.map((course) => (
                    <li key={course.id}>
                        <div className="course-details">
                            <img src={course.thumbnail} alt={`${course.name} Thumbnail`} />
                            <div className="course-info">
                                <h3 className='mb-3'>{course.name}</h3>
                                <div className='mb-2'>
                                    <ProgressBar percentage={course.progress} />
                                </div>
                                <p>Instructor: {course.instructor}</p>
                                <p>Due Date: {course.dueDate}</p>

                                <button onClick={() => markAsCompleted(course.id)}>
                                    {completedCourses.includes(course.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
