"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { news } from "../types";
import Article from "../components/Article";

const Search = () => {
  const [newsData, setNewsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("q") : null;

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&Q=${search}&pageSize=10`,
          { cache: "no-store" }
        );
        const responseToJson = await response.json();
        const randomArticle: news[] = responseToJson?.articles;
        const filterArticles = randomArticle.filter(
          (article) => article?.source.id !== null
        );
        setLoading(false);
        setNewsData(filterArticles);
      } catch (error) {
        if (typeof error == "object" && error !== null) {
          console.error(error.toString());
        } else {
          console.log("Unexpected error", error);
        }
      }
    };
    getNews();

    return () => {
      AbortController;
    };
  }, [search]);

  return (
    <div className="w-[700px]">
      {loading ? (
        <p>loading....</p>
      ) : (
        <>
          {newsData.map((article: news, idx: number) => (
            <div key={`${article?.title}-${idx}`}>
              <Article data={article} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Search;
