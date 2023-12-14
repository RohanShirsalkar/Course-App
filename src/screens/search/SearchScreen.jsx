import React, { useEffect, useState } from 'react'
import "./searchScreen.scss"
import CourseCard from '../../components/course_card/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { findCourseByQuery } from '../../features/courses/courseSlice'


export default function SearchScreen() {
    const searchedCourses = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const field = searchParams.get('field');
    const value = searchParams.get('value');

    useEffect(() => {
        dispatch(findCourseByQuery({ field, value }));
        console.log(field, value);
    }, [value, field]);

    return (
        <div id='search_screen'>
            <h2>Results</h2>
            <div className="course-list">
                {searchedCourses.searchedCourses && searchedCourses.searchedCourses.map(course => (
                    <CourseCard
                        key={course.id}
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
