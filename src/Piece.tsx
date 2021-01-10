import React from "react";
import "./Piece.css";
import piecePawn from "./recources/koma/syougi_koma01_y_13.png";
import pieceLance from "./recources/koma/syougi_koma01_y_11.png";
import pieceKnight from "./recources/koma/syougi_koma01_y_09.png";
import pieceSilver from "./recources/koma/syougi_koma01_y_07.png";
import pieceGold from "./recources/koma/syougi_koma01_y_06.png";
import pieceBishop from "./recources/koma/syougi_koma01_y_02.png";
import pieceRook from "./recources/koma/syougi_koma01_y_04.png";
import pieceKing from "./recources/koma/syougi_koma01_y_01.png";

const Player = ["Black", "White"] as const;
export type Player = typeof Player[keyof typeof Player];

const PieceType = [
  "Pawn",
  "Lance",
  "Knight",
  "Silver",
  "Gold",
  "Bishop",
  "Rook",
  "Ou",
  "King",
] as const;
export type PieceType = typeof PieceType[keyof typeof PieceType];

type Col = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Position = { row: Row; col: Col };
type PositionWithHand = Position | "Hand";
type PieceProps = {
  player: Player;
  position?: PositionWithHand;
  type: PieceType;
};

function PieceImage(type: PieceType) {
  if (type === "Pawn") {
    return <img src={piecePawn} />;
  } else if (type === "Lance") {
    return <img src={pieceLance} />;
  } else if (type === "Knight") {
    return <img src={pieceKnight} />;
  } else if (type === "Silver") {
    return <img src={pieceSilver} />;
  } else if (type === "Gold") {
    return <img src={pieceGold} />;
  } else if (type === "Bishop") {
    return <img src={pieceBishop} />;
  } else if (type === "Rook") {
    return <img src={pieceRook} />;
  } else if (type === "King") {
    return <img src={pieceKing} />;
  }
}

function Piece(props: PieceProps) {
  function getPositionClass(posFunc: (pos: Position) => string) {
    if (!props.position) {
      return null;
    }
    if (props.position === "Hand") {
      return null;
    }
    return posFunc(props.position);
  }

  const col = getPositionClass((pos) => `col${pos.col}`);
  const row = getPositionClass((pos) => `row${pos.row}`);

  return (
    <div
      className={["Piece", col, row, props.player].filter(Boolean).join(" ")}
    >
      {PieceImage(props.type)}
    </div>
  );
}

export default Piece;
