import { Link } from "react-router-dom";
import SLinks from "./style";

function Links() {
  return (
    <SLinks>
      <hr />
      <div className="buttondiv">
        <Link to="/mycity">
          <button type="button" className="but">
            Qualité de l&apos;air
          </button>
        </Link>

        <Link to="/Articles">
          <button type="button" className="but">
            Articles
          </button>
        </Link>

        <Link to="/association">
          <button type="button" className="but">
            Associations de France
          </button>
        </Link>

        <a href="https://planete-urgence.org/planter-un-arbre/">
          <button type="button" className="but">
            Faire un don
          </button>
        </a>
      </div>
      <hr />
    </SLinks>
  );
}
export default Links;
