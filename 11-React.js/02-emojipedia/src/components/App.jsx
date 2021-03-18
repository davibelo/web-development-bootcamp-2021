import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Entry constructor
function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      id={entry.id}
      emoji={entry.emoji}
      title={entry.name}
      description={entry.meaning}
    />
  );
}

// using ForEach loop to map Entries
// const Entries = [];
// emojipedia.forEach(function(entry){
//   let Entry = createEntry(entry);
//   Entries.push(Entry);
// })

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      
      {/* using ForEach mapping */}
      {/* <dl className="dictionary">{Entries}</dl> */}
    </div>
  );
}

export default App;
