import { useState } from "react";

export const MainPage = () => {
  const [displayAdvancedMenu, setDisplayAdvancedMenu] = useState(false);

  function toggleAdvancedMenu() {
    const advancedMenu = document.getElementById("advanced-menu");
    const advancedMenuButton = document.querySelector(
      'button[aria-haspopup="true"]'
    );

    setDisplayAdvancedMenu(!displayAdvancedMenu);

    if (!displayAdvancedMenu) {
      advancedMenuButton.setAttribute("aria-expanded", "true");
    } else {
      advancedMenuButton.setAttribute("aria-expanded", "false");
    }
  }

  return (
    <div>
      <div className="bgImage"></div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="https://www.sp2tx.com">SP2TX</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Tutorial</a>
            </li>
            <li>
              <a href="#">Example</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <h1>Alphafold2 Peptide Structure Prediction Server</h1>
      </header>
      <main>
        <form>
          <label for="protein-sequence">Protein Sequence</label>
          <textarea
            id="protein-sequence"
            rows="5"
            placeholder="Enter your protein sequence here..."
            aria-required="true"
          />
          <button
            type="button"
            onClick={() => toggleAdvancedMenu()}
            aria-haspopup="true"
            aria-expanded="false"
          >
            Advanced Options
          </button>
          <br />
          {displayAdvancedMenu && (
            <div id="advanced-menu" aria-labelledby="advanced-options-heading">
              <h3 id="advanced-options-heading">Advanced Options</h3>
              <div class="advanced-option">
                <label for="job-name">Job Name</label>
                <input
                  type="text"
                  id="job-name"
                  placeholder="Enter a job name"
                  aria-label="Job Name"
                />
              </div>
              <div class="advanced-option">
                <label for="amber-relaxation">AMBER Relaxation</label>
                <select id="amber-relaxation" aria-label="AMBER Relaxation">
                  <option value="yes">Yes</option>
                  <option value="no" selected>
                    No
                  </option>
                </select>
              </div>
              <div class="advanced-option">
                <label for="template-mode">Template Mode</label>
                <input
                  type="checkbox"
                  id="template-mode"
                  aria-label="Template Mode"
                />
              </div>
              <div class="advanced-option">
                <label for="num-recycle">Num-Recycle</label>
                <select id="num-recycle" aria-label="Num-Recycle">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          )}
          <br />
          <button type="submit" aria-label="Submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
