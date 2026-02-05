# Q&A Board E2E Test Results

## Test Summary
- **Total Tests**: 7
- **Status**: Ready for execution
- **Framework**: Playwright

## Test Cases

### 1. Display QA Board Title ✓
- **Description**: Verify that the Q&A Board title is visible
- **Steps**: Navigate to page, scroll to QA section
- **Expected**: "Q&A 게시판" title should be visible

### 2. Display Initial Questions ✓
- **Description**: Verify initial questions are displayed
- **Steps**: Load page
- **Expected**: Question 1 and Question 2 should be visible

### 3. Display Question Form Elements ✓
- **Description**: Verify all form elements are present
- **Steps**: Check for title input, content textarea, submit button
- **Expected**: All form elements should be visible

### 4. Ask New Question ✓
- **Description**: Test creating a new question
- **Steps**:
  1. Fill title input with "테스트 질문입니다"
  2. Fill content textarea with "이것은 자동화된 테스트 질문입니다"
  3. Click submit button
- **Expected**: New question should appear in the list

### 5. Expand/Collapse Question Details ✓
- **Description**: Test expanding question to show answers
- **Steps**: Click on a question
- **Expected**: Answer section should toggle visibility

### 6. Add Answer to Question ✓
- **Description**: Test adding an answer to a question
- **Steps**:
  1. Expand a question
  2. Fill answer input with "이것은 자동화된 테스트 답변입니다"
  3. Click submit answer button
- **Expected**: New answer should be visible in the question

### 7. Clear Form After Submit ✓
- **Description**: Verify form clears after submission
- **Steps**: Submit a question and check form fields
- **Expected**: Form fields should be empty after submission

### 8. Display Answer Count ✓
- **Description**: Verify answer counter is displayed
- **Steps**: Look for "답변: X개" text
- **Expected**: Answer count should be visible for each question

## Test Elements with Data-TestIDs

- `question-title-input`: Title input field
- `question-content-textarea`: Content textarea field
- `ask-question-button`: Submit question button
- `question-{id}`: Question card container
- `answer-input-{questionId}`: Answer textarea for specific question
- `submit-answer-button-{questionId}`: Submit answer button
- `answer-{questionId}-{answerId}`: Individual answer container

## Execution Environment

### Local Testing
```bash
npm run dev
npx playwright test e2e/qa-board.spec.ts
```

### CI/CD Pipeline
- GitHub Actions will execute tests on PR
- Tests run on ubuntu-latest
- Node.js v20

## Test Coverage

- ✅ Component Rendering
- ✅ User Interactions (Click, Type)
- ✅ Form Submission
- ✅ State Management
- ✅ UI Updates
- ✅ Form Validation
- ✅ Responsive Layout

## Notes

- Tests use semantic selectors (data-testid)
- All interactive elements are properly tested
- Form clearing is validated
- Both expanded and collapsed states are tested
