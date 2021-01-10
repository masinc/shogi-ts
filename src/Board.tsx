import React from "react";
import "./Board.css";
import Piece from "./Piece";
function Board() {
  return (
    <div className="Board">
      <Piece player="White" type="Lance" position={{ row: 1, col: 1 }} />
      <Piece player="White" type="Knight" position={{ row: 1, col: 2 }} />
      <Piece player="White" type="Silver" position={{ row: 1, col: 3 }} />
      <Piece player="White" type="Gold" position={{ row: 1, col: 4 }} />
      <Piece player="White" type="King" position={{ row: 1, col: 5 }} />
      <Piece player="White" type="Gold" position={{ row: 1, col: 6 }} />
      <Piece player="White" type="Silver" position={{ row: 1, col: 7 }} />
      <Piece player="White" type="Knight" position={{ row: 1, col: 8 }} />
      <Piece player="White" type="Lance" position={{ row: 1, col: 9 }} />
      <Piece player="White" type="Rook" position={{ row: 2, col: 8 }} />
      <Piece player="White" type="Bishop" position={{ row: 2, col: 2 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 1 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 2 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 3 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 4 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 5 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 6 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 7 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 8 }} />
      <Piece player="White" type="Pawn" position={{ row: 3, col: 9 }} />

      <Piece player="Black" type="Lance" position={{ row: 9, col: 1 }} />
      <Piece player="Black" type="Knight" position={{ row: 9, col: 2 }} />
      <Piece player="Black" type="Silver" position={{ row: 9, col: 3 }} />
      <Piece player="Black" type="Gold" position={{ row: 9, col: 4 }} />
      <Piece player="Black" type="King" position={{ row: 9, col: 5 }} />
      <Piece player="Black" type="Gold" position={{ row: 9, col: 6 }} />
      <Piece player="Black" type="Silver" position={{ row: 9, col: 7 }} />
      <Piece player="Black" type="Knight" position={{ row: 9, col: 8 }} />
      <Piece player="Black" type="Lance" position={{ row: 9, col: 9 }} />
      <Piece player="Black" type="Rook" position={{ row: 8, col: 2 }} />
      <Piece player="Black" type="Bishop" position={{ row: 8, col: 8 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 1 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 2 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 3 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 4 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 5 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 6 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 7 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 8 }} />
      <Piece player="Black" type="Pawn" position={{ row: 7, col: 9 }} />
    </div>
  );
}

export default Board;
