# If this API provides an error when a user doesn't specify a name or job, then it would be possible to check for that as wel

Feature: create a user

    Scenario: Successfully create a new user
        When a user is created with the following details
        | name    | John      |
        | job     | Developer |
        Then the user is successfully created
        And the response contains the following user details
        | name    | John      |
        | job     | Developer |