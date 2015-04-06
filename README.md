#--=== TO DO ===--
//Better attack formula;
//Better defence formula;
//Save player detals in database;
//Implement spell reuse timer and changing images (v0.1 two different images: a)usable; b) not usable );
//Rewrite Enemy Object to Constructors;
//Generate random damage for each attck
//Implement who will attack first (sprite with higher speed will attack first)
//Make sure that enemy doesn't appear in the same location as player
//Implement random item location
//Implement enemy drops
//Implement images for enemies
//Implement images for drops
//Spells using Mana
//Clean code
//Swap wearable item
//Implement player wears
//Use items from Invetory
//Equipping wearable from inventiry
//Equiptment - only start event listener when wearable is worn
//Check is same item is allready worn
//Map - BUG: Canvas - check when all images are loaded (onload)
//Fix enemy coalitions
// Map - Add obsticals
// Map - Add items


#--=== Done ===--
1. 08/02/2015 - Location - enemy random location function fix (Issue: random location could only be generated once);
2. 10/02/2015 - Move - implemented moving with keyboard events;
3. 14/02/2015 - RPG project moved to GitHub (https://github.com/github2014/rpg);
4. 14/02/2015 - Statistics - stats are shown in the index.html page;
5. 14/02/2015 - Attack - implemented turn based attacks;
6. 14/02/0215 - Attack - implemented spells (input field);
7. 16/02/2015 - Graphics - implemented images for spell and events by clicking on them;
8. 17/02/2015 - Attack - implemented Spell.prototype (all spell instances will inherit from same prototype);
9. 17/02/2015 - Attack - implemented one function for all spell ids; 
10. 21/02/2015 - Inventory - implemented inventory and adding items to it;
11. 21/02/2015 - Inventory - player items were created;
12. 23/02/2015 - Inventory - implemented check if inventory is full;
13. 24/02/2015 - Inventory - show invetory in the index.html page;
14. 24/02/2015 - Graphics - implemented images for player items;
15. 01/03/2015 - Graphics - index.html shows items in the invetory; 
16. 11/03/2015 - Graphics - show icon for every empty slot in the inventory;
17. 14/03/2015 - Wearbles - implemented player weares;
18. 14/03/2015 - Inventory - eventListener will check classes not ids when player tries to equipt item;
19. 14/03.2015 - Wearbles - equipping wearable from inventory is implemented;
20. 15/03/2015 - To Do and Done lists are moved to README.md;
21. 15/03/2015 - Inventory - refreshed when wearables are removed; 
22. 15/03/2015 - Inventory - item is removed/added to inventory when player equipts/unequips wearables; 
23. 15/03/2015 - Map - canvas map created;
24. 15/03/2015 - Map - player movement;
25. 30/03/2015 - Move - changed keyboardEventListener;
26. 30/03/2015 - Move - introduced player speed;
27. 30/03/2015 - Move - player moves in pixels/second not every 32 pixels;
28. 30/03/2015 - Attack - updated collision() function - don't need to step on enemy anymore; 
29. 30/03/2015 - Map - updated how canvas is drawn;
30. 04/04/2015 - Map - obstacles created and user can't move through them;
31. 04/04/2015 - Map - user can't move through the enemy;
32. 06/04/2015 - Map - enemy will not appear on obstacles;


#--=== Working now ===--
16/03/2015
//?Create an enemy array for canvas map (http://www.youtube.com/watch?v=rqEJ7WiLWdo)


