


******
UNIT TESTING: ENTRY METHODS
******

Describe: Entry.wordCount()
Test: It should return zero for empty strings.
Code: wordCount(“”);
Expected Output: 
Word Count: 0

Test: It should return 2 for two words, separated by a space
Code: wordCount(“hello world”);
Expected Output:
Word Count: 2


Describe: Entry.getVowels()
Test: it should return 1 when passed a string containing a single vowel
Code:
getVowels(“a”);

Expected Output:
Vowel count: 1

Describe: Entry.consonantCount()
Test: it should return 1 when passed a consonant
Code: 
consonantCount(“w”);
Expected Output: 
Consonants: 1

Test: it should return 2 when passed a vowel between two consonants.
Code:
consonantCount(“wow”);
Expected output:
Consonants: 2


Test: It should return 2 when passed two consonant separated by a punctuation symbol and/or a space.
Code:
consonantCount(“w, w”);
Expected Output:
Consonants: 2

Test: It should return the number of consonants  when passed multiple words separated by non-consonant characters
Code:
consonantCount(“wow, THAT is a low price!”);
Expected Output:
Consonants: 11
