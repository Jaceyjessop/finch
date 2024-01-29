for (let index = 0; index < 4; index++) {
    led.toggle(2, 4)
}
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
