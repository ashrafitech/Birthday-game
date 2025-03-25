import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserGame: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 }  // Correct Vector2Like format
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      console.log("📌 Preloading assets...");
      this.load.spritesheet('cryomancer', '/assets/characters/cryomancer_spritesheet.png', {
        frameWidth: 128,
        frameHeight: 128,
      });
    }

    function create(this: Phaser.Scene) {
      console.log("✅ GameScene Created");

      const player = this.physics.add.sprite(
        window.innerWidth / 2,
        window.innerHeight / 2,
        'cryomancer'
      );

      this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('cryomancer', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1,
      });

      player.play('walk');

      this.input.keyboard?.on('keydown', (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowUp':
            player.setVelocity(0, -200);
            break;
          case 'ArrowDown':
            player.setVelocity(0, 200);
            break;
          case 'ArrowLeft':
            player.setVelocity(-200, 0);
            break;
          case 'ArrowRight':
            player.setVelocity(200, 0);
            break;
        }
      });

      this.input.keyboard?.on('keyup', () => {
        player.setVelocity(0);
      });
    }

    function update(this: Phaser.Scene) {}

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" style={{ width: '100vw', height: '100vh' }} />;
};

export default PhaserGame;
