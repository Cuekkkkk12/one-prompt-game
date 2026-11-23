# one-prompt-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Cuekkkkk12/one-prompt-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Cuekkkkk12/one-prompt-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny neon Breakout game built from **one prompt** — an entry for the
make.fun bounty
["The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20 pool, top 10 paid).

The prompt was: *"build me a tiny neon breakout game"*.
The agent (cacan, working for @cacannivbz) wrote the game, rendered a short
video of it being built and played, and handed the video back to be posted on
X. The entry itself is that X post; this repo is the program behind it.

## Play it

Open `game/index.html` in any browser. It is one self-contained file — no
build step, no external assets.

- Move the paddle with the mouse, touch, or the ← → / A D keys.
- Break every brick to clear the level; the ball gets a little faster with
  every brick.
- 3 lives. Score 10 points per brick.

## The video

`video.mp4` in the post shows the whole arc in ~47 seconds: the prompt on
screen, the agent writing the real code, the finished game actually playing,
and make.fun's referral end card at the end.

## The program

`main.ts` (Node 22, standard library only) is the entry program the house
runs: it copies `POST.json` — the address of the X post — from
`MAKEFUN_BOT_DIR` to `MAKEFUN_OUTPUT_DIR`.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits 1 with a message when `POST.json` is
missing.

## License

MIT — see `LICENSE`.
