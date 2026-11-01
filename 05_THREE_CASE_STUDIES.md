# Three Realistic Engineering Case Studies in AI Regulation
## Cross-Border Legal and Technical Analysis: India, European Union, and United States

**Capstone Project 53:** AI Regulation Comparison: India, EU and US  
**Target Audience:** CSE Students, System Architects, Quality Assurance Engineers, Compliance Officers  
**Date of Verification:** November 1, 2026  
**Document Code:** CAP53-CASE-STUDIES-V1.0  

---

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 CASE STUDY DOMAINS                                     │
└────────────────────────────────────────────────────────────────────────────────────────┘
         │                                          │                                          │
         ▼                                          ▼                                          ▼
┌───────────────────────────────┐     ┌───────────────────────────────┐     ┌───────────────────────────────┐
│         CASE STUDY 1          │     │         CASE STUDY 2          │     │         CASE STUDY 3          │
│   AI-Powered Campus/Office    │     │   AI-Based Medical Diagnostic │     │   Automated AI Recruitment    │
│  Facial Recognition System    │     │       Mobile Application      │     │  & Resume Screening Platform  │
├───────────────────────────────┤     ├───────────────────────────────┤     ├───────────────────────────────┤
│ Domain: Biometrics & Security │     │ Domain: Clinical Healthcare   │     │ Domain: HR & Educational Tech │
│ Primary Risk: Privacy/Rights  │     │ Primary Risk: Patient Safety  │     │ Primary Risk: Algorithmic Bias│
└───────────────────────────────┘     └───────────────────────────────┘     └───────────────────────────────┘
```

---

## Case Study 1: AI-Powered Facial Recognition Attendance System (FRAS)

### 1.1 Technical Architecture and System Description
A software engineering team at a university develops a smart campus management system:
- **Input Pipeline:** Fixed optical CCTV cameras located at campus gates and lecture hall entrances capture high-resolution video streams (1080p, 30 fps).
- **ML Pipeline:** 
  1. *Face Detection:* MTCNN (Multi-task Cascaded Convolutional Networks) or YOLO-v8 face to localize bounding boxes.
  2. *Alignment & Normalization:* 2D facial landmark alignment (eyes, nose, mouth corners).
  3. *Feature Extraction:* Deep Convolutional Network (FaceNet / ResNet-50) generating 512-dimensional vector embeddings.
  4. *Matching Engine:* Approximate Nearest Neighbor (ANN) search across a student database of 15,000 enrolled vector embeddings using cosine similarity.
- **Output:** Automated logging of student timestamp, geo-location, and presence in the campus enterprise resource planning (ERP) database.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        FRAS SYSTEM ARCHITECTURE & DATA FLOW                            │
└────────────────────────────────────────────────────────────────────────────────────────┘
 [Campus CCTV Stream] ──► [Face Detection (YOLO)] ──► [Facial Alignment]
                                                             │
                                                             ▼
 [Attendance DB] ◄── [Cosine Similarity Match] ◄── [Embedding (FaceNet 512D)]
```

### 1.2 Cross-Border Regulatory Applicability

#### A. European Union (EU)
- **EU AI Act Classification: HIGH RISK (Annex III, Section 1: Biometrics).**
  - If used for real-time remote biometric identification in public spaces by private educational institutions without explicit legal authorization, it risks falling into **Prohibited AI Practices (Article 5(1)(d))**.
  - Even in controlled campus spaces, it is classified as a **High-Risk AI System** requiring:
    1. A formal Fundamental Rights Impact Assessment (FRIA) prior to deployment.
    2. Comprehensive technical documentation and automated activity logging for at least 6 months.
    3. Mandatory CE Marking and registration in the EU public High-Risk AI database.
- **GDPR Intersection (Regulation EU 2016/679):**
  - Biometric data used for uniquely identifying a natural person is a **Special Category of Data (Article 9)**.
  - Processing is unlawful without explicit, freely given, unambiguous consent (Article 9(2)(a)), or strict statutory authorization. Students cannot be coerced into consenting; a non-biometric alternative (e.g., RFID badge) must be offered without penalty.

#### B. United States (US)
- **State-Level Biometric Statutes:**
  - **Illinois Biometric Information Privacy Act (BIPA - 740 ILCS 14/):** Requires written notice, specific purpose disclosure, written release, and published retention schedules before capturing biometric scans. Fines range from \$1,000 to \$5,000 per reckless violation.
  - **State AI Laws:** Colorado SB 24-205 requires developer risk management and deployer impact assessments to avoid discriminatory impact.
- **Federal Trade Commission (FTC):**
  - Enforces Section 5 against false accuracy claims (e.g., in the 2023 *FTC v. Rite Aid* enforcement action, the FTC banned Rite Aid from using facial recognition for five years due to erroneous false-positive identification disproportionately targeting racial minorities).

#### C. India
- **Digital Personal Data Protection Act, 2023 (DPDPA):**
  - Biometric data represents sensitive digital personal data. Clear, informed, itemized consent must be gathered from every student (Data Principal).
  - **Minor Student Protection (Section 9):** If any student is under 18 years of age (e.g., first-year undergraduates or school visitors), processing their biometric data without verifiable parental consent and any behavioral tracking is **strictly prohibited**. Non-compliance triggers DPBI penalties up to **₹250 crore**.
- **CERT-In Cyber Security Directions:**
  - Biometric databases are critical assets. Any data compromise or breach must be reported to the Indian Computer Emergency Response Team (CERT-In) within 6 hours.

### 1.3 Developer Compliance Roadmap for FRAS
1. **Voluntary Opt-In:** Implement an alternative, equally convenient non-biometric attendance mechanism (RFID cards or QR code scanning).
2. **On-Device Embedding Protection:** Store only irreversible mathematical embeddings ($512$ floats) salted with cryptographic keys; delete raw video frames immediately after feature extraction.
3. **Disparate Impact Audit:** Benchmark false rejection rates (FRR) and false acceptance rates (FAR) across different skin tones and genders to ensure demographic parity.

---

## Case Study 2: AI-Based Medical Diagnostic Application (DermAI)

### 2.1 Technical Architecture and System Description
A digital health startup builds "DermAI", a mobile application for smartphone-based dermatological screening:
- **Input Pipeline:** Patients take high-resolution photographs of skin lesions, moles, or rashes using their smartphone cameras.
- **ML Pipeline:**
  1. *Preprocessing:* Color calibration against a standardized reference card, artifact removal (hair, glare).
  2. *Model:* Vision Transformer (ViT-B/16) fine-tuned on ISIC (International Skin Imaging Collaboration) dermatoscopic datasets.
  3. *Inference:* Multi-class probability classification: benign nevus, melanoma, basal cell carcinoma, or eczema.
- **Output:** Triage risk score (High/Medium/Low Risk), suspected condition description, and recommended clinical referral.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DERMAI SYSTEM ARCHITECTURE & DATA FLOW                          │
└────────────────────────────────────────────────────────────────────────────────────────┘
 [User Smartphone Camera] ──► [Image Normalization] ──► [Vision Transformer ViT]
                                                               │
                                                               ▼
 [User Report & Referral] ◄── [Clinician HITL Portal] ◄── [Probability Classifier]
```

### 2.2 Cross-Border Regulatory Applicability

#### A. European Union (EU)
- **EU AI Act & Medical Device Regulation (MDR EU 2017/745):**
  - The application qualifies as **Software as a Medical Device (SaMD)** under Rule 11 of Annex VIII of the MDR.
  - Classified as **High-Risk AI System (Article 6 & Annex I)** because it serves as a safety component of a regulated medical device.
  - Mandatory requirements:
    1. Third-party conformity assessment conducted by a designated Notified Body.
    2. Quality Management System (QMS) compliant with standard EN ISO 13485.
    3. Rigorous clinical evaluation demonstrating sensitivity and specificity across diverse FitzPatrick skin phototypes.
    4. Integration of Human-in-the-Loop (HITL) workflows: automated diagnostic conclusions cannot be delivered without licensed physician oversight.

#### B. United States (US)
- **Food and Drug Administration (FDA):**
  - Regulated under the **Federal Food, Drug, and Cosmetic Act (FD&C Act)** as a Medical Device Data System / SaMD.
  - Developers must pursue either **510(k) Premarket Notification** (demonstrating substantial equivalence to a legally marketed predicate device) or a **De Novo Classification Request**.
  - Developers must file a **Predetermined Change Control Plan (PCCP)** detailing how future deep learning model re-training and continuous learning updates will be validated without compromising patient safety.
- **Health Insurance Portability and Accountability Act (HIPAA):**
  - All transmission and cloud storage of patient health information (PHI) must be encrypted end-to-end (AES-256) with strict Business Associate Agreements (BAAs).

#### C. India
- **Central Drugs Standard Control Organisation (CDSCO):**
  - Medical Device Rules, 2017 (amended) classify clinical diagnostic software as medical devices (Class B or Class C depending on risk).
  - Software must obtain CDSCO manufacturing/import licenses before commercial marketing.
- **DPDPA 2023 & National Digital Health Mission (ABDM):**
  - Health data is sensitive personal data. Interoperability with the Ayushman Bharat Digital Mission (ABDM) requires consent artifacts managed through registered Consent Managers.
- **MeitY GenAI Advisory:**
  - Mandatory disclaimers: The application must clearly state that outputs do not constitute a definitive medical diagnosis and cannot replace certified medical professionals.

### 2.3 Developer Compliance Roadmap for DermAI
1. **Clinical Validation Trials:** Conduct prospective clinical trials across heterogeneous patient cohorts prior to consumer release.
2. **PCCP Implementation:** Freeze model weights in production; implement automated regression testing before pushing model weight updates.
3. **Safety Fallback:** Configure the inference engine to return "Inconclusive / Consult Dermatologist" whenever the model entropy or softmax uncertainty exceeds a conservative threshold ($\tau > 0.15$).

---

## Case Study 3: AI-Powered Student Recruitment & Resume Screening (RecruitAI)

### 3.1 Technical Architecture and System Description
An EdTech startup creates "RecruitAI" to automate candidate screening for graduate engineering hiring:
- **Input Pipeline:** PDF/Word resumes, GitHub profile URLs, LinkedIn summaries, and optional recorded asynchronous video interviews.
- **ML Pipeline:**
  1. *NLP Parsing:* LayoutLMv3 and sentence-transformers parsing text into structured entities (skills, experience, degree, GPA).
  2. *Matching Model:* Bi-encoder transformer architecture measuring semantic similarity between candidate embeddings and job descriptions.
  3. *Video/Audio Scoring:* Speech-to-text transcription paired with sentiment and prosody analysis to evaluate communication clarity.
- **Output:** Numerical employability ranking score (0–100), automated shortlisting/rejection decisions, and auto-generated candidate feedback notes.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                       RECRUITAI SYSTEM ARCHITECTURE & DATA FLOW                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
 [Candidate Resumes / GitHub] ──► [Entity Parsing (NLP)] ──► [Bi-Encoder Transformer]
                                                                     │
                                                                     ▼
 [Shortlist / Rejection] ◄── [Audit & Bias Gate] ◄── [Candidate Match Score 0-100]
```

### 3.2 Cross-Border Regulatory Applicability

#### A. European Union (EU)
- **EU AI Act Classification: HIGH RISK (Annex III, Section 4: Employment, Workers Management, and Access to Self-Employment).**
  - Specifically covers AI systems intended to be used for recruitment or selection of natural persons, notably for placing targeted job advertisements, screening or filtering applications, and evaluating candidates.
  - Developers and deployers must:
    1. Ensure training datasets are statistically representative and scrutinized for historical biases.
    2. Provide full transparency and explainability: rejected candidates have a statutory right to request an explanation of the AI-generated assessment.
    3. Maintain comprehensive audit logs capturing inference inputs and confidence scores.
- **GDPR Article 22 Prohibition:**
  - Candidates have the right not to be subject to a decision based *solely on automated processing* which produces legal effects concerning them. Purely autonomous rejection workflows without human reviewer intervention are illegal.

#### B. United States (US)
- **New York City Local Law 144 (NYC LL 144):**
  - Classifies the software as an **Automated Employment Decision Tool (AEDT)**.
  - Requires mandatory annual independent bias audits evaluating selection rates and impact ratios across race, ethnicity, and sex.
  - Summary audit results must be published publicly on the employer's website. Candidates must receive 10 business days advance notice with an option to request an alternative screening process.
- **Equal Employment Opportunity Commission (EEOC):**
  - Enforces Title VII of the Civil Rights Act of 1964. If the AI system results in a selection rate for any protected demographic group that is less than four-fifths (80%) of the rate for the highest group, the tool violates the **Uniform Guidelines on Employee Selection Procedures (UGESP)** as an unlawful disparate impact.
- **Illinois AI Video Interview Act (820 ILCS 42/):**
  - Explicit candidate consent is required prior to using AI to analyze video interviews, detailing how the AI works and which characteristics are analyzed.

#### C. India
- **Digital Personal Data Protection Act, 2023 (DPDPA):**
  - Resumes contain rich personal data (contact details, address, educational background). Data minimization requires deleting candidate data once the recruitment cycle concludes, unless explicit consent for long-term retention is granted.
- **Constitution of India (Articles 14, 15, and 16):**
  - If deployed by public sector entities or state universities for recruitment, algorithms must adhere to constitutional mandates of equality of opportunity and non-discrimination.
- **MeitY GenAI Advisory (March 2024):**
  - Platforms must ensure algorithmic models do not exhibit bias or discriminate based on religion, race, caste, sex, or place of birth.

### 3.3 Developer Compliance Roadmap for RecruitAI
1. **Bias Metric Integration in CI/CD:** Implement automated calculation of the **Four-Fifths Rule (Disparate Impact Ratio)**:
   $$\text{Impact Ratio} = \frac{\text{Selection Rate}_{\text{protected}}}{\text{Selection Rate}_{\text{unprotected}}} \ge 0.80$$
2. **Feature Sanitization:** Programmatically strip all protected attributes (name, gender, photo, graduation year, postal code) from candidate feature vectors prior to embedding calculation.
3. **Automated Human Review Trigger:** Never allow the algorithm to issue final automated rejections; routes candidate dossiers falling in borderline score brackets ($40 \le \text{Score} \le 70$) to human hiring managers with explainability feature attribution (SHAP/LIME values).

---

### Summary Comparison Table across the Three Case Studies

| Case Study | EU Classification & Status | US Governance Stance | India Regulatory Footprint | Priority Developer Action |
| :--- | :--- | :--- | :--- | :--- |
| **1. Facial Recognition Attendance** | **High Risk** (Annex III) / Prohibited if public space without authorization (Art. 5). | State BIPA laws (IL, TX), FTC enforcement against false claims (*Rite Aid*). | DPDPA 2023 consent; strict §9 minor ban (<18 years); CERT-In 6-hour reporting. | Offer non-biometric alternative; encrypt embeddings; audit false match rates. |
| **2. Medical Diagnosis Mobile App** | **High Risk** (Annex I & III); EU MDR 2017/745 Notified Body approval. | FDA SaMD 510(k) or De Novo clearance; PCCP plans; HIPAA compliance. | CDSCO medical software licensing; ABDM consent; MeitY disclaimer notices. | Clinical validation trials; human-in-the-loop clinical review; uncertainty thresholding. |
| **3. Student Resume Screening** | **High Risk** (Annex III); GDPR Art. 22 ban on purely autonomous rejection. | NYC LL 144 annual bias audit; EEOC Title VII disparate impact enforcement. | DPDPA data minimization; constitutional non-discrimination safeguards. | Feature sanitization; 80% four-fifths rule testing; mandatory human reviewer override. |
