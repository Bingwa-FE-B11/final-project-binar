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
import { NavbarMobile } from "../../../assets/components/navbar/NavbarMobile";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import { useMediaQuery } from "react-responsive";
import { SearchMobile } from "../../../assets/components/search/SearchMobile";
import { searchCourseAction } from "../../../redux/action/courses/searchCourseAction";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

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
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const token = CookieStorage.get(CookiesKeys.AuthToken);

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

  // Search Feature
  const [searchInput, setSearchInput] = useState("");

  const handleSearchCourse = (searchInput) => {
    const search = dispatch(searchCourseAction(searchInput));

    if (search) {
      navigate(`/pilih-kelas?search=${searchInput}`);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {isMobile ? (
        <NavbarMobile />
      ) : token === undefined ? (
        <NavbarHome />
      ) : (
        <NavbarKelas />
      )}
      <div className="flex h-full flex-col justify-between bg-secondary">
        {isMobile ? <SearchMobile /> : <></>}
        <div className="flex flex-col justify-center px-4 pb-16 pt-2 md:px-8 md:pb-0 md:pt-20 lg:px-24 lg:pb-0 lg:pt-20">
          {/* Search */}
          <div className="flex items-center justify-between py-4">
            <div className="-mt-8 px-0 py-6 text-xl font-bold md:mt-0 md:text-3xl lg:mt-0 lg:text-3xl">
              Kelas Berjalan
            </div>
            {isMobile ? (
              <div
                className="-mt-8 font-semibold text-primary md:mt-0 lg:mt-0"
                onClick={handleOpen}
              >
                Filter
              </div>
            ) : (
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
            )}
          </div>

          <div className="flex items-start justify-center py-4 md:justify-between lg:justify-between">
            {/* Filter */}
            <div className="hidden w-[30%] md:flex lg:flex">
              <SidebarKelas />
            </div>

            {/* Button */}
            <div className="-mt-10 flex w-full flex-wrap items-center justify-between font-semibold md:mt-0 md:w-[65%] lg:mt-0 lg:w-[65%]">
              <div className="flex w-full gap-4 text-center">
                <div
                  className={`w-[20%] cursor-pointer rounded-xl py-2 text-sm md:text-base lg:text-base ${
                    filterStatus === "All"
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterChange("All")}
                >
                  <button>All</button>
                </div>
                <div
                  className={`w-[60%] cursor-pointer rounded-xl py-2 text-sm md:text-base lg:text-base ${
                    filterStatus === "In Progress"
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterChange("In Progress")}
                >
                  <button>In Progress</button>
                </div>
                <div
                  className={`w-[20%] cursor-pointer rounded-xl py-2 text-sm md:text-base lg:text-base ${
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
                        return value.enrollment.progres >= 100;
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
      </div>

      {/* Dialog Filter */}
      <Dialog open={open} handler={handleOpen} size="xxl">
        <DialogHeader className="-mb-6 flex justify-end pr-4 pt-4">
          <IoClose size={30} onClick={handleOpen} />
        </DialogHeader>
        <DialogBody>
          <SidebarKelas />
        </DialogBody>
      </Dialog>
    </>
  );
};
