# future-server

`future-server` is a server written in `Go` meant to replace the existing [Node.js Server](../server) mainly focused on improving the performance of the server to handle more throughput.

## Progress

**API** → _53%_ <br />
**Database** → _62.8%_ <br />
**Logic** → _52.1%_ <br />
**Optimizations** → _1%_ <br />

<p style="font-size: 18px; font-weight: bold;">
  Overall → <span style="font-style: italic; font-weight: normal;">69%</span>
</p>

## Why Replace The Existing Server?

The current Node.js server worked great with the Website & Mobile app. (Keyword: **worked**). <br />
Since the previous version of the Next website used Incremental Static Regeneration (ISR), it didn't really send much requests to the server so it worked fine. But then with Next 13, it was decided that the Homepage would do SSR without any fetch cache so it always loads the latest data. <br />
This is where the Node server started to fall. <br />
The requests being sent by the Next Website to the server kept failing because it couldn't handle that. <br />
This resulted in timeouts because the requests sometimes took > 10s. <br />

You can actually see the issue when visiting the [Website](https://tea-share.vercel.app). <br />
You may occasionally see 'Connection Closed' (Especially if you reload too many times and it sends to many reqs)

Here is a benchmark using [AutoCannon](https://npmjs.com/package/autocannon): <br />

```sh
# The posts endpoint is the most important since it will be queried the most
autocannon -c 100 https://tea-share-backend.onrender.com/posts
```

```
┌─────────┬─────────┬─────────┬─────────┬─────────┬────────────┬───────────┬─────────┐
│ Stat    │ 2.5%    │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev     │ Max     │
├─────────┼─────────┼─────────┼─────────┼─────────┼────────────┼───────────┼─────────┤
│ Latency │ 1118 ms │ 2610 ms │ 5060 ms │ 5377 ms │ 2804.42 ms │ 946.41 ms │ 5824 ms │
└─────────┴─────────┴─────────┴─────────┴─────────┴────────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬────────┬────────┬────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%  │ Avg    │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼────────┼─────────┤
│ Req/Sec   │ 6       │ 6       │ 30     │ 53     │ 31.5   │ 14.28  │ 6       │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼────────┼─────────┤
│ Bytes/Sec │ 46.7 kB │ 46.7 kB │ 234 kB │ 413 kB │ 245 kB │ 111 kB │ 46.7 kB │
└───────────┴─────────┴─────────┴────────┴────────┴────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

415 requests in 10.09s, 2.45 MB read
```

It shows how poor performing the server with 100 connections.

## Will The Old Server Still be Available After This one is Done?

No. After this server is done and production-ready, then the previous Node.js server will be deleted. <br />
But you can still access it through Git history.
