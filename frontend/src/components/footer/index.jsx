import TeamItem from "../TeamItem";
import Modal from "../Modal";
import SFooter from "./style";
import datateams from "../../assets/datateam";

function Footer() {
  return (
    <SFooter>
      <ul>
        <Modal button="Mentions légales">
        <p className="ml">
          <h1>Mentions Légales</h1>
          <p>
            Identité du site: ChangeYourWorld.com Addresse :
            https://changeyourworld.com Propriétaire : WildCodeSchool
            Responsible for publication : Wild Corp Conception and realization :
            Wilders Hosting : Github Email: greenworld@gmail.com
            <h4>CONDITIONS D’UTILISATION </h4>
            L’utilisation du présent site implique l’acceptation pleine et
            entière des conditions générales d’utilisation décrites ci-après.
            Ces conditions d’utilisation sont susceptibles d’être modifiées ou
            complétées à tout moment. INFORMATIONS Les informations et documents
            du site sont présentés à titre indicatif, sans de caractère
            exhaustif, et ne peuvent engager la responsabilité du propriétaire
            du site. Le propriétaire du site ne peut être tenu responsable des
            dommages directs et indirects consécutifs à l’accès au site.
            INTERACTIVITÉ Les utilisateurs du site peuvent y déposer du contenu,
            apparaissant sur le site dans des espaces dédiés (notamment via les
            commentaires). Le contenu déposé reste sous la responsabilité de
            leurs auteurs, qui en assument pleinement l’entière responsabilité
            juridique. Le propriétaire du site se réserve néanmoins le droit de
            retirer sans préavis et sans justification tout contenu déposé par
            les utilisateurs qui ne satisferait pas à la charte déontologique du
            site ou à la législation en vigueur.
            <h4>PROPRIÉTÉ INTELLECTUELLE</h4>
            Sauf mention contraire, tous les éléments accessibles sur le site
            (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
            restent la propriété exclusive de leurs auteurs, en ce qui concerne
            les droits de propriété intellectuelle ou les droits d’usage. Toute
            reproduction, représentation, modification, publication, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable
            de l’auteur.Toute exploitation non autorisée du site ou de l’un
            quelconque des éléments qu’il contient est considérée comme
            constitutive d’une contrefaçon et passible de poursuites. Les
            marques et logos reproduits sur le site sont déposés par les
            sociétés qui en sont propriétaires.
            <h4>LIENS</h4>
            Liens sortants Le propriétaire du site décline toute responsabilité
            et n’est pas engagé par le référencement via des liens hypertextes,
            de ressources tierces présentes sur le réseau Internet, tant en ce
            qui concerne leur contenu que leur pertinence.
          </p>
        </p>
      </Modal>
      <Modal button="Contact">
        <p className="contact">Nous contacter</p>
      </Modal>
      <Modal button="Team">
        <h2>Team</h2>
        <p className="team">
          {datateams.map((datateam) => (
            <TeamItem
              key={datateam.name}
              name={datateam.name}
              picture={datateam.picture}
              title={datateam.title}
              link={datateam.link}
            />
          ))}
        </p>
      </Modal>
      </ul>
    </SFooter>
  );
}
export default Footer;
