import React from "react";

// Material Tailwind Components
import { Card, Typography } from "@material-tailwind/react";

// Components
import { AdminNavbar } from "../../assets/components/admin/adminNavbar";
import { AdminPojok } from "../../assets/components/admin/AdminPojok";

// Icons
import { LuUsers2 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export const AdminDashboard = () => {
  const TABLE_HEAD = [
    "ID",
    "Kategori",
    "Kelas Premium",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar",
  ];

  const TABLE_ROWS = [
    {
      nama: "Johndoe123",
      kategori: "UI/UX Design",
      kelas: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      metode: "Credit Card",
      tanggal: "21 Sep, 2023 at 2.00 AM",
    },
    {
      nama: "Johndoe123",
      kategori: "UI/UX Design",
      kelas: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metode: "-",
      tanggal: "-",
    },
    {
      nama: "Ironman99",
      kategori: "Web Development",
      kelas: "CSS dan HTML dalam seminggu",
      status: "SUDAH BAYAR",
      metode: "Credit Card",
      tanggal: "20 Sep, 2023 at 2:00 AM",
    },
    {
      nama: "lokiMaster",
      kategori: "Data Science",
      kelas: "Data Cleaning untuk pemula",
      status: "SUDAH BAYAR",
      metode: "Credit Card",
      tanggal: "19 Sep, 2023 at 2:00 AM",
    },
    {
      nama: "siapaAjaani",
      kategori: "Data Science",
      kelas: "Data Cleaning untuk pemula",
      status: "BELUM BAYAR",
      metode: "-",
      tanggal: "-",
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

      {/* Table */}
      <div className="fixed right-0 top-40 flex w-[85%] justify-between px-10 py-32">
        <div className="flex w-full items-center justify-between rounded-xl px-12 py-4">
          <div className="text-xl font-bold">Status Pembayaran</div>
          <div className="flex items-center gap-4 font-semibold text-primary">
            <div className="flex cursor-pointer rounded-3xl border-2 border-primary px-2">
              <CiFilter size={30} />
              <button> Filter </button>
            </div>
            <FaSearch size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="absolute top-[22.5rem] right-20 w-[75%] px-4">
        <Card className="h-full w-full">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="bg-secondary p-4 text-center"
                  >
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
                ({ nama, kategori, kelas, status, metode, tanggal }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-40"
                    : "p-40";
                    const statusColor = status === "SUDAH BAYAR" ? "text-green" : "text-red-500";

                  return (
                    <tr className={classes}>
                      <td className="py-6"> 
                        <Typography variant="small" color="blue-gray">
                          {nama}
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
                        <Typography variant="small" color="blue-gray" className={`font-bold ${statusColor}`}>
                          {status}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {metode}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray">
                          {tanggal}
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
    </>
  );
};
