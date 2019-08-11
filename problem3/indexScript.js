$(function() {
    $("form").submit(function(event) {
        var inputText = $("#input-text").val().replace(/[^\w\s]/g, "").split(/\r|\n/);
        var wordCount = parseInt($("#word-count").val());
        var vowelCount = parseInt($("#vowel-count").val());
        var lineCount = parseInt($("#line-count").val());
        parseText(inputText, wordCount, vowelCount, lineCount);
        event.preventDefault();
    });
    
    function parseText(inputText, wordCount, vowelCount, lineCount) {
        var wordTotal = 0;
        var lineTotal = 0;
        
        for (var x = lineCount - 1; x < inputText.length; x = x+lineCount) {
            var splitLine = inputText[x].split(/[ ]+/);
            var wordFound = false;
            for (var y = wordCount-1;y < splitLine.length; y = y+wordCount) {
                if (splitLine[y].match(/[aeiou]/gi).length >= vowelCount) {
                    wordTotal++;
                    wordFound = true;
                }
            }
            if (wordFound) {
                lineTotal++;
            }
        }
        
        $("#output").html("Lines: " + lineTotal + ", Words: " + wordTotal);
    }
});