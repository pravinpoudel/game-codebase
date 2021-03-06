class Sound {
  constructor() {
    this.sounds = {};
    this.loadAudio = this.loadAudio.bind(this);
    this.loadSound = this.loadSound.bind(this);
    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);
    this.stopAllSound = this.stopAllSound.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  loadSound(source) {
    let sound = new Audio();
    sound.addEventListener("canplay", function () {
      // console.log(`${source} is ready to play`);
    });
    sound.addEventListener("play", function () {
      // console.log(`${source} started playing`);
    });
    sound.addEventListener("pause", function () {
      // console.log(`${source} paused`);
    });
    sound.addEventListener("canplaythrough", function () {
      // console.log(`${source} can play through`);
    });
    sound.addEventListener("progress", function () {
      // console.log(`${source} progress in loading`);
    });
    sound.addEventListener("timeupdate", function () {
      //   console.log(`${source} time update: ${this.currentTime}`);
    });
    sound.src = source;
    return sound;
  }

  loadAudio() {
    this.sounds["end"] = this.loadSound(dir + "assets/sounds/game_end.mp3");
    this.sounds["shoot"] = this.loadSound(dir + "assets/sounds/shoot.wav");
    this.sounds["add"] = this.loadSound(dir + "assets/sounds/add.wav");

    this.sounds["game_play"] = this.loadSound(
      dir + "assets/sounds/game_Play.mp3"
    );
    this.sounds["success_end"] = this.loadSound(
      dir + "assets/sounds/success_end.mp3"
    );
    this.sounds["die"] = this.loadSound(dir + "assets/sounds/collision.flac");
    this.sounds["explosion"] = this.loadSound(
      dir + "assets/sounds/explosion.wav"
    );
  }

  stopAllSound() {
    for (const sound in this.sounds) {
      this.sounds[sound].volume = 0;
    }
  }

  unMuteSound() {
    for (const sound in this.sounds) {
      this.sounds[sound].volume = 0.5;
    }
  }

  pauseSound(whichSound) {
    this.sounds[whichSound].pause();
  }

  playSound(whichSound) {
    this.sounds[whichSound].play();
  }

  changeVolume(value) {
    for (const sound in this.sounds) {
      this.sounds[sound].volume = value/100;
    }
  }
}
