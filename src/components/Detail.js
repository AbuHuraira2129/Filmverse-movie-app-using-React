import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Firebase/Firebase";

const Detail = () => {

    const {id} = useParams();
    const [data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: ""
    });

    useEffect(() => {
      async function getData() {
        // setLoading(true);
        const _doc = doc(db, "movies", id);
        const _data = await getDoc(_doc);
        setData(_data.data());

        
        // setLoading(false);
      }
      getData();
    }, []);
    
  return (
    <div>
      <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center">
        <img
          className="h-96 block md:sticky top-6"
          src={data.image}
          alt=""
        />
        <div className="ml-4 w-full md:w-1/2 pt-6 md:pt-0 ">
          <h1 className="text-3xl">
            {data.title} <span className="text-xl text-gray-400">({data.year})</span>
          </h1>
          <ReactStars value={5} size={28} edit={false} />
          <p className="mt-3 leading-6">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
