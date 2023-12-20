import React, { useEffect } from "react";

// Components
import { AdminNavbar } from "../../assets/components/admin/adminNavbar";
import { AdminPojok } from "../../assets/components/admin/AdminPojok";

// Icons
import { AdminCard } from "../../assets/components/admin/AdminCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDataAction } from "../../redux/action/admin/data/getAllDataAction";
import { FiFilter } from "react-icons/fi";

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.allAdminData);

  const getAdminData = () => {
    dispatch(getAllDataAction());
  };

  useEffect(() => {
    getAdminData();
  }, [dispatch]);

  console.log(
    "🚀 ~ file: AdminDashboard.jsx:15 ~ AdminDashboard ~ adminData:",
    adminData,
  );

  return (
    <div className="flex">
      <div className="w-1/6">
        <AdminPojok />
      </div>
      <div className="flex w-5/6 flex-col">
        <div>
          <AdminNavbar />
        </div>
        {/* Card */}
        <div className="flex w-full justify-between gap-10 px-14 py-10">
          <AdminCard title={"Active Users"} count={adminData.countUser} />
          <AdminCard
            title={"Active Class"}
            count={adminData.allCourse}
            cardColor={"bg-green"}
          />
          <AdminCard
            title={"Premium Class"}
            count={adminData.coursePremium}
            cardColor={"bg-primary"}
          />
        </div>

        {/* Table */}
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto px-4 lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
              <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <h2 className="text-xl font-semibold">Status Pembayaran</h2>
                </div>
                <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                  <div className="flex w-full items-center space-x-3 md:w-auto">
                    <button className="flex h-10 items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 text-primary transition-all hover:bg-primary-hover hover:text-white">
                      <FiFilter size={25} />
                      <span className="font-semibold">Filter</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-md bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Kategori
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Kelas Premium
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Metode Pembayaran
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Tanggal Bayar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-center italic" colSpan={6}>
                        Data tidak ditemukan
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav
                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
