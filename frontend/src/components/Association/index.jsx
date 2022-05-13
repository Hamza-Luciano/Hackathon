import ImgAsso1 from "../../assets/ImgAsso1.svg";
import ImgAsso2 from "../../assets/ImgAsso2.svg";
import ImgAsso3 from "../../assets/ImgAsso3.svg";

import WWFLogo from "../../assets/WWFLogo.svg";
import agir from "../../assets/agir.png";
import FNH from "../../assets/FNH.png";
import goodplanet from "../../assets/goodplanet.png";
import greenpeace from "../../assets/greenpeace-logo.jpg";
import ifaw from "../../assets/ifaw.jpg";
import logoHIRONDELLE from "../../assets/LogoHIRONDELLE.png";
import zerowaste from "../../assets/zerowaste.png";
import SAssociation from "./style";

export default function Association() {
  return (
    <SAssociation>
      <h1> Donnez pour aider </h1>
      <p>
        L’environnement est une richesse précieuse qu’il convient de préserver
        pour son développement durable. En effet, l’homme tire l’essentiel de
        ses ressources dans la nature. Il exploite l’air, l’eau, le sol, la
        végétation et les animaux qui l’entourent. Malheureusement, ce milieu de
        vie est aujourd’hui menacé par la destruction. Les activités de l’homme
        ont de plus en plus d’impacts sur son milieu de vie et sur sa santé. La
        pollution des sols, de l’air et de l’eau est les conséquences directes
        de la mauvaise exploitation de l’environnement. Entre l’émission des gaz
        à effet de serre, la destruction de la couche d’ozone, la liste est
        exhaustive en ce qui concerne les causes de cette imminente destruction.
        Les conséquences et les risques pour la planète sont énormes. C’est
        pourquoi depuis quelques années déjà, plusieurs associations écologiques
        sont tournées vers un seul objectif : lutter contre la destruction de
        l’environnement et préserver les générations futures. Elles s’engagent à
        protéger ce patrimoine commun. Découvrez notre top des associations
        engagées dans la protection de l’environnement, leurs missions et les
        actions qu’elles mènent pour préserver notre mère Nature.
      </p>
      <img src={ImgAsso2} alt="intro" />
      <h3>
        <a className="title" href="https://www.goodplanet.org/fr/">
          <img src={goodplanet} alt="good planet" className="logo" />
        </a>
      </h3>
      <p>
        Description La fondation Goodplanet a été créée en 2005. Ses objectifs
        sont axés sur la protection de l’environnement. Dans ce sens, elle a
        éveillé la conscience des populations sur les enjeux liés à
        l’environnement et a encouragé les uns et les autres à respecter la
        planète en changeant les modes de vie. Ses actions s’appuient sur une
        série de programmes bien élaborée. De ce fait, la fondation sensibilise
        par l’image, avec des expositions grand public. Elle informe sur
        l’environnement et ses enjeux par le biais de son magazine Goodplanet et
        autre publication. En réalité, Goodplanet éduque au développement
        durable en réalisant des affiches dans les écoles. Elle prend
        l’initiative des projets socio-environnementaux dans les pays du sud.
      </p>
      <a
        className="don"
        href="https://donate.goodplanet.org/donate/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyPcPC7VEPdhhbzLtd9IZVwQclLLiGGYQwNaQMox1OITeHUsctahNyhIncqUci6ajL33Ryo5GMJujT7fD6WnnkyA&utm_source=GPO&utm_medium=web&utm_content=menuhaut&_cv=1"
      >
        Faire un don
      </a>
      <h3>
        <a className="title" href="https://www.fnh.org/">
          <img src={FNH} alt="FNH logo" className="logo" />
        </a>
      </h3>
      <p className="text">
        Pour apporter sa contribution à la préservation de l’environnement, la
        fondation FNH pour la nature et l’homme a été créée en 1990 et reconnue
        d’utilité publique en 1996. C’est une ONG apolitique, et non
        confessionnelle dont les actions convergent vers la construction d’une
        nouvelle forme de société et de culture pour un développement durable et
        harmonieux. Elle a pour but d’assurer l’éducation à l’environnement par
        des stratégies bien précises. Ainsi elle participe à la propagation
        d’information sur l’état écologique de la terre. De même, elle utilise
        des méthodes appropriées visant à conduire à un changement de
        comportements des habitants de la terre pour un développement plus
        durable. Il faut souligner que les actions de la fondation sont
        soutenues par ses partenaires fondateurs.
      </p>
      <a className="don" href="https://dons.fnh.org/home-site">
        {" "}
        Faire un don{" "}
      </a>

      <img src={ImgAsso3} alt="Pollution" />
      <h3>
        <a className="title" href="https://www.agirpourlenvironnement.org/">
          <img src={agir} alt="APE logo" className="logo" />
        </a>
      </h3>

      <p className="text">
        Si plusieurs associations sont déjà tournées vers cette cause,
        l’association Agir pour l’environnement vient compléter la liste. Créée
        en 1997, Agir pour l’environnement a pour mission de mobiliser le public
        à protéger l’environnement en lançant un appel pour une planète saine et
        habitable pour tous. En 2016, l’association française a été reconnue
        selon le code de l’environnement, un titre qui lui permet d’être choisi
        pour prendre part aux débats sur l’environnement. À la date du 31
        décembre 2017, l’association comptait en son sein, 10 545 adhérents.
        Depuis lors, l’association fonctionne sur fond propre et renonce à toute
        aide publique pour assurer son indépendance.
      </p>
      <a
        className="don"
        href="https://soutenir.agirpourlenvironnement.org/b/mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyOFEYKXoBdt24INzmf73qGNl7rqXzNO0A0FqcnAVwAklA%3D%3D&_cv=1"
      >
        Faire un don
      </a>
      <h3>
        <a className="title" href="https://www.zerowastefrance.org/">
          <img src={zerowaste} alt="zero waste logo" className="logo" />
        </a>
      </h3>
      <p className="text">
        Zero weste France est une ONG qui a été fondée en 1997 en France. Sa
        mission est de promouvoir une ville sans déchet et gaspillage des
        ressources. Zero waste France est une association indépendante. Elle
        mène plusieurs actions notamment le festival Zero waste, l’opération «
        Rien de neuf», les dépôts de plaintes contre plusieurs grandes enseignes
        dans le cadre de sa problématique. Ses nombreuses actions médiatiques
        font d’elle un acteur important de la lutte contre l’émission de déchets
        dans la nature pour un développement durable. L’ONG est en relation avec
        Zero Waste Paris avec laquelle elle mène des actions entrant dans le
        cadre de sa vision pour un monde meilleur.
      </p>
      <a
        className="don"
        href="https://donner.zerowastefrance.org/b/mon-don?_ga=2.195840488.55670577.1652366562-651964620.1652366562&cid=1&_cv=1"
      >
        Faire un don
      </a>
      <h3>
        <a className="title" href="https://www.associationhirondelle.fr/">
          <img
            src={logoHIRONDELLE}
            alt="Hirondelle logo"
            className="logo wwf"
          />
        </a>
      </h3>
      <p className="text">
        L’association a été créée en 1995 à Retz Atlantique. Elle intervient
        aussi dans le domaine de l’environnement et regroupe plus de 190
        adhérents. L’association Hirondelle veille à l’éducation à
        l’environnement et au développement durable. Elle incite à la
        connaissance du territoire (répertorier la faune, la flore et assurer la
        veille environnementale). En outre, elle travaille à rendre les citoyens
        écologistes. L’association mène aussi ses actions à travers des
        campagnes de sensibilisation, des formations, et la participation des
        citoyens à des évènements sur le développement durable. Il faut
        également noter que Hirondelle est un centre d’information et d’accueil.
      </p>
      <a
        className="don"
        href="https://www.associationhirondelle.fr/faire-un-don/"
      >
        Faire un don
      </a>
      <img src={ImgAsso1} alt="Animal" />
      <h3>
        <a className="title" href="https://www.wwf.fr/">
          <img src={WWFLogo} alt="wwf logo" className="logo wwf" />
        </a>
      </h3>

      <p className="text">
        Créée en 1961, WWF est la première organisation mondiale et la plus
        grande qui lutte pour la protection de l’environnement. Depuis 1973, le
        but de cette organisation est de travailler à ralentir la destruction de
        l’environnement afin d’offrir aux générations futures une planète saine
        où il fait bon vivre. En outre, ses actions touchent le réchauffement
        climatique. À cet effet, elle mobilise les populations à réduire
        l’émission des gaz à effet de serre. En ce qui concerne la pollution
        chimique, WWF œuvre à remplacer les produits chimiques les plus toxiques
        par des alternatives qui pourraient préserver l’environnement et la
        santé humaine. Aussi elle vise à régulariser le climat des forêts. Il
        est donc important de les préserver des feux de brousse.
      </p>
      <a
        className="don"
        href="https://faireundon.wwf.fr/don/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNed87qdfDPF%2B3XnHxbBuio6P%2B87BK5UgPBjhANsxPKWzasnF4R4IjJH7ALzd%2B1l4O%2FIsm%2F0n9JQgx%2BkBekp9Hmn1GDBsuGXs5WTF4s3T4oD9szUsypdqY83tgoViVQIJQ%3D&utm_source=SiteWWF&utm_medium=Homepage&utm_content=CTAHeader&_ga=2.215543063.100591217.1652355108-335257180.1652355108&_cv=1"
      >
        Faire un don
      </a>

      <h3>
        <a className="title" href="https://www.ifaw.org/fr">
          <img src={ifaw} alt="IFAW" className="logo logo2" />
        </a>
      </h3>
      <p className="text">
        Cette ONG a été créée en 1969 au Canada. Elle œuvre pour la protection
        des animaux et reste l’une des plus importantes organisations de
        protection animale au monde. Toutefois, son but spécifique est
        d’enrailler la chasse à des fins commerciales du phoque, du Groenland et
        aussi du phoque capuchon au large de la côte orientale canadienne. Par
        ailleurs, les actions de l’ONG donnent des résultats d’autant plus qu’en
        2009, l’Union européenne a interdit le commerce de tous les dérivés du
        phoque. Les campagnes internationales qu’organise le fonds international
        pour la protection des animaux sont axées sur plusieurs secteurs. Il
        s’agit de l’aide d’urgence aux animaux en détresse, la protection des
        éléphants, des baleines, la lutte contre le braconnage, entre autres.
      </p>
      <a
        className="don"
        href="https://secure.ifaw.org/france/donner-pour-aider?ms=FONDF220001058&cid=7013k000001C7ZM"
      >
        Faire un don
      </a>
      <h3>
        <a className="title" href="https://www.greenpeace.fr/">
          <img src={greenpeace} alt="GreenPeace" className="logo logo2" />
        </a>
      </h3>
      <p className="text">
        Le réseau Greenpeace est un réseau d’organisations indépendantes. Créé
        en 1971, il a pour mission la protection de l’écosystème et la promotion
        de la paix. Son mode de fonctionnement est basé sur le mouvement citoyen
        pour la construction d’un monde durable et équitable. Il travaille
        notamment avec les gouvernements qu’il responsabilise pour agir sur la
        destruction de l’environnement, les inégalités et les conflits. Le
        réseau Greenpeace est une ONG d’envergure internationale qui est
        présente dans plus de 55 pays à travers le monde. Les campagnes de l’ONG
        privilégient le pouvoir citoyen pour encourager ceux et celles qui
        épousent leurs idées. De plus, à juste titre, Greenpeace amène les gens
        à croire en un lendemain meilleur et les incite à mener des actions
        allant dans ce sens.
      </p>
      <a
        href="https://faire-un-don.greenpeace.fr/?codespec=NYYFD"
        className="don"
      >
        Faire un don
      </a>
    </SAssociation>
  );
}
