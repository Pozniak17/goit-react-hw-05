import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      Not Found Page! Go <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
