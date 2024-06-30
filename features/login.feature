Feature: Login to ARCM  
    As a admin
    I want to login to the ARCM

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a pop up window
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        
        Then I navigate to profile page
        And I should see a message "Login Successfull"
