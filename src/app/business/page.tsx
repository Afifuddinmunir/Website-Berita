import React from "react";
import { getNewsSearch } from "../components/api";
import { removeDuplicateData } from "../utils";
import Article from "../components/Article";

const Business = async () => {
  const newsBusiness = await getNewsSearch("business");
  const filterArticles = removeDuplicateData(newsBusiness);

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

export default Business;
