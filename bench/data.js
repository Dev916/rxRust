window.BENCHMARK_DATA = {
  "lastUpdate": 1789419359187,
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
      }
    ]
  }
}