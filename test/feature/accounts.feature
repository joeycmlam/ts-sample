# features/accounts.feature
  Feature: Account

    Scenario: get Account status
      Given the account number '2'
      When new created
      Then status = 'Draft'



    Scenario: get all accounts status
      Given the account number
        | A1 |
        | A2 |
        | A3 |
      When new created
      Then status = 'Draft'
