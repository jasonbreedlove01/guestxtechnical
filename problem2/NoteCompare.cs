using System;

class StringInstrument
{
    string[,] notes;
    string playedNote;
    public void playNote(int fret, int stringNum)
    {
        playedNote = notes[fret][stringNum];
    }
    public string getPlayedNote()
    {
        return playedNote;
    }
}
class Guitar : StringInstrument
{
    public Guitar()
    {
        // Array representation of frets and strings
        notes = new string { { "E", "B", "G", "D", "A", "E" }, { "F", "C", "Ab", "Eb", "Bb", "F" } };
    }
}

class Bass : StringInstrument
{
    public Bass()
    {
        // Array representation of frets and strings
        notes = new string { { "G#", "D#", "A#", "F" }, { "A", "E", "B", "F#" } };
    }
}

class NoteCompare
{
    // Create guitar and bass to be called for note playing function calls
    public Guitar guitar = new Guitar();
    public Bass bass = new Bass();

    // Return true or false if the notes played on both are the same
    public bool comparePlayedNotes()
    {
        if (guitar.getPlayedNote() == bass.getPlayedNote())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
