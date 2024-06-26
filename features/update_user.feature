# This API returns mock data, so it's impossible to create a scenario where we create a user, update the same user, and then verify this user in the user list. 
# Therefore, this scenario only tests updating existing user

Feature: update a user

    Scenario: Successfully update an existing user
        Given check that the user with id 2 exists
        When user with id 2 is updated with the following details
        | name    | John      |
        | job     | QA        |
        Then the user is successfully updated
        And the response contains the following user details
        | name    | John      |
        | job     | QA        |