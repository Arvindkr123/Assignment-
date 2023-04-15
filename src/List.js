function List({ layout, items }) {
  const listStyle = layout === "numbered" ? "decimal" : "disc";
  const listStyleType = { listStyleType: listStyle };

  return (
    <div>
      <h3>List ({layout})</h3>
      <ul style={listStyleType}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
