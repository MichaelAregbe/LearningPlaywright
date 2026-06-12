Task 1: 
Navigate and Explore
Ask Claude (with Playwright MCP configured) to:
1. Navigate to the login page
2. Take a snapshot to see the page structure
3. Identify the username field, password field, and login button
Write down the element refs you find:
Username field ref: ___________ e16
Password field ref: ___________ e20
Login button ref: ___________ e21


Task 2: Perform a Valid Login
Ask Claude to:
1. Fill username with tomsmith
2. Fill password with SuperSecretPassword!
3. Click the login button
4. Take a snapshot to verify the result
What success message do you see? ___________ "You logged into a secure area!"


Task 3: Test an Invalid Login
Ask Claude to:
Navigate back to /login
1. Enter invalid credentials (baduser / badpass)
2. Click login
3. Verify the error message
What error message appears? ___________ "Your username is invalid!"


Task 4: Take a Screenshot
Ask Claude to take a screenshot of the result page after login attempt.
vscode-file://vscode-app/Users/mob/Desktop/Antigravity/LearningPlaywright/.playwright-mcp/page-2026-06-02T15-46-49-605Z.png


Bonus Challenge
Ask Claude to automate a complete flow:
1. Navigate to homepage
2. Click on "Checkboxes" link
3. Toggle both checkboxes
4. Take a screenshot of the result
![alt text](vscode-file://vscode-app/Users/mob/Desktop/Antigravity/LearningPlaywright/.playwright-mcp/page-2026-06-02T15-53-03-418Z.png)