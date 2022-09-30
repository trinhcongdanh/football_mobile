# football_mobile
After pull this repo, following below steps:
	
1. Create and checkout new branch ( Don't push anything else to master, this is stable branch ).
 	

2. yarn all.
	

3. npx pod-install ios ( option 2: cd ios && pod install ).
	

4. yarn ios ( run app to test ).
	

5. Commit code with keywords "fix: , chore: , feature: "
		example: (fix: fix bug ui), (chore: update something not related to the app), (feature: create new app feature). 
	

6. If you change or create a new feature, pay attention to run yarn lint to check code before git push .
	

7. Create merge request to football_mobile/develop ( this is stable branch before merge master ).
