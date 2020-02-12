let weather_prediction = game.askForString("What is your weather prediction?")
game.splash("It is going to " + weather_prediction)
let weather_dude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . . d d . . . . . . . . 
. . d d d d 8 8 d d d d . . . . 
. . . d d d 8 8 d d d . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 6 . . . . . . . . 
. . . . . . 6 6 . . . . . . . . 
. . . . . . 6 6 . . . . . . . . 
. . . . . . 6 6 . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (weather_effects == 0) {
    effects.confetti.startScreenEffect()
    weather_dude.say("CONFETTTTTTTTTTI")
} else if (false) {
    effects.hearts.startScreenEffect()
} else if (false) {
    effects.smiles.startScreenEffect()
} else if (false) {
    effects.blizzard.startScreenEffect()
} else if (false) {
    effects.bubbles.startScreenEffect()
} else if (false) {
    effects.starField.startScreenEffect()
} else {
    effects.clouds.startScreenEffect()
}
