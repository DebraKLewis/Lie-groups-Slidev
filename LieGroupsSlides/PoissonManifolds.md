## Poisson manifolds 

A *Poisson manifold* $(M, \{\ , \ \})$ is a smooth manifold $M$ equipped with a skew-symmetric bilinear map 
$$
\{\, · \,, \,·\,\}: V × V → V, \qquad \text{where} \quad V = C^∞(M),
$$ 
such that $(V, \{\, · \,, \,·\,\})\, {}$ is a Lie algebra and $\ \{f, \, ·\, \}\ {}$ is a derivation $\ \forall\ f ∈ V$, i.e. 
$$
\{f, gh\} = \{f, g\}h + g\{f, h\}.
$$

$\{ ·, ·\}$ called a *Poisson bracket* or *Poisson structure*.
<Spacer size="5px"/>

***Examples:*** $M = \R^3$, with Poisson bracket
$$
\{f, g\}(\xv) := \xv^T (\nabla f(\xv) \times \nabla g(\xv)).
$$

$M = \R^n \times \R^n$, with Poisson bracket
$$
\{f, g\} := \frac {\partial f}{\partial \xv}^T \frac {\partial g}{\partial \yv} - \frac {\partial g}{\partial \xv}^T \frac {\partial f}{\partial \yv}.
$$

---

### The Lie-Poisson bracket of the dual $\fg^*$ of a reflexive Lie algebra

Let $φ: \fg \to (\fg^*)^* \subset V = C^∞(\fg^*)\, {}$ denote the isomorphism (for reflexive $\fg$) 
$$
φ(ξ)(\mu) := \mu(ξ) \qquad \forall \ \xi \in \fg, \mu \in \fg^*.
$$

The *Lie-Poisson bracket* on $V$ is defined as
$$
\{f, g\}_\pm(\mu) := \pm \mu \lp \left [\fd f \mu(\mu), \fd g \mu(\mu) \right ] \rp,
$$
where $\, \fd f \mu: \fg^* → \fg\, {}$ is given by
$$
\fd f \mu(\mu) := φ^{-1}(d f(\mu)),
$$
i.e.
$$
\nu(\fd f \mu(\mu)) = \smallfrac {d \ }{d \epsilon} f (\mu + \epsilon \, \nu) |_{\epsilon = 0} \qquad \forall \ \mu, \nu \in \fg^*.
$$
<Spacer size="1px"/>

In many applications, the $\pm$ sign is related to left or right trivialization of $T^*G$. 

<!--
---


$~$
*Note:* On function spaces, non-reflexivity is often due to integration by parts: 
inner products typically involve integrals of pointwise inner products over the domain;
extraction of $\, \fd f \mu\,$ from the directional derivative involves integration by parts,
which introduces boundary terms.
$~$
Rather than verifying 'bare hands' that the Lie-Poisson bracket is a Poisson bracket,i
  we'll show (later!) that its ancestry guarantees that it is a Poisson bracket. 

Specifically, Lie-Poisson brackets arise from trivializations of $T^*G$, and the canonical symplectic structure on a contangent bundle.

-->

---

### Hamiltonian vector fields on finite dimensional Poisson manifolds

In finite dimensions, the space of derivations on $C^∞(M)$ is isomorphic to $\, \cXM$.

Hence $\ \{\, ·\,,\, ·\, \}\, {}$ determines a map $\ X: C^∞(M) \to \cXM\ {}$ satisfying
$$
X_h(f) = \{f, h \} 
$$
and
$$ 
(X_h(f))(p) = ({\cal L}_{X_h}f)(p) = df(p)(X_h(p))
$$
for all smooth functions $f$ and $h$.
<Spacer size="5px"/>

$X_h$ is called the *Hamiltonian vector field* associated to the *Hamiltonian* $h$, and the first order ODE
$$
\dot p = \smallfrac {dp}{dt} = X_h(p)
$$
is called *Hamilton's equation*. 

---

#### The Euler-Arnold equation is Hamiltonian

***Claim:*** Hamilton's equation for the Lie-Poisson structure on $\fg^*$ and Hamiltonian 
$$
h(\mu) := \half ||\mu||_{\fg^*}^2 = \half \mu \lp \mathbb{I}^{-1} \mu \rp. 
$$
is the [Euler-Arnold equation](euler-arnold)
$$
\dot \mu = \mp \ad^*_{\mathbb{I}^{-1} \mu} \mu.
$$
*Verify:* 

---

MOVE: The previous calculations show that Euler's equation is trivial if the inner product on $\fg^*$ is $\Ad^*$ invariant.

---

### Brackets to brackets

<!--  a skew-symmetric bilinear map 
$$
\{\, · \,, \,·\,\}: V × V → V, \qquad \text{where} \quad V = C^∞(M),
$$ 
such that $\ X_f \{\, ·\, , f \}\ {}$ is a derivation $\ \forall\ f ∈ V$ 
--> 

***Claim:*** A smooth manifold $M$ with 
a linear map $f \mapsto X_f$ from $C^∞(M)$ to $\calX(M)$ is a Poisson manifold <br/>with bracket $\{f, g\} = X_g(f)\quad  \Longleftrightarrow \quad f \mapsto X_f$ is a Lie algebra antihomorphism. 
<!--
i.e. 
$$
 X_{\{f,g\}}(h) = - [X_f , X_g](h) % \qquad \quad \forall \ k \in C^∞(M).
$$
for all $f, g, h \in C^∞(M)$.
-->

*Verify:* If $\{\, ·\, ,\, ·\, \}\, {}$ is a Poisson bracket, 
$$
\{\{g, h\}, f \} =  X_f(\{g, h\}) =  X_f(X_h(g))
$$
and the Jacobi identity $\ \ \Longrightarrow$
$$
\eqa{
0 &= \{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} \\
&= - \{\{g, h\}, f\} - \{g, \{f, h \}\} + \{\{g, f\}, h\} \\
&= - X_f(X_h(g)) - X_{\{f, h \}}(g) + X_h(X_f(g))\\
&= - [X_f , X_h](g) -  X_{\{f, h\}}(g).
}
$$
<!-- for all $\, f, g, h ∈ V$.-->
<Spacer size="5px"/>

On the other hand, if $f \mapsto X_f$ is a Lie algebra antihomorphism, $\{\, ·\, ,\, ·\, \}$ must be skew symmetric, and reversing the above chain of equalities shows $\{\, ·\, ,\, ·\, \}$ satisfies the Jacobi identity and hence is a Lie bracket.

---

### Another Lie algebra (anti)homomorphism

The isomorphism $φ: \fg \to (\fg^*)^*$ for reflexive $\fg$ 
$$
φ(ξ)(\mu) = \mu(ξ) \qquad \forall \ \xi \in \fg, \mu \in \fg^*.
$$
is a Lie algebra (anti)homorphism from $\fg$ to $C^∞(\fg^*)$ with the Lie-Poisson bracket: 
$$
φ([ξ,ζ]) = \pm \{φ(ξ), φ(ζ)\}_\pm.
$$

*Verify:* 
Linearity of $φ \ \ \Longrightarrow \ \ {\displaystyle \fd {φ(ξ)} \mu(\mu) = ξ}$.
<!-- Given $\xi \in \fg$ and $\mu, \nu \in \fg^*$,
$$
\eqa{
\nu(\fd {φ(ξ)} \mu(\mu)) &= \dep{φ(ξ)(\mu + \epsilon \, \nu)} \phantom{\sum}\\
&= \dep{(\mu + \epsilon \, \nu)(ξ)} \phantom{\sum}\\
&= \dep{\mu(ξ) + \epsilon \, \nu(ξ)} \phantom{\sum}\\
&= \nu(ξ)
}
$$
-->

Hence
$$
\eqa{
φ([ξ,ζ])(\mu) &= \mu([ξ,ζ]) \phantom{\sum} \\
&= \mu \lp\left [ \fd {φ(ξ)} \mu(\mu), \fd {φ(ζ)} \mu(\mu) \right ] \rp \phantom{\sum}\\
&= \pm \{φ(ξ), φ(ζ)\}_\pm(\mu).
}
$$

---

### Poisson maps

A map $\,φ: M → N\,{}$ between Poisson manifolds is a *Poisson map* if the pull-back
 $φ^∗: C^∞(N) → C^∞(M)\,{}$ preserves the Poisson brackets, i.e.
 $$
\{ f, g\}_N \circ φ = \{f \circ φ, g \circ φ \}_M \qquad \forall \ f, g ∈ C^∞(N).
$$
<Spacer size="5px"/>

***Claim:***  The time $t$ flow $\, {\cal F}_t\, {}$ of a Hamiltonian vector field $X_h$ is a Poisson map.

Informal exercise: Prove this. (Hints available if you want to tackle this.)

---

### Conserved quantities of Hamiltonian systems

***Claim:*** If $X_h$ is a Hamiltonian vector field and $\, \calF_t$ is the flow at time $t$ of $X_h$, 
$$
\calF_t^*h = h \circ \calF_t = h 
$$
for all $t$ for which $\, \calF_t\, {}$ is defined.

*Verify:* $\calF_0 = \text{id}_M, \ {}$ so the equality holds for $\ t = 0$.

Skew-symmetry of $\ \{\, ·\, , \,·\,\} \ \Longrightarrow \ \{h, h \} = 0, \ {}$

$\Longrightarrow$
$$
\eqa{
\smallfrac {d \ }{dt} \calF_t^*h &= X_h(h) \circ \calF_t \\
& = \{h, h \}\circ \calF_t \\
&= 0,
}
$$
so $\calF_t^*h = h$ for all $t$ for which the flow is defined.

---

### Casimirs: functions conserved by any Hamiltonian system

If $M$ is a Poisson manifold, $C \in C^∞(M)\, {}$ satisfying $\ \{C, \, \cdot \, \} = 0 \ {}$ (equivalently $X_C = 0$) is called a *Casimir*.

The space of Casimirs is the kernel of the map from $C^∞(M)$ to the space of derivations on $M$ determined by the Poisson bracket.

Casimirs are invariant under pullback by the flow $\calF_t$ of any Hamiltonian vector field on $M$:   
$$
C = \calF_t^* C = C \circ \calF_t.
$$
Hence trajectories of the Hamiltonian system remain on the intersections of level sets of Casimirs.
<Spacer size="5px"/>

*Verify:* In-class exercise.

<!-- PICK UP FROM HERE
---

***Example:***  Hamiltonian vector fields for Lie-Poisson brackets (of reflexive Lie algebras)
$~$
If $X_h^\pm$ denotes the Hamiltonian vector field determined by $\{·,·\}_\pm\ {}$ and $h \in C^∞(\fg^*), \ {}$ then
$$
X_h^\pm(\mu) = \mp \ad^*_{\fd h \mu(\mu)} \mu.
$$
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

***Claim:*** $\ \langle \ \, , \ \rangle_\fg\ \Ad$-invariant $\ \Longrightarrow \ \langle \ \, , \ \rangle_{\fg^*} \ \Ad^*$-invariant, and hence
$$
C(\mu) := \smallfrac 1 2 ||\mu||_{\fg^*}^2
$$
is a Casimir of the Lie-Poisson bracket.

---

*Verify*: $\, \langle \ , \ \rangle_\fg\, {}$ $\Ad$-invariant $\ \Longrightarrow$
$$\eqa{
(\Ad^*_g I \Ad_g(\xi))(\eta) &=  (I \Ad_g(\xi))(\Ad_g \eta) \\
&= \langle \Ad_g(\xi), \Ad_g \eta \rangle_\fg \\
&=  \langle \xi, \eta \rangle_\fg \\
&= (I \xi)(\eta)}
$$
for all $\, g \in G, \xi, \eta \in \fg \quad \Longrightarrow$
$$
\Ad^*_g \, I \, \Ad_g = I, \qquad \text{and hence} \qquad \Ad_g \, I^{-1} \, \Ad^*_g = I^{-1}
\qquad \forall \ g \in G.
$$
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

---

In particular, 
$$
0 = \langle \ad_\xi^* \mu , \mu \rangle_{\fg^*}
= \ad_\xi^* \mu(I^{-1}\mu).
$$
$~$
$$
C(\mu) =  \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu)
\qquad \Longrightarrow \qquad \fd C \mu(\mu) = I^{-1} \mu.
$$
$~$
Hence, letting $\, \xi = \fd f \mu(\mu),$
$$\eqa{
\pm \{f, C \}_\pm(\mu) &= \mu([\xi, I^{-1} \mu ]) \\
&= \ad_\xi^*\mu(I^{-1} \mu)\\
&= 0
}
$$
for all $\, f \in  C^∞(\fg^*)\ {}$ and $\, \mu \in \fg^*$.
$~$
Conservation of Casimirs implies that all trajectories of Hamiltonian vector fields are constrained to the level sets of any Casimirs.

---

## Euler's equation

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

<p align="center">
  <img alt="rigid_body_trajectories" src="/Images/rigid_body_trajectories.png" width="250" >
</p>

-->