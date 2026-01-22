export default async function Blog(props) {
  const { slug } = await props.params;
  console.log(slug);

  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        <h2>URL Parameters:</h2>
        <p>
          <strong>Full Slug Array:</strong> {JSON.stringify(slug)}
        </p>
        <p>
          <strong>Length:</strong> {slug.length}
        </p>
        <h3>Individual Segments:</h3>
        <ul>
          {slug.map((segment, index) => (
            <li key={index}>
              Segment {index}: {segment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
