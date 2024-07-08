import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Adminnav from "../components/Adminnav";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import {useQuery} from '@tanstack/react-query'

function BookUpload() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [num, setNum] = useState(0);
  const [cat, setCat] = useState("Entertainment");
  const [imagerror, setImagerror] = useState(null);
  const [files, setFiles] = useState(undefined);
  const [loading, setloading] = useState(false);
 
  const f = new FormData()
  f.append('file',files)
  f.append('name',name)
  f.append('description',desc)
  f.append('category',cat)
  f.append('quantity',num)

  
  const c = document.cookie.split(';')
  const c1 = c[1].split('=')[1]
  const add = async () => {
    setloading(true)
    try {
      const data = await axios.post("https://lms-backend-zjpz.onrender.com/addbook",f,{
        headers:{
          "Authorization":c1
        }
      })
      console.log(data)
      toast.success(data.data.message)
      setloading(false)
      
    } catch (err) {
      console.log(err)
      toast.error("something went wrong")
      setloading(false)
    }
  };
  return (
    <>
      <Adminnav />
      <div
        className="w-10/12 max-w-md flex flex-col mx-auto my-8"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="text-center font-bold text-4xl my-4">Add book</h1>

        <div
          className="w-full p-5 flex flex-col gap-5 rounded-md bg-red-50"
          style={{ border: "1px solid black" }}
        >
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Book name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <select
            className="select select-bordered w-full"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value={"Entertainment"}>Entertainment</option>
            <option value={"Educational"}>Educational</option>
            <option value={"Inspirational"}>Inspirational</option>
            <option value={"Novel"}>Novel</option>
            <option value={"Comics"}>Comics</option>
          </select>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Book description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="Number"
              className="grow"
              placeholder="Quantity"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </label>
          <div
            className="p-3 flex flex-col items-center rounded-md bg-red-100"
            style={{ border: "1px solid black" }}
          >
            <h1 className="text-center mb-2 text-lg font-semibold">
              Upload book image
            </h1>
            <input
              type="file"
              name="file"
              className="file-input file-input-bordered w-full"
              onChange={(e) => setFiles(e.target.files[0])}
            />
            
            
          </div>
          <button className="btn my-3 bg-red-300" onClick={add} disabled={loading}>{loading?"Adding..":"Add"}</button>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default BookUpload;
