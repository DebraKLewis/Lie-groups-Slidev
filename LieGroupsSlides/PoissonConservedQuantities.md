---
marp: true
paginate: true
---

### Recap from Thursday: Poisson manifolds
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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A *Poisson manifold* $(M, \{\ , \ \})$ is a smooth manifold $M$  such that
- $V = C^∞(M)$ is a Lie algebra, with Lie bracket $\{·, ·\}$, and
- for every $f \in V$, $\{f, \cdot \}: V \to V$ is a derivation, i.e.
$$
\{f, gh\} = \{f, g\}h + g\{f, h\} \qquad \qquad\forall \ g, h \in V.\phantom{x^\int}
$$

$~$
The *Lie-Poisson bracket* on $\fg^*$ is
$$
\{f, g\}_\pm(\mu) = \pm \mu \lp \left [\fd f \mu(\mu), \fd g \mu(\mu) \right ] \rp,
$$
where $\, \fd f \mu: \fg^* → \fg\, {}$ is determined by 
$$
\nu(\fd f \mu(\mu)) = \smallfrac {d \ }{d \epsilon} f (\mu + \epsilon \, \nu) |_{\epsilon = 0} \qquad \qquad \forall \ \mu, \nu \in \fg^*.\phantom{x_\int}
$$

---

### Hamiltonian vector fields on finite dimensional Poisson manifolds

$\ \{ ·, ·\}\, {}$ determines a map 
$$\eqa{
X: C^∞(M) &\to \calX(M)\\
h &\mapsto X_h
}
$$
satisfying
$$
{\cal L}_{X_h}f = \{f, h \} \qquad \forall \ f, h \in V.
$$
$~$
$X_h$ is called the *Hamiltonian vector field* associated to the *Hamiltonian* $h$.
$~$
$f \mapsto X_f$ is a Lie algebra homomorphism (or anti-hom, depending on sign conventions):
$$
[X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in V.
$$

---

***Example. Lie-Poisson brackets***

The Hamiltonian vector field $X_h$ determined by the Lie-Poisson bracket satisfies
$$\eqa{
 d f(\mu)(X_h(\mu)) &=\smallfrac {d \ }{dt} f(\calF_t(\mu))|_{t = 0}\\
&= \{f, h\}_\pm(\mu) \\
&= \pm \mu \lp \left [\fd f \mu(\mu), \fd h \mu(\mu) \right ] \rp\\
&= \mp \ad^*_{\fd h \mu(\mu)} \mu\lp \fd f \mu(\mu) \rp \\
&= \mp d f(\mu)\lp \ad^*_{\fd h \mu(\mu)} \mu \rp,
}
$$
so 
$$
X_h(\mu) = \mp \ad^*_{\fd h \mu(\mu)} \mu.
$$

---

***Flows of Lie-Poisson Hamiltonian vector fields preserve coadjoint orbits***

The *coadjoint action* of $G$ on $\fg^*$ is
$$
g \cdot \mu = \Ad_{g^{-1}}^* \mu.
$$
$g^{-1}, \ {}$ rather than $g$ is needed for a left action, because of the dual map.
$~$
Identifying $T_\mu \fg^*$ with $\fg^*, \ {}$ the associated infinitesimal generators are determined by
$$\eqa{
(\xi_{\fg^*}(\mu))(\eta) &= \dep{\Ad_{\exp(\epsilon \, \xi)^{-1}}^* \mu(\eta)} \\
&= \dep{\mu\lp \Ad_{\exp(- \epsilon \, \xi)}\eta \rp} \\
&= - \mu(\ad_\xi\eta) \\
&= (- \ad_\xi^* \mu)(\eta),
}
$$
so $\xi_{\fg^*}(\mu) = - \ad_\xi^* \mu$.

---

Hence 
$$
T_\mu (G \cdot \mu) = \{ \xi_{\fg^*}(\mu) : \xi \in \fg \} = \{ \ad_\xi^* \mu : \xi \in \fg \},
$$
and the Hamiltonian vector fields
$$
X_h(\mu) = \mp \ad^*_{\fd h \mu(\mu)} \mu
$$ 
determined by the Lie-Poisson bracket take values in $T_\mu (G \cdot \mu)$. 

Hence the flows of the Hamiltonian vector fields preserve the coadjoint orbits.
$~$

***Example:*** $G = SO(3, \R)$, with $\mathfrak{so}(3, \R) \approx (\R^3, \times)$.

$\Ad_{g^{-1}}(\mu) = g \, \mu$, so the coadjoint orbits are spheres centered at the origin. 

$$
X_h(\mu) = \pm \mu \times \nabla h(\mu). 
$$

---

### Poisson maps

A map $\,φ: M → N\,{}$ between Poisson manifolds is a *Poisson map* if 
 $$
\{ f, g\}_N \circ φ = \{f \circ φ, g \circ φ \}_M \qquad \forall \ \ f, g ∈ C^∞(N).
$$
$~$
The time $t$ flow $\, {\cal F}_t\, {}$ of a Hamiltonian vector field $X_h$ is a Poisson map.
$~$
If $X_h$ is a Hamiltonian vector field and $\, {\cal F}_t: M \to M\, {}$ is the time $t$ flow of $X_h, \ {}$ 
$$
h \circ {\cal F}_t = h. \phantom{x_\int} 
$$

*Verify:* ${\cal F}_0 = \text{id}_M, \ {}$ so the equality holds for $\ t = 0$.

Skew-symmetry of $\ \{ \ , \ \} \ \Longrightarrow \ \{h, h \} = 0 \ \Longrightarrow \ \ {}$ 
$$
\smallfrac {d \ }{dt} h \circ {\cal F}_t = {\mathcal L}_{X_h}h \circ {\cal F}_t 
= \{h, h \}\circ {\cal F}_t 
= 0.
$$

---

### Casimirs

$C \in C^∞(M)\, {}$ is called a *Casimir* if the following equivalent conditions are satisfied:
- $\ \{\ ·\ , C \} = 0 \ {}$ 
- $\ X_C = 0, \ {}$
- $\ C$ is preserved by the flow of any Hamiltonian vector field, i.e. for any $h \in C^∞(M)$, 
$${\cal L}_{X_h} C = 0.$$
$~$
The space of Casimirs is the kernel of the map from $C^∞(M)$ to $\calX(M)$ determined by the Poisson structure on $M$.

Casimirs in this sense are a special case of a more general algebraic concept of Casimirs.

"We" say/write Casimir, but Hamilton*ian*. Naming conventions are inconsistent.

---


***Example:*** An $\Ad$-invariant inner product on $\fg$ determines a Casimir of the Lie-Poisson bracket.

An inner product $\, \langle \ \, , \ \rangle_\fg\, {}$ on $\fg$ induces an isomorphism $\, I: \fg \to \fg^*$
$$
(I \xi)(\eta) = \langle \xi , \eta \rangle \qquad \forall \ \xi, \eta \in \fg,
$$

and an associated inner product $\, \langle \ \,, \ \rangle_{\fg^*}\, {}$ on $\fg^*$,
$$
\langle \mu , \nu \rangle_{\fg^*} = \langle I^{-1} \mu, I^{-1} \nu \rangle_{\fg}
= \mu(I^{-1} \nu).
$$

$\, \langle \ , \ \rangle_\fg\, {}$ $\Ad$-invariant $\ \Longrightarrow$
$$\eqa{
(\Ad^*_g I \Ad_g(\xi))(\eta) &=  (I \Ad_g(\xi))(\Ad_g \eta) \\
&= \langle \Ad_g(\xi), \Ad_g \eta \rangle_\fg \\
&=  \langle \xi, \eta \rangle_\fg \\
&= (I \xi)(\eta)}\phantom{x_{\int_\int}}
$$

---

$\Longrightarrow\qquad \Ad^*_g \, I \, \Ad_g = I$ 

$
%\Ad^*_g \, I \, \Ad_g = I, \qquad \text{and hence} \qquad 
\Longrightarrow \qquad \Ad_g \, I^{-1} \, \Ad^*_g = I^{-1}
\qquad \forall \ g \in G. \phantom{x^{\int^\int}}
$
$~$
Hence
$$\eqa{
\langle \Ad_g^* \mu , \Ad_g^* \nu \rangle_{\fg^*}
&= \Ad_g^* \mu(I^{-1} \, \Ad^*_g \nu) \\
&= \mu(I^{-1} \nu)\\
&= \langle \mu , \nu \rangle_{\fg^*}.
}
$$

It follows that $\ \langle \ \, , \ \rangle_{\fg^*}\ {}$ is $\ad$-invariant, i.e.
$$
0  =\langle \ad_\xi^* \mu , \nu \rangle_{\fg^*} + \langle  \mu , \ad_\xi^*\nu \rangle_{\fg^*} 
%= \nu (I^{-1} \ad_\xi^* \mu + \ad_\xi I^{-1} \mu)
$$
for all $\ \xi \in \fg, \ \mu, \nu \in \fg^*.\ {}$ 

---

Taking $\ \nu = \mu\ {}$ gives
$$\eqa{
0 &= \langle \ad_\xi^* \mu , \mu \rangle_{\fg^*}\\
&= \ad_\xi^* \mu(I^{-1}\mu) \\
&= - \ad_{I^{-1}\mu}^* \mu(\xi) 
}
$$
for all $\xi \in \fg,\ {}$ so $\ \ \ad_{I^{-1}\mu}^* \mu = 0.$
$~$
Finally, let
$$
C(\mu) =  \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu).
$$
$~$
$$
\fd C \mu(\mu) = I^{-1} \mu \qquad \Longrightarrow \qquad
\mp X_C(\mu) =  \ad^*_{\fd C \mu(\mu)} \mu = 0.
$$

---

### The Arnold-Euler equation (Euler's equations)

If we drop the assumption of $\Ad \ G$ invariance of the inner product on $\fg$, we typically obtain a nontrivial Hamiltonian system
$$
\dot \mu = X_h(\mu) = \mp \ad^*_{I^{-1} \mu} \mu
$$
on $\fg^*$, with Hamiltonian
$$
h(\mu) := \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu). 
$$
$~$
This system is known as *Euler's equation* in the historical cases 

- Free rigid body motion: $G = SO(3, \R)$, with $\mathfrak{so}(3, \R)$ identified with $(\R^3, \times)$

- Incompressible ideal fluids: $G = \text{Diff}_\text{vol}(M)$, with algebra $\ \calX(M)$.

---

In the context of more general Lie groups, it is known as the *Arnold-Euler equation*.
$~$
Arnold's development of key geometric and analytic properties of such systems led to important new results for well known PDEs.

- Burgers’ equation ($\text{Diff}_\text{vol}(M)$), and 
- the Korteweg-de Vries equation (Virasoro-Bott group), 

both with the right invariant $L_2$  metric, are two well known PDEs that satisfy Arnold-Euler equations. 
$~$
$~$
$~$
$~$

---

***The free rigid body: $G = SO(3, \R)$***

A rigid body $\, {\cal B},\ {}$ determines the *inertia tensor*
$$
I = (\text{trace} \, E) \idm_3 - E \qquad \text{for} \qquad 
E = \int_B \xv \xv^T d^3 \xv.
$$

$\mu\ {}$ and $\ \Omega:= I^{-1} \mu\ {}$ are the *body angular momentum* and *body angular velocity*. 
Here the adjective "body" indicates $\lozenge = L$.)

The rigid body equations are
$$
\dot g = g \widehat \Omega \sands \dot \mu = \ad^*_\Omega \mu = \mu \times \Omega, \qquad \text{i.e.} \ \ I \dot \Omega = (I \Omega) \times \Omega.
$$
$~$
$\mu_0 \ {}$ is an equilibrium of Euler's equation 
$\qquad \qquad \Longleftrightarrow \ \mu_0\ {}$ is a eigenvector of $I^{-1} \ \Longleftrightarrow \Omega_0\ {}$ is an eigenvector of $E$. 

---

### Geodesics and the Arnold-Euler equations

Recall: A *Riemannian manifold* is a smooth manifold $M$ for which each tangent fiber $T_p M$ is equipped with an inner product $\langle \ \, , \ \rangle_p, \ {}$ and the inner products vary smoothly. 
$~$
Given a curve $\gamma: (a, b) \to M$, 
$$
\text{length} \, \gamma = \int_a^b |\gamma'(t)|_{\gamma(t)} dt.
$$

Applying the calculus of variations to the length function yields a second order ODE, called the *geodesic equation* for $\gamma$. 
$~$
On a sufficiently small scale, the solutions are *geodesics*, shortest paths between their endpoints. 

---

If our manifold is a Lie group with a left (resp. right) invariant Riemannian structure, we can skip over all of the variational machinery:  

$g: (a, b) \to G$ satisfies the geodesic equation $\ \ \Longleftrightarrow \ \ \ {}$ 
$$
\mu(t) := I \xi(t), \qquad \text{where} \ \ \ \xi(t) := (d_1 \lozenge_{g(t)})^{-1} \dot g(t),
$$
satisfies the Arnold-Euler equation
$$
\dot \mu = \mp \ad^*_\xi \mu,
$$
where the sign is determined by $\lozenge = L, R$.
$~$
We'll approach the relationship via calculus of variations $\ \longrightarrow \ {}$ Lagrangian mechanics $\ \longrightarrow \ {}$ the canonical symplectic structure on a cotangent bundle 
$\ \longrightarrow \ {}$ the induced Poisson bracket on $\ G \times \fg^* \approx T^*G \ \longrightarrow \ {}$Lie-Poisson brackets. 

---

***Very special case:*** $\ \fg = so(3, \R) \approx (\R^3, \times)$

Assume that the given inner product on $\fg \approx \R^3$ is not $\Ad$-invariant, i.e. not rotation invariant. 

Equivalently, $I$ is not a multiple of the identity matrix. 
$~$
Conservation of $h \ \Longrightarrow \ {}$ trajectories of Euler's equation lie on spheres with respect to the norm determined by $I$. 
These "spheres" are ellipsoids.
$~$
The Euclidean inner product is rotation invariant, and the adjoint action on $\fg^* \approx \R^3$ is rotations, so the square of the Euclidean norm is a Casimir. 

Hence trajectories of Euler's equation also lie on Euclidean spheres. 

---

The intersections of these surfaces determine the trajectories $\mu(t)$ up to direction of travel.
$~$
![h:225](Images/blankSpace.png)![h:325](Images/blankSpace.png)  ![rigid body trajectories h:375](Images/rigid_body_trajectories.png)
$~$
The process of computing $g(t)$ given $\mu(t)$ is called *reconstruction*.