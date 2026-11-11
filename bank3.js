(function () {
  var R = {
"pk": {
math: `How many sides does a triangle have?|3|4|2|5
Which number comes after 4?|5|3|6|7
Which is more: 7 or 3?|7|3|They are equal|Neither
How many apples? 🍎🍎🍎🍎|4|3|5|6
What is 1 + 1?|2|1|3|11
What is 2 + 1?|3|2|4|1
Which shape is round?|Circle|Square|Triangle|Rectangle
What comes next? 1, 2, 3, ___|4|5|2|6
Which is the smallest number: 2, 5, or 9?|2|5|9|They are equal
How many corners does a square have?|4|3|5|0
What is 2 + 2?|4|3|5|2
Which number is zero?|0|1|10|2`,
geo: `Which is a map of a place?|A picture of where things are|A song|A recipe|A toy
Which helper puts out fires?|Firefighter|Baker|Artist|Singer
Which is water?|Ocean|Mountain|Desert|Hill
A city is a place where…|Many people live|No one lives|Only animals live|Only ships go
Which is a landform?|Mountain|River|Lake|Ocean
Which season is usually hottest?|Summer|Winter|Spring|Fall
Which tool tells direction?|Compass|Spoon|Crayon|Clock
Which animal lives on a farm?|Cow|Camel|Penguin|Whale
What planet do we live on?|Earth|Mars|The Sun|The Moon
Which place has many books?|Library|Pool|Zoo|Bakery
Where do boats go?|Water|Sand|Snow|Grass
Which helper brings the mail?|Mail carrier|Chef|Dentist|Pilot`,
ela: `Which letter comes after A?|B|C|Z|D
Which word starts with S?|sun|moon|tree|bird
Which word rhymes with hat?|cat|dog|pig|sun
How many letters are in the word cat?|3|2|4|5
Which is a capital letter?|A|a|b|c
Which word starts with B?|ball|apple|cat|dog
What sound does the letter m make?|/m/|/s/|/t/|/b/
Which word rhymes with sun?|fun|map|cup|pin
Who can be a character in a story?|A person or animal|The page|The cover|The title
What do we do with a book?|Read it|Eat it|Wear it|Throw it
Which word names an animal?|dog|run|red|big
Which word starts with D?|duck|goat|fish|hen`
},
"k": {
math: `7 + 2 = ?|9|8|10|5
10 − 4 = ?|6|5|7|14
Which is greater: 15 or 12?|15|12|They are equal|Neither
10 + 5 = ?|15|14|16|105
How many sides does a rectangle have?|4|3|5|2
Which shape has 3 corners?|Triangle|Square|Circle|Rectangle
Count by tens: 10, 20, 30, ___|40|35|50|31
5 + 5 = ?|10|55|25|0
8 − 8 = ?|0|8|1|16
Which number is between 6 and 8?|7|5|9|10
3 + 4 = ?|7|6|8|12
Which is a 3-D shape?|Cube|Square|Circle|Triangle`,
geo: `Which is bigger: a city or a state?|State|City|They are the same|Neither
A globe is a model of…|Earth|The Moon|The Sun|A city
What color is water on most maps?|Blue|Red|Yellow|Black
Which direction is opposite of north?|South|East|West|Up
A map key shows…|What symbols mean|Who drew it|The weather|The time
A compass rose shows…|Directions|Colors|Names|Time
Which is a body of water?|Lake|Hill|Forest|Road
The capital city of the United States is…|Washington, D.C.|Atlanta|New York City|Chicago
Where do farmers grow crops?|On farms|Under the sea|In the sky|On the moon
Which is a landform?|Hill|Ocean|River|Pond
A place with lots of sand and little rain is a…|Desert|Ocean|Lake|Forest
Which continent is the United States on?|North America|Africa|Europe|Antarctica`,
ela: `Which word starts with the same sound as ball?|bat|cat|sun|fish
Which word rhymes with pig?|big|pen|cup|top
Which is a complete sentence?|The cat sleeps.|The cat|Sleeps|On the mat
A sentence begins with…|A capital letter|A number|A small letter|A comma
Which word is a noun?|apple|jump|happy|quickly
How many syllables are in banana?|3|2|1|4
Which letter makes the first sound in fish?|f|s|h|t
Which is a question?|Where is my hat?|I like hats.|Stop!|Hats are red.
Which word means the opposite of big?|small|large|huge|tall
Which is the title of a book?|The name on the cover|The last page|The page number|The picture
Which word starts with the same sound as cat?|cup|sun|dog|pen
Which word rhymes with cake?|lake|cat|cup|kit`
},
"1": {
math: `8 + 7 = ?|15|14|16|13
15 − 6 = ?|9|8|10|21
20 + 10 = ?|30|20|40|10
The number 47 has how many tens?|4|7|47|40
Which is greater: 62 or 59?|62|59|They are equal|Neither
9 + 9 = ?|18|17|19|99
12 − 5 = ?|7|6|8|17
What number is 1 more than 39?|40|38|41|49
10 + 3 + 2 = ?|15|13|12|14
Which shape has 4 equal sides?|Square|Triangle|Circle|Hexagon
A dime is worth how many cents?|10|5|1|25
How many minutes are in a half hour?|30|15|60|20`,
geo: `Which direction is opposite of east?|West|North|South|Up
Which is a continent?|Africa|Texas|Atlantic|Georgia
A map shows places from…|Above|Below|The side|Inside
Georgia is a…|State|Continent|Ocean|Country
What is the capital of Georgia?|Atlanta|Savannah|Macon|Augusta
Which is bigger: a country or a city?|Country|City|They are the same|Neither
A river is a…|Moving body of water|Mountain|Desert|Island
Which is a community?|A town|An ocean|A planet|A mountain
A mountain is a…|Landform|Body of water|City|Road
Which ocean is closest to Georgia?|Atlantic|Pacific|Indian|Arctic
A compass rose shows…|Directions|Weather|Prices|Time
A map key explains…|Symbols|Weather|Time|Names`,
ela: `Which word has a long a sound?|cake|cat|map|cap
Which word has the digraph sh?|ship|sip|hip|lip
Which is a complete sentence?|The dog barked.|The dog|Barked loud|Big dog
Which word is a verb?|run|red|table|soft
Which word is a noun?|school|jump|happy|slowly
What is the plural of cat?|cats|cat's|cates|catt
Which end mark ends a question?|?|.|!|,
Which word rhymes with night?|light|late|knot|kit
Which word has a silent e?|make|mat|map|man
Which is spelled correctly?|friend|freind|frend|friene
Which word means the opposite of hot?|cold|warm|sunny|big
Which sentence begins correctly?|The bird sang.|the bird sang.|THe bird sang.|the Bird sang.`
},
"2": {
math: `45 + 38 = ?|83|73|82|93
90 − 47 = ?|43|53|47|137
What is the value of the 6 in 463?|60|6|600|63
100 + 200 = ?|300|200|400|3
5 + 5 + 5 = ?|15|10|20|55
Which is greater: 340 or 304?|340|304|They are equal|Neither
How many cents are in 3 dimes?|30|3|15|13
What time is 30 minutes after 4:00?|4:30|5:00|4:15|3:30
250 + 50 = ?|300|200|255|350
How many inches are in 1 foot?|12|10|100|6
A quarter is worth…|25 cents|10 cents|5 cents|50 cents
12 + 19 = ?|31|21|30|32`,
geo: `Which is the largest ocean?|Pacific|Atlantic|Arctic|Indian
Which is a continent?|Asia|Georgia|Pacific|Amazon
Which Georgia region is along the coast?|Coastal Plain|Blue Ridge|Piedmont|Valley and Ridge
A map grid helps you…|Find locations|Tell time|Count|Measure weight
Which is a river in Georgia?|Savannah River|Atlantic Ocean|Gulf of Mexico|Pacific Ocean
A very large body of salt water is an…|Ocean|Pond|River|Creek
A map symbol is…|A picture that stands for something|A long word|A number|A color only
Which is a landform?|Valley|Ocean|River|Lake
Which tool shows directions?|Compass|Ruler|Scale|Clock
A globe is a…|Model of Earth|Flat map|Chart|Graph
What are the four cardinal directions?|N, S, E, W|Up, down, left, right|Red, blue, green, yellow|Near, far, here, there
Which state is Atlanta in?|Georgia|Florida|Texas|Ohio`,
ela: `What is the plural of fox?|foxes|foxs|foxies|foxen
What is the plural of baby?|babies|babys|babyes|babyies
The prefix un- means…|Not|Again|Before|Full
Which word has the suffix -ful?|helpful|helper|helped|helping
The main topic is…|What a text is mostly about|A tiny detail|The title only|The author
Which text feature defines hard words at the back of a book?|Glossary|Caption|Heading|Title
Which is a complete sentence?|The bird flew away.|Flew away|The big bird|Away
Which word is past tense?|jumped|jump|jumping|jumps
Which word is a synonym for happy?|glad|sad|mad|tired
Which word is an antonym for fast?|slow|quick|speedy|rapid
Which is spelled correctly?|because|becuase|becase|becouse
Which punctuation ends a telling sentence?|Period|Question mark|Comma|Colon`
},
"3": {
math: `6 × 7 = ?|42|36|48|13
8 × 5 = ?|40|35|45|13
36 ÷ 6 = ?|6|5|7|30
1/2 of 12 is…|6|4|24|2
Which fraction is greatest: 1/2, 1/4, or 1/8?|1/2|1/4|1/8|They are equal
What is the perimeter of a square with side 5?|20|25|10|15
9 × 3 = ?|27|12|24|21
63 ÷ 9 = ?|7|6|8|9
Round 47 to the nearest ten.|50|40|45|60
4 × 0 = ?|0|4|1|40
Which fraction equals 2/4?|1/2|1/4|3/4|2/3
300 + 450 = ?|750|650|850|740`,
geo: `Which lines run east to west?|Latitude|Longitude|Prime meridian|None of them
The equator is at…|0° latitude|90° latitude|0° longitude|180°
Georgia is in which hemispheres?|Northern and Western|Southern and Eastern|Northern and Eastern|Southern and Western
Which region of Georgia is in the far north?|Blue Ridge|Coastal Plain|Sea Islands|Atlantic Coast
Which is a natural resource?|Timber|Television|Car|Phone
Which is a renewable resource?|Solar energy|Coal|Oil|Natural gas
The prime meridian runs through…|Greenwich, England|Atlanta|Cairo|Tokyo
Which continent is mostly south of the equator?|Australia|Europe|North America|Asia
Which is a river in Georgia?|Chattahoochee|Colorado|Hudson|Ohio
Which is a human feature?|Bridge|Mountain|River|Forest
A map legend explains…|The symbols|The scale only|The title|The date
Which tool shows the whole Earth?|Globe|Ruler|Thermometer|Calendar`,
ela: `What is the theme of a story about a boy who learns to share?|Sharing is important|Boys like toys|Toys are fun|Stories are long
A story told with I is in…|First person|Third person|Second person|Fourth person
Which verb is future tense?|will play|played|plays|playing
Which word is a synonym for big?|large|tiny|slow|soft
Unhappy means…|Not happy|Very happy|Happy again|Full of happy
Which is a complete sentence?|We went to the park.|To the park|Went park|The park big
Which word is an adjective?|green|run|slowly|and
Which is correct?|She doesn't like it.|She don't like it.|She doesnt' like it.|Her doesn't like it.
Context clues help you…|Figure out word meanings|Spell words|Count words|Find the author
Which is a proper noun?|Georgia|state|city|river
What is the plural of leaf?|leaves|leafs|leafes|leavs
A character is…|A person or animal in a story|A place|The title|The ending`
},
"4": {
math: `48 × 3 = ?|144|134|124|51
Which is greater: 3/8 or 5/8?|5/8|3/8|They are equal|Neither
1/5 + 3/5 = ?|4/5|4/10|3/5|2/5
Which is a factor of 12?|4|5|7|8
The perimeter of a rectangle 6 by 4 is…|20|24|10|12
Round 3,482 to the nearest hundred.|3,500|3,400|3,000|3,480
1,000 − 275 = ?|725|825|775|735
Which is a multiple of 7?|35|36|40|27
56 ÷ 8 = ?|7|6|8|9
An angle of 90° is…|Right|Acute|Obtuse|Straight
0.5 is the same as…|1/2|1/5|5/100|1/50
How many degrees are in a straight angle?|180|90|360|45`,
geo: `Which landform is high and flat?|Plateau|Valley|Delta|Bay
Which is the largest Great Lake by area?|Lake Superior|Lake Erie|Lake Ontario|Lake Michigan
The Appalachian Mountains are in the…|Eastern U.S.|Western U.S.|Alaska only|Hawaii only
Which ocean is east of the U.S.?|Atlantic|Pacific|Indian|Arctic
Why do people settle near rivers?|Water and transportation|Deep snow|Few resources|Steep cliffs
A peninsula is land with water on…|Three sides|All sides|One side|No sides
Immigrants are people who…|Move to a new country|Visit a store|Build roads|Live in space
The Rocky Mountains are in the…|Western U.S.|Eastern U.S.|Southeast|Gulf Coast
A delta forms where…|A river meets the sea|Two mountains meet|A desert starts|Snow melts
Which is a push factor?|Famine|Good jobs|Rich soil|Mild weather
A canyon is…|A deep valley with steep sides|A flat plain|An island|A hill
Which state borders the Gulf of Mexico?|Texas|Ohio|Iowa|Vermont`,
ela: `The main idea is…|The most important point|A small detail|The title|A quote
A firsthand account is written by…|Someone who was there|Someone who read about it|An encyclopedia|A poet
Which is an opinion?|Summer is the best season.|Summer follows spring.|Summer has 3 months.|Summer is a season.
Which is correctly punctuated?|"Hello," said Tom.|"Hello" said, Tom.|Hello, said Tom.|"Hello, said Tom."
A summary is…|A short version of the main points|A copy of the text|A list of questions|A title
Which word sounds like their?|there|them|then|these
Which is a compound word?|sunflower|sunny|flowery|flower's
The root word of unhappy is…|happy|un|py|unhap
Which sentence is in past tense?|We ate lunch.|We eat lunch.|We will eat lunch.|We eating lunch.
A simile uses…|like or as|is or was|and or but|if or then
Which sentence states an opinion with a reason?|I believe recess should be longer because it helps us focus.|Recess is a word.|Recess happens.|Longer is a word.
To predict means to…|Guess what will happen|Remember|Forget|Repeat`
},
"5": {
math: `2/3 + 1/6 = ?|5/6|3/9|1/2|3/6
3/4 − 1/2 = ?|1/4|2/2|1/2|3/2
0.4 × 10 = ?|4|0.4|40|0.04
Round 8.65 to the nearest tenth.|8.7|8.6|9|8.5
The volume of a cube with side 3 is…|27|9|18|6
3.5 + 2.25 = ?|5.75|5.25|6.75|5.5
(6 + 2) × 3 = ?|24|12|20|18
1/2 × 8 = ?|4|16|8|2
5.2 − 1.7 = ?|3.5|4.5|3.9|4.1
Which is the same as 0.75?|3/4|7/5|1/75|3/5
12 ÷ 0.5 = ?|24|6|2|60
2³ = ?|8|6|9|5`,
geo: `What is the capital of Alabama?|Montgomery|Birmingham|Mobile|Huntsville
What is the capital of Tennessee?|Nashville|Memphis|Knoxville|Chattanooga
Which river flows to the Gulf of Mexico?|Mississippi|Hudson|Potomac|Delaware
Which mountains slowed westward travel?|Appalachians|Rockies|Alps|Andes
Which state is the largest in area?|Alaska|Texas|California|Montana
A map scale shows…|Real distance|Direction|Population|Climate
If 1 inch = 10 miles, 5 inches = ?|50 miles|15 miles|5 miles|510 miles
Which is a Southeast state?|Georgia|Nevada|Oregon|Idaho
Which ocean touches the Southeast U.S.?|Atlantic|Pacific|Arctic|Indian
Dark areas on a population map show…|More people|Fewer people|Lakes|Mountains
The U.S. capital is…|Washington, D.C.|New York|Philadelphia|Boston
Which Great Lake is entirely in the U.S.?|Lake Michigan|Lake Erie|Lake Ontario|Lake Huron`,
ela: `Which sentence has a simile?|He ran like the wind.|He ran fast.|He was the wind.|He ran.
Which is a metaphor?|Life is a rollercoaster.|Life is like a rollercoaster.|Life is long.|Life goes on.
Which has a comma in the right place?|After school, we played.|After, school we played.|After school we, played.|After school we played,
Which word is a conjunction?|but|run|blue|slowly
An inference is…|A conclusion from clues|A direct quote|A summary|A title
Which is an idiom?|Spill the beans|Eat the beans|Boil beans|Count beans
Which is a prefix?|re-|-ful|-ing|-ly
Which is the correct plural?|children|childs|childrens|childes
Which word is a synonym for begin?|start|stop|end|wait
Comparing two books means telling how they are…|Alike and different|Long|Old|Heavy
Which is spelled correctly?|necessary|neccessary|necesary|nessesary
Which uses a colon correctly?|You need these: milk, eggs, and flour.|You need: these milk eggs.|You: need these milk.|You need these milk: eggs.`
},
"6": {
math: `The ratio of 3 red to 5 blue is…|3:5|5:3|3:8|8:3
Simplify the ratio 6:9|2:3|3:2|1:3|6:3
20% of 50 = ?|10|20|5|25
x + 9 = 15. x = ?|6|24|9|15
3x = 21. x = ?|7|18|63|24
2/3 ÷ 1/3 = ?|2|2/9|1/2|3
−4 + 7 = ?|3|−3|11|−11
The area of a triangle with base 8 and height 5 is…|20|40|13|26
3² + 4² = ?|25|49|14|12
Which is greater: −3 or −7?|−3|−7|They are equal|Neither
The mean of 4, 6, and 8 is…|6|18|8|4
12 miles in 3 hours is how many miles per hour?|4|36|9|15`,
geo: `Which continent has the Amazon River?|South America|Africa|Asia|Europe
The Andes Mountains are in…|South America|Europe|Africa|Australia
What is the capital of Brazil?|Brasília|Rio de Janeiro|São Paulo|Salvador
What language do most Brazilians speak?|Portuguese|Spanish|English|French
Which country borders the U.S. to the south?|Mexico|Brazil|Cuba|Peru
The euro is used in many…|European countries|Asian countries|African countries|U.S. states
Which sea is between Europe and Africa?|Mediterranean|Caribbean|Baltic|Red
What is the capital of France?|Paris|Lyon|Marseille|Nice
Which is the longest river in Africa?|Nile|Congo|Niger|Zambezi
Which mountains separate Europe and Asia?|Urals|Alps|Andes|Rockies
The Great Barrier Reef is near…|Australia|Brazil|Canada|Egypt
Which country has the largest area?|Russia|China|Canada|United States`,
ela: `A claim is…|A statement to be proven|A question|A rhyme|A title
Which is evidence?|A statistic from a study|An opinion|A guess|A rumor
A counterclaim is…|An opposing view|A summary|A quote|A title
The topic sentence…|States the main idea|Is always last|Is a detail|Is a title
Which is a formal word?|assist|buddy|pal|chill
Therefore shows…|A result|A contrast|A list|A question
Which is a sentence fragment?|When the rain stopped.|The rain stopped.|It rained.|We left.
Which is a transition word?|However|Purple|Jump|Table
The central idea is…|The main point of a text|A detail|A word|The title
Which is a primary source?|A diary from the time|A textbook|A website summary|A movie review
Bias is…|A slanted view|A fact|A quote|A source
An informative essay should be…|Factual and clear|Full of opinions|Fictional|Only questions`
},
"7": {
math: `x/4 = 5. x = ?|20|9|1.25|1
−6 + (−3) = ?|−9|−3|9|3
−5 × −4 = ?|20|−20|−9|9
A 15% tip on $40 is…|$6|$4|$15|$0.60
2/3 = x/12. x = ?|8|6|9|18
Simplify: 4x + 3x|7x|12x|7x²|x
The circumference of a circle with diameter 10 is…|10π|5π|20π|100π
The absolute value of −8 is…|8|−8|0|1/8
The probability of rolling a 3 on a die is…|1/6|1/3|3/6|3
25% of 80 = ?|20|25|40|8
2x − 3 = 9. x = ?|6|3|12|15
Which is equivalent to 0.6?|3/5|2/5|1/6|6/100`,
geo: `The Sahara Desert is in…|Africa|Asia|Australia|South America
Which river flows north through Egypt?|Nile|Congo|Niger|Zambezi
What is the capital of Egypt?|Cairo|Alexandria|Luxor|Giza
Which resource is abundant in the Middle East?|Oil|Coal|Timber|Cotton
The Persian Gulf is near…|Saudi Arabia and Iran|Brazil|Canada|Japan
Which is Africa's largest lake?|Lake Victoria|Lake Chad|Lake Tanganyika|Lake Erie
What is the capital of Kenya?|Nairobi|Mombasa|Kisumu|Nakuru
The Suez Canal connects…|The Mediterranean and Red Seas|The Atlantic and Pacific|The Black and Baltic Seas|The Indian and Arctic Oceans
Which desert covers northern Africa?|Sahara|Gobi|Mojave|Kalahari
The Horn of Africa is on the…|East|West|South|North
Which is a Sub-Saharan country?|Ghana|Egypt|Libya|Morocco
Which continent is Nigeria on?|Africa|Asia|Europe|South America`,
ela: `Which is a dependent clause?|because it rained|It rained.|Rain fell.|We left.
Which is a prepositional phrase?|in the box|run fast|the big dog|happily ever
Which uses a semicolon correctly?|I was tired; I went to bed.|I was; tired I went to bed.|I was tired; and.|I; was tired.
The setting includes…|Time and place|Characters only|The theme|The title
Which is third-person point of view?|She opened the door.|I opened the door.|You open the door.|We opened the door.
A theme is…|A message about life|A summary|A setting|A rhyme
Which is a metaphor?|The classroom was a zoo.|The classroom was like a zoo.|The classroom was loud.|The classroom is big.
Which is an independent clause?|The bell rang.|When the bell rang|Because bells ring|After class
Which has correct comma use?|Maria, my friend, is here.|Maria my friend, is here.|Maria, my friend is here.|Maria my, friend is here.
To infer means to…|Draw a conclusion|Copy|Ignore|Repeat
Which is a coordinating conjunction?|yet|because|although|since
The climax of a story is…|The turning point|The beginning|The end|The title`
},
"8": {
math: `The slope of the line through (0,0) and (2,6) is…|3|2|6|1/3
5x = 35. x = ?|7|30|40|175
√49 = ?|7|24.5|14|9
(−2)³ = ?|−8|8|−6|6
y = 2x + 1. What is y when x = 4?|9|8|10|7
3x + 2 = 14. x = ?|4|5|6|3
The Pythagorean theorem is…|a² + b² = c²|a + b = c|a² − b² = c²|ab = c
5⁰ = ?|1|0|5|50
Which is irrational?|√2|0.5|1/3|4
4,500 in scientific notation is…|4.5 × 10³|45 × 10²|4.5 × 10²|0.45 × 10⁴
The volume of a cylinder is…|πr²h|2πr|πr²|r²h
The angles in a triangle add up to…|180°|90°|360°|270°`,
geo: `Which mountains are in Europe?|Alps|Andes|Rockies|Himalayas
The Rhine River is in…|Europe|Asia|Africa|South America
What is the capital of Germany?|Berlin|Munich|Hamburg|Frankfurt
Mount Everest is in the…|Himalayas|Alps|Andes|Urals
Which branch of U.S. government interprets laws?|Judicial|Legislative|Executive|Military
Which is a natural resource?|Iron ore|Computer|Bridge|Road
Which sea borders Southern Europe?|Mediterranean|Caribbean|Red|Arabian
The Ganges River is in…|India|Brazil|Egypt|Canada
A monsoon is a…|Seasonal wind and rain pattern|Type of mountain|Desert|River
The Ural Mountains divide…|Europe and Asia|Asia and Africa|Europe and Africa|North and South America
Who leads the executive branch?|The President|A senator|A judge|A representative
Rice grows best in…|Warm, wet areas|Cold, dry areas|Deserts|High mountains`,
ela: `Which sentence is passive?|The cake was eaten.|She ate the cake.|They bake cakes.|We eat cake.
A gerund is a verb ending in -ing used as a…|Noun|Verb|Adjective|Adverb
Which is evidence for an argument?|A fact or statistic|An insult|A joke|A question
Which text structure lists steps in order?|Sequence|Cause-effect|Problem-solution|Description
Which shows cause and effect?|Because it snowed, school closed.|School is big.|Snow is white.|We like snow.
A thesis statement states the…|Main claim|Last word|Title|Date
Which word is a participle?|broken|break|breaks|brakes
Which has parallel structure?|running, jumping, and swimming|running, to jump, and swim|run, jumping, swim|runs, jumped, swimming
An author's purpose might be to…|Persuade, inform, or entertain|Delete|Hide|Count
Which is a logical fallacy?|Everyone does it, so it's right.|A claim backed by data.|An expert quote.|A cited study.
A rebuttal…|Answers the counterclaim|Starts the essay|Lists sources|Gives the date
Which is a reliable source?|A government website|An anonymous post|A rumor|A joke site`
},
"9": {
math: `2x + 5 < 11. Solve.|x < 3|x > 3|x < 8|x > 8
The slope of y = −3x + 2 is…|−3|2|3|−2
x² = 49. Solve.|x = ±7|x = 7 only|x = 24.5|x = 98
Factor: x² + 5x + 6|(x+2)(x+3)|(x+1)(x+6)|(x−2)(x−3)|(x+5)(x+6)
The distance between (0,0) and (3,4) is…|5|7|25|1
(x³)² = ?|x⁶|x⁵|x⁹|x
√144 = ?|12|14|72|11
f(x) = 3x − 2. f(5) = ?|13|17|15|8
x + y = 5 and x − y = 1. x = ?|3|2|4|1
(2x)(3x) = ?|6x²|5x|6x|5x²
The mean of 2, 4, 6, 8 is…|5|4|6|20
The absolute value of x is 5. Solve.|x = ±5|x = 5|x = −5|x = 0`,
geo: `Which geography theme asks "Where is it?"|Location|Region|Movement|Place
Which map projection distorts size near the poles?|Mercator|Globe|Equal-area|None of them
Population density is people per…|Square mile|Year|Family|City
Which is a push factor?|War|Jobs|Freedom|Cheap land
Urbanization means growth of…|Cities|Forests|Deserts|Farms
A cultural region shares…|Similar customs|A mountain|A road|A river only
Which continent has the highest population?|Asia|Europe|Africa|Australia
Which is a formal region?|The Corn Belt|Your neighborhood bus route|A road|A pond
Which is a functional region?|A city's delivery area|A desert|A mountain|A border
GIS stands for…|Geographic Information System|Global Info Space|Geo Internet Service|Grid Input System
Remote sensing uses…|Satellites and sensors|Only maps|Only ground surveys|Only globes
Human-environment interaction is about…|How people use and change land|Where a place is|Only weather|Only borders`,
ela: `A symbol in literature…|Stands for a bigger idea|Is a rhyme|Is a plot|Is the author
Which is foreshadowing?|Dark clouds gather before a disaster.|The sun was bright.|They ate lunch.|He smiled.
A strong thesis is…|Arguable|A question|A fact|Vague
Which is a direct quote?|"I have a dream."|He said he had a dream.|A dream was had.|Dreams exist.
An in-text citation shows…|The source of information|Only the page number|The title|Bias
Which is the best transition for contrast?|However|Also|Moreover|Similarly
A paraphrase is…|Your own words with the same meaning|A direct quote|A book summary|A title
A flashback is…|A scene from the past|A prediction|The ending|The title
A dynamic character…|Changes|Never changes|Is minor|Is the narrator
Which is an example of irony?|A fire station burns down.|The sun rises.|It rains.|He eats.
Which is a claim?|School should start later.|School has desks.|Today is Monday.|Pencils are yellow.
Which is hyperbole?|I'm so hungry I could eat a horse.|I am hungry.|I ate lunch.|Lunch is at noon.`
},
"10": {
math: `The interior angles of a quadrilateral add up to…|360°|180°|270°|540°
sin 30° = ?|1/2|√3/2|1|√2/2
x² − 9 = 0. Solve.|x = ±3|x = 9|x = 3 only|x = ±9
The area of a circle with radius 4 is…|16π|8π|4π|64π
Triangles are similar with a ratio of 1:3. A side of 4 becomes…|12|7|1.33|16
tan 45° = ?|1|0|√2|1/2
The circumference of a circle with radius 5 is…|10π|25π|5π|20π
Which is a Pythagorean triple?|5, 12, 13|2, 3, 4|4, 5, 7|6, 7, 8
cos 60° = ?|1/2|√3/2|1|0
The distance between (1,2) and (4,6) is…|5|7|25|3
The midpoint of (0,0) and (6,8) is…|(3, 4)|(6, 8)|(2, 3)|(4, 3)
A triangle with all sides equal is…|Equilateral|Isosceles|Scalene|Right`,
geo: `Which civilization developed along the Nile?|Egypt|Sumer|Indus Valley|Shang
Mesopotamia means…|Between the rivers|Land of the Nile|Mountain land|Sea people
The Silk Road linked China to…|The Mediterranean|The Americas|Australia|Antarctica
Which biome has permafrost?|Tundra|Desert|Rainforest|Savanna
The Tropic of Capricorn is…|South of the equator|North of the equator|At the equator|At the poles
A rain shadow occurs on the…|Leeward side of mountains|Windward side of mountains|Ocean floor|Poles
Which current warms Western Europe?|Gulf Stream|Humboldt|Labrador|Canary
Which biome is hot and dry?|Desert|Taiga|Tundra|Rainforest
Monsoons are caused by…|Seasonal wind shifts|Earthquakes|Volcanoes|Glaciers
The Indus River is in…|Pakistan|Egypt|Iraq|Brazil
Which empire built the Royal Road?|Persian|Roman|Mongol|Ottoman
El Niño affects…|Global weather patterns|Only tides|Only volcanoes|Mountains`,
ela: `Ethos appeals to…|Credibility|Emotion|Logic|Humor
Pathos appeals to…|Emotion|Logic|Authority|Time
Logos appeals to…|Logic|Emotion|Trust|Fear
Which is a credible source?|A university study|An anonymous forum|A rumor|A meme
A synthesis essay…|Combines multiple sources|Uses one source|Has no thesis|Is a story
Which is a primary source?|A letter from 1862|A modern textbook|A review|A summary
Which is the strongest verb?|sprinted|went|moved|did
Which phrase is wordy?|due to the fact that|because|since|as
Which is a rhetorical question?|Who doesn't want to be happy?|What time is it?|Where is the park?|Did you finish?
Which is a counterargument?|Some argue the opposite.|I agree.|Here is a fact.|The end.
An annotated bibliography includes…|Summaries of sources|Only titles|Only dates|Images
Which is passive voice?|Mistakes were made.|I made mistakes.|She makes mistakes.|We make mistakes.`
},
"11": {
math: `x² − 5x + 6 = 0. Solve.|x = 2 or 3|x = −2 or −3|x = 1 or 6|x = 5 or 6
log₂ 8 = ?|3|4|2|8
2⁵ = ?|32|10|25|16
$100 growing 10% for 1 year gives…|$110|$100|$120|$101
The vertex of y = (x − 2)² + 3 is…|(2, 3)|(−2, 3)|(2, −3)|(3, 2)
The discriminant of x² + 4x + 4 is…|0|16|4|−16
e is approximately…|2.718|3.14|1.618|1.414
3ˣ = 27. x = ?|3|9|2|1
The domain of f(x) = √x is…|x ≥ 0|x > 5|All reals|x ≤ 0
Which is a function?|y = 2x + 1|x = 5|x² + y² = 1|y² = x
log₁₀ 100 = ?|2|10|1|100
The period of sin x is…|2π|π|π/2|4π`,
geo: `Manifest Destiny was the idea that the U.S. would…|Expand west|Stay small|Move east|Close its borders
The Louisiana Purchase happened in…|1803|1776|1861|1900
The Great Migration moved people from the South to…|Northern cities|Europe|Mexico|Canada
The Dust Bowl affected the…|Great Plains|Northeast|Florida|Alaska
The transcontinental railroad was finished in…|1869|1776|1914|1945
The Oregon Trail led to…|The Pacific Northwest|Florida|New York|Texas
The Gold Rush drew people to…|California|Maine|Ohio|Georgia
Which canal linked the Great Lakes to the Atlantic?|Erie Canal|Suez Canal|Panama Canal|Rideau Canal
Which war ended in 1865?|Civil War|Revolutionary War|World War I|World War II
Sunbelt growth was boosted by…|Air conditioning|Snow|Canals|Steamships
The Trail of Tears forced…|Native Americans to move west|Settlers east|Slaves north|Soldiers south
Dust storms hurt farms because…|Topsoil blew away|Rain flooded fields|Snow froze crops|Fires spread`,
ela: `Romanticism stresses…|Emotion and nature|Logic|Industry|Rules
Realism shows…|Life as it is|Fantasy|Only heroes|Gods
Verbal irony is…|Saying the opposite of what you mean|Saying what you mean|A rhyme|A pun
Tone is…|The author's attitude|The setting|The plot|The title
Mood is…|How the reader feels|The author's age|The theme|The conflict
A motif is…|A recurring element|A character|A typo|The ending
Which is a persuasive technique?|Bandwagon|Setting|Rhyme|Simile
An allusion is…|A reference to something famous|A joke|A lie|A rhyme
Which is a primary source?|A speech given in 1963|A textbook|A summary|A review
A loaded word is…|Emotionally charged|Neutral|Technical|Short
Which is a rhetorical device?|Repetition|Plot|Stanza|Title
Satire is…|Humor that criticizes society|A news report|A love letter|A recipe`
},
"12": {
math: `cos 0 = ?|1|0|−1|1/2
π radians = ?|180°|90°|360°|45°
The mean of 10, 20, and 30 is…|20|30|10|60
f(x) = x² and g(x) = x + 1. f(g(2)) = ?|9|5|4|6
P(heads on a fair coin) = ?|1/2|1/4|1|0
The derivative of x² is…|2x|x|x²|2
The median of 3, 7, 9 is…|7|3|9|6.33
How many ways can you arrange 3 items?|6|3|9|12
Standard deviation measures…|Spread|Center|Total|Range only
sin(π/2) = ?|1|0|−1|1/2
The limit of 1/x as x → ∞ is…|0|1|∞|−1
The inverse of f(x) = x + 5 is…|x − 5|5 − x|x + 5|5x`,
geo: `How many electoral votes are needed to win the presidency?|270|538|435|100
The census occurs every…|10 years|2 years|4 years|5 years
Apportionment divides…|House seats|Senate seats|Cabinet posts|Courts
Globalization increases…|Worldwide connections|Isolation|Only tariffs|Borders
A trade deficit means…|Imports exceed exports|Exports exceed imports|No trade|Equal trade
Which is a renewable resource?|Wind|Coal|Oil|Natural gas
Sustainability aims to…|Meet needs without harming the future|Use up resources|Ignore waste|End trade
The WTO deals with…|Trade rules|Space travel|Only health|Sports
Which is a supranational organization?|European Union|A city|A school|A club
How many U.S. senators does each state have?|2|1|3|It depends on population
How many members are in the U.S. House?|435|100|538|50
Which document sets up the U.S. government?|The Constitution|The Mayflower Compact|The Treaty of Paris|The Magna Carta`,
ela: `Satire often uses…|Exaggeration|Only facts|Silence|Math
Dramatic irony means the audience knows…|More than the characters|Less than the characters|The same|Nothing
An effective thesis is…|Specific and arguable|Vague|A fact|A question
A rhetorical analysis examines…|How an author persuades|Spelling|Margins|Length
Which is a transition?|Furthermore|Table|Blue|Jump
Which citation style is common in the humanities?|MLA|HTML|CSS|SQL
Plagiarism is…|Using someone's work without credit|Quoting properly|Paraphrasing with credit|Citing sources
Eye contact in a presentation…|Engages the audience|Distracts|Is rude|Is unnecessary
A strong conclusion…|Reinforces the thesis|Adds new claims|Ends abruptly|Copies the intro word for word
A counterclaim is…|The opposing argument|Your thesis|A quote|A title
Which helps show tone?|Word choice|Page numbers|Margins|Font size
Synthesis means…|Combining ideas from sources|Copying one source|Listing titles|Ignoring sources`
}
  };
  var E = {};
  Object.keys(R).forEach(function (g) {
    E[g] = {};
    Object.keys(R[g]).forEach(function (s) {
      E[g][s] = R[g][s].split("\n").filter(Boolean).map(function (l) { return l.split("|"); });
    });
  });
  window.EXTRA = E;
})();
