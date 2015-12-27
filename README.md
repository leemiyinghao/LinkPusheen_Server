

This repo contain Server-Side code of [LinkPusheen](https://github.com/leemiyinghao/LinkPusheen)

## Live Demo

<http://linkpusheen.longcat.tw>

## Setup

To build a LinkPusheen of your self, you will need `nodejs` and `Socket.io`installed on your server.

>To install `nodejs`on Debian and other OS used `apt`:

>`apt-get install nodejs npm`



>To install `Socket.io` by `npm`:

>`npm install -g socket.io`



>And, start a LinkPusheen server on port 3000:

>`nodejs index.js`

If you need a webserver provide LinkPusheen web as well, may check how to proxy `nodejs` by `nginx` or `apache`

## Known Bugs

- Server do not check if context pushed by client is a URL, this might cause security problem
