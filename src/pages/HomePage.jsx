import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// Images
import Header from "../assets/img/Header.webp";

// Components
import { NavbarHome } from "../assets/components/navbar/NavbarHome";
import { CardKursus } from "../assets/components/cards/CardKursus";
import { CardKategory } from "../assets/components/cards/CardKategory";
import { NavbarKelas } from "../assets/components/navbar/NavbarKelas";
import CardKategorySkeleton from "../assets/components/skeleton/CardKategorySkeleton";

// Redux
import { getUserProfileAction } from "../redux/action/auth/getUserProfileAction";
import { getAllCategoriesAction } from "../redux/action/categories/getAllCategoriesAction";
import { getAllCoursesAction } from "../redux/action/courses/getAllCoursesAction";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const getUserProfile = () => {
    dispatch(getUserProfileAction());
  };

  const getCategories = () => {
    dispatch(getAllCategoriesAction());
  };

  const getCourses = () => {
    dispatch(getAllCoursesAction());
  };

  useEffect(() => {
    getUserProfile();
    getCategories();
    getCourses();
  }, [dispatch]);

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const storeCategories = useSelector(
    (state) => state.dataCategories.categories,
  );
  const storeCourses = useSelector((state) => state.dataCourses.courses);
  const storeAuthUser = useSelector((state) => state.authLogin);
  // const detailCourses = useSelector((state) => state.dataCourses.detail)
  const displayedCourses = storeCourses ? storeCourses.slice(0, 3) : [];
  const displayedCategories = storeCategories
    ? storeCategories.slice(0, 6)
    : [];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory
    ? storeCourses.filter(
      (course) => course.category.categoryName === selectedCategory,
    )
    : displayedCourses;

  // console.log("detailCourses", detailCourses);

  console.log("storeCourses", storeCourses);

  console.log("storeCategories", storeCategories);

  console.log("storeAuthUser", storeAuthUser);

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="mt-[5rem] flex flex-col">
        {/* Hero Section */}
        <div className="flex">
          <div className="relative -z-10 w-2/3">
            <img src={Header} alt="Header" className="w-full " />
            <div className="absolute inset-0 bg-gradient-to-l from-primary"></div>
          </div>
          <div className="flex w-1/3 items-center justify-center bg-primary">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-semibold tracking-wide text-white">
                Belajar
              </div>
              <div className="text-3xl font-semibold tracking-wide text-white">
                dari Praktisi Terbaik!
              </div>
              <div className="mt-4 cursor-pointer rounded-lg border-2 bg-white px-3 py-2 text-center text-lg font-bold tracking-wide text-primary transition-all hover:border-white hover:bg-primary hover:text-white">
                IKUTI KELAS
              </div>
            </div>
          </div>
        </div>

        {/* Start Kategori Belajar Section */}
        <div className="flex flex-col gap-5 bg-secondary px-28 py-12">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Kategori Belajar</div>
            <div
              className="cursor-pointer text-lg font-semibold text-primary"
              onClick={() => {
                navigate("/all-kelas");
              }}
            >
              Lihat Semua
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {storeCategories == null ? (
              <CardKategorySkeleton />
            ) : (
              displayedCategories.map((value) => (
                <CardKategory
                  key={value.id}
                  category={value.categoryName}
                  thumbnail={value.categoryImg}
                />
              ))
            )}
          </div>
        </div>
        {/* End Kategori Belajar Section */}

        {/* Start Kursus Populer Section */}
        <div className="flex flex-col gap-5 px-28 py-12">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Kursus Populer</div>
            <div
              className="cursor-pointer text-lg font-semibold text-primary"
              onClick={toggleShowAllCourses}
            >
              {showAllCourses ? "Tampilkan Sedikit" : "Lihat Semua"}
            </div>
          </div>

          {/* Filter */}
          <div className="flex justify-between">
            <div
              className={`cursor-pointer rounded-xl ${selectedCategory === null ? "bg-primary" : "bg-secondary"
                } mr-11 px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white`}
              onClick={() => handleCategoryFilter(null)}
            >
              All
            </div>

            {storeCategories &&
              storeCategories.map((value) => (
                <div
                  key={value.id}
                  className={`cursor-pointer rounded-xl ${selectedCategory === value.categoryName
                      ? "bg-primary"
                      : "bg-secondary"
                    } mr-11 px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white`}
                  onClick={() => handleCategoryFilter(value.categoryName)}
                >
                  {value.categoryName}
                </div>
              ))}
          </div>
        </div>

        {/* Container Card Kelas */}
        <div className="mx-6 grid grid-cols-3 gap-6 sm:mx-12 lg:mx-24 xl:mx-24">
          {showAllCourses
            ? storeCourses.map((value) => (
              <CardKursus
                key={value.id}
                image={value.courseImg}
                category={value.category.categoryName}
                rating={value.averageRating}
                title={value.courseName}
                author={value.mentor}
                level={value.level}
                modul={value.modul}
                duration={value.duration}
                price={value.price}
                categoryId={value.id}
                isPremium={value.isPremium}
              />
            ))
            : filteredCourses.map((value) => (
              <CardKursus
                key={value.id}
                image={value.courseImg}
                category={value.category.categoryName}
                rating={value.averageRating}
                title={value.courseName}
                author={value.mentor}
                level={value.level}
                modul={value.modul}
                duration={value.duration}
                price={value.price}
                categoryId={value.id}
                isPremium={value.isPremium}
              />
            ))}
        </div>
      </div>
      {/* End Kursus Populer */}
    </>
  );
};
