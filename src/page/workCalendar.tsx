import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import event from "../component/event";
import "moment-timezone";
import logo from "../images/PHOBDAWNEUR.png";

// moment.tz("Asia/Bangkok");
const localizer = momentLocalizer(moment);

function WorkCalendar() {
  const [show, setShow] = useState(false);

  // Date start
  const [dateStart, setDateStart] = useState<Date | null>(null);
  const handleDateStartChange = (newDateStart: Date | null) => {
    setDateStart(newDateStart);
  };

  //Date end
  const [dateEnd, setDateEnd] = useState<Date | null>(null);
  const handleDateEndChange = (newDateEnd: Date | null) => {
    setDateEnd(newDateEnd);
  };

  // Convert date start
  const dateStartChange = moment(dateStart).format("YYYY-MM-DD HH:mm:ss");
  // console.log(dateStartChange);

  // Convert date end
  const dateEndChange = moment(dateEnd).format("YYYY-MM-DD HH:mm:ss");
  // console.log(dateEndChange);

  return (
    <div className=" flex flex-col w-screen gap-4 px-5">
      <div className=" flex justify-end items-end pt-10">
        <button
          onClick={() => setShow(true)}
          className=" w-24 h-10 rounded-xl bg-[#F9B301] text-sm font-medium text-black hover:text-white select-none hover:bg-[#feb600]"
        >
          Create
        </button>
      </div>

      {/* MODAL */}
      {show ? (
        <>
          {/* Main modal */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form>
              <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm gap-5">
                <div className="flex flex-col items-center justify-center gap-5 pt-5">
                  <h1 className="text-center text-2xl font-semibold text-gray-600">
                    Work tracking
                  </h1>
                  <div>
                    <label className="block mb-1 text-gray-600 font-semibold">
                      Title
                    </label>
                    <input
                      type="text"
                      className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-64"
                    />
                  </div>
                  <div className="dark:bg-white dark:rounded-xl">
                    {/* Date start */}
                    <label className="block mb-1 text-gray-600 font-semibold">
                      Date start
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label="Start"
                        ampm={false}
                        value={dateStart}
                        onChange={handleDateStartChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    {/* Date start */}
                  </div>

                  <div className="dark:bg-white dark:rounded-xl">
                    {/* Date end */}
                    <label className="block mb-1 text-gray-600 font-semibold">
                      Date end
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label="End"
                        ampm={false}
                        value={dateEnd}
                        onChange={handleDateEndChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    {/* Date end */}
                  </div>
                </div>
                <div className="flex justify-end pt-5">
                  <button
                    onClick={() => setShow(false)}
                    className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    className="focus:outline-none px-4 bg-yellow-500 p-3 ml-3 rounded-lg text-white hover:bg-yellow-400"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div>
        <Calendar
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default WorkCalendar;