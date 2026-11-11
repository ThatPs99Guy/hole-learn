(function () {
  function r(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[r(0, a.length - 1)]; }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function fr(n, d) { var g = gcd(n, d); n /= g; d /= g; return d === 1 ? "" + n : n + "/" + d; }
  var G = window.GEN || {};

  var dividing = function () { var a = r(1, 4), b = r(a + 1, 6), c = r(1, 4), d = r(c + 1, 7);
    return [a + "/" + b + " ÷ " + c + "/" + d + " = ?", fr(a * d, b * c), fr(a * c, b * d), fr(b * c, a * d), fr(a * d, b * d)]; };
  var likeDen = G["Adding and subtracting with like denominators"];
  var pctChange = function () { var o = pick([20, 40, 50, 80, 100]), p = pick([10, 20, 25, 50]), up = Math.random() < .5, n = up ? o + o * p / 100 : o - o * p / 100;
    return ["A price goes from $" + o + " to $" + n + ". What is the percent change?", p + "% " + (up ? "increase" : "decrease"), p + "% " + (up ? "decrease" : "increase"), (p * 2) + "% " + (up ? "increase" : "decrease"), (p + 10) + "% " + (up ? "increase" : "decrease")]; };
  var order = function () { var a = r(2, 9), b = r(2, 9), c = r(2, 5), t = r(0, 2), q, ans, w;
    if (t === 0) { q = a + " + " + b + " × " + c; ans = a + b * c; w = [(a + b) * c, a + b + c, a * b + c, ans + c]; }
    else if (t === 1) { q = "(" + a + " + " + b + ") × " + c; ans = (a + b) * c; w = [a + b * c, a + b + c, ans + c, a * b + c]; }
    else { var m = c * r(2, 4); q = (a + 10) + " − " + m + " ÷ " + c; ans = a + 10 - m / c; w = [(a + 10 - m) / c, ans + 1, ans - 1, a + 10 + m / c]; }
    return ["What is " + q + "?", "" + ans].concat(w.map(String)); };
  var rect = function () { var l = r(3, 12), w = r(2, 9), area = Math.random() < .5;
    return [area ? "A rectangle is " + l + " by " + w + ". What is its area?" : "A rectangle is " + l + " by " + w + ". What is its perimeter?",
      area ? l * w + " square units" : 2 * (l + w) + " units", area ? 2 * (l + w) + " square units" : l * w + " units", (l + w) + " units", (l * w + l) + " square units"]; };
  var tri = function () { var b = 2 * r(2, 8), h = r(3, 12); return ["A triangle has base " + b + " and height " + h + ". What is its area?", b * h / 2 + " square units", b * h + " square units", (b + h) / 2 + " square units", b * h / 2 + b + " square units"]; };
  var circ = function () { var rad = r(2, 9), area = Math.random() < .5;
    return [area ? "A circle has radius " + rad + ". What is its area?" : "A circle has radius " + rad + ". What is its circumference?",
      area ? rad * rad + "π" : 2 * rad + "π", area ? 2 * rad + "π" : rad * rad + "π", rad + "π", 4 * rad * rad + "π"]; };

  var scale = function () { var s = pick([10, 20, 25, 50, 100]), i = r(2, 9);
    return ["A map scale says 1 inch = " + s + " miles. Two towns are " + i + " inches apart. How far apart are they?", s * i + " miles", s + i + " miles", s * i + s + " miles", s * i - s + " miles"]; };
  var worldCaps = [["Australia", "Canberra"], ["Canada", "Ottawa"], ["Japan", "Tokyo"], ["France", "Paris"], ["Brazil", "Brasília"], ["Egypt", "Cairo"], ["Italy", "Rome"], ["Germany", "Berlin"], ["Mexico", "Mexico City"], ["India", "New Delhi"], ["Spain", "Madrid"], ["Argentina", "Buenos Aires"], ["Kenya", "Nairobi"], ["China", "Beijing"]];
  var stateCaps = [["Georgia", "Atlanta"], ["Florida", "Tallahassee"], ["Texas", "Austin"], ["California", "Sacramento"], ["New York", "Albany"], ["Alabama", "Montgomery"], ["Tennessee", "Nashville"], ["Ohio", "Columbus"], ["Illinois", "Springfield"], ["Washington", "Olympia"], ["Pennsylvania", "Harrisburg"], ["South Carolina", "Columbia"]];
  function capGen(list, what) { return function () { var p = pick(list), ws = list.filter(function (x) { return x !== p; }).sort(function () { return Math.random() - .5; }).slice(0, 3).map(function (x) { return x[1]; });
    return ["What is the capital of " + p[0] + "?", p[1]].concat(ws); }; }

  var S = {};
  S["math.html"] = [
    { id: "fractions", color: "var(--math)", title: "1. Fractions", skills: [
      { title: "Adding and subtracting fractions", expl: "Fractions need a common denominator before you add or subtract. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.", gens: [G["Adding and subtracting with unlike denominators"], likeDen] },
      { title: "Multiplying fractions", expl: "Multiply the tops, multiply the bottoms, then simplify. 2/3 × 3/4 = 6/12 = 1/2.", gens: [G["Multiplying fractions"]] },
      { title: "Dividing fractions", expl: "Keep the first fraction, flip the second, and multiply. 1/2 ÷ 1/4 = 1/2 × 4/1 = 2.", gens: [dividing] }] },
    { id: "percents", color: "var(--math)", title: "2. Percents", skills: [
      { title: "Percent of a number", expl: "Change the percent to a decimal and multiply. 25% of 80 = 0.25 × 80 = 20.", gens: [G["Percent of a number"]] },
      { title: "Percent change", expl: "percent change = (new − old) ÷ old × 100. From $50 to $60 is a 20% increase.", gens: [pctChange] },
      { title: "Discounts", expl: "Find the discount amount, then subtract it from the price. 20% off $50 is $10 off, so $40.", gens: [G["Discounts, tax, and tips"]] }] },
    { id: "order", color: "var(--math)", title: "3. Order of operations", skills: [
      { title: "Order of operations (PEMDAS)", expl: "Parentheses, Exponents, Multiplication/Division (left to right), then Addition/Subtraction. 3 + 4 × 2 = 3 + 8 = 11.", gens: [order] }] },
    { id: "geometry", color: "var(--math)", title: "4. Area and perimeter", skills: [
      { title: "Area and perimeter of rectangles", expl: "Area = length × width (square units). Perimeter = 2 × (length + width).", gens: [rect] },
      { title: "Area of triangles", expl: "Area = 1/2 × base × height.", gens: [tri] },
      { title: "Circles", expl: "Area = π × r². Circumference = 2 × π × r.", gens: [circ] }] },
    { id: "equations", color: "var(--math)", title: "5. Solving equations", skills: [
      { title: "One-step equations", expl: "Do the opposite operation to both sides. x + 5 = 9 means x = 4.", gens: [G["One-step equations"]] },
      { title: "Two-step equations", expl: "Undo adding/subtracting first, then multiplying/dividing. 2x + 5 = 17 → 2x = 12 → x = 6.", gens: [G["Solving multi-step equations"]] }] }
  ];

  S["geography.html"] = [
    { id: "continents", color: "var(--geo)", title: "1. Continents and oceans", skills: [
      { title: "The 7 continents", expl: "The 7 continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America.", items: [
        ["Which is the largest continent?", "Asia", "Africa", "Europe"], ["Which continent is the coldest and covered in ice?", "Antarctica", "Europe", "Australia"],
        ["On which continent is the Sahara Desert?", "Africa", "Asia", "South America"], ["Which continent is also a single country?", "Australia", "Europe", "Africa"],
        ["Brazil is on which continent?", "South America", "North America", "Africa"], ["How many continents are there?", "7", "5", "9"]] },
      { title: "The 5 oceans", expl: "The 5 oceans are the Pacific, Atlantic, Indian, Southern, and Arctic. The Pacific is the largest.", items: [
        ["Which ocean is the largest?", "Pacific", "Atlantic", "Indian"], ["Which ocean is the smallest?", "Arctic", "Indian", "Southern"],
        ["Which ocean is between Africa and Australia?", "Indian", "Arctic", "Atlantic"], ["Which ocean touches the east coast of the U.S.?", "Atlantic", "Pacific", "Indian"],
        ["Which ocean surrounds Antarctica?", "Southern", "Arctic", "Indian"], ["How many oceans are there?", "5", "4", "7"]] }] },
    { id: "latlong", color: "var(--geo)", title: "2. Latitude and longitude", skills: [
      { title: "Latitude", expl: "Lines of latitude run east to west and measure distance north or south of the equator (0°).", items: [
        ["Lines of latitude run in which direction?", "East to west", "North to south", "Diagonally"], ["The equator is at what latitude?", "0°", "90°", "180°"],
        ["Which latitude is the North Pole?", "90° N", "0°", "90° S"], ["Latitude measures distance…", "North or south of the equator", "East or west of the prime meridian", "Above sea level"],
        ["Another name for lines of latitude is…", "Parallels", "Meridians", "Borders"]] },
      { title: "Longitude", expl: "Lines of longitude (meridians) run north to south and measure distance east or west of the prime meridian (0°).", items: [
        ["Lines of longitude run in which direction?", "North to south", "East to west", "In circles around a pole"], ["The prime meridian passes through which place?", "Greenwich, England", "Paris, France", "New York City"],
        ["The prime meridian is 0° of…", "Longitude", "Latitude", "Elevation"], ["Longitude measures distance…", "East or west of the prime meridian", "North or south of the equator", "From the coast"],
        ["The prime meridian divides Earth into…", "Eastern and Western Hemispheres", "Northern and Southern Hemispheres", "Two continents"]] }] },
    { id: "maps", color: "var(--geo)", title: "3. Reading a map", skills: [
      { title: "Map scale", expl: "A map scale connects map distance to real distance. If 1 inch = 50 miles, 3 inches = 150 miles.", gens: [scale] },
      { title: "Map parts and regions", expl: "A compass rose shows directions, a legend (key) explains symbols, and a scale shows distance.", items: [
        ["Which map part shows directions?", "Compass rose", "Legend", "Title"], ["Which map part explains what symbols mean?", "Legend (key)", "Scale", "Border"],
        ["Which map part helps you find real distances?", "Scale", "Compass rose", "Title"], ["Which is a region of the United States?", "Southeast", "Tundra", "Savanna"],
        ["Georgia is in which U.S. region?", "Southeast", "Midwest", "Southwest"], ["Texas is in which U.S. region?", "Southwest", "Northeast", "Pacific"]] }] },
    { id: "capitals", color: "var(--geo)", title: "4. Capitals", skills: [
      { title: "World capitals", expl: "A capital is the city where a country's government is based. It is often not the largest city (Canberra, not Sydney).", gens: [capGen(worldCaps)] },
      { title: "U.S. state capitals", expl: "Each state has a capital city. Many are not the largest city (Tallahassee, not Miami).", gens: [capGen(stateCaps)] }] }
  ];

  S["language-arts.html"] = [
    { id: "pos", color: "var(--la)", title: "1. Parts of speech", skills: [
      { title: "Nouns and verbs", expl: "A noun names a person, place, thing, or idea. A verb shows action or being.", items: [
        ["Which word is a noun?", "teacher", "quickly", "jump"], ["Which word is a verb?", "run", "table", "blue"], ["In 'The dog barked loudly,' which word is the verb?", "barked", "dog", "loudly"],
        ["In 'Maria sings well,' which word is the noun?", "Maria", "sings", "well"], ["Which word is an abstract noun?", "freedom", "chair", "dance"], ["'Is' and 'was' are what kind of verb?", "Linking (being) verbs", "Action verbs", "Nouns"]] },
      { title: "Adjectives and adverbs", expl: "An adjective describes a noun. An adverb describes a verb, adjective, or another adverb (often ending in -ly).", items: [
        ["In 'a red ball,' which word is the adjective?", "red", "a", "ball"], ["In 'She ran quickly,' which word is the adverb?", "quickly", "ran", "She"],
        ["Which word is an adverb?", "slowly", "slow", "slowness"], ["Which word is an adjective?", "happy", "happily", "happiness"], ["Adverbs often answer the question…", "How?", "Who?", "What color?"]] },
      { title: "Conjunctions and prepositions", expl: "Conjunctions (and, but, or) join words or ideas. Prepositions (in, on, under) show relationships like position.", items: [
        ["Which word is a conjunction?", "but", "under", "quickly"], ["Which word is a preposition?", "under", "and", "happy"], ["In 'The cat sat on the mat,' which is the preposition?", "on", "cat", "sat"],
        ["Which conjunction shows a choice?", "or", "but", "so"], ["Which conjunction shows contrast?", "but", "and", "or"]] }] },
    { id: "types", color: "var(--la)", title: "2. Sentence types", skills: [
      { title: "Sentence types by purpose", expl: "Declarative states, interrogative asks, imperative commands, exclamatory shows strong feeling.", items: [
        ["'Close the door.' is what type of sentence?", "Imperative", "Declarative", "Interrogative"], ["'What time is it?' is what type of sentence?", "Interrogative", "Declarative", "Exclamatory"],
        ["'The sky is blue.' is what type of sentence?", "Declarative", "Imperative", "Interrogative"], ["'What a great day!' is what type of sentence?", "Exclamatory", "Declarative", "Imperative"],
        ["Which type of sentence ends with a question mark?", "Interrogative", "Declarative", "Imperative"]] },
      { title: "Sentence types by structure", expl: "Simple: one independent clause. Compound: two independent clauses joined. Complex: an independent plus a dependent clause.", items: [
        ["'I like pizza, and she likes pasta.' is…", "Compound", "Simple", "Complex"], ["'Because it rained, we stayed inside.' is…", "Complex", "Simple", "Compound"],
        ["'The dog barked.' is…", "Simple", "Compound", "Complex"], ["A dependent clause…", "Cannot stand alone as a sentence", "Always stands alone", "Has no verb"],
        ["A compound sentence joins two…", "Independent clauses", "Dependent clauses", "Nouns"]] }] },
    { id: "commas", color: "var(--la)", title: "3. Commas", skills: [
      { title: "Commas in a series and after introductions", expl: "Use commas between items in a list and after an introductory phrase: After lunch, we played outside.", items: [
        ["Which sentence uses commas correctly?", "We bought eggs, milk, and bread.", "We bought, eggs milk and bread.", "We bought eggs milk, and bread."],
        ["Which is correct?", "After school, I went home.", "After school I, went home.", "After, school I went home."],
        ["Which is correct?", "Yes, I can come.", "Yes I, can come.", "Yes I can, come."], ["Which is correct?", "However, we stayed.", "However we, stayed.", "However we stayed,"],
        ["Items in a series are separated by…", "Commas", "Colons", "Apostrophes"]] },
      { title: "Commas in compound sentences", expl: "Put a comma before a conjunction (and, but, or, so) that joins two independent clauses.", items: [
        ["Which is correct?", "I wanted to go, but it rained.", "I wanted to go but, it rained.", "I wanted, to go but it rained."],
        ["Which is correct?", "She sings, and he plays guitar.", "She sings and, he plays guitar.", "She, sings and he plays guitar."],
        ["Which conjunction needs a comma before it in a compound sentence?", "but", "None of them", "Only 'or'"], ["Do you need a comma in 'I like tea and coffee'?", "No", "Yes, before 'and'", "Yes, after 'tea'"]] }] },
    { id: "figurative", color: "var(--la)", title: "4. Figurative language", skills: [
      { title: "Similes and metaphors", expl: "A simile compares using like or as. A metaphor says one thing is another.", items: [
        ["Which is a simile?", "Her smile was like sunshine.", "Her smile was sunshine.", "She smiled."], ["'Time is a thief' is a…", "Metaphor", "Simile", "Idiom"],
        ["'As busy as a bee' is a…", "Simile", "Metaphor", "Fact"], ["'He was a rock during the crisis' is a…", "Metaphor", "Simile", "Hyperbole"], ["Similes use the words…", "like or as", "is or was", "if or then"]] },
      { title: "Idioms, hyperbole, and personification", expl: "An idiom isn't literal. Hyperbole is exaggeration. Personification gives human traits to non-human things.", items: [
        ["'It's raining cats and dogs' is an…", "Idiom", "Simile", "Fact"], ["'I've told you a million times' is…", "Hyperbole", "Personification", "Simile"],
        ["'The wind whispered through the trees' is…", "Personification", "Hyperbole", "Idiom"], ["'Break a leg' means…", "Good luck", "Get hurt", "Run fast"], ["Hyperbole is…", "Exaggeration", "A comparison with like", "A rhyme"]] }] },
    { id: "paragraph", color: "var(--la)", title: "5. Writing a paragraph", skills: [
      { title: "Topic sentences and details", expl: "A paragraph has a topic sentence (main idea), supporting details, and a concluding sentence.", items: [
        ["Which part of a paragraph states its main idea?", "Topic sentence", "Concluding sentence", "Detail"], ["Supporting details…", "Explain or prove the main idea", "Change the topic", "Are always questions"],
        ["A concluding sentence…", "Wraps up the paragraph", "Starts the paragraph", "Introduces a new topic"], ["Which is the best topic sentence?", "Dogs make great pets for several reasons.", "I like dogs.", "Dogs."],
        ["Transitions like 'first' and 'next' help show…", "Order of ideas", "The title", "The author's name"]] }] }
  ];

  var EXTRA = {
    "The 7 continents": [["Which continent has the most countries?", "Africa", "Asia", "Europe"], ["Which continent is the smallest?", "Australia", "Europe", "Antarctica"], ["Which continent is home to the Amazon rainforest?", "South America", "Africa", "Asia"], ["The Great Wall of China is on which continent?", "Asia", "Europe", "Africa"], ["Which continent is Italy on?", "Europe", "Asia", "Africa"]],
    "The 5 oceans": [["Which ocean is between North America and Europe?", "Atlantic", "Pacific", "Indian"], ["Which ocean is between Asia and North America?", "Pacific", "Atlantic", "Arctic"], ["Which ocean is around the North Pole?", "Arctic", "Indian", "Atlantic"], ["The Indian Ocean touches which continent?", "Africa", "North America", "South America"], ["Which is the deepest ocean?", "Pacific", "Arctic", "Atlantic"]],
    "Latitude": [["Which latitude is the South Pole?", "90° S", "0°", "90° N"], ["Which is farther north: 40° N or 10° N?", "40° N", "10° N", "They are the same"], ["Places near the equator are usually…", "Warm", "Very cold", "Always snowy"], ["Lines of latitude…", "Never touch each other", "Meet at the poles", "Run north to south"], ["The Tropic of Cancer is a line of…", "Latitude", "Longitude", "Elevation"]],
    "Longitude": [["Longitude ranges from 0° to…", "180°", "90°", "360°"], ["Lines of longitude meet at the…", "Poles", "Equator", "Tropics"], ["A location at 100° W is in the…", "Western Hemisphere", "Eastern Hemisphere", "Southern Hemisphere"], ["The International Date Line is near…", "180° longitude", "0° longitude", "90° N latitude"], ["Another name for lines of longitude is…", "Meridians", "Parallels", "Equators"]],
    "Map parts and regions": [["Which region includes New York?", "Northeast", "Southwest", "Midwest"], ["Which region includes California?", "West", "Northeast", "Southeast"], ["A physical map shows…", "Landforms and water", "Population only", "Election results"], ["A political map shows…", "Borders of countries and states", "Mountain heights only", "Rainfall"], ["Which map part tells you what a star symbol means?", "Legend", "Title", "Compass rose"]],
    "Nouns and verbs": [["Which word is a proper noun?", "Atlanta", "city", "building"], ["In 'The children laughed,' the noun is…", "children", "laughed", "Neither"], ["Which is a helping verb?", "will", "blue", "quick"], ["Which sentence has a past-tense verb?", "She walked home.", "She walks home.", "She will walk home."]],
    "Adjectives and adverbs": [["In 'very tall tree,' which word is the adjective?", "tall", "very", "tree"], ["Which word describes how someone sang?", "beautifully", "beautiful", "beauty"], ["Which is a comparative adjective?", "taller", "tall", "tallest"], ["Which is a superlative adjective?", "tallest", "taller", "tall"], ["'Very' in 'very fast' is an…", "Adverb", "Adjective", "Noun"]],
    "Conjunctions and prepositions": [["Which is a coordinating conjunction?", "and", "because", "after"], ["Which word is a preposition?", "beside", "happy", "runs"], ["In 'He walked across the bridge,' the preposition is…", "across", "walked", "bridge"], ["Which conjunction shows a result?", "so", "but", "or"], ["'Because' begins a…", "Dependent clause", "Independent clause", "Noun"]],
    "Sentence types by purpose": [["'Please sit down.' is…", "Imperative", "Interrogative", "Exclamatory"], ["Which sentence is interrogative?", "Where is my book?", "My book is here.", "Find my book."], ["Which sentence is exclamatory?", "That's amazing!", "That is a book.", "Is that a book?"], ["Imperative sentences usually end with…", "A period or exclamation point", "A comma", "A question mark"], ["Declarative sentences…", "Make a statement", "Ask a question", "Give a command"]],
    "Sentence types by structure": [["Which is a simple sentence?", "Birds sing.", "Birds sing and bees buzz.", "When birds sing, I wake."], ["Which is a compound sentence?", "I ran, but he walked.", "I ran.", "Although I ran, I lost."], ["Which is a complex sentence?", "Although it was late, we kept playing.", "We kept playing.", "We played, and they watched."], ["Which word often starts a dependent clause?", "Because", "And", "But"], ["A compound-complex sentence has…", "2 independent clauses and a dependent clause", "One clause only", "Only phrases"]],
    "Commas in a series and after introductions": [["Which is correct?", "Red, white, and blue are colors.", "Red white, and blue are colors.", "Red, white and, blue are colors."], ["Which is correct?", "In the morning, we ate breakfast.", "In the morning we, ate breakfast.", "In, the morning we ate breakfast."], ["Which needs a comma?", "Meanwhile the team practiced.", "The team practiced hard.", "We ran home."], ["Which is correct?", "Well, I think so.", "Well I, think so.", "Well I think, so."], ["Commas in a list separate…", "Three or more items", "Two sentences", "A title"]],
    "Commas in compound sentences": [["Which is correct?", "We could walk, or we could drive.", "We could walk or, we could drive.", "We, could walk or we could drive."], ["Which sentence needs a comma?", "I was tired so I went to bed.", "I was tired.", "I went to bed."], ["Which is correct?", "He called, and she answered.", "He called and she, answered.", "He, called and she answered."], ["Which does NOT need a comma?", "He ate and left.", "He ate, and she left.", "He ate, but she didn't."], ["The comma goes…", "Before the conjunction", "After the conjunction", "Neither side"], ["Which is correct?", "It rained, so we stayed home.", "It rained so, we stayed home.", "It, rained so we stayed home."]],
    "Similes and metaphors": [["'Her eyes were diamonds' is a…", "Metaphor", "Simile", "Idiom"], ["'He ran like the wind' is a…", "Simile", "Metaphor", "Hyperbole"], ["Which is a metaphor?", "Life is a journey.", "Life is like a journey.", "Life goes on."], ["Which is a simile?", "The baby was as quiet as a mouse.", "The baby was a mouse.", "The baby slept."], ["A metaphor compares things…", "Without using like or as", "Using like or as", "Only with numbers"]],
    "Idioms, hyperbole, and personification": [["'Piece of cake' means…", "Very easy", "Delicious", "Small"], ["'My backpack weighs a ton' is…", "Hyperbole", "Idiom", "Simile"], ["'The sun smiled down' is…", "Personification", "Hyperbole", "Metaphor"], ["'It's raining cats and dogs' means…", "Raining hard", "Animals are falling", "It's sunny"], ["Which is personification?", "The flowers danced in the breeze.", "The flowers were red.", "Flowers grow."]],
    "Topic sentences and details": [["A concluding sentence…", "Restates the main idea", "Starts a new topic", "Lists the title"], ["Which is a supporting detail for 'Recycling helps the planet'?", "It reduces trash in landfills.", "I like blue.", "What is recycling?"], ["Which detail does NOT belong in a paragraph about pets?", "The moon is far from Earth.", "Dogs need exercise.", "Cats need food."], ["A paragraph should have…", "One main idea", "Many unrelated ideas", "No details"], ["Which word is a good transition?", "For example", "Purple", "Running"]]
  };
  Object.keys(S).forEach(function (pg) { S[pg].forEach(function (sec) { sec.skills.forEach(function (k) { if (EXTRA[k.title] && k.items) k.items = k.items.concat(EXTRA[k.title]); }); }); });
  window.SUBJECT = S[(location.pathname.split("/").pop() || "")] || null;
})();
