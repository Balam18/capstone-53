# 7-Slide Presentation Deck: AI Regulation Comparison
## India, the European Union, and the United States
**Capstone Project 53:** B.Tech Computer Science and Engineering Capstone  
**Target:** Final Viva Voce, Academic Review Panel, and Industry Seminar  
**Date:** November 1, 2026  

---

## Slide 1: Title and Project Introduction

```
========================================================================================
                      CAPSTONE 53: AI REGULATION COMPARISON
                         India, European Union, and the US
               Balancing Innovation, Fundamental Rights, and Engineering
========================================================================================
```

### Key Talking Points:
- **Core Research Question:** How do AI rules and governance frameworks differ across India, the EU, and the US, and what do they mean for software developers, CSE students, and tech startups?
- **The Core Problem:** Machine learning systems are probabilistic, non-deterministic, and prone to demographic bias, hallucination, and privacy violations. Classical software liability shields no longer protect un-audited models.
- **Three Distinct Global Philosophies:**
  1. *European Union:* Horizontal, precautionary, rights-based omnibus statute (EU AI Act).
  2. *United States:* Sectoral, innovation-led, agency-enforced model (FTC, EEOC, FDA, NIST).
  3. *India:* Sovereign capability-building (IndiaAI Mission) anchored by data protection (DPDPA 2023) and targeted administrative advisories (MeitY).
- **Target Audience:** CSE students, machine learning engineers, and software architects transitioning from naive prototyping to legally compliant production engineering.

---

## Slide 2: AI Regulations in India: The Innovation & Privacy Framework

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                      INDIA: THREE PILLARS OF AI GOVERNANCE                            │
└───────────────────────────────────────────────────────────────────────────────────────┘
  1. DATA PROTECTION               2. ADMINISTRATIVE DUE DILIGENCE   3. SOVEREIGN CAPACITY
  DPDPA, 2023                      MeitY Advisories (March 2024)     IndiaAI Mission (₹10,372 Cr)
  • Explicit itemized consent      • Label untested AI outputs       • 10,000+ subsidized GPUs
  • Section 9: Minor child safety  • Watermark synthetic deepfakes   • IndiaAI Datasets Platform
  • ₹250 Cr Max Penalty (DPBI)     • Prevent election interference   • Safe & Trusted AI Pillar
```

### Key Talking Points:
- **Developmental Philosophy:** India deliberately avoids premature omnibus regulation to foster its vibrant tech startup ecosystem and domestic talent base.
- **The DPDPA 2023 Anchor:** Digital Personal Data Protection Act requires consent-driven dataset curation. Section 9 strictly bans tracking and targeted profiling of minors under 18 years old. Fines reach up to ₹250 crore.
- **MeitY Advisories (March 2024):** Mandatory labelling of experimental AI, watermarking of deepfakes and synthetic media, and non-discrimination mandates under the IT Rules 2021.
- **The IndiaAI Advantage:** Public investment democratizing high-performance GPU compute for engineering colleges, startups, and researchers.

---

## Slide 3: EU AI Act: The Global Benchmark for Risk-Based Regulation

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                    EU AI ACT (REGULATION EU 2024/1689) RISK PYRAMID                   │
└───────────────────────────────────────────────────────────────────────────────────────┘
                      ▲
                     / \     UNACCEPTABLE RISK (Article 5) -> BANNED
                    / 1 \    • Social scoring, cognitive manipulation, public biometric scraping
                   /-----\   • Max Penalty: €35,000,000 or 7% worldwide turnover
                  /   2   \  HIGH RISK (Articles 6-51, Annex III) -> CE MARKING
                 /---------\ • Biometrics, HR/Recruitment, Education, Medical, Critical Infra
                /     3     \ SPECIFIC TRANSPARENCY RISK (Article 50)
               /-------------\ • Chatbots, GenAI, synthetic deepfakes (Mandatory disclosure)
              /       4       \ MINIMAL / NO RISK -> FREE DEPLOYMENT
             /-----------------\ • AI games, spam filters, inventory optimization
```

### Key Talking Points:
- **Omnibus & Extraterritorial:** Entered into force August 1, 2024. Directly applies to any global developer whose AI outputs enter the EU Single Market (*Brussels Effect*).
- **Four Risk Tiers:** Tailors legal obligations strictly to societal risk. Prohibits harmful applications while leaving minimal-risk applications free to innovate.
- **High-Risk Compliance Requirements:** Continuous Risk Management System (RMS), representative non-biased training data, automated logging, technical documentation, human-in-the-loop (HITL) overrides, and CE Marking.
- **General Purpose AI (GPAI):** Stringent transparency for foundation models; systemic risk tier for models trained above $10^{25}$ FLOPs requiring adversarial red-teaming.

---

## Slide 4: US AI Governance: Decentralized Enforcement and Executive Standards

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                       UNITED STATES DECENTRALIZED GOVERNANCE                          │
└───────────────────────────────────────────────────────────────────────────────────────┘
  EXECUTIVE & STANDARDS            FEDERAL REGULATORY AGENCIES       STATE STATUTES
  • EO 14110 (Biden White House)   • FTC: Section 5 Unfair/Deceptive • Colorado SB 24-205 (High Risk)
  • OMB Memo M-24-10               • EEOC: Title VII Algorithmic Bias• California AB 2013 / SB 942
  • NIST AI RMF 1.0 (Voluntary)    • FDA: Software as Medical Device • NYC LL 144 (Hiring Bias Audits)
```

### Key Talking Points:
- **Market-Driven Approach:** The US prioritizes rapid technological leadership, choosing sector-specific enforcement over omnibus federal legislation.
- **The NIST AI RMF 1.0 (NIST SP 1270):** The industry gold standard for risk mitigation. Structures engineering due diligence across **GOVERN, MAP, MEASURE, and MANAGE**.
- **Aggressive Agency Actions:**
  - *FTC:* Prosecutes unsubstantiated marketing claims and enforces **algorithmic disgorgement** (ordering complete deletion of illegally trained models).
  - *EEOC:* Penalizes hiring platforms causing disparate impact under Title VII.
- **Pioneering State Legislation:** States fill federal gaps: Colorado mandates duty of care for high-risk AI; California mandates training dataset disclosures and watermarks; NYC enforces annual bias audits for hiring tools.

---

## Slide 5: Comprehensive Cross-Border Comparison Matrix

```
┌──────────────────┬──────────────────────┬──────────────────────┬──────────────────────┐
│ PARAMETER        │ EUROPEAN UNION (EU)  │ UNITED STATES (US)   │ INDIA                │
├──────────────────┼──────────────────────┼──────────────────────┼──────────────────────┤
│ Core Philosophy  │ Precautionary/Rights │ Sectoral/Market-led  │ Developmental/Hybrid │
│ Primary Statute  │ EU AI Act 2024/1689  │ EO 14110 / FTC Act   │ DPDPA 2023 / MeitY   │
│ Risk Categories  │ 4 Rigid Tiers        │ Contextual / Agency  │ Harm & Child Centric │
│ Watermarking     │ Mandatory (Art. 50)  │ CA SB 942 / FTC      │ MeitY 2024 Advisory  │
│ Privacy Baseline │ GDPR (Art. 6, 9, 22) │ State Laws / HIPAA   │ DPDPA 2023 (§ 9 Min) │
│ Top Authority    │ European AI Office   │ FTC / EEOC / FDA     │ DPBI / MeitY / CERT  │
│ Max Penalty      │ €35M or 7% Turnover  │ Civil Fines + Disgorg│ ₹250 Crore (~$30M)   │
│ Startup Impact   │ Regulatory Sandboxes │ High Market Agility  │ Subsidized Compute   │
└──────────────────┴──────────────────────┴──────────────────────┴──────────────────────┘
```

### Key Talking Points:
- **Structural Divergence:** EU offers legal certainty via an omnibus code; the US provides agility with multi-agency litigation risks; India offers strong infrastructural support with clear data privacy boundaries.
- **Penalties:** All three jurisdictions now possess substantial financial enforcement tools capable of shutting down non-compliant software ventures.
- **Cross-Border Scalability:** A software startup building in India or the US must design for EU AI Act compliance if targeting international enterprise customers.

---

## Slide 6: Case Studies and Real-World Applications

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                     THREE CRITICAL ENGINEERING CASE STUDIES                           │
└───────────────────────────────────────────────────────────────────────────────────────┘
  1. FACIAL RECOGNITION (FRAS)     2. MEDICAL DIAGNOSIS (DermAI)     3. RESUME SCREENING (RecruitAI)
  • EU: High Risk (Annex III) /    • EU: High Risk + MDR 2017/745    • EU: High Risk + GDPR Art. 22
    Prohibited in public CCTV        Notified Body CE Clearance        Ban on autonomous rejection
  • US: BIPA consent & FTC bans    • US: FDA SaMD 510(k)/De Novo     • US: NYC LL 144 Bias Audit;
    for discriminatory error rates   and PCCP change control plan      EEOC 80% Disparate Impact
  • India: DPDPA consent; strict   • India: CDSCO Medical License;   • India: DPDPA minimization;
    Section 9 minor ban (<18 yrs)    Mandatory MeitY disclaimer        Constitutional equality Art 14
```

### Key Talking Points:
- **Biometric Attendance:** Real-time biometrics require verifiable consent, alternative non-biometric options (RFID), and strict minor protection under DPDPA Section 9.
- **Clinical AI:** Diagnostic vision models are regulated as medical devices requiring clinical trials, change control plans, and mandatory physician oversight.
- **Recruitment Algorithms:** Automated resume screening requires feature sanitization (stripping gender/race), continuous four-fifths disparate impact testing, and human review gates.

---

## Slide 7: Conclusion, Engineering Best Practices, and Future Scope

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                         THE RESPONSIBLE AI DEV-STACK                                  │
└───────────────────────────────────────────────────────────────────────────────────────┘
  DATA CURATION          MODEL AUDITING          PRODUCTION MONITORING       GOVERNANCE
  • Verifiable Consent   • Bias & Disparate      • Cryptographic Watermarks  • Model Cards
  • DPDPA / GDPR Valid     Impact Ratios (<0.80) • Tamper-proof Logging      • Incident Response
  • PII Sanitization     • Red-teaming & Safety  • Human-in-the-Loop Gate    • CERT-In Compliance
```

### Key Takeaways for CSE Students & Evaluators:
1. **Compliance by Design:** Regulatory compliance must be integrated into software architecture from sprint zero, not patched on post-deployment.
2. **Standardization Landscape:** Future careers in CSE will increasingly value certifications in ISO/IEC 42001 (AI Management System) and NIST AI RMF proficiency.
3. **The Winning Strategy:** Leverage India's sovereign compute infrastructure, adopt US agile development practices, and build to EU AI Act quality standards to create globally trustworthy software.
