/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > outside-plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "pretty big",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "less big",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts > TAP > outside-plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "pretty big",
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "less big",
      "id": 5,
      "name": "less big",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 3,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "three",
      "id": 3,
      "name": "three",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "pretty big",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "less big",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 3,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`