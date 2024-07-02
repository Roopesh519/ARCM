Feature: Login to ARCM  
    As a admin
    I want to login to the ARCM

    # Unhappy Paths
    Scenario Outline: Login with invalid or empty details
        Given I am on the login page
        When I enter my username as "<username>"
        And I enter my password as "<password>"
        And I click on the "Login" button
        Then I see a message "<message>"

        Examples:

        | username                | password   | message                                       |
        |                         |            | Please fill in all the mandatory fields       |
        | abc@example.com         |            | Please fill in all the mandatory fields       |
        |                         | Admin@123  | Please fill in all the mandatory fields       |
        | def@example.com         | admin@123  | Incorrect username or password.               |
        | random                  | admin@123  | Invalid username                              |


    Scenario: Cancel preference selection
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        When I click on the "Cancel" button
        Then I navigate to login page


    # forgot password start 
    Scenario: I forgot the password
        Given I am on the login page   
        When I click on the "Forgot password" button
        Then I must navigate to Forgot Password page


    Scenario: I try to request for reset link with disabled button
        Given I am on the forgot password page
        Then the Request Reset Link button is disabled


    Scenario: I request for reset link with wrong username
        Given I am on the forgot password page
        When I enter wrong username
        And I click on the "Request Reset Link" button
        Then I see a message "Invalid username"


    Scenario: I request for reset link with correct username
        Given I am on the forgot password page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I click on the "Request Reset Link" button
        Then I see a message "Password reset link has been sent to your registered email address"


    Scenario: I request for reset link and go back to login
        Given I am on the forgot password page
        When I click on the "Back to Login" button
        Then I navigate to login page 
    # forgot password end

    Scenario: Login with empty otp
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        And I see Verify OTP button disabled


    Scenario: Return to login from OTP Verification
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        When I click the button with text "Back to Login"
        Then I navigate to login page


    Scenario: Login with invalid otp
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        When I enter otp as "982134"
        Then I see a message "You entered an invalid OTP.Please try again"


    Scenario: Resend OTP
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        When I click on the "Resend OTP" button
        Then I see a message "OTP resent successfully"

    
    # Happy paths
    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@123"
        And I click on the "login" button
        Then I should see a a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        And I click on the "send" button
        Then I see otp verification page
        When I enter otp as "981256"
        And I click on the "verify otp" button
        Then I see a message Do you want to trust this browser
        When I click on the "No, I dont" button
        Then I navigate to profile page
        And I see a message "Login Successful"
