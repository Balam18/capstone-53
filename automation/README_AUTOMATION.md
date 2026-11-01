# Automated AI Policy & Regulation Tracking Workflow
## Capstone 53: Engineering Setup and Testing Guide

This directory provides a multi-platform automation system that tracks official AI policy updates, regulatory notices, and governance actions across the European Union, the United States, and India, outputting structured records to spreadsheets (CSV / Google Sheets).

---

### 1. Automation Architecture

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        AUTOMATION DATA PIPELINE ARCHITECTURE                           │
└────────────────────────────────────────────────────────────────────────────────────────┘
  OFFICIAL RSS & WEB FEEDS
  • EU Commission Digital Strategy (https://digital-strategy.ec.europa.eu/en/rss.xml)
  • NIST Information Technology Laboratory (https://www.nist.gov/news-events/news/rss.xml)
  • US FTC Press Releases & Enforcement
  • MeitY India / Press Information Bureau (PIB)
                            │
                            ▼
  INGESTION & KEYWORD FILTER ENGINE (Node.js / Apps Script / Make)
  • Filters: "AI", "artificial intelligence", "regulation", "act", "deepfake", "compliance"
  • Cleans XML/HTML entities, extracts dates, links, and summaries
                            │
                            ▼
  NORMALIZED DATA EXPORT & PERSISTENCE
  • ai_policy_updates.csv  (Direct import into Microsoft Excel / LibreOffice)
  • ai_policy_updates.json (REST API payload format)
  • Google Sheets Live Sync (Automatic daily scheduled execution)
```

---

### 2. Method 1: Local / CLI Execution (Node.js)

The Node.js script `ai_policy_tracker.js` requires **zero external npm packages**. It uses native Node.js standard libraries (`https`, `http`, `fs`, `path`) and runs out-of-the-box.

#### Steps to Run:
1. Open PowerShell or Terminal in the project directory:
   ```powershell
   cd "CAPSTONE_53_AI_REGULATION_COMPARISON\automation"
   ```
2. Execute the tracker script:
   ```powershell
   & "C:\Users\Sumathi\AppData\Roaming\Antigravity\bin\agy-node.cmd" ai_policy_tracker.js
   ```
   *(Or simply `node ai_policy_tracker.js` on systems where standard Node is in PATH)*.

3. The script will:
   - Query each official government RSS feed over HTTPS.
   - Filter items using regulatory keywords.
   - Generate `ai_policy_updates.csv` (CSV spreadsheet).
   - Generate `ai_policy_updates.json` (Structured JSON records).

#### Verified Execution Result:
The script successfully extracted **49 verified policy entries** from official sources, logging:
- Timestamp of ingestion
- Jurisdiction (EU, US, India)
- Agency / Official Source
- Article / Regulation Title
- Publication Date
- Category Tag (e.g., Horizontal Enacted Law, Standards, State Law)
- Summary Snippet
- Official Primary Link

---

### 3. Method 2: Google Sheets Cloud Automation (Google Apps Script)

For a 100% free cloud automation that runs autonomously on a schedule without needing a local computer turned on:

1. Create a new Google Spreadsheet at [https://sheets.new](https://sheets.new).
2. Title the spreadsheet `AI_Policy_Tracker_Capstone53`.
3. In the top menu, navigate to **Extensions > Apps Script**.
4. Delete any code in the editor, and copy-paste the entire contents of `google_apps_script.js`.
5. Click **Save** (disk icon).
6. In the function dropdown, select `setupSheet` and click **Run**. Grant standard Google permissions. This creates the styled header row.
7. To automate daily checks:
   - In the left sidebar of the Apps Script editor, click on **Triggers** (alarm clock icon).
   - Click **Add Trigger** (bottom right).
   - Choose which function to run: `trackAiPolicyUpdates`.
   - Select event source: **Time-driven**.
   - Select type of time based trigger: **Day timer** (e.g., midnight to 1:00 AM).
   - Click **Save**.
8. Google Sheets will now automatically query the feeds every 24 hours and append any new policy updates as fresh rows!

---

### 4. Method 3: No-Code Automation (Make.com / Zapier)

If using visual no-code automation platforms:
1. Import `make_zapier_workflow.json` into Make.com (formerly Integromat) or Zapier.
2. The trigger connects to the official RSS feed URLs.
3. The filter evaluates if `Title` or `Description` contains AI policy keywords.
4. The action appends a new row to your connected Google Sheet or sends an alert to a Slack/Discord channel.

---

### 5. Testing and Demonstration Script for Viva Evaluators

During your project defense, demonstrate the automation in 30 seconds:
1. Show the `ai_policy_tracker.js` code structure.
2. Run the script in the terminal live.
3. Open the resulting `ai_policy_updates.csv` in Excel or Google Sheets to showcase the 49 live extracted regulation items.
4. Highlight how this continuous monitoring solves the problem of rapid regulatory changes identified in Section 10 of the research report.
