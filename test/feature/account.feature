# features/accounts.feature
Feature: Account

  Scenario: get Account status
    Given the account number '2'
    When new created
    Then status = 'Draft'

