# Mathematics Year 7 Template - STM College Curriculum Format

This document provides the exact template structure used for the Mathematics Year 7 page, specifically the Autumn Term format. Use this as a reference to create other subject Year 7 pages with consistent styling and structure.

## Complete HTML Structure Template

### 1. Document Head and CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Subject] Year 7 Curriculum - STM College</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #1d1d1f;
            background: #f5f5f7;
        }

        .hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 6rem 2rem 4rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }

        .hero-content p {
            font-size: 1.25rem;
            opacity: 0.9;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .term-navigation {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section {
            background: white;
            margin: 3rem 0;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #1d1d1f;
        }

        .skills-overview {
            margin: 4rem 0;
            text-align: center;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .skill-item {
            background: rgba(59, 130, 246, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: left;
        }

        .skill-item h3 {
            color: #3b82f6;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .term-section {
            background: white;
            margin: 3rem 0;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .term-section h2 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #1d1d1f;
        }

        .week-section {
            margin-bottom: 2rem;
            border: 1px solid #f0f0f0;
            border-radius: 8px;
            overflow: hidden;
        }

        .week-title {
            background: #f8f9fa;
            padding: 1rem 1.5rem;
            font-weight: 600;
            font-size: 1.1rem;
            color: #374151;
            border-bottom: 1px solid #e5e7eb;
        }

        .week-content {
            padding: 1.5rem;
        }

        .week-content ul {
            list-style-type: none;
            padding-left: 0;
        }

        .week-content li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .week-content li::before {
            content: "•";
            color: #3b82f6;
            font-weight: bold;
            position: absolute;
            left: 0;
        }

        .vocab-section {
            margin-top: 1rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
        }

        .vocab-section h4 {
            color: #3b82f6;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .vocab-section p {
            font-size: 0.9rem;
            color: #64748b;
            font-style: italic;
        }

        /* Assessment sections with hover tooltips */
        .assessment-heading {
            position: relative;
            cursor: help;
            transition: all 0.3s ease;
        }

        .assessment-heading:hover {
            transform: translateY(-2px);
        }

        .assessment-heading:hover .assessment-answer {
            display: block !important;
            opacity: 1;
        }

        .assessment-answer {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 2px solid #ec4899;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10;
            opacity: 0;
            transition: opacity 0.3s ease;
            margin-top: 0.5rem;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            .term-navigation {
                flex-direction: column;
                align-items: center;
            }
            .section {
                padding: 2rem 1.5rem;
            }
        }
    </style>
</head>
```

### 2. Hero Section Template
```html
<body>
    <div class="hero-section">
        <div class="hero-content">
            <h1>[Subject] Year 7 Curriculum</h1>
            <p>Comprehensive weekly breakdown of the Year 7 [Subject] curriculum at STM College</p>
        </div>

        <div class="term-navigation">
            <a href="#autumn-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🍂 Autumn Term</a>
            <a href="#spring-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">🌸 Spring Term</a>
            <a href="#summer-term" class="term-nav-btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px);">☀️ Summer Term</a>
            <a href="#ai-tutor" class="term-nav-btn" style="background: rgba(255,255,255,0.3); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.4);">👩‍🏫 AI Tutor - [Tutor Name]</a>
            <a href="#games-programmer" class="term-nav-btn" style="background: rgba(139, 92, 246, 0.9); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3);">🎮 Games - [Games Teacher Name]</a>
        </div>
    </div>
```

### 3. Subject Overview Section
```html
    <div class="container">
        <div class="section">
            <h2>Year 7 [Subject] Journey</h2>
            <p style="font-size: 1.125rem; color: #64748b; margin-bottom: 2rem; line-height: 1.6;">
                [Overview paragraph describing the subject approach and key focuses for Year 7]
            </p>

            <div class="skills-overview">
                <h2 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem; color: #1d1d1f;">Key Skills Development</h2>
                <p style="font-size: 1.125rem; color: #86868b; max-width: 800px; margin: 0 auto 2rem; line-height: 1.5;">
                    [Description of skills being developed throughout the year]
                </p>

                <div class="skills-grid">
                    <div class="skill-item">
                        <h3>[Skill Area 1]</h3>
                        <p>[Description of this skill area and what students will learn]</p>
                    </div>
                    <div class="skill-item">
                        <h3>[Skill Area 2]</h3>
                        <p>[Description of this skill area and what students will learn]</p>
                    </div>
                    <!-- Continue with 6-8 key skills -->
                </div>
            </div>
        </div>
```

### 4. Autumn Term Template (EXACT FORMAT FROM MATHEMATICS)
```html
        <!-- Autumn Term -->
        <div id="autumn-term" class="term-section">
            <h2>🍂 Autumn Term - [Term Focus Title]</h2>

            <div class="week-section">
                <div class="week-title">Weeks 1-7: [First Half Term Topic]</div>
                <div class="week-content">
                    <ul>
                        <li>[Learning objective 1 - what students will learn/do]</li>
                        <li>[Learning objective 2 - specific skills being developed]</li>
                        <li>[Learning objective 3 - understanding they will gain]</li>
                        <li>[Learning objective 4 - applications they will explore]</li>
                        <li>[Learning objective 5 - connections they will make]</li>
                        <li>[Learning objective 6 - problem-solving approaches]</li>
                        <li>[Learning objective 7 - assessment/evaluation skills]</li>
                        <li>[Learning objective 8 - real-world applications]</li>
                    </ul>

                    <!-- Resources section - can include games integration -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0; align-items: start;">
                        <div class="vocab-section">
                            <h4>Key Vocabulary</h4>
                            <p>[Key terms], [Technical vocabulary], [Subject-specific language], [Concept words]</p>
                        </div>

                        <!-- Optional game integration -->
                        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 12px; padding: 1.5rem; color: white; text-align: center;">
                            <h4 style="margin: 0 0 0.75rem 0; font-size: 1.1rem;">🎯 [Game Title]</h4>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; opacity: 0.9;">[Game description matching the topic]</p>
                            <a href="../games/[game-filename].html" target="_blank" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.3);">Play Game →</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="week-section">
                <div class="week-title">Weeks 8-14: [Second Half Term Topic]</div>
                <div class="week-content">
                    <ul>
                        <li>[Learning objective 1 for second half term]</li>
                        <li>[Learning objective 2 - building on previous learning]</li>
                        <li>[Learning objective 3 - new concepts introduced]</li>
                        <li>[Learning objective 4 - practical applications]</li>
                        <li>[Learning objective 5 - assessment preparation]</li>
                        <li>[Learning objective 6 - cross-curricular links]</li>
                        <li>[Learning objective 7 - problem-solving extension]</li>
                        <li>[Learning objective 8 - preparation for next term]</li>
                    </ul>

                    <div class="vocab-section">
                        <h4>Key Vocabulary</h4>
                        <p>[Additional key terms], [Advanced vocabulary], [Technical language], [Assessment terminology]</p>
                    </div>
                </div>
            </div>

            <!-- Self-Assessment Section with EXACT mathematics formatting -->
            <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #fdf2f8, #fef7ff); border-radius: 12px; border-left: 4px solid #ec4899;">
                <h3 style="color: #be185d; margin-bottom: 1rem; font-size: 2.2rem;" class="assessment-heading">
                    I can now answer... 🤔
                    <span class="assessment-answer" style="display: none; font-size: 1rem; color: #333; font-weight: normal; margin-top: 0.5rem;">
                        <strong>Complete answers with explanations:</strong><br>
                        • [Detailed answer to question 1 with explanation]<br>
                        • [Detailed answer to question 2 with explanation]<br>
                        • [Detailed answer to question 3 with explanation]
                    </span>
                </h3>

                <ul style="color: #be185d; margin-left: 1.5rem;">
                    <li>"[Question 1 related to first half term topic]?"</li>
                    <li>"[Question 2 related to second half term topic]?"</li>
                    <li>"[Question 3 connecting both topics or looking forward]?"</li>
                </ul>
            </div>
        </div>
```

## Key Formatting Rules

### 1. Learning Objectives Format
- Always use 8 bullet points per week section
- Start with action verbs (Understand, Develop, Apply, Explore, etc.)
- Progress from basic concepts to applications
- Include real-world connections
- End with preparation for next learning

### 2. Vocabulary Section
- Always include "Key Vocabulary" heading
- Use comma-separated list format
- Include 4-8 key terms per section
- Mix basic and advanced terminology
- Use subject-specific language

### 3. Assessment Questions Format
- Exactly 3 questions per term
- Use quotation marks around questions
- Make questions specific to the term content
- Include hover answers with detailed explanations
- Use bullet points for answers in the hidden span

### 4. Color Scheme
- Autumn sections: Use pink gradient (#fdf2f8 to #fef7ff) with #ec4899 borders
- Assessment headings: #be185d color
- Game boxes: Blue gradient (#3b82f6 to #1d4ed8)
- Skill items: Light blue background (rgba(59, 130, 246, 0.05))

### 5. Typography Rules
- Main headings: 2.5rem, font-weight 700
- Assessment headings: 2.2rem (enlarged from standard)
- Week titles: 1.1rem, font-weight 600
- Body text: Default size with 1.6 line-height
- Vocabulary: 0.9rem, italic, #64748b color

## Usage Instructions

1. **Replace all [placeholders] with subject-specific content**
2. **Maintain exact HTML structure and CSS classes**
3. **Keep the 8-point format for learning objectives**
4. **Use appropriate subject vocabulary in Key Vocabulary sections**
5. **Create subject-relevant assessment questions**
6. **Choose appropriate AI tutor names (avoid duplicating existing ones)**
7. **Maintain consistent color schemes and spacing**

## Example Subject Adaptations

### For Science Year 7 Autumn:
- Term Focus: "Scientific Foundations"
- Weeks 1-7: "Cells and Living Organisms"
- Weeks 8-14: "Forces and Motion"
- Key Vocabulary: "Cell, Organism, Force, Gravity, Friction, Acceleration, Observation, Hypothesis"

### For History Year 7 Autumn:
- Term Focus: "Ancient Civilizations"
- Weeks 1-7: "Stone Age to Bronze Age Britain"
- Weeks 8-14: "Roman Britain and Legacy"
- Key Vocabulary: "Civilization, Archaeology, Empire, Legion, Settlement, Trade, Culture, Evidence"

This template ensures complete consistency with the Mathematics Year 7 format while allowing for subject-specific adaptation.