window.BENCHMARK_DATA = {
  "lastUpdate": 1789419616706,
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
      }
    ]
  }
}