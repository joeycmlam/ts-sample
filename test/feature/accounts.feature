# features/accounts.feature
Feature: Accounts


  Scenario: get all accounts status
    Given the account number
      | A1 |
      | A2 |
      | A3 |
    When new created
    Then status = 'Draft'
