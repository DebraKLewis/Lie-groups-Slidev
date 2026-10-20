### Lie-Poisson flows preserve coadjoint orbits

The *coadjoint action* of $G$ on $\fg^*$ is
$$
g \cdot \mu = \Ad_{g^{-1}}^* \mu.
$$
$g^{-1}, \ {}$ rather than $g$ is needed for a left action, because of the dual map.
$~$
Identifying $T_\mu \fg^*$ with $\fg^*, \ {}$ the associated infinitesimal generators are determined by
$$
\eqa{
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

## The Arnold-Euler equation (Euler's equations)

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

## The free rigid body: $G = SO(3, \R)$

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

## Geodesics and the Arnold-Euler equations

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

### Conservation laws determine the trajectories of the Euler equation for $\ \fg = so(3, \R) \approx (\R^3, \times)$

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

<p align="center">
  <img alt="rigid_body_trajectories" src="/Images/rigid_body_trajectories.png" width="250" >
</p>

The process of computing $g(t)$ given $\mu(t)$ is called *reconstruction*.