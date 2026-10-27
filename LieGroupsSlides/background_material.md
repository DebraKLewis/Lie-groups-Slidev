
# Appendix A: Background definitions and results for manifolds

- [Smooth maps on manifolds](immersed-and-embedded-submanifolds): diffeomorphisms, submersions, immersions, and embeddings 

- Relationships between linearizations and local behavior
    - [Inverse Function and Rank Theorems](inverse-function-theorem)
    - The [constant rank](constant-rank-level-sets) and [regular](regular-level-sets) level set theorems

- Vector fields and distributions
    - [Tangent vectors and derivations](tangent-vectors")
    - The Lie bracket of vector fields ([algebraic characterization](algebra-vector-fields-algebraic))
    - The Lie bracket of vector fields ([dynamic characterization](algebra-vector-fields-dynamic))
    - [Distributions](distributions)
    - [Integral manifolds and Frobenius' Theorem](integral-manifolds)

---
routeAlias: immersed-and-embedded-submanifolds
---

## Smooth maps on manifolds

$\varphi: M \to N$ between smooth manifolds is a *diffeomorphism* if $\varphi$ is a smooth bijection with smooth inverse.

$\varphi: M \to N$ is a *submersion* if $d_p \varphi$ is surjective for all $p \in M$.

$\varphi: M \to N$ is an *immersion* if $d_p \varphi$ is injective $\forall \, p \in M$.

An *immersed submanifold* in a manifold $N$ is a subset $M ⊂ N$ with a manifold structure such that the inclusion map $\iota: M → N$ is an immersion. 

A *smooth embedding* is an injective immersion $f : M → N$ such that $M$ is diffeomorphic to $f(M)$, where $f(M)$ has the submanifold topology described above.

Injective immersions of compact manifolds are embeddings. 

$M ⊂ N$ is a $k$-dimensional *embedded submanifold* of $N$ $\quad \Longleftrightarrow \quad$ for every $p \in M$, there exists a coordinate chart $p \in U\subset N,\varphi :U \to \R^n$, such that 
$$
\varphi(M \cap U) =  \varphi(U) \cap \{ (x_1, \ldots, x_k, 0, \ldots, 0) : x_j \in \R \}.%, j = 1, \ldots, k \}.
$$

---

#### Examples of injective immersions that aren't embeddings

Figure eight and related injective immersions of $\R$ into $\R^2$
<p align="center">
  <img alt="figure eight" src="/Images/figureEight.png" width="250" >
</p>

<Spacer />

An irrational winding on the torus, e.g. the trace of a parametrized curve $\R \to T^2 = S^1 \times S^1$ 
$$
t \mapsto \lp e^{i \, t },e^{i\, a \, t}\rp
$$
for irrational $a \in \R$, is another injective immersion that is not an embedding.

---
routeAlias: inverse-function-theorem 
---

## Relationships between linearizations and local behavior
<br/> 

### The Inverse Function Theorem

$F: U ⊂ \R^n → \R^n$ differentiable and $dF_p: \R^n → \R^n$ invertible 
$\ \ \Longrightarrow \ \ {} \newline$
$\exists$ neighborhoods $V \subset U$ of $p$ and $W \subset \R^n$ of $F(p)$ such that $F|_V: V → W$ has a differentiable inverse. 

I.e., invertibility of the linearization at a point implies local invertibiilty of the original mapping. 

### The Rank Theorem

Assume $𝑀$ and $𝑁$ are manifolds of dimension $𝑚$ and $𝑛$, $𝑝 \in 𝑀$, and $𝐹:𝑀 \to 𝑁$ is smooth.

If $d_q𝐹:𝑇𝑞𝑀→𝑇_{𝐹(𝑞)}𝑁$ has rank $𝑘$ for all $q$ in a neighborhood of $𝑝$, 
$\Longrightarrow \ \ {}$ are coordinates $(𝑥_1, \ldots ,𝑥_𝑚)$ around $𝑝$ and $(𝑣_1, \ldots,𝑣_𝑛)$ around $𝐹(𝑝)$ such that the coordinate representation of $F$ is
$$
𝐹(𝑥_1,\ldots,𝑥_𝑚)=(𝑥_1, \ldots,𝑥_𝑘,0, \ldots,0).
$$

*Proofs:* See, e.g., Theorems 5.11 and 5.13 in Lee's *An Introduction to Manifolds*. 

---
routeAlias: constant-rank-level-sets
---

### The constant rank level set theorem

Let $f : M \to N$ be a smooth map, and $c \in N$.
If $f$ has constant rank $k$ in a neighborhood of $f^{−1}(c)$, then $f^{−1}(c)$ is an embedded submanifold of $M$ of codimension $k$. 
$$
f(p) = c \qquad \Longrightarrow \qquad T_p f^{-1}(c) = \ker{d_p f}.
$$
<Spacer/>

*Proof:* See, e.g., Theorem 5.22 in Lee's *An Introduction to Manifolds*. 
<Spacer/>

*Pro tip:* In many situations, it may be convenient or intuitive to use a codomain $N$ that exactly "fits" the situation at hand, so that the rank is not only constant, but equal to the dimension of the codomain. 

The regular level set theorem (next slide) follows immediately from the constant rank level set theorem.

---
routeAlias: regular-level-sets
---

### The regular level set theorem

Let $f:M\to N$ be a smooth map between manifolds. $\ c \in N$ is a *regular value* of $f$ if 
$$
 p\in f^{-1}(c) \qquad \Longrightarrow \qquad d_p f:T_{p}M\to T_{c}N \ \text{is surjective.}
$$
<Spacer size="5px"/>

***Regular level set theorem:*** If $c \in N$ is a regular value of a smooth map $f:M\to N$, then $f^{-1}(c)$ is a closed embedded submanifold of $M$. 

If $f^{-1}(c) \neq \emptyset, \ {}$ then
$$
\dim f^{-1}(c) + \dim N = \dim M
$$
and 
$$
f(p) = c \qquad \Longrightarrow \qquad T_p f^{-1}(c) = \ker{d_p f}.
$$
<Spacer size="5px"/>

*Proof:* See, e.g., Corollary 5.24 in Lee's *An Introduction to Manifolds*. 

---
routeAlias: tangent-vectors
---

## Tangent vectors and derivations

If we define a tangent vector $v_p$ to a manifold $M$ at a point $p$ as an equivalence class of smooth curves <br/>$\gamma: (-\epsilon, \epsilon) \to M$ with the equivalence relation 
$$
\gamma \sim \tilde \gamma \qquad \Longleftrightarrow \qquad \gamma(0) = \tilde \gamma(0) \quad \text{and} \quad \gamma'(0) = \tilde \gamma'(0),
$$
we can evaluate the directional derivative of a map $f: M \to N$ in the direction of $v_p$ as
$$
v_p(f) := \dep {f(\gamma(\epsilon)) } 
$$
for some representative $\gamma$ of the equivalence class.

Alternatively, we can define a tangent vector at $p$ as a *derivation* at $p$, i.e. a linear map <br/>$D_p: \mathcal{C}^\infty(M) \to \mathcal{C}^\infty(M)$ satisfying 
$$
D_p(f \, g) = D_p(f) g(p) + f(p) D_p(g).
$$
These two characterizations are equivalent.

---
routeAlias: algebra-vector-fields-algebraic
---

## The Lie algebra $\calX(M)$ of smooth vector fields on $M$

The *Lie derivative* $\, \calL_X: \mathcal{C}^\infty(M) \to \mathcal{C}^\infty(M)$ associated to a smooth vector field $V$ is given by
$$
\calL_X f(p) = X(p)(f) \qquad \qquad \forall \ p \in M.
$$
<Spacer/>

### Algebraic description of the Lie bracket on $\calX(M)$

The Lie bracket $\ [X, Y]\ {}$ of vector fields $X$ and $Y$ is the unique vector field such that 
$$
\calL_{[X, Y]} = [\calL_X, \calL_Y].
$$
<Spacer/>

***Heads up!*** The Lie bracket of vector fields is also commonly defined with the opposite sign convention. There are sound arguments in favor of both options. 

---
routeAlias: algebra-vector-fields-dynamic
---

### Dynamics description of the Lie bracket

If $\mathcal{F}$ denotes the flow of $X$, and $\bm{t}$ is a tensor on $M$, then
$$
{\textstyle \frac {d\ }{d \epsilon}} \mathcal{F}_\epsilon^* \bm{t} = \mathcal{F}_\epsilon^*(\calL_X \bm{t}).
$$
In particular,
$$
\dep {\mathcal{F}_\epsilon^* Y} = \calL_X Y = [X, Y].
$$
<Spacer/>

The algebraic and dynamics descriptions are equivalent.
Each have their advantages!
<Spacer/>

### Naturality with respect to push-forward

If $\varphi: M \to N$ is a diffeomorphism and $X, Y \in \calX(M)$,
$$
\varphi_*[X, Y]_M = [\varphi_* X, \varphi_*Y]_N.
$$

---
routeAlias: distributions
---

## Distributions

A $k$-*dimensional distribution* ${\cal D} ⊂ TM$ on a smooth manifold $M$ is a smooth assignment of a $k$-dimensional subspace ${\cal D}_p$ of the tangent space $T_p M$ of $M$ at $p$.

More precisely, for every $p \in M, \exists \ {}$ a neighborhood $U$ of $p$ and vector fields $\ X_1, \ldots, X_k \ \in \calX(U)$ such that 
$$
\calD_m = \text{span}\{X_1(m), \ldots, X_k(m)\} \qquad \qquad \forall \ m \in U.
$$
<Spacer size="5px"/>

A vector field $X \in {\cal X}(M)$ *belongs to a distribution* $\calD$ if 
$$
X(p) ∈ \calD_p \qquad \forall \ p ∈ M.
$$
<Spacer size="5px"/>

A distribution $\calD$ is *involutive* if the subspace of $\calX(M)$ of vector fields belonging to $\calD$ 
is a Lie subalgebra of $\calX(M)$.

---

### Examples of distributions

<Spacer/>

- Involutive: If we identify the tangent space $T_p \R^n$ with $\R^n$, then any $k$-dimensional subspace $S$ of $\R^n$ determines a $k$-dimensional distribution $\calD$ on $\R^n$ with 
$$
\calD_{\xv} = S \qquad \forall \ \xv \in \R^n.
$$ 

- Involutive: $\calD$ on $\R^n\backslash \{\mathbf{0}\}$, with 
$$
\calD_\xv := \{ \vv \in \R^n : \langle \vv, \xv \rangle = 0 \}.
$$ 

- Not involutive: $\calD$ on $\R^3$, with $\ \calD_{\xv} := \text{span}\{V, W \}$, where 
$$
𝑉(𝑥,𝑦,𝑧)= \mathbf{e}_1 + y \, \mathbf{e}_3 = (1,0,𝑦) \sands  𝑊(𝑥,𝑦,𝑧)=\mathbf{e}_2 = (0,1,0).
$$ 

- Not involutive: $\calD$ on $SO(3, \R)$, with 
$$
\calD_U := \text{span}\{U \widehat {\mathbf{e}_1}, U \widehat {\mathbf{e}_2} \},
$$ 
$\quad{}$ where $\hat {\ }: \R^3 \to \mathfrak{so}(3)$, $\widehat \xv \, \yv = \xv \times \yv$.

---
routeAlias: integral-manifolds 
---

### Integral manifolds and Frobenius' Theorem

An immersed submanifold $N \subseteq M$ is an *integral manifold* of $\calD$ if 
$$
T_p N = \calD_p \qquad \forall \ p ∈ N.
$$

*Heads up!* &nbsp; Integral manifolds don't need to be embedded submanifolds.
<Spacer size="5px"/>

${\cal D}$ is *completely integrable* if $\ \forall \ p ∈ M, \ \exists \ {}$ an integral manifold of $\calD$ containing $p$.
<Spacer size="5px"/>

A connected integral manifold $N$ of $\calD$ is *maximal* if it contains any other connected integral manifold of $\calD$.
<Spacer size="5px"/>

***Frobenius' Theorem:*** 
If $\calD$ is an involutive distribution on $M$, then for every $\  p ∈ M, \ \exists !\ {}$ maximal connected integral manifold of $\calD$ containing $p$.

---

### Examples of integral manifolds

- Translations of subspaces in $\R^n$. 
Given a $k$-dimensional subspace $S$ of $\R^n$, and point $\xv \in \R^n$, 
$$
N = \{ \xv + \vv : \vv \in S \}
$$
$\qquad{}$is an integral submanifold of our first example of an involutive distribution.

- Nested spheres centered at the origin in $\R^n \backslash \{ \mathbf{0} \}$ are integral submanifolds of 
$$ \calD_\xv := \{ \vv \in \R^n : \langle \vv, \xv \rangle = 0 \}, $$
our second example of an involutive distribution.

---
routeAlias: fiber-bundles
---

### Fiber bundles

Fiber bundles generalize direct products.

Given be a connected space  $B$ with basepoint $b_0$, a surjective, continuous map $p : E → B$ is a  *fiber bundle* with *fiber* $\,F \,{}$  if for every $x ∈ B$ there is an open neighborhood $U_x ⊂ B$ and a homeomorphism
$$
Ψ_{U_x} : p^{−1}(U_x) → U_x × F
$$
such that the following diagram commutes:
$$
\eqa{
p^{-1}(U_x) & \xrightarrow{\Psi_{U_x}} \ U_x \times F \\
%p^{-1}(U_x) & \xrightarrow[\quad \cong \quad]{\quad \Psi_{U_x} \quad} & U_x \times F \\
\qquad {}_p \!\!\searrow & \qquad \swarrow_{\text{proj first factor}} \\
& \ \ \ U_x 
}
$$

$B$ is called the *base space* and $E$ is the *total space*. 
<Spacer size="5px"/>

A fiber bundle $(F, E, B)$ is *trivial* if it isomorphic to the fibration $\, B×F → B$. 

---

#### Sections and morphisms of fiber bundles

A (local) *section* $\,s : U \subseteq B → E \, {}$ of a fiber bundle $\, p : E → B\,{}$ is a continuous map satisfying
$$
p \circ s = \text{id}_B|_U.
$$
<Spacer size="5px"/>

A fiber bundle morphism $\, Φ : (F_1, E_1, B_1) → (F_2, E_2, B_2\,{}$) 
is a pair of continuous maps 
$$
φ : B_1 → B_2  \sands \tilde φ : E_1 → E_2
$$
satisfying
$$
\eqa{
E_1& \xrightarrow{\ \tilde φ\ } E_2 \\
p_1 \big \downarrow\ & \qquad \big \downarrow \, p_2 \\ 
B_1& \xrightarrow{\ φ\ } B_2
}\ \ .
$$

---

### Examples of fiber bundles

- Vector bundles, with $F$ a vector space. Vector fields are sections of vector bundles.

- Covering spaces, with $F$ the group of deck transformations. 
Lifts are sections of covering spaces. 

- The M&ouml;bius band, with $B = S^1$ and $F = [-1, 1]$.

- Complex projective spaces are the base spaces of fiber bundles.   
$E = {\mathbb C}^{n+1} - \{ 0 \}; B = {\mathbb C} P^n \,{}$ is the space of orbits of the diagonal action of $\, F = {\mathbb C} - \{0 \}\,{}$ by multiplication on $E$,
 with local section
$$
\underbrace{[z_0, ..., z_n]}_{\in\, U_0 \,\subset \,\mathbb{C}P^n} \sim \left[ 1, \frac{z_1}{z_0}, ..., \frac{z_n}{z_0} \right] \mapsto \frac {(1, \frac{z_1}{z_0}, ..., \frac{z_n}{z_0})}{\left | (1, \frac{z_1}{z_0}, ..., \frac{z_n}{z_0}) \right |}.
$$
<Spacer size="9px"/>

- $E = S^{2n + 1}, \ B = {\mathbb C} P^n, \,{}$ and $F = S^1 \simeq \{ z \in {\mathbb C} : |z| = 1 \}$. <br/>
Since ${\mathbb C} P^1 \simeq S^2$, for $n = 1$ this is the Hopf fibration.

# Appendix A': Background definitions and results for analysis

- [Compact operators on Hilbers spaces](compact-operators)

---
routeAlias: compact-operators
---

### Compact operators on Hilbert spaces

A *compact operator* on a Hilbert space $V$ is a bounded operator such that the image of a bounded set is *relatively compact*, i.e. has compact closure.

Compact operators form the closure with respect to the operator norm of the space of finite rank operators.
<Spacer size="5px"/>

Many results for linear transformations of finite dimensional vector spaces carry over 
(with some technical finesse in the proofs) to compact operators on Hilbert spaces.

For example, the ***spectral theorem***: If $T$ is a compact, self-adjoint operator on a Hilbert space $V$, then $V$ has an orthogonal eigenbasis for $T$. 
If the orthogonal complement to $\ \ker(T) \ {}$ is infinite dimensional, the eigenvalues $\lambda_n$ of $T$ can be ordered so as to satisfy 
$$
\lim_{n \to \infty} \lambda_n = 0.
$$