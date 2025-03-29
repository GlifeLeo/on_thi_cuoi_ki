"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [seconds, setSeconds] = useState(3800)
  const [isRunning, setRunning] = useState(false)
  const [history, setHistory] = useState([])
  const aa = [{ sc: "00:00", saveTime: "dd/mm/yyyy 00:00 am" }]
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
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const showSecond = seconds % 60

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 w-full bg-black text-white">Menu</div>
      <div className="text-7xl py-10 font-bold">
        {hours ? (hours < 10 ? `0${hours}` : hours) + ":" : ""}
        {hours || minutes ? (hours < 10 ? `0${minutes}` : minutes) + ":" : ""}
        {showSecond < 10 ? `0${showSecond}` : showSecond}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleStart} className="rounded-lg px-10 py-2 bg-red-500">Start</button>
        <button onClick={handlePause} className="rounded-lg px-10 py-2 bg-blue-500">Pause</button>
        <button className="rounded-lg px-10 py-2 bg-green-500">Reset</button>
        <button className="rounded-lg px-10 py-2 bg-pink-500">Save</button>
      </div>
      <div className="mt-10 h-40 bg-yellow-50 w-3/5 p-6">
        History
        {aa.map((his, index) => {
          return <div key={index} className="flex gap-3">
            <span> {his.sc}</span>
            <span>{his.saveTime}</span>
          </div>
        })}
      </div>
    </div>
  );
}
