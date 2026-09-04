---
marp: true
---

$\setdef {O(n, \R)} A {GL(n, \R)} {||A \xv|| = ||\xv|| \quad \forall \ \xv \in \Rn}$ 

Actions were the *raison d'être* for the development of Lie group theory.

---

## Reminder: Inverse Function Theorem, Implicit Function Theorem, and regular level sets

If $\fv : U \subseteq \Rn \to \Rn$ is continuously differentiable, and $d_{\xv_0} \fv$ is invertible for some $\xv_0 \in U$, then there are neighborhoods $V of $\xv_0$ and $W$ of $\fv(\xv_0)$ such that $\fv_V$ has a differentiable inverse $\fv_V^{-1}: W \to V$.


"Manifold" will mean a smooth (AKA $C^\infty$) real manifold with countably many connected components.

For a manifold $M$ and a point $m ∈ M$, we denote by $T_mM$ the tangent space to $M$ at $m$.

A map $f : X → Y$ is called an immersion if rank f∗ = dim X for every point x ∈ X; in this case, one can choose local coordinates in a neighborhood of x ∈ X and in a neighborhood of f(x) ∈ Y such that f is given by f(x1,...xn) = (x1,...,xn,0,...0).
An immersed submanifold in a manifold M is a subset N ⊂ M with a structure of a manifold (not necessarily the one inherited from M!) such that inclusion map i: N 􏰂→ M is an immersion. Note that the manifold structure on N is part of the data: in general, it is not unique. However, it is usually suppressed in the notation. Note also that for any point p ∈ N, the tangent space to N is naturally a subspace of tangent space to M: TpN ⊂ TpM.
An embedded submanifold N ⊂ M is an immersed submanifold such that the inclusion map i: N 􏰂→ M is a homeomorphism. In this case the smooth structure on N is uniquely determined by the smooth structure on M.kkk$

so that for any $v_m \in T_m M$,
$$
(g \cdot \alpha)(m)(v_m)% = (D_m \rho(g^{−1}))^* \alpha(g^{−1} \cdot m)(v_m)
= \alpha(g^{−1} \cdot m)(D_m \rho(g^{−1})(v_m)).
$$

## Subgroups (classical examples, just the group structure)

Many classical matrix groups are subgroups of $GL(n, \R)$ or $GL(n, \C)$ determined by constraints on the group action involving preservation of 
- a bilinear form on $\Rn$ or $\C^n$, and/or
- area or volume.

***Reminder:*** A scalar-valued function Φ : V × V → F, is a *bilinear form* on a vector space $V$ over a field $F$ if it is linear in each variable.

### Examples

- The *orthogonal group* $\setdef {O(n, \R)} A {GL(n, \R)} {A^T A = \idm}$ preserves the Euclidean inner product: 
$$
A \in O(n, \R)  \quad \Longleftrightarrow \quad (A \, xv) \cdot *A \, \yv) = \xv \cdot \yv \quad \forall \ \xv, \yv \in \R^n.
$$
- The unitary group preserves the Hermitian inner product.

---

### More examples

- The *special linear group* $\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}$, $F = \R, \C$, preserves volume (area in 2D) and orientation. 

- The *rotation group* $SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- $SU(n) = U(n) \cap SL(n, \C)$.

- The *symplectic group* 

---

## Lie subgroups: the manifold structure

"Manifold" will mean a smooth (AKA $C^\infty$) real manifold with countably many connected components.

For a manifold $M$ and a point $m ∈ M$, we denote by TmM the tangent space to M at point m, and by TM the tangent bundle to M. 

The space of vector fields on M (i.e., global sections ofTM) is denoted by Vect(M). Foramorphismf:X→Y and a point x∈X,wedenoteby f∗ : TxX → Tf(x)Y the corresponding map of tangent spaces.

A map $f : X → Y$ is called an immersion if rank f∗ = dim X for every point x ∈ X; in this case, one can choose local coordinates in a neighborhood of x ∈ X and in a neighborhood of f(x) ∈ Y such that f is given by f(x1,...xn) = (x1,...,xn,0,...0).
An immersed submanifold in a manifold M is a subset N ⊂ M with a structure of a manifold (not necessarily the one inherited from M!) such that inclusion map i: N 􏰂→ M is an immersion. Note that the manifold structure on N is part of the data: in general, it is not unique. However, it is usually suppressed in the notation. Note also that for any point p ∈ N, the tangent space to N is naturally a subspace of tangent space to M: TpN ⊂ TpM.
An embedded submanifold N ⊂ M is an immersed submanifold such that the inclusion map i: N 􏰂→ M is a homeomorphism. In this case the smooth structure on N is uniquely determined by the smooth structure on M.

---

### Reminder: Implicit Function Theorem


Crucial to choose the codomain widely!

### Example: $O(n, \R)$

Let 
$$
\text{Sym}(n, \R) = \{ A \in \R^{n \times n} : A^T = A \}
$$ 
denote the vector space of symmetric real $n \times n$ matrices, and define $f: \R^{n \times n} \to \text{Sym}(n, \R)$ by
$$
f(A) := A^T A.
$$ 

---

## Orbits

Given an action of a Lie group $G$ on a manifold $M$, define *orbit* and *stabilizer (isotropy subgroup)* of a point $m \in M$ wedefineitsorbitbyOm =Gm={g.m|g∈G}and stabilizer by
(2.3) Gm ={g∈G|g.m=m}
Theorem 2.20. Let M be a manifold with an action of a Lie group G (respectively, a complex manifold with an action of complex Lie group G). Then for any m ∈ M the stabilizer Gm is a closed Lie subgroup in G, and g 􏰈→ g.m is an injective immersion G/Gm 􏰁→ M whose image coincides with the orbit Om.
Proof. The fact that the orbit is in bijection with G/Gm is obvious. For the proof of the fact that Gm is a closed Lie subgroup, we could just refer to Theorem 2.9. However, this would not help proving that G/Gm → M is an immersion. Both of these statements are easiest proved using the technique of Lie algebras; thus, we postpone the proof until later time (see Theorem 3.29). 􏰬
Corollary 2.21. The orbit Om is an immersed submanifold in M, with tangent space TmOm = ∼
T1G/T1Gm. If Om is a submanifold, then g 􏰈→ g.m is a diffeomorphism G/Gm −→ Om.

### Homogeneous spaces
An important special case is when the action of G is transitive, i.e. when there is only one orbit.
Definition 2.22. A G-homogeneous space is a manifold with a transitive action of G.


$(\xi, \eta) \mapsto [\xi, \eta]\ {}$ is a bilinear mapping.

***Another example:***
$$
G = S^1 = \{z ∈ \C : |z| = 1\}., \qquad \text{with} \qquad \fg = i \, \R \approx \R,
$$
$$
|z(\epsilon)|^2 = \overbar{z(\epsilon)}z(\epsilon)
has exponential map $\exp: \R \to S^1$
$$
\exp(a) = e^{a i}.
$$

---


$$
\exp(\epsilon \, \xi) \exp(\epsilon \, \eta) = \exp \! \lp \epsilon \, (\xi + \eta) + \smallfrac {\epsilon^2}2 [\xi, \eta] +  {\cal O}\! \lp \epsilon^3 \rp \rp,
$$
and hence
$$
\exp(\epsilon \, \xi) \exp(\epsilon \, \eta) \exp(−\epsilon \, \xi) \exp(−\epsilon \, \eta) = \exp \! \lp \epsilon^2 \, [\xi, \eta] + {\cal O}\! \lp \epsilon^3 \rp \rp.
$$


- If $G$ is connected, then any Lie group homomorphism $φ: G → H$ is uniquely determined by $d_1 φ : \fg → \fh$.

Since $\ \Phi_p(G) = G \cdot p, \ {}$ if $G \cdot p$ is an embedded submanifold of $G$, we can just apply the level set theorem. 


If $G \cdot p$ is an (embedded) submanifold of $M$, then $\ G/G_p \to G \cdot p$ is a diffeomorphism.
$~$
If the action of $G$ is proper, $G_p = \psi^{-1}(p, p)$ is compact.

If h is a Lie subalgebra of g, then there is a unique connected Lie
subgroup H of G with Lie algebra h.
Proof. Let X1, · · · , Xk be a basis of h ⊂ g. Since X0
i
s are left invariant vector fields
on G, linearly independent at e, they are linearly independent at all g ∈ G. In other
words,
Vg = span{X1(g), · · · , Xk(g)}
gives us a k-dimensional distribution on G. Since [Xi
, Xj
] ∈ h for all i, j, V is integrable.
By Frobenius theorem, there is a unique maximal connected integral manifold of V
through e. Denote this by H.
To show that H is a subgroup, note that V is a left invariant distribution. So the left
translation of any integral manifold is an integral manifold. Now suppose h1, h2 ∈ H.
Since
h1 = Lh1
e ∈ H ∩ Lh1H,
and since H is maximal, we have Lh1H ⊂ H. So in particular h1h2 = Lh1 h2 ∈ H.
Similarly, h
−1
1 ∈ H since Lh
−1
1
(h1) = e ∈ H implies Lh
−1
1
H ⊂ H. It follows that H is a
subgroup of G. Since the group operations on H are the restriction of group operations
on G, they are smooth. So H is a Lie group.
For uniqueness, let K be another connected Lie subgroup of G with Lie algebra h.
Then K is also an integral manifold of V. So we have K ⊂ H. Since TeK = TeH the
inclusion has to be a local isomorphism. In other words, K coincide with H near e.
Since any connected Lie group is generated by any open set containing e, we conclude
that K = H.


$$
A  = \begin{bmatrix}{\lambda & 1 \\ 0 \lambda}\end{bmatrix}.
$$

- basis $\ \{ \xi_1, \cdots, \xi_n \} \ {}$ of $\fg$ and
- volume form $\omega_1$ on $\fg$,

determine a $\lozenge$-invariant volume form $\omega_\lozenge$ on $G$ via 
$$
\iota_{X_{\xi_n}} \cdots \iota_{X_{\xi_1}} \omega_\lozenge := \omega_1(\xi_1, \ldots, \xi_n),
$$
i.e.
$$
\omega_\lozenge(g)(d_1 \lozenge_g(\xi_1), \ldots, d_1 \lozenge_g(\xi_n)) = \omega_1(\xi_1, \ldots, \xi_n)
\qquad \forall \ g \in G.
$$
