# STM College Curriculum Website Project

## Overview
This project contains a comprehensive Apple-style HTML curriculum interface for St Thomas More RC College. The website displays curriculum information for all subjects with a focus on Year 7 detailed pages and interactive learning features.

## Project Structure

### 📁 Main Files
- `index.html` - Main subject overview interface with Apple-style design
- `subjects/` - Individual subject pages and Year 7 detailed curriculum pages
- `games/` - Interactive mathematics learning games
- `images/curriculum-arrows/` - Converted PNG curriculum arrows
- `stm_curriculum_downloads/` - Original scraped curriculum documents

### 🎯 Year 7 Curriculum Pages
Complete Year 7 curriculum implementation with detailed weekly breakdowns for:
- Mathematics, English, Science, Computer Science
- French, German, Art, Geography, History
- PE, Music, RE, Design & Technology

## Subject Year Page Template Structure

### 1. Header Section
```html
<div class="hero-section">
    <div class="hero-content">
        <h1>[Subject] Year 7 Curriculum</h1>
        <p>Comprehensive weekly breakdown of the Year 7 [Subject] curriculum</p>
    </div>

    <!-- Navigation buttons -->
    <div class="term-navigation">
        <a href="#autumn-term">🍂 Autumn Term</a>
        <a href="#spring-term">🌸 Spring Term</a>
        <a href="#summer-term">☀️ Summer Term</a>
        <a href="#ai-tutor">👩‍🏫 AI Tutor - [Teacher Name]</a>
        <a href="#games-programmer">🎮 Games - [Games Teacher Name]</a>
    </div>
</div>
```

### 2. Curriculum Overview Section
```html
<div class="section">
    <h2>Year 7 [Subject] Journey</h2>
    <p>Overview paragraph describing the subject approach</p>

    <!-- Skills overview with cards -->
    <div class="skills-overview">
        <div class="skills-grid">
            <div class="skill-item">
                <h3>Skill Area</h3>
                <p>Description of skill development</p>
            </div>
            <!-- Repeat for 6-8 key skills -->
        </div>
    </div>
</div>
```

### 3. Term Sections (Autumn, Spring, Summer)
```html
<div id="autumn-term" class="term-section">
    <h2>🍂 Autumn Term - [Term Focus]</h2>

    <div class="week-section">
        <div class="week-title">Weeks 1-7: [Topic Area]</div>
        <div class="week-content">
            <ul>
                <li>Learning objective 1</li>
                <li>Learning objective 2</li>
                <!-- Continue with 6-8 objectives -->
            </ul>

            <!-- Resources section with games integration -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div class="vocab-section">
                    <h4>Key Vocabulary</h4>
                    <p>Key terms, Technical terms, Subject vocabulary</p>
                </div>

                <!-- Game integration example -->
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 12px; padding: 1.5rem; color: white; text-align: center;">
                    <h4>🎯 Interactive Game Title</h4>
                    <p>Game description</p>
                    <a href="../games/game-file.html" target="_blank">Play Game →</a>
                </div>
            </div>
        </div>
    </div>

    <div class="week-section">
        <div class="week-title">Weeks 8-14: [Second Topic Area]</div>
        <!-- Similar structure -->
    </div>
</div>
```

### 4. Self-Assessment Sections
```html
<div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #fdf2f8, #fef7ff); border-radius: 12px; border-left: 4px solid #ec4899;">
    <h3 style="color: #be185d; margin-bottom: 1rem; font-size: 2.2rem;" class="assessment-heading">
        I can now answer... 🤔
        <span class="assessment-answer" style="display: none; font-size: 1rem; color: #333; font-weight: normal; margin-top: 0.5rem;">
            Complete answer with explanations
        </span>
    </h3>

    <ul style="color: #be185d; margin-left: 1.5rem;">
        <li>"Question 1?"</li>
        <li>"Question 2?"</li>
        <li>"Question 3?"</li>
    </ul>
</div>
```

### 5. AI Tutor Section Template
```html
<!-- AI Tutor - [Teacher Name] -->
<div id="ai-tutor" class="section" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%); margin: 4rem 0; padding: 3rem 2rem; border-radius: 20px; border: 1px solid rgba(59, 130, 246, 0.1);">
    <h2>👩‍🏫 AI Tutor - [Teacher Name] ([Subject] Specialist)</h2>

    <div style="max-width: 900px; margin: 0 auto;">
        <div style="background: rgba(59, 130, 246, 0.05); border-radius: 15px; padding: 2rem; margin-bottom: 2rem; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.3rem;">🚀 Quick Start</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Copy and paste the complete prompt below into ChatGPT, Claude, or any AI chatbot to bring [Teacher Name] to life as your personal [subject] tutor!</p>
        </div>

        <!-- Expandable prompt section -->
        <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 1px solid #e1e5e9;">
            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 1rem;">
                <h4 style="color: #1d1d1f; margin: 0;">📋 [Teacher Name] - Complete System Prompt</h4>
                <button onclick="copy[TeacherName]Prompt()" style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; font-weight: 500;">Copy to Clipboard</button>
            </div>

            <div id="[teacher-id]-prompt" style="background: white; border-radius: 8px; padding: 1.5rem; font-family: 'SF Mono', Monaco, monospace; font-size: 0.85rem; line-height: 1.5; white-space: pre-wrap; max-height: 400px; overflow-y: auto; border: 1px solid #e1e5e9; margin-bottom: 1.5rem;">
                [Complete AI tutor system prompt here]
            </div>

            <div style="background: rgba(34, 197, 94, 0.05); border-radius: 8px; padding: 1rem; border-left: 3px solid #22c55e;">
                <p style="font-size: 0.9rem; color: #1d1d1f; margin-bottom: 1rem;"><strong>💡 How to use:</strong> Copy the complete prompt above and paste it into ChatGPT, Claude, or any AI chatbot. [Teacher Name] will come to life as your [subject] tutor!</p>
            </div>
        </div>
    </div>
</div>
```

### 6. Games Programmer Section Template
```html
<!-- Games Programmer - [Games Teacher Name] -->
<div id="games-programmer" class="section" style="background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #faf5ff 100%); margin: 4rem 0; padding: 3rem 2rem; border-radius: 20px; border: 1px solid rgba(139, 92, 246, 0.1);">
    <h2>🎮 [Games Teacher Name] - Specialist [Subject] Games Programmer</h2>

    <div style="max-width: 900px; margin: 0 auto;">
        <div style="background: rgba(139, 92, 246, 0.05); border-radius: 15px; padding: 2rem; margin-bottom: 2rem; border-left: 4px solid #8b5cf6;">
            <h3 style="color: #7c3aed; margin-bottom: 1rem; font-size: 1.3rem;">🎯 Game Creation Specialist</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">AI specialist in creating interactive HTML games for [Subject]. Perfect for ChatGPT Canvas and Claude Artifacts!</p>
        </div>

        <!-- Games prompt section -->
        <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 1px solid #e1e5e9;">
            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 1rem;">
                <h4 style="color: #1d1d1f; margin: 0;">🎮 [Games Teacher Name] - Games Programming Prompt</h4>
                <button onclick="copy[GamesTeacherName]Prompt()" style="background: #8b5cf6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; font-weight: 500;">Copy Games Prompt</button>
            </div>

            <div id="[games-teacher-id]-prompt" style="background: white; border-radius: 8px; padding: 1.5rem; font-family: 'SF Mono', Monaco, monospace; font-size: 0.85rem; line-height: 1.5; white-space: pre-wrap; max-height: 400px; overflow-y: auto; border: 1px solid #e1e5e9; margin-bottom: 1.5rem;">
                [Complete games programmer system prompt here]
            </div>

            <div style="background: rgba(139, 92, 246, 0.05); border-radius: 8px; padding: 1rem; border-left: 3px solid #8b5cf6;">
                <p style="font-size: 0.9rem; color: #1d1d1f; margin-bottom: 1rem;"><strong>🎮 How to use:</strong> Copy the games programmer prompt above and paste it into ChatGPT Canvas or Claude Artifacts. [Games Teacher Name] will create interactive HTML [subject] games!</p>
            </div>
        </div>
    </div>
</div>
```

## Current AI Tutor Names by Subject

### Mathematics Year 7
- **AI Tutor**: Mrs Mathews
- **Games Programmer**: Mrs Velvet

### English Year 7
- **AI Tutor**: Ms Wordsworth
- **Games Programmer**: Ms Shakespeare

### German Year 7
- **AI Tutor**: Frau Schmidt
- **Games Programmer**: Herr Spielmeister

### Science Year 7
- **AI Tutor**: Dr. Newton
- **Games Programmer**: (To be added)

## CSS Classes Used

### Key Styling Classes
- `.hero-section` - Main header with gradient background
- `.term-section` - Individual term containers
- `.week-section` - Weekly curriculum blocks
- `.vocab-section` - Key vocabulary boxes
- `.skills-grid` - Overview skills layout
- `.assessment-heading` - Self-assessment headers (2.2rem font-size)
- `.assessment-answer` - Hidden answer tooltips

### Interactive Features
- Hover effects on assessment questions revealing answers
- Copy-to-clipboard functionality for AI prompts
- Modal systems for curriculum arrow viewing
- Responsive grid layouts for games integration

## Game Integration Pattern

Games are integrated using a 2-column grid system:
- Left column: Traditional content (vocabulary, resources)
- Right column: Interactive game with gradient background and call-to-action button

Each game uses distinct gradient colors:
- Blue gradient: Algebra/Logic games
- Green gradient: FDP/Number games
- Orange gradient: Real-world application games

## Files Currently Implemented

### Year 7 Detailed Pages (13 subjects)
- `mathematics-year-7.html` - With integrated maths games
- `english-year-7.html` - With Ms Wordsworth/Ms Shakespeare
- `science-year-7.html` - With Dr Newton
- `computer-science-year-7.html` - With Code Runner & Algorithm Detective
- `french-year-7.html` - With Paris Metro Runner
- `german-year-7.html` - With Munich Runner
- `art-year-7.html` - With Gallery Dash
- `geography-year-7.html` - With Map Explorer
- `history-year-7.html` - With Medieval Runner
- `pe-year-7.html` - With Sports Sprint
- `music-year-7.html` - With Rhythm Runner
- `re-year-7.html` - With Faith Explorer
- `design-technology-year-7.html` - With Workshop Runner

### Year 8 Detailed Pages (13 subjects)
- `mathematics-year-8.html` - With Equation Runner & Algebra Balance
- `english-year-8.html` - With Shakespeare Literary Quest
- `science-year-8.html` - With Atom Runner, Periodic Table Builder, Genetics Memory
- `computer-science-year-8.html` - With Cyber Runner
- `french-year-8.html` - With Paris Parkour, Cote d'Azur Runner, Identity Creator
- `german-year-8.html` - With Berlin Runner
- `art-year-8.html` - With Art Movement Runner
- `geography-year-8.html` - With Plate Tectonics Challenge
- `history-year-8.html` - With Tudor Timeline Challenge
- `pe-year-8.html` - With Fitness Challenge
- `music-year-8.html` - With Melody Master
- `re-year-8.html` - With Ethics Quest
- `design-technology-year-8.html` - With Maker Dash

### Subject Overview Pages
- `mathematics.html`
- `english.html`
- `science.html`
- `computer-science.html`
- `french.html`
- `german.html`

### Interactive Games (41 total)

#### Mathematics Games
- `games/algebra_treasure_hunt (1).html` - Year 7
- `games/fdp_quiz_challenge_year_7_single_file_html.html` - Year 7
- `games/percentage_detective_game.html` - Year 7
- `games/number_ninja_maths_year7.html` - Year 7 Parkour
- `games/algebra_equation_balance_year8.html` - Year 8
- `games/maths_equation_runner_year8.html` - Year 8 Parkour

#### English Games
- `games/romeo_juliet_character_quest.html`
- `games/literary_device_explorer_year7.html` - Year 7
- `games/story_structure_builder_year7.html` - Year 7
- `games/london_library_english_year7.html` - Year 7 Parkour
- `games/shakespeare_literary_quest_year8.html` - Year 8 Parkour

#### Science Games
- `games/cell_structure_explorer_year7.html` - Year 7
- `games/elements_compound_mixer_year7.html` - Year 7
- `games/lab_runner_science_year7.html` - Year 7 Parkour
- `games/periodic_table_builder_year8.html` - Year 8
- `games/genetics_memory_match_year8.html` - Year 8
- `games/atom_runner_science_year8.html` - Year 8 Parkour

#### Computer Science Games
- `games/code_runner_cs_year7.html` - Year 7 Parkour (E-Safety)
- `games/algorithm_detective_year7.html` - Year 7 Space Shooter (Algorithms)
- `games/cyber_runner_cs_year8.html` - Year 8 Parkour

#### French Games
- `games/paris_metro_french_year7.html` - Year 7 Parkour
- `games/paris_parkour_french_year8.html` - Year 8 Parkour
- `games/cote_azur_runner_french_year8.html` - Year 8 Parkour
- `games/french_verb_master_year8.html` - Year 8
- `games/french_identity_creator_year8.html` - Year 8

#### German Games
- `games/munich_runner_german_year7.html` - Year 7 Parkour
- `games/berlin_runner_german_year8.html` - Year 8 Parkour

#### Other Subject Games
- `games/gallery_dash_art_year7.html` - Art Year 7 Parkour
- `games/art_movement_runner_year8.html` - Art Year 8 Parkour
- `games/map_explorer_geography_year7.html` - Geography Year 7 Parkour
- `games/plate_tectonics_challenge_year8.html` - Geography Year 8
- `games/medieval_runner_history_year7.html` - History Year 7 Parkour
- `games/tudor_timeline_challenge_year8.html` - History Year 8
- `games/rhythm_runner_music_year7.html` - Music Year 7 Parkour
- `games/melody_master_music_year8.html` - Music Year 8 Parkour
- `games/sports_sprint_pe_year7.html` - PE Year 7 Parkour
- `games/fitness_challenge_pe_year8.html` - PE Year 8 Parkour
- `games/faith_explorer_re_year7.html` - RE Year 7 Parkour
- `games/ethics_quest_re_year8.html` - RE Year 8 Parkour
- `games/workshop_runner_dt_year7.html` - D&T Year 7 Parkour
- `games/maker_dash_dt_year8.html` - D&T Year 8 Parkour

## Game Types

### Parkour Runner Games
Side-scrolling endless runner format with:
- Character runs automatically, player jumps over obstacles
- Questions appear as checkpoints with A/B/C/D answers
- TTS reads questions and answers aloud
- English translations shown for language games
- "Next question!" speech between questions
- Q1/12 progress tracking
- Keyboard (Space/ABCD) and Gamepad support
- Subject-themed visuals and obstacles

### Space Shooter Games (Cosmic Scholar format)
Top-down space shooter format with:
- Pilot ship collecting orbs and shooting asteroids
- "Knowledge bar" fills to trigger quiz questions
- A/B/C/D answer buttons with TTS
- Sound effects (Web Audio API)
- Warp animation on correct answers
- Multiple levels/cases to complete

## Design Principles

### Apple-Style Aesthetics
- Clean white backgrounds with subtle gradients
- SF Pro font family throughout
- Consistent 12px border-radius for modern look
- Subtle shadows and hover effects
- Professional color palette with subject-specific accents

### Responsive Design
- Mobile-first approach with grid layouts
- Touch-friendly buttons and interactive elements
- Collapsing navigation for smaller screens
- Optimized typography scaling

### Educational Focus
- Clear learning objectives and outcomes
- Progressive skill development tracking
- Interactive self-assessment tools
- Integrated multimedia learning resources
- Real curriculum alignment with STM College standards

## Usage Notes

### For Adding New Year 7 Pages
1. Follow the template structure above
2. Choose appropriate AI tutor names (avoid duplicating existing names)
3. Integrate games using the 2-column grid pattern
4. Ensure mobile responsiveness
5. Include all required sections: terms, assessment, AI tutors

### For Game Integration
1. Place games in `/games/` folder
2. Use descriptive filenames
3. Link using relative paths: `../games/filename.html`
4. Open in new tabs with `target="_blank"`
5. Use appropriate gradient colors for subject theming

This documentation provides the complete template structure for maintaining consistency across all Year 7 curriculum pages in the STM College website.