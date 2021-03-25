# azpodvaccinealert
Script attempts to refresh the availabilities for the first site available in your zip code. When an availability is detected, you will receive a desktop notification so you don't need to actively monitor the web page. 

## Instructions
1. Go through the podvaccine portal until you're on the page to schedule your appointment
2. Open chrome's dev tools (F12)
3. Copy/past the Section 1 block into the console
4. Wait for a couple seconds, and copy/paste the Section 2 block
5. There should now be a stop/start button underneath the third column
6. Press start

To verify its working, the 'No slots available' should flash much faster (approximately every second instead of 10 seconds). 

There should also be messages printed in the console to verify its working. 

## Disclaimer
There is probably a better way to do this, but I am far from proficient with javascript and wont need to maintain this further. 