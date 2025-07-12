import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  const tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              className={selectedTopic === "components" ? "active" : undefined}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              className={selectedTopic === "jsx" ? "active" : undefined}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              className={selectedTopic === "props" ? "active" : undefined}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              className={selectedTopic === "state" ? "active" : undefined}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      ></Tabs>

      {tabContent}
    </Section>
  );
}
