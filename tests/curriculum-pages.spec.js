const { test, expect } = require('@playwright/test');

// Define all Year 7 and Year 8 subjects
const subjects = [
  'mathematics', 'english', 'science', 'computer-science',
  'french', 'german', 'art', 'geography', 'history',
  'pe', 'music', 're', 'design-technology'
];

const years = [7, 8];

// Test suite for each subject and year
for (const year of years) {
  for (const subject of subjects) {
    const pageName = `${subject}-year-${year}`;
    const url = `http://localhost:8234/subjects/${pageName}.html`;

    test.describe(`${subject.toUpperCase()} Year ${year} - Complete Page Tests`, () => {

      test.beforeEach(async ({ page }) => {
        await page.goto(url);
      });

      test('should have correct page title', async ({ page }) => {
        const title = await page.title();
        expect(title).toContain(`Year ${year}`);
      });

      test('should have hero section with navigation', async ({ page }) => {
        // Check for hero/header section
        const hero = page.locator('.hero, .hero-section, [class*="hero"]').first();
        await expect(hero).toBeVisible();

        // Check for term navigation buttons
        await expect(page.locator('a[href="#autumn-term"], a[href="#autumn"]')).toBeVisible();
        await expect(page.locator('a[href="#spring-term"], a[href="#spring"]')).toBeVisible();
        await expect(page.locator('a[href="#summer-term"], a[href="#summer"]')).toBeVisible();
      });

      test('should have AI Tutor section', async ({ page }) => {
        // Check for AI tutor navigation link
        const aiTutorLink = page.locator('a[href="#ai-tutor"]');
        await expect(aiTutorLink).toBeVisible();

        // Navigate to AI tutor section
        await aiTutorLink.click();

        // Check for AI tutor heading
        const aiTutorSection = page.locator('#ai-tutor, [id*="tutor"]');
        await expect(aiTutorSection).toBeVisible();

        // Check for tutor name in heading
        const tutorHeading = page.locator('h2:has-text("AI Tutor"), h2:has-text("Tutor")').first();
        await expect(tutorHeading).toBeVisible();

        // Check for copy button
        const copyButton = page.locator('button:has-text("Copy")').first();
        await expect(copyButton).toBeVisible();
      });

      test('should have Games Programmer section', async ({ page }) => {
        // Check for games programmer navigation link
        const gamesLink = page.locator('a[href="#games-programmer"], a[href="#games"]');
        await expect(gamesLink).toBeVisible();

        // Navigate to games section
        await gamesLink.click();

        // Check for games programmer section
        const gamesSection = page.locator('#games-programmer, #games, [id*="games"]');
        await expect(gamesSection).toBeVisible();

        // Check for games programmer heading
        const gamesHeading = page.locator('h2:has-text("Games"), h2:has-text("Programmer")').first();
        await expect(gamesHeading).toBeVisible();

        // Check for copy button in games section
        const copyButton = page.locator('#games-programmer button:has-text("Copy"), #games button:has-text("Copy")').first();
        await expect(copyButton).toBeVisible();
      });

      test('should have all three term sections', async ({ page }) => {
        // Check Autumn term
        const autumnSection = page.locator('#autumn-term, #autumn, :text("Autumn Term")').first();
        await expect(autumnSection).toBeVisible();

        // Check Spring term
        const springSection = page.locator('#spring-term, #spring, :text("Spring Term")').first();
        await expect(springSection).toBeVisible();

        // Check Summer term
        const summerSection = page.locator('#summer-term, #summer, :text("Summer Term")').first();
        await expect(summerSection).toBeVisible();
      });

      test('should have self-assessment sections with questions', async ({ page }) => {
        // Look for "I can now answer" sections
        const assessmentSections = page.locator(':text("I can now answer")');
        const count = await assessmentSections.count();

        // Should have at least 3 assessment sections (one per term minimum)
        expect(count).toBeGreaterThanOrEqual(3);

        // Check that assessment sections have questions
        const firstAssessment = assessmentSections.first();
        await expect(firstAssessment).toBeVisible();

        // Check for questions (should be list items near assessment heading)
        const questionsNearAssessment = page.locator(':text("I can now answer") ~ ul li, :text("I can now answer") + ul li').first();
        await expect(questionsNearAssessment).toBeVisible();
      });

      test('should have key vocabulary sections', async ({ page }) => {
        // Check for vocabulary sections
        const vocabSections = page.locator(':text("Key Vocabulary"), :text("Vocabulary"), .vocab-section');
        const count = await vocabSections.count();

        // Should have at least one vocabulary section
        expect(count).toBeGreaterThanOrEqual(1);
      });

      test('should have week sections with learning objectives', async ({ page }) => {
        // Check for week sections (e.g., "Weeks 1-7")
        const weekSections = page.locator(':text("Week")');
        const count = await weekSections.count();

        // Should have multiple week sections
        expect(count).toBeGreaterThanOrEqual(6);

        // Check for learning objectives (ul/li structure)
        const objectives = page.locator('ul li').first();
        await expect(objectives).toBeVisible();
      });

      test('should have interactive game integrations or suggestions', async ({ page }) => {
        // Check for game links or game sections
        const gameElements = page.locator('a[href*="games"], :text("Game"), :text("Interactive"), [style*="gradient"]');
        const count = await gameElements.count();

        // Should have at least one game reference
        expect(count).toBeGreaterThanOrEqual(1);
      });

      test('should have skills overview or curriculum journey section', async ({ page }) => {
        // Check for skills section
        const skillsSection = page.locator(':text("Skills"), :text("Journey"), .skills-grid, .skills-overview');
        const count = await skillsSection.count();

        // Should have skills/journey section
        expect(count).toBeGreaterThanOrEqual(1);
      });

      test('should have proper responsive meta viewport', async ({ page }) => {
        const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
        expect(viewport).toContain('width=device-width');
      });

      test('AI Tutor prompt should be copyable and substantive', async ({ page }) => {
        // Navigate to AI tutor section
        await page.locator('a[href="#ai-tutor"]').click();

        // Find the prompt div
        const promptDiv = page.locator('[id*="prompt"], [id*="tutor-prompt"]').first();
        await expect(promptDiv).toBeVisible();

        // Get the text content
        const promptText = await promptDiv.textContent();

        // Should be substantial (at least 500 characters)
        expect(promptText.length).toBeGreaterThan(500);

        // Should contain key curriculum terms
        expect(promptText.toLowerCase()).toContain('year');
        expect(promptText.toLowerCase()).toContain('tutor');
      });

      test('Games Programmer prompt should be copyable and substantive', async ({ page }) => {
        // Navigate to games section
        await page.locator('a[href="#games-programmer"], a[href="#games"]').click();

        // Find the prompt div
        const promptDiv = page.locator('[id*="games"], [id*="prompt"]').last();
        await expect(promptDiv).toBeVisible();

        // Get the text content
        const promptText = await promptDiv.textContent();

        // Should be substantial (at least 300 characters)
        expect(promptText.length).toBeGreaterThan(300);

        // Should contain game-related terms
        expect(promptText.toLowerCase()).toContain('game');
      });

      test('should have assessment questions with 2.2rem font size headings', async ({ page }) => {
        // Check for assessment headings with correct styling
        const assessmentHeading = page.locator('.assessment-heading, h3:has-text("I can now answer")').first();
        await expect(assessmentHeading).toBeVisible();

        // Get computed font size
        const fontSize = await assessmentHeading.evaluate(el => {
          return window.getComputedStyle(el).fontSize;
        });

        // Should be approximately 2.2rem (allowing for some variance in pixel conversion)
        const fontSizeValue = parseFloat(fontSize);
        expect(fontSizeValue).toBeGreaterThan(30); // 2.2rem is typically > 30px
      });

      test('page should be substantial in content', async ({ page }) => {
        // Get all text content
        const bodyText = await page.locator('body').textContent();

        // Should have substantial content (at least 5000 characters)
        expect(bodyText.length).toBeGreaterThan(5000);
      });

    });
  }
}
