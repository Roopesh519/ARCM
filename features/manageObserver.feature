Feature: Manage Observers
    As an admin
    I want to view the list of observers
    So that I can manage them effectively


    # Scenario: Login with valid credentials
    #     Given I am on the login page
    #     When I enter my username as "roopesh.yadava@7edge.com"
    #     And I enter my password as "Admin@1234"
    #     And I click on the "login" button
    #     Then I should see a dialog box to select preference for otp verification
    #     When I click on the "Select Preference" button
    #     And I select my Preference
    #     And I click on the "send" button
    #     Then I see otp verification page
    #     When I enter otp as "981256"
    #     And I click on the "verify otp" button
    #     Then I should see a message Do you want to trust this browser
    #     When I click on the "No, I Don't" button
    #     Then I navigate to profile page
    #     And I should see a message "Login successful"


    # Scenario: Display list of observers
    #     Given I am in my profile page
    #     When I click on manage observer
    #     Then I should see a table with the following columns:
    #         | ID                      |
    #         | Username                |
    #         | First Name              |
    #         | Last Name               |
    #         | Status                  |
    #         | Patient Associated with |
    #         | Sub Division Name       |
    #         | Email Address           |
    #     And the table should display a list of observers


    Scenario Outline: Invalid Search with ID, First Name, Email
        Given I am on the manage observer page
        When I click on "Search" button
        And  I enter text as "<details>"
        Then I should see a message "<message>"

        Examples:
            | details          | message                                               |
            | ORG000000000     | No exact matches found. Please try a different search |
            | unkown@7edge.com | No exact matches found. Please try a different search |
            | unkown           | No exact matches found. Please try a different search |


    Scenario: Filter operation by date
        Given I am on the manage observer page
        When I click on "Filter" button
        Then I should see a pop up window for Filter
        When I enter start date as "Jul 02, 2024"
        And I enter end date as "Jul 03, 2024"
        * I click on "Apply" button
        Then I should see the filter applied 

    
    Scenario: Filter operation by status
        Given I am on the manage observer page
        When I click on "Filter" button
        Then I should see a pop up window for Filter
        When I select status as "<status>"
        And I click on "Apply" button
        Then I should see the filter applied 

        Examples:
        | status   |
        | Active   |
        | Inactive |
