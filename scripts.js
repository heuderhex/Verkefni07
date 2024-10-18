/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string'; 

//Önnur leið til að skrifa fallið að ofan er :
// function isString(str) {
//   return typeof str === 'string';
// }
// fallið isString sem tekur inn 'str' breytuna 
// ath gildi hafa týpu (type) í javascript en ekki breytur
// skilar svo true/false út frá testinu: (typeof str === 'string')
// þeas testar hvort str er raunverulega strengur

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

//Skilyrði fyrir fall 'longest': 
//Skilar lengsta orðinu í str. (1)
//Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn. (2) - í raun óþarfi að útfæra
//Orð eru aðskilin með bilum. (3)
//Greinarmerki er partur af orðinu, t.d. ætti longest('halló heimur!') að skila heimur!. (4)
//Skilar fyrsta orðinu ef annað/önnur jafn löng finnast. (5)
//Ef str er tómur strengur skal skila tómum streng. (6)
//Ef str er ekki strengur skal skila null. (7)

/**
 * Finds the longest word in a given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The longest word, an empty string if the input is empty, or null if not a string.
 * @example
 * longest('This is a string for testing'); // Returns 'testing'
 */
function longest(str) {
  if (typeof str !== 'string') {
    return null; // Skilar null ef input er ekki strengur (7)
  }
  if (str.trim() === '') {
    return ''; // Skilar tómum streng ef str er tómur strengur (6)
  }
  const words = str.split(' '); // Orðin eru aðskilin með bil fyrir "delimiter", úr verður fylki (3)
  
  let longestWord = ''; // (Initialize) longestWord sem breytu til að fylgjast með lengsta orði. Ath let er mjög localeruð aðferð, virkar bara fyrir "blokkina" en ekki allt fallið.

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Uppfærir longestWord með nýju lengsta orði (1) og (5)
    }
  }
  return longestWord;
}
console.assert(longest('Pláneta, sólkerfi og vetrarbraut') === 'vetrarbraut', 'longest: finnur lengsta orð í streng');
console.assert(longest('halló heimur!') === 'heimur!', 'longest: skilar heimur! ef input er "halló heimur!"');
console.assert(longest('Pláneta, sólkerfi og geimþoka') === 'Pláneta,','longest: skilar fyrsta lengsta orði ef 2+ eru lengst');

//Skilyrði fyrir fall 'shortest': 
//Eins og longest nema skilar stysta orðinu í str.
//Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn. (2) - í raun óþarfi að útfæra
//Orð eru aðskilin með bilum. (3)
//Greinarmerki er partur af orðinu, t.d. ætti shortest('halló heimur') að skila halló. (4)
//Skilar fyrsta orðinu ef annað/önnur jafn stutt finnast. (5)
//Ef str er tómur strengur skal skila tómum streng. (6)
//Ef str er ekki strengur skal skila null. (7)

/**
 * Finds the shortest word in a given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The shortest word, an empty string if the input is empty, or null if not a string.
 */
function shortest(str) {
  if (typeof str !== 'string') {
    return null; // Skilar null ef input er ekki strengur (7)
  }
  if (str.trim() === '') {
    return ''; // Skilar tómum streng ef str er tómur strengur (6)
  }
  const words = str.split(' '); // Orðin eru aðskilin með bil fyrir "delimiter", úr verður fylki (3)
  
  let shortestWord = words[0]; // Initialize-um shortestWord sem breytu með fyrsta orðið úr fylkinu sem stysta orð.

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word; // Uppfærir shortestWord með nýju stysta orði (1) og (5)
    }
  }
  return shortestWord; // Skilar stysta orðinu

}
console.assert(shortest('Vetrarbraut sólkerfið pláneta') === 'pláneta', 'shortest: finnur stysta orð í streng');
console.assert(shortest('halló heimur') === 'halló', 'shortest: ætti að skila halló ef input er "halló? heimur"');

//Skilyrði fyrir function:reverse(str)
//Skilar str í öfugri röð.
//Ef str er ekki strengur skal skila null.
//Ef str er tómur strengur skal skila tómum streng.

/**
 * Reverses the given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The reversed string, an empty string if the input is empty, or null if not a string.
 */
function reverse(str) {
  if (isString(str)) {
  const split = str.split('');
  const reversed = split.reverse()

  return reversed.join('')
  }
  return null;
}
console.assert(reverse('afturábak') === 'kabárutfa', 'reverse: snýr við streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null');
console.assert(reverse('') === '', 'reverse: ef input er tómi strengur þá skila tómum streng');


//Skilyrði fyrir function:Palindrome(str)
//Samhverfur strengur er lesin eins frá vinstri til hægri og hægri til vinstri.
//Skilar true ef str er samhverfur (palindrome), annars false.
//Skilar false ef str er ekki strengur.
//Ekki skiptir máli hvort stafir séu hástafir eða lágstafir.
//Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn. (en það má)
//Tómur strengur er ekki samhverfur.

//Ath gefið hjálparfall: const isString = (str) => typeof str === 'string'; 

/**
 * Checks if the given string is a palindrome.
 * @param {string} str - The input string.
 * @returns {boolean} - True if it is a palindrome, otherwise false.
 */
function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str)
    if (str.toLowerCase() === reversed.toLowerCase()) { //kannar óháð há/lágstöfum
      return true;
    } else { 
      return false;
    }
  } else {
  return false;
  }
}
console.assert(palindrome("halló, heimur!") === false, 'palindrome: ætti að skila(return) false fyrir "halló, heimur!"');
console.assert(palindrome('Hahah') === true, 'palindrome: ætti að skila true fyrir streng"Hahah"');
console.assert(palindrome('') === false, 'palindrome: ætti að skila false fyrir tóman streng');
console.assert(palindrome(44) === false, 'palindrome: ætti að skila false fyrir 44 þar sem það er ekki strengur');
console.assert(palindrome('44') === true, 'palindrome: ætti að skila true fyrir strengin "44" enda ekki tómi strengur því tölur eru ekki fjarlægðar');

//Ath gefið hjálparfall: const VOWELS = 'aeiouyáéýúíóöæ'.split('');
//Skilyrði fyrir function:vowels(str)
//Skilar fjölda sérhljóða í str. (1)
//Ef engir sérhljóðar eða ekki strengur skal skila 0. (2)
//Sérhljóðar eru allir íslenskir sérhljóðar: a, e, i, o, u, y, á, é, ý, ú, í, ó, ö, æ.

/**
 * Counts the number of vowels in the given string.
 * @param {string} str - The input string.
 * @returns {number} - The number of vowels, 0 if not a string or or the empty string.
 */
function vowels(str) {
  if (typeof str !== 'string' || str.trim() === '') { // Spyr: er str ekki strengur || er str án allra bila === tómi strengur 
    return 0; // skilar 0 ef str er ekki strengur eða tómi strengur (2)
  }
  let count = 0; // Initialize-um count fyrir talningu (og setjum = 0)
  for (const char of str) { // Farið er í gegnum hvern character "char" í strengnum "str"
    if (VOWELS.includes(char.toLowerCase())) { // Ef VOWELS hefur stafin(sem lágstaf)...
      count++; // Þá hækkum við count
    }
  }
  return count; // Skilum heildarfjölda sérhljóða í strengnum (1)
}
console.assert(vowels('aeiouyáéýúíóöæ') === 14, 'vowels: ætti að skila 14 fyrir strengin "aeiouyáéýúíóöæ"');
console.assert(vowels('') === 0, 'vowels: á að skila 0 ef "str" er tómi strengur');
console.assert(vowels('42') === 0, 'vowels: á að skila 0 ef "str" hefur ekki sérhljóða');
console.assert(consonants(42) === 0, 'vowels: á að skila 0 ef "str" er ekki strengur');


//Ath gefið hjálparfall: const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
//Skilyrði fyrir function:consonants(str)
//Skilar fjölda samhljóða í str. (1)
//Ef engir samhljóðar eða ekki strengur skal skila 0. (2)
//Samhljóðar eru allir íslenskir samhljóðar: b, d, ð, f, g, h, j, k, l, m, n, p, r, s, t, v, x, þ.

/**
 * Counts the number of consonants in the given string.
 * @param {string} str - The input string.
 * @returns {number} - The number of consonants, 0 if not a string or or the empty string.
 */
function consonants(str) {
  if (typeof str !== 'string' || str.trim() === '') { // Spyr: er str ekki strengur || er str án allra bila === tómi strengur 
    return 0; // skilar 0 ef str er ekki strengur eða tómi strengur (2)
  }
  let count = 0; // Initialize-um count fyrir talningu (og setjum = 0)
  for (const char of str) { // Farið er í gegnum hvern character "char" í strengnum "str"
    if (CONSONANTS.includes(char.toLowerCase())) { // Ef CONSONANTS hefur stafin(sem lágstaf)...
      count++; // Þá hækkum við count
    }
  }
  return count; // Skilum heildarfjölda samhljóða í strengnum (1)
}
console.assert(consonants('bcdfghjklmnpqrstvwxz') === 20, 'consonants: ætti að skila 20 fyrir strengin "bcdfghjklmnpqrstvwxz"');
console.assert(consonants('') === 0, 'consonants: á að skila 0 ef "str" er tómi strengur');
console.assert(consonants('42') === 0, 'consonants: á að skila 0 ef "str" hefur ekki samhljóða');
console.assert(consonants(42) === 0, 'consonants: á að skila 0 ef "str" er ekki strengur');


//------------------------------------------------------------------------------
// Leiðbeint ferli

//Skilyrði fyrir function:start()
//Birta leiðbeiningar með alert um hvernig forritið er notað. (1)
//Biðja um inntak (streng) með prompt. (2)
//Ef löglegt inntak og ekki ýtt á „cancel“ skal kalla á longest, shortest, reverse, vowels, consonants og palindrome föllin. (3)
//Birta niðurstöður í alert með upplýsingum um hvað kom út úr hverju kalli, hver niðurstaða i nýjum streng. (4)
//Ef „cancel“ eða tómi strengur, ekki gera neitt. (5)
//Eftir að niðurstöður hafa verið birt skal bjóða notanda að gera aftur eða hætta. (6)
//ætti að nota while lykkju (7)

/**
 * Initiates an interactive program for string analysis written in Icelandic.
 *
 * Users can find the longest and shortest words, reverse the string,
 * count vowels and consonants, and check for palindromes. The program
 * runs in a loop, prompting for input in Icelandic and displaying results until the
 * user chooses to exit.
 *
 * @function start
 * @returns {void} - No return value; interacts via alerts and prompts.
 *
 * @example
 * start(); // Start the analysis program
 */
function start() {
  while (true) {
    // leiðbeiningar (1)
    alert(`Velkomin! Þú getur notað þetta forrit til að finna í streng:
      - Lengsta orðið
      - Stysta orðið
      - Hvernig hann er afturábak
      - Fjölda sérhljóða
      - Fjölda samhljóða
      - Hvort hann sé samhverfur (palindrome).
      
      Vinsamlegast sláðu inn streng.`);

    // Biðja um inntak (streng) (2)
    let input = prompt("Sláðu inn streng:"); //

    // "Ef „cancel“ eða tómi strengur, ekki gera neitt." (5)
    if (input === null || input.trim() === '') { //ef input === null, þá hefur verið ýtt á cancel 
      alert("Hætti forritinu."); 
      break; // Slekkur á loop-inu (5)
    }

    // Kallað á öll föllin(functions) og niðurstöður fengnar
    const longestWord = longest(input); //longest fallið keyrt og niðurstaða sett í longestWord
    const shortestWord = shortest(input); //shortest ....
    const reversedString = reverse(input);
    const vowelCount = vowels(input);
    const consonantCount = consonants(input);
    const isPalindrome = palindrome(input); //palindrome fallið keyrt og hovrt true/false sett í isPalindrome

    // Búum til skilaboðin fyrir niðurstöðurnar ("template literals" notar `` til að búa til streng sem spannar margar línur og "string interpolation" embeddar í strengnum með ${einhver tilvísun í breytu hér})
    let results = `Niðurstöður:
    Lengsta orðið er: ${longestWord}
    Stysta orðið er: ${shortestWord}
    Strengurinn afturábak er: ${reversedString}
    Fjöldi sérhljóða er: ${vowelCount}
    Fjöldi samhljóða er: ${consonantCount}
    Er hann samhverfur?: ${isPalindrome ? 'Já' : 'Nei'}`;

    // Sýnum niðurstöðurnar með alert
    alert(results);

    // Spyrjum hvort notandi vilji nota forritið aftur
    const again = confirm("Viltu reyna aftur?");
    if (!again) { // Hér hefur verið ýtt á cancel
      alert("Takk fyrir að nota forritið!");
      break; // Slekkur á loop-inu
    }
  }
}

