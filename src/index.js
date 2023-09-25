import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: (
        <a href="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/">
          Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade
          Batteries Coming
        </a>
      ),
      writer: "By: Steve Hanley"
    },
    {
      id: 2,
      name: (
        <a href="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares">
          Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60
          billones de dólares
        </a>
      ),
      writer: "By: Milenio Digital"
    },
    {
      id: 3,
      name: (
        <a href="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/">
          Tesla recall for heater and defroster systems issued by Transport
          Canada
        </a>
      ),
      writer: "By: Maria Merano"
    },
    {
      id: 4,
      name: (
        <a href="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/">
          China representó la mitad de las ventas globales de coches eléctricos
          en 2021
        </a>
      ),
      writer: "By: Newsroom Infobae"
    }
  ]);

  const handleDelete = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  return (
    <div className="App">
      <NewsInfo newsTitle="My News Feed" />
      <WorkExperience>
        {articles.map((article) => (
          <Article
            key={article.id}
            name={article.name}
            writer={article.writer}
            onDelete={() => handleDelete(article.id)}
          />
        ))}
      </WorkExperience>
    </div>
  );
}

function NewsInfo(Props) {
  return (
    <div className="profile-container">
      <div className="profile">
        <p>{Props.newsTitle}</p>
        <p className="profile-tagline">{Props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Article(props) {
  return (
    <li className="article">
      <h2 className="work-title">
        <Project image="https://placehold.co/600x400" description="" />
        <div className="newsArticle">
          <button className="delete-button" onClick={props.onDelete}>
            X
          </button>
          <span className="company">{props.name}</span>
          <span className="writer">{props.writer}</span>
        </div>
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </li>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=Project";
  } else {
    image = props.image;
  }

  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
