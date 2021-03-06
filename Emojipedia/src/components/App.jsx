import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function entry(emojientry) {
  return (
    <Emoji
      key={emojientry.id}
      emoji={emojientry.emoji}
      name={emojientry.name}
      meaning={emojientry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(entry)}</dl>
    </div>
  );
}

export default App;
