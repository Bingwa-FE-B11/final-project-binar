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
import CardCourseSkeleton from "../assets/components/skeleton/CardCourseSkeleton";
import { Footer } from "../assets/components/footer/Footer";

// Redux
import { getUserProfileAction } from "../redux/action/auth/getUserProfileAction";
import { getAllCategoriesAction } from "../redux/action/categories/getAllCategoriesAction";
import { getAllCoursesAction } from "../redux/action/courses/getAllCoursesAction";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getUserProfile();
    getCategories();
    getCourses();
  }, [dispatch]);

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const storeCategories = useSelector(
    (state) => state.dataCategories.categories,
  );
  const storeCourses = useSelector((state) => state.dataCourses.courses);
  const storeAuthUser = useSelector((state) => state.authLogin);

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="mt-[5rem] flex flex-col">
        {/* Hero Section */}
        <div className="flex">
          <div className="relative -z-10 w-2/3">
            <img src={Header} alt="Header" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-l from-primary"></div>
          </div>
          <div className="flex w-full lg:w-1/3 md:w-1/3 items-center justify-center bg-primary">
            <div className="flex flex-col gap-2">
              <div className="text-lg lg:text-3xl md:text-2xl font-semibold tracking-wide text-white">
                Belajar
              </div>
              <div className="text-lg lg:text-3xl md:text-2xl font-semibold tracking-wide text-white">
                dari Praktisi Terbaik!
              </div>
              <div
                className="mt-4 cursor-pointer rounded-lg border-2 bg-white px-3 py-2 text-center text-lg font-bold tracking-wide text-primary transition-all hover:border-white hover:bg-primary hover:text-white"
                onClick={() => {
                  navigate("/all-kelas");
                }}
              >
                IKUTI KELAS
              </div>
            </div>
          </div>
        </div>

        {/* Start Kategori Belajar Section */}
        <div className="flex flex-col gap-5 bg-secondary px-4 lg:px-28 md:px-20 py-12">
          <div className="flex items-center">
            <div className="text-2xl font-semibold">Kategori Belajar</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 text-center">
            {storeCategories == null ? (
              <CardKategorySkeleton />
            ) : (
              storeCategories.map((value) => (
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
        <div className="flex flex-col gap-8 px-2 lg:px-28 md:px-20 py-12">
          <div className="flex items-center justify-between">
            <div className="text-xl lg:text:2xl md:text-2xl font-semibold">Kursus Pembelajaran</div>
            <div
              className="cursor-pointer text-lg font-semibold text-primary"
              onClick={toggleShowAllCourses}
            >
              {showAllCourses ? "Lebih Sedikit" : "Lihat Semua"}
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Menampilkan tombol "All" */}
            <div
              className={`cursor-pointer rounded-xl px-5 py-1 text-base font-semibold transition-all ${
                selectedCategory === "All"
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-primary hover:text-white"
              }`}
              onClick={() => handleCategoryFilter("All")}
            >
              All
            </div>

            {/* Menampilkan button filter kategori yang dimuat */}
            {storeCategories === null ? (
              <CardCourseSkeleton />
            ) : (
              storeCategories.map((value) => (
                <div
                  key={value.id}
                  className={`cursor-pointer rounded-xl px-5 py-1 text-base font-semibold transition-all ${
                    selectedCategory === value.categoryName
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleCategoryFilter(value.categoryName)}
                >
                  {value.categoryName}
                </div>
              ))
            )}
          </div>

          {/* Container Card Kelas */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {showAllCourses ? (
              storeCourses.filter(
                (value) =>
                  selectedCategory === "All" ||
                  value.category.categoryName === selectedCategory,
              ).length > 0 ? (
                storeCourses
                  .filter(
                    (value) =>
                      selectedCategory === "All" ||
                      value.category.categoryName === selectedCategory,
                  )
                  .map((value) => (
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
                      courseId={value.id}
                      isPremium={value.isPremium}
                    />
                  ))
              ) : (
                <p className="col-span-3 py-10 text-center text-lg italic text-slate-500">
                  - Course Belum Tersedia -
                </p>
              )
            ) : storeCourses
                .filter(
                  (value) =>
                    selectedCategory === "All" ||
                    value.category.categoryName === selectedCategory,
                )
                .slice(0, 3).length > 0 ? ( // Display the first 3 courses
              storeCourses
                .filter(
                  (value) =>
                    selectedCategory === "All" ||
                    value.category.categoryName === selectedCategory,
                )
                .slice(0, 3) // Display the first 3 courses
                .map((value) => (
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
                    courseId={value.id}
                    isPremium={value.isPremium}
                  />
                ))
            ) : (
              <p className="col-span-3 py-10 text-center text-lg italic text-slate-500">
                - Course Belum Tersedia -
              </p>
            )}
          </div>
        </div>
        {/* End Kursus Populer */}
      </div>
      <Footer />
    </>
  );
};
