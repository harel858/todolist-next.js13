import React from "react";

type pageProps = {
  params: {
    searchTerm: string;
  };
};

type searchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      channel: string;
      duration: string;
      platform: string;
      date: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: searchResult = await res.json();

  return data;
};

export default async function searchTerm({
  params: { searchTerm },
}: pageProps): Promise<JSX.Element> {
  const searchResult: searchResult = await search(searchTerm);
  return (
    <div>
      <h1>you search for {searchTerm}</h1>

      <ol>
        {searchResult.organic_results.map((result: any) => (
          <li key={result.position} className="list-decimal">
            <a
              className="font-bold hover:text-blue-500"
              href={`${result.link}`}
              target="_blank"
            >
              {result.title}
            </a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
