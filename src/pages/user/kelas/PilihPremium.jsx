import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardPremium } from "../../../assets/components/cards/CardPremium";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import { SidebarKelas } from "../../../assets/components/sidebar/SidebarKelas";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";

// Redux
import { getAllCoursesAction } from "../../../redux/action/courses/getAllCoursesAction";
import { searchCourseAction } from "../../../redux/action/courses/searchCourseAction";

export const PilihPremium = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeCourses = useSelector((state) => state.dataCourses.courses);

  const getCourses = () => {
    dispatch(getAllCoursesAction());
  };

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

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="flex h-full flex-col justify-between bg-secondary">
        <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-28">
          {/* Search */}
          <div className="flex items-center justify-between">
            <div className="px-4 py-6 text-3xl font-bold">Topik Kelas</div>
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
            <div className="flex w-[65%] flex-wrap items-center justify-between font-semibold">
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
                  className="w-[40%] cursor-pointer rounded-xl bg-primary py-2 text-white md:w-[50%] lg:w-[60%]"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div
                  className="w-[30%] cursor-pointer rounded-xl bg-white py-2 md:w-[40%] lg:w-[30%]"
                  onClick={() => {
                    navigate("/pilih-gratis");
                  }}
                >
                  <button>Kelas Gratis</button>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid w-full grid-cols-2 gap-6 py-4 md:grid-cols-1 lg:grid-cols-2">
                {storeCourses == null ? (
                  <CardCoursesSkeleton />
                ) : (
                  storeCourses
                    .filter((value) => value.isPremium)
                    .map((value) => (
                      <CardPremium
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
                        isPremium={"Premium"}
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
