Feature: User Login Tests

Background: 
    Given I have navigated to the site

@smoke
Scenario: Login should be successful
 When I enter username "sampletester@gmail.com"
 And I enter password "Amad7511!!"
 And I click submit
 Then login should be successful