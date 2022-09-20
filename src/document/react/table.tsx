import React from "react";
import event from "../../component/event";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Tables() {
  const navigate = useNavigate();
  const tailwindLocation = () => {
    navigate("/tailwind");
  };
  return (
    <div className="w-screen flex flex-col gap-4 items-center justify-center bg-black bg-fixed overflow-y-scroll pb-10">
      <label className="text-5xl font-mono text-white pt-5">
        Table template
      </label>
      <button
        onClick={tailwindLocation}
        className="p-2 w-96 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:ring-0 hover:text-gray-100"
      >
        Tailwind template
      </button>

      <div className="flex flex-col items-center justify-center gap-10 w-full px-20">
        {/* Auto1 */}
        <div className="flex flex-col">
          <label className="text-white font-mono text-lg">Auto table 1</label>
          <table className="table-auto w-full">
            <thead>
              <tr className=" bg-gradient-to-r from-red-500 to-green-700 text-white font-mono mt-3">
                <th className="px-6 text-start"></th>
                <th className="px-6 text-start">Title</th>
                <th className="px-6 text-start">Start date</th>
                <th className="px-6 text-start">End date</th>
              </tr>
            </thead>
            <tbody>
              {event
                ? event.map((item: any, i: number) => (
                    <tr className=" text-base font-mono text-white">
                      <td className="px-6 border-b-2">{i + 1}</td>
                      <td className="px-6 border-b-2">{item.title}</td>
                      <td className="px-6 border-b-2">
                        {moment.utc(item.start).format("DD-MM-YYYY HH:mm:ss")}
                      </td>
                      <td className="px-6 border-b-2">
                        {moment.utc(item.end).format("DD-MM-YYYY HH:mm:ss")}
                      </td>
                    </tr>
                  ))
                : undefined}
            </tbody>
          </table>
        </div>

        {/* Auto2 */}
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-[#DFE3BC]/40 text-white">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1 ">
                <h3 className="font-mono text-lg text-white">Auto table 2</h3>
              </div>
            </div>
          </div>
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="">
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-[#739187] text-[#FFFFFF] border-[#739187]/70"></th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-[#739187] text-[#FFFFFF] border-[#739187]/70">
                  Title
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-[#739187] text-[#FFFFFF] border-[#739187]/70">
                  Start date
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-[#739187] text-[#FFFFFF] border-[#739187]/70">
                  End date
                </th>
              </tr>
            </thead>
            <tbody>
              {event
                ? event.map((item: any, i: number) => (
                    <tr className=" text-base font-mono text-[#A1A1A1]">
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-3">
                        {i + 1}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-3">
                        {item.title}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-3">
                        {moment.utc(item.start).format("DD-MM-YYYY")}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-3">
                        {moment.utc(item.end).format("DD-MM-YYYY")}
                      </td>
                    </tr>
                  ))
                : undefined}
            </tbody>
          </table>
        </div>

        {/* Auto3 */}
        <section className="container font-mono px-10 ">
          <label className="text-white font-mono text-lg px-5">
            Auto table 3
          </label>
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full ">
              <table className="w-full font-mono">
                <thead className=" text-lg  text-center text-gray-800 bg-[#B3BBA5] dark:bg-[#059669] w-full ">
                  <tr className="flex items-center w-full">
                    <th className=" w-24 "> </th>
                    <th className=" w-3/5 ">Title </th>
                    <th className=" w-2/5 ">Start date </th>
                    <th className=" w-2/5 ">End date</th>
                  </tr>
                </thead>
                <tbody className="bg-white flex flex-col items-center justify-between overflow-y-scroll w-full h-36">
                  {!event
                    ? null
                    : event.map((item: any, i: number) => (
                        <tr className="text-gray-700 flex w-full  ">
                          <td className="text-center px-5 w-24 sticky text-base font-mono border">
                            {i + 1}
                          </td>
                          <td className="text-start px-5 w-3/5 sticky text-base font-mono border">
                            {item.title}
                          </td>
                          <td className="text-center px-5 w-2/5 sticky text-base font-mono border">
                            {moment
                              .utc(item.start)
                              .format("DD-MM-YYYY HH:mm:ss")}
                          </td>
                          <td className="text-center px-5 w-2/5 sticky text-base font-mono border">
                            {moment.utc(item.end).format("DD-MM-YYYY HH:mm:ss")}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Auto4 */}
      </div>
    </div>
  );
}

export default Tables;
