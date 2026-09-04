---
marp: true
paginate: true
---

## Poisson manifolds 

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\ft}{\mathfrak{t}}
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
\newcommand{\cXM}{{\cal X}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\fd}[2]{{\smallfrac {\delta #1}{\delta #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\ker}{\text{ker} \, }
\newcommand{\tr}{\text{trace}}
\newcommand{\derg}{\text{Der}(\fg)}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A *Poisson manifold* $(M, \{\ , \ \})$ is a smooth manifold $M$ equipped with a skew-symmetric bilinear map 
$$\{·, ·\}: V × V → V, \qquad \text{where} \quad V = C^∞(M),
$$ 
satisfying the *derivation property*
$$
\{f, gh\} = \{f, g\}h + g\{f, h\}
$$
and the Jacobi identity
$$
\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0 
$$
for all $\, f, g, h ∈ V$. 

$\{ ·, ·\}\, {}$ is called a *Poisson bracket* or *Poisson structure*.
$~$
$(V, \{ ·, ·\})\, {}$ is a Lie algebra, and $\ \{f, · \}\ {}$ is a derivation $\ \forall\ f ∈ V$.

---

## The Lie-Poisson bracket of the dual $\fg^*$ of a reflexive Lie algebra

Let $φ: \fg \to (\fg^*)^* \subset V = C^∞(\fg)\, {}$ denote the isomorphism (for reflexive $\fg$) 
$$
φ(ξ)(\mu) := \mu(ξ) \qquad \forall \ \xi \in \fg, \mu \in \fg^*.
$$
$~$
The *Lie-Poisson bracket* on $V$ is defined as
$$
\{f, g\}_\pm(\mu) = \pm \mu \lp \left [\fd f \mu(\mu), \fd g \mu(\mu) \right ] \rp,
$$
where $\, \fd f \mu: \fg^* → \fg\, {}$ is given by
$$
\fd f \mu(\mu) := φ^{-1}(d f(\mu)),
$$
i.e.
$$
\nu(\fd f \mu(\mu)) = \smallfrac {d \ }{d \epsilon} f (\mu + \epsilon \, \nu) |_{\epsilon = 0} \qquad \forall \ \mu, \nu \in \fg^*.
$$
$~$

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

In finite dimensions, the space of derivations on $C^∞(M)$ is isomorphic to $\, \cXM$.

Hence $\ \{ ·, ·\}\, {}$ determines a map 
$$
X: C^∞(M) \to \cXM
$$
satisfying
$$
X_h(f) = \{f, h \} \qquad \forall \ f, h \in V,
$$
where  $\cXM$ is the space of smooth vector fields on $M$ and 
$$ (X_h(f))(p) = ({\cal L}_{X_h}f)(p) = df(p)(X_h(p)).$$
$~$
$X_h$ is called the *Hamiltonian vector field* associated to the *Hamiltonian* $h$, and the ODE
$$
\dot p = \smallfrac {dp}{dt} = X_h(p)
$$
is called *Hamilton's equation*. 

---

### Brackets to brackets

***Claim:***
$$
1. \qquad \{·, ·\} \ \text{is a Poisson bracket}\quad  \Longleftrightarrow \quad [X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in V,
$$
$\quad {}$ where $\, [X_f , X_h] \, {}$ is the Lie bracket of the vector fields $X_f$ and $X_h$, i.e.
$~$
$$
[X_f , X_h](k) = X_f(X_h(k)) - X_h(X_f(k)) \qquad \quad \forall \ k \in V.
$$
$~$
$$
2. \qquad \qquad \qquad\qquad\{φ(ξ), φ(ζ)\}_\pm = \pm φ([ξ,ζ]) \qquad \forall \ ξ,ζ \in \fg,\qquad\qquad\qquad\qquad\qquad
$$
$\quad {}$ where $\ φ(ξ)(\mu) = \mu(ξ) \qquad \forall \ \mu \in \fg^*$.
$~$
*Verify:* 
$$
\{\{g, h\}, f \} =  X_f(\{g, h\}) =  X_f(X_h(g)) \qquad \Longrightarrow
$$

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
$~$
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
$~$
*Verify:* ${\cal F}_0 = \text{id}_M, \ {}$ so the equality holds for $\ t = 0$.

Skew-symmetry of $\ \{ ·, ·\} \ \Longrightarrow \ \{h, h \} = 0, \ {}$ and hence
$$
\smallfrac {d \ }{dt} {\cal F}_t^*h = X_h(h) \circ {\cal F}_t = \{h, h \}\circ {\cal F}_t = 0.
$$
$~$
$C \in C^∞(M)\, {}$ satisfying $\ \{· , C \} = 0 \ {}$ is called a *Casimir*, and satisfies
- $X_C = 0, \ {}$
- ${\cal F}_t^* C = C\ {}$ for the flow $\, {\cal F}_t\ {}$ of any Hamiltonian vector field on $M$.

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

### Euler's equation

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

![h:325](Images/blankSpace.png)![h:375](Images/blankSpace.png)  ![rigid body trajectories h:325](Images/rigid_body_trajectories.png)
