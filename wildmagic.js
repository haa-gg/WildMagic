window.onload = function(){
  $("#display").hide();

console.log('load');

//Button to find out your new fate
var submit = document.getElementById("submit").onclick = function(){

  console.log('click');
  
$("#display").show();

var json =
 {
  "values": [
	[
     "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
    ],
   [
     "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
    ],
   [
     "For the next minute, you can see any invisible creature if you have line of sight to it."
    ],
   [
     "For the next minute, you can see any invisible creature if you have line of sight to it."
    ],
   [
     "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later."
    ],
   [
     "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later."
    ],
   [
     "You cast Fireball as a 3rd-level spell centered on yourself."
    ],
   [
     "You cast Fireball as a 3rd-level spell centered on yourself."
    ],
   [
     "You cast Magic Missile as a 5th-level spell."
    ],
   [
     "You cast Magic Missile as a 5th-level spell."
    ],
   [
     "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
    ],
   [
     "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
    ],
   [
     "You cast Confusion centered on yourself."
    ],
   [
     "You cast Confusion centered on yourself."
    ],
   [
     "For the next minute, you regain 5 hit points at the start of each of your turns."
    ],
   [
     "For the next minute, you regain 5 hit points at the start of each of your turns."
    ],
   [
     "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
    ],
   [
     "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
    ],
   [
     "You cast Grease centered on yourself."
    ],
   [
     "You cast Grease centered on yourself."
    ],
   [
     "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
    ],
   [
     "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
    ],
   [
     "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect."
    ],
   [
     "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect."
    ],
   [
     "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight."
    ],
   [
     "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight."
    ],
   [
     "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
    ],
   [
     "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
    ],
   [
     "You teleport up to 60 feet to an unoccupied space of your choice that you can see."
    ],
   [
     "You teleport up to 60 feet to an unoccupied space of your choice that you can see."
    ],
   [
     "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
    ],
   [
     "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
    ],
   [
     "Maximize the damage of the next damaging spell you cast within the next minute."
    ],
   [
     "Maximize the damage of the next damaging spell you cast within the next minute."
    ],
   [
     "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
    ],
   [
     "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
    ],
   [
     "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute."
    ],
   [
     "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute."
    ],
   [
     "You regain 2d10 hit points."
    ],
   [
     "You regain 2d10 hit points."
    ],
   [
     "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
    ],
   [
     "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
    ],
   [
     "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
    ],
   [
     "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
    ],
   [
     "You cast Levitate on yourself."
    ],
   [
     "You cast Levitate on yourself."
    ],
   [
     "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
    ],
   [
     "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
    ],
   [
     "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
    ],
   [
     "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
    ],
   [
     "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile."
    ],
   [
     "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile."
    ],
   [
     "You are immune to being intoxicated by alcohol for the next 5d6 days."
    ],
   [
     "You are immune to being intoxicated by alcohol for the next 5d6 days."
    ],
   [
     "Your hair falls out but grows back within 24 hours."
    ],
   [
     "Your hair falls out but grows back within 24 hours."
    ],
   [
     "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
    ],
   [
     "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
    ],
   [
     "You regain your lowest-level expended spell slot."
    ],
   [
     "You regain your lowest-level expended spell slot."
    ],
   [
     "For the next minute, you must shout when you speak."
    ],
   [
     "For the next minute, you must shout when you speak."
    ],
   [
     "You cast Fog Cloud centered on yourself."
    ],
   [
     "You cast Fog Cloud centered on yourself."
    ],
   [
     "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage."
    ],
   [
     "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage."
    ],
   [
     "You are frightened by the nearest creature until the end of your next turn."
    ],
   [
     "You are frightened by the nearest creature until the end of your next turn."
    ],
   [
     "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
    ],
   [
     "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
    ],
   [
     "You gain resistance to all damage for the next minute."
    ],
   [
     "You gain resistance to all damage for the next minute."
    ],
   [
     "A random creature within 60 feet of you becomes poisoned for 1d4 hours."
    ],
   [
     "A random creature within 60 feet of you becomes poisoned for 1d4 hours."
    ],
   [
     "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn."
    ],
   [
     "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn."
    ],
   [
     "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration."
    ],
   [
     "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration."
    ],
   [
     "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
    ],
   [
     "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
    ],
   [
     "You can take one additional action immediately."
    ],
   [
     "You can take one additional action immediately."
    ],
   [
     "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
    ],
   [
     "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
    ],
   [
     "You cast Mirror Image."
    ],
   [
     "You cast Mirror Image."
    ],
   [
     "You cast Fly on a random creature within 60 feet of you."
    ],
   [
     "You cast Fly on a random creature within 60 feet of you."
    ],
   [
     "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
    ],
   [
     "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
    ],
   [
     "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell."
    ],
   [
     "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell."
    ],
   [
     "Your size increases by one size category for the next minute."
    ],
   [
     "Your size increases by one size category for the next minute."
    ],
   [
     "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
    ],
   [
     "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
    ],
   [
     "You are surrounded by faint, ethereal music for the next minute."
    ],
   [
     "You are surrounded by faint, ethereal music for the next minute."
    ],
   [
     "You regain all expended sorcery points."
    ],
   [
    "You regain all expended sorcery points."
  ]
 ]
};

console.log('past array');


//Look over our table of magical effects and bind the total number to a variable
var magicalArrayLength = json.values.length;

//Take the bound number representing the the total number of possible outcomes from our meddling with fate itself and pick a random possibility
var variableDice = Math.floor(Math.random()*magicalArrayLength);

//Take our rolled number and search through our table of magical effects to find your fate
var magicalEffects = json.values[variableDice][0];

//Display the outcome of your meddling with fate
document.getElementById('display').innerHTML = ("<div id=\"text\">You Rolled</div>" + ("<div id=\"roll\">" + (variableDice + 1) + "</div>"));
console.log('roll element');
document.getElementById('display').innerHTML += ("<div id=\"fate\">" + magicalEffects + "</div>");
console.log('result element');
};
};
