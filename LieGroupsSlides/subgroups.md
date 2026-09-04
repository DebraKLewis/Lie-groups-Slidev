---
marp: true
---

## Reminder: Immersed and embedded submanifolds

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\half}{{\textstyle {1 \over 2}}}
\newcommand{\dep}[1]{{\textstyle {d \ \over d \epsilon}} \left . #1 \right |_{\epsilon = 0}}
f : M → N$ is an *immersion* $\quad \Longleftrightarrow \quad d_p f\ {}$ is injective for all $p \in M$.
$~$
An *immersed submanifold* in a manifold $N$ is a subset $M ⊂ N$ with a manifold structure such that the inclusion map $\iota: M → N$ is an immersion. 
$~$
$M ⊂ N$ is a $k$-dimensional *embedded submanifold* of $N$ $\quad \Longleftrightarrow \quad$ for every $p \in M$, there exists a coordinate chart $p \in U\subset N,\varphi :U \to \Rn$, such that 
$$
\varphi(M \cap U) =  \varphi(U) \cap \{ (x_1, \ldots, x_k, 0, \ldots, 0) : x_j \in \R \}.%, j = 1, \ldots, k \}.
$$
$~$
$\{ (M \cap U,\varphi \vert_{M\cap U}) \}$  form an atlas for the differential structure on $M$.
$~$
A *smooth embedding* is an injective immersion $f : M → N$ such that $M$ is diffeomorphic to $f(M)$, where $f(M)$ has the submanifold topology described above.

---

Injective immersions of compact manifolds are embeddings. 
$~$
***Examples of injective immersions that aren't embeddings***

Figure eight and related injective immersions of $\R$ into $\R^2$
![blank space h:200](Images/blankSpace.png) ![blank space h:200](Images/blankSpace.png)![blank space h:200](Images/blankSpace.png)![figure eight h:200](Images/figureEight.png)
$~$
An irrational winding on the torus, e.g. the trace of a parametrized curve $\R \to T^2 = S^1 \times S^1$ 
$$
t \mapsto \lp e^{i \, t },e^{i\, a \, t}\rp
$$
for irrational $a \in \R$, is another injective immersion that is not an embedding.

---

## Lie subgroups and closed Lie subgroups

A *Lie subgroup* $H$ of a Lie group $G$ is 
- a subgroup of $G$, and
- an immersed submanifold of $G$.

A *closed Lie subgroup* $H$ of a Lie group $G$ is a Lie subgroup of $G$ that is an embedded submanifold of $G$.

***Example/nonexample:***
An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, of $T^2$.
$~$
Any closed Lie subgroup is closed in $G$.

Any closed subgroup of a Lie group is a closed real Lie subgroup.
(Proof after we've developed more machinery.)

---


## Classical matrix groups as subgroups of $GL(n, F)$

$\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\half}{{\textstyle {1 \over 2}}}
\newcommand{\dep}[1]{{\textstyle {d \ \over d \epsilon}} \left . #1 \right |_{\epsilon = 0}}
$Many classical matrix groups are subgroups of $GL(n, \R)$ or $GL(n, \C)$ determined by constraints on the group action involving preservation of 
- a bilinear form on $\Rn$ or $\C^n$, and/or
- area or volume.

***Reminder:*** A scalar-valued function Φ : V × V → F, is a *bilinear form* on a vector space $V$ over a field $F$ if it is linear in each variable.

### Examples

- The *orthogonal group* $\setdef {O(n, \R)} A {GL(n, \R)} {A^T A = \idm}$ 
preserves the Euclidean inner product: 
$$
A \in O(n, \R)  \quad \Longleftrightarrow \quad (A \, \xv) \cdot (A \, \yv) = \xv \cdot \yv \quad \forall \ \xv, \yv \in \R^n.
$$

---

- The unitary group $U(n)$ preserves the Hermitian inner product.

- The *special linear group* 
$$\setdef {SL(n, F)} A {GL(n, F)} {\det A = 1}, \qquad F = \R \text{ or } \C,$$
${}\qquad{}$preserves volume (area in 2D) and orientation. 

- The *rotation group* $\ SO(n, \R) = O(n, \R) \cap SL(n, \R)$.

- The *special unitary group* $SU(n) = U(n) \cap SL(n, \C)$.

$~$
These examples, and others, can be shown to be closed Lie subgroups of $GL(n, F)$ by showing that they are level sets of regular values of appropriate maps. 
$~$
$~$

---

## Regular level sets

Let $f:X\to Y$ be a smooth map between manifolds. $\ y \in Y$ is a *regular value* of $f$ if 
$$
 x\in f^{-1}(y) \qquad \Longrightarrow \qquad d_x f:T_{x}X\to T_{y}Y \ \text{is surjective.}
$$
$~$
If $y \in Y$ is a regular value of a smooth map $f:X\to Y$, then $f^{-1}(y)$ is a (smooth) closed embedded submanifold of $X$. 

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
To apply the level set theorem, we need to show that $d_A \fv$ is surjective if $A \in O(n, \R)$.
$$
\begin{align}
\fv(A + \epsilon \, B) &= (A + \epsilon \, B)^T (A + \epsilon \, B) \\
&= A^T A + \epsilon ( A^T B + B^T A) + \epsilon^2  B^T B 
\end{align}
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
\begin{align}
T_A O(n, \R) &= d_\idm L_A (\{\text{skew-symmetric $n \times n$ matrices}\}) \\
&= d_\idm L_A(T_\idm O(n, \R)).
\end{align}
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

---

---

---




