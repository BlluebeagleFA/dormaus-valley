var area = {
        "title": "belly",
        "nomap": "You are trapped in the belly of a predator.",
        "header": "Someone's Stomach",
        "subheader": 'You are trapped inside a warm, dark belly. You have been devoured by some beast, and if you do not escape, you will surely be added to their belly fat forever.',
        "events": [
            {
                "id": "resist_digestion",
                "title": "Struggle",
                "subtitle": "You are not someone's dinner!",
                "type": "random", //or random
                //"stat": "might",
                //"difficulty": 10,
                "requirements": [
                ],
                "icon": "default",
                "results": {
//                	"rareSuccess": {
//                		"text": 'It\'s very hard to think or focus on anything as a vegetable. Your mind is kept sluggish by the endless pleasure of your vines and the tasty warmth of the sun. But knowing that you\'re in a farm, waiting to be harvested and destroyed, gives you the motivation to fight that sluggishness and focus on escape. You don\'t want to just be someone\'s dessert. You focus all your energy on trying to move and bring yourself back.</p>It takes a long while, but eventually with enough force and effort, you manage to wiggle your vine. It strokes along the ground, and the pleasure of it makes you almost immediately forget what you were doing. You quickly stop moving it, and focus on other areas of your body instead. Your thick orange rind starts to grow and move. Your whole body wiggles a little, and very gradually begins to push out new limbs. They emerge slowly, orange arms and legs, a gradually developing torso. Your vine snakes between your legs and pulses, as the pumpkin moves up your body, leaving you partway reformed, as an orange creature with a pumpkin for a head.</p>You reach down and pull on your vine, drawing it out from the soil and pulling it back to your body. Your pumpkin head softens slowly, as your eyes and mouth begin to reform. The firm orange of your skin becomes softer as it returns to living flesh, and you gradually feel sensation restoring to you all over. The coldness of the mud under your feet, and the living vines of the other pumpkins brushing at your ankles as they try to keep you here. You quickly scramble away before that can happen.',
//                		"freeTrap": true,
//                		"outcomes": []
//                	},
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You can\'t just turn into blubber! You keep kicking and fighting, and you hear your predator gurgling and grumbling. You give one last kick as strong as you can, and you feel yourself being spat back up, until you land with a thump in a puddle of saliva back in the town of Dormaus.',
                        "area": "dormaus_entrance",
                        "outcomes": [
                        ]
                    }//,
//                    "fail": { //success and fail, rare success, rare fail, or random
//                        "text": 'You have to struggle to force yourself to think. Being a vegetable, your mind is constantly slowing down and becoming dumb and empty and calm. You are distracted by the pulsing warmth and sensation of the sun on your body, and the coolness of your vines absorbing life from the soil. You know that for all that it feels so pleasurable to sit here amongst the other pumpkins, if you don\'t fight back, you are destined to end up smashed under the mayor\'s feet or baked into a pie.</p>But...would that be so bad? Surely that was why you were planted, right? You want to make your farmer happy. Being a vegetable means that you exist just to be eaten or harvested. You feel excited and tingly thinking about it. Getting big and plump and fat, having someone scoop out your warm tasty goo and making it into pies. Each scoop making you dumber and emptier and happier, knowing people are going to swallow you piece by piece, knowing you are delicious.</p>Or even the mayor pressing his feet down onto you, shoving them inside you, so you soak him with your goo and your seeds scatter over the soil. Making lots of new pumpkins to give pleasure to more people. This is where you belong! You are a good vegetable and you can\'t wait to be harvested.',
//                        "outcomes": []
//                    }
                }
            },{
                "id": "digestion",
                "title": "Give Up",
                "subtitle": 'You struggle around inside your captor\'s belly, trying to escape your fate of becoming dinner. The longer you spend in here, the harder it is to keep fighting. It\'s just so comfortable, and warm. It would be so easy to fall asleep, and just become chub forever...',
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "grizzpay": {
                        "text": 'Would it be so bad to be food? To give nutrition and nourishment to the big handsome beast that devoured you? Your struggles weaken as you start to lie back and relax. You can feel your body becoming soft and malleable as you are gradually absorbed. You close your eyes and drift off, the belly around you gurgling and squishing as it sucks you up, draining everything away from you. You feel the body of the predator all around you as you become a part of him, nothing but an extra layer of fat on his body.',
                        "trapped_desc": "Some jiggling predator fat is sitting on a belly here.",
                        "trapped": 'You were eaten and digested, and are now just a layer of blubber on a predator\'s belly.',
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }