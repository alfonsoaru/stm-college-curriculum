# Parkour Quiz Game Template

A side-scrolling endless runner game mechanic with integrated quiz questions. Players run, jump, and collect items while answering subject questions to earn extra lives.

## Game Concept

- **Endless runner** with obstacles to dodge
- **Questions always visible** at top of screen - never interrupts gameplay
- **Answer correctly = +1 life** (reward learning)
- **Answer wrong = hear correct answer** (teaches through feedback)
- **Text-to-speech** reads questions and answers aloud
- **Multi-input support**: Keyboard, Touch, Xbox Controller

## How It Works

1. Player runs automatically through themed environment
2. Press SPACE/Trigger to jump over obstacles
3. Collect items (croissants, coins, etc.) for bonus points
4. Questions appear at top - answer with A/B/C/D or controller buttons
5. Complete 3 levels to win (each level = reach checkpoint distance)
6. Lose all lives = game over

## Files

- `paris_parkour_french_year8.html` - French language version (reference implementation)

## Customizing for Other Subjects

### 1. Theme & Visuals

Change these elements for different subjects:

```javascript
// Background theme
function drawBackground() {
    // Modify colors, scenery (Eiffel Tower → Big Ben, Pyramids, etc.)
}

// Collectibles - change emoji
function spawnCroissant() {
    // 🥐 → 🧪 (science), 📚 (english), ⚽ (PE), 🎵 (music)
}

// Obstacles - change emoji array
const types = [
    { width: 40, height: 50, emoji: '🥖' }, // Change to subject-themed
    { width: 50, height: 40, emoji: '🚲' },
    // etc.
];
```

### 2. Questions Format

Questions are stored in an array. Each question needs:

```javascript
const questions = [
    {
        text: "The question text shown to player",
        context: "Hint or topic shown below question",
        answers: ["Correct Answer", "Wrong 1", "Wrong 2", "Wrong 3"],
        correct: 0, // Index of correct answer (0 = first answer)
        explanation: "Explanation read aloud when wrong"
    },
    // Add more questions...
];
```

### 3. Text-to-Speech Languages

The game auto-detects language for TTS. Modify detection for your subject:

```javascript
// French detection
const isFrench = /^(Je |J'|Nous |Elle |Il |Tu |On |Vous |s'|se )/.test(text) ||
               /[éèêëàâäùûüôöîïç]/.test(text);

// German detection (example)
const isGerman = /^(Ich |Du |Er |Sie |Wir |Ihr )/.test(text) ||
                /[äöüßÄÖÜ]/.test(text);

// Spanish detection (example)
const isSpanish = /^(Yo |Tú |Él |Ella |Nosotros )/.test(text) ||
                 /[áéíóúñ¿¡]/.test(text);
```

Change language codes:
- French: `'fr-FR'`
- German: `'de-DE'`
- Spanish: `'es-ES'`
- Italian: `'it-IT'`

### 4. For Non-Language Subjects

For subjects like Maths, Science, History - use English TTS throughout:

```javascript
// In readQuestionAndAnswers(), set all to English:
utterance.lang = 'en-GB';
if (englishVoice) utterance.voice = englishVoice;
```

### 5. Difficulty Settings

```javascript
// Starting speed (lower = easier)
let baseSpeed = 4;

// Checkpoint distance (higher = longer levels)
let checkpointDistance = 22000;

// Obstacle frequency (higher = fewer obstacles)
const obstacleFreq = Math.max(80, 180 - gameSpeed * 15);

// Speed increase over time
gameSpeed = Math.min(baseSpeed + 5, baseSpeed + (distance / 5000));
```

## Controls Reference

### Keyboard
| Key | Action |
|-----|--------|
| SPACE | Jump |
| A | Answer A |
| B | Answer B |
| C | Answer C |
| D | Answer D |

### Xbox Controller
| Button | Action |
|--------|--------|
| RT/LT | Jump |
| X | Answer A |
| Y | Answer B |
| A | Answer C |
| B | Answer D |

### Touch
| Action | Result |
|--------|--------|
| Tap screen | Jump |
| Tap answer button | Select answer |

## Creating a New Subject Version

1. **Copy** `paris_parkour_french_year8.html`
2. **Rename** to `[theme]_[subject]_year[X].html` (e.g., `london_english_year8.html`)
3. **Update title** and theme colors in CSS
4. **Replace questions array** with subject-appropriate content
5. **Modify TTS detection** for the language/subject
6. **Change collectible/obstacle emojis** to match theme
7. **Update background graphics** (buildings, landmarks, etc.)
8. **Adjust difficulty** as needed

## Example Themes by Subject

| Subject | Theme | Collectible | Obstacles | Landmark |
|---------|-------|-------------|-----------|----------|
| French | Paris | 🥐 Croissant | 🥖🚲🐕 | Eiffel Tower |
| German | Berlin | 🥨 Pretzel | 🚗🍺🐕 | Brandenburg Gate |
| Spanish | Madrid | 🌮 Taco | 🐂💃🚕 | Plaza Mayor |
| History | Medieval | 👑 Crown | ⚔️🏰🐴 | Castle |
| Science | Lab | 🧪 Beaker | ☢️🔬💥 | Laboratory |
| Maths | Space | ⭐ Star | 🌑☄️🛸 | Rocket |
| English | London | 📚 Book | 🚕☔🎩 | Big Ben |
| Geography | World | 🌍 Globe | 🌋🌊⛰️ | Mountains |
| Music | Concert | 🎵 Note | 🥁🎸🎹 | Stage |
| PE | Stadium | 🏆 Trophy | 🏃⚽🏀 | Stadium |

## Key Features

- **Non-interruptive questions** - gameplay never stops for questions
- **Audio accessibility** - all questions/answers read aloud
- **Multi-input** - keyboard, touch, and gamepad support
- **Reward learning** - correct answers give extra lives
- **Teach on mistakes** - wrong answers speak the correct answer
- **Progressive difficulty** - speed increases over time and levels
- **Chrome TTS compatible** - uses Web Speech API

## Tips

1. Keep questions short - players are multitasking
2. Use 4 answers max - matches controller buttons
3. Make wrong answers plausible - promotes thinking
4. Include explanations - turns mistakes into learning
5. Test TTS pronunciation - some words may need adjustment
6. Balance difficulty - too hard = frustration, too easy = boring
