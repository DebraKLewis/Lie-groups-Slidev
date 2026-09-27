---

## Lie subgroups and closed Lie subgroups

We need to respect both group and manifold "sub" structures:
 
 A *Lie subgroup* of a Lie group $G$ is 
- a subgroup of $G$, and
- an <Link to="immersed-and-embedded-submanifolds">immersed submanifold</Link> of $G$.

A *closed Lie subgroup* is a Lie subgroup that is an <Link to="immersed-and-embedded-submanifolds">embedded submanifold</Link> of $G$.
<Spacer size="5px" />

Any closed Lie subgroup is closed in $G$.

An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, of $T^2$.
<Spacer size="5px" />

***Claim:*** Any closed subgroup of a Lie group $G$ is a closed real Lie subgroup of $G$.

<Link to = "Cartan-closed-subgroup">Proof</Link> after we've developed more <Link to = "BCH-Lie-Trotter">machinery</Link>.

---

### Example of a level set calculation: the orthogonal group $O(n, \R)$

The key to successful characterization of 
$$
O(n) = \{ A \in {GL(n, \R)} :  A^T A = \idm \}
$$
as a level set $f^{-1}(c)$ is the design of the map $f$. 

The choice $f(A) := A^T A$ for the evaluation formula is natural/inevitable.
We could take $GL(n, \R)$ as the domain of $f$, but the vector space $\R^{n \times n}$ works just as well, since $\, f(A) = \idm \ \  \Longrightarrow \ \  A$ is invertible.

To apply the <Link to="regular-level-sets">regular level set theorem</Link>, we need to show that $f(A) = \idm \ \ \Longrightarrow \ \ d_A f$ is surjective. 

$A^T A$ is symmetric, and symmetric matrices form a <!-- $\frac {n (n +1)} 2$ dimensional--> subspace of $\R^{n \times n}$:
$$
\setdef{\text{Sym}(n, \R)} A {\R^{n \times n}} {A^T = A},
$$ 
so that's our candidate codomain.

Alternatively, we could take $\R^{n \times n}$ as the codomain of $f$ and use the <Link to="constant-rank-level-sets">constant rank level set theorem</Link>.

---

#### Second slide of the level set construction for $O(n, \R)$

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

<!--
## Lie subgroups and closed Lie subgroups

We need to respect both group and manifold "sub" structures:
 
 A *Lie subgroup* of a Lie group $G$ is 
- a subgroup of $G$, and
- an <Link to="immersed-and-embedded-submanifolds">immersed submanifold</Link> of $G$.

<Spacer />

A *closed Lie subgroup* is a Lie subgroup that is an <Link to="immersed-and-embedded-submanifolds">embedded submanifold</Link> of $G$.
<Spacer size="5px" />

Any closed Lie subgroup is closed in $G$.

An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, of $T^2$.
<Spacer size="5px" />

***Claim:*** Any closed subgroup of a Lie group $G$ is a closed real Lie subgroup of $G$.

Proof after we've developed more machinery.

---

### Classical matrix groups as regular level sets in $GL(n, F)$

*Recall:* A <Link to="regular-level-sets"">regular level set</Link> $f^{-1}(c)$ of a smooth function $f: M \to N$ is an embedded submanifold of $M$.

$\Longrightarrow \ \ {}$ If $c$ is a regular value of $f: G \to N$ and $f^{-1}(c)$ is a subgroup of $G$, $f^{-1}(c)$ is a closed Lie subgroup of $G$.

The classical matrix groups are subgroups of $GL(n, F)$, $F = \R$ or $\C$, determined by constraints on the action involving preservation of multilinear forms:

- The *orthogonal group* $\setdef {O(n, \R)}$ (resp. *unitary group* $U(n)$) 
preserves the Euclidean (resp. Hermitian) inner product.

- The *special linear group*  $\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}, \qquad F = \R \text{ or } \C,$ preserves signed volume. 

- The *rotation group* $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- The *special unitary group* $SU(n) = U(n) \cap SL(n, \C)$.

$~$
These examples, and others, can be shown to be closed Lie subgroups of $GL(n, F)$ by showing that they are level sets of regular values of appropriate maps. 

---

### Example: $O(n, \R)$

Let $\ \text{Sym}(n, \R) = \{ A \in \R^{n \times n} : A^T = A \}\ {}$ denote the vector space of symmetric real $n \times n$ matrices, and define 
$$
\beqa{
\fv: \R^{n \times n} &\to \text{Sym}(n, \R) \\
\fv(A) &:= A^T A.
}
$$ 
To apply the level set theorem, we need to show that $d_A \fv$ is surjective if $A \in O(n, \R)$.
$$
\beqa{
\fv(A + \epsilon \, B) &= (A + \epsilon \, B)^T (A + \epsilon \, B) \\
&= A^T A + \epsilon ( A^T B + B^T A) + \epsilon^2  B^T B 
}
$$
implies that
$$
d_A \fv(B) = \dep {\fv(A + \epsilon \, B)} = A^T B + B^T A.
$$
In particular, if $\fv(A) = \idm$, then
$$
d_A \fv(A \, C) = A^T A C + C^T A^T A = C + C^T.
$$

--- 

If $C \in \text{Sym}(n, \R)$, then
$$
d_A \fv\lp \half A C \rp = \half (C + C^T) = C,
$$
so $d_A \fv$ is surjective for all $A \in \fv^{-1}(\idm) = O(n, \R)$. 
$~$
The tangent space at $A$:
$$
T_A O(n, \R) = \text{ker} (d_A \fv) = \{ AC  \in \R^{n \times n} : C + C^T  = 0 \},
$$
i.e. 
$$
\beqa{
T_A O(n, \R) &= d_\idm L_A (\{\text{skew-symmetric $n \times n$ matrices}\}) \\
&= d_\idm L_A(T_\idm O(n, \R)).
}
$$
$~$
We can also describe the tangent space at $A$ using right multiplication:
$$
T_A O(n, \R) = d_\idm R_A(T_\idm O(n, \R)),
$$

---

since $A \in O(n, \R)$ and $C \in T_\idm O(n, \R) \quad \Longrightarrow$
$$
A C = A C (A^T A) = (A C A^T) A \in d_\idm R_A(T_\idm O(n, \R))
$$
and
$$
C A = (A A^T) C A = A (A^T C A) \in d_\idm L_A(T_\idm O(n, \R)).
$$
$~$ 
These characterizations of the tangent spaces are not unique to this example, or to the classical matrix groups!

We'll soon see that for any Lie group
$$
T_g G = d_1 L_g (T_1 G) = d_1 R_g (T_1 G).
$$

---

### A pair of matrix groups that aren't "classical": $IUT(n, \R)$ and $SUT(n, \R)$ 

The sets
- $\setdef{IUT(n, \R)} A {GL(n, \R)} {A \text{ upper triangular}}\quad {}$ and
- $\setdef{SUT(n, \R)} A {SL(n, \R)} {A \text{ upper triangular}}$

are groups with the usual matrix multiplication and inversion as the group operations:
If $\av_1, \ldots, \av_n$ (respectively $\bv_1, \ldots, \bv_n$) are the columns of $A$ (respectively $B$), then the $j$-th column of $AB$ is 
$$
A \bv_j = b_{1j} \av_1 + \cdots + b_{nj} \av_n = b_{1j} \av_1 + \cdots + b_{jj} \av_j,
$$
since $b_{k j} = 0$ if $k > j$.

To show that they are Lie groups, we can again use the level set theorem.
$~$
(*In-class 'activity'.*)

-->