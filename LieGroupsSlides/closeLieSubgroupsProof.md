## Closed subgroups of Lie groups are closed Lie subgroups

Let $H$ be a closed subgroup of $G$ and $\fh$ denote the set of algebra elements in $\fg$ with one parameter subgroups contained in $H$.

***Claim 1.***
$\fh$ is a subspace of $\fg$.

*Verify:* $\fh$ is closed under scalar multiplication, since $\xi \in \fh \ \ \Longleftrightarrow \ \ \exp(t \, \xi) \in H \ \ \forall \ t \in \R \}$.

If $\xi, \eta \in \fh$, the Lie-Trotter formula and $H$ closed $ \ \ \Longrightarrow \ \ {}$ 
$$
\exp(\xi + \eta) = 

<Spacer size = "5px"/>


In what follows we will prove the closed subgroup theorem due to E. Cartan. We will
need the following lemmas:
Lemma 1.1. h is a linear subspace of g.
Proof. Clearly h is closed under scalar multiplication. It is closed under vector addition
because for any t ∈ R,
H 3 limn→∞ 
exp(tX
n
) exp(tY
n
)
n
= limn→∞ 
exp 
t(X + Y )
n
+ O(
1
n2
)
n
= exp(t(X+Y )).

Lemma 1.2. Suppose X1, X2, · · · be a sequence of nonzero elements in g so that
(1) Xi → 0 as i → ∞.
(2) exp(Xi) ∈ H for all i.
(3) limi→∞
Xi
|Xi| = X ∈ g.
Then X ∈ h.
Proof. For any fixed t 6= 0, we take ni = [ t
|Xi|
] be the integer part of t
|Xi|
. Then
exp(tX) = limi→∞
exp(niXi) = limi→∞
exp(Xi)
ni ∈ H.

Lemma 1.3. The exponential map exp : g → G maps a neighborhood of 0 in h bijectively to a neighborhood of e in H.
Proof. Take a vector subspace h
0 of g so that g = h ⊕ h
0
. Let Φ : g = h ⊕ h
0 → G be
the map
Φ(X + Y ) = exp(X) exp(Y ).
Then as we have seen, dΦ0(X + Y ) = X + Y . So Φ is a local diffeomorphism from
g to G. Since exp |h = Φ|h, to prove the lemma, it is enough to prove that Φ maps a
neighborhood of 0 in h bijectively to a neighborhood of e in H.

---

The following proof that a closed subgroup of a Lie group is a closed Lie subgroup is from *Foundations of Mechanics*, by Abraham and Marsden. Don't sweat the analysis (e.g., existence of a convergent subsequence) if that's not your strong suit. What I would like you to focus on is the use of the exponential and the group operations in shifting an 'analysis on manifolds' problem to a vector space (the Lie algebra) setting, where traditional analytic techniques can be used.

<p align="center">
  <img alt="closedLieSubgroups1" src="/Images/closedLieSubgroups1.png" width="250" >
</p>

---

<p align="center">
  <img alt="closedLieSubgroups2" src="/Images/closedLieSubgroups2.png" width="250" >
</p>