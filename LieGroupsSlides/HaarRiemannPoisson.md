---
marp: true
paginate: true
---

## Haar measure 
$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
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
\newcommand{\fd}[2]{\smallfrac {{\delta} #1 }{{\delta} #2}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A choice of  volume element $\omega_1$ on $\fg$ determines a $\lozenge$-invariant volume form $\omega_\lozenge$ on $G$ via 
$$
\omega_\lozenge(g)(d_1 \lozenge_g(\xi_1), \ldots, d_1 \lozenge_g(\xi_n)) := \omega_1(\xi_1, \ldots, \xi_n)
$$
for all $\ g \in G, \xi_j \in \fg, \ {}$ where $\lozenge = L$ or $R$.

Since $\omega_1$ is unique up to rescaling by a nonzero constant, so is $\omega_\lozenge$. 
$~$
The associated measure is called a $\lozenge$ *Haar measure* on $G$. 
$~$
If $G$ is compact, the $\lozenge$ Haar measure satisfying ${\displaystyle \ \int_G \omega_\lozenge = 1}\ \ {}$ is called ***the*** $\lozenge$ *Haar measure* on $G$.

---

Left and right Haar measures typically aren't equal!
$~$
For any $g \in G, \ {}$ the pullback of a $\lozenge$ Haar measure by $\blacklozenge_g$ is a $\lozenge$ Haar measure, since 
$$\begin{align}
\lozenge_h^*(\blacklozenge_g^*\omega_\lozenge ) &= (\blacklozenge_g \circ \lozenge_h)^* \omega_\lozenge \\
&= (\lozenge_h \circ \blacklozenge_g)^* \omega_\lozenge \qquad \text{(left and right mult. commute)}\\
&= \blacklozenge_g^*(\lozenge_h^*\omega_\lozenge) \\
&= \blacklozenge_g^*\omega_\lozenge
\end{align}
$$
for any $h \in G$.

Since any two $\lozenge$ Haar measures on $G$ differ only by rescaling, $\exists \ \Delta: G \to \R^*$ satisfying
$$
\Delta(g) \, \blacklozenge_g^*\omega_\lozenge = \omega_\lozenge 
$$
for all $\ g \in G\ {}$ and all $\lozenge$ Haar measures on $G$. 

---

***Claim:*** $\Delta$ is a Lie group homomorphism. 

*Verify:* Given $g, h \in G$,
$$\begin{align}
\blacklozenge_g^* \blacklozenge_h^* \omega_\lozenge 
&= (\blacklozenge_h \circ \blacklozenge_g)^* \omega_\lozenge \\
&= \blacklozenge_{\lozenge_g(h)}^* \omega_\lozenge \\
&= \smallfrac 1 {\Delta(\lozenge_g(h))} \omega_\lozenge. \phantom{x_\int}
\end{align}$$

On the other hand, $\lozenge$ invariance of $\blacklozenge_h^* \omega_\lozenge \quad \Longrightarrow$
$$
\Delta(h) \Delta(g) \blacklozenge_g^* \blacklozenge_h^* \omega_\lozenge = \Delta(h) \blacklozenge_h^* \omega_\lozenge = \omega_\lozenge.
$$
Hence $\ \Delta(\lozenge_g(h)) = \Delta(h) \Delta(g)$. 

Since $\R^*$ is Abelian, we can exchange the roles of $g$ and $h$, and hence have
$$
\Delta(g h) =\Delta(g) \Delta(h) = \Delta(h g).
$$

---

***Corollary:*** If $\iota: G \to G$ denotes inversion, then 
$$\iota^* \omega_\lozenge = \pm \Delta \omega_\lozenge, $$ 
and $\iota^* \omega_\lozenge$ is $\blacklozenge$ invariant.

*Verify:* $\ \iota \circ  \blacklozenge_g = \lozenge_{g^{-1}} \circ \iota \quad \Longrightarrow$
$$\eqa{
\blacklozenge_g^*(\iota^* \omega_\lozenge) &= (\iota \circ \blacklozenge_g)^* \omega_\lozenge \\
&= (\lozenge_{g^{-1}} \circ \iota)^* \omega_\lozenge \\
&= \iota^*(\lozenge_{g^{-1}}^* \omega_\lozenge) \\
&= \iota^*\omega_\lozenge,
}
$$

so $\iota^*\omega_\lozenge$ is $\blacklozenge$ invariant.
$$
(\blacklozenge_g^*\Delta)(h) = \Delta(\blacklozenge_g(h)) = \Delta(h) \Delta(g)
$$
for any $h \in G$, so 

---

$$\eqa{
\blacklozenge_g^*(\Delta \omega_\lozenge) &= (\blacklozenge_g^*\Delta) \blacklozenge_g^*\omega_\lozenge) \\
&=  \Delta (\Delta(g) \blacklozenge_g^*\omega_\lozenge) \\
&= \Delta\omega_\lozenge,
}
$$


Hence $\Delta \omega_\lozenge$ is also $\blacklozenge$ invariant.
$~$
Since $\iota^* \omega_\lozenge$ and $\Delta \omega_\lozenge$ are both $\blacklozenge$ invariant, they agree up to a constant rescaling: 
$$
\Delta \omega_\lozenge = c \, \iota^* \omega_\lozenge
$$
for some $\ c \in \R^*$. Hence

$$\eqa{
\iota^*(\Delta \omega_\lozenge) &= c \, \iota^* (\iota^* \omega_\lozenge) \\
&= c (\iota \circ \iota)^* \omega_\lozenge\\
&= c \, \omega_\lozenge.
}
$$

---

Since $\Delta$ is a homomorphism, and hence 
$$%((\Delta \circ \iota) \Delta)(g) = 
\Delta(\iota(g)) \Delta(g) = \Delta(g^{-1}) \Delta(g) = 1 \qquad \forall \ g \in G,
$$
we also have
$$\eqa{
\iota^*(\Delta \omega_\lozenge) &= (\iota^*\Delta) \iota^* \omega_\lozenge\\
&= (\Delta \circ \iota) \lp \smallfrac \Delta c \omega_\lozenge \rp \\
&= \smallfrac 1 c  \omega_\lozenge.
}
$$
$~$
Combining these chains of equalities yields
$$
c \, \omega_\lozenge = \iota^*(\Delta \omega_\lozenge) = \smallfrac 1 c  \omega_\lozenge, 
%\qquad \text{and hence} \qquad c^2 = 1.
$$
and hence $c^2 = 1$.
$~$
$~$
$~$
$~$
$~$

---

### Unimodular Lie groups

$G$ is *unimodular* if $|\Delta| = 1$.

$G$ is unimodular $\ \Longleftrightarrow \ {}$ every left Haar measure on $G$ is also a right Haar measure. 

If $G$ is unimodular, we simply refer to "the" Haar measure on $G$ (modulo constants), 
rather than a left or right Haar measure, and denote the measure by $\ dg$.
$~$
For any $\phi \in \text{End}(\fg), \ {}$
$$
(\det  \phi) \Omega(\xi_1, \ldots, \xi_n) = \Omega(\phi(\xi_1), \ldots, \phi (\xi_n)). 
$$
$~$
***Claim:*** $G$ is unimodular $\ \Longleftrightarrow \ {} |\det \Ad_g| = 1 \quad \forall \ g \in G$.

*Verify:* Let $\Omega := \omega_\lozenge(1). \ {}$ 

---

$\Ad_g = d_1 (L_g \circ R_{g^{-1}}) \ \Longrightarrow \ {}$

$$\eqa{
(\det  \Ad_g) \Omega& = (L_g \circ R_{g^{-1}})^*\omega_\lozenge(1)\\
 &= R_{g^{-1}}^* L_g^*\omega_\lozenge(1).
}
$$

If $G$ is unimodular, 
$$
R_{g^{-1}}^* L_g^*\omega_\lozenge = \pm \omega_\lozenge \ \Longrightarrow \qquad \det  \Ad_g = \pm 1 \qquad \forall \ g \in G .
$$
$~$
On the other hand, $\ |\det \Ad_g| = 1 \quad \forall \ g \in G \quad \Longrightarrow {}$
$$\eqa{
\Delta(g) \Omega &= (\blacklozenge_{g^{-1}}^* \omega_\lozenge)(1)\\
&= (\blacklozenge_{g^{-1}}^* \lozenge_g^* \omega_\lozenge)(1)\\
&= \pm \Omega,
} 
$$
since $\lozenge_g \circ \blacklozenge_{g^{-1}} = \Ad_g \ {}$ or $\ \Ad_{g^{-1}}.\ {}$ Hence $G$ is unimodular.

---

***Claim:*** Compact Lie groups are unimodular.

*Verify:* We will show more generally that if $V$ is a one dimensional representation of a compact Lie group $G$, with action $\ \rho: G \to GL(V) \approx \R^*, \ {}$ then 
$$
|\rho(g) | = 1 \qquad \forall \ g \in G.
$$
$~$
$\rho(G)$ is a compact subgroup of $\R^*, \ {}$ so for any $g \in G$, 
$$\lim_{n \to \infty} (\rho(g))^n = \lim_{n \to \infty} \rho(g^n) \in \rho(G). \phantom{\int_x}$$ 

Since neither $0$ nor $\infty$ are elements of $\R^*$, we must have $|\rho(g)| = 1$. 

$\Delta$ can be regarded as  an $\R$-representation, so a compact Lie group is unimodular.

---

If $G$ is compact, we can use the Haar measure to average $G$-dependent objects over $G$.

Given a tensor $\tau$, the average
$$
\tilde \tau := \int_G \lozenge_g^* \tau \, dg 
$$
is $\lozenge$ invariant.
$~$

If we average a $\lozenge$ invariant tensor w.r.t. the $\blacklozenge$ action, we obtain a bi-invariant tensor.
$~$
$~$
$~$
$~$
$~$

---

***An example of a non-unimodular Lie group***

We need a non-commutative, non-compact group. 

The 1D *affine group* $\ G = \R^* \times \R, \ {}$ with identity $(1, 0)$ and operations
$$
(a, b) (c, d) = (a c, a d + b)\sands (a, b)^{-1} = \lp \smallfrac 1 a, - \smallfrac b a \rp,
$$

acts on $\R$ by affine transformations 
$$
(a, b) \cdot x = a \, x + b. 
$$
*Verify:* 
$$\eqa{
(a, b) \cdot ((c, d) \cdot x) &= (a, b) \cdot (c \, x + d) \\
&= a (c \, x + d) + b \\
&= a c \, x + (a d + b) \\
&= (a, b) (c, d) \cdot x.
}
$$

---

Conjugating $(c, d)$ by $(a, b)$ yields
$$\eqa{
(a, b) (c, d) (a, b)^{-1} &= (a c, a d + b) \lp \smallfrac 1 a, - \smallfrac b a \rp\\
&= (c, a d - c b + b),
}
$$

with linearization
$$
\Ad_{(a, b)}(\xi, \eta) = d_{(1, 0)} \lp L_{(a, b)} \circ R_{(a, b)^{-1}} \rp (\xi, \eta) 
= (\xi, a \, \eta - b \, \xi)
$$
at $(1, 0)$.

$\Ad_{(a, b)}$ has matrix representation
$$
\Ad_{(a, b)} = \begin{bmatrix} 1 & 0 \\ -b & a \end{bmatrix},
$$
with determinant $a$, so $G$ isn't unimodular.
$~$
$~$

---


## Riemannian metrics on Lie groups 

An inner product $\langle \ \ , \ \rangle$ on $\fg$ determines a $\lozenge$ invariant Riemannian structure on $G$, with
$$
\langle v_g , w_g \rangle_g := \langle d_g \lozenge_{g^{-1}} v_g , d_g \lozenge_{g^{-1}} w_g \rangle
$$
for all $v_g, w_g \in T_gG$. 
$~$
If $\langle \ \ , \ \rangle$ is $\Ad$ invariant, then the Riemannian structure is bi-invariant. 
$~$
If $G$ is compact, we can construct an $\Ad$ invariant inner product by averaging an arbitrary inner product on $\fg$ over $G$:
$$
\langle \! \langle \xi, \eta \rangle \! \rangle := \int_G \langle \Ad_g \xi, \Ad_g \eta \rangle dg.
$$
$~$

---

***Example***

$G = SO(3, \R)$, ${\mathfrak so}(3, \R) \approx (\R^3, \times), \ {}$ with the Euclidean inner product is $\Ad$ invariant, since
$$
\Ad_U(\hat {\boldsymbol \xi}) = U (\hat {\boldsymbol \xi}) U^{-1} = \widehat{ U {\boldsymbol \xi}}.
$$
$~$
If we replace the Euclidean inner product with the inner product
$$
\langle {\boldsymbol \xi}, {\boldsymbol \eta} \rangle = {\boldsymbol \xi}^T I {\boldsymbol \eta}
$$
for some positive definite symmetric matrix $I$ with distinct eigenvalues, then the associated Riemannian structure is not bi-invariant.
$$
\langle \! \langle \xi, \eta \rangle \! \rangle = \int_G ({U \boldsymbol \xi})^T I ({U\boldsymbol \eta}) dU
= s \, {\boldsymbol \xi}^T {\boldsymbol \eta}, \qquad \text{where} \qquad s \, \idm = \int_G U^T I U dU.
$$

---

## Poisson manifolds

A *Poisson manifold* $(M, \{\ , \ \})$ is a smooth manifold $M$  such that
- $V = C^∞(M)$ is a Lie algebra, with Lie bracket $\{·, ·\}$, and
- for every $f \in V$, $\{f, \cdot \}: V \to V$ is a derivation, i.e.
$$
\{f, gh\} = \{f, g\}h + g\{f, h\} \qquad \qquad\forall \ g, h \in V.\phantom{x^\int}
$$
$~$
$\{ ·, ·\}\, {}$ is called a *Poisson bracket* or *Poisson structure*.
$~$
***Example:*** $M = \R^3, \ {}$ with Poisson brackets
$$
\{f, g\}_\pm(\pv) = \pm \langle \pv, \nabla f(\pv) \times \nabla g(\pv) \rangle.
$$
$~$

---

### The Lie-Poisson bracket of the dual $\fg^*$ of a (reflexive) Lie algebra

Let $φ: \fg \to (\fg^*)^* \, {}$ denote the isomorphism 
$$
φ(ξ)(\mu) := \mu(ξ) \qquad \qquad \forall \ \xi \in \fg, \mu \in \fg^*, \phantom{\int_x}
$$
and define $\, \fd f \mu: \fg^* → \fg\, {}$ by
$$
\fd f \mu(\mu) := φ^{-1}(d f(\mu)),
$$
i.e.
$$
\nu(\fd f \mu(\mu)) = \smallfrac {d \ }{d \epsilon} f (\mu + \epsilon \, \nu) |_{\epsilon = 0} \qquad \forall \ \mu, \nu \in \fg^*.\phantom{x_\int}
$$
The *Lie-Poisson bracket* on $\fg^*$ is defined as
$$
\{f, g\}_\pm(\mu) = \pm \mu \lp \left [\fd f \mu(\mu), \fd g \mu(\mu) \right ] \rp,
$$

---

*Special case:* $\fg = so(3, \R) \approx (\R^3, \times)$
$$
\{f, g\}_\pm(p) = \pm \langle p, \nabla f(p) \times \nabla g(p) \rangle.
$$
$~$
*Note:* On function spaces, non-reflexivity is often due to integration by parts: 
inner products typically involve integrals of pointwise inner products over the domain;
extraction of $\, \fd f \mu\,$ from the directional derivative involves integration by parts,
which introduces boundary terms.
$~$
Rather than verifying 'bare hands' that the Lie-Poisson bracket is a Poisson bracket,i
we'll show (later!) that its ancestry guarantees that it is a Poisson bracket. 

Specifically, Lie-Poisson brackets arise from trivializations of $T^*G$, and the canonical symplectic structure on a contangent bundle.

---

### Hamiltonian vector fields on (finite dimensional) Poisson manifolds

In finite dimensions, the space of derivations on $C^∞(M)$ is isomorphic to $\, \calX(M)$.

Hence $\ \{ ·, ·\}\, {}$ determines a map 
$$\eqa{
X: C^∞(M) &\to \calX(M)\\
h &\mapsto X_h
}
$$
satisfying
$$
X_h(f) = \{f, h \} \qquad \forall \ f, h \in V,
$$
where 
$$ (X_h(f))(p) = ({\cal L}_{X_h}f)(p) = df(p)(X_h(p)).$$
$~$
$X_h$ is called the *Hamiltonian vector field* associated to the *Hamiltonian* $h$.


---

### Brackets to brackets

***Claim:***
$$
1. \ \ \{·, ·\} \ \text{is a Poisson bracket}\quad  \Longleftrightarrow \quad [X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in V,
$$
$\quad {}$ where $\, [X_f , X_h] \, {}$ is the Lie bracket of the vector fields $X_f$ and $X_h$, i.e.
$$
[X_f , X_h](k) = X_f(X_h(k)) - X_h(X_f(k)) \qquad \quad \forall \ k \in V.\phantom{\int^\int_\int}
$$

$$
2. \ \ \{φ(ξ), φ(ζ)\}_\pm = \pm φ([ξ,ζ]) \qquad \forall \ ξ,ζ \in \fg, \qquad \qquad\qquad\qquad\qquad\qquad\qquad
$$
$\quad {}$ where $\ φ(ξ)(\mu) = \mu(ξ) \qquad \forall \ \mu \in \fg^*$.

*Verify:* 
$$
\{\{g, h\}, f \} =  X_f(\{g, h\}) =  X_f(X_h(g)) \qquad 
$$
$\Longrightarrow$

---

$$
\eqa{
\{f, \{g, h\}\} &+ \{g, \{h, f\}\} + \{h, \{f, g\}\} \\
&= - \{\{g, h\}, f\} - \{g, \{f, h, \}\} + \{\{g, f\}, h\} \\
&= - X_f(X_h(g)) - X_{\{f, h, \}}(g) + X_h(X_f(g))\\
&= [X_f , X_h](g) -  X_{\{f, h\}}(g)
}
$$
for all $\, f, g, h ∈ V$. 

$$\eqa{
\nu(\fd {φ(ξ)} \mu(\mu)) &= \smallfrac {d \ }{d \epsilon} φ(ξ)(\mu + \epsilon \, \nu)|_{\epsilon = 0} \\
&= \smallfrac {d \ }{d \epsilon} (\mu + \epsilon \, \nu)(ξ) |_{\epsilon = 0} \\
&= \smallfrac {d \ }{d \epsilon} \mu(ξ) + \epsilon \, \nu(ξ) |_{\epsilon = 0} \\
&= \nu(ξ)
}
$$
$\Longrightarrow$
$$\fd {φ(ξ)} \mu(\mu) = ξ\qquad \qquad \forall \ ξ \in \fg, \ \mu \in \fg^*.
$$

---

Hence
$$\eqa{
\pm \{φ(ξ), φ(ζ)\}_\pm(\mu) &= \mu \left (\left [ \fd {φ(ξ)} \mu(\mu), \fd {φ(ζ)} \mu(\mu) \right ] \right )\\
&= \mu([ξ,ζ]) \\
&= φ([ξ,ζ])(\mu).
}
$$

### Poisson maps

A map $\,φ: M → N\,{}$ between Poisson manifolds is a *Poisson map* if the pull-back
 $φ^∗: C^∞(N) → C^∞(M)\,{}$ preserves the Poisson brackets, i.e.
 $$
\{ f, g\}_N(φ(p)) = \{f \circ φ, g \circ φ \}_M(p) \qquad \forall \ f, g ∈ C^∞(N)\ \text{and}\ p \in M.
$$
$~$
***Claim:***  The time $t$ flow $\, {\cal F}_t\, {}$ of a Hamiltonian vector field $X_h$ is a Poisson map.

Informal exercise: Prove this. (Hints available if you want to tackle this.)

---

### Conserved quantities

If $X_h$ is a Hamiltonian vector field and $\, {\cal F}_t: M \to M\, {}$ denotes the flow at time $t$ of $X_h, \ {}$ 
$$
{\cal F}_t^*h = h \circ {\cal F}_t = h 
$$
for all $t$ for which $\, {\cal F}_t\, {}$ is defined.

In other words, trajectories of $X_h$ lie on level sets of $h$.
$~$
*Verify:* ${\cal F}_0 = \text{id}_M, \ {}$ so the equality holds for $\ t = 0$.

Skew-symmetry of $\ \{ ·, ·\} \ \Longrightarrow \ \{h, h \} = 0, \ {}$ and hence
$$
\eqa{
\smallfrac {d \ }{dt} {\cal F}_t^*h &= X_h(h) \circ {\cal F}_t \\
&= \{h, h \}\circ {\cal F}_t \\
&= 0.
}
$$

---

$C \in C^∞(M)\, {}$ satisfying $\ \{· , C \} = 0 \ {}$ is called a *Casimir*, and satisfies
- $X_C = 0, \ {}$
- ${\cal F}_t^* C = C\ {}$ for the flow $\, {\cal F}_t\ {}$ of any Hamiltonian vector field on $M$,
i.e. for any $h$, trajectories of $X_h$ lie on level sets of $C$.

$~$

***Example:***  Hamiltonian vector fields for Lie-Poisson brackets (of reflexive Lie algebras)
$~$
An inner product $\, \langle \ \, , \ \rangle_\fg\, {}$ on $\fg$ induces an isomorphism $\, I: \fg \to \fg^*$
$$
(I \xi)(\eta) = \langle \xi , \eta \rangle \qquad \forall \ \xi, \eta \in \fg,
$$
and an associated inner product $\, \langle \ \,, \ \rangle_{\fg^*}\, {}$ on $\fg^*$,
$$
\langle \mu , \nu \rangle_{\fg^*} = \langle I^{-1} \mu, I^{-1} \nu \rangle_{\fg}
= \mu(I^{-1} \nu).
$$

---

***Claim:*** $\ \langle \ \, , \ \rangle_\fg\ \Ad$-invariant $\ \Longrightarrow \ \langle \ \, , \ \rangle_{\fg^*} \ \Ad^*$-invariant, and hence
$$
C(\mu) := \smallfrac 1 2 ||\mu||_{\fg^*}^2
$$
is a Casimir of the Lie-Poisson bracket.

*Verify*: $\, \langle \ , \ \rangle_\fg\, {}$ $\Ad$-invariant $\ \Longrightarrow$
$$\eqa{
(\Ad^*_g I \Ad_g(\xi))(\eta) &=  (I \Ad_g(\xi))(\Ad_g \eta) \\
&= \langle \Ad_g(\xi), \Ad_g \eta \rangle_\fg \\
&=  \langle \xi, \eta \rangle_\fg \\
&= (I \xi)(\eta)}\phantom{x_{\int_\int}}
$$
for all $\, g \in G, \xi, \eta \in \fg \quad \Longrightarrow\quad \Ad^*_g \, I \, \Ad_g = I$ 
$$
%\Ad^*_g \, I \, \Ad_g = I, \qquad \text{and hence} \qquad 
\qquad \qquad\Longrightarrow \quad \Ad_g \, I^{-1} \, \Ad^*_g = I^{-1}
\qquad \forall \ g \in G. \phantom{x^{\int^\int}}
$$

---

Hence
$$
\langle \Ad_g^* \mu , \Ad_g^* \nu \rangle_{\fg^*}
= \Ad_g^* \mu(I^{-1} \, \Ad^*_g \nu) = \mu(I^{-1} \nu)
= \langle \mu , \nu \rangle_{\fg^*}.
$$
$~$
It follows that $\ \langle \ \, , \ \rangle_{\fg^*}\ {}$ is $\ad$-invariant, i.e.
$$
0  =\langle \ad_\xi^* \mu , \nu \rangle_{\fg^*} + \langle  \mu , \ad_\xi^*\nu \rangle_{\fg^*} 
%= \nu (I^{-1} \ad_\xi^* \mu + \ad_\xi I^{-1} \mu)
\qquad \forall \ \xi \in \fg, \ \mu, \nu \in \fg^*.
$$

In particular, 
$$\eqa{
0 &= \langle \ad_\xi^* \mu , \mu \rangle_{\fg^*}\\
&= \ad_\xi^* \mu(I^{-1}\mu) \\
&= - \ad_{I^{-1}\mu}^* \mu(\xi) 
}
$$
for all $\xi \in \fg,\ {}$ so 
$$\ \ad_{I^{-1}\mu}^* \mu = 0.$$

---

The Hamiltonian vector field $X_h$ determined by the Lie-Poisson bracket satisfies
$$\eqa{
 d f(\mu)(X_h(\mu)) &=\smallfrac {d \ }{dt} f(\calF_t(\mu))|_{t = 0}\\
&= \{f, h\}_\pm(\mu) \\
&= \pm \mu \lp \left [\fd f \mu(\mu), \fd h \mu(\mu) \right ] \rp\\
&= \mp \ad^*_{\fd h \mu(\mu)} \mu\lp \fd f \mu(\mu) \rp \\
&= d f(\mu)\lp \ad^*_{\fd h \mu(\mu)} \mu \rp,
}
$$
so 
$$
X_h(\mu) = \ad^*_{\fd h \mu(\mu)} \mu.
$$

---

$$
C(\mu) =  \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu)
\qquad \Longrightarrow \qquad \fd C \mu(\mu) = I^{-1} \mu.
$$
Hence
$$
X_C(\mu) = \mp \ad^*_{\fd C \mu(\mu)} \mu = 0.
$$


---

### Euler's equation

If $X_h^\pm$ denotes the Hamiltonian vector field determined by $\{·,·\}_\pm\ {}$ and $h \in C^∞(\fg^*), \ {}$ then
$$
X_h^\pm(\mu) = \mp \ad^*_{\fd h \mu(\mu)} \mu.
$$
$~$


*Euler's equation* 
$$
\dot \mu = \mp \ad^*_{I^{-1} \mu} \mu
$$
is Hamilton's equation for 
$$
h(\mu) := \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu). 
$$
$~$
The previous calculations show that Euler's equation is trivial if the inner product on $\fg^*$ is $\Ad^*$ invariant.
$~$
***Special case:*** $\ \fg = so(3, \R) \approx (\R^3, \times)$

Assume that the given inner product on $\fg \approx \R^3$ is not $\Ad$-invariant, i.e. not rotation invariant. Equivalently, $I$ is not a multiple of the identity matrix. 

---

Conservation of $h \ \Longrightarrow \ {}$ trajectories of Euler's equation lie on spheres w.r.t. the given norm, which are ellipsoids.

The Euclidean inner product is rotation invariant, so the square of the Euclidean norm is a Casimir. Hence trajectories of Euler's equation also lie on Euclidean spheres. 

The intersections of these surfaces determine the trajectories up to direction of travel:

![h:325](Images/blankSpace.png)![h:325](Images/blankSpace.png)  ![rigid body trajectories h:325](Images/rigid_body_trajectories.png)