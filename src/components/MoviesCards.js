import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";
import { moviesRef } from "../Firebase/Firebase";
import { getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const MoviesCards = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
      })
      setLoading(false);
    }
    getData();
  },[])

  return (
    <div className="MovieCard">
      <div className="content flex flex-wrap flex-col">
        <h1 className="text-5xl	font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <p>
          Watch anywhere. Cancel anytime. Ready to watch? Just click the Login
          Button.
        </p>
        <button>Get Started</button>
      </div>
      {loading ? (
        <TailSpin height={40} color="white" />
      ) : (
        <div className="cards flex flex-wrap items-center justify-center p-5 mt-2">
          {data.map((e, i) => {
            return (
              <Link to={`/Detail/${e.id}`}>
              <div
                key={i}
                id="card"
                className="p-2 bg-grey bg bg-bl shadow-lg hover:-translate-y-1 cursor-pointer mt-2 transition-all duration-500"
              >
                <img className="h-72" src={e.image} alt="" />
                <div className="textCard p-2">
                  <h3>{e.title}</h3>
                  <ReactStars value={e.rating} size={20} edit={false} />
                  <h6>
                    <span className="text-gray-500">Year:</span> {e.year}
                  </h6>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MoviesCards;
