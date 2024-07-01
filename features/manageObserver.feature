Feature: Manage Observers
    As an admin
    I want to view the list of observers
    So that I can manage them effectively

    Scenario: Navigate to manage observer
        Given I am on the profile page
        When I click on "Manage Observer" button
        Then I navigate to manage observer page

    Scenario: Display list of observers
        Given I am on the manage observer page
        Then I should see a table with the following columns:
        | ID                      |
        | Username                |
        | First Name              |
        | Last Name               |
        | Status                  |
        | Patient Associated with |
        | Sub Division Name       |
        | Email Address           |
        And the table should display a list of observers
        And I should see a total number of records displayed at the bottom
