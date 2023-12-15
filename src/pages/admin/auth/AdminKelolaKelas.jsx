import React, { useState } from "react";

// Material Tailwind Components
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";

// Components
import { AdminNavbar } from "../../../assets/components/admin/adminNavbar";
import { AdminPojok } from "../../../assets/components/admin/AdminPojok";

// Icons
import { LuUsers2 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

export const AdminKelolaKelas = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(!dialogOpen);

  const TABLE_HEAD = [
    "Kode Kelas",
    "Kategori",
    "Nama Kelas",
    "Tipe Kelas",
    "Level",
    "Harga Kelas",
    "Aksi",
  ];

  const TABLE_ROWS = [
    {
      kode: "UIUX0123",
      kategori: "UI/UX Design",
      kelas: "Belajar Web Designer dengan Figma",
      tipe: "GRATIS",
      level: "Beginner",
      harga: "Rp 0",
      aksi: "",
    },
    {
      kode: "DS0233",
      kategori: "Data Science",
      kelas: "Data Cleaning untuk pemula",
      tipe: "GRATIS",
      level: "Beginner",
      harga: "Rp 0",
      aksi: "",
    },
    {
      kode: "DS0323",
      kategori: "Data Science",
      kelas: "Data Cleaning untuk pemula",
      tipe: "PREMIUM",
      level: "Advanced",
      harga: "Rp 199,000",
      aksi: "",
    },
    {
      kode: "PM0123",
      kategori: "Product Management",
      kelas: "Scrum dalam tim kompleks",
      tipe: "PREMIUM",
      level: "Intermediate",
      harga: "Rp 299,000",
      aksi: "",
    },
    {
      kode: "PM0223",
      kategori: "Product Management",
      kelas: "Scrum dalam tim kompleks",
      tipe: "PREMIUM",
      level: "Advanced",
      harga: "Rp 349,000",
      aksi: "",
    },
  ];
  return (
    <>
      <AdminNavbar />
      <AdminPojok />
      {/* Button */}
      <div className="fixed right-0 top-6 flex w-[85%] justify-center gap-28 py-32">
        <div className="flex max-w-[300px] flex-1 items-center gap-2 rounded-xl bg-blue-400 px-4 py-6">
          <div className="rounded-full bg-white p-2 text-3xl font-semibold text-primary">
            <LuUsers2 />
          </div>
          <div className="px-4 text-lg text-white">
            <h1>450</h1>
            <h1>Active Users</h1>
          </div>
        </div>
        <div className="flex max-w-[300px] flex-1 items-center gap-2 rounded-xl bg-green px-4 py-6">
          <div className="rounded-full bg-white p-2 text-3xl font-semibold text-primary">
            <LuUsers2 />
          </div>
          <div className="px-4 text-lg text-white">
            <h1>25</h1>
            <h1>Active Class</h1>
          </div>
        </div>
        <div className="flex max-w-[300px] flex-1 items-center gap-2 rounded-xl bg-primary px-4 py-6">
          <div className="rounded-full bg-white p-2 text-3xl font-semibold text-primary">
            <LuUsers2 />
          </div>
          <div className="px-4 text-lg text-white">
            <h1>20</h1>
            <h1>Premium Class</h1>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="fixed right-0 top-40 flex w-[85%] justify-between px-10 py-32">
        <div className="flex w-full items-center justify-between rounded-xl px-12 py-4">
          <div className="text-xl font-bold">Kelola Kelas</div>
          <div className="flex items-center gap-4 font-semibold text-primary">
            <div
              className="flex cursor-pointer gap-1 rounded-3xl bg-primary px-2 py-1 text-white"
              onClick={handleDialogOpen}
            >
              <CiCirclePlus size={25} />
              <button> Tambah </button>
            </div>
            <div className="flex cursor-pointer rounded-3xl border-2 border-primary px-2">
              <CiFilter size={30} />
              <button> Filter </button>
            </div>
            <FaSearch size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="absolute right-20 top-[22.5rem] w-[75%] px-4">
        <Card className="h-full w-full">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="bg-secondary p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { kode, kategori, kelas, tipe, level, harga, aksi },
                  index,
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-40" : "p-40";
                  const tipeColor =
                    tipe === "GRATIS" ? "text-green" : "text-primary";

                  return (
                    <tr className={classes}>
                      <td className="py-6">
                        <Typography variant="small" color="blue-gray">
                          {kode}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {kategori}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {kelas}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className={`font-bold ${tipeColor}`}
                        >
                          {tipe}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {level}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {harga}
                        </Typography>
                      </td>
                      <td className="flex gap-4 py-4">
                        <Typography className="cursor-pointer rounded-3xl bg-primary px-2 py-2 text-white">
                          Ubah
                        </Typography>
                        <Typography className="cursor-pointer rounded-3xl bg-red-500 px-2 py-2 text-white">
                          Hapus
                        </Typography>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} handler={handleDialogOpen}>
        <DialogHeader className="flex flex-col">
          <div className="relative flex text-primary">
            <h1 className="font-semibold">Tambah Kelas</h1>
            <IoCloseSharp
              size={30}
              className="absolute inset-x-80 cursor-pointer"
              onClick={handleDialogOpen}
            />
          </div>
        </DialogHeader>
        <DialogBody className="flex space-x-6 px-10 py-10 ">
          {/* Left Column */}
          <div className="flex-1 space-y-2 ">
            <div className="flex flex-col ">
              <span className="text-black ">Nama Kelas</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black">Kategori</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black">Kode Kelas</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black">Tipe Kelas</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col">
              <span className="text-black">Level</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black">Harga</span>
              <input
                placeholder="Text"
                className="flex rounded-xl border px-4 py-2 border-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black">Materi</span>
              <input
                placeholder="Paragraph"
                className="flex rounded-xl border px-4 py-2 h-[8rem] border-primary"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center gap-4">
          <div className="flex cursor-pointer rounded-full bg-red-500 px-10 py-2 transition-all hover:bg-red-600">
            <button className="flex font-semibold text-white">
              Upload Video
            </button>
          </div>
          <div className="flex cursor-pointer rounded-full bg-primary px-10 py-2 transition-all hover:bg-primary-hover">
            <button className="flex font-semibold text-white">Simpan</button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
};
