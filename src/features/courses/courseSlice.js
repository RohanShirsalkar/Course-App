import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// Actions 

export const findAllCourses = createAsyncThunk("findAllCourses", async () => {
    const response = await axios.get("http://localhost:3000/courses");
    return response.data;
});

export const findCoursesById = createAsyncThunk("findCoursesById", async (courseId) => {
    const response = await axios.get(`http://localhost:3000/courses/${courseId}`);
    return response.data;
});

export const findCourseByQuery = createAsyncThunk("findCourseByQuery", async (query) => {
    const { field, value } = query
    const response = await axios.get(`http://localhost:3000/courses?${field}=${value}`);
    return response.data;
});


const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        isLoading: false,
        courses: [], // For findAllCourses
        searchedCourses: [],
        courseDetails: null, // For findCoursesById
        isError: false
    },
    reducers: [],
    extraReducers: (builder) => {

        // To find all courses
        builder
            .addCase(findAllCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(findAllCourses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.courses = action.payload;
            })
            .addCase(findAllCourses.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
            })

        // To find one course
        builder
            .addCase(findCoursesById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(findCoursesById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.courseDetails = action.payload;
            })
            .addCase(findCoursesById.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
            })

        builder
            .addCase(findCourseByQuery.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(findCourseByQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchedCourses = action.payload;
                state.query = [action.meta.arg.field, action.meta.arg.value]
            })
            .addCase(findCourseByQuery.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
            })
    }
});

export default courseSlice.reducer;