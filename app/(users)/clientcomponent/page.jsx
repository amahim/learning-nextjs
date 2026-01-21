"use client";

const URL = "https://jsonplaceholder.typicode.com/posts";

import { useEffect, useState } from "react";

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log("Client Component Data:", data);
      setPostData(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>client compoooooooooooooos</h1>
      <button
        className="mt-4 px-4 py-2 bg-green-500
       text-white rounded hover:bg-green-600"
        onClick={() => alert("Welcome to Indonesia!")}
      >
        lets visit indosnesia
      </button>

      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {postData.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ClientComponent;
