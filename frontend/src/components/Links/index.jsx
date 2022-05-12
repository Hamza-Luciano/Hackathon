import { Link } from "react-router-dom";
import SLinks from "./style";

function Links() {
  return (
    <SLinks>
      <div className="buttondiv">
        <Link to="/Transports">
          <button type="button" className="but">
            Transports alternatifs
          </button>
        </Link>

        <Link to="/Articles">
          <button type="button" className="but">
            Articles
          </button>
        </Link>

        <Link to="/Associations">
          <button type="button" className="but">
            Associations de France
          </button>
        </Link>

        <Link to="https://planete-urgence.org/planter-un-arbre/">
          <button type="button" className="but">
            Faite un don
          </button>
        </Link>
      </div>
    </SLinks>
  );
}
export default Links;
