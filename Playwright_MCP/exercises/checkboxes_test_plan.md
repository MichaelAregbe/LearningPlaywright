# Test Plan: Checkboxes Feature

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | Michael |
| **Date** | 2026-06-02 |
| **Environment** | QA |
| **Browser** | Chromium |

---

## 1. Introduction

This test plan describes the testing approach for **Checkboxes Feature**. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core functionality works as expected
- Identify defects before production release
- Ensure user flows are complete and error-free
- Validate UI elements and navigation

## 3. Scope

### In Scope
Test Scope for Checkboxes page.
Checking checkbox 1
Clicking unchecked checkbox 1
Clicking checked checkbox 2 
Clicking unchecked checkbox 2

### Out of Scope
None

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional testing
- **Browser:** Chromium
- **Environment:** QA

### Test Levels
- Smoke Testing (critical paths)
- Functional Testing (all features)
- Negative Testing (invalid inputs, error handling)

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://the-internet.herokuapp.com/checkboxes |

## 6. Test Cases

| TC ID | Title | Steps | Expected |
|-------|-------|-------|----------|
| TC-001 | Verify Checkbox 1 can be checked | 1. Navigate to Base URL<br>2. Click on the unchecked Checkbox 1 | Checkbox 1 is checked |
| TC-002 | Verify Checkbox 1 can be unchecked | 1. Navigate to Base URL<br>2. Click on Checkbox 1 to check it<br>3. Click on the checked Checkbox 1 | Checkbox 1 is unchecked |
| TC-003 | Verify Checkbox 2 can be unchecked | 1. Navigate to Base URL<br>2. Click on the checked Checkbox 2 | Checkbox 2 is unchecked |
| TC-004 | Verify Checkbox 2 can be checked | 1. Navigate to Base URL<br>2. Click on Checkbox 2 to uncheck it<br>3. Click on the unchecked Checkbox 2 | Checkbox 2 is checked |

