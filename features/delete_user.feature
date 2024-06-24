Feature: delete a user

    Scenario: Successfully delete an existing user
        Given check that the user with id 1 exists
        When the user with id 1 is deleted
        Then the user is successfully deleted