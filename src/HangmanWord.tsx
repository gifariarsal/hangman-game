type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
        marginTop: '2rem',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: '.1em solid black',
            padding: '.25em',
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
