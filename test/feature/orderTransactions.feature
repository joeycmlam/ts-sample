Feature: subscription

  Scenario: subscription but direct debit fail
    Given a bank account with 500
    When buy 1000 HKD on JPM Korea Fund at 3:00pm HKT
    Then the subscription is rejected (NIGO).



  Scenario: subscription and direct debit success
    Given a balnk account with 3000 HKD
    When buy 1000 HK on JPM Korea Fund at 3:00pm HKT
    Then
      1) cash deduce 1000 HKD on-hold and cash balance is 2000 HKD
      2) new order transacton with 1000 HKD trading date Today and status = Pending




