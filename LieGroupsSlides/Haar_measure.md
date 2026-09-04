---
marp: true
paginate: true
---

## Haar measure and invariant inner products, etc.
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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A choice of  volume element $\omega_1$ on $\fg$ determines a $\lozenge$-invariant volume form $\omega_\lozenge$ on $G$ via 
$$
\omega_\lozenge(g)(d_1 \lozenge_g(\xi_1), \ldots, d_1 \lozenge_g(\xi_n)) := \omega_1(\xi_1, \ldots, \xi_n)
\qquad \forall \ g \in G, \xi_j \in \fg.
$$
Since $\omega_1$ is unique up to rescaling by a nonzero constant, so is $\omega_\lozenge$. 

The associated measure is called a $\lozenge$ *Haar measure* on $G$. 
$~$
If $G$ is compact, the $\lozenge$ Haar measure satisfying
$$
\int_G \omega_\lozenge = 1
$$
is called ***the*** $\lozenge$ *Haar measure* on $G$.
$~$
Left and right Haar measures typically aren't equal!

---

For any $g \in G, \ {}$ the pullback of a $\lozenge$ Haar measure by $\blacklozenge_g$ is a $\lozenge$ Haar measure, since 
$$\eqa{
\lozenge_h^*(\blacklozenge_g^*\omega_\lozenge ) &= (\blacklozenge_g \circ \lozenge_h)^* \omega_\lozenge \\
&= (\lozenge_h \circ \blacklozenge_g)^* \omega_\lozenge \qquad \text{(left and right mult. commute)}\\
&= \blacklozenge_g^*(\lozenge_h^*\omega_\lozenge) \\
&= \blacklozenge_g^*\omega_\lozenge
}
$$
for any $h \in G$.

Since any two $\lozenge$ Haar measures on $G$ differ only by rescaling, $\exists \ \Delta: G \to \R^*$ satisfying
$$
\Delta(g) \, \blacklozenge_g^*\omega_\lozenge = \omega_\lozenge \qquad \forall \ g \in G
$$
and all $\lozenge$ Haar measures on $G$. 

***Claim:*** $\Delta$ is a Lie group homomorphism. 

*Verify:* Given $g, h \in G$,
$$
\blacklozenge_g^* \blacklozenge_h^* \omega_\lozenge 
= (\blacklozenge_h \circ \blacklozenge_g)^* \omega_\lozenge 
= \blacklozenge_{\lozenge_g(h)}^* \omega_\lozenge 
= \smallfrac 1 {\Delta(\lozenge_g(h))} \omega_\lozenge.
$$

---

On the other hand, $\lozenge$ invariance of $\blacklozenge_h^* \omega_\lozenge \quad \Longrightarrow$
$$
\Delta(h) \Delta(g) \blacklozenge_g^* \blacklozenge_h^* \omega_\lozenge = \Delta(h) \blacklozenge_h^* \omega_\lozenge = \omega_\lozenge.
$$
Hence $\ \Delta(\lozenge_g(h)) = \Delta(h) \Delta(g)$. 

Since $\R^*$ is Abelian, we can exchange the roles of $g$ and $h$, and hence have
$$
\Delta(g h) =\Delta(g) \Delta(h) = \Delta(h g).
$$
$~$
***Corollary:*** If $\iota: G \to G$ denotes inversion, then $\ \iota^* \omega_\lozenge = \pm \Delta \omega_\lozenge, \ {}$ and is $\blacklozenge$ invariant.

*Verify:* $\ \iota \circ  \blacklozenge_g = \lozenge_{g^{-1}} \circ \iota \quad \Longrightarrow$
$$\eqa{
\blacklozenge_g^*(\iota^* \omega_\lozenge) &= (\iota \circ \blacklozenge_g)^* \omega_\lozenge \\
&= (\lozenge_{g^{-1}} \circ \iota)^* \omega_\lozenge \\
&= \iota^*(\lozenge_{g^{-1}}^* \omega_\lozenge) \\
&= \iota^*\omega_\lozenge,
}
$$

---

so $\iota^*\omega_\lozenge$ is $\blacklozenge$ invariant.

$$\eqa{
\blacklozenge_g^*(\Delta \omega_\lozenge) &= (\blacklozenge_g^*\Delta) \blacklozenge_g^*\omega_\lozenge) \\
&=  \Delta (\Delta(g) \blacklozenge_g^*\omega_\lozenge) \\
&= \Delta\omega_\lozenge,
}
$$
since for any $h \in G$ 
$$
(\blacklozenge_g^*\Delta)(h) = \Delta(\blacklozenge_g(h)) = \Delta(h) \Delta(g).
$$
Hence $\Delta \omega_\lozenge$ is also $\blacklozenge$ invariant.
$~$
Since $\iota^* \omega_\lozenge$ and $\Delta \omega_\lozenge$ are both $\blacklozenge$ invariant, they agree up to a constant rescaling: 
$$
\Delta \omega_\lozenge = c \, \iota^* \omega_\lozenge
$$
for some $\ c \in \R^*$.

$$
\iota^*(\Delta \omega_\lozenge) = c \, \iota^* (\iota^* \omega_\lozenge) = c (\iota \circ \iota)^* \omega_\lozenge
= c \, \omega_\lozenge.
$$


---

Since $\Delta$ is a homomorphism, and hence 
$$%((\Delta \circ \iota) \Delta)(g) = 
\Delta(\iota(g)) \Delta(g) = \Delta(g^{-1}) \Delta(g) = 1 \qquad \forall \ g \in G,
$$
we also have
$$
\iota^*(\Delta \omega_\lozenge) = (\iota^*\Delta) \iota^* \omega_\lozenge = (\Delta \circ \iota) \lp \smallfrac \Delta c \omega_\lozenge \rp = \smallfrac 1 c  \omega_\lozenge,
$$

Combing these chains of equalities yields
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
***Claim:*** $G$ is unimodular $\ \Longleftrightarrow \ {} |\det \Ad_g| = 1 \quad \forall \ g \in G$.

*Verify:* Let $\Omega := \omega_\lozenge(1). \ {}$ 

For any $\phi \in \text{End}(\fg), \ {}$
$$
(\det  \phi) \Omega(\xi_1, \ldots, \xi_n) = \Omega(\phi(\xi_1), \ldots, \phi (\xi_n)). 
$$
Hence $\ \Ad_g = d_1 (L_g \circ R_{g^{-1}}) \ \Longrightarrow \ {}$

$$
(\det  \Ad_g) \Omega = (L_g \circ R_{g^{-1}})^*\omega_\lozenge(1)
 = R_{g^{-1}}^* L_g^*\omega_\lozenge(1).
$$

---

If $G$ is unimodular, 
$$
R_{g^{-1}}^* L_g^*\omega_\lozenge = \pm \omega_\lozenge \ \Longrightarrow \ \det  \Ad_g = \pm 1 \qquad \forall \ g \in G .
$$
On the other hand, $\ |\det \Ad_g| = 1 \quad \forall \ g \in G \quad \Longrightarrow {}$
$$
\Delta(g) \Omega = (\blacklozenge_{g^{-1}}^* \omega_\lozenge)(1) = (\blacklozenge_{g^{-1}}^* \lozenge_g^* \omega_\lozenge)(1)= \pm \Omega
\qquad \forall \ g \in G,
$$
since $\lozenge_g \circ \blacklozenge_{g^{-1}} = \Ad_g \ {}$ or $\Ad_{g^{-1}}.\ {}$ Hence $G$ is unimodular.
$~$
***Claim:*** Compact Lie groups are unimodular.

*Verify:* We will show more generally that if $V$ is a one dimensional representation of a compact Lie group $G$, with action 
$$\rho: G \to GL(V) \approx \R^*$$ 
then 
$$
|\rho(g) | = 1 \qquad \forall \ g \in G.
$$

---

$\rho(G)$ is a compact subgroup of $\R^*, \ {}$ so for any $g \in G$, 
$$\lim_{n \to \infty} (\rho(g))^n = \lim_{n \to \infty} \rho(g^n) \in \rho(G).$$ 
Since neither $0$ nor $\infty$ are elements of $\R^*$, we must have $|\rho(g)| = 1$. 

We can regard $\Delta$ as the action of an $\R$-representation, so a compact Lie group $G$ is unimodular.
$~$
If $G$ is compact, we can use the Haar measure to average $G$-dependent objects over $G$.

Given a tensor $\tau$, the average
$$
\tilde \tau := \int_G \lozenge_g^* \tau \, dg 
$$
is $\lozenge$ invariant.

If we average a $\lozenge$ invariant tensor w.r.t. the $\blacklozenge$ action, we obtain a bi-invariant tensor.

---

### An example of a non-unimodular Lie group

Abelian Lie groups and compact Lie groups are unimodular, so we need a non-commutative, non-compact group. 

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
*In-class exercise, as time permits:* Verify these assertions.

