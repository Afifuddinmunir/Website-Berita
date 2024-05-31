import React from "react";
import { getNewsSearch } from "../components/api";
import { removeDuplicateData } from "../utils";
import Article from "../components/Article";

const World = async () => {
  const newsWorld = await getNewsSearch("world");
  const filterArticles = removeDuplicateData(newsWorld);

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

export default World;
