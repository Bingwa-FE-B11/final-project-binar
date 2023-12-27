import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import { SidebarKelas } from "../../../assets/components/sidebar/SidebarKelas";
import LoadingSpinner from "../../../assets/components/loading/loadingSpinner";
import { searchCourseAction } from "../../../redux/action/courses/searchCourseAction";

export const PilihKelas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParam = new URLSearchParams(location.search).get("search");
  const [searchInput, setSearchInput] = useState("");

  // Redux Store
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeSearchedCourses = useSelector(
    (state) => state.dataCourses.searchedCourses,
  );
  const isLoading = useSelector((state) => state.dataCourses.loading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Search Feature
  const handleSearchCourse = (searchInput) => {
    const search = dispatch(searchCourseAction(searchInput));

    if (search) {
      navigate(`/pilih-kelas?search=${searchInput}`);
    }
  };

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="flex h-fit flex-col justify-between bg-secondary md:h-screen lg:h-fit">
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
                  className="w-[20%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white"
                  onClick={() => {
                    navigate("/all-kelas");
                  }}
                >
                  <button>All</button>
                </div>
                <div
                  className="w-[40%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[50%] lg:w-[60%]"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div
                  className="w-[30%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[40%] lg:w-[30%]"
                  onClick={() => {
                    navigate("/pilih-gratis");
                  }}
                >
                  <button>Kelas Gratis</button>
                </div>
              </div>

              <div className="py-4">
                Menampilkan{" "}
                <span className="font-bold text-primary">"{searchParam}"</span>
              </div>
              {/* Main Content */}
              <div className="grid w-full grid-cols-2 gap-6 py-2 md:grid-cols-1 lg:grid-cols-2">
                {/* Card Item */}
                {storeSearchedCourses?.length > 0 ? (
                  storeSearchedCourses.map((value) => (
                    <CardGlobal
                      key={value.id}
                      courseId={value.id}
                      image={value.courseImg}
                      category={value.category.categoryName}
                      rating={value.averageRating}
                      title={value.courseName}
                      author={value.mentor}
                      level={value.level}
                      modul={value.modul}
                      duration={value.duration}
                    />
                  ))
                ) : (
                  <p className="col-span-2 py-10 text-center text-lg font-medium italic text-slate-500">
                    - Course tidak ditemukan -
                  </p>
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
