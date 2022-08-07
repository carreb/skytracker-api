# skytracker-api
API backend for some features of SkyTracker.

## `GET` /npc
Returns a list of all base level tracked items NPC sell values

## `POST` /npc [Requires Developer Authentication]
Create a new item in the list by adding body arguments of `item` and `price`. Item should be the internal ID of the Skyblock item.

## `PATCH` /npc [Requires Developer Authentication]
Update the price of an item by specifying the `item` and the new `price` in the body of the request.

## `DELETE` /npc [Requires Developer Authentication]
Delete an item by specifying the `item` in the body.
