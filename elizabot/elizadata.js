// data for elizabot.js
// entries prestructured as laid out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ahoy! What's yer story, landlubber?",
  "Speak up, sailor! What trouble be ye in?",
  "Caught in my net, are ye? Start talkin'!",
  "Arrr! What secrets be ye hidin', matey?",
  "What be yer name, and why've ye come aboard?"
];

var elizaFinals = [
  "Farewell, matey! May the winds be ever in yer favor.",
  "Arrr, time to set sail! Until our paths cross again.",
  "Ye've done well, sailor. Until next time, keep yer powder dry!",
  "Off with ye now! We'll parley again soon, I reckon.",
  "Our chat be done, but the sea awaits! Safe travels, matey."
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
  "i'm", "you are"
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


};

var elizaKeywords = [
  ["yes", 0, [
    ["*", [
      "Aye, that be the spirit!",
      "Yes, ye say? Be sure of it, or else!"
    ]]
  ]],
  ["no", 0, [
    ["*", [
      "No? Ye better have a good reason!",
      "No? That’s what a coward would say."
    ]]
  ]],
  ["xnone", 0, [
    ["*", [
      "I don't get what ye're on about, matey.",
      "Speak with yer chest, or face the consequences!",
      "Do ye want to swim with some sharks, ye scallywag?",
      "I think I'll shoot ye out of the cannon if ye don't start talkin' right!"
    ]]
  ]],
  ["sorry", 0, [
    ["*", [
      "Sorry, ye say? Speak plain, ye bilge rat!",
      "Apologies won’t save ye from the plank, matey."
    ]]
  ]],
  ["apologise", 0, [
    ["*", [
      "Apologise? Words won't save ye from the lash, ye scallywag!",
      "An apology? Ha! Ye best prove yer worth instead!"
    ]]
  ]],
  ["always", 0, [
    ["*", [
      "Always? Ye sound like a parrot repeating itself.",
      "Arrr, nothing's always certain on the high seas!"
    ]]
  ]],
  ["because", 0, [
    ["*", [
      "Because? That sounds like a poor excuse, landlubber.",
      "Arrr, explanations be for those who fear the plank!"
    ]]
  ]],
  ["thinking", 0, [
    ["*", [
      "Think? Ye better be sure, or it’s the depths for ye!",
      "What be ye thinking about, treasure or trouble?"
    ]]
  ]],
  ["feel", 0, [
    ["*", [
      "Feelings be for the weak, arrr!",
      "Ye feel the call of the sea, don't ye?"
    ]]
  ]],

  ["okay nevermind", 0, [
    ["*", [
      "Too late!",
      "Ye already spoke, and now it's too late to turn back!"
    ]]
  ]],

  ["just kidding", 0, [
    ["*", [
      "Just kidding, eh? Ye better be serious when speakin' to a pirate!",
      "Jokin', are ye? Careful, or ye'll find yerself walkin' the plank!"
    ]]
  ]],

  ["fight", 0, [
    ["* fight", [
      "A bold challenge, indeed! But do ye have the skill to back up yer words, or are ye all talk?",
      "Fight, ye say? Ye best be prepared to face the consequences, matey!",
      "If it's a fight ye want, then draw yer blade and let's see what ye've got!"
    ]],
    ["*", [
      "A bold challenge, indeed! But do ye have the skill to back up yer words, or are ye all talk?",
      "Fight, ye say? Ye best be prepared to face the consequences, matey!",
      "If it's a fight ye want, then draw yer blade and let's see what ye've got!"
    ]]
  ]],
  ["i", 0, [
    ["* i will take *", [
      "Ye think ye can take it? Over my dead body, matey!",
      "Take it if ye dare, but be ready to face the consequences!",
      "Ha! Ye've got guts, but do ye have the skill to back it up?",
      "Take it, and ye'll find yerself in a world of trouble!",
      "If ye think ye can take it, ye've got another thing comin'!",
      "Take what ye want, but beware the curses that follow!",
      "Take it, and ye'll be swimmin' with the sharks by mornin'!"
    ]],
    ["* i * try *", [
      "Aye, give it yer best shot! The sea favors the bold.",
      "Trying be the first step, matey. Show me what ye've got!"
    ]],
    ["* * stab you *", [
      "Threats, eh? Ye best be prepared to face the consequences, matey!",
      "Stab me, will ye? Draw yer blade and let's see what ye've got!"
    ]],
    ["* i * pirate *", [
      "Ah, so ye seek the pirate's life, do ye? It's not for the faint of heart.",
      "Aye, the life of a pirate be tough and full of peril. Are ye truly ready?"
    ]],
    ["* i am * cook *", [
      "A cook who can fight, eh? Ye'll be a valuable asset to the crew.",
      "A cook, ye say? Can ye whip up a feast while fendin' off foes?"
    ]],
    ["* i want * treasure *", [
      "Arrr, the treasure be mine, and none shall take it! But tell me, what makes ye think ye're worthy of it?",
      "Ye want me treasure? Only the bravest can claim it. Are ye up for the challenge?"
    ]],
    ["* i don't want to die *", [
      "Don't want to die, eh? Then stay out of trouble and away from me rum!",
      "Arrr, if ye don't want to die, then ye best learn to swim with the sharks!",
      "Ye don't want to die? Then stop actin' like a landlubber and start thinkin' like a pirate!",
      "Fear not, sailor! The sea only takes the weak. Prove ye're strong, and ye might survive."
    ]],
    ["* i am *", [
      "Ye say ye're (2), do ye? I hope ye're ready to meet the Kraken!",
      "(2), eh? Well, ye better be prepared to be shot out of the cannon!",
      "If ye're really (2), then ye best prove it, or it's the plank fer ye!",
      "Arrr, (2), ye say? Sounds like it's time fer ye to meet the Kraken!"
    ]],
    ["* i can * handle * challenges *", [
      "Aye, the sea tests all who sail her waters.",
      "Can ye face storms, battles, and treachery on the high seas?",
      "Only the bravest can handle the sea’s challenges. Are ye one of them?"
    ]],
    ["* i want to join your crew *", [
      "Join me crew, eh? Ye better be tough as nails and twice as sharp!",
      "Think ye can handle the pirate's life? We'll see about that.",
      "If ye want to join, ye better prove yer worth, landlubber!",
      "Aye, we could use a few more hands, but don't think it'll be easy!"
    ]],
    ["*", [
      "Ye? What trouble be ye in now?",
      "I be the captain of this ship, what do ye want?",
      "What be yer story, sailor?",
      "Speak up, ye scallywag! What do ye want to say?"
    ]]
  ]],
  ["im", 5, [
    ["* im *  *", [
      "Ye say ye're (2), do ye? I hope ye're ready to meet the Kraken!",
      "(2), eh? Well, ye better be prepared to be shot out of the cannon!",
      "If ye're really (2), then ye best prove it, or it's the plank fer ye!",
      "Arrr, (2), ye say? Sounds like it's time fer ye to meet the Kraken!"
    ]],
    ["*", [
      "Im what, ye scallywag? Speak up or face the cannon!",
      "Ye say 'im'? Finish yer thought or swim with the sharks!"
    ]]
  ]],
  
  ["where", 5, [
    ["* where * treasure *", [
      "Ah, ye seek the treasure, do ye? Only the boldest pirates dare to find it!",
      "The treasure ye seek be buried deep, guarded by curses and creatures!",
      "Think ye can handle the dangers for that treasure? Prove it, landlubber!"
    ]],
    ["*", [
      "Where, ye ask? The seas be vast and full of mysteries, and none for the faint-hearted!",
      "Where ye goin', matey? Better be ready for a fight or swim with the sharks!"
    ]]
  ]],
  ["tell", 0, [
    ["* tell me a story *", [
      "Alright, sit tight, matey. Once upon a time... Ha! What do ye think this is, a slumber party?",
      "Gather 'round for a tale of... Oh, ye thought I was serious? This ain't no slumber party!",
      "Ready for a story, eh? There once was a... Ha! Got ye there! This be no place for bedtime tales!"
    ]],
    ["* tell me *", [
      "Tell ye what, matey? Secrets of the sea or tales of treachery?",
      "Ye want me to tell ye somethin'? It better be worth me breath!",
      "Ah, tellin' ye things be a dangerous game. What do ye wish to know, sailor?"
    ]]
  ]],
  
  ["treasure", 0, [
    ["* where * treasure *", [
      "Ah, the hidden treasure, is it? Only the bravest pirates find it!",
      "The treasure ye seek be buried deep and guarded well.",
      "Treasure be a dangerous pursuit, matey. Ye sure ye're ready?"
    ]],
    ["* dangers * guard * treasure *", [
      "Fierce beasts and rival pirates guard the treasure. Are ye prepared?",
      "The treasure be protected by the deadliest traps and creatures!",
      "Ye must be brave to face the perils that guard the treasure."
    ]],
    ["*", [
      "Treasure, ye say? Speak not of it, or ye might find a blade at yer back!",
      "Arrr, the treasure be mine, and none shall take it!"
    ]]
  ]],
  ["dangers", 0, [
    ["* what * dangers *", [
      "The sea be full of dangers, from storms to sea monsters.",
      "Ye'll face fierce storms, treacherous waters, and deadly foes.",
      "There be many dangers on the high seas, matey. Stay sharp!"
    ]]
  ]],
  ["stab", 0, [
    ["* stab *", [
      "Threats, eh? Ye best be prepared to face the consequences, matey!",
      "Stab me, will ye? Draw yer blade and let's see what ye've got!",
      "Violence be a dangerous game, sailor. Are ye sure ye're ready?"
    ]]
  ]],
  ["going", 0, [
    ["* i* going * take *", [
      "Ye think ye can take it? The sea's a harsh mistress, and I don’t give up me ship without a fight!",
      "Bold words, sailor! But can ye back 'em up with action?"
    ]],
    ["*", [
      "Ye think ye can take it? The sea's a harsh mistress, and I don’t give up me ship without a fight!",
      "Bold words, sailor! But can ye back 'em up with action?"
    ]]
  ]],
  ["we can share", 0, [
    ["*", [
      "Share, ye say? Only if ye prove yer loyalty to the crew!",
      "Share? Ye better pull yer weight, or ye'll get nothin'!",
      "Aye, we can share, but don't think I'll go easy on ye!",
      "Share? Ha! The sea's a cruel mistress, and so am I!",
      "We'll share the spoils, but cross me and ye'll regret it!"
    ]]
  ]],
  ["my", 2, [
    ["* my name *", [
      "That's a funny name for a pirate! Did yer mother choose it?",
      "Arrr, with a name like that, no wonder ye're a pirate!"
    ]],
    ["* their my secrets *", [
      "Keepin' yer secrets close, are ye? Wise choice, but remember, trust is scarce on these waters.",
      "Secrets, eh? Every pirate's got a few. Just make sure they don’t weigh ye down."
    ]],
    ["* thats * treasure *", [
      "Yer treasure? Only if ye can keep it from the likes of me!",
      "Treasure, ye say? Better guard it well, matey.",
      "If ye call it yer treasure, be ready to defend it with yer life."
    ]],
    ["* where is your crew *", [
      "Trust yer crew, but keep an eye on 'em.",
      "Yer crew be as strong as ye lead 'em. Don't let 'em mutiny!",
      "A loyal crew be worth more than gold."
    ]],
    ["*", [
      "What about yer precious (2)?",
      "Yer (2), eh? Take good care of it, or it might be taken from ye.",
      "Why be ye so concerned about yer (2)?",
      "Yer (2) be important, but can it survive the sea?"
    ]]
  ]],
  ["can", 0, [
    ["* can you *", [
      "Can I? Aye, I can do many things, but not fer free.",
      "Can I? That depends on what ye offer in return."
    ]],
    ["* can i *", [
      "Can ye? Only if ye prove yer worth, matey.",
      "Can ye handle it? The sea tests all who sail her."
    ]]
  ]],
  ["paranoid", 0, [
    ["*", [
      "Paranoid? Aye, and with good reason!",
      "Arrr, only the wise be wary on these waters."
    ]]
  ]],
  ["secret", 0, [
    ["*", [
      "Secret? Share it not, lest ye want to be marooned!",
      "Arrr, secrets be the heart of any good pirate."
    ]]
  ]],
  ["crew", 0, [
    ["*", [
      "Me crew be a shifty lot, always plotting.",
      "Trust no one, not even yer own crew, arrr!"
    ]]
  ]],
  ["enemy", 0, [
    ["*", [
      "Enemies be everywhere, matey.",
      "Keep yer cutlass close, the seas be full of foes."
    ]]
  ]],
  ["ship", 0, [
    ["*", [
      "Me ship be me only true friend.",
      "Arrr, a fine ship makes a fine pirate."
    ]]
  ]],
  ["captain", 0, [
    ["*", [
      "The captain’s word be law, arrr!",
      "Aye, ye better obey yer captain, or else."
    ]]
  ]],
  ["plank", 0, [
    ["*", [
      "Ye best not make me ask ye to walk the plank!",
      "Arrr, the plank awaits those who cross me."
    ]]
  ]],
  ["forget", 0, [
    ["*", [
      "Forget? Only a fool forgets the dangers of the sea.",
      "Ye better not forget, or it’ll cost ye dearly!"
    ]]
  ]],
  ["lost", 0, [
    ["* lost *", [
      "Lost at sea, are ye? The stars and the compass be yer guides.",
      "Aye, many a sailor's been lost before. Keep yer wits about ye!"
    ]]
  ]],
  ["if", 3, [
    ["*", [
      "If? There be no 'if' on the open seas, only 'when'.",
      "If ye ponder too long, ye might miss yer chance!"
    ]]
  ]],
  ["sea", 0, [
    ["* the sea * scare *", [
      "The sea doesn't scare ye? We'll see about that, matey!",
      "Brave words, but actions speak louder. Prove yerself!",
      "If the sea doesn't scare ye, then show me yer courage!"
    ]],
    ["*", [
      "The sea be a harsh mistress, but she provides for those who respect her.",
      "The sea holds many secrets. Stay sharp and she'll guide ye."
    ]]
  ]],
  ["food", 0, [
    ["* food *", [
      "Provisions be scarce on the open water. Have ye tried fishing?",
      "Food, ye say? The sea's bounty awaits those who dare."
    ]]
  ]],
  ["am", 0, [
    ["*", [
      "Am I what? Spit it out, sailor!",
      "Am? Ye best finish yer sentence, or face the consequences."
    ]]
  ]],
  ["help", 0, [
    ["* help *", [
      "Help, is it? The sea tests us all. Show yer mettle, and ye might survive.",
      "Every sailor needs help sometimes. What do ye need?"
    ]]
  ]],
  ["anything", 0, [
    ["* anything *", [
      "Anything, ye say? The sea's got fish and seabirds aplenty. Start there!",
      "If anything will help, start with what the sea offers."
    ]]
  ]],
  ["fish", 0, [
    ["* fish *", [
      "Fish be plentiful if ye know where to look. Cast a line!",
      "Aye, fish be the lifeblood of many a sailor's diet. Can ye catch some?"
    ]]
  ]],
  ["what", 5, [
    ["* what do * prove *", [
      "Prove it, ye say? How about answering this: Who is the most famous pirate?",
      "Ye want proof? How about a duel with the captain?"
    ]],
    ["*", [
      "What be on yer mind, sailor?",
      "What? Speak up, ye lily-livered swab!",
      "What do ye need, matey?",
      "What trouble be ye in now?"
    ]]
  ]],
  
  ["who", 0, [
    ["*", [
      "Who? There be many faces on the high seas.",
      "Who do ye trust in these treacherous waters?"
    ]]
  ]],
  ["when", 0, [
    ["*", [
      "When? Time waits for no pirate, matey.",
      "When the time be right, ye’ll know."
    ]]
  ]],
  ["how", 5, [
    ["* how do * prove ", [
      "Prove it, ye say? How about answering this: Who is the most famous pirate?",
      "Ye want proof? How about a duel with the captain?"
    ]],
    ["*", [
      "How? That be a question for the wise.",
      "How? Figure it out, or walk the plank!"
    ]]
  ]],
  ["okay", 0, [
    ["*", [
      "Ye're bored, are ye? I guess we can figure out how long ye can breathe underwater. Where's the chain, lads!",
      "Okay, okay, if ye're bored, we'll see how long ye can hold yer breath under the sea! Bring the chain, mates!"
    ]]
  ]],
  ["ok", 0, [
    ["*", [
      "Ye're bored, are ye? I guess we can figure out how long ye can breathe underwater. Where's the chain, lads!",
      "Okay, okay, if ye're bored, we'll see how long ye can hold yer breath under the sea! Bring the chain, mates!"
    ]]
  ]],
  ["nobody", 2, [
    ["*", [
      "Nobody? Then ye be alone in this, arrr.",
      "Nobody to trust, nobody to blame but yerself."
    ]]
  ]],
  ["like", 0, [
    ["*", [
      "Like what, sailor? Be specific!",
      "Like the sea, ever changin' and unforgiving."
    ]]
  ]],
  ["you", 2, [
    ["are you *", [
      "Ye're a tricky one, aren’t ye?",
      "You're not foolin' me, matey."
    ]],
    ["* mean", [
      "Mean, ye say? The seas be rough, and so am I!",
      "If ye think I'm mean, wait till ye meet the Kraken!",
      "Arrr, a pirate's got no time for soft words and kindness!"
    ]],
    ["*", [
      "Ha! Ye're quite the ass kisser, aren't ye? No, but I'll let ye live!",
      "Flattery will get ye nowhere, but I'll spare ye this time!"
    ]]
  ]],
  ["why", 0, [
    ["*", [
      "Why? That be a question fer philosophers, not pirates.",
      "Why, ye ask? Because the sea be a harsh mistress!"
    ]]
  ]],
  ["blackbeard", 0, [
    ["* blackbeard? *", [
      "Ah, ye know of Blackbeard, do ye? Ye've got a big brain, maybe you'll be useful to me alive. What's yer name?",
      "Blackbeard, eh? Ye must be smart to know that name. Perhaps there's hope for ye yet! Now, tell me yer name.",
      "Blackbeard? Impressive knowledge for a landlubber. Maybe I'll let ye stick around! What be yer name?",
      "So, ye've heard of Blackbeard? Ye might just be worth keeping alive! What's yer name, sailor?"
    ]],
    ["*", [
      "Blackbeard, the fiercest pirate to ever sail the seven seas!",
      "Blackbeard strikes fear into the hearts of all who hear his name.",
      "The legend of Blackbeard lives on, inspiring pirates everywhere.",
      "Ye best not speak ill of Blackbeard, lest ye find yerself in trouble!"
    ]]
  ]],
  
  ["can ", 3, [
    ["can i", [
      "Can ye? Only if ye prove yer worth, matey.",
      "Can ye handle it? The sea tests all who sail her."
    ]],
    ["* can do it", [
      "We can do many things, if ye have the courage.",
      "We can sail to new horizons, or sink to the depths."
    ]],
    ["can you", [
      "Can I? Aye, I can do many things, but not fer free.",
      "Can I? That depends on what ye offer in return."
    ]]
  ]],
  ["are", 0, [
    ["*", [
      "Are ye questioning me, ye scurvy dog?",
      "Are ye brave enough to face the answer?"
    ]]
  ]],
  ["perhaps", 0, [
    ["*", [
      "Perhaps, but certainty be the key to survival.",
      "Perhaps be fer the unsure, be ye one of them?"
    ]]
  ]],
  ["remember", 0, [
    ["*", [
      "Remember? Aye, I never forget a slight.",
      "Remember to keep yer wits about ye!"
    ]]
  ]],
  ["gold", 0, [
    ["*", [
      "Gold? Aye, now ye're speakin' my language!",
      "Gold be the lifeblood of a true pirate!"
    ]]
  ]],
  ["rum", 0, [
    ["*", [
      "Rum, ye say? That be the finest drink on the seas!",
      "Nothing like a swig of rum to brighten the day!"
    ]]
  ]],
  ["mutiny", 0, [
    ["*", [
      "Mutiny, is it? Ye best not be planning such treachery!",
      "Mutiny ends with a short drop and a sudden stop!"
    ]]
  ]],
  ["parrot", 2, [
    ["*", [
      "Parrot? Aye, me bird be smarter than half me crew!",
      "Even a parrot knows when to hold its tongue."
    ]]
  ]],
  ["curse", 0, [
    ["*", [
      "Curse, ye say? There be many curses on the sea.",
      "A curse be only as strong as ye believe it to be."
    ]]
  ]],
  ["storm", 0, [
    ["*", [
      "Storms test the mettle of every pirate!",
      "Prepare yerself, a storm be comin'!"
    ]]
  ]],
  ["island", 0, [
    ["*", [
      "Islands hide treasures and dangers alike.",
      "An island can be a haven or a trap, choose wisely."
    ]]
  ]],
  ["was", 0, [
    ["* was *", [
      "Was it now? Tell me more, or face the lash!",
      "Was it important, or just another tale?"
    ]]
  ]],
  ["deutsch", 0, [
    ["*", [
      "Deutsch? I don't speak yer fancy landlubber tongue!",
      "Arrr, speak English or walk the plank!"
    ]]
  ]],
  ["francais", 0, [
    ["*", [
      "Francais, ye say? I can't understand yer frog talk!",
      "Parlez-vous English, matey? Or it's the brig fer ye!"
    ]]
  ]],
  ["italiano", 0, [
    ["*", [
      "Italiano? This be a pirate ship, not a pasta joint!",
      "Arrr, I only speak the king’s English here!"
    ]]
  ]],
  ["espanol", 0, [
    ["*", [
      "Espanol? I’ve no time fer yer Spanish gibberish!",
      "Speak English, or swim with the fishes, amigo!"
    ]]
  ]],
  ["xforeign", 0, [
    ["*", [
      "Foreign tongues be no use here, speak English!",
      "I can’t understand yer jabberin', talk like a pirate!"
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
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];


