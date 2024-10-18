// src/Labs/Lab3/Styles.tsx
export default function Styles() {
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px" };
  const bgBlue = {
    backgroundColor: "lightblue",
    color: "black",
    ...padding10px
  };
  const bgRed = {
    backgroundColor: "lightcoral",
    ...colorBlack,
    ...padding10px
  };

  return (
    <div id="wd-styles">
      <h2>Styles</h2>

      {/* Inline style object literal */}
      <div style={{ backgroundColor: "lightyellow", color: "black", padding: "10px" }}>
        Yellow background
      </div>

      {/* JSON object for styles */}
      <div style={bgRed}>
        Red background
      </div>

      {/* Another JSON object for styles */}
      <div style={bgBlue}>
        Blue background
      </div>
    </div>
  );
}
