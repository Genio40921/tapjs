# `@tapjs/snapshot`

A default tap plugin that adds snapshot functionality.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/snapshot` to
bring it back.

Snapshots are a way to make extremely comprehensive assertions
about a value, and easily keep tests up to date. This is a
powerful technique for testing many kinds of programs (especially
those that generate output), but it comes with some caveats.

## Basics of Output Testing

Consider a test program like this:

```js
// tagger.mjs
export default (tag: string, contents: string) =>
  `<${tag}>${contents}</${tag}>`
```

We might have a test like this:

```js
// tagger.test.mjs
import t from 'tap'
import tagger from './tagger.mjs'
t.equal(tagger('tagName', 'content'), '<tagName>content</tagName>')
```

This is good for a couple of reasons:

1. It's clear reading our test what the expected output is.
2. We're unlikely to create a test without thinking carefully about
   what _exactly_ it's testing.

However, managing strings like this can become extremely tedious,
especially in cases where the output is long, or there are many cases
to test. If we make an _intentional_ change to the output, then we
need to manually update a large number of large strings, possibly
scattered throughout the test suite. The inevitable result is
that we either make the tests less comprehensive, or even worse,
treat some as ["known
failures"](https://node-tap.org/basics/#note-about-%22expected-failures%22-and-%22run-until-good%22-testing).

## Testing Output with Snapshots

We could also write our test file like this:

```js
// tagger.test.mjs
import t from 'tap'
import tagger from './tagger.mjs'
t.matchSnapshot(tagger('tagName', 'content'), 'output')
```

But wait, where is the expected output?

To create the snapshot file, run this command:

```
$ tap tagger.test.mjs --snapshot
 PASS  test.js 1 OK 344ms


  🌈 SUMMARY RESULTS 🌈


Suites:   1 passed, 1 of 1 completed
Asserts:  1 passed, of 1
Time:     422ms
```

By setting `TAP_SNAPSHOT` in the environment or passing the `--snapshot`
command line flag, we tell tap to write the output to a special file, and
treat the assertion as automatically passing.

Snapshots will be generated by default if the npm script being run is named
`snap` or `snapshot`, so you can use this pattern to test and snapshot most
projects:

```json
{
  "name": "my-project",
  "version": "1.2.3",

  "devDependencies": {
    "tap": "15"
  },
  "scripts": {
    "test": "tap",
    "snap": "tap"
  }
}
```

Then, you can use `npm test` to run your tests, or `npm run snap` to
update snapshot files.

## Snapshot Files

The generated file is designed to be human-readable, but you
should not edit it directly.

```
$ cat tap-snapshots/tagger.test.mjs.test.cjs
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tagger.test.mjs TAP > output 1`] = `
<tagName>content</tagName>
```

If the argument passed to `t.matchSnapshot()` isn't a string,
then it will be converted to a string using
[tcompare.format](https://tapjs.github.io/tapjs/modules/tcompare.html).
This is typically pretty easy for humans to understand, but of
course if you prefer to use `JSON.stringify` or something else,
you can do so easily enough. The
[t.formatSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#formatSnapshot)
can be used to customize this for an entire test.

## Caveats

### Track Changes

**Important: you should check the snapshot file into source control!**

When there are changes to it, inspect the diff and make sure that nothing
unexpected happened to change your output.

If you don't check this file into source control, then a significant part
of your test is not checked in. This prevents people from collaborating on
your project.

If you accept changes to it without care, then you can obscure unintended
changes. (Though, even if this happens, `git bisect` can track down the
source of the change quite quickly, so it's not the end of the world if
there are occasional mistakes.)

### Strip Variables from Output with `t.cleanSnapshot`

If your output includes data that is known to change from one run to the
next, then these changes should be stripped before matching against a
snapshot.

This includes process IDs, time stamps, and many other system details.

Consider this function:

```js
// msgtime.mjs
export const msgTime = msg => {
  return msg + ' time=' + Date.now()
}
```

Since the output will obviously be slightly different every time the
function is tested, we need to strip out the time value.

The best way to do this is with a
[`t.cleanSnapshot`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#cleanSnapshot)
function. This function takes the formatted snapshot as a string,
and returns a string to be saved or compared against. The default
cleaner is an identity function that returns its input without
any changes.

A test that uses this method:

```js
// msgtime.test.mjs
import t from 'tap'

// This must be assigned *before* running tests
// It is passed down to child tests when they are created
t.cleanSnapshot = s => s.replace(/ time=[0-9]+$/g, ' time={time}')

const output = msgTime('this is a test')
t.matchSnapshot(output, 'add timestamp to message')
```

When run with `--snapshot`, it generates this snapshot
file:

```js
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`msgtime.test.js TAP > add timestamp to message 1`] = `
this is a test time={time}
`
```

## Custom Formatting

Sometimes just modifying the string is not enough, or a special data type
should be stringified differently.

By default, tap uses
[`tcompare.format`](https://tapjs.github.io/tapjs/functions/tcompare.index.format-1.html)
to convert all non-string values into strings for saving and
comparing.

To override this and provide your own behavior, set a function to
[`t.formatSnapshot`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#cleanSnapshot).
Like `t.cleanSnapshot`, child tests will copy their parent test's
value at their time of creation.

An example of using `t.formatSnapshot`:

```js
import t from 'tap'
import { stringify } from 'tap-yaml'
t.formatSnapshot = object => stringify(object)

// now all my snapshot files will be in yaml!
t.matchSnapshot({ foo: ['bar', 'baz'] })
```

This will produce the following snapshot
file:

```js
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`yaml.test.js TAP > must match snapshot 1`] = `
foo:
  - bar
  - baz

`
```

## Advanced Customization (Warning: footguns!)

By default, the snapshot file that TAP uses is set based on the test
filename and any arguments passed to it. This prevents having two test
suites clobber one another's snapshots.

If you would like to specify a different filename for your snapshots, you
can do so by setting the
[`t.snapshotFile`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#snapshotFile)
field. If you set this field in a child test, then the _parent_
test (and all of its other child tests) will still use its old
snapshot file, but snapshots in the child test (and all its
children) will go to the new file.

But, be advised, this is advanced usage and exposes you to some hazards!

- When generating snapshots, the file is _overwritten_, so if two tests use
  the same snapshot file, they will _not_ be merged. The last one will win.
  Make sure that every snapshot file you use is unique to the entire test
  run.
- Snapshot files should always be in a folder called `tap-snapshot`, and
  should always end in `.test.cjs`. This pattern ensures that tap can load
  them properly, and that they will not be confused with normal test files.

Example of using a separate snapshot file for subtests:

```js
// file 'test/snappy.js'
import t from 'tap'
import { resolve } from 'node:path'

t.matchSnapshot(
  'this writes to ./tap-snapshots/test/snappy.js.test.cjs'
)

t.test('foo', async t => {
  // this writes to ./test/tap-snapshots/foo.test.cjs'
  // either path or file URL or file URL string is fine, but
  // it'll always store it as the actual path.
  t.snapshotFile = new URL(
    '../tap-snapshots/foo.test.cjs',
    import.meta.url
  )
  t.matchSnapshot('foo')
})

t.test('bar', async t => {
  // this writes to ./test/tap-snapshots/bar.test.cjs'
  t.snapshotFile = new URL(
    '../tap-snapshots/bar.test.cjs',
    import.meta.url
  )
  t.matchSnapshot('bar')
})

t.test('baz', async t => {
  // this one doesn't set it, so it uses the parent's snapshot object,
  // which writes to ./tap-snapshots/test/snappy.js.test.cjs
  t.matchSnapshot('baz')
})
```

## EVEN MORE Advanceder Customization (you're on your own!)

This module works by using a [Snapshot
Provider](https://tapjs.github.io/tapjs/classes/_tapjs_snapshot.provider.SnapshotProviderDefault.html),
which is a class that implements read, save, and snap methods.

You can write your own one of those, and pass the custom class in
the `snapshotProvider` option to a test.

With this, you can store snapshots anywhere you like, if for some
reason putting them in a js file is not your desire.