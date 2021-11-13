{
   "title":"catacomb_entrance",
   "header":"Catacombs",
   "nomap":"Climbing out of here will take a little more effort.",
   "subheader":"These ancient halls are a maze of twisty stone passages, all alike. The walls are like long stone bookshelves, only in place of books are the dusty, cobweb-covered remains of ancient skeletons.",
   "events":[
      {
         "id":"leavetomb",
         "title":"Climb up to the churchyard",
         "subtitle":"You remember the way back out, and could climb up with some difficulty.",
         "type":"random",
         "requirements":[
            
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"You climb up on the shelf-like tombs, and squeeze your way into a crack in the roof to escape.",
               "area":"churchyard",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"getcursed",
         "title":"A Vein of Curse",
         "subtitle":"The side of the catacomb wall is broken and crumbling in one part. Past the thick stone you can see a glistening black fleshy line of what looks like the same substance that the accursed are covered in. Touching it would be extremely unwise.",
         "type":"random",
         "requirements":[
            
         ],
         "icon":"curse",
         "results":{
            "mayor_intern":{
               "text":"You reach in past the stone brickwork. You hesitate at first, but your curiosity gets the better of you. You take a deep breath, and press your hand firmly to the smooth, cold strange substance.</p>Immediately, you feel sick, and confused. You jerk back instinctively and fall to the floor. Your insides are cold and slick, and you start to cough and hack. Thick black ichor oozes and dribbles from your mouth, and flickers of energy crackle along your skin. Your hand that touched the stuff is turning black, a deep and unnatural shiny black, like tar. It spreads up along your arms, and your hand becomes twisted as long claws stretch out from your fingertips.</p>You try to speak, but only lightning and sparks of flame spurt from your mouth. Your mind is spinning, and you are finding it hard to focus. Random thoughts are running through your head, intruding and forcing their way into your focus. Memories that aren't yours, visions of places you have never been.</p>You fall to your knees as the blackness spreads over your chest and begins to flow up your head. Before you pass out, you see one last vision. A bleak, barren snowy wilderness, with nothing but lifeless frost in all directions.",
               "outcomes":[
                  {
                     "parameter":"curse",
                     "quantity":5,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"godeeper",
         "title":"Delve Deeper into the Catacombs",
         "subtitle":"You have been to these mazeline warrens of stone before, or at least your body has. Someone helped you while you were accursed - are they down here, somewhere?",
         "type":"random",
         "requirements":[
            {
               "parameter":"asong",
               "value":1,
               "comparison":"equal"
            }
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"You walk deeper into the dark tunnels, and the stony bare passages finally give way to a large, open space. The ground here is all narrow passageways of crumbling stone, over black inky water beneath you. Far above you, the roof of this massive cave looks like a mess of fallen masonry, with narrow beams of light shining down from holes and cracks. Ivy and moss dangle down from high above, and the scent of odd flowers blooms everywhere.</p>As your eyes adjust to the dim light, you suddenly realise there is someone else here. It's the mayor, sitting on a crumbling plinth, reading an old document. He looks over to you and smiles, his moustache moving as he gives you a friendly grin. \"Ah, it's so good to see young adventurers with an interest in history! Though I would like to say, I'd appreciate it if you stayed away from this particular ruin\", he says. He brushes down his shirt and stands up, then holds your hand in his furry paws before patting it gently. \"It's just too dangerous, you see. You could slip in the dark, when no one is looking, and fall into a crevasse! And no one would even know! I would hate for anything to happen to one of my beloved guests\", he says. His hand squeezes on yours harder, to the point that it hurts. Something about his eyes does not match his cheerful smile. \"It's for your own good\", he finishes, before releasing your hand and giving you a polite nod, then leaving.",
               "area":"underground_ruins",
               "outcomes":[
                  {
                     "parameter":"asong",
                     "quantity":2,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"godeeper2",
         "title":"Delve Deeper into the Catacombs",
         "subtitle":"You remember the way to the flooded underground section now.",
         "type":"random",
         "requirements":[
            {
               "parameter":"asong",
               "value":1,
               "comparison":"greater"
            }
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"You make your way through the twisting passages, until the sound of water leads you once more to the underground ruin.",
               "area":"underground_ruins",
               "outcomes":[
                  
               ]
            }
         }
      }
   ],
   "npcs":[
      
   ]
}