'use client'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // const [loginInfo, setLoginInfo] = useState({
  //   username: "",
  //   password: "",
  //   error: ""
  // })

  // function changeInput(filed, value) {
  //   setLoginInfo({
  //     ...loginInfo,
  //     [filed]: value
  //   })
  // }
  const router = useRouter()
  function handleLogin(event) {
    event.preventDefault();
    if (!username || !password) return
    let success = false
    let err = ""
    // call api xuong back end. truyen vo username, pw

    // be xu li => 1.  thanh cong | 2. that bai kem theo cai loi
    if (username == "user1" && password == "pw1") {
      // thanh cong
      success = true
    } else {
      //loi
      err = "username or password ko dung"
    }
    // neu thanh cong => di qua trang chu => end
    if (success == true) {
      router.push("/")
    } else {
      setError(err)
    }
    // neu that bai => o yen, hien thong bao loi => end

  }
  return (
    <div className='w-1/3 mx-auto'>
      <h1 className='text-4xl my-10'>
        Login
      </h1>
      <form className='flex flex-col gap-2'>
        <span className='text-red-500'> {error}</span>
        <label>Username</label>
        <input
          placeholder='user1'
          onChange={(event) => {
            setUsername(event.target.value)
            setError("")
          }}
          className='border px-4 py-2 rounded' />
        <label>Password</label>
        <input type="password" onChange={(event) => {
          setPassword(event.target.value)
          setError("")
        }} className='border px-4 py-2 rounded' />


        <button
          onClick={(event) => { handleLogin(event) }}
          // onClick={handleLogin}
          // className={
          //   username && password ?
          //     "border px-4 py-2 rounded w-30 bg-black text-white" :
          //     'border px-4 py-2 rounded w-30 bg-gray-300 text-white'
          // }
          className={`${username && password ? "bg-black" : "bg-gray-300"} border px-4 py-2 rounded w-30 text-white`}
        // className={clsx({
        //   "border px-4 py-2 rounded w-30 text-white": true,
        //   "bg-black": username && password,
        //   "bg-gray-300": !username || !password
        // })}
        >
          Login
        </button>



      </form>
    </div>
  )
}

export default Login