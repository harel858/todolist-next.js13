import React from "react";

type pageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);

  return data;
};

async function searchResult({ params: { searchTerm } }: pageProps) {
  const searchResult = await search(searchTerm);
  return (
    <div>
      <h1>you search for {searchTerm}</h1>

      <ol>
        {searchResult.organic_results.map((result: any) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default searchResult;
