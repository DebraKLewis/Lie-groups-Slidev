---
marp: true
paginate: true
---

## Tangent vectors as derivations

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calC}{{\cal C}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calL}{{\cal L}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\vsud}{{\phantom{\int}}}
\newcommand{\vsu}{{\phantom{x^\int}}}
\newcommand{\vsd}{{\phantom{x_\int}}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\ddt}{\smallfrac {d \ }{dt}}
\newcommand{\dd}[2]{\smallfrac {d \ }{d #2} \left . #1 \right |_{#2 = 0}}
\newcommand{\dep}[1]{{#1} \epsilon}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$Tangent vectors can be regarded as existing for the purpose of taking directional derivatives.
$~$
We can regard a tangent vector $v_p$ to a manifold $M$ at a point $p$ as an equivalence class of smooth curves $\gamma: (-\epsilon, \epsilon) \to M$ with the equivalence relation 
$$
\gamma \approx \tilde \gamma \qquad \Longleftrightarrow \qquad \gamma(0) = \tilde \gamma(0) \quad \text{and} \quad \gamma'(0) = \tilde \gamma'(0)
$$
and evaluate the directional derivative of $f$ in the direction of $v_p$ as
$$
v_p(f) = \dd {f(\gamma(t)) } \epsilon
$$
for some representative $\gamma$ of the equivalence class.
$~$

---

We can also cut to the chase and define a tangent vector at $p$ as a *derivation* at $p$, i.e. a linear map $D_p: \calC^\infty(M) \to \calC^\infty(M)$ satisfying 
$$
D_p(f \, g) = D_p(f) g(p) + f(p) D_p(g).
$$
$~$
These two characterizations ae equivalent.
$~$
$~$
$~$
$~$
$~$
$~$
$~$



---

### Recap: the Lie algebra ${\cal X}(M)$ of smooth vector fields on $M$

The *Lie derivative* $\, \calL_X: \calC^\infty(M) \to \calC^\infty(M)$ associated to a vector field $V$ is given by
$$
\calL_X f(p) = X(p)(f) \qquad \qquad \forall \ p \in M.
$$
$~$

***Algebraic description of the Lie bracket:***

The Lie bracket $\ [X, Y]\ {}$ of vector fields $X$ and $Y$ is the unique vector field such that 
$$
\calL_{[X, Y]} = [\calL_X, \calL_Y] = \calL_X Y.
$$
$~$
The bracket is natural with respect to push-forward by diffeomorphisms: 
If $\varphi: M \to N$ is a diffeomorphism and $X, Y \in \calX(M)$, then 
$$
\varphi_*[X, Y] = [\varphi_* X, \varphi_*Y].
$$
$~$
$~$

---

***Dynamics description of the Lie bracket:***

If $\calF_t$ denotes the flow at time $t$ of $X$, and ${\mathbf t}$ is a tensor on $M$, then
$$
\ddt \calF_t^* {\mathbf t} \ = \calF_t^*(\calL_X {\mathbf t}).
$$
In particular,
$$
\dd {\calF_t^* Y} t = \calL_X Y = [X, Y].
$$
$~$
The algebraic and dynamics descriptions are equivalent.

Each have their advantages!

$~$
$~$
$~$

---

### Relationships between the Lie algebra structures of $\fg$ and $\calX(G)$

$\lozenge$ invariant vector fields on $G$ form a Lie subalgebra of $\calX(G)$, i.e. 
- they form a subspace of $\calX(G)$, and 
- the Lie bracket of two $\lozenge$ invariant vector fields is $\lozenge$ invariant 
(because of naturality of the bracket w.r.t. push-forwards). 
$~$

$\xi \mapsto X_\xi^L\ {}$ (resp. $X_\xi^R$) is a Lie algebra homomorphism (resp. anti-homomorphism), i.e.
$$
[X_\xi^L, X_\eta^L] = X^L_{[\xi, \eta]_{\fg}}
\sands
[X_\xi^R, X_\eta^R] = - X^R_{[\xi, \eta]_{\fg}}.
$$

*Verify:* Given $\xi \in \fg$, let
$$
\gamma(t) := \exp(t \, \xi) \sands \phi_t := \lp \calF_\xi^L \rp_t = R_{\gamma(t)},
$$

---

and compute $\ [X_\xi^L, X_\eta^L]\ {}$ using
$$
[X, Y] = \dd{\calF_t^* Y} t.
$$
$~$
$$
\begin{align}
\phi_t^* X_\eta^L(g) &= {\color{red}d_{\phi_t(g)}\phi_t^{-1}} \lp{\color{blue} X_\eta^L(\phi_t(g))}\rp \\
&={\color{red}d_{\phi_t(g)}\phi_t^{-1}} \lp {\color{blue}d_1 L_{\phi_t(g)}(\eta)} \rp \\
&= d_1 \lp {\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} \rp({\color{blue}\eta}).
\end{align}
$$
Regroup, using $\ \phi_t= R_{\gamma(t)}$,
$$
\begin{align}
{\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} &= {\color{red}R_{\gamma(t)}^{-1}} \circ {\color{blue}L_{R_{\gamma(t)}(g)}} \\
&= {\color{red}R_{\gamma(t)^{-1}}} \circ \lp {\color{blue} L_g \circ L_{\gamma(t)}} \rp \\
&= {\color{blue}L_g} \circ \lp {\color{red}R_{\gamma(t)^{-1}}} \circ{\color{blue}L_{\gamma(t)}} \rp
\end{align}
$$

---

Linearizing at $1$ yields
$$
d_1 \lp {\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} \rp
= d_1 {\color{blue}L_g} \circ d_1 \lp {\color{red}R_{\gamma(t)^{-1}}} \circ {\color{blue}L_{\gamma(t)}} \rp
= d_1 {\color{blue}L_g} \circ {\color{purple}\Ad_{\gamma(t)}},
$$
so
$$
\phi_t^* X_\eta^L(g) = d_1 {\color{blue}L_g}({\color{purple}\Ad_{\gamma(t)}}(\eta)) = X^L_{\Ad_{\gamma(t)}(\eta)}(g).
$$
$~$
$$
\dd {\Ad_{\gamma(t)}(\eta)} t = \ad_\xi(\eta) = [\xi, \eta]_\fg
$$
and linearity of $\ \xi \mapsto X^L_\xi\ {}$ imply that
$$
[X_\xi^L, X_\eta^L] = \dd {X^L_{\Ad_{\gamma(t)}(\eta)}} t = X^L_{[\xi, \eta]_\fg}.
$$

---

Exchanging the roles of left and right multiplication gives 
$$
\phi_t^* X_\eta^R = X^R_{\Ad_{\gamma(t)^{-1}}(\eta)},
$$
where $\phi_t$ now denotes $L_{\gamma(t)}$.

$$
[X_\xi^R, X_\eta^R] = - X^R_{[\xi, \eta]_{\fg}}
$$
for right invariant vector fields follows from
$$
\gamma(t)^{-1} = \exp(t \, \xi)^{-1} = \exp(- t \, \xi)
$$
and the Chain Rule.
$~$
$~$
$~$

---

## More about the Lie bracket and the exponential map

If $φ: G → H$ is a group homomorphism, then $d_1φ$ is a Lie algebra homomorphism: 
$$
d_1φ([\xi, \eta]_\fg) = [d_1φ(\xi),d_1 φ(\eta)]_\fh \qquad \forall \ \xi, \eta ∈ \fg = T_1 G. \vsud
$$
Equivalently,
$$
d_1 φ \circ \ad_\xi = \ad_{d_1φ(\xi)} \circ d_1 φ.
$$
$~$
*Verify:*  $\ φ$ a group homomorphism $\ \Longrightarrow$
$$
φ \lp g \tilde g g^{-1} \rp =  φ(g) φ(\tilde g) φ\lp g^{-1} \rp =  φ(g) φ(\tilde g) φ(g)^{-1} \vsd
$$
for all $g, \tilde g \in G$, i.e.
$$
φ \circ R_{g^{-1}} \circ L_g = R_{φ(g)^{-1}} \circ L_{φ(g)} \circ φ. \vsd
$$

---

Linearizing at $1$ gives
$$
d_1 φ \circ \Ad_g = \Ad_{φ(g)} \circ d_1 φ. \vsud
$$

Setting $g = \exp(t \, \xi)$ and then differentiating w.r.t. yields
$$
d_1 φ \circ \ad_\xi = \ad_{d_1φ(\xi)} \circ d_1 φ.
$$
$~$
***Very important special case:***

Taking $\ φ = L_g \circ R_{g^{-1}}\ {}$gives
$$
\Ad_g([\xi, \eta]) = [\Ad_g(\xi), \Ad_g(\eta)] \qquad \forall \ g \in G, \ \xi, \eta ∈ \fg. \vsu
$$
$~$

---

***In-class example/exercise: $SO(3, \R)$ and infinitesimal rotations***

There is a Lie algebra homomorphism between 
$$
\setdef {\fg} B {\R^{3 \times 3}} {B + B^T = 0}, \qquad \text{with} \qquad [B, C] = B C - C B,
$$
and $\R^3$ with 
$$[\xv, \yv]_{\R^3} = \xv \times \yv.$$

Use this homomorphism to describe the adjoint representation of $SO(3, \R)$ on ${\mathfrak so}(3, \R)$ in terms of matrix-vector multiplication of $SO(3, \R)$ on $\R^3$
$~$
$~$
$~$

---

The *Baker-Campbell-Hausdorff* formula:
$$
\eqa{
\log(\exp(t \, \xi)(\exp(t \, \eta)) &= t(\xi+\eta) +\smallfrac {t^2} 2[\xi,\eta]+\smallfrac {t^3} {12} \lp [\xi,[\xi,\eta]]-[\eta,[\xi,\eta]] \rp  \\
& \qquad  + \text{higher order terms involving nested brackets}.
}
$$

We've seen that 
$$
d_0 \exp = \text{id}_\fg.
$$
What about $\ d_\xi \exp\ {}$ for $\xi \neq 0$?

The following formula is proved (Theorem 1.5.2) in Duistermat and Kolk: For any $\xi \in \fg$, 
$$\begin{align}
d_\xi \exp_G &= d_1 R_{\exp_G(\xi)} \circ \int_0^1 \exp_{GL(\fg)}(s \, \ad_\xi) ds \\
&= d_1 L_{\exp_G(\xi)} \circ \int_0^1 \exp_{GL(\fg)}(-s \, \ad_\xi) ds.
\end{align}
$$

---

## Infinitesimal generators

An action $\rho$ of a group $G$ on a manifold $M$ determines a subalgebra of vector fields called *infinitesimal generators*. 

$$
\xi_M(p) := \dd {\rho(\exp(t \, \xi))(p)} t.
$$

### Examples

If $M = G$ and $\rho(g) = \lozenge_g$, then $\ \xi_G = X_\xi^\blacklozenge,$ where $\blacklozenge = R$ if $\lozenge = L$ and vice versa.

*Verify:* Let $\gamma(t) = \exp(t \, \xi)$.

$$\eqa{
\xi_G(g) &= \dd {\lozenge_{\gamma(t)}(g)} t \\
&= \dd {\blacklozenge_g (\gamma(t))} t \\
&= d_1 \blacklozenge_g(\xi) \\
&= X_\xi^\blacklozenge(g).
}
$$

---

If $M = \fg$ and $\rho(g) = \Ad_g$, then $\ \xi_G = \ad_\xi$. 
$~$
***In-class example/exercise, part 2: infinitesimal rotations***

$M = \R^3$, $G = SO(3, \R)$, and $\rho(A)(\pv) = A \pv$.

Use the Lie algebra homomorphism between ${\mathfrak so}(3, \R)$ and $\R^3$ to describe the infinitesimal generators in terms of classical/traditional infinitesimal rotations 
$$
\xi_{\R^3}(\pv) = \xi \times \pv.
$$
$~$
$~$
$~$
$~$
$~$

---

## Stabilizers and isotropy

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, for any $p \in M$, the *stabilizer (isotropy subgroup)* of $p$ is
$$
G_p := \{g \in G : g \cdot p := \rho(g)(p) = p \}.
$$
$~$
***Claim:*** $G_p$ is a closed Lie subgroup of $G$, with 
$$
T_g G_p = \ker d_g \Phi_p = d_1 L_g(\fg_p),
$$
where
$$
\setdef{\fg_p} \xi \fg {\xi_M(p) = 0}.
$$  
$~$
$~$
$~$

---

*Verify:* If we define 
$$\eqa{
\Phi_p: G &\to M \\
\Phi_p(g) &:= g \cdot p, 
}
$$
then 
$$
G_p = \Phi_p^{-1}(p).
$$
Since $\Phi_p$ is continuous, $G_p$ is a closed subgroup of $G$, and thus a closed Lie subgroup.
$~$
$$
T_g G_p \subseteq \ker d_g \Phi_p,
$$
since for any smooth curve $\ \gamma: (-\epsilon, \epsilon) \to G_p\ {}$, $\ \Phi_p \circ \gamma\ {}$ is constant.

To show that $\ T_g G_p \supseteq \ker d_g \Phi_p,\ {}$ given $v_g \in \ker d_g \Phi_p$, we need to construct a curve $\gamma: (-\epsilon, \epsilon) \to G_p\ {}$ with $\gamma'(0) = v_g\ {}$.  
$~$

---

Crucial identity: For any $g \in G$,
$$
\Phi_p \circ L_g = \rho(g) \circ \Phi_p,
$$
since $\ (g h) \cdot p = g \cdot (h \cdot p)$.

Linearizing at $1$ in the direction of $\eta \in \fg$ gives
$$
%d_g \Phi_p(X_\eta^L(g)) = 
d_g \Phi_p(d_1 L_g(\eta))
= d_p \rho(g)(d_1 \Phi_p(\eta)).
%&= d_p \rho(g)(\eta_M(p)).%
$$
$~$
Start with the case $g = 1$: Consider $\ \xi \in \ker d_1 \Phi_p$ and define 
$$
\gamma(t) := \exp(t \, \xi), \qquad \text{with}\qquad \gamma'(t) = X_\xi^L(\gamma(t)) = d_1 L_{\gamma(t)}(\xi).
$$

Taking $g = \gamma(t)$ and $\eta = \xi$, we see that 
$$
\smallfrac {d \ }{dt} \Phi_p(\gamma(t)) = d_{\gamma(t)} \Phi_p(d_1 L_{\gamma(t)}(\xi))
= d_p \rho(\gamma(t))(d_1 \Phi_p(\xi)) = 0.
$$
Hence $\gamma(t) \in G_p$. 

---

General case: Given $v_g \in \ker d_g \Phi_p$, if we set
$$
\xi := d_gL_{g^{-1}}(v_g) \in \fg, \sands \gamma(\epsilon) := g \, \exp(\epsilon \, \xi),
$$
then
$$
\gamma'(0) = d_1 L_g(\xi) = d_1 L_g(d_gL_{g^{-1}}(v_g)) = d_1 (L_g \circ L_{g^{-1}})(v_g) = v_g,
$$
and
$$\eqa{
    0 &= d_p\rho(g^{-1})(d_g\Phi_p(v_g)) \\
    &= d_1 \Phi_p(d_1 L_{g^{-1}}(v_g)) \\
    &= d_1 \Phi_p(\xi)
}
$$
implies that $\exp(t \, \xi) \in G_p,\ {}$ and hence
$$
\Phi_p(\gamma(t)) = \rho(g)(\Phi_p(\exp(t \, \xi))) = \rho(g)(p) = p,
$$
since $g \in G_p$.

---

### Orbits

For any $p \in M$, 
$$
{\cal O}_p = G \cdot p := \{g \cdot p : g \in G\}
$$
is the *orbit* of $p$. 
$~$
If $h \in G_p$, then for any $g \in G$, 
$$
\Phi_p({g h}) = (g h) \cdot p = g \cdot (h \cdot p) = g \cdot p,
$$
so $\Phi_p$ determines a map 
$$\eqa{
\tilde \Phi_p: G/G_p &\to M \\
\tilde \Phi_p([g]) &:= g \cdot p, 
}
$$

---
`
$\tilde \Phi_p$ is injective, with image $G \cdot p$, since 
$$
\tilde \Phi_p([g]) = \tilde \Phi_p([h]) \ \Longleftrightarrow \
g \cdot p = h \cdot p \ \Longleftrightarrow \
g^{-1} h \in G_p\ \Longleftrightarrow \ [g] = [h].
$~$

The linearization of the crucial identity again:
$$
d_g \Phi_p(X_\eta^L(g)) = 
d_g \Phi_p(d_1 L_g(\eta))
= d_p \rho(g)(d_1 \Phi_p(\eta))
= d_p \rho(g)(\eta_M(p)).
$$
$~$
Hence $\tilde \Phi_p$ is an immersion, and
$$
T_p (G \cdot p) = \{ \eta_M(p) : \eta \in \fg \} \approx \fg/\fg_p.
$$

---

## Quotient spaces and orbits

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, define 
$$
M/G := 
$$
$M/G$ has the quotient topology: $U \subset M/G$ is open $\ \Longleftrightarrow\  \pi^{-1}(U)\ {}$ is open in $M$.
$~$
***Example of a non-Hausdorff quotient:***

$G = \R^+$, $M = \R$, and $g \cdot p = g \, p$.
$$
M/G = \{[-1], [0], [1]\},
$$
with open sets 
$$
\emptyset, \{[-1]\},\{[1]\}, \{[-1],[1]\}, M/G.
$$
The only open set containing $[0]$ is $M/G$, so $M/G$ isn't Hausdorff.

---

***Claim:*** If
$$
\setdef R {(p, g \cdot p)} {M \times M} {p \in M, g \in G}
$$
is closed, then the quotient topology on $M/G$ is Hausdorff. 

*Verify:* Given $p, \tilde p \in M$, if $\{ V_j\}$ and $\{ \tilde V_j \}$ are nested bases of nbhds of $p$ and $\tilde p$, then
$$
U_j := \pi(V_j) \sands $\tilde U_j := \pi(\tilde V_j)
$$
are nested bases of nbhds of $[p]$ and $[\tilde p]$. NTS that
$$
U_j \cap \tilde U_j \neq \emptyset \quad \forall \ j \qquad \Longrightarrow \qquad [p] = [\tilde p].
$$

$U_j \cap \tilde U_j \neq \emptyset \ \Longrightarrow \ \exists \ m_j \in V_j, \tilde m_j \in \tilde V_j, \ \text{and} \ g_j, \tilde g_j \in G\ {}$ satisfying
$$
g_j \cdot m_j = \tilde g_j \cdot \tilde m_j,
$$ 
and hence
$$
(m_j, \tilde m_j) = (m_j, (\tilde g_j^{-1} g_j) \cdot p_j) \in R.
$$

---

$R$ closed $\ \Longrightarrow$
$$
(p, \tilde p) = \lim_{j \to \infty}(m_j, \tilde m_j) \in R,
$$
so $\exists \ g \in G\ {}$ such that $\ \tilde p = g \cdot p, \ {}$ and hence $\ [\tilde p] = [p]$.
$~$

***Claim:*** $M/G$ has a smooth manifold structure such that $\ \pi: M \to M/G \ {}$ is a submersion $\ \Longleftrightarrow \ R\ {}$ is a closed submanifold of $\ M \times M$. 

See, e.g., Theorem 4.1.20 in the *Foundations of Mechanics* excerpt for the proof. 
$~$

***Special case:*** If $H$ is a closed subgroup of $G$, then $G/H$ is a smooth manifold and the projection is a submersion.
$~$
$~$
$~$

---

### Free, effective, and proper actions

An action is *free* $\ \Longleftrightarrow \ {}$ for every $p \in M$ the map $\Phi_p: G \to M$ given by
$$\Phi_p(g) := g \cdot p
$$
is injective, i.e. $G_p$ is trivial for all $p \in M$.
$~$
An action is *effective* (or *faithful*) $\ \Longleftrightarrow \ {}$ it is injective, i.e. if 
$$\rho(g) = \text{id}_M \qquad \Longleftrightarrow \qquad g = 1.$$
$~$
An action is *proper* $\ \Longleftrightarrow \ {}$ the map 
$$\eqa{
\Psi: G \times M &\to M \times M \\
(g, p) &\mapsto (p, g \cdot p)
}
$$
is proper, i.e. preimages of compact sets are compact.

---

If $G$ acts freely and properly on $M$, then 
- $𝜋:𝑀→𝑀/𝐺 \ {}$ is smooth.
- For any manifold $N$ and map $𝑓:𝑀/𝐺→𝑁, \ f \circ \pi$ smooth $\ \Longrightarrow \ f$ smooth.

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$