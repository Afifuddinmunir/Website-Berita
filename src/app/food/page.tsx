import React from "react";
import { getNewsSearch } from "../components/api";
import { removeDuplicateData } from "../utils";
import Article from "../components/Article";

const Food = async () => {
  const newsFood = await getNewsSearch("food");
  const filterArticles = removeDuplicateData(newsFood);

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

export default Food;
