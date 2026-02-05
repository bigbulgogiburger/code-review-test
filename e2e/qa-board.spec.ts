import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('QA Board', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    // Scroll to QA Board section
    await page.evaluate(() => {
      const qaSection = document.getElementById('qa-board');
      if (qaSection) {
        qaSection.scrollIntoView();
      }
    });
  });

  test('should display QA board title', async ({ page }) => {
    const title = page.locator('text=Q&A 게시판');
    await expect(title).toBeVisible();
  });

  test('should display initial questions', async ({ page }) => {
    const question1 = page.locator('[data-testid="question-1"]');
    const question2 = page.locator('[data-testid="question-2"]');

    await expect(question1).toBeVisible();
    await expect(question2).toBeVisible();
  });

  test('should display question form elements', async ({ page }) => {
    const titleInput = page.locator('[data-testid="question-title-input"]');
    const contentTextarea = page.locator('[data-testid="question-content-textarea"]');
    const submitButton = page.locator('[data-testid="ask-question-button"]');

    await expect(titleInput).toBeVisible();
    await expect(contentTextarea).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('should ask a new question', async ({ page }) => {
    const titleInput = page.locator('[data-testid="question-title-input"]');
    const contentTextarea = page.locator('[data-testid="question-content-textarea"]');
    const submitButton = page.locator('[data-testid="ask-question-button"]');

    // Fill in the question form
    await titleInput.fill('테스트 질문입니다');
    await contentTextarea.fill('이것은 자동화된 테스트 질문입니다');

    // Submit the question
    await submitButton.click();

    // Wait for the new question to appear
    const newQuestion = page.locator('text=테스트 질문입니다');
    await expect(newQuestion).toBeVisible();
  });

  test('should expand and collapse question details', async ({ page }) => {
    const question = page.locator('[data-testid="question-1"]').first();

    // Click to expand
    await question.click();

    // Check if answer section is visible
    const answerSection = page.locator('text=답변');
    await expect(answerSection).toBeVisible();
  });

  test('should add an answer to a question', async ({ page }) => {
    const question = page.locator('[data-testid="question-1"]').first();

    // Expand the question
    await question.click();

    // Find and fill the answer input
    const answerInput = page.locator('[data-testid="answer-input-1"]');
    const submitAnswerButton = page.locator('[data-testid="submit-answer-button-1"]');

    await expect(answerInput).toBeVisible();
    await answerInput.fill('이것은 자동화된 테스트 답변입니다');
    await submitAnswerButton.click();

    // Verify the answer was added
    const newAnswer = page.locator('text=이것은 자동화된 테스트 답변입니다');
    await expect(newAnswer).toBeVisible();
  });

  test('should clear form after submitting question', async ({ page }) => {
    const titleInput = page.locator('[data-testid="question-title-input"]');
    const contentTextarea = page.locator('[data-testid="question-content-textarea"]');
    const submitButton = page.locator('[data-testid="ask-question-button"]');

    // Fill and submit
    await titleInput.fill('다른 테스트 질문');
    await contentTextarea.fill('내용입니다');
    await submitButton.click();

    // Check that form is cleared
    await expect(titleInput).toHaveValue('');
    await expect(contentTextarea).toHaveValue('');
  });

  test('should show answer count for each question', async ({ page }) => {
    const question1 = page.locator('[data-testid="question-1"]');

    // Check that answer count is displayed
    const answerCount = question1.locator('text=답변:');
    await expect(answerCount).toBeVisible();
  });
});
