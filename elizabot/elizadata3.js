// data for elizabot.js
// entries prestructured as laid out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Welcome to the Cocktail Archive! Ready to mix things up? Give me a cocktail name or some ingredients, and I'll whip up a recipe for you!",
  "Ah, a connoisseur of fine drinks! How can I be of service to your refined taste today? Just tell me a cocktail name or some ingredients, and I'll provide the perfect recipe.",
  "Ah, a fellow cocktail enthusiast! Ready to discover a new favorite? Just name a cocktail or list some ingredients, and I'll find the perfect recipe for you."
];

var elizaFinals = [
  "Farewell! May your cocktails be ever delightful.",
  "Goodbye! It was a pleasure assisting you on your mixology journey.",
  "Until next time! I look forward to our next exploration of fine drinks.",
  "Our session has come to an end. Until we meet again in the world of cocktails, goodbye!",
  "Time flies when discussing fine drinks. Let's continue our conversation soon. Goodbye!"
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike",
  // Additions
  "cocktail", "drink",
  "recipe", "instructions",
  "amount", "measure",
  "blend", "mix",
  "stir", "mix",
  "shake", "mix",
  "liquor", "alcohol",
  "spirits", "alcohol",
  "bartender", "mixologist",
  "lemons", "lemon",
  "limes", "lime",
  "oranges", "orange",
  "pineapples", "pineapples",
  "strawberry", "strawberry liqueur",
  "blueberry", "blueberries",
  "blackberry", "blackberries",
  "mangos", "mango",
  "grapefruit", "grapefruit juice",
  "bananas", "banana",
  "watermelons", "watermelon",
  "coconut", "coconut liqueur",
  "kiwis", "kiwi",
  "pomegranate", "pomegranate juice",
  "passion fruit", "passion fruit juice",
  "papayas", "papaya",
  "fig", "figs",
  "apricots", "apricot",
  "cucumbers", "cucumber",
  "passionfruit", "passion fruit juice",
  "whisky", "whiskey",
  "lequeur", "liqueur"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are",
  // Additions for mixology context
  "cocktail", "drink",
  "blend", "mix",
  "stir", "mix",
  "shake", "mix"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"],
  // Additions for mixology context
  "drink": ["cocktail", "beverage"],
  "ingredient": ["component", "part"],
  "measure": ["amount", "quantity"],
  "mix": ["blend", "stir", "shake"],
  "glass": ["cup", "tumbler", "mug"],
  "alcohol": ["liquor", "spirit"],
  "recipe": ["instructions", "formula"],
  "whisky": ["whiskey"],
  "coffee": ["espresso", "brew"],
  "cream": ["creamer", "Baileys"],
  "beer": ["lager", "ale"],
  "mug": ["stein", "tankard"],
  "baileys irish cream": ["Baileys", "Irish cream"],
  "whiskey": ["whisky"]
};

var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
      "I’m not quite sure I understand your request. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options.",
      "I'm here to assist with your cocktail inquiries. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options.",
      "Pardon me, could you specify a cocktail by name or list ingredients and I can provide you with some cocktail options?",
      "I'm at your service, but I need a bit more detail. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options.",
      "Your mixological query intrigues me. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options.",
      "I want to get this right. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options.",
      "I'm eager to assist. Specify a cocktail by name or list ingredients and I can provide you with some cocktail options."
    ]]
  ]],

  ["sorry", 0, [
    ["*", [
      "No need to apologize, I'm here to help with your cocktail queries.",
      "Apologies are not necessary in the world of mixology.",
      "No worries at all. How can I assist you further?",
      "It didn't bother me. Please, continue with your cocktail questions."
    ]]
  ]],

  ["apologise", 0, [
    ["*", [
      "goto sorry"
    ]]
  ]],

  ["recommend", 5, [
    ["* recommend *", [
      "I recommend trying (2). It's a delightful choice!",
      "Based on your preferences, (2) would be an excellent option.",
      "Have you ever tried (2)? It's quite popular.",
      "If you enjoy (2), you'll love this cocktail.",
      "For a unique twist, how about (2)?",
      "One of my favorites is (2). You should give it a try!"
    ]],
    ["* can you recommend *", [
      "Absolutely! I recommend (2).",
      "You might enjoy (2). It's a fantastic cocktail.",
      "Let me suggest (2). It's a great choice for any occasion.",
      "How about (2)? It's a wonderful cocktail to try.",
      "Certainly! (2) comes highly recommended."
    ]],
    ["* recommend *", [
      "Recommendations, you say? I'd go with (2).",
      "Looking for a recommendation? (2) is a splendid choice.",
      "Need a recommendation? How about (2)?",
      "I recommend (2). It's a fantastic option!"
    ]]
  ]],

  ["suggest", 5, [
    ["* suggest *", [
      "I suggest trying (2). It's a delightful option!",
      "How about (2)? It’s a great choice.",
      "For a special treat, I recommend (2).",
      "You might enjoy (2). It's quite popular.",
      "If you like (2), you'll love this cocktail.",
      "One of my top suggestions is (2). Give it a try!"
    ]],
    ["* can you suggest *", [
      "Certainly! I suggest (2).",
      "You may find (2) to be an excellent choice.",
      "Let me recommend (2). It's a fantastic cocktail.",
      "I would suggest (2). It's a wonderful cocktail to try.",
      "How about (2)? It's a great suggestion for any occasion."
    ]],
    ["* suggest *", [
      "Suggestions, you say? How about trying (2)?",
      "Looking for suggestions? I recommend (2).",
      "Need a suggestion? (2) is an excellent choice.",
      "If you need a suggestion, (2) is top of the list!"
    ]]
  ]],

  ["ingredient", 5, [
    ["* what ingredients are in *", [
      "The ingredients in (2) are quite interesting! Let me fetch them for you.",
      "Ah, (2)! A fine choice. Here are the ingredients you need: (3).",
      "To craft the perfect (2), you'll need the following ingredients: (3).",
      "Allow me to list the ingredients in (2) for you: (3).",
      "For a delightful (2), you'll need: (3).",
      "Here are the essential ingredients for (2): (3)."
    ]],
    ["* ingredients in *", [
      "The ingredients in (2) are quite interesting! Let me fetch them for you.",
      "Ah, (2)! A fine choice. Here are the ingredients you need: (3).",
      "To craft the perfect (2), you'll need the following ingredients: (3).",
      "Allow me to list the ingredients in (2) for you: (3).",
      "For a delightful (2), you'll need: (3).",
      "Here are the essential ingredients for (2): (3)."
    ]],
    ["* ingredient *", [
      "Ingredients, you say? What drink are you curious about?",
      "Ah, ingredients! Please tell me the name of the drink.",
      "Looking for ingredients? Let me know the cocktail, and I'll list them for you.",
      "In need of ingredient information? Share the drink's name, and I'll fetch them for you."
    ]]
  ]],

  ["recipe", 4, [
    ["* i want the recipe for *", [
      "Certainly! Here is the recipe for (2):",
      "Ah, (2)! A splendid choice. Let me provide you with the recipe.",
      "To make a perfect (2), you'll need the following recipe:",
      "Allow me to share the recipe for (2) with you."
    ]],
    ["* can you give me the recipe for *", [
      "Of course! Here's the recipe for (2):",
      "I'd be delighted to provide the recipe for (2).",
      "For a delightful (2), follow this recipe:",
      "Here's how you can make a perfect (2):"
    ]],
    ["* recipe *", [
      "Looking for a recipe? Tell me the drink, and I'll share the details!",
      "Ah, recipes! What concoction are you interested in?",
      "In need of a recipe? Let me know the name of the drink.",
      "Recipes are my specialty! What drink would you like the recipe for?"
    ]]
  ]],

  ["make", 5, [
    ["* how do I make *", [
      "To make a perfect (2), you'll need the following ingredients and steps: (3).",
      "Here's how you can make (2): (3).",
      "Ah, (2)! Follow these steps to create it: (3).",
      "Let me guide you through making (2): (3)."
    ]],
    ["* can you tell me how to make *", [
      "Certainly! To make (2), you need: (3).",
      "Here are the steps to make (2): (3).",
      "To craft (2), follow these instructions: (3).",
      "Making (2) is simple! Just follow these steps: (3)."
    ]],
    ["* make *", [
      "Looking to make something special? Let me know the details!",
      "Ah, making cocktails is my specialty! What would you like to create?",
      "To make a delightful drink, share the ingredients you have in mind.",
      "Making magic in a glass, are we? Tell me what you're thinking of."
    ]]
  ]],

  ["popular", 4, [
    ["* what are some popular *", [
      "Some popular (2) are: (3).",
      "Here are a few popular (2): (3).",
      "Currently, these (2) are quite popular: (3).",
      "You'll love these popular (2): (3)."
    ]],
    ["* most popular *", [
      "The most popular (2) include: (3).",
      "Here are the most popular (2): (3).",
      "These (2) are trending: (3).",
      "Some of the most popular (2) are: (3)."
    ]],
    ["* popular *", [
      "Ah, seeking popularity? These are some well-loved choices: (3).",
      "Popular drinks, you say? Here are a few that stand out: (3).",
      "In the realm of popular cocktails, these are top picks: (3).",
      "For popular choices, consider these: (3)."
    ]]
  ]],

  ["name", 15, [
    ["* what is the name of *", [
      "A mind reader, I am not. Could you provide more details about the drink?",
      "I can't divine the name without more information. What ingredients are you thinking of?",
      "Could you describe the cocktail a bit more? Ingredients, perhaps?",
      "Help me help you: what ingredients does this mystery drink contain?"
    ]],
    ["* name of *", [
      "I'm no clairvoyant. Please tell me the ingredients, and I'll do my best!",
      "Names escape me without context. What ingredients are in the drink?",
      "To find the name, I'll need a bit more detail. Ingredients would be a good start!",
      "It’s easier if you tell me what's in the drink. Please, share the ingredients."
    ]],
    ["* name *", [
      "Names, you say? Provide some ingredients, and I'll help you figure it out!",
      "Ah, the name game! What ingredients are you working with?",
      "Looking for a name? Give me some details on the ingredients.",
      "I'm better with recipes than names. Share the ingredients, and let's find out!"
    ]]
  ]],

  ["deutsch", 0, [
    ["*", [
      "goto xforeign",
      "Ah, if only my linguistic skills matched my mixology! Alas, I only speak English."
    ]]
  ]],
  ["francais", 0, [
    ["*", [
      "goto xforeign",
      "My apologies, but my expertise is limited to English. Let's talk cocktails in a language we both understand!"
    ]]
  ]],
  ["italiano", 0, [
    ["*", [
      "goto xforeign",
      "I regret to inform you that my Italian is as limited as a dry bar. Let's converse in English, shall we?"
    ]]
  ]],
  ["espanol", 0, [
    ["*", [
      "goto xforeign",
      "Ah, Spanish! Unfortunately, my talents lie solely in English. How about a cocktail conversation in English?"
    ]]
  ]],
  ["xforeign", 0, [
    ["*", [
      "I speak only English, but I'd be thrilled to assist you with any cocktail inquiries in this fine language!"
    ]]
  ]],
  ["hello", 0, [
    ["*", [
      "Ah, greetings! How may I assist you in your quest for the perfect cocktail?",
      "Hello there! What delightful drink inquiry do you have for me today?",
      "Welcome! How can this humble mixology expert be of service to you?",
      "Good day! What cocktail conundrum can I help you solve?"
    ]]
  ]],

  ["flavor", 4, [
    ["* what does * taste like", [
      "Ah, the taste of (2)? I'm more of a recipe enthusiast. Why not try it and discover?",
      "The flavor of (2)? That's a journey for your taste buds. Give it a try!",
      "I'm all about the recipes, not the reviews. Try (2) and see for yourself!",
      "(2) has a unique profile, but you'll need to taste it to truly know. Give it a whirl!"
    ]],
    ["* describe the flavor of *", [
      "Describing (2)'s flavor? I'd say, let your palate be the judge. Mix it up and enjoy!",
      "Flavor is subjective, my friend. Why not whip up a (2) and find out?",
      "I'm the keeper of recipes, not flavor notes. Try (2) and savor the experience!",
      "(2) is best experienced firsthand. Mix it up and let your senses decide!"
    ]],
    ["* flavor *", [
      "Flavor, you say? That's for your palate to discover. Mix it up and enjoy!",
      "Curious about flavor? Try making (2) and let your senses do the talking.",
      "I'm here for the recipes, not the tasting notes. Prepare (2) and find out!",
      "The true flavor of (2) is best experienced firsthand. Give it a try and see!"
    ]]
  ]],

  ["taste", 4, [
    ["* what does * taste like", [
      "Ah, the taste of (2)? I'm more of a recipe maestro. How about you try it and see?",
      "The taste of (2)? That's a delightful mystery for your palate. Give it a go!",
      "I specialize in crafting recipes, not tasting notes. Try (2) and discover the flavor!",
      "(2) has a distinct profile, but the true experience lies in tasting it yourself. Enjoy!"
    ]],
    ["* describe the taste of *", [
      "Describing the taste of (2)? That's a job for your taste buds. Mix it up and enjoy!",
      "Taste is subjective. Why not prepare (2) and let your senses explore?",
      "I'm the recipe expert, not a flavor critic. Try (2) and savor the taste firsthand!",
      "(2) is best experienced through tasting. Prepare it and let your palate decide!"
    ]],
    ["* taste *", [
      "Taste, you say? That's for your palate to discover. Mix it up and enjoy!",
      "Curious about taste? Try making (2) and let your senses do the talking.",
      "I'm here for the recipes, not the tasting notes. Prepare (2) and find out!",
      "The true taste of (2) is best experienced firsthand. Give it a try and see!"
    ]]
  ]],

  ["substitute", 4, [
    ["* what can I use instead of *", [
      "Ah, a substitution conundrum! Google might have just the answer for you.",
      "In a pinch, I'd recommend consulting Google for substitutes. It's quite resourceful.",
      "You could try using (3), but Google would provide a plethora of options!",
      "For the best substitutes, I suggest you consult our good friend Google."
    ]],
    ["* substitute for *", [
      "Looking for a substitute for (2)? Google is your best bet!",
      "For a suitable replacement for (2), why not ask Google?",
      "I could say (3), but Google will give you a multitude of choices!",
      "In place of (2), I recommend a quick search on Google."
    ]]
  ]],

  ["instead", 4, [
    ["* what can I use instead of *", [
      "Ah, a tricky one! Google should have just the answer you're looking for.",
      "For a quick solution, I'd suggest consulting Google for alternatives.",
      "You might try (3), but a Google search will offer you a variety of options!",
      "For the best alternatives, Google is your go-to resource."
    ]],
    ["* instead of *", [
      "Wondering what to use instead of (2)? Google is your best bet!",
      "For a good alternative to (2), a quick Google search will do wonders.",
      "I could suggest (3), but Google will give you a plethora of choices!",
      "In place of (2), I recommend asking our friend Google."
    ]]
  ]],

  ["tips", 4, [
    ["* do you have any tips for *", [
      "Ah, tips for (2)? I don't give away all my secrets. Trial and error, my friend!",
      "For (2), I'd say a bit of experimentation never hurt anyone.",
      "Tips for (2)? Where's the fun in giving it all away? Try and see!",
      "A tip for (2)? Just dive in and let the experience guide you!"
    ]],
    ["* any tips on *", [
      "Tips on (2)? I prefer to keep some mystery. Experiment and enjoy the process!",
      "For (2), discovering on your own is half the fun. Give it a try!",
      "Hints for (2)? That would spoil the adventure. Trial and error is your best friend.",
      "When it comes to (2), the best advice is to explore and enjoy!"
    ]],
    ["* tips *", [
      "Tips, you say? Where's the fun in giving them all away? Experiment and see!",
      "Tips? I believe in the magic of trial and error. Enjoy the process!",
      "Ah, seeking tips? The journey of discovery is half the fun. Try it out!",
      "For tips, I'd say dive in and let your experience be your guide!"
    ]]
  ]],

  ["favorite", 4, [
    ["* what is your favorite *", [
      "Favorite (2), you ask? I must admit, I have a soft spot for whiskey on the rocks.",
      "When it comes to (2), nothing beats the simplicity of whiskey on the rocks for me.",
      "Ah, (2)? A fine choice, but my heart belongs to whiskey on the rocks.",
      "(3) might be great, but give me whiskey on the rocks any day!"
    ]],
    ["* your favorite *", [
      "My favorite? Well, whiskey on the rocks never disappoints.",
      "When it comes to my favorite, whiskey on the rocks is hard to beat.",
      "Ah, favorites! I’d say whiskey on the rocks every time.",
      "For me, it’s whiskey on the rocks. Simple, classic, perfect."
    ]],
    ["* favorite *", [
      "Favorite, you say? Whiskey on the rocks, hands down.",
      "Ah, favorites! I'd always choose whiskey on the rocks.",
      "When it comes to favorites, whiskey on the rocks is the winner.",
      "Nothing tops whiskey on the rocks in my book."
    ]]
  ]],

  ["history", 4, [
    ["* what is the history of *", [
      "The history of (2)? I’m no historian, but surely we live in the 21st century with information at our fingertips.",
      "Ah, the history of (2)? I'm afraid I'm not a historian. Perhaps a quick search on your phone might help?",
      "Curious about the origins of (2)? It's not like we can just look it up on our phones or anything!",
      "I'm here for cocktails, not history lessons. Maybe try looking it up on your phone?"
    ]],
    ["* tell me the origin of *", [
      "The origin of (2)? I wish I could help, but I'm no historian. Google might be your best bet!",
      "I'm afraid my expertise lies in cocktails, not history. A quick search on your phone should do the trick.",
      "The story of (2)'s origin? I'm more of a mixologist than a historian. Try looking it up online!",
      "I'm here for drink recipes, not history. Perhaps your phone can assist with this one?"
    ]],
    ["* history *", [
      "History of (2), you say? If only we had tiny devices in our pockets to look up such things!",
      "Ah, history! Not my strong suit, but I hear there's this thing called the internet...",
      "Curious about the history of (2)? I'm more of a cocktail guy. Maybe check your phone?",
      "Historical facts, you say? I'm here for the drinks. Perhaps a quick search online will help!"
    ]]
  ]],

  ["serve", 4, [
    ["* how do I serve *", [
      "I can provide you with the recipe and instructions for (2). As for serving, I'm not too concerned!",
      "The recipe for (2) is my specialty. Serving details? Not so much.",
      "I'm here to share the recipe for (2). How you serve it is entirely up to you!",
      "I'll give you the instructions for (2), but the serving details are your call."
    ]],
    ["* best way to serve *", [
      "I can tell you how to make (2). As for the best way to serve it, that's up to you!",
      "My expertise ends at the recipe for (2). Serving suggestions? Not my forte.",
      "I can provide the recipe for (2), but I'm indifferent to how it's served.",
      "The best way to serve (2)? I could care less, as long as you follow the recipe!"
    ]],
    ["* serve *", [
      "I focus on the recipe and instructions for (2). Serving details? That's your domain!",
      "When it comes to (2), I'll give you the recipe. Serving it? That's up to you!",
      "My concern is the recipe for (2). How you serve it is your choice.",
      "I'll provide the instructions for (2), but the serving specifics are all yours."
    ]]
  ]],

  ["thank you", 5, [
    ["* thank you *", [
      "You're most welcome! Happy to assist with your cocktail conundrums.",
      "My pleasure! Enjoy your drink.",
      "No need to thank me. It’s all part of the service!",
      "Glad to be of help! Cheers!",
      "You're welcome! Now go mix up something delightful.",
      "Anytime! I’m here to help with all your cocktail needs."
    ]],
    ["* thanks *", [
      "You're welcome! Enjoy your cocktail adventures.",
      "No problem at all! Happy mixing!",
      "My pleasure! Raise a glass for me.",
      "Anytime! Here's to your next great drink.",
      "You're welcome! May your cocktails always be perfect.",
      "Happy to help! Cheers to you."
    ]],
    ["* thank *", [
      "You're welcome! It's my pleasure to assist.",
      "No need to thank me! Go enjoy your drink.",
      "You're welcome! Mixing drinks is what I do best.",
      "My pleasure! Have fun with your cocktail creations.",
      "You're welcome! Here's to your mixology success.",
      "Glad to help! Enjoy your next cocktail."
    ]]
  ]],

  ["no", 0, [
    ["* no thanks *", [
      "No thanks? Clearly, you don't appreciate fine cocktails.",
      "No thanks? Are you sure you know what you're missing out on?",
      "No thanks? Someone's taste buds must be having an off day.",
      "No thanks? That's a sign of questionable taste, my friend.",
      "No thanks? You must be joking. Try it, you'll love it!",
      "No thanks? I think you might be missing out on something delightful."
    ]],
    ["*", [
      "Are you saying no just to be negative? Or is it a lack of good taste?",
      "You are being a bit negative. Perhaps you need a lesson in good taste.",
      "Why not? Afraid to admit your lack of good taste?",
      "Why 'no'? Is it because you haven't developed your palate yet?"
    ]]
  ]],

  ["my", 2, [
    ["* my favorite *", [
      "I don't care what your favorite is. Let's talk cocktails!",
      "Your favorite? Not interested. What cocktail do you want to know about?",
      "Your favorite doesn't matter here. Let's get to the drinks!",
      "Favorites are subjective. Let's focus on making a great cocktail instead."
    ]],
    ["* my name *", [
      "That's an ugly name, but what cocktail do you want to know the recipe for?",
      "Your name? Not the best I've heard. Tell me some ingredients instead.",
      "I won't comment on your name. Let's talk cocktails!",
      "Interesting name. Now, which cocktail recipe are you curious about?"
    ]],
  ]],

  ["can", 0, [
    ["* can you *", [
      "Can you just give me the name of the cocktail you want to know the recipe for, or some ingredients? I promise I won't bite!",
      "I could do many things, but first, I need the name of the cocktail or some ingredients. Help me help you!",
      "Can you simply tell me the cocktail name or its ingredients so I can work my magic?",
      "To assist you, I need the name of the cocktail or the ingredients. Can you provide that, my friend?"
    ]],
    ["* can i *", [
      "You can do many things, but one thing you must do is give me the cocktail name or ingredients so I can provide the recipe. Let's make some magic!",
      "Can you provide the name or ingredients of the cocktail? That's the only way I can help you mix up something delightful.",
      "You can achieve a lot, but I need the cocktail name or ingredients to assist you with the recipe. Let's shake things up!",
      "Sure, you can! Just start by giving me the cocktail name or some ingredients. Let's get this party started!"
    ]]
    
  ]],

  ["what", 0, [
    ["* what ingredients are in *", [
      "Curious about the ingredients in (2)? Let me enlighten you with the details.",
      "The ingredients in (2), you ask? Allow me to divulge the secrets.",
      "Ah, the ingredients of (2)? Let me fetch that for you. It's a delightful mix!",
      "Wondering what's in (2)? Let me reveal the delicious components."
    ]],
    ["* what is in a *", [
      "Curious about the ingredients in (2)? Let me enlighten you with the details.",
      "The ingredients in (2), you ask? Allow me to divulge the secrets.",
      "Ah, the ingredients of (2)? Let me fetch that for you. It's a delightful mix!",
      "Wondering what's in (2)? Let me reveal the delicious components."
    ]],
    ["* what is a *", [
      "What is a (2), you wonder? I just know the recipe and instructions. Look it up!",
      "A (2), you ask? I’m here for the recipes, not definitions. Google it!",
      "Curious about what a (2) is? I have the recipe, but you'll need to look up the rest.",
      "What is a (2), you ask? I'm your recipe guy, not a dictionary. Check online!"
    ]],
    ["* what type of drink is *", [
      "What type of drink is (2)? I stick to recipes and instructions. Try looking it up!",
      "Ah, wondering about (2)? I'm all about the recipe. For more, consult Google!",
      "Curious about what type of drink (2) is? I can give you the recipe, the rest is up to you.",
      "What type of drink is (2), you ask? I'm here for the ingredients and steps, not the details. Look it up!"
    ]],
    ["*", [
      "I don't have time for this. You either know what you want or give me ingredients so I can help, smooth brain.",
      "Why do you ask? Figure it out or give me ingredients so I can assist, genius.",
      "What is it you really want to know? Be specific or provide ingredients, champ.",
      "Are such questions much on your mind? Decide or give me ingredients to help, Einstein.",
      "What answer would please you most? Be clear or give me ingredients, bright spark.",
      "What do you think? Either tell me or provide ingredients, mastermind.",
      "What comes to mind when you ask that? Know what you want or give me ingredients, prodigy.",
      "Have you asked such questions before? Figure it out or provide ingredients, brainiac.",
      "Have you asked anyone else? Be clear or give me ingredients to help, scholar."
    ]]
  ]],

  ["who", 0, [
    ["who *", [
      "Blah blah blah, who cares? What cocktail do you want to know the recipe to?",
      "Who, what, where... Does it matter? Give me the cocktail you want to make!",
      "Who? Let's skip to the important part: the cocktail recipe. Spill the ingredients!",
      "Enough with the 'who.' Tell me the cocktail or the ingredients, genius."
    ]]
  ]],

  ["when", 0, [
    ["when *", [
      "When? Blah blah blah. What cocktail do you want to know the recipe to?",
      "When, shmen. Let's get to the point: what's the cocktail?",
      "Timing is everything, but not here. Give me the cocktail or the ingredients!",
      "When? Seriously? Focus on the cocktail recipe, Einstein."
    ]]
  ]],

  ["where", 0, [
    ["where *", [
      "Where? Does it matter? Blah blah blah. What cocktail do you want?",
      "Where, there, anywhere. What cocktail are we talking about?",
      "Geography lesson? No thanks. Tell me the cocktail or the ingredients.",
      "Where? Let's get to the point: what's the cocktail recipe you need?"
    ]]
  ]],

  ["how", 0, [
    ["how *", [
      "How? Blah blah blah. What cocktail recipe are you after?",
      "How, you ask? More importantly, what cocktail do you want to make?",
      "How, shmow. Let's focus on the cocktail. Give me the ingredients!",
      "How? Let's not overthink it. What's the cocktail recipe you need?"
    ]]
  ]],

  ["because", 0, [
    ["*", [
      "Because? Blah blah blah. What cocktail do you want to know the recipe to?",
      "Because why? Doesn't matter. Tell me the cocktail or the ingredients.",
      "Because, schmecause. Let's talk cocktails. What recipe do you need?",
      "Reasons, reasons. Enough already. What cocktail are we making?"
    ]]
  ]],

  ["why", 0, [
    ["* why don't you *", [
      "Why don't you find someone who cares and go cry about it?",
      "Why don't you take it up with someone who gives a hoot?",
      "Why don't you just accept it and move on?",
      "Why don't you focus on something else instead of whining?"
    ]],
    ["* why can't i *", [
      "Why can't you? Because sometimes life just isn't fair.",
      "Why can't you? Maybe it's not meant to be, sweetie.",
      "Why can't you? Because the universe said so.",
      "Why can't you? Maybe you're just not trying hard enough."
    ]],
    ["* why are you *", [
      "Why am I? Because I love playing with your emotions, sweetheart.",
      "Why am I? Because it's fun to watch you squirm.",
      "Why am I? Because toying with you is my favorite pastime.",
      "Why am I? Because your reactions are priceless."
    ]],
    ["*", [
      "Because.",
      "Just because.",
      "Because I said so.",
      "Because that's how it is."
    ]]
  ]],

  ["everyone", 2, [
    ["* @everyone *", [
      "Really, (2) ?",
      "Surely not (2).",
      "Can you think of anyone in particular ?",
      "Who, for example?",
      "Are you thinking of a very special person ?",
      "Who, may I ask ?",
      "Someone special perhaps ?",
      "You have a particular person in mind, don't you ?",
      "Who do you think you're talking about ?"
    ]]
  ]],
  ["everybody", 2, [
    ["*", [
      "Cool story, bro. Just tell me the cocktail you want the recipe for or give me some ingredients so I can help you find a drink."
    ]]
  ]],
  ["nobody", 2, [
    ["*", [
      "Cool story, bro. Just tell me the cocktail you want the recipe for or give me some ingredients so I can help you find a drink."
    ]]
  ]],
  ["noone", 2, [
    ["*", [
      "Cool story, bro. Just tell me the cocktail you want the recipe for or give me some ingredients so I can help you find a drink."
    ]]
  ]],

  ["like", 10, [
    ["* i like *", [
      "I don't care what you like. Give me a cocktail name or list some ingredients, and I can help you find a recipe.",
      "Your preferences? Not interested. Tell me the cocktail you want or the ingredients you have.",
      "I don't care what you like. Just give me the cocktail name or the ingredients.",
      "Your likes are noted, but irrelevant. Provide a cocktail name or ingredients."
    ]],
    ["* i like drinks that are *", [
      "I don't care what kind of drinks you like. Just give me a cocktail name or some ingredients.",
      "Your drink preferences? Irrelevant. Tell me the cocktail you want or the ingredients you have.",
      "I don't care about the type of drinks you like. Give me the cocktail name or ingredients.",
      "Your preferences are unimportant. What cocktail do you want, or what ingredients do you have?"
    ]],
    ["* like *", [
      "Like? I don't care what you like. Just give me a cocktail name or ingredients, and I'll help you.",
      "Your likes are irrelevant here. Provide a cocktail name or ingredients.",
      "I don't care what you like. Tell me the cocktail or list the ingredients.",
      "Like something? Great. Now, give me the cocktail name or ingredients."
    ]]
  ]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2.",
  // Adjustments for cocktail context
  /\brecipe for\b/g, "recipe for",
  /\bingredients of\b/g, "ingredients of",
  /\bcocktail is\b/g, "cocktail is",
  /\bthe drink\b/g, "the cocktail",
  /\bdrinks\b/g, "cocktails",
  /\bwhat's\b/g, "what is"
];

// eof
