Feature: Perform action on the observer
    As a admin
    I want to view, edit, activate and deactivate

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@1234"
        And I click on the "login" button
        Then I should see a dialog box to select preference for otp verification
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        When I enter otp as "981256"
        And I click on the "verify otp" button
        Then I should see a message Do you want to trust this browser
        When I click on the "No, I Don't" button
        Then I navigate to profile page
        And I should see a message "Login successful"


    Scenario: Search for already existing observer with ID
        Given I am on the manage observer page
        When I search for a particular observer with ID
        Then I should see the list of observer with the searched ID
        And I store the details of the observer
        When I click on "action" button 
        And I click on "view" button 
        Then I should be redirected to view page
        And I validate the details of the observer



    # Activate and deactivate observer

    # Scenario: Activate a Single Observer
    #     Given I am on the organization observer listing screen
    #     When I select the actions tab for an observer
    #     And I choose to activate the observer
    #     Then a confirmation modal for observer activation should appear
    #     And I confirm the activation
    #     Then I should read a message stating that "Observer activated successfully"
    #     And the status of the organization observer record should be changed to "Active"

    # Scenario: Deactivate a Single Observer
    #     Given I am on the organization observer listing screen
    #     When I select the actions tab for an observer
    #     And I choose to deactivate the observer
    #     Then a confirmation modal for observer deactivation should appear
    #     And I confirm the deactivation
    #     Then I should read a message stating that "Observer deactivated successfully"
    #     And the status of the organization observer record should be changed to "Inactive"
