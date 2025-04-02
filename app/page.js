"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import dayjs from "dayjs"
export default function Home() {
  const [seconds, setSeconds] = useState(3800)
  const [isRunning, setRunning] = useState(false)
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (isRunning == true)
      setTimeout(() => {
        setSeconds(seconds + 1)
      }, 1000); // milliseconds

  }, [seconds, isRunning])

  function handleStart() {
    setSeconds(seconds + 1)
    setRunning(true)
  }

  function handlePause() {
    setRunning(false)
  }

  // [{ sc: "00:00", saveTime: "dd/mm/yyyy 00:00 am" }]

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const showSecond = seconds % 60

  const hourString = hours ? (hours < 10 ? `0${hours}` : hours) + ":" : ""
  const minuteString = (hours || minutes) ? ((minutes < 10 ? `0${minutes}` : minutes) + ":") : ""
  const secondString = showSecond < 10 ? `0${showSecond}` : showSecond

  function handleSave() {
    const now = new Date()
    let newHistory = [...history, {
      sec: `${hourString}${minuteString}${secondString}`,
      saveTime: dayjs().format("DD MMMM YYYY H:mm:ss a")
      // saveTime: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    }]
    setHistory(newHistory)
    handlePause()
  }

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 w-full bg-black text-white  flex justify-between">Menu
        <Link href="/dang-nhap">Login</Link>
      </div>
      <div className="text-7xl py-10 font-bold">
        {hourString}
        {minuteString}
        {secondString}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleStart} className="rounded-lg px-10 py-2 bg-red-500">Start</button>
        <button onClick={handlePause} className="rounded-lg px-10 py-2 bg-blue-500">Pause</button>
        <button className="rounded-lg px-10 py-2 bg-green-500">Reset</button>
        <button onClick={handleSave} className="rounded-lg px-10 py-2 bg-pink-500">Save</button>
      </div>
      <div className="mt-10 bg-yellow-50 w-3/5 p-6">
        History
        {history.map(() => {
          return
        })}
        {history.map((his, index) => {
          return <div key={index} className="flex gap-3">
            <span> {his.sec}</span>
            <span>{his.saveTime}</span>
          </div>
        })}
      </div>
    </div>
  );
}
