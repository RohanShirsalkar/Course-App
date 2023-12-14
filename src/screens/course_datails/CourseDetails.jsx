import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./courseDetails.scss"
import { useDispatch, useSelector } from 'react-redux';
import { findCoursesById, findAllCourses } from '../../features/courses/courseSlice';

export default function CourseDetails() {
    const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);
    const [courseDetails, setCourseDetails] = useState();

    const { id } = useParams();
    const dispatch = useDispatch();
    const course = useSelector((state) => state.courses.courseDetails);

    useEffect(() => {
        dispatch(findCoursesById(id));
        // setCourseDetails(course.courseDetails)
    }, [id]);

    const toggleSyllabus = () => {
        setSyllabusExpanded(!isSyllabusExpanded);
    };

    return (
        <>
            {course && (
                <div id="course_details_screen">
                    <div className="left-setion">
                        <img src={course.thumbnail} alt={`${course.name} Thumbnail`} />
                        <div className="course-info">
                            <h2>{course.name}</h2>
                            <p><strong>Instructor:</strong> {course.instructor}</p>
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <p><strong>Schedule:</strong> {course.schedule}</p>
                            <p><strong>Location:</strong> {course.location}</p>
                            <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
                        </div>
                    </div>

                    <div className='right-section'>
                        <div className="course-description">
                            <h3>Description</h3>
                            <p>{course.description}</p>
                        </div>
                        <div className="course-prerequisites">
                            <h3>Prerequisites</h3>
                            <ul>
                                {course.prerequisites.map((prerequisite, index) => (
                                    <li key={index}>{prerequisite}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="course-students">
                            <h3>Enrolled Students</h3>
                            <ul>
                                {course.students.map((student) => (
                                    <li key={student.id}>
                                        {student.name} ({student.email})
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="course-syllabus">
                            <div className="syllabus-header" onClick={toggleSyllabus}>
                                <h3>Syllabus</h3>
                                <span>{isSyllabusExpanded ? 'Hide' : 'Show'}</span>
                            </div>
                            {isSyllabusExpanded && (
                                <ul>
                                    {course.syllabus.map((week) => (
                                        <li key={week.week}>
                                            <strong>Week {week.week}:</strong> {week.topic} - {week.content}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}