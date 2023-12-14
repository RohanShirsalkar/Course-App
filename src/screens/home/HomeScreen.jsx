import React, { useEffect, useState } from 'react'
import "./homeScreen.scss"
import CourseCard from '../../components/course_card/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { findAllCourses } from '../../features/courses/courseSlice'

export default function HomeScreen() {
    const [displayedCourses, setDisplayedCourses] = useState();
    const [text, setText] = useState();

    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllCourses());
        setDisplayedCourses(courses.courses);
    }, []);

    const handleKeyPress = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setText();

    }

    const handleSearch = () => {
        console.log(text);
        // navigate(`/search?field=${"name"}&${text}`);
    };



    return (
        <div id="home_screen">


            <div className="course-list">
                {courses.courses && courses.courses.map(course => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        courseName={course.name}
                        instructor={course.instructor}
                        schedule={course.schedule}
                        description={course.description}
                        thumbnail={course.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}
