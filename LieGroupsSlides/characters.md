---
marp: true
paginate: true
---

### Digression: Extending the proof of Schur's Lemma to isomorphic irreducible representations $V$ and $W$

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\cv}{\mathbf{c}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\uv}{\mathbf{u}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\wv}{\mathbf{w}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$The proof of Schur's Lemma in Kirillov&mdash;used in class&mdash;only covers the cases $W = V$ and $W \not \approx V$.
$~$
The proof of Schur's lemma in Terry Tao's blog post [The Peter-Weyl theorem, and non-abelian Fourier analysis on compact groups](https://terrytao.wordpress.com/2011/01/23/the-peter-weyl-theorem-and-non-abelian-fourier-analysis-on-compact-groups/) covers isomorphic irreducible representations.
$~$
Let $\ \phi \in \text{Hom}_G(V, W), \ {}$ where $V$ and $W$ are irreducible unitary $G$-representations.
$~$
The adjoint map $\ \phi^*: W \rightarrow V\ {}$  is also equivariant, as are the compositions
$$
\phi^* \circ \phi: V \rightarrow V \sands 
\phi \circ \phi^*: W \rightarrow W.
$$

---

'Our' version of Schur's Lemma $\ \Longrightarrow \ \exists \ \lambda, \tilde \lambda \in \C\ {}$ such that
$$
\phi^* \circ \phi = \lambda \, \text{id}_V \sands
\phi \circ \phi^* = \tilde \lambda \, \text{id}_W.
$$
$~$
$\Longrightarrow \ \phi$ must be a scalar multiple of some isomorphism between $V$ and $W$.
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---

### Recap from Tuesday

Given orthonormal bases ${\cal B} = \{ \vv_1, \ldots, \vv_n \} \ {}$ of $V$ and $\widetilde {\cal B}= \{ \wv_1, \ldots, \wv_k \} \ {}$ of $W$, fix indices $i$ and $j$, and set 
$$
\phi(\uv) :=  \langle \uv, \vv_i \rangle_V \wv_j. 
$$

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

In particular, if $V$ and $W$ aren't isomorphic, then $a_{\ell i}$ and $\tilde a_{mj}$ are orthogonal. 
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

Given a representation $V$ of a compact Lie group $G$, we can define a map $\ \varphi: V^∗⊗V →C^∞(G,\C)\ {}$ by
$$
\varphi(\beta ⊗ v)(g) := \beta(g \cdot v) \qquad \quad \forall \ g \in G.
$$
$\varphi(\beta ⊗ v)$ is called a matrix coefficient.
$~$
Given an orthonormal basis w.r.t. the $G$-invariant inner product on $V$, we can define an inner product on $V^*$, and one on $V^* \otimes V$. 

$$\eqa{
\langle \varphi(\beta ⊗ v), \varphi(\tilde \beta⊗\tilde v) \rangle_{L_2(G)} &= 
\langle \beta ⊗ v, \tilde \beta ⊗ \tilde v \rangle_{V^* ⊗ V}\\
&= \frac {\langle v, \tilde v \rangle_V \langle \beta , \tilde \beta \rangle_{V^*}} {\dim \ V}.
}
$$

---

We now consider the relationships between actions on $C^∞(G,\C)\ {}$ and on $V^∗ ⊗ V$.
$~$
The left and right actions of $G$ on $C^∞(G,\C), \ {}$ are
$$
L_g(f)(h) = f(g^{−1}h) \sands R_g(f)(h) = f(hg)
$$
There are two commuting $G$ actions on $V^∗ ⊗ V$, one on each factor:
$$
\rho_1(g)(\beta ⊗ v) =  \lp \lp \rho(g)^{-1} \rp^*\beta \rp ⊗ v)  
\sands
\rho_2(g)(\beta ⊗ v) = \beta ⊗ (g \cdot v).
$$
$~$
***Claim:***  $\varphi$ is a $G$-bimodule morphism:
$$
\varphi((g \cdot \beta) ⊗ v) = L_g(\varphi(\beta ⊗ v))
\sands
\varphi(\beta ⊗ (g \cdot v)) = R_g(\varphi(\beta ⊗ v)),
$$

---

*Verify:*
$$\eqa{
L_g(\varphi(\beta ⊗v))(h) &=  \varphi(\beta ⊗v)(g^{−1}h) \\
&= \beta((g^{−1} h) \cdot v ) \\
&= \beta(g^{−1} \cdot (h \cdot v )) \\
&= \varphi(\rho_1(g)(\beta ⊗ v))(h)
}
$$
and

$$\eqa{
R_g(\varphi(\beta ⊗v))(h) & = \varphi(\beta ⊗v)(hg) \\
&= \beta((hg) \cdot v) \\
& = \beta(h \cdot (g \cdot v))  \\
& =\varphi(\rho_2(g)(\beta ⊗ v))(h) .
}
$$
$\varphi$ can be extended to direct sums of irreducible representations. 

If the representations are non-isomorphic, the cross terms are trivial. 

---

## Characters of representations

Let 
$$
(L_2(G))^G : = \{ f \in L_2(G) : f \circ L_g = f \circ R_g  \quad \forall \ g \in G \}.
$$
$~$
Equivalently, $f \circ (L_g \circ R_{g^{-1}}) = f \quad \forall \ g \in G$.
$~$
A *class function* is a continuous function in $(L_2(G))^G$.

$~$
The *character* $χ_V: G \to \C$ of a finite dimensional representation $V$ of $G$ is given by
$$
χ_V(g) := \text{trace} \ ρ_V(g).
%= \textstyle{\sum_j} a_{jj}(g), 
$$
$~$

---

If $\{ v_1, \ldots, v_n \}$ is an orthonormal basis of $V$ w.r.t. a $G$-invarariant inner product on $V$ 
and $\{ \beta_1, \ldots, \beta_n \}\ {}$ is the dual basis, then 
$$
χ_V(g) = \textstyle{\sum_j} \phi_{jj}(g) = \textstyle{\sum_j} \beta_j(g \cdot v_j).
$$

$~$
$χ_V$ is a class function, since $\rho_V$ is continuous and
$$\eqa{
\text{trace} \, \rho_V(g h g^{-1}) 
&= \text{trace} \lp \rho_V(g) \rho_V(h) \rho_V(g)^{-1} \rp \\
&= \text{trace} \, \rho_V(h).
}
$$
$~$
$~$
$~$
$~$
$~$

---

### Familiar example: $G = S^1$.

*Recap:* The irreducible representations of the Abelian group $S^1$ are one dimensional, and the isomorphism classes of irreducible representations are indexed by $\Z$. 
$~$

If we identify the vector spaces of these representations with $\C$, then 
$$
\rho_j(z)(v) = z^j v \qquad \Longrightarrow \qquad
\chi_{\rho_j}(z) = \text{trace} \ \rho_j(z) = z^j
$$
for all $z \in S^1$.
$~$

These characters are orthonormal:
$$
\langle \chi_{\rho_k}, \chi_{\rho_j} \rangle_{L_2(S^1)}
= \smallfrac 1 \pi \int_0^{2 \pi} e^{i k \theta} \overline{e^{i j \theta}} d \theta
= \smallfrac 1 \pi \int_0^{2 \pi} e^{i (k - j) \theta} d \theta
= \delta_{jk}.
$$


---

### Some elementary properties of characters
1. The trivial representation $V = \C$ has $\ χ_V = 1$. 
2. $χ_{V⊕W} =χ_V +χ_W$.
3. $χ_{V⊗W} = χ_V \, χ_W$.
4. $χ_{V^*} = \overline{χ_V}$.

$~$Properties 3 and 4 imply that
$$\eqa{
χ_{\text{Hom}(V, W)} &=  χ_{V^*⊗W } \\
&= χ_{V^*} \, χ_W \\
&=\overline{\chi_V}\, \chi_W.
}
$$

Given a representation $V$ of $G$, define
$$ 
V^G := \{ v \in V : g \cdot v = v  \quad \forall \ g \in G \}.
%\{ v \in V : G_v = G \} = 
$$ 


---

***Claim:*** The endomorphism
$$
T(v) := \int_G g \cdot v \, dg,
$$
i.e. the average over the orbit $G \cdot v$, is a projection onto $V^G$.

*Verify:*  Left invariance of the Haar measure implies that for any $h \in G$,
$$\eqa{
h \cdot T(v) &= \int_Gh \cdot (g \cdot v) dg \\
&= \int_G(h g) \cdot v \, dg \\
&= T(v),
}
$$
$\Longrightarrow \quad T(V) \subseteq V^G$. 

---

$$
\int_G dg = 1 \quad \Longrightarrow \quad T|_{V^G} = \text{id}_{V^G},
$$
so $T$ is a projection.
$~$
It follows that 
$$\eqa{
    \text{dim}_{\C} V^G &= \text{trace} \ T \\
   &= \text{trace} \ \int_G \rho(g) dg  \\
   &= \int_G \text{trace} \,\rho(g) dg  \\
   &= \int_G \chi_V(g) dg. 
}
$$
$~$

---

$$
\text{Hom}_G(V, W) = (\text{Hom}(V, W))^G 
$$ 
is the space of equivariant homomorphisms between representations $V$ and $W$ of $G$.

$\chi_{\text{Hom}(V, W)} = \overline{\chi_V} \chi_W \ {}$ and the previous formula imply that 
$$\eqa{
\text{dim}_{\C} \text{Hom}_G(V, W) 
&= \int_G \overline{\chi_V} (g)\chi_W(g) dg \\
&= \int_G \langle {\chi_V}, \chi_W \rangle_{L_2(G)}.
}
$$

Schur's Lemma implies that 
- $V$ irreducible $\quad \Longrightarrow \quad \text{Hom}_G(V, V) \approx \C \quad \Longrightarrow   \quad |\chi_V|_{L_2(G)} = 1$
- $V$ and $W$ irreducible and non-isomorphic $\quad \Longrightarrow \quad 
\text{Hom}_G(V, W) = \{0 \} \quad \Longrightarrow \quad \chi_V$ and $\chi_W$ are orthogonal.

---

If $\widehat G$ denotes the set of isomorphism classes of finite dimensional irreducible representations of $G$, it follows that 
$$\ \{ χ_V: [V] \in \widehat G \} \ {}$$ 
is an orthonormal family of class functions. 
$~$
In fact, $\ \{ χ_V: V \in \widehat G \} \ {}$ is an orthonormal basis of $(L_2(G))^G$.
$~$
This result falls under the umbrella of the Peter-Weyl Theorem.

Proving it involves some standard but nontrivial analysis&mdash;infinite dimensional analogs of familiar linear algebra results in finite dimensions, with appropriate assumptions about the behavior of certain linear operators&mdash;that we won't go into. 
$~$
$~$

---

If $V$ is completely reducible, then 
$$
V \approx \oplus V_k^{\oplus n_k},
$$
where 
- the $V_k$'s are irreducible and pairwise non-isomorphic
- $n_k$ denotes the multiplicity of $V_k$ and
$$
V_k^{\oplus n_k} = \underbrace{V_k \oplus \cdots \oplus V_k}_{n_k \ \text{copies}}.
$$
Schur's Lemma $\ \Longrightarrow$
$$
\langle \chi_{V_k}, \chi_V \rangle_{L_2(G)} = \text{dim}_{\C} \text{Hom}_G(V_k, V) = n_k.
$$
$~$
$~$
$~$

---

Orthogonality of non-isomorphic irreducible representations and $\ χ_{V⊕W} =χ_V +χ_W \quad\Longrightarrow$
$$
|\chi_V|^2_{L_2(G)} = \sum_k \left | V_k^{\oplus n_k} \right |^2_{L_2(G)} 
= \sum_k n_k^2.
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

---

### Interlude: Fourier and harmonic analysis lighting tour/review

The *heat equation* is a linear PDE of the form
$$
\frac {\partial u}{\partial t} = \Delta u = \frac {\partial^2 u}{\partial x_1 x_1} + \cdots \frac {\partial^2 u}{\partial x_n x_n}
$$
where $u : R  \times I \to \R$ for some region $R$ and interval $I \subset \R$ containing $0$.

The *wave equation* has the form
$$
\frac {\partial^2 u}{\partial t^2} = \Delta u.
$$
$~$
We construct of a basis of solutions as products of functions of the spatial variable(s) and functions of time.

---

***Initial and boundary data***

 If $\partial R = B_d \cup B_n$, a solution  $u$ of the heat equation is determined by functions 
 - $\ f: R \to \R \qquad{}$ (initial data), 
 - $\ b_d: B_d \times I \to \R \qquad  {}$  (Dirichlet boundary data), and 
 - $\ b_n: B_n \times I \to \R, \qquad {}$ (Neumann boundary data)
 
via the conditions
$$
u(\xv, 0) = f(\xv), \qquad 
u|_{B_d} = b_d, \sands 
\smallfrac {\partial u}{\partial \nu}|_{B_n} = b_n. 
$$
$~$
We determine convergent linear combinations of the special solutions satisfying the initial and boundary conditions.

In practice, we typically approximate solutions using finite sums.

---

***Example. $R = S^1 \approx \R/\Z.\ {}$***

Substituting
$$
u(x, t) = X(x)T(t)
$$
for as yet unknown functions $\ X: R \to \R \ {}$ and $\ T: I \to \R \ {}$ into the heat equation yields
$$
X(x) T'(t) = X''(x) T(t).
$$

If we assume for the moment that $u$ is everywhere nonzero, we can divide by $u$, obtaining
$$
\frac {T'(t)}{T(t)} = \frac {X''(x)}{X(x)}.
$$
$x$ and $t$ are independent variables, so this equation is satisfied on $R \times I \ \Longleftrightarrow \ \exists \ \lambda \ {}$ s.t.
$$
\frac {T'(t)}{T(t)} = \lambda = \frac {X''(x)}{X(x)}.
$$

---

We need eigenvectors $T$ of $\smallfrac {d \ }{dt}$ and $X$ of $\smallfrac {d^2 \ }{dx^2}$, both with the same eigenvalue. 
$~$
$$
X_k(x) = \cos (2 \pi \, k \, x), \qquad \tilde X_k(x) = \sin (2 \pi \, k \, x),
\sands
T_k(t) = e^{- 4 \pi^2 k^2 \ t} \phantom{X_{\int_\int}}
$$
are eigenvectors of $\smallfrac {d^2 \ }{dx^2}\ {}$ or $\smallfrac {d \ }{dt}\ {}$ with common eigenvalue $\ - 4 \pi^2 k^2 \quad \ \forall \ k \in \Z$.

$~$

Linearity of the heat equation $\Longrightarrow$
$$
u(x, t) = a_0 + \sum_{k = 1}^n T_k(t) \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp
$$
is a solution of the heat equation for any $a_k, \tilde a_k \in \R$. 

---

To determine coefficients $a_k$ and $\tilde a_k$ satisfying the initial condition 
$$
f(x) = u(x, 0) = a_0 + \sum_{k = 1}^n \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp,
$$
we exploit the fact that rescalings of $X_k$ and $\tilde X_k$ (keep the notation as is) form an orthonormal basis of the space of square integrable real-valued functions on $S^1$, 
with the $L_2$ inner product 

$$
\langle f_1, f_2 \rangle_{S^1} = \int_0^1 f_1(x) f_2(x)dx.
$$

Ignoring any technical issues with convergence of the infinite sum,
$$
f = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^\infty \lp \langle f, X_k\rangle_{S^1} X_k +  \langle f, \tilde X_k\rangle_{S^1} \tilde X_k \rp.
$$

---

$S^1$ has empty boundary, so there are no boundary conditions.

$$
u(x, t) = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^n T_k(t) \lp \langle f, X_k\rangle_{S^1} X_k(x) + \langle f, \tilde X_k\rangle_{S^1} \tilde X_k(x) \rp
$$
is the solution of the heat equation with initial condition $f$.
$~$
The wave equation is solved analogously, with appropriately modified $T_k$. 
$~$

If we work in the complex setting, with $S^1 = \{ z \in \C: |z| = 1 \}, \ {}$ we have
$$
f(z) = \sum_{k = - \infty}^∞ \hat f(k) z^k, \qquad \quad \text{where} \quad
\hat f(k) := 
%\langle f, \phi_n \rangle = 
\smallfrac 1 {2π} \int_0^{2π}f(e^{iθ} )e^{−i k θ} dθ
$$
is the *$k$-th Fourier coefficient of $f$*.

---

Separation of variables works analogously in higher spatial dimensions. 
$$u(\xv, t) = X(\xv) T(t)
$$
for $T: I \to \R$ and $X: R \to \R \qquad \Longrightarrow$
$$
\smallfrac {\partial u}{\partial t} = X (\xv) T'(t) 
\sands \Delta u  = \Delta X(\xv) T(t),\phantom{X^\int_\int}
$$
so if $u$ satisfies the heat equation  and is everywhere nonzero, $X$ and $T$ must be eigenvectors of $\Delta$ and $\smallfrac {\partial \ }{\partial t}$ with a common eigenvalue.
$~$
Hence the eigenvectors and eigenvalues of the Laplacian have been intensively studied.

The kernel of a linear transformation is of particular interest and practical value. 

Functions in the kernel of the Laplacian are called *harmonic functions*.

---

### Plane waves 

Given $\xi \in \R^n$, define $\phi_\xi : \R^n \to \C$ by
$$
\phi_\xi(\xv) := e^{2πi \langle \xi, \xv \rangle}.
$$
Any (complex) scalar multiple of $\phi_\xi$ is called a *plane wave*.
$~$
$$\Delta \phi_\xi = - 4π^2 |\xi|^2 \phi_\xi,$$
so $\phi_\xi$ is an eigenvector of $\Delta$, with eigenvalue $- 4π^2 |\xi|^2$. 
$~$
For functions $f: \R^n \to \R$ that decay sufficiently rapidly, the following integrals are finite and we can define
$$
\hat f(\xi) := \langle f, \phi_\xi \rangle_{L_2} = \int_{\R^n} f(\xv) \phi_{-\xi}(\xv) d \xv.
$$

---

$\hat f: \R^3 \to \C$ is the *Fourier transform* of $f$.

$\hat f(ξ)$ captures the extent to which $f$ oscillates at frequency $ξ$.
$~$
On the circle, the eigenvectors were indexed by $\Z$, and a harmonic function could be expressed as a limit of linear combinations of the eigenvectors. 

In the case at hand, the "indices" run over all elements of $\R^n$, and $f$ is expressed as an integral over those indices:
$$\eqa{
f(\xv) &= \langle \hat f, \phi_{-\xv} \rangle_{L_2}\\
&= \int_{\R^n} \hat f(\xi) \phi_{\xv}(\xi) d \xi \\
&= \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi ,
}$$

---

since 
$$\phi_{\xv}(\xi) = e^{2πi \langle \xi, \xv \rangle} = \phi_{\xi}(\xv).
$$
$~$
***The Fourier transform of $∆f$***

Sweeping a lot of analytical details under the rug, we have
$$\eqa{
∆f(\xv) &= ∆ \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \hat f(\xi) ∆ \! \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \lp - 4π^2 |\xi|^2\hat f(\xi) \rp \phi_{\xi}(\xv)  d \xi, 
}$$
and hence

---

$$
\widehat{∆f}(\xi) = - 4π^2 |\xi|^2\hat f(\xi).
$$
$~$
If we can efficiently compute and undo Fourier transforms, solving $∆f = w$ is "easy":
$$
∆f = w  \quad \Longleftrightarrow \quad \widehat{∆f} = \widehat w 
\quad \Longleftrightarrow \quad \hat{f}(\xi) = - \frac {\widehat w(\xi)}{4π^2 |\xi|^2} \qquad \qquad \forall \ \xi \in \R^3.
$$ 

$~$
***Side remark:*** A *fast Fourier transform (FFT)* is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). 

A lot of data is discrete to start with, and continuous time (or other independent variable) dependent data is often discretized as part of the analysis process.

FFT's are *very* useful, and *very* widely used. 

---

***Plancherel identity*** 
$$
\int_{\R^n} |f(\xv)|^2 d \xv = 
\int_{\R^n} |\hat f(\xi)|^2 d \xi.
$$
$~$
***Convolution formula*** 
$$
\int_{\R^n} f_1(\xv - \yv) f_2(\yv) d \yv = 
\int_{\R^n} \hat f_1(\xi) \hat f_2(\xi) \phi_\xi(\xv) d \xi.
$$
$~$
$~$
$~$
$~$

---

### Harmonic homogeneous polynomials 

A polynomial $\ p:\R^n \to \C \ {}$ is *homogeneous of degree* $\ell$  if
$$
p(\lambda \mathbf {x} )=\lambda^\ell p(\xv) \qquad \quad \forall \lambda \in \R, \xv \in \R^3.
$$

For $n = 3$ and $\ell \in \N,$ let $A_\ell$ denote the harmonic homogeneous polynomials of degree $\ell$. 
 - $A_1 = \{ p(\xv) = \langle \cv, \xv \rangle : \cv \in \C^3 \},  {}$ the space of linear functions on $\R^3$.
 
 - $A_2 = \{ p(\xv) = \langle \cv, \av_2(\xv) \rangle : \cv \in \C^5 \},  {}$ where $\av_2: \R^3 \to \R^5$ is given by
$$
\av_2(x, y, z) := \lp x y, x z, y z, x^2 - y^2, x^2 - z^2 \rp.
$$
$~$
If we identify one of the coordinate planes in $\R^3$ with $\C$, then $\xv \mapsto (P \xv)^\ell$ is a harmonic homogeneous polynomial, where $P: \R^3 \to \C$ denotes projection onto the plane. 

---

For example, 
$$
(x + i \, y)^2 = x^2 - y^2 + 2 x y \, i = \langle (2 i, 0, 0, 1, 0) , \av_2(\xv) \rangle.
$$
$~$
### Spherical harmonics

The spherical harmonics can be defined as the restrictions of the harmonic homogeneous polynomials on $\R^3$ to $S^2$.

E.g., if $\tilde p$ denotes the expression of $p(x, y, z) = (x + i \, y)^\ell$ in terms of spherical coordinates $\ (r,\theta ,\varphi ), \ {}$ with $r = 1, \ {}$ then
$$\eqa{
\tilde p(\theta ,\varphi) &= \lp \sin \theta \cos \varphi + i \, \sin\theta \sin \varphi  \rp^\ell \\
&= \sin^\ell \theta e^{i\ell \varphi }.}
$$

---

A separation of variables approach can be used to find the harmonic functions on $\R^3$ directly in spherical coordinates: If
$$u(r, \theta, \varphi) = \rho(r) \sigma(\theta, \varphi),$$ 
then $\ \Delta u = 0 \ \Longleftrightarrow \ {}$
$\rho$ and $\sigma$ are eigenvectors of appropriate linear operators, with eigenvalues $\lambda$ and $- \lambda$.

A second separation of variables 
$$
\sigma(\theta, \varphi) = \Theta(\theta) \Phi(\varphi)
$$
leads to 
$$
\sigma_{\lambda, m}(\theta, \varphi) = e^{i m  \varphi} \, \Theta_{\lambda, m}(\theta) 
$$
for $\ m \in \Z\ {}$ and $\ \Theta_{\lambda, m}\ {}$ satisfying
$$
\textstyle{\sin \theta {\frac {d\ }{d\theta }}\left(\sin \theta {\frac {d\Theta }{d\theta }}\right)= \lp m^{2} - \lambda \sin ^{2}\theta \rp \Theta.}
$$

