# Capstone 53 Prompt Engineering Library & AI Tool Methodology
## Structured Prompts and Tool Mapping for Cross-Border AI Regulatory Research

**Capstone Project 53:** AI Regulation Comparison: India, EU and US  
**Target Audience:** CSE Students, AI Researchers, Prompt Engineers, and Project Evaluators  
**Date of Verification:** November 1, 2026  
**Document Code:** CAP53-PROMPT-LIB-V1.0  

---

### 1. Free AI Tool Methodology and Allocation Matrix

As mandated by the capstone guidelines, this project utilizes **five free AI tools** across the development lifecycle. The matrix below defines the exact tool assignment, rationale, and free-tier limitations:

| Project Activity | Free AI Tool Deployed | Key Free Capabilities Leveraged | Tool Limitations & Verification Protocol |
| :--- | :--- | :--- | :--- |
| **1. Primary Statutory Research & Fact-Checking** | **Perplexity AI (Free Tier)** | Real-time web index grounding, live search citations, and primary gazette URL attribution. | Free tier lacks unlimited Pro searches; outputs verified against primary EUR-Lex and Federal Register URLs. |
| **2. Academic Literature & Algorithmic Bias Research** | **Consensus (Free Tier)** | Semantic search across peer-reviewed AI ethics and algorithmic fairness papers; citation extraction. | Limited query volume per month; used specifically for disparate impact metrics and medical AI validation papers. |
| **3. Regulatory Summarization & Synthesis** | **NotebookLM (Free Tier)** | Grounded document synthesis restricted strictly to uploaded source PDFs (DPDPA 2023, EU AI Act text, NIST SP 1270). | Zero-hallucination source-grounded mode; cannot ingest live web URLs without manual document upload. |
| **4. Technical Report, Case Studies & Code Generation** | **Google Gemini / ChatGPT (Free Tiers)** | High context window, structured markdown drafting, Python/Node.js automation script generation, and ASCII diagrams. | Cutoff date limitations and tendency to hallucinate statutory fine caps; outputs cross-checked with Accuracy Checklist. |
| **5. Slide Deck Layout & Presentation Ideation** | **Gamma / Claude (Free Tiers)** | Narrative outlining, slide structure refinement, concise bullet formatting, and interactive deck CSS styling. | Free export limitations; utilized for content architecture while generating standalone HTML/Markdown source files. |

---

### 2. Comprehensive Prompt Engineering Library

Below are the nine master prompts engineered for each phase of Capstone 53, following few-shot, role-conditioned, and constrained prompt engineering paradigms.

---

#### Phase 1: Statutory Research Prompt (Perplexity AI)
```text
[SYSTEM ROLE]
You are a senior legal scholar and AI technology policy analyst specializing in comparative digital law.

[CONTEXT & OBJECTIVE]
I am researching the statutory status of Artificial Intelligence regulation across three jurisdictions:
1. European Union (Regulation EU 2024/1689 - EU AI Act)
2. United States (Executive Order 14110, NIST AI RMF 1.0, and state laws in CO, CA, and NYC)
3. India (Digital Personal Data Protection Act 2023, MeitY March 2024 advisories, IndiaAI Mission)

[CONSTRAINTS & RULES]
- Cite ONLY primary official government portals (EUR-Lex, Federal Register, MeitY, The Gazette of India, NIST).
- Do not cite secondary blogs or unverified summaries.
- For every statute, provide: Official Instrument Name, Date of Enactment/Entry into Force, and Current Legal Status (Enacted, Executive Directive, Voluntary Guidance, or Proposed).
- Clearly identify the computational threshold for dual-use models in the US EO 14110 and EU GPAI systemic risk.
- Do not hallucinate or extrapolate beyond verified primary texts.
```

---

#### Phase 2: Regulatory Summarization Prompt (NotebookLM)
```text
[SYSTEM ROLE]
You are an academic summarization engine operating under strict closed-book, source-grounded constraints.

[SOURCE MATERIALS]
Uploaded primary documents:
- Official Text of Regulation (EU) 2024/1689 (EU AI Act)
- Gazette Notification of The Digital Personal Data Protection Act, 2023 (India)
- NIST Special Publication 1270 (AI RMF 1.0)

[TASK]
Generate a technical summary of how these three documents govern:
1. Training data requirements (consent, copyright, and representative data).
2. Obligations imposed on developers of automated recruitment and biometric identification tools.
3. Specific penalties for non-compliance.

[CONSTRAINTS]
- Every factual assertion must cite the exact Article or Section number from the uploaded texts.
- If a provision is not present in the sources, state "Not specified in source text."
```

---

#### Phase 3: Comparative Analysis & Matrix Prompt (ChatGPT / Claude)
```text
[SYSTEM ROLE]
You are a comparative law professor and computer science faculty advisor.

[TASK]
Construct an exhaustive, multi-dimensional comparison table contrasting AI governance across the European Union, the United States, and India.

[REQUIRED DIMENSIONS]
1. Regulatory Philosophy
2. Primary Statutory Instruments
3. AI Risk Classification Tiers
4. Transparency and Watermarking Mandates
5. Data Privacy and Training Data Interplay
6. Competent Enforcement Authorities
7. Maximum Financial and Legal Penalties
8. Developer Compliance Obligations (Technical Controls)
9. Impact on CSE Students, Open-Source Developers, and Startups

[FORMAT]
Markdown table followed by an ASCII decision tree helping a developer decide which jurisdiction's rules apply based on target deployment region.
```

---

#### Phase 4: Academic Report Writing Prompt (Google Gemini)
```text
[SYSTEM ROLE]
You are a lead author on IEEE Transactions on Technology and Society.

[TASK]
Draft an academic research report of approximately 1,500 words titled:
"AI Regulation and Governance Frameworks: A Comparative Analysis of India, the European Union, and the United States."

[REQUIRED STRUCTURE]
1. Abstract (with problem statement and key findings)
2. Introduction (why non-deterministic ML invalidates standard software liability)
3. Project Objectives
4. Research Methodology (dual-layer verification with Perplexity and primary gazettes)
5. India's AI Governance (DPDPA 2023, MeitY advisories, IndiaAI Mission)
6. EU AI Act (4-tier risk pyramid, GPAI systemic risk, Article 99 penalties)
7. US AI Governance (EO 14110, NIST AI RMF pillars, FTC Section 5, state laws)
8. Comparative Analysis
9. Impact on CSE Students and Software Developers
10. Challenges and Opportunities
11. Conclusion
12. References (Clickable official links)

[STYLE]
Academic, technical, and objective. Use simple English accessible to undergraduate engineering students while preserving rigorous statutory precision.
```

---

#### Phase 5: Engineering Case Study Creation Prompt (ChatGPT / Gemini)
```text
[SYSTEM ROLE]
You are a Principal Software Architect and Regulatory Compliance Consultant.

[TASK]
Develop three realistic, detailed engineering case studies illustrating how AI regulations apply in practice:
1. AI-Powered Campus/Office Facial Recognition Attendance System (FRAS)
2. AI-Based Mobile Medical Diagnosis Application (DermAI)
3. Automated AI Recruitment and Resume Screening Platform (RecruitAI)

[FOR EACH CASE STUDY, PROVIDE]
1. Technical Architecture (Sensor input, preprocessing, neural network model, inference, output).
2. ASCII data flow diagram.
3. Regulatory analysis across the EU (EU AI Act risk tier, GDPR), US (FTC, EEOC, FDA, state laws), and India (DPDPA 2023, MeitY advisories, child data rules).
4. Concrete 3-step Developer Compliance Roadmap with quantitative engineering thresholds (e.g., disparate impact ratio >= 0.80, uncertainty fallback).
```

---

#### Phase 6: Multiple-Choice Quiz Generation Prompt (Claude / ChatGPT)
```text
[SYSTEM ROLE]
You are a University Examiner preparing an assessment for a final-year B.Tech CSE Capstone Course.

[TASK]
Create a 10-question multiple-choice quiz testing student comprehension of AI governance in India, the EU, and the US.

[REQUIREMENTS]
- Exactly 4 plausible options (A, B, C, D) per question.
- Cover all 3 jurisdictions, risk tiers, penalties, and developer duties.
- Separate the document into:
  * Part 1: Student Quiz (Questions & options only).
  * Part 2: Detailed Explanations (Explaining why the correct answer is right and why distractors are incorrect).
  * Part 3: Quick Answer Key Grid.
- Ensure all statutory citations, FLOP thresholds, and penalty percentages are 100% accurate.
```

---

#### Phase 7: AI Output Verification & Hallucination Audit Prompt (Perplexity / Consensus)
```text
[SYSTEM ROLE]
You are a strict legal accuracy auditor and automated fact-checker.

[INPUT]
A series of raw AI-generated claims regarding AI law:
- Claim 1: "The US passed the Federal AI Act of 2024 imposing criminal jail terms for model bias."
- Claim 2: "The EU AI Act levies a maximum fine of €20 million or 4% of turnover."
- Claim 3: "India requires all AI startups to get government approval before launching any app."
- Claim 4: "NIST AI RMF is a mandatory federal criminal regulation."

[TASK]
Audit each claim against primary legal texts:
1. Classify verdict: [FACTUAL], [HALLUCINATED], [OUTDATED], or [CONFLATED].
2. Identify root cause of the error.
3. Provide the corrected, verified statutory statement with official primary reference.
```

---

#### Phase 8: Presentation Deck Structuring Prompt (Gamma / Claude)
```text
[SYSTEM ROLE]
You are a Technical Presentation Specialist and Keynote Designer.

[TASK]
Structure a 7-slide academic presentation deck for a CSE capstone defense:
Slide 1: Project Title & Research Scope
Slide 2: AI Regulations in India
Slide 3: EU AI Act & Risk Pyramid
Slide 4: US AI Regulations & Policies
Slide 5: Comprehensive Comparison Table
Slide 6: Case Studies & Real-World Applications
Slide 7: Conclusion & Engineering Best Practices

[REQUIREMENTS]
- Include clean ASCII visual diagrams, clear bullet hierarchies, and quantitative figures.
- Provide comprehensive talking points for the presenter during viva voce defense.
```

---

#### Phase 9: Working Automation Workflow Prompt (Gemini / Claude)
```text
[SYSTEM ROLE]
You are a DevOps and Full-Stack Node.js Engineer.

[TASK]
Write a production-ready, standalone Node.js automation script (`ai_policy_tracker.js`) that monitors official RSS/web feeds for new AI governance updates and logs them into a spreadsheet (CSV) and JSON file.

[CONSTRAINTS]
- ZERO external npm dependencies (must use pure native Node.js standard libraries: `https`, `http`, `fs`, `path`).
- Monitor: European Commission Digital Strategy, NIST News, FTC Releases, and PIB/MeitY.
- Filter articles using regulatory and AI keywords.
- Gracefully handle HTTP timeouts, 301/302 redirects, and parse XML items via robust regex.
- Include a fallback benchmark dataset of verified 2024–2026 regulations to guarantee high data density.
- Export clean CSV with properly escaped quotes and structured JSON.
```
