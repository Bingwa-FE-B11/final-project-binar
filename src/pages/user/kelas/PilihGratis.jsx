import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Component
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import { SidebarKelas } from "../../../assets/components/sidebar/SidebarKelas";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";

// Redux
import { getAllCoursesAction } from "../../../redux/action/courses/getAllCoursesAction";
import { searchCourseAction } from "../../../redux/action/courses/searchCourseAction";

export const PilihGratis = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeCourses = useSelector((state) => state.dataCourses.courses);
  const storeFilteredCourses = useSelector(
    (state) => state.dataCourses.filteredCourses,
  );

  const getCourses = () => {
    dispatch(getAllCoursesAction());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCourses();
  }, [dispatch]);

  // Search Feature
  const [searchInput, setSearchInput] = useState("");

  const handleSearchCourse = (searchInput) => {
    const search = dispatch(searchCourseAction(searchInput));

    if (search) {
      navigate(`/pilih-kelas?search=${searchInput}`);
    }
  };

  // Filter Feature
  const [displayedCourses, setDisplayedCourses] = useState([]);

  useEffect(() => {
    const coursesToDisplay =
      storeFilteredCourses?.length > 0 ? storeFilteredCourses : [];
    setDisplayedCourses(coursesToDisplay);
  }, [storeFilteredCourses, storeCourses]);

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="flex h-full flex-col justify-between bg-secondary">
        <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-20">
          {/* Search */}
          <div className="flex items-center justify-between py-4">
            <div className="px-4 py-6 text-xl font-bold md:text-3xl lg:text-3xl">
              Topik Kelas
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? handleSearchCourse(searchInput) : ""
                }
                className="cursor-pointer rounded-3xl border-2 border-primary px-1 py-2 outline-none md:px-4 lg:px-4"
                placeholder="Cari Kelas..."
              />
              <BiSearchAlt
                size={25}
                className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
                onClick={() => {
                  handleSearchCourse(searchInput);
                }}
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
                  className="w-[20%] cursor-pointer rounded-xl bg-white py-2"
                  onClick={() => {
                    navigate("/all-kelas");
                  }}
                >
                  <button>All</button>
                </div>
                <div
                  className="w-[40%] cursor-pointer rounded-xl bg-white py-2 md:w-[50%] lg:w-[60%]"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div
                  className="w-[30%] cursor-pointer rounded-xl bg-primary py-2 text-white md:w-[40%] lg:w-[30%]"
                  onClick={() => {
                    navigate("/pilih-gratis");
                  }}
                >
                  <button>Kelas Gratis</button>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-1 lg:grid-cols-2">
                {displayedCourses.length === 0 ||
                displayedCourses.filter((value) => !value.isPremium).length ===
                  0 ? (
                  <p className="col-span-2 py-10 text-center text-lg font-semibold italic text-slate-500">
                    - Course tidak ditemukan -
                  </p>
                ) : (
                  displayedCourses
                    .filter((value) => !value.isPremium)
                    .map((value) => (
                      <CardGlobal
                        key={value.id}
                        image={value.courseImg}
                        category={value.category.categoryName}
                        rating={value.averageRating}
                        title={value.courseName}
                        author={value.mentor}
                        level={value.level}
                        modul={value.modul}
                        duration={value.duration}
                        courseId={value.id}
                        isPremium={value.isPremium}
                      />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
        <NavbarKelas style={{ zIndex: 1 }} />
      </div>
    </>
  );
};
