import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardKelasSaya } from "../../../assets/components/cards/CardKelasSaya";
import { SidebarKelas } from "../../../assets/components/sidebar/SidebarKelas";

// Redux
import { getUserProfileAction } from "../../../redux/action/auth/getUserProfileAction";

export const KelasSaya = () => {
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeEnrollments = useSelector((state) => state.enrollments.course);
  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(getUserProfileAction());
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

console.log("storeEnrollments", storeEnrollments)
  return (
    <div className="flex h-full flex-col justify-between bg-secondary">
      <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-28">
        {/* Search */}
        <div className="flex items-center justify-between">
          <div className="px-4 py-6 text-3xl font-bold">Kelas Berjalan</div>
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

        <div className="flex items-start justify-center lg:justify-between md:justify-between py-4">
        {/* Filter */}
          <SidebarKelas/>

          {/* Button */}
          <div className="flex w-[65%] flex-wrap items-center justify-between font-semibold">
            <div className="flex w-full gap-4 text-center">
              <div className="w-[20%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white">
                <button>All</button>
              </div>
              <div className="w-[60%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white">
                <button>In Progress</button>
              </div>
              <div className="w-[20%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white">
                <button>Selesai</button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid w-full grid-cols-2 gap-6 py-4 md:grid-cols-1 lg:grid-cols-2">
              {/* Card Item */}
              <CardKelasSaya
                category={"UAI UEX DISAIN"}
                rating={4.5}
                title={"Mari Belajar UIUX"}
                author={"Paijo"}
                level={"Basic"}
                modul={10}
                duration={120}
                kelas={"Premium"}
                progress={60}
              />

{/* {storeCourses == null ? (
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
                        categoryId={value.id}
                        isPremium={"Premium"}
                      />
                    ))
                )} */}
            </div>
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};
