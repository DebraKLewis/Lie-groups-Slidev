---
marp: true
paginate: true
---

### Subrepresentations and (ir)reducible representations
$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\ev}{\mathbf{e}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\uv}{\mathbf{u}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\wv}{\mathbf{w}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calP}{{\cal P}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$ A subset $N \subseteq M$ of a manifold $M$ with a $G$ action is $G$-*invariant* if
$$
G \cdot N = \{ g \cdot p : g \in G, \ p \in N \} \subseteq N.
$$
$~$
If $V$ is a representation of $G$, a *subrepresentation of* $V$ is a $G$-invariant subspace $W \subseteq V$.
$~$
$W$ is a *proper subrepresentation of* $V$ if $W$ is $G$-invariant and $\ \dim W < \dim V$.
$~$
***Examples:*** 

If $G = GL(n, \R)\ {}$ and $\ V = \fg = \R^{n \times n}, {}$ with the adjoint action, then the space of 
scalar multiples of the identity matrix is a subrepresentation of $V$.

---

If $V$ is a representation of $G$, then
$$
\setdef {V^G} v V {G_v = G} = \{ v \in V : g \cdot v = v \quad \forall \ g \in G \} 
$$
is a subrepresentation of $V$ with trivial $G$ action.
$~$
If $f:V\rightarrow W$ is a $G$-equivariant linear map, then $\ker f$ is a subrepresentation of $V$, and $\text{range}\, f$ is a subrepresentation of $W$.
$~$
A representation is *reducible* if it has a nontrivial proper subrepresentation. 

A non-zero representation is *irreducible (simple)* if it isn't reducible.

A representation is *completely reducible (semisimple)* if it is isomorphic to a direct sum of irreducible representations.

---

***Example: Reducible, but not completely reducible***

$G = (\R, +)$, acting on $\R^2$ by
$$
\rho(x) = \begin{bmatrix} 1 & x \\ 0 & 1 \end{bmatrix}.
$$
$~$
$\text{span}\{\ev_1\}$ is a subrepresentation with no complementary subrepresentation, since $\ev_1$ is an eigenvector of $\rho(x)$, and $\rho(x)$ is not diagonalizable.
$~$
More generally, $G = (\R, +)$ and $V = \C^n$, $n > 1$. 
$~$
$\R$-modules with $V = \C^n$ correspond to elements of $\C^{n \times n}$, with
$$
t \mapsto t \, A.
$$
$~$

---

Every $A \in \C^{n \times n}$ has an eigenvector $\vv$, so the above modules and representations have a one-dimensional subrepresentation 
$$
W = \text{span}(\vv).
$$ 
$~$
The module and representation determined by a matrix $A$ are completely reducible $\ \Longleftrightarrow \ A$ is diagonalizable.
$~$
Multidimensional subrepresentations correspond to the generalized eigenspaces of eigenvalues of $A$ with algebraic multiplicity greater than their geometric multiplicity.
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$
$~$
$~$
$~$
$~$

---

### $\fg$-modules, AKA representations of Lie algebras

A $\fg$-*module*, or *representation of $\fg$*, is a vector space $V$ with an associated Lie algebra homomorphism $\ \rho: \fg \to \fg {\mathfrak l}(V), \ {}$ i.e.
$$
\rho([\xi, \eta]) = [\rho(\xi), \rho(\eta)] = \rho(\xi) \rho(\eta) - \rho(\eta)\rho(\xi) .\phantom{X^\int}
$$
$~$
The adjectives reducible, irreducible, and completely irreducible apply to modules with subrepresentation replaced by submodule.
$~$
***Example:*** $\fg$ is a $\fg$ module, with algebra homomorphism $\ \rho(\xi) = \text{ad}_\xi, \ {}$ i.e. 
$$\ \rho(\xi)(\eta) = [\xi, \eta].$$

An ideal $\fh$ of $\fg$ is a submodule of $\fg$.


---

### $G$-morphisms, equivariance, and invariance

If $G$ acts on manifolds $M$ and $N$, a map $\phi: M \to N$ is *equivariant* if
$$
\phi(g \cdot p) = g \cdot \phi(p) \qquad \forall g \in G, p \in M.
$$

$\phi: M \to N$ is *invariant* if it is equivariant w.r.t. the trivial action on $N$, i.e.
$$
\phi(g \cdot p) = \phi(p) \qquad \forall g \in G, p \in M.
$$
$~$
If $V$ and $W$ are representations of $G$, then a $G$-equivariant homomorphism $\phi: V \to W$ is a $G$-*morphism (intertwining operator)*.

Intertwining operators on $\fg$-modules are defined analogously.
$~$
$~$
$~$

---

## Schur's Lemma

Let $V$ and $W$ be irreducible complex representations of $G$.
- If $\phi: V \to W$ is a $G$-morphism, then $\phi$ is either trivial or an isomorphism.
- If $\phi, \psi: V \to W$ are both $G$-morphisms and $\psi$ is nontrivial, then 
$$
\exists \ \lambda \in \C \quad \text{such that} \quad \phi = \lambda \, \psi.
$$
$~$
*Verify:*  Equivariance of $\phi \quad \Longrightarrow$
$$
g \cdot \phi(v) = \phi(g \cdot v) \in \phi(V) \qquad \forall \ g \in G, v \in V,
$$
so $\phi(V)$ is $G$-invariant, and hence a subrepresentation of $W$.
$~$
$\ker \phi$ is $G$-invariant, so $\ \ker \phi\ {}$ is a subrepresentation of $V$. 

---

Irreducibility of $V$ implies that 
$$
\ker \phi = \{0\} \quad \text{or} \ V. \phantom{X_\int}
$$

If $\phi$ is nontrivial, $\phi(V) \neq \{0\}, \ {}$ so irreducibility of $W \ \Longrightarrow \ \phi(V) = W$, 
and hence $\phi$ is an isomorphism.
$~$
If $\psi$ is nontrivial, and hence $\psi$ is an isomorphism, we can define the $G$-morphism.
$$
\Phi:= \psi^{-1} \circ \phi: V \to V.
$$
$~$
$\Phi$ has an eigenvalue $\lambda$ and associated eigenvector $v$.
$$
V_\lambda := \ker (\Phi - \lambda \, \text{id}_V) \phantom{X_\int}
$$
is $G$-invariant and nontrivial, and hence must equal $V$, since $V$ is irreducible. 

---

Hence
$$
\phi - \lambda \, \psi = \psi \circ (\Phi - \lambda \, \text{id}_V) = 0.
$$
$~$
*Corollary:* If $V$ is irreducible, then 
$$
\text{Hom}_G(V, V) \approx \C.
$$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---

### Unitary representations

$V$ is a *unitary representation* of $G$ if 
- $V$ has an inner product $\ \langle \ , \ \rangle, \ {}$ and
- $\rho(g)$ is a unitary map w.r.t. that inner product $\forall \ g \in G$.

$~$
**Claim:** If $V$ is unitary and $\ \text{Hom}_G(V, V) \approx \C, \ {}$ then $V$ is irreducible.
$~$
*Verify:* Let $W$ be a proper subrepresentation of $V$, and let $\ P: V \to W \ {}$ denote orthogonal projection onto $W$, and
$$
W^\perp = \ker \, P,
$$
the orthogonal complement of $W$. 

---

If $w \in W, \ u \in W^\perp, \ {}$ and $\ g \in G, \ {}$ then 
$$
\langle w, g \cdot u \rangle = \langle g^{-1} \cdot w, g^{-1} \cdot(g \cdot u) \rangle = \langle g^{-1} \cdot w, u \rangle = 0.
$$
Hence $W^\perp$ is a subrepresentation. 
$~$
Given $v \in V, \ \exists! \ w \in W, u \in W^\perp\ {}$ such that $\ v = w + u$.

$$\eqa{
P(g \cdot v) &= P(g \cdot w + g \cdot u )\\
&= P(g \cdot w) + P(g \cdot u)\\
&= g \cdot w \\
&= g \cdot P(v)   
} 
$$
$\Longrightarrow \ P$ is $G$-equivariant.
$~$
If $W \neq \{0\}, \ P \neq 0, \ {}$ so Schur's Lemma implies $\exists \ \lambda \in \C \ {}$ such that $\ P = \lambda \, \text{id}_V$.

---

$$\eqa{
P \ \text{projection}\ &\Longrightarrow \ P^2 = P \\
&\Longrightarrow \ \lambda^2 = \lambda \\
&\Longrightarrow \ \lambda = 1\\ 
&\Longrightarrow \ P = \text{id}_V \\ 
&\Longrightarrow \ W = V.
}
$$

Hence $V$ is irreducible.
$~$
$~$
$~$
$~$
$~$
$~$

---

**Claim:** If $V$ is irreducible and $\ h \in Z(G),\ {}$ $\ \exists \ \lambda \in \C \ {}$ such that
$$
\rho(h) = \lambda \, \text{id}_V .
$$

*Verify:*
$$
h \in \setdef {Z(G)} h G {L_h \circ R_{h^{-1}} = \text{id}_G}
$$
$\Longrightarrow$
$$\eqa{
\rho(h) \circ \rho(g) &= \rho(h g)\\ 
&= \rho(g h) \\
&= \rho(g) \circ \rho(h)  
}
$$
for all $\ g \in G, \ {}$ so $\rho(h)$ is a $G$-morphism.

Hence the corollary to Schur's Lemma, $\ \text{Hom}_G(V, V) \approx \C\ {}$ if $V$ is irreducible, 
implies $\rho(h)$ is a rescaling.


---

**Corollary:** Any irreducible representation $V$ of an Abelian group $G$ is one-dimensional.
$~$

*Verify:* $G$ is Abelian $\ \Longleftrightarrow \ Z(G) = G$, so $\ \exists \ {}$ function $\ \lambda: G \to \C\ {}$ such that
$$
\rho(g) = \lambda(g) \, \text{id}_V
$$
for all $\ g \in G$.

Hence every subspace of $V$ is a subrepresentation of $V$.
$~$
Irreducibility of $V \ \Longrightarrow \ V$ is one-dimensional.
$~$
$~$
$~$
$~$
$~$

---

### Matrix elements

***Reminder: matrix representations (in the naive sense) of linear transformations:***

If $V$ and $W$ are finite dimensional complex vector spaces and $\phi: V \to W$ is linear, 
then any choice of bases
$$
\{ \vv_1, \ldots, \vv_n\} \ \text{ of }\ V \sands \{ \wv_1, \ldots, \wv_k\} \ \text{ of }\ W
$$
uniquely determines a matrix $\ A \in \C^{k \times n} \ {}$ such that
$$
\textstyle \yv = A \xv \quad \Longleftrightarrow \quad \phi\lp \sum_{j = 1}^n x_j \vv_j \rp = \sum_{j = 1}^k y_j \wv_j.\phantom{\int_\int}
$$

If $\ \{\beta_1, \ldots, \beta_k\}\ {}$ is the basis of $W^*$ dual to $\ \{ \wv_1, \ldots, \wv_k\} \ {}$, i.e. $\  \beta_i(\wv_j) = \delta_{ij}, \ {}$ 
the entries of $A$ are
$$
a_{ij} = \beta_i(\phi(\vv_j)).
$$

---

Given a finite dimensional representation $V$ of $G$, and a basis $\ \{ \vv_1, \ldots, \vv_n\} \ {}$ of $V$, the entries of the matrix representations of $\rho(g) \in GL(V)$ determine continuous functions 
$$a_{ij}: G \to \C$$
satisfying
$$
g \cdot \vv_j = \sum_{i = 1}^n a_{ij}(g) \vv_i \qquad \quad j = 1, \ldots, n.
$$ 

More generally, if $V$ is a finite-dimensional representation of $G$, any choice of linear functional $f: V \to \C$ and vector $v \in V \ {}$ determine a function 
$$\eqa{
    φ&: G \to \C \\
φ(g) &:= f(g \cdot v),
}
$$
called a *matrix coefficient on* $G$. 

---

*Recall:* We can average over the action of a compact group $G$ using the Haar measure.
$~$

***Claim:*** Finite dimensional representations of compact groups are unitary.
$~$
*Verify:* $G$ compact $\ \Longrightarrow\ {}$there is a $G$-invariant inner product $\langle \ , \ \rangle$ on $V$.

(Given some inner product $\langle \ , \rangle_V$ on $V$, the inner product
$$
\langle v, w \rangle := \int_G \langle g \cdot v, g \cdot w \rangle_V dg
$$
is $G$-invariant.)
$~$
Let $\ {\cal B} = \{ \ev_1, \ldots, \ev_n \} \ {}$ be an orthonormal basis of $V$ with respect to $\langle \ , \ \rangle$.
$~$

---

The $ij$-th entry $a_{ij}(g)$ of the matrix $\ A(g)\ {}$ of $\rho(g)$ with respect to ${\cal B}$ is
$$
a_{ij}(g) = \langle g \cdot \ev_i, \ev_j \rangle.
$$

$G$-invariance of $\langle \ \, , \ \rangle \quad \Longrightarrow$
$$\eqa{
a_{ij}\lp g^{-1} \rp &= \langle g^{-1} \cdot \ev_i, \ev_j \rangle \\
&= \langle g \cdot (g^{-1} \cdot \ev_i) , g \cdot \ev_j \rangle \\
&= \langle \ev_i, g \cdot \ev_j \rangle \\
&= \overline{\langle  g \cdot \ev_j, \ev_i \rangle} \\
&= \overline{a_{ji}(g)}.
}
$$

Hence
$$
A(g)^{-1} = A\lp g^{-1} \rp = \overline{A(g)} = A(g)^*,
$$
i.e. $A(g)$ is unitary.
$~$

---

***Claim:*** If $V$ and $W$ are irreducible representations of a compact group $G$, and 
$\phi:V \to W$ is a homomorphism, then the average
$$
\Phi := \int_G \rho_W(g) \circ \phi \circ \rho_V(g^{-1}) dg
$$
is trivial unless $V$ and $W$ are isomorphic, and $\ W = V \ \Longrightarrow$
$$
\Phi = \frac{ \text{trace}\ \phi}{\dim V} \text{id}_V.
$$
*Verify*: 
$$\eqa{
\rho_W(h) \circ \Phi \circ \rho_V(h^{-1}) 
&= \int_G \rho_W(h) \rho_W(g) \circ \phi \circ \rho_V(g^{-1}) \rho_V(h^{-1})  dg \\
&= \int_G \rho_W(h g) \circ \phi \circ \rho_V((hg)^{-1}) dg \\
&= \Phi,
}
$$

---

since the Haar measure $dg$ is left invariant and $L_h(G) = G$. 

Hence $\Phi$ is a $G$-morphism, and the first part of Schur's Lemma $\ \Longrightarrow \ \Phi\ {}$ is either trivial or 
an isomorphism. 
$~$
If $W = V$, then the second part of Schur's Lemma $\ \Longrightarrow \ \exists \ \lambda \in \C$ such that 
$$
\Phi = \lambda \, \text{id}_V,
$$ 
and hence
$$
\text{trace} \, \Phi = \text{trace} (\lambda  \, \text{id}_V) = \lambda \, \dim V .
$$
$~$
Since Haar measure is normalized such that ${\displaystyle \int_G dg = 1}$, and 
$$
\text{trace} \lp \psi \circ \phi \circ \psi^{-1} \rp = \text{trace} \, \phi \qquad \quad \forall \ \ \text{isomorphisms} \ \ \psi,
$$

---

$$\eqa{
\text{trace} \, \Phi 
&= \int_G \text{trace} \lp \rho_V(g) \circ \phi \circ \rho_V(g^{-1}) \rp dg \\
&= \int_G \text{trace} \,  \phi \, dg \\
&= \text{trace} \, \phi \int_G dg \\
&= \text{trace} \, \phi .
}
$$
Hence 
$$
\lambda = \frac {\text{trace} \, \phi}{\dim V},
$$
and thus
$$\Phi = \frac {\text{trace} \, \phi}{\dim V} \, \text{id}_V.
$$

---

Given orthonormal bases ${\cal B} = \{ \vv_1, \ldots, \vv_n \} \ {}$ of $V$ and $\widetilde {\cal B}= \{ \wv_1, \ldots, \wv_k \} \ {}$ of $W$, 
fix indices $i$ and $j$, and set 
$$
\phi(\uv) :=  \langle \uv, \vv_i \rangle_V \wv_j. 
$$
$~$
For any $\ 1 \leq \ell \leq n\ {}$ and $\ 1 \leq m \leq k$,
$$\eqa{
\langle \wv_m, g \cdot (\phi(g^{-1} \cdot \vv_\ell)) \rangle_W 
&= \langle \wv_m, \langle g^{-1} \cdot \vv_\ell, \vv_i \rangle_V g \cdot \wv_j \rangle_W \\
&= \langle g^{-1} \cdot \vv_\ell, \vv_i \rangle_V  \ \langle g \cdot \wv_j, \wv_m \rangle_W \\
&= a_{i\ell}(g^{-1}) \tilde a_{mj}(g),
}
$$
where 
- $a_{\ell i}$ denotes the $\ell i$-th matrix coefficient of $\rho_V(g)$ w.r.t. ${\cal B}$ 
- $\tilde a_{jm}(g)$ denotes the $jm$-th matrix coefficient of $\rho_W(g)$ w.r.t. $\widetilde {\cal B}$.

--- 

Hence, since $V$ is unitary,
$$\eqa{
\langle \wv_m, \Phi(\vv_\ell) \rangle_W &= \int_G a_{i \ell }(g^{-1}) \tilde a_{mj}(g) dg\\
&= \int_G \overline {a_{\ell i}(g)} \tilde a_{mj}(g) dg.}
$$
$~$
We can construct a $G$-invariant $L_2$ Hermitian inner product on the space of smooth complex-valued functions on a compact Lie group $G$.
$$
\langle f_1, f_2 \rangle_{L_2} := \int_G f_1(g) \overline{f_2(g)} dg,
$$
where $dg$ is the Haar measure on $G$. 

$$
\langle \wv_m, \Phi(\vv_\ell) \rangle_W = \langle a_{\ell i}, \tilde a_{jm} \rangle_{L_2}.
$$

---

In particular, if $V$ and $W$ non-isomorphic, then $a_{\ell i}$ and $\tilde a_{mj}$ are orthogonal. 
$~$

***Claim:*** If $V$ is irreducible, then the matrix coefficients of $V$ w.r.t. ${\cal B}$ satisfy
$$
\langle a_{ij}, a_{k \ell} \rangle_{L_2} =  \frac {δ_{ik}δ_{j\ell}} {\dim V}.
$$
$~$
*Verify.* Let $E_{ik} : V → V$ denote the $k$i-th matrix unit, i.e.
$$
E_{ik}(\vv_j) = \delta_{jk} \vv_i,
$$
and apply the previous result to obtain
$$ 
\sum_{j, \ell} E_{jl} \int_G  ρ^V_{\ell i}(g)\overline{ρ^V_{jk}(g)} dg = \frac {\text{trace} \ E_{ik}}{\dim V} \, \text{id}_V
= \frac {\delta_{ik}}{\dim V} \, \text{id}_V.
$$

---

### Regular representations and functions

The action of $G$ on $L_2(G)\ {}$ by 
$$
(g \cdot f)(h) = f(g^{-1} h) 
$$
is called the *regular representation*.
$~$
A *representative function* $f \in L_2(G)\ {}$ is a uniformly continuous function such that the
subspace 
$$
\text{span} (G\cdot f) = \text{span} \{ g \cdot f : g \in G \}
$$
is finite-dimensional.
$~$
***Claim*** *(without proof here)*: Any representative function is a linear combination of matrix elements of a finite dimensional representation.

---


### The Peter-Weyl Theorem

If $G$ is a compact Lie group, then
1. The representative functions are dense in $L_2(G)$.
2. $L_2(G)$ decomposes into a Hilbert space direct sum of irreducible representations of $G$, each of which is finite dimensional.
3. Every irreducible representation of $G$ is finite dimensional.
4. Each irreducible representation of $G$ occurs in $L_2(G)$ with multiplicity equal to its dimension.
5. Any unitary representation of $G$ on a separable Hilbert space decomposes into a Hilbert space direct sum of (finite dimensional} irreducible representations.
$~$

---

We won't cover the proof of the Peter-Weyl Theorem in this class. (See, e.g., Sternberg.)
$~$
The proof combines the representation theory that we’ve developed so far with functional analysis, particularly properties of compact operators on Hilbert spaces.
$~$
A *compact operator* on a Hilbert space $V$ is a bounded operator such that the image of a bounded set is *relatively compact*, i.e. has compact closure.
$~$

Compact operators form the closure with respect to the operator norm of the space of finite rank operators.
$~$
$~$
$~$
$~$

---

Many results for linear transformations of finite dimensional vector spaces carry over 
(with some technical finesse in the proofs) to compact operators on Hilbert spaces.

$~$
For example, the ***spectral theorem***: If $T$ is a compact, self-adjoint operator on a Hilbert space $V$, then $V$ has an orthogonal eigenbasis for $T$. 
If the orthogonal complement to $\ \ker(T) \ {}$ is infinite dimensional, the eigenvalues $\lambda_n$ of $T$ can be ordered so as to satisfy 
$$\ \lim_{n \to \infty} \lambda_n = 0.
$$
$~$
$~$
$~$
$~$
$~$
$~$
$~$


