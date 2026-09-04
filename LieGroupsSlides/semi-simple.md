---

marp: true
paginate: true

---

## Semisimple stuff

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\fz}{\mathfrak{z}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calB}{{\cal B}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A Lie algebra $\fg$ is *simple* if $\fg$ is non-abelian and has no non-trivial ideals.

A Lie algebra $\fg$ is *semisimple* if $\fg$ is a direct sum of simple Lie algebras
$$
\fg = \fg_1 \oplus \fg_k
\qquad \text{such that} \qquad i \neq j \quad \Longrightarrow \quad
[\fg_i, \fg_j] = 0.
$$
$~$
***Example:*** $so(3, \R)$ is simple.

*Verify:* If $\text{span}(v)\ {}$ is an ideal of $(\R^3, \times) \quad \Longrightarrow \quad y \in \R^3$ satisfying
$$
\hat v w = v \times w = \langle y, w \rangle v = (v y^T) w \qquad \forall \ w \in \R^3.
$$

$$
0 = v \times v = \langle y, v \rangle v \qquad \Longrightarrow \qquad \langle y, v \rangle = 0,
$$
and hence
$$
v v^T - |v|^2 \idm = \hat v^2 = \langle y, v \rangle \, v y^T = \langle y, v \rangle \hat v = 0,
$$
so $v = 0$. Hence $(R^3, \times)\ {}$ has no 1D ideals.

---

$(R^3, \times) \ {}$ has no 2D subalgebras (much less 2D ideals), so it is simple.
$~$
The Euclidean basis vectors satisfy 
$$
e_i \times e_j = e_k, \qquad \text{for}\ \ \{i, j, k\} \ \ \text{a cyclic permutation of }\ \{1, 2, 3\},
$$
so the derived algebra of $so(3, \R) \ {}$ is itself.

Hence $so(3, \R) \ {}$ is neither solvable nor nilpotent.
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---

***Recap:*** The radical $\radg$ of a Lie algebra $\fg$ is the unique maximal solvable ideal of $\fg$.

***Claim:*** 
1. $\fg/\radg$ is semisimple.
2. If $\fb$ is a solvable ideal in $\fg$,
$$
\fg/\fb \quad \text{semisimple} \qquad \Longrightarrow \qquad \fb = \radg.
$$

*Verify (sketch):*

1. Let $I$ be a solvable ideal in $\ \fg/\radg$.
If $\pi: \fg \to \fg/\radg\ {}$ denotes projection onto the quotient, let  
$$
\tilde I := \pi^{1-}(I).
$$

$\qquad I \ {}$ and $\ \radg\ {}$ solvable $\quad \Longrightarrow \quad \tilde I\ {}$ is solvable.
$$\eqa{
\tilde I \supseteq \radg \supseteq \tilde I \quad &\Longrightarrow \quad \tilde I = \radg  \\
\quad &\Longrightarrow \quad I = \tilde I/\radg = \triv.
}
$$

---

2. NTS any solvable ideal in $\fg$ is contained in $\fb$.

$\quad \ \fg/\fb\ {}$ semisimple $\quad \Longrightarrow \quad \text{rad}(\fg/\fb) = \triv$.

$\quad {}$ Hence $\ \radg \subseteq \fb$.

$\quad {}$ Maximality of $\radg \quad \Longrightarrow \quad \fb = \radg$.
$~$
***Claim:*** If $(V, \rho)\ {}$ is an irreducible complex $\fg$-module, then $\ \exists \ \lambda: \radg \to \C\ {}$ satisfying

1. $\rho(\xi) = \lambda(\xi) \idm_V \qquad \quad \forall \ \xi \in \radg$
2. $\lambda([\fg, \radg]) = \triv$.

$~$
*Verify:* $\ \ 1.\ {}$ Since $\radg$ is solvable, last week's result $\quad \Longrightarrow \quad$
$\exists \ \lambda: \radg \to \C\ {}$ and $0 \neq v_0 \in V\ {}$ such that
$$
\rho(\eta)(v_0) = \lambda(\eta) v_0 \qquad \quad \forall \ \eta \in \radg.
$$

---

The subspace
$$
V_\lambda := \cap_{\eta \in \radg} \text{ker} (\rho(\eta) - \lambda(\eta) \idm_{\!V})
$$
is nontrivial, since it contains $v_0$. 
$~$
Let $v, \xi, \eta$ denote arbitrary elements of $V_\lambda, \fg, \ {}$ and $\radg$.
$$
\rho(\eta) \circ \rho(\xi) = \rho(\!\!\underbrace{[\eta, \xi]}_{\in \, \radg}\!\!) + \rho(\xi) \circ \rho(\eta) \qquad \Longrightarrow 
$$
$$\eqa{
(\rho(\eta) - \lambda(\eta) \idm_{\!V})(\rho(\xi)(v))&=   
\underbrace{\rho([\eta, \xi])(v)}_{= \,\lambda([\eta, \xi]) v} 
+ \rho(\xi)(\underbrace{\rho(\eta)(v)}_{= \, \lambda(\eta) v}) - \lambda(\eta)\rho(\xi)(v) \\
&= \lambda([\eta, \xi]) v \in V_\lambda, 
} 
$$
so $\ V_\lambda\ {}$ is a $\fg$-submodule.
$~$
Irreducibility of $V\quad \Longrightarrow \quad V_\lambda = V$.

---

$2. \quad {}\radg$ solvable $\quad \Longrightarrow \quad [\fg, \radg]\ {}$ is either trivial or $\radg$.

If $[\fg, \radg] = \triv, \ {}$  nothing to show. 

$[\fg, \radg] = \radg\quad \Longrightarrow \quad \ {}$ for any $v \in V, \xi \in \fg, \eta \in \radg, \ {}$
$$\eqa{
\lambda([\xi, \eta]) v &= \rho([\xi, \eta])(v) \\
&= \rho(\xi)(\rho(\eta)(v)) - \rho(\eta)(\rho(xi)(v)) \\
&= \rho(\xi)(\lambda(\eta)v) - \lambda(\eta)\rho(xi)(v) \\
&= 0.
}
$$
$~$
$~$
$~$
$~$
$~$

---

### Semisimple elements

$\phi \in \text{End}(V), \ {}$ is *semisimple* if every $\phi$-invariant subspace of $V$ has an $\phi$-invariant complement. 

If $V$ is a finite dimensional vector space over an algebraically closed field, 
then $\phi$ is semisimple $\quad \Longleftrightarrow \quad \phi$ is diagonalizable.

The "default" $\fg$-module is $\ (\fg, \ad). \ {}$ 
$\xi \in \fg$ is *semisimple* (respectively *nilpotent*) if $\ad_\xi$ is semisimple (resp. nilpotent).
$~$
These two criteria for semisimplicity coincide for semisimple Lie algebras (but not in general).
$~$
$~$
$~$

---

### Jordan decomposition

If $\fg$ is a subalgebra of $\text{End}(V), \ {}$ then $\ \xi \in \fg\ {}$ has a unique decomposition as a sum of a semisimple element $\sigma$ and a nilpotent element $\eta$ such that 
- $[\sigma, \zeta] = 0$
- $\sigma$ and $\eta$ are polynomial in $\xi$.

This decomposition is called the *Jordan decomposition of* $\xi$.
$~$
*Construction:* Choose a basis $\, \calB\, {}$ of $V$ such that the matrix $A$ of $\xi$ w.r.t. $\, \calB \, {}$ is in Jordan normal form. 

Let $D$ denote the diagonal matrix with entries equalling the diagonal entries of $A$.
$D$ is semisimple, since the coordinate axes are invariant subspaces.

$N = A - D \ {}$ is nilpotent.

The block structure of the Jordan normal form $\quad \Longrightarrow \quad D$ and $N$ commute.

---

*Rough sketch of verification* that $\ \exists \ {}$ polynomial $p$ such that $\ D = p(A)$.

Decompose $V$ into (generalized) eigenspaces
$$
V = V_1 ⊕ · · · ⊕ V_n,
$$
so that 
$$
D|_{V_k} = λ_k \idm_{\!V_k}.
$$

The Chinese Remainder Theorem $\quad \Longrightarrow \quad \exists\ {}$ polynomial $p$ satisfying
$$
P(t) ≡ λ_k \ \mod (t − λ_k)^{\text{dim} \, V_k}.
$$

Since $A$ is in Jordan normal form,
$$
\lp A|_{V_k} − λ_k \idm_{V_k} \rp^{\text{dim} \, V_k} = 0.
$$
Hence
$$ 
p(A)|_{V_k} = λ_k \idm_{\!V_k}
$$ 
for $k = 1, \ldots, n, \ {}$ so $p(A) = D$.

---

*Uniqueness of the Jordan decomposition:* Let 
$$
D + N = A = \tilde D + \tilde N
$$
 be Jordan decompositions of $A$.

Since $D$ and $\tilde D$ are polynomials in $A$ (assumed, but not shown here), they commute and can be diagonalised simultaneously. 

Using the same symbols for the matrices in terms of a diagonalizing basis, 
$$
D + N = \tilde D + \tilde N \qquad \Longrightarrow \qquad 
D − \tilde D = \tilde N − N
$$
is nilpotent, and hence 0.
$~$
If $(V, \rho)$ is a $\fg$-module, and $\ \xi = \sigma + \eta \ {}$ is the Jordan decomposition of $\xi \in \fg, \ {}$ then 
$$
\rho (\xi)=\rho (\sigma)+\rho (\eta)
$$
is the Jordan decomposition of $ρ(\xi)$.

---

### Recap: invariance of bilinear forms on representations and modules

A bilinear form $B$ on a $G$-representation $(V, \rho)$ is $G$-invariant if
$$
B(\rho(g)(v), \rho(g)(w)) = B(v, w) \qquad \forall \ g \in G, \ v, w \in V.
$$
$~$
If $B$ is $G$-invariant, setting $g = \text{exp}(\epsilon \, \xi), \ \xi \in \fg$, and differentiating w.r.t. epsilon gives
$$\eqa{
0 &= \smallfrac {d \ }{d \epsilon} B(v, w) |_{\epsilon = 0} \\
&= \smallfrac {d \ }{d \epsilon} B(\rho({\text{exp}(\epsilon \, \xi)})(v), \rho({\text{exp}(\epsilon \, \xi)})(w)) |_{\epsilon = 0} \\
&= B(\xi_V(v), w) + B(v, \xi_V(w)),
}
$$
where  $\xi_V$ denotes the infinitesimal generator of $\xi, \quad \forall \ g \in G, \ v, w \in V$.
$~$
More generally, if $V, \rho)$ is a $\fg$-module, $B$ is $\fg$-invariant if
$$
B(\rho(\xi)(v), w) + B(v,\rho(\xi)(w)).
$$

---

### The Killing form

The *Killing form* $\ \kappa: \fg \times \fg \to F,\ F = \R\ {}$ or $\ \C, \ {}$ is given by
$$
\kappa(\xi, \eta) = \text{trace}(\ad_\xi \, \ad_\eta).
$$
$~$
The Killing form is symmetric, bilinear, and $\ad$-invariant. 
$~$
*Verify $\ad$-invariance of the Killing form:* $\quad{}$ For any $\xi, \eta, \zeta \in \fg$,
$$
\eqa{
\kappa(\ad_\xi(\eta), \zeta) &= \text{trace}(\ad_{[\xi, \eta]} \, \ad_\zeta) \\
&= \text{trace}((\ad_\xi \ad_\eta - \ad_\eta \ad_\xi) \ad_\zeta) \\
&= \text{trace}(\ad_\eta (\ad_\zeta \ad_\xi - \ad_\xi \ad_\zeta)) \\
&= \text{trace}(\ad_\eta \ad_{[\zeta, \xi]} )  \\
&= - \kappa(\eta, \ad_\xi(\zeta)).
}
$$

---

***Example:*** $so(3, \R)$

If we identify $\ so(3, \R)\ {}$ with $(\R^3, \times),\ {}$ then
$$\eqa{
\ad_\xi(\ad_\eta(\zeta))& = \xi \times (\eta \times \zeta) \\
&= \langle \xi, \zeta \rangle \eta - \langle \xi, \eta \rangle \zeta   \\
&= \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \zeta
}
$$
$\Longrightarrow$
$$\eqa{
  \kappa(\xi, \eta) &= \text{trace} (\ad_\xi \circ \ad_\eta) \\
  &= \text{trace} \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \\
  &= - 2 \langle \xi, \eta \rangle.
}
$$
$~$
The Killing form of $so(3, \R)$ is negative-definite. 

---

***Example:*** $sl(2, \C)$

The basis vectors $\quad
e = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad
f = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \quad
h = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
$
$~$
satisfy $\quad [e, f] = h, \qquad [h, e] = 2 \, e, \qquad [h, f] = -2\, f,\ {}$ so
$~$
$$
\ad_e = \begin{bmatrix} 0 & 0 & −2 \\ 0 & 0 & 0 \\0 & 1 & 0 
\end{bmatrix}, \qquad
\ad_f = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 2 \\  -1 & 0  & 0
\end{bmatrix}, \qquad
\ad_h = \begin{bmatrix} 2 & 0 & 0 \\ 0 & -2 & 0 \\ 0  & 0 & 0
\end{bmatrix}
$$
w.r.t. basis $\{e, f, h\}$. 

The nonzero basis vector pairings in the Killing form are $\ 
\kappa(e, f) = 4\ {}$ and $\ \kappa(h, h) = 8$.

For arbitrary $\xi, \eta \in sl(2, \C)$,
$$
\kappa(\xi, \eta) = 4 \, \text{trace}(\xi \, \eta).
$$

---

### Cartan’s criteria for semisimplicity and solvability

- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.

- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
