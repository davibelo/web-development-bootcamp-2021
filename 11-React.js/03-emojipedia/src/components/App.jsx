import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* using map method with a arrow callback function */}
        {/* the callback function works as a constructor */}
        {emojipedia.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            emoji={entry.emoji}
            title={entry.name}
            description={entry.meaning}
          />
        ))}
      </dl>      
    </div>
  );
}

export default App;
