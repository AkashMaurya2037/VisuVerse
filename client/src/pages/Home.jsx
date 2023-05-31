import React, { useState, useEffect } from "react";
import { Loader, FormField, Card } from "../Components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return(
    <h2 className="mt-5 font-bold text-xl uppercase text-[#6449ff]">{title}</h2>
  )
};

const Home = () => {

  const [loading, setloading] = useState(false);
  const [postAll, setpostAll] = useState(null);

  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7x1 mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#66e75] text-[16px] max-w[500px]">
          Browse through the collection of imaginative and visully stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-xl mb-3 text-[#666e75]">
                Showing results for
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search results found"/>
              ): 
              (<RenderCards data={[]} title="No post found"/> )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
