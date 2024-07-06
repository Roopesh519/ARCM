Feature: Manage Organization Users
    As an admin
    I want to view the list of Organization Users
    So that I can manage them effectively

    #    Scenario: Login with valid credentials
    #     Given I am on the login page
    #     When I enter my username as "rahul.mallya@7edge.com"
    #     * I enter my password as "Admin@1234"
    #     * I click on the "login" button
    #     Then I should see a dialog box to select preference for otp verification
    #     When I click on the "Select Preference" button
    #     * I select my Preference
    #     * I click on the "send" button
    #     Then I see otp verification page
    #     When I enter otp as "981256"
    #     * I click on the "verify otp" button
    #     Then I should see a message Do you want to trust this browser
    #     When I click on the "No, I Don't" button
    #     Then I navigate to profile page
    #     * I should see a message "Login successful"
        


    #SORTING
    Scenario Outline: Sort functionality
        Given I am on the manage Organization Users page
        When I click on sort <sort>
        Then I should see the Organization Users sorted in ascending order based on <sort>
        When I click on sort <sort>
        * I should see the Organization Users sorted in descending order based on <sort>
        Examples:
            | sort         |
            | "ID"         |
            | "Username"   |
            | "First Name" |
            | "Status"     |
    
    #SEARCH VALID
            
    #SEARCH INVALID
    Scenario Outline: Invalid Search with ID, First Name, Email
        Given I am on the manage Organization Users page
        When I click on "Search" button
        And  I enter text as "<details>"
        Then I should see a message "<message>"

        Examples:
            | details          | message                                               |
            | ORG000000000     | No exact matches found. Please try a different search |
            | unkown@7edge.com | No exact matches found. Please try a different search |
            | unkown           | No exact matches found. Please try a different search |

    #EXPORTING
    Scenario: Performing Export
        Given I am on the manage Organization Users page
        When I click on "icon-export" button
        * I click on "Export" button
        Then I should see a message "Organization user list exported successfully"







