Feature: get a list of users

    Scenario: Retrieve a list of users without specifying a page number
        When a list of users is requested
        Then a list of users on page 1 is returned

    Scenario: Retrieve a list of users on a specific page number
        When a list of users on page 2 is requested
        Then a list of users on page 2 is returned