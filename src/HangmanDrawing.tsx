const HEAD = (
  <div
    key="head"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const BODY = (
  <div
    key="body"
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: 'absolute',
          width: '10px',
          height: '50px',
          top: '0',
          right: '0',
          background: 'black',
        }}
      />
      <div
        style={{
          width: '200px',
          height: '10px',
          marginLeft: '120px',
          background: 'black',
        }}
      />
      <div
        style={{
          width: '10px',
          height: '400px',
          marginLeft: '120px',
          background: 'black',
        }}
      />
      <div
        style={{
          width: '250px',
          height: '10px',
          background: 'black',
        }}
      />
    </div>
  );
}
