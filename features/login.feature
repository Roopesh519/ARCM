Feature: Login to ARCM  
    As a admin
    I want to login to the ARCM

    # Unhappy Paths
    Scenario Outline: Login with invalid or empty details
        Given I am on the login page
        And I enter my username as "<username>"
        And I enter my password as "<email>"
        Then I click on "Login" button
        Then my details should be validated with "<message>"

        Examples:

        | username                | password   | message                                       |
        |                         |            | Please fill in all the mandatory fields       |
        | abc@example.com         |            | Please fill in all the mandatory fields       |
        |                         | Admin@123  | Please fill in all the mandatory fields       |
        | def@example.com         | admin@123  | Incorrect username or password.               |
        | random                  | admin@123  | Invalid username                              |


    Scenario: Cancel preference selection
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        When I click on "Cancel" button # done
        Then I navigate to login page # done


    Scenario: Login with empty otp
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        Then I see otp verification page
        And I see Verify OTP button disabled  # done


    Scenario: Return to login from OTP Verification
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        Then I see otp verification page
        When I click the button with text "Back to Login" # done
        Then I navigate to login page # step definition


    Scenario: Login with invalid otp
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        Then I see otp verification page
        When I enter otp as "982134"
        Then I should see a message "You entered an invalid OTP.Please try again"


    Scenario: Resend OTP
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        Then I see otp verification page
        When I click on "Resend OTP" button
        Then I should see a message "OTP resent successfully"

    
    # Happy paths
    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my email as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on "Select Preference" button
        And I select my Preference
        And I click on "send" button
        Then I see otp verification page
        When I enter otp as "981256"
        And I click on "verify otp" button
        Then I see a message Do you want to trust this browser
        When I click on "No, I dont" button
        Then I navigate to profile page
        And I should see a message "Login Successful"
