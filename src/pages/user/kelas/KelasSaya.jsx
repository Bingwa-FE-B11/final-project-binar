import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardKelasSaya } from "../../../assets/components/cards/CardKelasSaya";
import { SidebarKelas } from "../../../assets/components/sidebar/SidebarKelas";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";

// Redux
import { getUserProfileAction } from "../../../redux/action/auth/getUserProfileAction";
import { getCoursesMeAction } from "../../../redux/action/courses/getCoursesMeAction";

export const KelasSaya = () => {
  const storeCoursesEnroll = useSelector((state) => state.dataCourses.me);
  const [filterStatus, setFilterStatus] = useState("All");
  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };
  // const storeFilteredCourses = useSelector(
  //   (state) => state.dataCourses.filteredCourses,
  // );
  const dispatch = useDispatch();

  const getCourses = async () => {
    await dispatch(getCoursesMeAction());
  };

  const getUser = async () => {
    await dispatch(getUserProfileAction());
  };

  useEffect(() => {
    getCourses();
    getUser();
  }, []);

  // Filter Feature
  // const [displayedCourses, setDisplayedCourses] = useState([]);

  // useEffect(() => {
  //   const coursesToDisplay =
  //     storeFilteredCourses?.length > 0 ? storeFilteredCourses : [];
  //   setDisplayedCourses(coursesToDisplay);
  // }, [storeFilteredCourses]);

  return (
    <div className="flex h-full flex-col justify-between bg-secondary">
      <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-28">
        {/* Search */}
        <div className="flex items-center justify-between py-4">
          <div className="px-4 py-6 text-xl font-bold md:text-3xl lg:text-3xl">
            Kelas Berjalan
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="cursor-pointer rounded-3xl border-2 border-primary px-1 py-2 md:px-4 lg:px-4"
              placeholder="Cari Kelas..."
            />
            <BiSearchAlt
              size={25}
              className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
            />
          </div>
        </div>

        <div className="flex items-start justify-center py-4 md:justify-between lg:justify-between">
          {/* Filter */}
          <SidebarKelas />

          {/* Button */}
          <div className="flex w-full flex-wrap items-center justify-between font-semibold md:w-[65%] lg:w-[65%]">
            <div className="flex w-full gap-4 text-center">
              <div
                className={`w-[20%] cursor-pointer rounded-xl py-2 ${
                  filterStatus === "All"
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleFilterChange("All")}
              >
                <button>All</button>
              </div>
              <div
                className={`w-[60%] cursor-pointer rounded-xl py-2 ${
                  filterStatus === "In Progress"
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleFilterChange("In Progress")}
              >
                <button>In Progress</button>
              </div>
              <div
                className={`w-[20%] cursor-pointer rounded-xl py-2 ${
                  filterStatus === "Selesai"
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleFilterChange("Selesai")}
              >
                <button>Selesai</button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-1 lg:grid-cols-2">
              {/* Card Item */}
              {storeCoursesEnroll === null ? (
                <CardCoursesSkeleton />
              ) : (
                storeCoursesEnroll
                  .filter((value) => {
                    if (filterStatus === "All") return true;
                    if (filterStatus === "In Progress")
                      return (
                        value.enrollment.progres > 0 &&
                        value.enrollment.progres < 100
                      );
                    if (filterStatus === "Selesai")
                      return value.enrollment.progres === 100;
                    return false;
                  })
                  .map((value) => (
                    <CardKelasSaya
                      key={value.id}
                      courseId={value.id}
                      image={value.courseImg}
                      category={value.category.categoryName}
                      title={value.courseName}
                      author={value.mentor}
                      level={value.level}
                      modul={value.modul}
                      duration={value.duration}
                      progress={value.enrollment.progres}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};
