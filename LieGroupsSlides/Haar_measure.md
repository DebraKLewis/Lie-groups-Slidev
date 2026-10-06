## Haar measure

Let $G$ be an $n$-dimensional Lie group with Lie algebra $\fg$. <br/>
Let $\lozenge$ denote either left or right. If left (respectively right) $\lozenge_g = L_g$ (resp. $R_g$), and $\blacklozenge_g = R_g$ (resp. $L_g$).

A choice of  volume element $\omega_1$ on $\fg$ determines a $\lozenge$-invariant volume form $\omega_\lozenge$ on $G$: $\ \forall \ g \in G, \xi_j \in \fg$, 
$$
\omega_\lozenge(g)(d_1 \lozenge_g(\xi_1), \ldots, d_1 \lozenge_g(\xi_n)) := \omega_1(\xi_1, \ldots, \xi_n).
%\qquad \forall \ g \in G, \xi_j \in \fg.
$$
The associated measure is called a $\lozenge$ *Haar measure* on $G$. 

***Heads up!:*** Typically $\omega_L \neq \omega_R$.
<Spacer size="5px"/>

$\omega_\lozenge$ is unique modulo rescaling, since $\omega_1$ is. 
If $G$ is compact, the $\lozenge$ Haar measure satisfying
$$
\int_G \omega_\lozenge = 1
$$
is called ***the*** $\lozenge$ *Haar measure* on $G$.

---

### Pullback of $\lozenge$-invariant volume forms by left or right multiplication

For any $g \in G, \ {}$ the pullback of a $\lozenge$ Haar measure by $\blacklozenge_g$ is a $\lozenge$ Haar measure, since for any $h \in G$
$$
\eqa{
\lozenge_h^*(\blacklozenge_g^*\omega_\lozenge ) &= (\blacklozenge_g \circ \lozenge_h)^* \omega_\lozenge \\
&= (\lozenge_h \circ \blacklozenge_g)^* \omega_\lozenge \qquad \text{(left and right multiplication commute)}\\
&= \blacklozenge_g^*(\lozenge_h^*\omega_\lozenge) \\
&= \blacklozenge_g^*\omega_\lozenge.
}
$$
<Spacer size="5px"/>

Since any two $\lozenge$ invariant volume forms on $G$ differ only by a constant rescaling, $\exists \ \ \Delta: G \to \R^* := \R\backslash \{0\}$ satisfying
$$
\Delta(g) \, \blacklozenge_g^*\omega_\lozenge = \omega_\lozenge 
$$
for all $g \in G$ and all $\lozenge$ Haar measures on $G$. 

---

#### $\Delta$ is a Lie group homomorphism
<Spacer size="5px"/>

*Verify:* Given $g, h \in G$,
$$
\eqa{
\blacklozenge_g^* \blacklozenge_h^* \omega_\lozenge 
&= (\blacklozenge_h \circ \blacklozenge_g)^* \omega_\lozenge \\
&= \blacklozenge_{\lozenge_g(h)}^* \omega_\lozenge \\
&= \smallfrac 1 {\Delta(\lozenge_g(h))} \omega_\lozenge.
}
$$

On the other hand, $\lozenge$ invariance of $\blacklozenge_h^* \omega_\lozenge \quad \Longrightarrow$
$$
\Delta(h) (\Delta(g) \blacklozenge_g^* (\blacklozenge_h^* \omega_\lozenge)) = \Delta(h) \blacklozenge_h^* \omega_\lozenge  = \omega_\lozenge.
$$
Hence 
$$
\Delta(\lozenge_g(h)) = \Delta(h) \Delta(g).
$$ 

Since $\R^*$ is commutative, we can exchange the roles of $g$ and $h$, obtaining 
$$
\Delta(g h) =\Delta(g) \Delta(h) = \Delta(h g).
$$

---

### Pullback of $\lozenge$-invariant volume forms by inversion
<Spacer size="5px"/>

***Claim:*** If $\iota: G \to G$ denotes inversion, then $\ \iota^* \omega_\lozenge = \pm \Delta \, \omega_\lozenge, \ {}$ and is $\blacklozenge$ invariant.

*Verify:* We'll show that $\iota^* \omega_\lozenge$ and $\Delta \, \omega_\lozenge$ are both $\blacklozenge$ invariant, and hence differ only by a rescaling:
$$
\Delta \omega_\lozenge = c \, \iota^* \omega_\lozenge
$$
for some $c \in \R^*$. We'll then show that $c^2 = 1$.
<Spacer size="5px"/>

$\iota \circ  \blacklozenge_g = \lozenge_{g^{-1}} \circ \iota \quad \Longrightarrow$

$$
\eqa{
\blacklozenge_g^*(\iota^* \omega_\lozenge) &= (\iota \circ \blacklozenge_g)^* \omega_\lozenge \\
&= (\lozenge_{g^{-1}} \circ \iota)^* \omega_\lozenge \\
&= \iota^*(\lozenge_{g^{-1}}^* \omega_\lozenge) \\
&= \iota^*\omega_\lozenge,
}
$$

$\Longrightarrow \ \ \iota^*\omega_\lozenge$ is $\blacklozenge$ invariant.

---

#### Second slide of proof that $\ \iota^* \omega_\lozenge = \pm \Delta \, \omega_\lozenge$: proof that $\Delta \, \omega_\lozenge$ is $\blacklozenge$ invariant
<Spacer size="5px"/>

$\Delta$ is a Lie group homomorphism, so
$$
(\blacklozenge_g^*\Delta)(h) = \Delta(\blacklozenge_g(h))
 = \Delta(g) \Delta(h) ,
$$
for any $g, h \in G$, and hence 
$$ 
\blacklozenge_g^*\Delta = \Delta(g) \Delta.
$$

It follows that
$$
\eqa{
\blacklozenge_g^*(\Delta \omega_\lozenge) &= (\blacklozenge_g^*\Delta) (\blacklozenge_g^*\omega_\lozenge) \\
&=  \Delta (\Delta(g) \blacklozenge_g^*\omega_\lozenge) \\
&= \Delta\omega_\lozenge,
}
$$
$\Longrightarrow \ \ \Delta \, \omega_\lozenge$ is also $\blacklozenge$ invariant.
<Spacer size="1px"/>

Since $\iota^* \omega_\lozenge$ and $\Delta \omega_\lozenge$ are both $\blacklozenge$ invariant, $\exists \ c \in \R \backslash \{0\}$ such that $\, \Delta \omega_\lozenge = c \, \iota^* \omega_\lozenge$.

---

#### Third slide of proof: $\ \iota^* \omega_\lozenge = \pm \Delta \, \omega_\lozenge$ agree up to overall sign
<Spacer size="5px"/>

$\iota \circ \iota = \text{id}_G \ \ \Longrightarrow$
$$
\eqa{
\iota^*(\Delta \omega_\lozenge) &= \iota^* (c \, \iota^* \omega_\lozenge) \\
&= c (\iota \circ \iota)^* \omega_\lozenge \\
&= c \, \omega_\lozenge.
}
$$

$\Delta$ is a homomorphism, so $\iota^* \Delta = \frac 1 \Delta$, and
$$
\eqa{
\iota^*(\Delta \omega_\lozenge) &= (\iota^*\Delta)(\iota^* \omega_\lozenge) \\
&= \smallfrac 1 \Delta \lp \smallfrac \Delta c \omega_\lozenge \rp \\
&= \smallfrac 1 c  \omega_\lozenge.
}
$$

Hence
$$
c \, \omega_\lozenge = \iota^*(\Delta \omega_\lozenge) = \smallfrac 1 c  \omega_\lozenge, 
$$
so $c^2 = 1$.

---

### Unimodular Lie groups

$G$ is *unimodular* if $|\Delta| = 1$.

$G$ is unimodular $\ \ \Longleftrightarrow \ \ {}$ every left Haar measure on $G$ is also a right Haar measure. 

If $G$ is unimodular, we simply refer to "the" Haar measure on $G$ (modulo constants), 
rather than a left or right Haar measure, and denote the measure by $\,dg$.
<Spacer size="5px"/>

***Claim:***  $G$ is unimodular $\ \ \Longleftrightarrow \ \ {}$ the adjoint action preserves unsigned volume.

<!--
, i.e. $|\det \Ad_g| = 1 \quad \forall \ g \in G$.
-->

*Verify:*
$\ R_{g^{-1}}^* L_g^* = (L_g \circ R_{g^{-1}})^*\,{}$ and $\, \Ad_g = d_1 (L_g \circ R_{g^{-1}}) \ \Longrightarrow \ {}$

$$
\eqa{
(R_{g^{-1}}^* L_g^*\omega_\lozenge)(1)
%&= ((L_g \circ R_{g^{-1}})^*\omega_\lozenge)(1) \\
&= (d_1 (L_g \circ R_{g^{-1}}))^*(\omega_\lozenge((L_g \circ R_{g^{-1}})(1))) \\
&= \Ad_g^* (\omega_\lozenge(1)).
}
%(\text{det} \,  \Ad_g) \omega_1 = 
% (R_{g^{-1}}^* L_g^*\omega_\lozenge)(1)(\xi_1, \ldots, \xi_n) 
%&= ((L_g \circ R_{g^{-1}})^*\omega_\lozenge)(1) (\xi_1, \ldots, \xi_n) \\
%&= \omega_\lozenge(g 1 g^{-1})(d_1 (L_g \circ R_{g^{-1}}) \xi_1, \ldots, d_1 (L_g \circ R_{g^{-1}})(\xi_n) )\\
%&= \Ad_g* \omega_1((\xi_1), \ldots, \Ad_g(\xi_n) ).
$$

Recall that for any vector space $V$, volume form $\omega$ on $V$, and $\phi \in \text{End}(V)$
$$
(\text{det} \,  \phi) \omega = \phi^*\omega. 
$$

---

#### Second slide of the proof that $G$ is unimodular $\ \ \Longleftrightarrow\ \ |\det  \Ad_g| = 1 \ \ \ \forall \ g \in G$

If $G$ is unimodular, 
$$
R_{g^{-1}}^* L_g^*\omega_\lozenge = \pm \omega_\lozenge.
$$
In particular, if we set $\omega_1 := \omega_\lozenge(1)$,
$$
(\det  \Ad_g) \omega_1 = \Ad_g^* \omega_1 = (R_{g^{-1}}^* L_g^*\omega_\lozenge)(1) 
= \pm \omega_1,
$$
and hence $|\det  \Ad_g| = 1$, for all $g \in G$.

On the other hand, $\ |\text{det} \, \Ad_g| = 1$ for all $g \in G$, and $\lozenge$ invariance of $\omega_\lozenge \quad \Longrightarrow {}$
$$
\eqa{
\Delta(g) \omega_1 &= (\blacklozenge_{g^{-1}}^* \omega_\lozenge)(1) \\
&= (\blacklozenge_{g^{-1}}^* \lozenge_g^* \omega_\lozenge)(1) \\
%\qquad \textsf{since} \ \omega_\lozenge \ \textsf{is} \ \lozenge \ \textsf{invariant} \\
&= \pm \omega_1
}
$$
since $\lozenge_g \circ \blacklozenge_{g^{-1}} = L_g \circ R_{g^{-1}} \ {}$ or $L_{g^{-1}} \circ R_g.\ {}$ Hence $G$ is unimodular.

<!-- ***Special case:*** Commutative Lie groups are unimodular. -->

---

### Compact Lie groups are unimodular

***Claim:*** If $V$ is a one dimensional representation of a compact Lie group $G$, with action <br/>
$\rho: G \to GL(V) \approx \R^*$, then $\, \rho(G) \subseteq \{1, -1 \}$.

*Verify:* $\rho(G)$ is a compact subgroup of $\R^*, \ {}$ so for any $g \in G$, 
$$\lim_{n \to \infty} (\rho(g))^n = \lim_{n \to \infty} \rho(g^n) \in \rho(G).$$ 
Since neither $0$ nor $\infty$ are elements of $\R^*$, we must have $|\rho(g)| = 1$. 
<Spacer size="5px"/>
  
$\R$ is a representation of $G$, where $g$ acts by multiplication by $\Delta(g)$, so a compact Lie group $G$ is unimodular.
<Spacer size="5px"/>

If $G$ is compact, "the" Haar measure $dg$ is bi-invariant, with scaling such that
$$
\int_G \, dg = 1.
$$
---

### Example of a non-unimodular Lie group: The affine group on $\R$.
<Spacer size="5px"/>

We now know that a non-unimodular Lie group cannot be commutative or compact. 

The semi-direct product $G = \R^* \ltimes \R, \ {}$ with identity $(1, 0)$ and group operations
$$
(a, b) (c, d) = (a c, a d + b)\sands (a, b)^{-1} = \lp \smallfrac 1 a, - \smallfrac b a \rp,
$$
is a candidate.

$G$ acts on $\R$ by affine transformations: 
$$
(a, b) \cdot x = a \, x + b.
$$ 
<Spacer size="5px"/>

<!--
$$
\eqa{
(a, b) \cdot ((c, d) \cdot x) &= (a, b) \cdot (c \, x + d) \\
&= a (c \, x + d) + b \\
&= a c \, x + (a d + b) \\
&= (a, b) (c, d) \cdot x.
}
$$
-->

Application to $(c, d)$ of the inner automorphism determined by $(a, b)$ yields
$$
\eqa{
(a, b) (c, d) (a, b)^{-1} &= (a c, a d + b) \lp \smallfrac 1 a, - \smallfrac b a \rp\\
&= (c, a d - c b + b).
}
$$

---

#### Second slide of the 1D affine group example: calculation of the adjoint action

Linearization at $(1, 0)$ in the direction $(\xi, \eta)$ yields
$$
\eqa{
\Ad_{(a, b)}(\xi, \eta) &= d_{(1, 0)} \lp L_{(a, b)} \circ R_{(a, b)^{-1}} \rp (\xi, \eta) \\
&= (\xi, a \, \eta - b \, \xi).
}
$$

$\Ad_{(a, b)}$ has matrix representation
$$
\Ad_{(a, b)} = \begin{bmatrix} 1 & 0 \\ -b & a \end{bmatrix},
$$
with determinant $a$.  

Since $\, a$ can have any nonzero value, $G$ isn't unimodular.

---

### Averaging $G$-dependent constructions over a compact group $G$

If $G$ is compact, we can construct $G$ invariant objects to average $G$-dependent objects over $G$.

***Claim:*** Given a tensor $\tau$, the average
$$
\tilde \tau := \int_G \lozenge_g^* \tau \, dg 
$$
is $\lozenge$ invariant.

*Key idea of proof:* Use the change of variables formula and $\lozenge$ invariance of $dg$ to show that for any $h \in G$
$$
\lozenge_h^* \tilde \tau = \lozenge_h^* \lp \int_G \lozenge_g^* \tau \, dg \rp = \tilde \tau.
$$
<Spacer size="5px"/>

If we average a $\lozenge$ invariant tensor w.r.t. the $\blacklozenge$ action, we obtain a bi-invariant tensor.

---

## Riemannian metrics on Lie groups 

A *Riemannian manifold* is a smooth manifold $M$ for which each tangent fiber $T_p M$ is equipped with an inner product $\langle \ \, , \ \rangle_p, \ {}$ and the inner products vary smoothly. 

An inner product $\langle \ \ , \ \rangle$ on $\fg$ determines a $\lozenge$ invariant Riemannian structure on $G$: 
$$
\langle v_g , w_g \rangle_g := \langle d_g \lozenge_{g^{-1}} v_g , d_g \lozenge_{g^{-1}} w_g \rangle
$$
for all $v_g, w_g \in T_gG$. 
Equivalently, for all $g \in G$ and $\xi, \eta \in \fg$
$$
\langle X_\xi^\lozenge(g) , X_\eta^\lozenge(g) \rangle_g = \langle \xi, \eta \rangle.
$$
<Spacer size="2px"/>

If $\langle \ \ , \ \rangle$ is $\Ad$ invariant, then the Riemannian structure is bi-invariant. 

If $G$ is compact, we can construct an $\Ad$ invariant inner product by averaging an arbitrary inner product:
$$
\langle \! \langle \xi, \eta \rangle \! \rangle := \int_G \langle \Ad_g \xi, \Ad_g \eta \rangle dg.
$$

---

## Geodesics

A Riemannian structure on $M$ determines a distance function:

Given a smooth curve $\gamma: I \to M$, we define the *length* of $\gamma$ by
$$
\text{length} \, \gamma := \int_I |\gamma'(t)|_{\gamma(t)} dt.
$$

The *distance* $d(p, q)$ between points $p$ and $q$ is the length of the shortest curve with endpoints $p$ and $q$.

***Heads up!*** A shortest path need not exist, or be unique. <br/>
Example of nonexistence: $M = \R^2 \backslash \{(0, 0)\}$, $p = (-x, 0)$ and $q = (x, 0)$. <br/>
Example of nonuniqueness: Infinitely many half great circles connect antipodal points on a sphere.
<Spacer size="2px"/>

Application of the [calculus of variations](https://www-users.cse.umn.edu/~olver/ln_/cv.pdf) to the length function yields a second order ODE, the *geodesic equation*, for $\gamma$. 

Over sufficiently small distances, the solutions are *geodesics*, shortest paths between their endpoints. 

---

### The Euler-Arnold equation

The triviality of the tangent and cotangent bundles of a Lie group greatly simplify explicit calculation of the geodesic equation.

Given a Lie group $G$, a choice of inner product $\langle \ , \ \rangle$ on $\fg$, and a curve $g: I \to G$, define $\xi: I \to \fg$ by
$$
\xi(t) := (d_1 \lozenge_{g(t)})^{-1} \dot g(t),
$$
where $\dot {\ \ }$ denotes the derivative with respect to $t$, and $\mu: I \to \fg^*$ by
$$
\mu(t)(\eta) = \langle \xi(t), \eta  \rangle \qquad \forall \ \eta \in \fg.
$$

$g: I \to G$ satisfies the geodesic equation associated to the $\lozenge$-invariant Riemannian structure determined by $\langle \ , \, \rangle \ \ \Longleftrightarrow \ \ 
\xi$ and $\mu$ satisfy the *Euler-Arnold equation*
$$
\dot \mu = \pm \ad^*_\xi \mu,
$$
where $\ad^*_\xi = (\ad_\xi)^*$ is the dual of the infinitesimal adjoint action, and  the sign is determined by $\lozenge = L, R$: <br/>
plus for left and minus for right.

<!-- 
We'll approach the relationship via calculus of variations $\ \longrightarrow \ {}$ Lagrangian mechanics $\ \longrightarrow \ {}$ the canonical symplectic structure on a cotangent bundle 
$\ \longrightarrow \ {}$ the induced Poisson bracket on $\ G \times \fg^* \approx T^*G \ \longrightarrow \ {}$Lie-Poisson brackets. 
-->

---

### Example: The free rigid body: $G = SO(3, \R)$ 

We identify $\mathfrak{so}(3)$ with $\R^3$ using the isomorphism $\hat {\ }$ taking a three vector to the skew-symmetric matrix implementing the cross product with $\xi$.

We identify $\mathfrak{so}(3)^*$ with $\R^3$ via the Euclidean inner product:
$\mu(\eta) = \mu^T \eta$.

A rigid body $\, \mathcal{B} \subset \R^3,\ {}$ determines an *inertia tensor*
$$
\mathbb{I} := (\text{trace} \, E) \idm_3 - E \qquad \text{for} \qquad 
E := \int_\mathcal{B} \xv \, \xv^T d^3 \xv.
$$
If $\mathcal{B}$ is "really 3D", $E$ and $\mathbb{I}$ are positive definite symmetric matrices. We take 
$$
\langle \xi, \eta \rangle := \eta^T \mathbb{I} \xi
$$
as our inner product on $\R^3$, and use the left-invariant Riemannian structure determined by $\langle \ , \ \rangle$.

With these choices, $\xi$ is the *body angular velocity* and 
$\mu = \mathbb{I} \xi\ {}$ is the *body angular momentum*. <br/>
(Classical mechanics jargon.)

---

#### Left (body) and right (spatial) trivializations for $SO(3, \R)$

The body angular velocity (left trivialized velocity) describes infinitesimal rotations of the rigid body from the perspective of an "observer" moving with the body, e.g. the pilot of a plane.

<p align="center">
  <img alt="figure eight" src="/Images/yaw_pitch_roll.png" width="300" >
</p>

The spatial angular velocity (right trivialized velocity) describes infinitesimal rotations of the rigid body out of its current position from the perspective of an external "observer" in a fixed , e.g. an air traffic controller.
<Spacer size="1px"/>

The mechanics/physics of a system typically suggest a convenient trivialization.

For the free rigid body, there are no "special directions" (no gravity!), which we'll later see suggests $\lozenge = L$.

---

#### The Euler-Arnold and geodesic equations for $SO(3, \R)$

<!-- For an arbitrary Lie group $G$, $\fg^*$ is a $G$-representation via the coadjoint action 
$$
g \cdot \mu := \Ad_{g^{-1}}^*\mu, \qquad \text{i.e.} \qquad 
(g \cdot \mu)(\eta) = \mu(\Ad_{g^{-1}}\eta)
$$
for all $\eta \in \fg$,
and a $\fg$-representation via the infinitesimal coadjoint action
$$
\xi \cdot \eta :=
-(\ad_\xi^*\mu)\eta = -\mu(\ad_\xi\eta) = \mu([\eta, \xi]).
$$
The inverse is required to obtain a left action, and the minus sign in the infinitesimal coadjoint action comes from linearization at the identity of inversion.
-->

For $G = SO(3, \R), \ \ad_\xi(\eta) = \xi \times \eta \quad \Longrightarrow$
$$
(\ad^*_\xi\mu)(\eta) = \mu(\ad_\xi\eta) = \mu^T (\xi \times \eta) = \eta^T (\mu \times \xi),
$$
since the triple product $\mu^T (\xi \times \eta)$ is invariant under cyclic permutations of the three vectors. Hence
$$
\ad^*_\xi\mu = \mu \times \xi.
$$

Taking into account that $\mu = \mathbb{I} \xi$, the Euler-Arnold equation for the free rigid body is
$$
\dot \mu = \ad_\xi^*\mu = \mu \times (\mathbb{I}^{-1} \mu).
$$
In terms of the trivialization $TG \approx G \times \fg$, the geodesic equations for the free rigid body are
$$
\dot g = g \widehat \xi \sands \mathbb{I} \dot \xi = (\mathbb{I} \xi) \times \xi.
$$

This system of ODEs is partially decoupled: the evolution of $\xi$ doesn't depend on $g$. <br/>
We first find a trajectory $\xi(t)$ of the Euler-Arnold equation, then solve the time-dependent ODE $\ \dot g = g \, \widehat {\xi(t)}$.

---

#### Qualitative analysis of the Euler-Arnold equation for the free rigid body
<Spacer size="5px"/>

$\mu \ {}$ is an equilibrium of Euler's equation 
$\ \ \Longleftrightarrow \ \ \mu\ {}$ is an eigenvector of $\mathbb{I}^{-1}$.

In particular, if $\mathbb{I}$ is a scalar multiple of the identity, all $\mu$ are equilibria.
<Spacer size="5px"/>

We can determine the paths followed by non-equilibrium solutions using two scalar functions that are constant along solutions:
$$
C_1(\mu) := \half \mu^T \mathbb{I}^{-1} \mu
\sands 
C_2(\mu) := || \mu||^2 = \mu^T \mu.
$$

If $\mu: I \to \R^3$ is a trajectory of the Euler-Arnold equation, then symmetry of $\, \mathbb{I}^{-1} \ \ \Longrightarrow$
$$
\eqa{
\smallfrac {d \ }{dt}C_1(\mu(t)) 
&= \half (\dot \mu^T \mathbb{I}^{-1}\mu + \mu^T \mathbb{I}^{-1}\dot \mu) \\
&= \half (\dot \mu^T \xi + \xi^T \dot \mu) \\
&= \xi^T \dot \mu \\ 
&= \xi^T (\mu \times \xi) \\
&= 0.
}
$$


---

#### Second slide of qualitative analysis of the Euler-Arnold equation for the free rigid body
<Spacer size="5px"/>

Analogously,
$$
\smallfrac {d \ }{dt}C_2(\mu(t)) 
= 2 \, \mu^T \dot \mu 
= 2 \, \mu^T (\mu \times \xi) 
= 0.
$$

It follows that trajectories never leave the level sets of $C_1$ and $C_2$ they start on.

What do those level sets look like? 

- If $r < 0$, $C_2^{-1}(r) = C_2^{-1}(r) = \emptyset$.

- $C_1^{-1}(0) = C_2^{-1}(0) = \{\mathbf{0}\}$. 

- If $r > 0$, $C_2^{-1}(r)$ is the sphere of radius $r$ centered at the origin,
and $C_2^{-1}(r)$ is 
    - a sphere if $\mathbb{I}$ is a scalar multiple of the identity (all points in $\R^3$ are equilibria), 
    - a spheroid if $\mathbb{I}$ has one repeated eigenvalue and one distinct eigenvalue, and
    - an ellipse if $\mathbb{I}$ has three distinct eigenvalues.

---

#### Third slide of qualitative analysis of the Euler-Arnold equation for the free rigid body
<Spacer size="5px"/>

The intersections of the level sets of $C_1$ and $C_2$ determine the trajectories $\mu(t)$ up to direction of travel:

<p align="center">
  <img alt="rigid_body_trajectories" src="/Images/rigid_body_trajectories.png" width="250" >

Intersections of level sets of $C_1$, for $\mathbb{I}$ with three distinct eigenvalues, with a sphere.
</p>
<Spacer size="5px"/>

If $\mathbb{I}$ has three distinct eigenvalues, the equilibria of the E-A equation are four centers and two saddle points.

*In-class exercise:* what is the corresponding phase portrait if $\mathbb{I}$ has a repeated eigenvalue?

---

#### Reconstruction of geodesics from solutions of the Euler-Arnold equation 
<Spacer size="5px"/>

The process of computing $g(t)$ given a solution $\mu(t)$ of the Euler-Arnold equation is called *reconstruction*.
<Spacer size="5px"/>

If $\mu_0$ is an equilibrium of the Euler-Arnold equation, then the associated geodesic with initial state $g_0$ is a shifted one parameter subgroup:
$$
g(t) = \lozenge_{g_0}(\exp(t \, \xi_0)).
%, \qquad \text{where} \qquad \xi_0 = \mathbb{I}^{-1}\mu_0.
$$
<Spacer size="5px"/>

For nonconstant $\mu(t)$, we need to solve the first order time-dependent ODE
$$
\dot g = \lozenge_{g}(\xi(t)), 
$$
where $\xi(t) \in\fg$ is determined by 
$$
\mu(t)(\eta) = \langle \xi(t), \eta  \rangle \qquad \forall \ \eta \in \fg.
$$
If $G$ is a matrix group, we can treat the evolution equation for $g$ as a linear ODE on $F^{n \times n}$.

---
<!-- 
### Conservation laws determine the trajectories of the Euler equation for $\ \fg = so(3, \R) \approx (\R^3, \times)$

Assume that the given inner product on $\fg \approx \R^3$ is not $\Ad$-invariant, i.e. not rotation invariant. 

Equivalently, $I$ is not a multiple of the identity matrix. 
$~$
Conservation of $h \ \Longrightarrow \ {}$ trajectories of Euler's equation lie on spheres with respect to the norm determined by $I$. 
These "spheres" are ellipsoids.
$~$
The Euclidean inner product is rotation invariant, and the adjoint action on $\fg^* \approx \R^3$ is rotations, so the square of the Euclidean norm is a Casimir. 

Hence trajectories of Euler's equation also lie on Euclidean spheres. 

-->
