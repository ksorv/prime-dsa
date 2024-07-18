Big-O of n is a way to measure memory or time requiremments relative to inputs in the worst case scenario unless mentioned.

It helps generalize the way we talk about algorithms.

Example:
n   |   Time
1   |   1
2   |   2

Big-O of time => O(n), that means if n grows time will grow linearly.

For Big-O we do not consider constants, because we take n -> INFINITY.

O(2n) -> O(n)
O(2222n^2) -> O(n^2) _not a good things though_

#### O(n)
Linear, one for loop running for n

#### O(n^2)
Loop inside a loop, for every element we go over every element.

#### O(nlogn)
Basically means that as input n grows, the time taken grows very slowly.
Simple example would be binary search -> searching half the items every iteration.

So, n once, then n/2, then n/4...

#### O(n^1/2)
Rare, but happens.
