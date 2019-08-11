$(function() {
    $("form").submit(function(event) {
        // Get the input text, remove punctuation, and split on newlines
        var inputText = $("#input-text").val().replace(/[^\w\s]/g, "").split(/\r|\n/);
        // Get other input values
        var wordCount = parseInt($("#word-count").val());
        var vowelCount = parseInt($("#vowel-count").val());
        var lineCount = parseInt($("#line-count").val());
        // Send to get count
        parseText(inputText, wordCount, vowelCount, lineCount);
        event.preventDefault();
    });
    
    function parseText(inputText, wordCount, vowelCount, lineCount) {
        // Final output word and line counts
        var wordTotal = 0;
        var lineTotal = 0;
        
        // Loop through each line
        for (var x = lineCount - 1; x < inputText.length; x = x+lineCount) {
            // Split line into each word
            var splitLine = inputText[x].split(/[ ]+/);
            var wordFound = false;
            // Loop through each word
            for (var y = wordCount-1;y < splitLine.length; y = y+wordCount) {
                // If the word has required amount of vowels count it and flag line
                if (splitLine[y].match(/[aeiou]/gi).length >= vowelCount) {
                    wordTotal++;
                    wordFound = true;
                }
            }
            // If a word was found count the line
            if (wordFound) {
                lineTotal++;
            }
        }
        
        $("#output").html("Lines: " + lineTotal + ", Words: " + wordTotal);
    }
});