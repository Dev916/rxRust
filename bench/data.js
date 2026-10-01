window.BENCHMARK_DATA = {
  "lastUpdate": 1790861778061,
  "repoUrl": "https://github.com/Dev916/rxRust",
  "entries": {
    "rxRust operators": [
      {
        "commit": {
          "author": {
            "email": "nyvorin@gmail.com",
            "name": "Nyvorin",
            "username": "nyvorin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e74015448f062c2fa3d9af0b12f5f6e80283d9",
          "message": "Merge pull request #17 from Dev916/ci/benchmarks\n\nci: benchmark suite tracked per commit",
          "timestamp": "2026-09-14T16:55:11-04:00",
          "tree_id": "0d32c13d7de96ccb6433f8decf6f089e86772593",
          "url": "https://github.com/Dev916/rxRust/commit/f3e74015448f062c2fa3d9af0b12f5f6e80283d9"
        },
        "date": 1789419358337,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 620,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 3193,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 672,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 993,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 229,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 3283,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 11812,
            "range": "± 843",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nyvorin@gmail.com",
            "name": "Nyvorin",
            "username": "nyvorin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c0b81127cac4080a9660433e6fa461b75002a8a",
          "message": "Merge pull request #18 from Dev916/chore/extract-rx-leptos\n\nchore: move rx-leptos and the Leptos examples to Dev916/rx-leptos",
          "timestamp": "2026-09-14T16:59:55-04:00",
          "tree_id": "aad002d015c462834df3ac1c35eb3429660e684f",
          "url": "https://github.com/Dev916/rxRust/commit/2c0b81127cac4080a9660433e6fa461b75002a8a"
        },
        "date": 1789419615994,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 1031,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 5008,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 1063,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 2143,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 359,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 1865,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 18979,
            "range": "± 76",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "committer": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "distinct": true,
          "id": "69fd166f8fbbe9d124263a43a5c62e320452d724",
          "message": "chore(beads): sync issue tracker state\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01HZvqSeEXabgPF9ygvc6wAf",
          "timestamp": "2026-09-24T14:13:53-04:00",
          "tree_id": "a957bf8cc832953d8b74ef4843583fd813c10f70",
          "url": "https://github.com/Dev916/rxRust/commit/69fd166f8fbbe9d124263a43a5c62e320452d724"
        },
        "date": 1790273707953,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 834,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 5165,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 896,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 3991,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 297,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 4926,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 15306,
            "range": "± 224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nyvorin@gmail.com",
            "name": "Nyvorin",
            "username": "nyvorin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2c2f0f6250aefcdcc0e6de810d4b60b39ecfdd9",
          "message": "Merge pull request #19 from Dev916/chore/sync-upstream\n\nchore: sync with upstream master (BehaviorSubject fix, pinned toolchain, CI rework)",
          "timestamp": "2026-10-01T09:34:02-04:00",
          "tree_id": "4676884884e4f503ca2853bd1eea33d49cef2b8b",
          "url": "https://github.com/Dev916/rxRust/commit/a2c2f0f6250aefcdcc0e6de810d4b60b39ecfdd9"
        },
        "date": 1790861692487,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 831,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 3611,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 824,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 1657,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 210,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 1447,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 13907,
            "range": "± 141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "committer": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "distinct": true,
          "id": "018f40b7e2ef60cb4c9c65cc677c6b09efbaa661",
          "message": "chore(beads): sync issue tracker state\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01HZvqSeEXabgPF9ygvc6wAf",
          "timestamp": "2026-10-01T09:34:07-04:00",
          "tree_id": "29a43c0a85a4aff2aa76b081bd96ca72c393fbff",
          "url": "https://github.com/Dev916/rxRust/commit/018f40b7e2ef60cb4c9c65cc677c6b09efbaa661"
        },
        "date": 1790861730811,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 956,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 4938,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 982,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 1904,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 317,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 1658,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 15870,
            "range": "± 128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "committer": {
            "email": "webmech@gmail.com",
            "name": "web-mech",
            "username": "nyvorin"
          },
          "distinct": true,
          "id": "f9bb1467ae5b59691a78099cd6d8d08dd593fa5a",
          "message": "chore(beads): close sync task, record upstream PR #297\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01HZvqSeEXabgPF9ygvc6wAf",
          "timestamp": "2026-10-01T09:35:34-04:00",
          "tree_id": "adcbabb46b0d38f19e3ebcbf8a3086798a54046f",
          "url": "https://github.com/Dev916/rxRust/commit/f9bb1467ae5b59691a78099cd6d8d08dd593fa5a"
        },
        "date": 1790861777278,
        "tool": "cargo",
        "benches": [
          {
            "name": "local_collect_to_vec",
            "value": 1080,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "local_flat_map_small_inners",
            "value": 4704,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "local_map_filter",
            "value": 1061,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "local_merge_two_sources",
            "value": 2138,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "local_scan_take",
            "value": 271,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "shared_map_filter",
            "value": 1865,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "subject_broadcast_ten_subscribers",
            "value": 17929,
            "range": "± 162",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}