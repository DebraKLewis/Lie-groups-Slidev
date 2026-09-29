---

## Lie subgroups and closed Lie subgroups

Lie subgroups need both group and manifold "sub" structures:
 
 A *Lie subgroup* of a Lie group $G$ is a subgroup of $G$ that is
an [immersed submanifold](immersed-and-embedded-submanifolds) of $G$.

A *closed Lie subgroup* is a Lie subgroup that is an [embedded submanifold](immersed-and-embedded-submanifolds) of $G$.<br/>
This naming convention is analytically justified!

- An embedded subgroup of $G$ is a closed subset of $G$. <br/>
$\quad{}$Exercise 2.1 in Kirillov provides the three key steps in the proof. 
<!-- ; some hints are provided in Appendix B. -->

- Closed subgroups of Lie groups are embedded submanifolds ([Cartan closed subgroup theorem](Cartan-closed-subgroup))<br/> 
$\quad{}$Proof after we've developed more [machinery](BCH-Lie-Trotter).

***Examples:*** 
- The classical matrix groups are closed Lie subgroups of $GL(n, F)$.

- An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, of $T^2$.

---

### Classical matrix groups as regular level sets in $GL(n, F)$

A [regular level set](regular-level-sets) $\, f^{-1}(c)$ of a smooth map $f: M \to N$ is an embedded submanifold of $M$.

$\Longrightarrow \ \ {}$ If $c$ is a regular value of $f: G \to N$ and $f^{-1}(c)$ is a subgroup of $G$, $f^{-1}(c)$ is a closed Lie subgroup.
<Spacer size="5px"/>

The [classical matrix groups](classical-matrix-groups) are subgroups of $GL(n, F), F = \R$ or $\C$, determined by constraints on the $GL(n, F)$ action involving preservation of multilinear forms:

- The orthogonal group $O(n, \R)$ and unitary group $U(n)$ 
preserve inner products.

- The special linear group  $SL(n, F)$ preserves signed volume. 

- The rotation group $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- The special unitary group $SU(n) = U(n) \cap SL(n, \C)$.

These examples, and others, can be shown to be closed Lie subgroups of $GL(n, F)$ by showing that they are level sets of regular values of appropriate maps. 

---

### Example of a level set calculation: the orthogonal group $O(n, \R)$

The key to successful characterization of 
$$
O(n) = \{ A \in {GL(n, \R)} :  A^T A = \idm \}
$$
as a level set $f^{-1}(c)$ is the design of the map $f$. 

The choice $f(A) := A^T A$ for the evaluation formula is natural/inevitable.
We could take $GL(n, \R)$ as the domain of $f$, but the vector space $\R^{n \times n}$ works just as well, since $\, f(A) = \idm \ \  \Longrightarrow \ \  A$ is invertible.

To apply the [regular level set theorem](regular-level-sets), we need to show that $f(A) = \idm \ \ \Longrightarrow \ \ d_A f$ is surjective. 

$A^T A$ is symmetric, and symmetric matrices form a <!-- $\frac {n (n +1)} 2$ dimensional--> subspace of $\R^{n \times n}$:
$$
\setdef{\text{Sym}(n, \R)} A {\R^{n \times n}} {A^T = A},
$$ 
so that's our candidate codomain.

Alternatively, we could take $\R^{n \times n}$ as the codomain of $f$ and use the [constant rank level set theorem](constant-rank-level-sets).

---

#### Second slide of the level set construction for $O(n, \R)$
<Spacer size="5px"/>

$$
\eqa{
\fv(A + \epsilon \, B) &= (A + \epsilon \, B)^T (A + \epsilon \, B) \\
&= A^T A + \epsilon ( A^T B + B^T A) + \epsilon^2  B^T B 
}
$$
$\Longrightarrow$
$$
d_A \fv(B) = \dep {\fv(A + \epsilon \, B)} = A^T B + B^T A.
$$
<Spacer size = "5px" />

Exploiting the constraint (with foreshadowing): $\, \fv(A) = \idm\ \ \Longrightarrow$
$$
\eqa{
d_A \fv(A \, C) &= A^T A C + C^T A^T A \\
&= \fv(A) C + C^T \fv(A) \\
&= C + C^T.
}
$$

Surjectivity: $\fv(A) = \idm \ \text{and} \ C \in \text{Sym}(n, \R) \quad \Longrightarrow$
$$
d_A \fv\lp \half A C \rp = \half (C + C^T) = C.
$$

---

#### Third slide of the level set construction for $O(n, \R)$: the tangent spaces
<Spacer size="5px"/>

$$
T_A O(n, \R) = \text{ker} (d_A \fv) = \{ AC : C + C^T  = 0 \}.
$$
In particular, $T_\idm O(n, \R)$ is the space of skew-symmetric real $n \times n$ matrices.
<Spacer size="5px"/>

More foreshadowing: we can also describe the tangent space at $A$ using right multiplication by $A$.
$$
\eqa{
d_A \fv(B) &= A^T B + B^T A \\
&= A^T \lp B A^{-1} + (A^T)^{-1} B^T \rp A \\
&= A^T (B A^{-1} + (B A^{-1})^T) A,
}
$$
since $(A^T)^{-1} = (A^{-1})^T$.

Hence $\, d_A \fv(B) = 0\quad \Longleftrightarrow \quad B A^{-1}$ is skew-symmetric $\quad \Longleftrightarrow \quad B A^{-1} \in T_\idm O(n, \R)$.
<Spacer size="5px"/>
 
These relationships between the tangent fibers are not unique to this example!

---

### Triviality of the tangent bundle of a Lie group

The description of the tangent fiber at an arbitrary group element in terms of the tangent fiber at the identity in the $O(n, \R)$ calculations isn't a one off thing.

We'll soon see that for any Lie group $G$, if 
$$L_g: G \to G \sands R_g: G \to G$$
denote left (respectively right) multiplication by $g$, i.e.
$$
L_g(h) := g \, h \sands R_g(h) := h\, g,
$$
then
$$
T_g G = d_1 L_g (T_1 G) = d_1 R_g (T_1 G).
$$
<Spacer/>

It follows that the tangent bundle of a Lie group is trivial:<br/> 
left and right muliplication each determine diffeomorphisms between $TG$ and $G \times T_1 G$. 
