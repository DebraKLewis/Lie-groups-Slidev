## Lie groups

A real/complex smooth *Lie group* is a smooth manifold $G$ with a compatible group structure: the group multiplication and inversion operations 
$$
\mu: G \times G \to G \sands \iota: G \to G
$$
are smooth/analytic maps.

### Examples

- $F^n$, where $F = \R$ or $\C$, with vector addition
- $\setdef {\R^+} x \R {x>0}$, with scalar multiplication
- $\setdef {S^1} z \C {|z|=1}$, with scalar multiplication
- $\setdef {GL(n, F)} A {F^{n \times n}} {\det A \neq 0}$, with matrix multiplication
- the classical matrix groups (key structure-preserving subgroups of $GL(n, F)$)
- some other important level sets in $GL(n, F)$ 

---

## Classical matrix groups

- The *orthogonal group* preserves the Euclidean inner product: 
$$
\begin{align}
O(n, \R) &= \{ A \in {GL(n, \R)} :  \langle A \, \xv, A \, \yv \rangle = \langle \xv, \yv \rangle \quad \forall \ \xv, \yv \in \R^n \} \\
&= \{ A \in {GL(n, \R)} :  A^T A = \idm \}.
\end{align}
$$

- The *unitary group* preserves the Hermitian inner product:
$$\setdef {U(n)} A {GL(n, \C} {A^\dagger A = \idm}.$$ 

- The *special linear group* preserves volume (area in 2D) and orientation:
$$\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}, \qquad F = \R \text{ or } \C.$$

- The *rotation group* $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- The *special unitary group* $SU(n) = U(n) \cap SL(n, \C).\phantom{\int_\int}$

---

## Classical matrix groups are Lie groups

Given a multilinear function $\Phi: F^n \times \cdots \times F^n \to F$, set
$$
G_\Phi := \{ A \in GL(n, F) : A \ \ \text{preserves} \ \ \Phi \}.
$$
- ***Identity element***. The identity matrix fixes all vectors, so $\idm \in G_\Phi.$ 

- ***Closure under multiplication***. $A$ and $B \in G_\Phi \ \ \Longrightarrow$ 
$$
\eqa{
\Phi((AB) \xv_1, \ldots, (AB) \xv_k) &= \Phi(A (B \xv_1), \ldots, A (B \xv_k)) \\
&= \Phi(B \xv_1, \ldots, B \xv_k) \\
&= \Phi(\xv_1, \ldots, \xv_k).
}
$$

- ***Closure under inversion***. $A \in G_\Phi \ \ \Longrightarrow$ 
$$
\eqa{
\Phi(\xv_1, \ldots, \xv_k) &= \Phi((A A^{-1}) \xv_1, \ldots, (A A^{-1}) \xv_k)\\
&= \Phi(A (A^{-1} \xv_1), \ldots, A (A^{-1} \xv_k)) \\
&= \Phi(A^{-1} \xv_1, \ldots, A^{-1} \xv_k).}
$$
$\Longrightarrow \ \ G_\Phi$ is a subgroup of $GL(n, F)$.

---

### Examples

- The *orthogonal group* preserves the Euclidean inner product: 
$$
\begin{align}
O(n, \R) &= \{ A \in {GL(n, \R)} :  \langle A \, \xv, A \, \yv \rangle = \langle \xv, \yv \rangle \quad \forall \ \xv, \yv \in \R^n \} \\
&= \{ A \in {GL(n, \R)} :  A^T A = \idm \}.
\end{align}
$$

- The *unitary group* preserves the Hermitian inner product:
$$\setdef {U(n)} A {GL(n, \C} {A^\dagger A = \idm}.$$ 

---

- The *special linear group* preserves volume (area in 2D) and orientation:
$$\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}, \qquad F = \R \text{ or } \C.$$

- The *rotation group* $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- The *special unitary group* $SU(n) = U(n) \cap SL(n, \C).\phantom{\int_\int}$

We now need to show that these subgroups are smooth manifolds, and that the group operations are smooth.

We'll show that they're level sets of regular values, and invoke the relevant theorems. 

$~$
Let $f:X\to Y$ be a smooth map between manifolds. $\ y \in Y$ is a *regular value* of $f$ if 
$$
 x\in f^{-1}(y) \qquad \Longrightarrow \qquad d_x f:T_{x}X\to T_{y}Y \ \text{is surjective.}
$$

---

### A pair of matrix groups that aren't "classical": $IUT(n, \R)$ and $SUT(n, \R)$ 

The sets
- $\setdef{IUT(n, \R)} A {GL(n, \R)} {A \text{ upper triangular}}\quad {}$ and
- $\setdef{SUT(n, \R)} A {SL(n, \R)} {A \text{ upper triangular}}$

are groups with the usual matrix multiplication and inversion as the group operations:
If $\av_1, \ldots, av_n$ (respectively $\bv_1, \ldots, bv_n$) are the columns of $A$ (respectively $B$), then the $j$-th column of $AB$ is 
$$
A \bv_j = b_{1j} \av_1 + \cdots + b_{nj} \av_n = b_{1j} \av_1 + \cdots + b_{jj} \av_j,
$$
since $b_{k j} = 0$ if $k > j$.

*Note:* There are corresponding groups of lower triangular matrices, but they are less popular. 

$IUT(n, \R)$ and $SUT(n, \R)$ are used in QR factorizations: an element of $GL(n, \R)$ (resp. $SL(n, \R)$) can be expressed as a product $QR$, with $Q \in O(n, \R)$ and $R \in IUT(n, \R)$.

To show that they are Lie groups, we can use the level set theorem.

***Question:*** How can we identify subgroups of arbitrary Lie groups that are themselves Lie groups?


---

## Regular level sets

If $y \in Y$ is a regular value of a smooth map $f:X\to Y$, then $f^{-1}(y)$ is an embedded submanifold of $X$, and the restriction $\varphi|_{f^{-1}(y)}$ of a smooth map $\varphi$ with domain $X$ is smooth. 
$~$
If $f^{-1}(y) \neq \emptyset, \ {}$ then
$$
\dim f^{-1}(y) + \dim Y = \dim X
$$
and 
$$
f(x) = y \qquad \Longrightarrow \qquad T_x f^{-1}(y) = \ker{ d_x f}.
$$
$~$
***Pro tip:*** Choose the codomain $Y$ wisely to obtain surjectivity when using this result!

---

### Example: $O(n, \R)$

Let $\ \text{Sym}(n, \R) = \{ A \in \R^{n \times n} : A^T = A \}\ {}$ denote the vector space of symmetric real $n \times n$ matrices, and define 
$$
\begin{align}
\fv: \R^{n \times n} &\to \text{Sym}(n, \R) \\
\fv(A) &:= A^T A.
\end{align}
$$ 
To apply the level set theorem, we need to show that $\fv(A) = \idm \ \ \Longrightarrow \ \ d_A \fv$ is surjective.
$$
\begin{align}
\fv(A + \epsilon \, B) &= (A + \epsilon \, B)^T (A + \epsilon \, B) \\
&= A^T A + \epsilon ( A^T B + B^T A) + \epsilon^2  B^T B 
\end{align}
$$

$\Longrightarrow$

$$
d_A \fv(B) = \dep {\fv(A + \epsilon \, B)} = A^T B + B^T A.
$$

---

In particular, $\fv(A) = \idm\ \ \Longrightarrow$
$$
d_A \fv(A \, C) = A^T A C + C^T A^T A = C + C^T.
$$
$~$
*Surjectivity of* $d_A \fv$?
$$
\fv(A) = \idm \ \text{and} \ C \in \text{Sym}(n, \R) \quad \Longrightarrow \quad d_A \fv\lp \half A C \rp = \half (C + C^T) = C
$$
$\Longrightarrow \ \ d_A \fv$ is surjective for all $A \in \fv^{-1}(\idm) = O(n, \R)$. 
$~$
The tangent spaces:
$$
T_\idm O(n, \R) = \{ C \in \R^{n \times n} : C + C^T  = 0 \},
$$
the space of skew-symmetric real $n \times n$ matrices, and
$$
T_A O(n, \R) = \text{ker} (d_A \fv) = \{ AC : C \in T_\idm O(n, \R) \}.
$$

---

We can also describe the tangent space at $A$ using right multiplication by $A$:
$$
\begin{align}
A^T B + B^T A &= A^T B (A^{-1} A) + (A^T A) B^T A \\
&= A^T (B A^{-1} + (B A^{-1})^T) A,
\end{align}
$$
since 
$$
A B^T = \lp B A^T \rp^T = \lp B A^{-1} \rp^T
$$
for $A \in O(n, \R)$.

Hence 
$$
A^T B + B^T A = 0  \quad \Longleftrightarrow \quad B A^{-1} \ \ \text{is skew-symmetric}.
$$
$~$ 
These characterizations of the tangent spaces are not unique to this example, or to the classical matrix groups!

---

We'll soon see that for any Lie group $G$, if 
$$L_g: G \to G \sands R_g: G \to G$$
denote left (respectively right) multiplication by $g$, i.e.
$$
L_g(h) = g \, h \sands R_g(h) = h\, g,
$$
then
$$
T_g G = d_1 L_g (T_1 G) = d_1 R_g (T_1 G).
$$
$~$
The tangent bundle of a Lie group is trivial: all tangent fibers are naturally and conveniently modeled by $T_1 G$. 
$~$
$~$
$~$


---

## Reminder: Immersed and embedded submanifolds

$f : M → N$ is an *immersion* $\quad \Longleftrightarrow \quad d_p f\ {}$ is injective for all $p \in M$.
$~$

An *immersed submanifold* in a manifold $N$ is a subset $M ⊂ N$ with a manifold structure such that the inclusion map $\iota: M → N$ is an immersion. 
$~$

$M ⊂ N$ is a $k$-dimensional *embedded submanifold* of $N$ $\quad \Longleftrightarrow \quad$ for every $p \in M$, there exists a coordinate chart $p \in U\subset N,\varphi :U \to \R^n$, such that 
$$
\varphi(M \cap U) =  \varphi(U) \cap \{ (x_1, \ldots, x_k, 0, \ldots, 0) : x_j \in \R \}.%, j = 1, \ldots, k \}.
$$
$~$
$\{ (M \cap U,\varphi \vert_{M\cap U}) \}$  form an atlas for the differential structure on $M$.

---

A *smooth embedding* is an injective immersion $f : M → N$ such that $M$ is 
diffeomorphic to $f(M)$, where $f(M)$ has the submanifold topology described above.

Injective immersions of compact manifolds are embeddings. 
$~$

***Examples of injective immersions that aren't embeddings***

Figure eight and related injective immersions of $\R$ into $\R^2$

<p align="center">
  <img alt="figure eight" src="/Images/figureEight.png" width="250" >
</p>


---

An irrational winding on the torus, e.g. the trace of a parametrized curve $\R \to T^2 = S^1 \times S^1$ 
$$
t \mapsto \lp e^{i \, t },e^{i\, a \, t}\rp
$$
for irrational $a \in \R$, is another injective immersion that is not an embedding.

---

### Lie subgroups and closed Lie subgroups

A *Lie subgroup* $H$ of a Lie group $G$ is 
- a subgroup of $G$, and
- an immersed submanifold of $G$.

A *closed Lie subgroup* $H$ of a Lie group $G$ is a Lie subgroup of $G$ that is an embedded submanifold of $G$.

---

***Examples:***

- The matrix groups described earlier are closed Lie subgroups of $GL(n, F)$.

- An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, 
of $T^2 \approx S^1 \times S^1$.

$~$
Any closed Lie subgroup of $G$ is closed in $G$.

Any closed subgroup of a Lie group is a closed real Lie subgroup.
(Proof after we've developed more machinery.)
$~$
$~$

---

## Actions

A (left) *action* of a Lie group $G$ on a manifold $M$ is a map $\ \rho: G \to \diffM \ {}$ such that
$$
\rho(1) = \text{id}_M, \qquad \qquad \rho(g \, h) = \rho(g)\circ \rho(h),
$$
and the map
$$
\begin{align}
\Phi: G × M &→ M\\
\Phi(g, m) &:= \rho(g)(m)
\end{align}
$$
is smooth.

Ignoring the technical issues of infinite dimensional manifolds, $\diffM$ is a Lie group, 
with multiplication given by composition, and an action is a group homomorphism.

Right actions are defined analogously, but with $\rho(g \, h) = \rho(h)\circ \rho(g)$.

***Heads up:*** By default, I'll mean a left action when saying/writing 'action', but some authors favor right actions.

---

### Examples of group actions

- Any Lie group acts trivially on any manifold: $\rho(g) =  \text{id}_M \quad \forall \ g \in G$.

- Any Lie group $G$ acts on itself by 

    - Left multiplication: $\rho(g) = L_g$, where $L_g(h) := g \, h$,
    - Right multiplication by the inverse: $\rho(g) = R_{g^{-1}}$, where $R_g(h) := h \, g$,
    - Conjugation: $\rho(g) = L_g \circ R_{g^{-1}}$.
    
   The conjugation action takes each group element to the associated inner automorphism; its linearization plays a central role in Lie group theory.
    It is trivial if $G$ is Abelian (commutative).

- For $F = \R$ or $\C$, $\ GL(n, F)$ acts on $F^n$ by matrix-vector multiplication. 


---

### Structure-preserving actions

- The orthogonal group 
$$\setdef {O(n, \R)} A {GL(n, \R)} {A^T A = \idm}$$
${}\qquad {}$ and the special orthogonal (rotation) group 
$$ SO(n, \R) = O(n, \R) \cap SL(n, \R)$$
${}\qquad {}$ act on the unit sphere $S^{n−1} \subset \Rn$. 

- The *unitary group* 
$$\setdef {U(n)} A {GL(n, \C)} {A^{\dagger} A = \idm}$$  
${}\qquad {}$ and the special unitary group $\ SU(n) = U(n) \cap SL(n, \C)$
${}\qquad {}$ act on $S^{2 n−1} \subset \C^n$.
