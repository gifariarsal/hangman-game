export function HangmanWord() {
  const word = 'test';
  const guessedLetters = [];
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
      {word.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: '.1em solid black',
            padding: '.25em',
          }}
        >
          <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden' }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
