import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { moviesRef } from "../Firebase/Firebase";
import swal from "sweetalert";

const AddMovie = () => {

  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const addnewMovie = async () => {
    setLoading(true);
    await addDoc(moviesRef, form);
    swal({
      title: "Successfully Added!",
      icon: "success",
      timer: 3000,
    });
    setLoading(false);
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-5xl text-white font-bold">
              Add Movie in Website
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="MovieTitle"
                    className="leading-7 text-sm text-white"
                  >
                    Movie Title
                  </label>
                  <input
                    type="text"
                    id="MovieTitle"
                    name="MovieTitle"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="Year"
                    className="leading-7 text-sm text-white"
                  >
                    Year of Release
                  </label>
                  <input
                    type="text"
                    id="Year"
                    name="Year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="image"
                    className="leading-7 text-sm text-white"
                  >
                    Poster Image Link
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="description"
                    className="leading-7 text-sm text-white"
                  >
                    Movie Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    spellcheck="false"
                    data-ms-editor="true"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={addnewMovie}
                  className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  {loading ? (
                    <TailSpin height={25} color="white" />
                  ) : (
                    "Add Movie"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
