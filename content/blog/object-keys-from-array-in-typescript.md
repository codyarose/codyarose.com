---
path: object-keys-from-array-typescript
date: 2020-09-28T04:26:22.352Z
title: Object Keys from Array in Typescript
description: Creating a strongly typed object based on a string array.
featuredImage: ../assets/type.jpg
---

While creating a breakpoints utility on a styled-components theme I felt it would be valuable to have the size options strongly typed using a string array of possible sizes. Lets set up our starting point:

```tsx
const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

const values = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
}
```

At first that may seem unnecessary because an interface for `values` defining the possible key value pairs would be the right way to do it, but that won't work for my use case.

I plan on referencing that array of possible sizes in each breakpoints method since the only possible parameters should be one of those strings, e.g. `theme.breakpoints.down('sm')`.

Is this overkill for a media query utility? Maybe 🤷‍♂️

## String array to string literals

First we need to convert `sizes` array to a string literals array. We can do this with `const assertions` as of [Typescript 3.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions). Essentially, this will assert the literal value of the array instead of widening the type to `string[]`.

```tsx
const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
// type: string[] ❌

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
// type: readonly ["xs", "sm", "md", "lg", "xl"] ✅
```

It's important to do this because when we create the type for `values` we don't want it to allow just any string as a key; the string must exist in `sizes`

## Mapped type for the `values` object

For the `values` object we're going to create a [mapped type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types) using the `in` keyword and our `sizes` array. This will iterate over each item in `sizes` to create the keys then set the value type for those keys as `number`. The syntax for this one can be a bit difficult to read.

```tsx
type Values = {
	[K in typeof sizes[number]]: number
}
// which is equivalent to:
type Values = {
	xs: number
	sm: number
	md: number
	lg: number
	xl: number
}
// ✅
```

`K` is the type parameter - you can think of it as `Key`, but you'll typically see it written as just `K`. Then `(typeof sizes)[number]` is an [indexed access type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types), which will get the resulting type from indexing `typeof sizes` with an index of type `number`. A more readable translation may be "create a key for each item in `sizes` then set the key value as type `number`."

If we hadn't used `const assertion` on `sizes` the type would be very general and our mapped `Values` type would be equivalent to:

```tsx
type Values = {
	[x: string]: number
}
// ❌
```

## Conclusion

Now we have a thorough type to apply to our `values` object that is based on the `sizes` string array. Here's our tidy, finished code all together:

```tsx
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

type Values = { [K in typeof sizes[number]]: number }

const values: Values = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
}
```

If we were to add another value to `values` whose key does not exist in `sizes` Typescript would give the following error:

```tsx
const values: Values = {
	// ...
	xxl: 2500,
}
// Type '{ xs: number; sm: number; md: number; lg: number; xl: number; xxl: number; }' is not assignable to type 'Options'.
// Object literal may only specify known properties, and 'xxl' does not exist in type 'Options'.
```
