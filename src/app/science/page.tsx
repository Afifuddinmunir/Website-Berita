import React from "react";
import { getNewsSearch } from "../components/api";
import { removeDuplicateData } from "../utils";
import Article from "../components/Article";

const Science = async () => {
  const newsScience = await getNewsSearch("science");
  const filterArticles = removeDuplicateData(newsScience);

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

export default Science;
