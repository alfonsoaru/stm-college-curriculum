# STM College Curriculum AI Ethics & Governance Policy

This policy defines how STM College Curriculum content that references or enables AI use is governed in line with ISO/IEC 42001, EU AI Act principles, GDPR, and emerging U.S. AI/consumer privacy laws. It applies to all AI-related guidance, prompts, or interactive features in this repository.

## 1) Principles
- **Safety & fitness for purpose:** AI-related prompts are educational, age-appropriate, and avoid harmful content.
- **Transparency & explainability:** AI-enabled sections clearly indicate when AI is suggested and how prompts are intended to be used.
- **Privacy & data minimisation (GDPR/CCPA/FERPA-aligned):** Users must avoid entering personal data; no personal data is stored by this repository.
- **Fairness & inclusion:** Materials should avoid discriminatory language and support accessible, inclusive learning.
- **Human oversight:** Educators remain accountable for AI use; AI outputs must be reviewed before classroom use.
- **Security & provenance:** Content should be version-controlled, with dependencies tracked and code reviewed.
- **Academic integrity:** AI outputs must be cited and validated; AI should supplement—not replace—learning.

## 2) Governance & roles
- **AI Steward:** Maintains this policy and the component/risk registers; coordinates updates during releases.
- **Data Protection Contact:** Reviews privacy impacts and GDPR alignment when prompts or data pathways change.
- **Curriculum Owners:** Validate educational suitability, accessibility, and accuracy before publishing AI prompts.
- **Engineering/QA:** Ensure automated checks (e.g., Playwright tests) cover AI tutor sections and that changes are peer-reviewed.

## 3) Data handling expectations
- No user data is collected or persisted by this static site; any AI interaction occurs in external tools (e.g., ChatGPT/Claude) using copied prompts.
- Users must **not** input student personal data or sensitive attributes into third-party AI tools unless a separate DPIA/contract covers it.
- Default stance: zero retention, zero profiling, zero automated decision-making about individuals by this project.
- Current materials are **general-purpose prompts** intended for human-supervised use and are treated as **limited-risk** (EU AI Act) educational aids; any future high-risk functionality (e.g., automated assessment) requires prior reclassification and controls.

## 4) AI component register
| Component | Purpose | Location(s) | Inputs/Outputs | Data & Model Dependence | Risk Level | Controls/Status |
| --- | --- | --- | --- | --- | --- | --- |
| AI tutor sections | Provide copy-paste tutor prompts for each subject/year page | `subjects/*-year-7.html`, `subjects/*-year-8.html` | Input: user-supplied prompt text into external AI chatbots. Output: tutoring responses from external models. | No models hosted; relies on third-party AI selected by user. No personal data required. | Medium (content accuracy, misuse) | Clear instructions near prompts; human-in-the-loop review; ensure age-appropriate tone; limit to curriculum topics. |
| AI games/programmer prompts | Suggest prompts for AI-assisted game prototyping | Same subject pages as above | Input: prompt text; Output: code or game ideas from external models. | Third-party AI only; no local execution. | Medium (safety, copyright) | Emphasise educational scope; review prompts for safety/IP; discourage uploading sensitive data. |
| AI tutor template guidance | Standard layout for AI tutor sections | `CLAUDE.md`, `mathematics-year-7-template.md`, `subjectstyle.md` | Input: maintainers author prompts/templates; Output: consistent AI sections. | No runtime AI; governs authoring. | Low | Template controls and editorial review before publishing. |
| Navigation/tests referencing AI | Automated checks to ensure AI sections are present | `tests/curriculum-pages.spec.js` | Input: Playwright navigation; Output: test pass/fail. | No user data; local dev only. | Low | Tests run in CI/local; no external AI calls. |

## 5) Risk register (ISO/IEC 42001 aligned)
| Risk | Description & Impact | Controls | Owner | Status |
| --- | --- | --- | --- | --- |
| Privacy leakage via prompts | Users might paste personal data into third-party AI tools. | Prominent guidance to avoid personal data; DPIA/contract required for any identified data processing use case. | Data Protection Contact | Open/monitor |
| Misinformation or unsafe advice | AI outputs may be inaccurate or inappropriate for minors. | Human review of prompts; educators validate outputs; restrict prompts to curriculum topics; periodic content audits. | Curriculum Owners | Open/mitigated |
| Bias or exclusion | AI outputs may reinforce stereotypes. | Inclusive language review; encourage educators to screen AI outputs; update prompts if bias found. | Curriculum Owners | Open/monitor |
| IP/copyright reuse | AI may generate copyrighted material. | Guidance to attribute sources; require educator review; avoid verbatim reproduction without permission. | AI Steward | Open/monitor |
| Overreliance/academic integrity | Students may bypass learning by using AI answers directly. | Encourage reflective use; include academic honesty reminders; design activities requiring human reasoning. | Educators | Open/mitigated |
| Third-party AI changes/outages | External AI behaviour or availability may change. | Keep prompts evergreen; document third-party reliance; provide fallback teaching materials. | AI Steward | Open/monitor |

## 6) Lifecycle controls
- **Change management:** AI-related content changes require review for safety, privacy, and accessibility; document updates in commit history and this register when scope changes.
- **Risk assessments:** For any new AI functionality (e.g., hosted inference, data collection), complete an AI risk/DPIA, classify per EU AI Act risk tiers, and document mitigations before release.
- **Supplier oversight:** Use third-party AI only with acceptable terms, security, and data-protection guarantees; maintain records of providers and configurations if/when specified.
- **Monitoring & logging:** Track issues via repository tickets; capture test results (e.g., Playwright) and incident reports for auditability.
- **Incident response:** If AI guidance is found harmful or privacy-impacting, remove or revise content, notify stakeholders, and record corrective actions.
- **Training & awareness:** Contributors should understand this policy and relevant regulations (ISO/IEC 42001, GDPR, EU/US AI acts) before editing AI prompts.

## 7) User guidance (to be echoed near AI prompts)
- Use AI outputs as study aids; verify accuracy against curriculum resources.
- Do not share personal or student-identifying information with external AI tools.
- Cite AI assistance when used in assignments; prefer human reasoning and discussion.

## 8) Review cadence
- **Quarterly** policy and register review, or sooner after significant AI-related changes.
- Document decisions and residual risks in version control; update this file when components, risks, or controls change.
