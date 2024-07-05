Feature: Login feature
    As a user
    I want to login


    Scenario Outline: Login with invalid or empty details
        Given I am on the login page
        When I enter my username as "<username>"
        * I enter my password as "<password>"
        * I click on the "login" button
        Then I should see a message "<message>"

        Examples:
        | username                | password   | message                                       |
        |                         |            | Please fill in all the mandatory fields       |
        | abc@example.com         |            | Please fill in all the mandatory fields       |
        |                         | Admin@123  | Please fill in all the mandatory fields       |
        | def@example.com         | admin@123  | Incorrect username or password.               |
        | random                  | admin@123  | Invalid username                              |


    Scenario: Cancel preference selection
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        * I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification
        When I click on the "Select Preference" button
        * I select my Preference
        When I click on the "Cancel" button
        Then I navigate to login page


    Scenario: I forgot the password
        Given I am on the login page
        When I click on the "Forgot password" button
        Then I must navigate to Forgot Password page
        When I click on the "Back to Login" button
        Then I navigate to login page


    Scenario: I try to request for reset link with disabled button
        Given I am on the login page
        When I click on the "Forgot password" button
        Then I must navigate to Forgot Password page
        And The Request Reset Link button is disabled


    Scenario: I request for reset link with wrong username
        Given I am on the login page
        When I click on the "Forgot password" button
        Then I must navigate to Forgot Password page
        When I enter wrong username
        And I click on the "Request Reset Link" button
        Then I should see a message "Incorrect username"


    Scenario: I request for reset link with correct username
        Given I am on the login page
        When I click on the "Forgot password" button
        Then I must navigate to Forgot Password page
        When I enter my username as "rahul.mallya@7edge.com"
        And I click on the "Request Reset Link" button
        Then I should see a message "Password reset link has been sent to your registered email address"
    # forgot password end

    # adding otp verification feature
    Scenario: Login with empty otp
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        And I see Verify OTP button disabled

    Scenario: Return to login from OTP Verification
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        When I click on the "Back to Login" button
        Then I navigate to login page


    Scenario: Login with invalid otp
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        When I enter otp as "982134"
        And I click on the "verify otp" button
        Then I should see a message "You entered an invalid OTP.Please try again"


    Scenario: Resend OTP
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification 
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        When I click on the "Resend OTP" button
        Then I should see a message "OTP resent successfully"


    #happy
    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my username as "rahul.mallya@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        When I enter otp as "981256"
        And I click on the "verify otp" button
        Then I should see a message Do you want to trust this browser
        When I click on the "No, I Don't" button
        Then I navigate to profile page
        And I should see a message "Login successful"