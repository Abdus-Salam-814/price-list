import { useEffect, useState } from "react";
// import Phone from "./Phone";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Phone from "./Phone";
import { BeatLoader, BounceLoader, ClipLoader } from "react-spinners";
const Axios = () => {
  const [phones, setPhone] = useState([]);
  const [loding, setLoding] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

    // .then(res => res.json())
    // .then(data => setPhone(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;

        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]) || 0,
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setPhone(phoneWithFakeData);
        setLoding(false)
      });
  }, []);
  return (
    <div className="my-7">
      <h1>Phone Length {phones.length} </h1>

      <Phone phone={phones}></Phone>
  
      {
        loding &&  <BeatLoader/>
      }
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={phones}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" label={{ position: "top" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Axios;
