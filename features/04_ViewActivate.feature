Feature: Perform action on the Organization User
    As a admin
    I want to view,activate and deactivate

#   Scenario: Login with valid credentials
#         Given I am on the login page
#         When I enter my username as "rahul.mallya@7edge.com"
#         * I enter my password as "Admin@1234"
#         * I click on the "login" button
#         Then I should see a dialog box to select preference for otp verification
#         When I click on the "Select Preference" button
#         * I select my Preference
#         * I click on the "send" button
#         Then I see otp verification page
#         When I enter otp as "981256"
#         * I click on the "verify otp" button
#         Then I should see a message Do you want to trust this browser
#         When I click on the "No, I Don't" button
#         Then I navigate to profile page
#         * I should see a message "Login successful"

    Scenario: Search for already existing observer with ID
        Given I am on the manage Organization Users page
        When I search for a particular user with ID
        Then I should see the list of user with the searched ID
        And I store the details of the user
        When I click on the "action" button 
        And I click on the "view" button 
        Then I should be redirected to view page
        And I validate the details of the user

     Scenario: Cancel Activate a Single Observer
        Given I am on the manage Organization Users page
        When I search for a particular user with ID
        Then I should see the list of user with the searched ID
        When I click on "action" button
        And I click on "Activate" button
        And I see a confirmation window for activation
        And I click on "Cancel" button
        Then I am still on manage Organization User page

    # Happy
    Scenario: Activate a Single Observer
        Given I am on the manage Organization Users page
        When I search for a particular user with ID
        Then I should see the list of user with the searched ID
        When I click on "action" button
        And I click on "Activate" button
        And I see a confirmation window for activation
        And I click on "activate" button
        Then I should see a message "Organization user activated successfully"

    # Unhappy
    Scenario: Cancel Deactivate a Single Observer
        Given I am on the manage Organization Users page
        When I search for a particular user with ID
        Then I should see the list of user with the searched ID
        When I click on "action" button
        And I click on "Deactivate" button
        And I see a confirmation window for deactivation
        And I enter the comment
        And I click on "Cancel" button
        Then I am still on manage Organization User page

    # Happy
    Scenario: Deactivate a Single Observer
        Given I am on the manage Organization Users page
        When I search for a particular user with ID
        Then I should see the list of user with the searched ID
        When I click on "action" button
        And I click on "Deactivate" button
        And I see a confirmation window for deactivation
        And I enter the comment
        And I click on "deactivate" button
        Then I should see a message "Organization user deactivated successfully"


    # Activate and deactivate by using checkbox
    # Unhappy
    Scenario: Cancel Activate a Single Observer
        Given I am on the manage Organization Users page
        When I click on "Checkbox" button for ID = ORG000005907
        And I click on "ThreeDot" button 
        And I click on "Activate" button
        And I see a confirmation window for activation
        And I click on "Cancel" button
        Then I am still on manage Organization User page

    # Happy
    Scenario: Activate a Single Observer
        Given I am on the manage Organization Users page
        When I click on "Checkbox" button for ID = ORG000005907
        And I click on "ThreeDot" button 
        And I click on "Activate" button
        And I see a confirmation window for activation
        And I click on "activate" button
        Then I should see a message "Organization users activated successfully"

    # Unhappy
    Scenario: Cancel Deactivate a Single Observer
        Given I am on the manage Organization Users page
        When I click on "Checkbox" button for ID = ORG000005907
        And I click on "ThreeDot" button 
        And I click on "Deactivate" button
        And I see a confirmation window for deactivation
        And I enter the comment
        And I click on "Cancel" button
        Then I am still on manage Organization User page

    # Happy
    Scenario: Deactivate a Single Observer
        Given I am on the manage Organization Users page
        When I click on "Checkbox" button for ID = ORG000005907
        And I click on "ThreeDot" button 
        And I click on "Deactivate" button
        And I see a confirmation window for deactivation
        And I enter the comment
        And I click on "deactivate" button
        Then I should see a message "Organization users deactivated successfully"
