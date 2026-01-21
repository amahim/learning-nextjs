const servercomponent = async () => {

    
const URL = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(URL);
      const data = await res.json();
      console.log( data);

      return (
    <>
      <h1>server compoooooooooooooos</h1>
      

      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data.map((post) => (
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

export default servercomponent;
