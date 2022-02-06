import PacmanLoader from 'react-spinners/PacmanLoader';
import 'style.css';

export default function Loader() {
  return (
    <div className="loader">
      <PacmanLoader color="#3f51b5" />;
    </div>
  );
}
