Feature: Manage Organization Users
    As an admin
    I want to view the list of Organization Users
    So that I can manage them effectively

    Scenario: Navigate to Manage Organization Users
        Given I am on the profile page
        When I click on "Manage Organization Users" button
        Then I navigate to Manage Organization Users page

    Scenario: Display list of Organization Users
        Given I am on the Manage Organization Users page
        Then I should see a table with the following rows:
        | List of Users    | 
        | ID               | 
        | Username         |
        | First Name       | 
        | Last Name        | 
        | Permission       |
        | Status           | 
        | Created Date     |
        | Email Address    | 
        | Main Number      | 
        | Mobile Number    | 
        | Actions          | 
        And The table should display a list of Organization Users
        And I should see a total number of records displayed at the bottom