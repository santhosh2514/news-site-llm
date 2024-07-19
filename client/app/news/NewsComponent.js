import { useEffect, useState } from "react";
import styles from "./news.module.css";
import { Spinner } from "react-bootstrap";
import Modal from "../../components/Modal";

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summarizedNews, setSummarizedNews] = useState("");
  const [isLoading, setIsLoading] = useState({
    state: false,
    cardId: null,
  });

  useEffect(() => {
    getNewsList();
  }, []);

  const openModal = () => setIsModalOpen(true);

  const fetchSummarizedNews = async (url) => {
    try {
      const response = await fetch(
        `http://localhost:2356/api/news/summarizeNews?url=${url}`
      );
      const data = await response.json();
      setSummarizedNews(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSummarize = async (url, cardId) => {
    setIsLoading({ state: true, cardId: cardId });
    await fetchSummarizedNews(url, cardId);
    setIsLoading({ state: false, cardId: cardId });
    openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSummarizedNews("");
  };

  const getNewsList = async () => {
    try {
      const response = await fetch(
        "http://localhost:2356/api/news/getNewsList"
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const Card = ({ article, id }) => {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.source}>Source: {article.source.name}</p>
        <p className={styles.author}>Author: {article.author}</p>
        <p className={styles.date}>
          Published At: {new Date(article.publishedAt).toLocaleString()}
        </p>
        <a className={styles.link} href={article.url} target="_blank">
          Read Full News
        </a>
        <button
          className={styles.summaryButton}
          onClick={() => onClickSummarize(article.url, id)}
        >
          {isLoading.state && isLoading.cardId === id ? (
            <Spinner animation="border" role="status">
              {" "}
              Loading...{" "}
            </Spinner>
          ) : (
            "Summarise with AI"
          )}
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Latest News</h2>
        {news.map((item, index) => (
          <Card key={index} article={item} id={`card${index}`} />
        ))}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={summarizedNews}
        />
      </div>
    </div>
  );
};

export default NewsComponent;
