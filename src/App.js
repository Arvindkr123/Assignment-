import "./styles.css";
import List from "./List";

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="App">
      <List layout="numbered" items={items} />
      <List layout="bulleted" items={items} />
    </div>
  );
}
