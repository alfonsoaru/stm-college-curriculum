# STM College Subject Page Style Guide

This document defines the standardized format and structure for all STM College subject pages to ensure consistency across the curriculum website.

## Reference Implementation

**📋 Primary Example**: `subjects/mathematics-year-7.html` - Use this as the definitive reference for structure, spacing, and formatting when creating new subject pages.

**📋 Secondary Example**: `subjects/english-year-7.html` - Shows adaptation of the standard format with subject-specific content and colors.

## Page Structure Overview

Each subject page follows this exact structure:
1. **Shared Navigation** (iframe)
2. **Hero Section** with subject title, description, and year navigation buttons
3. **Overview Section** with skills grid
4. **Term Sections** (separate container) with detailed curriculum content
5. **FAQ Section** (optional)

## Required Navigation

### Shared Navigation
```html
<iframe src="../shared-nav.html"
        style="width: 100%; height: 70px; border: none; position: sticky; top: 0; z-index: 1000; background: white; display: block;">
</iframe>
```

## 🚨 CRITICAL: Navigation Button Placement Rules

**This is the #1 most important rule for maintaining consistency across all subject pages.**

### Subject Index Pages (e.g., science.html, mathematics.html)
✅ **ONLY Year navigation buttons** go in the hero section:
```html
<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
    <a href="[subject]-year-7.html" class="year-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">[EMOJI] Year 7</a>
    <a href="[subject]-year-8.html" class="year-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">[EMOJI] Year 8</a>
    <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 9</span>
    <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 10</span>
    <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 11</span>
</div>
```

### Year-Specific Pages (e.g., science-year-7.html, mathematics-year-7.html)
✅ **Term navigation + AI Tutor + Games buttons** go in the hero section:
```html
<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
    <a href="#autumn-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🍂 Autumn Term</a>
    <a href="#spring-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🌸 Spring Term</a>
    <a href="#summer-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">☀️ Summer Term</a>
    <a href="#ai-tutor" class="term-nav-btn" style="background: rgba(255,255,255,0.3); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.4);">👩‍🏫 AI Tutor - [Name]</a>
    <a href="#games-programmer" class="term-nav-btn" style="background: rgba(139, 92, 246, 0.9); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3);">🎮 Games - [Name]</a>
</div>
```

❌ **NEVER MIX**: Do not put year buttons on year-specific pages or term/AI buttons on subject index pages.

## AI Tutor & Games Section Format

### Required Structure for Year-Specific Pages
Both AI Tutor and Games sections must follow the exact **term-section** format used in Mathematics Year 7:

```html
<!-- AI Tutor Section -->
<div id="ai-tutor" class="term-section">
    <h2>👩‍🏫 AI [Subject] Tutor - [Tutor Name]</h2>
    <div class="week-section">
        <div class="week-title">Meet Your Personal [Subject] Tutor</div>
        <div class="week-content">
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.6;">Copy and paste the complete prompt below into ChatGPT, Claude, or any AI chatbot to bring [Tutor Name] to life as your personal [subject] tutor, perfectly tailored to the STM College Year 7 curriculum!</p>
            <!-- Clipboard Icon -->
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="font-size: 0.9rem; color: #666; font-weight: 500;">📋 Copy the complete prompt below:</span>
                <button onclick="copyToClipboard('[tutor-prompt-id]')" style="background: [SUBJECT_COLOR]; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 500;">Copy Full Prompt</button>
            </div>
            <div id="[tutor-prompt-id]" style="background: white; border-radius: 8px; padding: 1.5rem; font-family: 'SF Mono', Monaco, monospace; font-size: 0.85rem; line-height: 1.5; white-space: pre-wrap; max-height: 400px; overflow-y: auto; border: 1px solid #e1e5e9; margin-bottom: 1.5rem;">[COMPLETE AI TUTOR PROMPT TEXT]</div>
        </div>
    </div>
</div>

<!-- Games Section -->
<div id="games-programmer" class="term-section">
    <h2>🎮 [Subject] Games Programmer - [Games Developer Name]</h2>
    <div class="week-section">
        <div class="week-title">Meet Your Creative Games Developer</div>
        <div class="week-content">
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.6;">Copy and paste the complete prompt below into ChatGPT, Claude, or any AI chatbot to bring [Games Developer Name] to life as your personal [subject] games programmer, ready to create interactive learning experiences!</p>
            <!-- Clipboard Icon -->
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="font-size: 0.9rem; color: #666; font-weight: 500;">📋 Copy the complete prompt below:</span>
                <button onclick="copyToClipboard('[games-prompt-id]')" style="background: #8b5cf6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 500;">Copy Full Prompt</button>
            </div>
            <div id="[games-prompt-id]" style="background: white; border-radius: 8px; padding: 1.5rem; font-family: 'SF Mono', Monaco, monospace; font-size: 0.85rem; line-height: 1.5; white-space: pre-wrap; max-height: 400px; overflow-y: auto; border: 1px solid #e1e5e9; margin-bottom: 1.5rem;">[COMPLETE GAMES DEVELOPER PROMPT TEXT]</div>
        </div>
    </div>
</div>
```

### Key Styling Requirements

1. **Use `term-section` class**: Maintains consistency with curriculum term sections
2. **Clean prompt box**: White background with monospace font and subtle border
3. **Compact copy button**: Small, inline button matching subject color
4. **Readable typography**: SF Mono font family, 0.85rem size, proper line height
5. **Scrollable content**: 400px max height with vertical scroll for long prompts
6. **Professional spacing**: Consistent padding and margins throughout

### ❌ WRONG Format (Gradient Background)
```html
<!-- DON'T USE THIS - Hard to read -->
<div style="background: linear-gradient(135deg, #colors); color: white; padding: 3rem;">
    <div style="background: rgba(255,255,255,0.95); color: #1d1d1f; padding: 2rem;">
        [Prompt text - hard to read with complex backgrounds]
    </div>
</div>
```

### ✅ CORRECT Format (Clean Term Section)
```html
<!-- USE THIS - Clean and readable -->
<div class="term-section">
    <div class="week-section">
        <div style="background: white; font-family: 'SF Mono', Monaco, monospace;">
            [Prompt text - easy to read and copy]
        </div>
    </div>
</div>
```

## Hero Section Format

### Structure
```html
<div class="hero">
    <h1>[EMOJI] [Subject Name]</h1>
    <p>[Subject description and learning objectives]</p>

    <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        <a href="[subject]-year-7.html" class="year-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">[EMOJI] Year 7</a>
        <a href="[subject]-year-8.html" class="year-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">[EMOJI] Year 8</a>
        <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 9</span>
        <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 10</span>
        <span style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: not-allowed;">[EMOJI] Year 11</span>
    </div>
</div>
```

### Hero CSS Requirements
```css
.hero {
    background: linear-gradient(135deg, [COLOR1], [COLOR2]);
    padding: 5rem 2rem;
    text-align: center;
    color: white;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.003em;
}

.hero p {
    font-size: 1.5rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 400;
}
```

## Subject Color Schemes

| Subject | Primary Color | Secondary Color | Term Header Color |
|---------|---------------|-----------------|-------------------|
| Mathematics | `#3b82f6` | `#93c5fd` | `#3b82f6` |
| English | `#a78bfa` | `#c4b5fd` | `#a78bfa` |
| Science | `#ff6b35` | `#f7931e` | `#ff6b35` |
| Geography | `#06b6d4` | `#67e8f9` | `#06b6d4` |
| History | `#8b4513` | `#cd853f` | `#8b4513` |
| Computer Science | `#95a5a6` | `#7f8c8d` | `#95a5a6` |

## Curriculum Documents Section

### Structure
```html
<div class="container">
    <!-- Curriculum Documents Section -->
    <div class="section">
        <h2>Curriculum Documents</h2>
        <p>Access comprehensive [Subject] curriculum documentation including detailed planning and assessment approaches.</p>
        <div class="documents-grid">
            <div class="document-card">
                <div class="document-title">📅 Long Term Plan</div>
                <div class="document-description">
                    [Description of the long term plan document]
                </div>
                <a href="../stm_curriculum_downloads/[subject]/[filename].pdf" class="download-btn" target="_blank">
                    View Long Term Plan
                </a>
            </div>

            <div class="document-card">
                <div class="document-title">✅ Assessment Information</div>
                <div class="document-description">
                    [Description of assessment framework]
                </div>
                <a href="../stm_curriculum_downloads/[subject]/[filename].pdf" class="download-btn" target="_blank">
                    View Assessment Details
                </a>
            </div>

            <div class="document-card" style="padding: 1rem;">
                <img src="../images/curriculum-arrows/[subject]-arrow-page-1.png"
                     alt="[Subject] Curriculum Pathway"
                     onclick="window.open('../stm_curriculum_downloads/[subject]/[filename].pdf', '_blank')"
                     style="width: 100%; height: auto; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;"
                     onmouseover="this.style.transform='scale(1.02)'; this.style.opacity='0.9';"
                     onmouseout="this.style.transform='scale(1)'; this.style.opacity='1';">
            </div>
        </div>
    </div>
</div>
```

## Year-by-Year Journey Section

```html
<div class="section">
    <h2>Year-by-Year [Subject] Journey</h2>
    <p>Explore detailed curriculum content, learning objectives, and interactive concepts for each year group.</p>

    <div class="year-breakdown">
        <div class="year-card" onclick="window.open('[subject]-year-7.html', '_blank')">
            <h4>Year 7 - [Subtitle]</h4>
            <p>[Description of Year 7 curriculum focus]</p>
            <span class="explore-btn">Explore Year 7 →</span>
        </div>

        <div class="year-card" onclick="window.open('[subject]-year-8.html', '_blank')">
            <h4>Year 8 - [Subtitle]</h4>
            <p>[Description of Year 8 curriculum focus]</p>
            <span class="explore-btn">Explore Year 8 →</span>
        </div>

        <div class="year-card">
            <h4>Year 9 - [Subtitle]</h4>
            <p>[Description of Year 9 curriculum focus]</p>
            <span class="explore-btn">Coming Soon →</span>
        </div>

        <div class="year-card">
            <h4>Year 10 - [Subtitle]</h4>
            <p>[Description of Year 10 curriculum focus]</p>
            <span class="explore-btn">Coming Soon →</span>
        </div>

        <div class="year-card">
            <h4>Year 11 - [Subtitle]</h4>
            <p>[Description of Year 11 curriculum focus]</p>
            <span class="explore-btn">Coming Soon →</span>
        </div>
    </div>
</div>
```

---

# Year 7 Subject Page Style Guide

## Page Structure for Year 7 Pages

### Navigation and Hero
```html
<iframe src="../shared-nav.html"
        style="width: 100%; height: 70px; border: none; position: sticky; top: 0; z-index: 1000; background: white; display: block;">
</iframe>

<div class="hero">
    <h1>[EMOJI] [Subject] Year 7</h1>
    <p>[Year 7 specific description and learning focus]</p>

    <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        <a href="#autumn-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🍂 Autumn Term</a>
        <a href="#spring-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🌸 Spring Term</a>
        <a href="#summer-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">☀️ Summer Term</a>
    </div>
</div>
```

### Required CSS for Term Sections
```css
.term-section {
    margin: 4rem 0;
    background: #ffffff;
    border-radius: 18px;
    padding: 3rem;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.term-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: [SUBJECT_COLOR];
    letter-spacing: -0.003em;
}
```

### Term Section Structure
```html
<!-- Term Sections -->
<div class="container">
    <!-- Autumn Term -->
    <div id="autumn-term" class="term-section">
        <h2>🍂 Autumn Term - [Subtitle]</h2>

        <div class="week-section">
            <div class="week-title">Weeks 1-4: [Topic Name]</div>
            <div class="week-content">
                <ul>
                    <li>[Learning objective 1]</li>
                    <li>[Learning objective 2]</li>
                    <li>[Learning objective 3]</li>
                    <li>[Learning objective 4]</li>
                    <li>[Learning objective 5]</li>
                    <li>[Learning objective 6]</li>
                    <li>[Learning objective 7]</li>
                    <li>[Learning objective 8]</li>
                </ul>

                <div class="vocab-section">
                    <h4>Key Vocabulary</h4>
                    <p><strong>[Category 1]:</strong> [Terms separated by commas]<br>
                    <strong>[Category 2]:</strong> [Terms separated by commas]</p>
                </div>
            </div>
        </div>

        <div class="week-section">
            <div class="week-title">Weeks 5-8: [Topic Name]</div>
            <div class="week-content">
                <ul>
                    <li>[Learning objective 1]</li>
                    <li>[Learning objective 2]</li>
                    <li>[Learning objective 3]</li>
                    <li>[Learning objective 4]</li>
                    <li>[Learning objective 5]</li>
                    <li>[Learning objective 6]</li>
                    <li>[Learning objective 7]</li>
                    <li>[Learning objective 8]</li>
                </ul>

                <div class="vocab-section">
                    <h4>Key Vocabulary</h4>
                    <p><strong>[Category 1]:</strong> [Terms separated by commas]<br>
                    <strong>[Category 2]:</strong> [Terms separated by commas]</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Spring Term -->
    <div id="spring-term" class="term-section">
        <h2>❄️ Spring Term - [Subtitle]</h2>

        [Same structure as Autumn Term with 2 week-sections]
    </div>

    <!-- Summer Term -->
    <div id="summer-term" class="term-section">
        <h2>🌸 Summer Term - [Subtitle]</h2>

        [Same structure as Autumn Term with 2 week-sections]
    </div>
</div>
```

## Content Requirements

### Learning Objectives
- **8 learning objectives per week section** (total of 6 sections per year = 48 objectives)
- Written as clear, actionable statements
- Subject-specific and age-appropriate
- Progressive difficulty throughout the year

### Vocabulary Sections
- **2 categories per vocabulary section**
- **Subject-specific terminology**
- **Terms separated by commas**
- **Bold category headers**

### Term Emojis
- **Autumn Term**: 🍂
- **Spring Term**: ❄️ or 🌸
- **Summer Term**: ☀️ or 🌻

### Week Ranges
- **Autumn**: Weeks 1-4, Weeks 5-8
- **Spring**: Weeks 1-4, Weeks 5-8
- **Summer**: Weeks 1-4, Weeks 5-8

## Subject-Specific Adaptations

### Mathematics
- Focus on mathematical skills and concepts
- Include problem-solving and reasoning
- Reference to sequences, algebra, geometry, etc.

### English
- Focus on reading, writing, speaking, listening
- Include literature, creative writing, language analysis
- Reference to genres, literary devices, etc.

### Science
- Focus on biology, chemistry, physics concepts
- Include practical investigation skills
- Reference to scientific method, experiments, etc.

## Quality Standards

1. **Consistency**: All pages must follow identical structure
2. **Accessibility**: Proper heading hierarchy (h1 > h2 > h3 > h4)
3. **Mobile Responsive**: All elements must work on mobile devices
4. **Color Coordination**: Each subject has consistent color scheme
5. **Content Quality**: All learning objectives must be curriculum-aligned
6. **Navigation**: Term navigation buttons must link to correct anchors
7. **Typography**: Consistent font sizes and spacing throughout

## File Naming Convention

- Main subject page: `[subject].html`
- Year 7 page: `[subject]-year-7.html`
- Year 8 page: `[subject]-year-8.html`
- PDF documents: Follow existing STM folder structure
- Images: `[subject]-arrow-page-1.png` in `images/curriculum-arrows/`

## Testing Checklist

- [ ] Navigation iframe loads correctly
- [ ] All term navigation buttons work (scroll to anchors)
- [ ] Year navigation buttons work (link to year pages)
- [ ] All PDF links work and open in new tab
- [ ] All images load and have proper alt text
- [ ] Mobile responsive design works
- [ ] Color scheme is consistent throughout
- [ ] Typography matches the standard format
- [ ] All sections have proper spacing and layout
- [ ] **Compare side-by-side with `mathematics-year-7.html` to verify identical layout**

## Implementation Notes

When creating new subject pages:

1. **Start with the Mathematics Year 7 template**: Copy `subjects/mathematics-year-7.html` as your base
2. **Replace content systematically**: Update subject name, colors, content while preserving all structure
3. **Validate against the reference**: Load both pages side-by-side to ensure identical formatting
4. **Test all functionality**: Verify navigation, links, and responsive behavior match the reference

The Mathematics Year 7 page represents the "gold standard" - all other subject pages should be visually and structurally indistinguishable when viewed at the same screen size.

---

# Interactive Chemistry Games Style Guide

## Elements & Compound Mixer Game Standards

### Database Requirements
- **35+ GCSE-level compounds** covering all major chemical categories
- **29 elements** in periodic table supporting compound formation
- **British spellings** throughout (sulphate, sulphur, aluminium, fertiliser, colour)
- **Educational information** for each compound with real-world applications

### User Experience Standards
- **Auto-clear functionality**: Selected elements clear when starting new experiment (not timer-based)
- **Proper chemical notation**: All formulas use HTML subscripts (H₂O, CO₂, H₂SO₄)
- **8-element selection limit** to support complex compounds
- **Results persistence**: Compound information stays visible until new selection begins

### Compound Categories Required
1. **Basic Compounds**: H₂O, CO₂, NaCl, CaCO₃, CH₄, NH₃
2. **Strong Acids**: HCl, HNO₃, H₂SO₄
3. **Strong Bases**: NaOH, Ca(OH)₂
4. **Metal Oxides**: CaO, MgO, Fe₂O₃, Al₂O₃, ZnO, CuO, FeO
5. **Non-metal Oxides**: CO, SO₂, SiO₂, N₂O, P₂O₅, NO₂
6. **Halide Salts**: KCl, CaCl₂, MgCl₂, BaCl₂, NaBr, KI, CaBr₂
7. **Sulphate Compounds**: MgSO₄, CuSO₄
8. **Specialist Compounds**: AgNO₃

### British Chemistry Terminology
- **Sulphate** (not Sulfate) - MgSO₄, CuSO₄
- **Sulphur** (not Sulfur) - element name, SO₂
- **Sulphuric Acid** (not Sulfuric) - H₂SO₄
- **Aluminium** (not Aluminum) - element name, Al₂O₃
- **Fertiliser** (not Fertilizer) - compound applications
- **Colour** (not Color) - in descriptions

### Educational Content Standards
Each compound must include:
- **Official name** with British spelling
- **Common name** if applicable (e.g., "Epsom Salt", "Quicklime")
- **Real-world applications** relevant to UK students
- **Safety information** where appropriate
- **Industrial/domestic uses** to show practical relevance

### Technical Implementation
- **HTML subscript formatting**: `formula.replace(/(\d+)/g, '<sub>$1</sub>')`
- **Element clearing logic**: Clear on first new element selection, not timer
- **Compound recognition**: Pattern matching against element counts
- **Responsive design**: Works on desktop, tablet, and mobile devices

---

# British Spelling Standards

## Required UK Spellings for Educational Content

All STM College curriculum content must use British English spellings to align with UK educational standards and GCSE examinations:

### Chemistry-Specific Terms
- **Sulphate** (not Sulfate) - in all compound names
- **Sulphur** (not Sulfur) - element name and descriptions
- **Sulphuric** (not Sulfuric) - acid names
- **Aluminium** (not Aluminum) - element name and compounds
- **Colour** (not Color) - in all descriptions
- **Odour** (not Odor) - in chemical property descriptions

### General Academic Terms
- **Fertiliser** (not Fertilizer) - agricultural applications
- **Realise** (not Realize) - in learning objectives
- **Analyse** (not Analyze) - in assessment criteria
- **Emphasise** (not Emphasize) - in explanations
- **Organisation** (not Organization) - in content structure
- **Behaviour** (not Behavior) - in science contexts
- **Centre** (not Center) - in geographical references
- **Metre/Litre** (not Meter/Liter) - in measurement units

### Quality Assurance
- **Content Review**: All educational materials must be checked for American spellings
- **Student Familiarity**: Use terminology students recognise from UK textbooks and exams
- **Exam Preparation**: Align with spelling conventions used in GCSE papers
- **Professional Standards**: Maintain consistency with UK educational publications