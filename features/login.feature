Feature: Login to ARCM  
    As a admin
    I want to login to the ARCM

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        And I navigate to otp verification page
        And I enter otp as "981256"
        And I click on "verify otp" button
        Then I see a message Do you want to trust this browser
        When I click on "No, I dont" button
        Then I navigate to profile page
        And I should see a message "Login Successfull"
