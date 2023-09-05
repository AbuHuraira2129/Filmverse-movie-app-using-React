import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5 flex flex-wrap justify-between items-center">
      <Link to={'/Filmverse-movie-app-using-React'}><h1 className="text-white font-bold ">
        <span className="text-red-600">Film</span>Verse
      </h1></Link>
      <Link to={'/addmovie'}>
        <button className="hover:bg-red-600">
          <AddIcon className="mr-2" />
          Add Movie
        </button>
      </Link>
    </header>
  );
};

export default Header;
