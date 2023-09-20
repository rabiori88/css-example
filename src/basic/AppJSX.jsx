import "./App.css";

function AppJSX() {
  const name = "rabiori";
  const list = ["milk", "berry", "banana"];
  return (
    <div>
      <h1 className="orange">{`Hello ${name}`}</h1>;
      <h1 className="orange"> {name}</h1>;
      <ul>
        {list.map(item => (
          <li className="oragne">{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "500px", height: "500px" }}
        alt="nature"
        src="https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
      />
    </div>
  );
}

export default AppJSX;
