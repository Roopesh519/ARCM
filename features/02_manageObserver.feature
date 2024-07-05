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



    Scenario: Listing All observers
        Given I am on the manage observer page
        Then I should see table header containing:
            | ID                      |
            | Username                |
            | First Name              |
            | Last Name               |
            | Status                  |
            | Patient Associated with |
            | Sub Division Name       |
            | Email Address           |
            | Mobile Number           |
            | Main Number             |
            | Created Date            |
            | Actions                 |


    Scenario: Search for already existing observer with ID
        Given I am on the manage observer page
        When I search for a particular observer with ID
        Then I should see the list of observer with the searched ID

    Scenario: Search for already existing observers with Username
        Given I am on the manage observer page
        When I search for a particular observer with username
        Then I should see the list of observer with the searched username

    Scenario: Search for already existing observer with first name
        Given I am on the manage observer page
        When I search for a particular observer with the first name
        Then I should see the list of observer with the searched firstname


    Scenario Outline: Performing based on ID and Username
        Given I am on the manage observer page
        When I click on sort <sort>
        Then I should see the observer sorted in ascending order based on <sort>
        When I click on sort <sort>
        And I should see the observer sorted in descending order based on <sort>
        Examples:
            | sort       |
            | "ID"       |
            | "Username" |


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


    Scenario Outline: Filter functionality
        Given I am on the manage observer page
        When I click on filter
        When I click on the filter by the <status>
        When I apply the filter for observer
        Then I should see the list of observer with status as <status>

        Examples:
            | status     |
            | "Active"   |
            | "Inactive" |


    Scenario:Filter By Created Date
        Given I am on the manage observer page
        When I click on filter
        When I enter start date and end date
        When I apply the filter for observer
        Then I should see the date filter applied


    #EXPORT
    Scenario: Performing Export
        Given I am on the manage observer page
        When I click on "icon-export" button
        * I click on "Export" button
        Then I should see a message "Observers list exported successfully"







