import React from "react";
import { getNewsSearch } from "../components/api";
import { removeDuplicateData } from "../utils";
import Article from "../components/Article";

const Lifestyle = async () => {
  const newsLifestyle = await getNewsSearch("lifestyle");
  const filterArticles = removeDuplicateData(newsLifestyle);

  return (
    <div className="w-[700px]">
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Lifestyle;
