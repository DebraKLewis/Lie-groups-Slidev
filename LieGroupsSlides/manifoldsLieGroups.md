## Lie groups

A real/complex smooth *Lie group* is a smooth manifold $G$ with a compatible group structure: the group multiplication and inversion operations 
$$
\mu: G \times G \to G \sands \iota: G \to G
$$
are smooth/analytic maps.

### Examples

- $F^n$, where $F = \R$ or $\C$, with vector addition

- $\setdef {\R^+} x \R {x>0}$, with scalar multiplicationx

- $\setdef {S^1} z \C {|z|=1}$, with scalar multiplication

- $\setdef {GL(n, F)} A {F^{n \times n}} {\det A \neq 0}$, with matrix multiplication

- the classical matrix groups.


---

## The classical matrix groups

The classical matrix groups all preserve some geometrically significant structure(s) on $F^n$, $F = \R$ or $\C$. <br/>
That's who/what they are&mdash;they are defined by their actions.

Here "preserve" means that transforming vectors in $F^n$ by matrix-vector multiplication before plugging those vectors into the relevant structure doesn't change the output. 

We'll exploit structure preservation when working with the classical groups&mdash;and many other Lie groups!

- The *orthogonal group* preserves the Euclidean inner product: 
$$
\eqa{
O(n, \R) &= \{ A \in {GL(n, \R)} :  \langle A \, \xv, A \, \yv \rangle = \langle \xv, \yv \rangle \quad \forall \ \xv, \yv \in \R^n \} \\
&= \{ A \in {GL(n, \R)} :  A^T A = \idm \}
}
$$

- The *unitary group* preserves the Hermitian inner product:
$$\setdef {U(n)} A {GL(n, \C)} {A^\dagger A = \idm}$$ 

(list continues on next slide)

---

### The classical matrix groups (continued)
<br/>

- The *special linear group* preserves volume (area in 2D) and orientation:
$$\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}, \qquad F = \R \text{ or } \C$$

- The *rotation group* $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$

- The *special unitary group* $SU(n) = U(n) \cap SL(n, \C)\phantom{\int_\int}$

- The *symplectic groups* preserve the canonical symplectic bilinear form
$$
\omega(\xv, \yv):= \xv^\dagger J_{n} \yv,\qquad \qquad J_{n}:={\begin{bmatrix}0& \idm_{n}\\- \idm_{n}&0\end{bmatrix}}
$$
$\quad{}$ on $F^{2 n}, F = \R \, \text{or}\, \C$:

$$
\setdef{Sp(n, F)} A {GL(2 n, F)}{A^\dagger J A = J}.
$$

---

### Some non-classical matrix groups: $IUT(n, F)$ and $SUT(n, F)$ 

Invertible upper triangular matrices
$$\setdef{IUT(n, F)} A {GL(n, F)} {A \text{ upper triangular}}$$
and upper triangular matrices with unit determinant
$$
SUT(n, \R) := SL(n, F) \cap IUT(n, F)
$$

are matrix groups with the usual matrix group operations: <br/>
If $\av_1, \ldots, \av_n$ (resp. $\bv_1, \ldots, \bv_n$) are the columns of $A$ (resp. $B$), then $\, b_{(j + 1) j} = \cdots = b_{nj} = 0 \quad \Longrightarrow \quad$ 
$$
(AB)_j = A \bv_j = b_{1j} \av_1 + \cdots + b_{nj} \av_n = b_{1j} \av_1 + \cdots + b_{jj} \av_j.
$$

The determinant of an upper triangular matrix is the product of the diagonal elements.
<br/>
(Use an induction argument and a cofactor expansion.)

The diagonal elements of the product of two upper triangular matrices are the pairwise products of the corresponding diagonal elements:
$(AB)_{jj} = a_{jj} b_{jj}.$

---

#### Applications of triangular matrices

***The LU decomposition and Gaussian elimination***

Gaussian elimination without row exchanges corresponds to decomposition of a matrix into 
- an upper triangular matrix $U$ (the familiar result of the row operations) and 
- a lower triangular matrix $L$ with unit diagonal entries* (this matrix "records" the row operations). <br/>If you subtract $s$ times the $k$-th from the $j$-th row, set the $jk$-th entry of $L$ equal to $s$.

*Matrices with this structure form a Lie group.

Efficient system solution: Rewrite $A \xv = \mathbf{b}$ as $LU \xv = \mathbf{b}$; solve $L \yv = \mathbf{b}$ via forward substitution, then solve $U \xv = \yv$ via back substitution.

***The QR decomposition***

An element of $GL(n, \R)$ can be expressed as a product $QR$, with $Q \in O(n, \R)$ and $R \in IUT(n, \R)$.

$R$ captures the change in "shape" of objects determined by sets of vectors in $\R^n$.


---

## Actions

A (left) *action* of a Lie group $G$ on a manifold $M$ is a map $\ \rho: G \to \diffM \ {}$ such that
$$
\rho(1) = \text{id}_M, \qquad \qquad \rho(g \, h) = \rho(g)\circ \rho(h),
$$
and the map
$$
\eqa{
\Phi: G × M &→ M\\
\Phi(g, m) &:= \rho(g)(m)
}
$$
is smooth.

Ignoring the technical issues of infinite dimensional manifolds, $\diffM$ is a Lie group, 
with multiplication given by composition, and an action is a group homomorphism.

Right actions are defined analogously, but with $\rho(g \, h) = \rho(h)\circ \rho(g)$.

***Heads up:*** By default, I'll mean a left action when saying/writing 'action', but some authors favor right actions.

---

### Examples of group actions

- For $F = \R$ or $\C$, $\ GL(n, F)$ acts on $F^n$ by matrix-vector multiplication. 

- Any Lie group $G$ acts on itself by 

    - Left multiplication: $\rho(g) = L_g$, where $L_g(h) := g \, h$,
    - Right multiplication by the inverse: $\rho(g) = R_{g^{-1}}$, where $R_g(h) := h \, g$,
    - Inner automorphisms: $\rho(g) = L_g \circ R_{g^{-1}}$. <br/> This action is trivial if $G$ is Abelian.
    
- Linearization at the identity of the inner automorphism action determines an action of $G$ on $T_1G$. 

- Any Lie group acts trivially on any manifold: $\rho(g) =  \text{id}_M \quad \forall \ g \in G$.

---

### Structure-preserving actions

Many Lie groups arise as subgroups of a Lie group acting on a manifold $M$ with some special structure: we restrict our attention to the group elements that respect that structure. For example:

- The orthogonal group 
$$\setdef {O(n, \R)} A {GL(n, \R)} {A^T A = \idm}$$
${}\qquad {}$ and the special orthogonal (rotation) group 
$$ SO(n, \R) = O(n, \R) \cap SL(n, \R)$$
${}\qquad {}$ act on the unit sphere $S^{n−1} \subset \R^n$. 

- The *unitary group* 
$$\setdef {U(n)} A {GL(n, \C)} {A^{\dagger} A = \idm}$$  
${}\qquad {}$ and the special unitary group $\ SU(n) = U(n) \cap SL(n, \C)$
${}\qquad {}$ act on $S^{2 n−1} \subset \C^n$.

---

### Map-preserving actions form (sub)groups

Given manifolds $M$ and $N$, and a map $f: M^k \to N$, set
$$
\setdef G g {\diffM} {f(g(m_1), \ldots, g(m_k)) = f(m_1, \ldots, m_k) \quad \forall \ m_1, \ldots, m_k \in M },
$$

with multiplication given by composition: 
$$
g_1 g_2 := g_1 \circ g_2.
$$ 

- ***Identity element***. The trivial transformation $\idm(m) := m$ fixes all points in $M$, so $\idm \in G.$ 

- ***Closure under multiplication***. $g_1$ and $g_2 \in G \ \ \Longrightarrow$ 
$$
\eqa{
f((g_2 g_1)(m_1), \ldots, (g_2 g_1)(m_k)) 
&= f(g_2 (g_1(m_1)), \ldots, g_2(g_1(m_k))) \\
&= f(g_1(m_1), \ldots, g_1(m_k)) \\
&= f(m_1, \ldots, m_k).
}
$$

<Spacer size = "5px" />
Continued on next slide.

---

#### Second slide of map-preserving actions form groups 

- ***Closure under inversion***. $g \in G \ \ \Longrightarrow$ 
$$
\eqa{
f(m_1, \ldots, m_k) &= f((g g^{-1}) (m_1), \ldots, (g g^{-1}) (m_k))\\
&= f(g (g^{-1} (m_1)), \ldots, g (g^{-1} (m_k))) \\
&= f(g^{-1} (m_1), \ldots, g^{-1} (m_k)).}
$$
$\Longrightarrow \ \ G$ is a subgroup of $\diffM$.
<Spacer />

***Heads up!*** A group of map-preserving transformations isn't *a priori* a Lie group!

Lie groups must be smooth manifolds, with smooth group operations.
<Spacer size="2px" />

If the group is a <Link to="constant-rank-level-sets">constant rank level set</Link> or <Link to="regular-level-sets">regular level set</Link>, it is an embedded submanifold of its domain *and* we have nice descriptions of the tangent spaces.

We'll can use this approach to show that the classical matrix groups are Lie groups. <br/>
(More about this soon.)
