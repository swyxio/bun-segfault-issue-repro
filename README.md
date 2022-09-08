# Bun.sh Segfault repro

Here i was messing around trying to make a static site React generator in Bun. However I ran into this segfault issue and decided to commit it so you can repro.

## steps to repro

```bash
git clone https://github.com/sw-yx/bun-segfault-issue-repro

bun install

bun run http.js
```

then head to http://localhost:3000/index

you will see a segfault

![image](https://user-images.githubusercontent.com/6764957/177436562-83752a00-2720-46f7-a448-19e6fc74927b.png)

it does not segfault when you go to the other routes.

## tracking issue

https://github.com/Jarred-Sumner/bun/issues/216

livestream of process https://www.youtube.com/watch?v=VFKQvdWwuxw&t=8400s
