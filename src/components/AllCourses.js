import { useState } from "react";
import Courses from "./Courses";

const AllCourses =()=>{

const [courses,setCourses] =useState([
    {title:"java course",description:"this is demo course"},
    {title:"react course",description:"this is demo course"},
    {title:"js course",description:"this is demo course"},
])

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length>0?courses.map((item)=> <Courses course={item}/>) :"No content"
            }

        </div>
    )
};
export default AllCourses;