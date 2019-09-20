import React from 'react';
import { connect } from 'react-redux';
import Board from './components/Board';
import * as GameActions from './actions/gameActions';

const App = props => {
  const {
    size,
    mineCount,
    score,
    isGameOver,
    updateGameStatus,
    updateGameScore
  } = props;

  const handleIsGameOver = () => {
    updateGameStatus({ isGameOver: true });
  }

  const handleScore = () => {
    updateGameScore(score + 1);
  }

  return (
    <div className="App">
      <div>Mine Sweeper</div>
      <div>Score: {score}</div>
      {(isGameOver) && (
        <div>GAME OVER</div>
      )}
      <Board
        size={size}
        handleScore={handleScore}
        mineCount={mineCount}
        isGameOver={isGameOver}
        handleIsGameOver={handleIsGameOver}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  size: state.game.size,
  mineCount: state.game.mineCount,
  score: state.game.score,
  isGameOver: state.game.isGameOver,
});

const mapDispatchToProps = dispatch => ({
  updateGameSettings: settings => dispatch(GameActions.updateGameSettings(settings)),
  updateGameScore: score => dispatch(GameActions.updateGameScore(score)),
  updateGameStatus: status => dispatch(GameActions.updateGameStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
