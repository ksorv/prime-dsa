Classically, Array is a contigous space in memory of single type.
In modern languages, Array's can be a HashMap or some other data structures under the hood, based on its length.

Static arrays are still classical, but modern languages like JS uses dynamic arrays. which are not exactly the same Big-O as below, but are considered to be as mean value.

For Array:
Get at index i -> O(1) -> constant time.
Push at index i -> O(1) -> constant time.
Get at index i -> O(1) -> constant time.