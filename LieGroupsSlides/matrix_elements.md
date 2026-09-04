---
marp: true
---

## Matrix coefficients

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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$***Recap of matrix representations (in the naive sense) of linear transformations:***

If $V$ and $W$ are finite dimensional complex vector spaces and $\phi: V \to W$ is linear, 
then any choice of bases
$$
\{ \vv_1, \ldots, \vv_n\} \ \text{ of }\ V \sands \{ \wv_1, \ldots, \wv_k\} \ \text{ of }\ W
$$
uniquely determines a matrix $\ A \in \C^{k \times n} \ {}$ such that
$$
\yv = A \xv \quad \Longrightarrow \quad \phi\lp \sum_{j = 1}^n x_j \vv_j \rp = \sum_{j = 1}^k y_j \wv_j.
$$

If $\ \{\beta_1, \ldots, \beta_k\}\ {}$ is the basis of $W^*$ dual to $\ \{ \wv_1, \ldots, \wv_k\} \ {}$, i.e. 
$$\ 
\beta_i(\wv_j) = \delta_{ij}, \ {}$$ 
then the entries of $A$ are
$$
a_{ij} = \beta_i(\phi(\vv_j)).
$$

---

Given a finite dimensional representation $V$ of a Lie group $G$, and a basis $\ \{ \vv_1, \ldots, \vv_n\} \ {}$ of $V$, the entries of the matrix representations of $\rho(g) \in GL(V)$ determine continuous functions 
$$a_{ij}: G \to \C$$
satisfying
$$
g \cdot \vv_j = \sum_{i = 1}^n a_{ij}(g) \vv_i \qquad \quad j = 1, \ldots, n.
$$ 
$~$
More generally, if $V$ is a finite-dimensional representation of $G$, any choice of linear functional $f: V \to \C$ and vector $v \in V \ {}$ determine a function 
$$\eqa{
    φ&: G \to \C \\
φ(g) &:= f(g \cdot v),
}
$$
called a *matrix coefficient on* $G$. 

---

***Claim:*** Finite dimensional representations of compact groups are unitary
$~$
*Verify:* If $G$ is compact, there is a $G$-invariant inner product $\langle \ , \ \rangle$ on $V$. 

Let $\ {\cal B} = \{ \ev_1, \ldots, \ev_n \} \ {}$ be an orthonormal basis of $V$ with respect to this inner product.

If $a_{ij}(g)$ denotes the $ij$-th entry of the matrix $\ A(g)\ {}$ of $\rho(g)$ with respect to ${\cal B}$, then
$$
a_{ij}(g) = \langle g \cdot \ev_i, \ev_j \rangle.
$$

$G$-invariance of $\langle \ \, , \ \rangle_V \quad \Longrightarrow$
$$\eqa{
a_{ij}\lp g^{-1} \rp &= \langle g^{-1} \cdot \ev_i, \ev_j \rangle_V \\
&= \langle g \cdot (g^{-1} \cdot \ev_i) , g \cdot \ev_j \rangle_V \\
&= \langle \ev_i, g \cdot \ev_j \rangle_V \\
&= \overline{\langle  g \cdot \ev_j, \ev_i \rangle_V} \\
&= \overline{a_{ji}(g)}.
}
$$

---

Hence
$$
A(g)^{-1} = A\lp g^{-1} \rp = \overline{A(g)} = A(g)^*,
$$
i.e. $A(g)$ is unitary.
$~$
***Claim:*** If $V$ and $W$ are irreducible representations of a compact group $G$, and $\phi:V \to W$ is a homomorphism, then
$$
\Phi := \int_G \rho_W(g) \circ \phi \circ \rho_V(g^{-1}) dg
$$
is trivial unless $V$ and $W$ are isomorphic, and $\ W = V \ \Longrightarrow$
$$
\Phi = \frac{ \text{trace}\ \phi}{\dim V} \text{id}_V.
$$
$~$
*Verify*: We'll show that $\Phi$ is a $G$-morphism, and then apply Schur's Lemma.

---

$$\eqa{
\rho_W(h) \circ \Phi \circ \rho_V(h^{-1}) 
&= \int_G \rho_W(h) \rho_W(g) \circ \phi \circ \rho_V(g^{-1}) \rho_V(h^{-1})  dg \\
&= \int_G \rho_W(h g) \circ \phi \circ \rho_V((hg)^{-1}) dg \\
&= \Phi,
}
$$
since the Haar measure $dg$ is left invariant and $L_h(G) = G$. 

Hence $\Phi$ is a $G$-morphism, and Schur's Lemma $\ \Longrightarrow \ \Phi\ {}$ is either trivial or an isomorphism. If $V$ and $W$ aren't isomorphic, $\ \Phi = 0$.

If $W = V$, then $\exists \ \lambda \in \C$ such that 
$$
\Phi = \lambda \, \text{id}_V,
$$ 
and hence
$$
\text{trace} \, \Phi = \text{trace} (\lambda  \, \text{id}_V) = \lambda \, \dim V .
$$

---

Since Haar measure is normalized such that ${\displaystyle \int_G dg = 1}$, and 
$$
\text{trace} \lp \psi \circ \phi \circ \psi^{-1} \rp = \text{trace} \, \phi 
$$
for all isomorphisms $\psi$,
$$\eqa{
\text{trace} \, \phi &= \text{trace} \, \phi \int_G dg \\
&= \int_G \text{trace} \,  \phi \, dg \\
&= \int_G \text{trace} \lp \rho_V(g) \circ \phi \circ \rho_V(g^{-1}) \rp dg \\
&= \text{trace} \, \Phi .
}
$$
Hence 
$$
\lambda = \frac {\text{trace} \, \phi}{\dim V}, \qquad \text{and thus} \qquad 
\Phi = \frac {\text{trace} \, \phi}{\dim V} \, \text{id}_V.
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
where $a_{\ell i}$ denotes the $\ell i$-th matrix coefficient of $\rho_V(g)$ w.r.t. ${\cal B}$ 
and $\tilde a_{jm}(g)$ denotes the $jm$-th matrix coefficient of $\rho_W(g)$ w.r.t. $\widetilde {\cal B}$.

Hence, since $V$ is unitary,
$$
\langle \wv_m, \Phi(\vv_\ell) \rangle_W = \int_G a_{i \ell }(g^{-1}) \tilde a_{mj}(g) dg
= \int_G \overline {a_{\ell i}(g)} \tilde a_{mj}(g) dg.
$$


---

We can construct a $G$-invariant $L_2$ Hermitian inner product on the space of smooth complex-valued functions on a compact Lie group $G$.
$$
\langle f_1, f_2 \rangle_{L_2} := \int_G f_1(g) \overline{f_2(g)} dg,
$$
where $dg$ is the Haar measure on $G$.
$~$
We have
$$
\langle \wv_m, \Phi(\vv_\ell) \rangle_W = \langle a_{\ell i}, \tilde a_{jm} \rangle_{L_2}.
$$

In particular, if $V$ and $W$ non-isomorphic, then $a_{\ell i}$ and $\tilde a_{mj}$ are orthogonal. 
$~$
***Claim:*** If $V$ is irreducible, then the matrix coefficients of $V$ w.r.t. ${\cal B}$ satisfy
$$
\langle a_{ij}, a_{k \ell} \rangle_{L_2} =  \frac {δ_{ik}δ_{j\ell}} {\dim V}.
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

The proof combines the representation theory that we’ve developed so far with functional analysis, particularly properties of compact operators on Hilbert spaces.

---

A *compact operator* on a Hilbert space $V$ is a bounded operator such that the image of a bounded set is *relatively compact*, i.e. has compact closure.

Compact operators form the closure with respect to the operator norm of the space of finite rank operators.
$~$
Many results for linear transformations of finite dimensional vector spaces carry over 
(with some technical finesse in the proofs) to compact operators on Hilbert spaces.

For example, the ***spectral theorem***: If $T$ is a compact, self-adjoint operator on a Hilbert space $V$, then $V$ has an orthogonal eigenbasis for $T$. 
If the orthogonal complement to $\ \ker(T) \ {}$ is infinite dimensional, the eigenvalues $\lambda_n$ of $T$ can be ordered so as to satisfy 
$$\ \lim_{n \to \infty} \lambda_n = 0.
$$
$~$
We won't cover the proof of the Peter-Weyl Theorem in this class. (See, e.g., Sternberg.)

