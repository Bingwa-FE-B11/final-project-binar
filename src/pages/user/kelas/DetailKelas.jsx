import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";
import { CardDetail } from "../../../assets/components/cards/CardDetail";
import { showErrorToast, showSuccessToast } from "../../../helper/ToastHelper";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { IoCloseSharp, IoTime } from "react-icons/io5";
import { HiChatAlt2 } from "react-icons/hi";
import { FaCirclePlay } from "react-icons/fa6";
import { TbProgressCheck } from "react-icons/tb";
import { BiSolidLock } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

// Redux
import { postEnrollmentsAction } from "../../../redux/action/enrollments/EnrollmentsAction";
import { getDetailLessonAction } from "../../../redux/action/courses/getDetailLesson";

// Material Tailwind Components
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import LoadingSpinner from "../../../assets/components/loading/loadingSpinner";

export const DetailKelas = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeDetailCourses = useSelector((state) => state.dataCourses.detail);
  const storeEnrollments = useSelector((state) => state.enrollments.course);
  const storeLesson = useSelector((state) => state.dataCourses.me);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentCourseId, setPaymentCourseId] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoading = useSelector((state) => state.dataCourses.loading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDetail = () => {
    handleDialogOpen();
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setPaymentCourseId(storeDetailCourses?.id);
    setDialogOpen(true);
  };

  const handleEnrollCourse = async () => {
    try {
      if (storeAuthUser.token !== null) {
        const isPremium = storeDetailCourses?.isPremium;

        if (isPremium) {
          navigate(`/pembayaran/${paymentCourseId}`);
        }

        if (!isPremium) {
          await dispatch(postEnrollmentsAction(paymentCourseId));
          showSuccessToast("Berhasil Enrollments Course");
          navigate("/kelas-saya");
        }
      }

      if (storeAuthUser.token === null) {
        showErrorToast("Anda harus login terlebih dahulu");
      }
    } catch (err) {
      console.error("Error during enrollment:", err);
      showErrorToast("Pendaftaran gagal. Silakan coba lagi.");
    }
  };

  //   useEffect(() => {
  //     // Periksa apakah pengguna telah login
  //     if (storeAuthUser.token) {
  //       setIsLoggedIn(true);

  //       // Periksa apakah pengguna telah enroll ke kelas
  //       const courseId = storeDetailCourses?.id;
  //       if (courseId && storeEnrollments) {
  //         const isUserEnrolled = storeEnrollments.some(enrollment => enrollment.courseId === courseId);
  //         setIsEnrolled(isUserEnrolled);
  //         dispatch(getDetailLessonAction())
  //       }
  //     }
  //   }, [storeAuthUser, storeDetailCourses, storeEnrollments, getDetailLessonAction]);

  // console.log("storeLesson", storeLesson)
  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}

      {/* Parent Container */}
      <div className="z-20 flex min-h-screen px-0 py-6 md:px-4 lg:px-20">
        {/* Left Container */}
        <div className="mt-16 flex w-full flex-col gap-4 px-8 md:w-2/3 lg:w-2/3">
          {/* Button Back */}
          <div className="flex w-full items-center gap-2 py-4">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(window.history.back());
              }}
            >
              <GoArrowLeft size={30} />
            </div>
            <div className="font-semibold">Kelas Lainnya</div>
          </div>

          {/* Container Desc Kelas */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="text-xl font-bold text-primary">
                {storeDetailCourses?.category?.categoryName}
              </div>
              <div className="flex items-center gap-1">
                <div className="text-yellow-700">
                  <FaStar />
                </div>
                <div className="text-lg font-bold">
                  {storeDetailCourses?.averageRating}4.9
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold">
                {storeDetailCourses?.courseName}
              </div>
              <div className="text-lg">{storeDetailCourses?.mentor}</div>
            </div>
            <div className="flex gap-4 md:gap-10 lg:gap-10">
              <div className="flex items-center gap-1">
                <RiShieldStarLine size={20} color="#22c55e" />
                <div className="text-sm font-semibold text-primary">
                  {storeDetailCourses?.level}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <LiaBookSolid size={20} color="#22c55e" />
                <div className="text-sm font-semibold">
                  {storeDetailCourses?.modul}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <IoTime size={20} color="#22c55e" />
                <div className="text-sm font-semibold">
                  {storeDetailCourses?.duration}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-green px-6 py-2 text-white"
            onClick={() => window.open(storeDetailCourses?.forumURL, "_blank")}
          >
            <div className="font-semibold">Join Grup Telegram</div>
            <div>
              <HiChatAlt2 size={20} />
            </div>
          </div>

          {/* Section Detail Kelas */}
          <div className="flex flex-col">
            <div className="my-4 flex h-[20rem] items-center justify-center rounded-2xl bg-slate-300">
              <div className="cursor-pointer text-primary">
                <FaCirclePlay size={60} onClick={handleDialogOpen} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Tentang Kelas */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Tentang Kelas</h1>
                <p className="text-slate-600">
                  {storeDetailCourses?.aboutCourse}
                </p>
              </div>

              {/* Kelas ini ditujukan untuk */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Kelas Ini Ditujukan Untuk</h1>
                <ol className="list-decimal pl-4">
                  <li>{storeDetailCourses?.targetAudience}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="mt-20 hidden w-1/3 flex-col md:flex lg:flex">
          {/* Sidebar */}
          <div className="mt-8 flex flex-col gap-6 rounded-2xl p-6 shadow-lg">
            {/* Materi Belajar */}
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Materi Belajar</h1>
              <div className="flex w-fit items-center justify-between gap-2 rounded-3xl">
                <TbProgressCheck
                  size={30}
                  color="#22c55e"
                  className="hidden md:hidden lg:flex"
                />
                <div className="rounded-3xl bg-primary px-3 py-1 font-bold text-white">
                  50% Completed
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">
                  Chapter 1 - Pendahuluan
                </h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">
                  Chapter 2 - Memulai Design
                </h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} handler={handleDialogOpen} className="py-3">
        <DialogHeader className="relative flex flex-col items-center">
          <IoCloseSharp
            size={30}
            className="absolute right-10 top-5 cursor-pointer text-primary"
            onClick={handleDetail}
          />
          <h1 className="mb-2 font-semibold text-slate-700">
            Selangkah lagi menuju
          </h1>
          <h1 className="font-semibold text-primary">Course Kebanggan Anda</h1>
        </DialogHeader>
        <DialogBody className="px-12">
          {storeDetailCourses === null ? (
            <CardCoursesSkeleton />
          ) : (
            <CardDetail
              image={storeDetailCourses?.courseImg}
              category={storeDetailCourses?.category?.categoryName}
              rating={storeDetailCourses?.averageRating}
              title={storeDetailCourses?.courseName}
              author={storeDetailCourses?.mentor}
              level={storeDetailCourses?.level}
              modul={storeDetailCourses?.modul}
              duration={storeDetailCourses?.duration}
              price={storeDetailCourses?.price}
              isPremium={storeDetailCourses?.isPremium}
            />
          )}
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <div
            className="flex w-64 cursor-pointer items-center justify-center gap-3 rounded-full bg-primary py-2 transition-all hover:bg-primary-hover"
            onClick={handleEnrollCourse}
          >
            <div className="font-semibold text-white">Beli Sekarang</div>
            <FaArrowCircleRight size={17} className="text-white" />
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
};
